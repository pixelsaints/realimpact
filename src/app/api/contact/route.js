import { NextResponse } from "next/server";
import { Resend } from "resend";

const requiredFields = ["name", "email", "message"];

const sanitize = (value) =>
  String(value || "")
    .trim()
    .replace(/[<>]/g, "");

export async function POST(request) {
  try {
    const body = await request.json();

    if (body.company) {
      return NextResponse.json({ ok: true });
    }

    const form = {
      name: sanitize(body.name),
      email: sanitize(body.email),
      phone: sanitize(body.phone),
      service: sanitize(body.service),
      message: sanitize(body.message),
    };

    const missingField = requiredFields.find((field) => !form[field]);
    if (missingField) {
      return NextResponse.json(
        { message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { message: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const to = process.env.CONTACT_TO_EMAIL || "mail@realimpact.tv";
    const from =
      process.env.RESEND_FROM_EMAIL || "Real Impact <onboarding@resend.dev>";

    await resend.emails.send({
      from,
      to,
      replyTo: form.email,
      subject: `New enquiry from ${form.name}`,
      text: [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || "Not provided"}`,
        `Service: ${form.service || "Not selected"}`,
        "",
        "Project Details:",
        form.message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>New Real Impact enquiry</h2>
          <p><strong>Name:</strong> ${form.name}</p>
          <p><strong>Email:</strong> ${form.email}</p>
          <p><strong>Phone:</strong> ${form.phone || "Not provided"}</p>
          <p><strong>Service:</strong> ${form.service || "Not selected"}</p>
          <p><strong>Project Details:</strong></p>
          <p>${form.message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "Unable to send your enquiry right now." },
      { status: 500 }
    );
  }
}

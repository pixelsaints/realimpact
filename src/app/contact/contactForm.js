"use client";

import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "Broadcast Equipment Rental",
  message: "",
  company: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Unable to send your enquiry.");
      }

      setForm(initialForm);
      setStatus({
        type: "success",
        message: "Thanks. Your enquiry has been sent to the Real Impact team.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        className="contact-form__trap"
        type="text"
        name="company"
        value={form.company}
        onChange={updateField}
        tabIndex="-1"
        autoComplete="off"
      />

      <div className="contact-form__grid">
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={updateField}
            autoComplete="name"
            required
          />
        </label>

        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={updateField}
            autoComplete="email"
            required
          />
        </label>
      </div>

      <div className="contact-form__grid">
        <label>
          <span>Phone</span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={updateField}
            autoComplete="tel"
          />
        </label>

        <label>
          <span>Service</span>
          <select name="service" value={form.service} onChange={updateField}>
            <option>Broadcast Equipment Rental</option>
            <option>OB Van and Flypack</option>
            <option>RF and Wireless Camera Solutions</option>
            <option>Live Streaming</option>
            <option>System Integration</option>
            <option>Specialized Equipment</option>
          </select>
        </label>
      </div>

      <label>
        <span>Project Details</span>
        <textarea
          name="message"
          value={form.message}
          onChange={updateField}
          rows="7"
          required
        />
      </label>

      <div className="contact-form__footer">
        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Enquiry"}
          <span className="icon">
            <IoArrowForward className="front" />
            <IoArrowForward className="back" />
          </span>
        </button>

        {status.message ? (
          <p className={`contact-form__status is-${status.type}`}>
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}

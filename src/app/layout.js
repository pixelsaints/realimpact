import "./styles/tailwind.css";
import "./styles/style.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageEnter from "@/components/transitions/PageEnter";

export const metadata = {
  metadataBase: new URL("https://realimpacttv.netlify.app/"),

  title: "Real Impact - Broadcast Equipment Services & Production",
  description: "Real Impact is India's Broadcast Equipment Rental and Production company, managed by a team of professionals who have considerable experience in producing world-class events, with acknowledged acumen in the creative, technical, and production departments.",
  icons: "/favicon.png",

  openGraph: {
    title: "Real Impact - Broadcast Equipment Services & Production",
    description: "Real Impact is India's Broadcast Equipment Rental and Production company, managed by a team of professionals who have considerable experience in producing world-class events, with acknowledged acumen in the creative, technical, and production departments.",
    url: "https://realimpacttv.netlify.app/",
    siteName: "Real Impact",
    images: [
      {
        url: "/images/ogg-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Real Impact",
    description: "Real Impact is India's Broadcast Equipment Rental and Production company, managed by a team of professionals who have considerable experience in producing world-class events, with acknowledged acumen in the creative, technical, and production departments.",
    images: ["/images/ogg-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Stack+Sans+Notch:wght@200..700&family=Stack+Sans+Text:wght@200..700&family=Stick+No+Bills:wght@200..800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">
        <PageEnter />
        <Header />
        <div className="main-wrapper">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

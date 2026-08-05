import "./styles/tailwind.css";
import "./styles/style.scss";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageEnter from "@/components/transitions/PageEnter";

export const metadata = {
  metadataBase: new URL("https://realimpact.tv/"),

  title: "Real Impact | End-to-End Broadcast & Production Solutions",
  description: "Real Impact is a globally trusted broadcast and live production company, recognised for delivering exceptional productions where precision, creativity and technical excellence matter most. We work alongside broadcasters, sporting organisations, brands and event producers to create live experiences that engage audiences and set new standards for production excellence.",
  icons: "/favicon.png",

  openGraph: {
    title: "Real Impact | End-to-End Broadcast & Production Solutions",
    description: "Real Impact is a globally trusted broadcast and live production company, recognised for delivering exceptional productions where precision, creativity and technical excellence matter most. We work alongside broadcasters, sporting organisations, brands and event producers to create live experiences that engage audiences and set new standards for production excellence.",
    url: "https://realimpact.tv/",
    siteName: "Real Impact",
    images: [
      {
        url: "/images/ogg-image.png",
        width: 1200,
        height: 630,
        alt: "End-to-End Broadcast & Production Solutions",
        type: "image/jpeg",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Real Impact | End-to-End Broadcast & Production Solutions",
    description: "Real Impact is a globally trusted broadcast and live production company, recognised for delivering exceptional productions where precision, creativity and technical excellence matter most. We work alongside broadcasters, sporting organisations, brands and event producers to create live experiences that engage audiences and set new standards for production excellence.",
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

        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}

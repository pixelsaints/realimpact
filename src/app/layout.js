import "@/styles/tailwind.css";
import "@/styles/style.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageEnter from "@/components/transitions/PageEnter";
import CatalogDrawer from "@/components/ui/CatalogDrawer";
import { DrawerProvider } from "@/context/DrawerContext";

export const metadata = {
  metadataBase: new URL("https://realimpact.netlify.app/"),

  title: "Cosmedd Healthcare | Global Pharmaceutical & Wellness Export Solutions",
  description: "Cosmedd Healthcare is a global export-oriented company delivering pharmaceutical formulations, nutraceuticals, APIs, medical devices, and wellness solutions worldwide.",

  openGraph: {
    title: "Cosmedd Healthcare | Global Healthcare Export Solutions",
    description: "Trusted sourcing and export of pharmaceutical, nutraceutical, wellness, and healthcare products across global markets.",
    url: "https://realimpact.netlify.app/",
    siteName: "Cosmedd",
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
    title: "Cosmedd",
    description: "Trusted sourcing and export of pharmaceutical, nutraceutical, wellness, and healthcare products across global markets.",
    images: ["/images/ogg-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body >
        <DrawerProvider>
          <PageEnter />
          <Header />
          <main className="wrapper">
            {children}
            <Footer />
          </main>
          <CatalogDrawer />
        </DrawerProvider>
      </body>
    </html>
  );
}

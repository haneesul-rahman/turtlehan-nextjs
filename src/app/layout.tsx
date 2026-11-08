import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/site/pages";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TURTLEHAN | Empowering Business. Enriching Lives.",
    template: "%s | TURTLEHAN",
  },
  description: "Integrated business solutions across India and the UAE.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

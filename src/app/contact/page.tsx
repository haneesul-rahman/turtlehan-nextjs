import type { Metadata } from "next";

import { ContactPage } from "@/components/site/pages";

export const metadata: Metadata = { title: "Contact Us" };

export default function Page() {
  return <ContactPage />;
}

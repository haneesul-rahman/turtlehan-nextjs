import type { Metadata } from "next";

import { CSRPage } from "@/components/site/pages";

export const metadata: Metadata = { title: "CSR Initiatives" };

export default function Page() {
  return <CSRPage />;
}

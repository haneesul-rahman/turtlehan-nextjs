import { AboutSection } from "@/components/sections/about";
import { ClientSection } from "@/components/sections/client";
import { ContactSection } from "@/components/sections/contact";
import { CSRSection } from "@/components/sections/csr";
import { LeadershipSection } from "@/components/sections/leadership";
import { ServicesSection } from "@/components/sections/services";

export default function Page() {
  return (
    <>
      <AboutSection />
      <ServicesSection />
      <ClientSection />
      <CSRSection />
      <LeadershipSection />
      <ContactSection />
    </>
  );
}

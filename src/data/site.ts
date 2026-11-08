export const images = {
  hero: "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?auto=format&fit=crop&w=1800&q=86",
  meeting:
    "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=1400&q=82",
  people:
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=82",
  property:
    "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1400&q=82",
  hospitality:
    "https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&w=1400&q=82",
  travel:
    "https://images.unsplash.com/photo-1532968899863-5b52ef155913?auto=format&fit=crop&w=1400&q=82",
  csr: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?auto=format&fit=crop&w=1400&q=82",
  csrAlt:
    "https://images.unsplash.com/photo-1567122087721-47b09b61e1d1?auto=format&fit=crop&w=1400&q=82",
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  overview: string;
  offerings: string[];
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "business-consulting",
    number: "01",
    title: "Business Consulting",
    eyebrow: "Strategy & Advisory",
    description:
      "Practical insight and considered direction for businesses navigating opportunity and change.",
    image: images.meeting,
    overview:
      "We work alongside organisations to clarify priorities, strengthen operations and pursue sustainable opportunities with confidence.",
    offerings: [
      "Business advisory",
      "Strategic planning",
      "Business development",
      "Operational consulting",
    ],
    benefits: [
      "Clearer strategic direction",
      "Structured decision-making",
      "Solutions shaped around your context",
    ],
  },
  {
    slug: "manpower-supply",
    number: "02",
    title: "Manpower Supply",
    eyebrow: "People & Workforce",
    description:
      "Responsive workforce solutions built around the operational needs of each organisation.",
    image: images.people,
    overview:
      "Our manpower division supports organisations with structured recruitment, staffing and workforce coordination services.",
    offerings: [
      "Recruitment solutions",
      "Staffing services",
      "Workforce management",
      "Manpower supply",
    ],
    benefits: [
      "A responsive staffing approach",
      "Role-aligned workforce support",
      "Consistent coordination",
    ],
  },
  {
    slug: "property-management",
    number: "03",
    title: "Property Management",
    eyebrow: "Places & Assets",
    description:
      "Attentive property support that helps residential and commercial spaces perform at their best.",
    image: images.property,
    overview:
      "We coordinate the day-to-day details that support well-managed, dependable residential and commercial properties.",
    offerings: [
      "Residential property management",
      "Commercial property management",
      "Maintenance coordination",
      "Property-related services",
    ],
    benefits: [
      "Dependable oversight",
      "Streamlined coordination",
      "Care for long-term property value",
    ],
  },
  {
    slug: "hospitality-solutions",
    number: "04",
    title: "Hospitality Solutions",
    eyebrow: "Service & Experience",
    description:
      "Thoughtful operational solutions that elevate service, consistency and guest experience.",
    image: images.hospitality,
    overview:
      "Our hospitality practice brings a service-led perspective to hotel, resort and guest experience operations.",
    offerings: [
      "Hotel management",
      "Resort management",
      "Hospitality operations",
      "Guest experience management",
    ],
    benefits: [
      "Guest-first thinking",
      "Operational consistency",
      "Service standards tailored to the property",
    ],
  },
  {
    slug: "tourism-travels",
    number: "05",
    title: "Tourism & Travels",
    eyebrow: "Journeys & Discovery",
    description:
      "Well-considered travel planning and tourism solutions for seamless, memorable journeys.",
    image: images.travel,
    overview:
      "We help simplify travel through attentive planning, coordinated support and tourism-focused services.",
    offerings: [
      "Travel-related services",
      "Tourism solutions",
      "Travel planning",
      "Journey coordination",
    ],
    benefits: ["Simplified planning", "Responsive assistance", "Travel shaped around your needs"],
  },
  {
    slug: "csr-initiatives",
    number: "06",
    title: "CSR Initiatives",
    eyebrow: "Purpose & Community",
    description:
      "Purpose-led initiatives supporting communities and people affected by autism and polio-related disabilities.",
    image: images.csr,
    overview:
      "We believe responsible business should contribute to stronger, more inclusive communities through thoughtful partnerships and programmes.",
    offerings: [
      "Community development",
      "Social responsibility programmes",
      "Autism support initiatives",
      "Polio-related disability support",
    ],
    benefits: [
      "Community-centred action",
      "Partnership-led programmes",
      "A focus on dignity and inclusion",
    ],
  },
];

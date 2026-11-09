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
  education:
    "https://images.unsplash.com/photo-1687709348710-05314eea5476?auto=format&fit=crop&w=1400&q=82",
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
  enquiryLabel?: string;
  offeringsLabel?: string;
  benefitsLabel?: string;
};

export const services: Service[] = [
  {
    slug: "business-setup-management",
    number: "01",
    title: "Business Setup & Management",
    eyebrow: "End-to-End Solution",
    description:
      "From setting up your business to running its operations, we manage the entire journey.",
    image: images.meeting,
    overview:
      "We help organisations establish and operate their businesses from the ground up. From infrastructure development and workforce recruitment to day-to-day operational management, we provide end-to-end support throughout the business launch and growth journey, helping build sustainable and profitable operations.",
    offerings: [
      "Business planning and establishment",
      "Infrastructure and facility setup",
      "Workforce recruitment and deployment",
      "Operational setup and management",
      "Performance monitoring and optimisation",
      "Transition to a stable, profitable operation",
    ],
    benefits: [
      "Start operations without managing every setup complexity yourself.",
      "Have infrastructure, people and processes coordinated under one partner.",
      "Reduce the challenges of establishing a new business.",
      "Maintain operational efficiency during the initial growth phase.",
      "Build a foundation for long-term sustainability and profitability.",
    ],
    enquiryLabel: "Enquire about business setup",
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
    slug: "stay-reservations",
    number: "04",
    title: "Stay Reservations",
    eyebrow: "Kannur Stays",
    description: "Discover your perfect stay in Kannur.",
    image: images.hospitality,
    overview:
      "Explore a selection of welcoming homestays and resorts in Kannur, and let us help you find and book the right place for your getaway.",
    offerings: ["Sea Breeze, Kannur", "Kadale, Kannur", "Roba, Kannur", "Seashell, Kannur"],
    benefits: [
      "Explore available stays",
      "Find the right accommodation",
      "Enquire about availability",
      "Assistance with reservations",
    ],
    enquiryLabel: "Enquire about a stay",
    offeringsLabel: "Our stays",
    benefitsLabel: "How we help",
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
    slug: "college-admissions",
    number: "06",
    title: "College Admissions",
    eyebrow: "Education & Guidance",
    description:
      "Clear, student-focused guidance for navigating college choices and the admissions journey.",
    image: images.education,
    overview:
      "We support students and families through the practical stages of identifying suitable study opportunities and preparing applications.",
    offerings: [
      "College admissions guidance",
      "Course and institution selection",
      "Application support",
      "Documentation coordination",
    ],
    benefits: [
      "A clearer admissions journey",
      "Student-focused guidance",
      "Structured application support",
    ],
  },
];

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

export type NavigationLink = {
  href: string;
  label: string;
};

export const navigationLinks: NavigationLink[] = [
  { href: "#services", label: "Our Services" },
  { href: "#clients", label: "Our Clients" },
  { href: "#csr", label: "Our Motto" },
  { href: "#team", label: "Our Team" },
];

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
      "Reliable manpower solutions connecting skilled and unskilled workers with reputed and verified companies across the UAE and South India.",
    image: images.people,
    overview:
      "Our manpower division provides recruitment and staffing solutions for reputed and verified companies across the UAE, Kerala, Karnataka and Tamil Nadu. We cater to both educated and non-educated candidates, supplying skilled and unskilled labour to meet diverse industry and operational requirements.",
    offerings: [
      "Skilled and unskilled labour supply",
      "Educated and non-educated workforce recruitment",
      "Domestic and overseas recruitment",
      "Staffing and workforce management",
      "Recruitment for verified and reputed companies",
      "Workforce coordination and placement support",
    ],
    benefits: [
      "Opportunities with reputed and verified companies",
      "Recruitment across the UAE and South India",
      "Workforce solutions for diverse skill levels",
      "Reliable recruitment and placement support",
    ],
  },
  {
    slug: "real-estate",
    number: "03",
    title: "Real Estate",
    eyebrow: "Land & Commercial Properties",
    description:
      "Real estate solutions connecting buyers and investors with farmland, commercial land and commercial properties across South India.",
    image: images.property,
    overview:
      "Our real estate division offers property sourcing and assistance across Kerala, Karnataka and Tamil Nadu. We deal in agricultural and farmland, commercial land and commercial complexes, helping clients explore suitable property opportunities based on their requirements.",
    offerings: [
      "Agricultural and farmland",
      "Commercial land",
      "Commercial complexes",
      "Property buying and selling assistance",
      "Real estate consultation",
    ],
    benefits: [
      "Property opportunities across three South Indian states",
      "Options for agricultural and commercial investments",
      "Assistance throughout the property search process",
      "Solutions tailored to individual and business requirements",
    ],
  },

  {
    slug: "stay-reservations",
    number: "04",
    title: "Stay Reservations",
    eyebrow: "Family & Group Stays",
    description:
      "Safe and comfortable homestay and resort reservations for families, school trips and college industrial visits across Kerala and Karnataka.",
    image: images.hospitality,
    overview:
      "We help families, schools and colleges find and book suitable homestays and resorts across Kerala and Karnataka. Whether it is a family holiday, school excursion or college industrial visit (IV), we coordinate accommodation options that prioritise safety, comfort and a pleasant stay experience.",
    offerings: [
      "Family-friendly homestays and resorts",
      "Accommodation for school trips",
      "Stay arrangements for college industrial visits (IV)",
      "Group accommodation bookings",
      "Homestay and resort reservations",
      "Booking assistance and coordination",
    ],
    benefits: [
      "Accommodation options across Kerala and Karnataka",
      "Suitable stays for families and educational groups",
      "Focus on safety, comfort and convenience",
      "Assistance with group bookings and reservations",
    ],
    enquiryLabel: "Enquire about a stay",
    offeringsLabel: "Our accommodation services",
    benefitsLabel: "Why book through us",
  },

  {
    slug: "tourism-travels",
    number: "05",
    title: "Tourism & Travels",
    eyebrow: "Journeys & Discovery",
    description:
      "Explore the world with thoughtfully curated travel packages, flexible last-minute plans and unique heritage experiences across Malabar.",
    image: images.travel,
    overview:
      "We offer travel packages and tourism services across destinations worldwide, catering to planned holidays as well as last-minute travel requirements. We also feature a dedicated Malabar City Heritage experience, helping travellers explore the rich history, culture and heritage of the Malabar region. Bookings for heritage tours and travel packages can be conveniently made through us.",
    offerings: [
      "Worldwide travel packages",
      "Domestic and international tours",
      "Last-minute travel planning and arrangements",
      "Malabar City Heritage and historical tours",
      "Cultural and heritage travel experiences",
      "Travel bookings and coordination",
    ],
    benefits: [
      "Travel options across destinations worldwide",
      "Flexible arrangements for last-minute plans",
      "Unique historical and cultural experiences in Malabar",
      "Convenient booking assistance through us",
      "Travel solutions tailored to individual preferences",
    ],
  },

  {
    slug: "college-admissions",
    number: "06",
    title: "College Admissions",
    eyebrow: "Education & Guidance",
    description:
      "Helping students explore college opportunities and navigate the admission process in Bangalore with confidence.",
    image: images.education,
    overview:
      "We guide students and families through the college admission journey in Bangalore, helping them explore suitable colleges and courses, understand eligibility requirements, and navigate applications and documentation.",
    offerings: [
      "College and university selection guidance",
      "Course selection and career guidance",
      "College admission assistance in Bangalore",
      "Eligibility and admission process guidance",
      "Application and documentation support",
      "Admission process coordination",
    ],
    benefits: [
      "Guidance to identify suitable colleges",
      "Better understanding of admission requirements",
      "Simplified application process",
      "Student-focused admission assistance",
    ],
  },
];

export type Client = {
  name: string;
  location: string;
  category: string;
  image?: string;
};

export const clients: Client[] = [
  {
    name: "Green Leaf Hotel",
    location: "Ooty",
    category: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Barbeque Grand Restaurant",
    location: "Ooty",
    category: "Restaurant",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Fish Palace",
    location: "Mysore",
    category: "Food & Beverage",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Meat House (Sira Fish)",
    location: "Mysore",
    category: "Food & Beverage",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Fresh Fetch",
    location: "Bangalore",
    category: "Food & Beverage",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Tawa Fin",
    location: "Bangalore",
    category: "Restaurant",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Tamak Restaurant",
    location: "Bangalore",
    category: "Restaurant",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Coco Fresh",
    location: "Bangalore",
    category: "Food & Beverage",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Beijing Bites",
    location: "Bangalore",
    category: "Restaurant",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
  },
];

export type TeamMember = {
  name: string;
  image: string;
  role: string;
  focus: string;
};

export const team: TeamMember[] = [
  {
    name: "Muhammed Haneesul Rahman",
    image: "/images/team/hanees.png",
    role: "Leadership",
    focus: "Corporate Direction",
  },
  {
    name: "Abhilash Menon",
    image: "/images/team/abhilash.png",
    role: "Division Leadership",
    focus: "Business Operations",
  },
];

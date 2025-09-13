export interface TeamMember {
  name: string;
  role: string;
  image: string;
  id: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "ogechi",
    name: "Ogechi Ogobnnaya",
    role: "Founder & Visioneer",
    image: "/images/ogechi.jpeg",
  },
  {
    id: "dipo",
    name: "Dipo Koku",
    role: "Patron",
    image: "/images/PD New.jpg",
  },
  {
    id: "achenyo",
    name: "Achenyo Idachaba-Obaro",
    role: "Matron",
    image: "/images/achenyo-idachaba-obaro.png",
  },
  {
    id: "ediri",
    name: "Ediri Ose-Ediale",
    role: "Mentor",
    image: "/images/ediri-ose-ediale.png",
  },
  {
    id: "tosin",
    name: "Tosin Togude",
    role: "Community Host & Contributor",
    image: "/images/Tosin.jpeg",
  },
  {
    id: "yemi",
    name: "Yemi Alaram",
    role: "Community Manager & Contributor",
    image: "/images/yemi.jpeg",
  },
  {
    id: "gbemisola",
    name: "Gbemisola Adeduro",
    role: "Program Director & Contributor",
    image: "/images/mayowa.jpeg",
  },
  {
    id: "precious",
    name: "Precious Obinna",
    role: "Content Lead & Contributor",
    image: "/images/Precious.jpeg",
  },
  {
    id: "teniola",
    name: "Teniola Aina",
    role: "Content Manager & Contributor",
    image: "/images/Teniiola.jpeg",
  },
];

export interface CorePillar {
  title: string;
  description: string;
  image: string;
  id: string;
}

export const corePillars: CorePillar[] = [
  {
    id: "healing",
    title: "Healing",
    description:
      "Restoring hearts through safe spaces and meaningful conversations.",
    image: "/images/healing.jpg",
  },
  {
    id: "growth",
    title: "Growth",
    description:
      "Equipping women with resources to discover and live out their purpose.",
    image: "/images/growth.jpg",
  },
  {
    id: "community",
    title: "Community",
    description: "Building a supportive sisterhood that empowers and uplifts.",
    image: "/images/community.jpg",
  },
  {
    id: "faith-purpose",
    title: "Faith & Purpose",
    description:
      "Redefining womanhood through faith, wholeness, and purpose-driven living.",
    image: "/images/faith.jpg",
  },
];

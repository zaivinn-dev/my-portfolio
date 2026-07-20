export interface Project {
  title: string;
  stack: string[];
  description: string;
  screenshots?: string[];
  subtitle?: string;
  links?: { label: string; href: string }[];
}

export interface ExperienceItem {
  role: string;
  institution: string;
  duration?: string;
  current?: boolean;
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

export interface MembershipItem {
  name: string;
  link?: string;
}


export interface TechCategory {
  title: string;
  items: string[];
}

export interface PortfolioData {
  profile: {
    fullName: string;
    location: string;
    headline: string;
    subHeadline: string;
    avatarInitials: string;
    scheduleLink: string;
    blogLink: string;
    avatarUrl?: string;
  };
  about: string[];
  techStack: TechCategory[];
  experiences: ExperienceItem[];
  projects: Project[];
  certifications: CertificationItem[];
  memberships: MembershipItem[];
  speakingText: string;
  galleryImages: string[];
  socialLinks: {
    linkedin: string;
    github: string;
    email: string;
    instagram: string;
  };
}

export const portfolioData: PortfolioData = {
  profile: {
    fullName: "Marvin M. Fegi",
    location: "Rodriguez, Rizal, Philippines",
    headline: "IoT Embedded System | Machine Learning",
    subHeadline: "BS Computer Engineering Graduate — Colegio de Montalban",
    avatarInitials: "MF",
    scheduleLink: "https://calendly.com/fegimarvin/30min",
    blogLink: "https://dev.to",
    avatarUrl: "/photo.jpg",
  },
  about: [
    "Highly motivated and detail-oriented Computer Engineering graduate from Colegio de Montalban with a strong foundation in hardware-software integration. Proven technical capability in developing IoT-based automation systems using ESP32 microcontrollers, building responsive web applications, and implementing secure databases. Proficient in networking, system troubleshooting, and scripting, and backed by industry-recognized certifications from Google and Cisco.",
  ],
  techStack: [
    {
      title: "Frontend & Mobile",
      items: ["HTML5", "CSS3", "Bootstrap", "Android Studio (Java/Kotlin)"]
    },
    {
      title: "Frameworks",
      items: ["Laravel Framework", "ReactJS", "Next.js", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend",
      items: ["Python", "PHP", "MySQL", "Supabase"]
    },
    {
      title: "IoT & Embedded Systems",
      items: ["ESP32 Microcontrollers", "Arduino IDE", "Raspberry Pi", "Sensors & Actuators Integration", "Hardware Prototyping"]
    },
    {
      title: "Machine Learning & Tools",
      items: ["Machine Learning (Scikit-Learn/Pandas/NumPy)", "Computer Vision (OpenCV)", "Git", "GitHub"]
    }
  ],
  experiences: [
    {
      role: "Machine Learning",
      institution: "OpenCV · Python · Dataset Training",
      duration: "2026",
      current: true
    },
    {
      role: "Android Studio",
      institution: "Mobile Application Development",
      duration: "2024"
    },
    {
      role: "AutoCAD",
      institution: "Engineering Design & Drafting",
      duration: "2023"
    },
    {
      role: "Object-Oriented Programming (OOP)",
      institution: "Payroll System Project",
      duration: "2023"
    },
    {
      role: "C++",
      institution: "Fundamentals of Systems Programming",
      duration: "2022"
    },
    {
      role: "BS Computer Engineering",
      institution: "Colegio de Montalban",
      duration: "2022"
    },
    {
      role: "HTML · CSS · JavaScript",
      institution: "Web Development Fundamentals",
      duration: "2020"
    },
    {
      role: "ICT",
      institution: "AICS",
      duration: "2020"
    }
  ],
  projects: [
    {
      title: "Multi-Modal Access Locker System with Object Detection and Web-Based Monitoring",
      stack: ["Python", "HTML", "PostgreSQL", "IoT", "4th Year Thesis"],
      description: "A thesis project implementing a smart locker system that utilizes object detection to identify users and authorize access. Includes a web-based monitoring dashboard for real-time usage tracking and access logs.",
      screenshots: [
        "/images/screenshot.png",
        "/images/screenshot2.png",
        "/images/screenshot3.png",
        "/images/screenshot4.png",
        "/images/screenshot5.jpg"
      ]
    }
  ],
  certifications: [
    {
      title: "NCII Computer System Servicing",
      issuer: "TESDA"
    }
  ],

  memberships: [
    { name: "Analytics & Artificial Intelligence Association of the Philippines (AAP)" },
    { name: "Philippine Software Industry Association" }
  ],
  speakingText: "Available for speaking at events about software development and emerging technologies.",
  galleryImages: [
    "/images/photo_1.jpg",
    "/images/photo_2.jpg",
    "/images/photo_3.jpg",
    "/images/photo_4.jpg",
    "/images/photo_5.jpg",
    "/images/photo_6.jpg",
    "/images/photo_7.jpg",
    "/images/photo_8.jpg",
    "/images/photo_9.jpg"
  ],
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/fegi-marvin-m-aa53b936a/",
    github: "https://github.com/zaivinn-dev",
    email: "mailto:zaivinn56@gmail.com",
    instagram: "https://instagram.com"
  }
};
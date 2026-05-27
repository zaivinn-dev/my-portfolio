export interface Project {
  title: string;
  stack: string[];
  description: string;
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
    headline: "Machine Learning & IoT Embedded System",
    subHeadline: "BS Computer Engineering Graduate — Colegio de Montalban",
    avatarInitials: "MF",
    scheduleLink: "https://calendly.com/d/cvr2-qkn-8fk/client",
    blogLink: "https://dev.to",
    avatarUrl: "https://scontent.fmnl9-7.fna.fbcdn.net/v/t39.30808-6/481273849_1674133450148721_4898358854647540873_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=104&ccb=1-7&_nc_sid=fe5ecc&_nc_eui2=AeEH_GfdFPh72hz6fOwonhjICv0zzXd0dzIK_TPNd3R3MqV5wuPvKiZ-6En2wTBiSYpSZ1X1TUDwMf8EA3WI_puQ&_nc_ohc=__8PqLXWeTwQ7kNvwEM6pb7&_nc_oc=Adpzr5uk9hkWuv7a13Z2Lk4Q8Laf7MvPy9x5GId2E6CPOQTLr-1XSWWxYOHjV1VwqYA&_nc_zt=23&_nc_ht=scontent.fmnl9-7.fna&_nc_gid=2fFwSvtDhUgs2yh6GlPQIQ&_nc_ss=7b2a8&oh=00_Af55WQreWQ0KtKseq3RcCNqTovbZPcF4t5eiiZ7_chOeGA&oe=6A1C7D4C",
  },
  about: [
    "I am a Computer Engineering graduate from Colegio de Montalban with a passion for bridging the gap between hardware and software. My expertise spans developing responsive web applications and designing IoT systems, integrating microcontrollers like the ESP32 with full-stack web interfaces.",
    "With a solid foundation in frontend technologies (HTML, CSS, JavaScript, Tailwind CSS, Bootstrap) alongside backend frameworks (PHP, Laravel, Python), I focus on building secure, scalable, and user-centric solutions. I am actively involved in industry communities and continuously explore emerging tech like machine learning to solve real-world challenges."
  ],
  techStack: [
    {
      title: "Frontend & Mobile",
      items: ["HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap", "Android Studio (Java/Kotlin)"]
    },
    {
      title: "Backend & Systems",
      items: ["Python", "PHP", "Laravel Framework", "C++", "C", "MySQL", "PostgreSQL", "MongoDB", "Object-Oriented Programming (OOP)"]
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
      role: "BS Computer Engineering",
      institution: "Colegio de Montalban",
      duration: "2026",
      current: true
    },
    {
      role: "Hello World",
      institution: "Wrote my first line of code",
      duration: "2020"
    }
  ],
  projects: [
    {
      title: "Multi-Modal Access Locker System with Object Detection and Web-Based Monitoring",
      stack: ["Python", "HTML", "PostgreSQL", "IoT", "4th Year Thesis"],
      description: "A thesis project implementing a smart locker system that utilizes object detection to identify users and authorize access. Includes a web-based monitoring dashboard for real-time usage tracking and access logs.",
    }
    , {
      title: "SafeValve: ESP32-Based Home Automated Gas Valve Control with Earthquake and Gas Leak Detection",
      stack: ["HTML", "CSS", "JavaScript", "IoT", "3rd Year Capstone"],
      description: "An IoT safety system utilizing an ESP32 microcontroller to automatically shut off household gas valves when gas leaks or seismic activity are detected. Features a web interface for status monitoring.",
    }
    , {
      title: "Event Management System",
      stack: ["Android Studio", "MySQL", "2nd Year"],
      description: "A mobile application that allows users to create, view, and manage school and community events.",
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
    "https://scontent.fmnl9-2.fna.fbcdn.net/v/t1.15752-9/675748026_942085125283595_6499311147627584701_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeF4leZTjAU6Jn3lLsChogVIFiakLdu8jVkWJqQt27yNWdyjsTaOprFNblwbMUtTwO0K5WeRvZVGgWByfj08M1hT&_nc_ohc=kT2DU9pp4VEQ7kNvwFXjuJR&_nc_oc=Adq0s9AFwSB792UB10FF4_Ki5ZUldZ808L7FDSosBid9NqZX0EUKi2Ixrogv7IDP7bE&_nc_zt=23&_nc_ht=scontent.fmnl9-2.fna&_nc_ss=7b2a8&oh=03_Q7cD5QHnGmCA2e1Xr2TQjDQjeu--NKfSm1DQFECk_WXRn7MhLg&oe=6A3E25B2",
    "https://scontent.fmnl9-4.fna.fbcdn.net/v/t1.15752-9/682436292_1504785981040210_3878603667010371451_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGuKDFdFG19J59gj5LdtIOiZq_eR556g0Fmr95HnnqDQTEFJAxjEtwKjKZjwO5xkuh0OU6BRjk__TQxhBtfXv35&_nc_ohc=1zYLlWnJ5OIQ7kNvwEWV81t&_nc_oc=AdoN9HR5spkAW3oyWaBuDr4UChATCkk5oMjhIXDBUuH4-c0zBOk15mMt-S27oUPNJ5w&_nc_zt=23&_nc_ht=scontent.fmnl9-4.fna&_nc_ss=7b2a8&oh=03_Q7cD5QFtXjbVx3W4-UB-CdlAUEDq1JLrlm9cQuO9blShLET33w&oe=6A3D712F",
    "https://scontent.fmnl9-3.fna.fbcdn.net/v/t1.15752-9/661282089_946478798240754_7145089147781124502_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHGaZhFXnDUiBUr9v6NnFeIvcQT4B6vVVm9xBPgHq9VWbzutp2dM4OI0HkhGYlTiMo2hwliKULIw3GgUjBLD5Z9&_nc_ohc=veq7U0OEjQUQ7kNvwGRjBw4&_nc_oc=Adq_ZF3WvfTgB6KyHevlRSIoWiJi4WYIXwuCEJXJaAFYbQpWFKhquWZlS0L2f5qrr2M&_nc_zt=23&_nc_ht=scontent.fmnl9-3.fna&_nc_ss=7b2a8&oh=03_Q7cD5QGIOR_5RvsPKgMZz1hwsugbaDbKU2cVjn23n-lPtJulWw&oe=6A3D5D9A",
    "https://scontent.fmnl9-6.fna.fbcdn.net/v/t1.15752-9/675557531_1889726675070446_1464807126987828529_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeETI9WxACcJeoK9fAggX9yXIbxQ3RJzYmMhvFDdEnNiY6lXSaQvW3b_rgoRvVPL2B1uJ1ej_xCh4EibdkeEhV7K&_nc_ohc=fSOpU6rXmUkQ7kNvwFDUn_W&_nc_oc=Adr4m8GRZRaB1xzvlgcyqRL6uu86eRPBEUYD5WGDadnLsKQgG_lg3xb5NlOQ5cBHP-Y&_nc_zt=23&_nc_ht=scontent.fmnl9-6.fna&_nc_ss=7b2a8&oh=03_Q7cD5QHr_1FKafEr91kZfeRwAMqrXcB7VcnAdxcHXxCsYJ8k6A&oe=6A3D5AA8",
    "https://scontent.fmnl9-6.fna.fbcdn.net/v/t1.15752-9/670093201_971580002124037_9119337374343101934_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEEbc-Zz-RuLFreNcg7IfXnGm9JoBB2uigab0mgEHa6KLnFg0ClWirDAKaljBrGJVVWud5ZVQWQusQxgnZvCFSF&_nc_ohc=wnJ2wAs1hesQ7kNvwFtLcvy&_nc_oc=AdpfSxvp2oamWgcwLBCxa07CrkwUlPZAQID2s7u_qzqvWOw6YH7Za5h92t7rzIBZVNk&_nc_zt=23&_nc_ht=scontent.fmnl9-6.fna&_nc_ss=7b2a8&oh=03_Q7cD5QHoN4q6SVQUZ7ZmItn2-mo4eJLWmk6xZJ1MljmmCSCE2w&oe=6A3D8035"
  ],
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/fegi-marvin-m-aa53b936a/",
    github: "https://github.com/zaivinn-dev",
    email: "mailto:zaivinn56@gmail.com",
    instagram: "https://instagram.com"
  }
};
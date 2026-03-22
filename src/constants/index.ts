import { Book, ChartArea, Factory, Component } from "lucide-react";

export const NavLinks = [
  { label: "Home", href: "/" },
  { label: "STEM Racing", href: "/stem_racing" },
  { label: "Team", href: "/team" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Community", href: "/community" },
];

export const EngineeringExcellence = [
  { label: "Precision Bearings" },
  { label: "Optimized Geometry" },
  { label: "Dimensional Accuracy" },
];

export const FlashCardsList = [
  {
    logo: Component,
    title: "Design & Engineering",
    content:
      "Students design and engineer every componwent of a formula-style car, balancing performance, aerodynamics, and precision.",
  },
  {
    logo: Factory,
    title: "Manufacturing & Testing",
    content:
      "Teams manufacture their designs and test them under real-world constraints to ensure accuracy and reliability.",
  },
  {
    logo: ChartArea,
    title: "Performance Analysis",
    content:
      "Data-driven decisions guide optimization for speed, efficiency, and consistency on the track.",
  },
  {
    logo: Book,
    title: "Hands-On Learning",
    content:
      "STEM Racing delivers real engineering experience through design, build, testing, and competition.",
  },
];

export const TeamData = [
  {
    name: "Vaaris Chitkara",
    skill:
      "Coordinating team workflows and managing design progress efficiently",
    role: "Team Manager and Design Engineer",
  },
  {
    name: "Rivaan Ravi Gupta",
    skill:
      "Manufacturing precise components with focus on accuracy and quality",
    role: "Manufacturing Engineer, Graphic Designer, and Resource Manager",
  },
  {
    name: "Aarya Goyal",
    skill:
      "Clear and professional communication within the team and externally",
    role: "Graphic Designer and Resource Manager",
  },
  {
    name: "Rishaan Dhingra",
    skill: "Managing sponsor communication and resource coordination",
    role: "Sponsorship Manager and Resource Manager",
  },
  {
    name: "Samar Pratap Choudry",
    skill: "Developing consistent visual branding and design layouts",
    role: "Graphic Designer",
  },
  {
    name: "Niara Bahl",
    skill: "Optimizing CAD models for performance and efficiency",
    role: "Design Engineer",
  },
];

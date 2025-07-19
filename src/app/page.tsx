import Image from "next/image";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/mahmoudismail9488",
    icon: "/globe.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mahmoud-ismail-1910b1109/",
    icon: "/globe.svg",
  },
  {
    name: "Khamsat",
    url: "https://khamsat.com/user/mahmoudismail7",
    icon: "/globe.svg",
  },
  {
    name: "Mostaql",
    url: "https://mostaql.com/u/Mahmoudismail7",
    icon: "/globe.svg",
  },
  {
    name: "Upwork",
    url: "https://upwork.com/freelancers/mahmoudismail17",
    icon: "/globe.svg",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/201020634063",
    icon: "/globe.svg",
  },
];

const skills = [
  "Flutter & Dart",
  "FlutterFlow",
  "Supabase",
  "Firebase",
  "PostgreSQL",
  "Python (Web Scraping & Automation)",
  "MERN Stack (MongoDB, Express, React, Node.js)",
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 py-8">
      <main className="w-full max-w-3xl flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <Image
            src="/next.svg"
            alt="Mahmoud Ismail Logo"
            width={120}
            height={30}
            className="mb-2"
            priority
          />
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Mahmoud Ismail</h1>
          <p className="text-lg sm:text-xl text-foreground/80 max-w-xl">
            Software Engineer | Mobile App Developer | Automation Specialist
          </p>
          <p className="text-base text-foreground/60 max-w-xl">
            Experienced in building modern mobile apps with Flutter, Dart, FlutterFlow, Supabase, Firebase, PostgreSQL, and web automation with Python. Also skilled in MERN stack development.
          </p>
        </div>
        <section className="w-full flex flex-col items-center gap-6">
          <h2 className="text-xl font-semibold mb-2">Skills & Technologies</h2>
          <ul className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="bg-primary text-foreground px-4 py-2 rounded-lg text-sm shadow border border-border"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
        <section className="w-full flex flex-col items-center gap-6">
          <h2 className="text-xl font-semibold mb-2">Connect with Me</h2>
          <ul className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-accent rounded-lg hover:bg-primary transition-colors border border-border text-foreground"
                >
                  <Image src={link.icon} alt={link.name} width={18} height={18} />
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="mt-12 text-xs text-foreground/40 text-center w-full">
        &copy; {new Date().getFullYear()} Mahmoud Ismail. All rights reserved.
      </footer>
    </div>
  );
}

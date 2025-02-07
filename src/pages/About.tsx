
import { Navigation } from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
            <p className="text-lg text-muted-foreground">
              A passionate developer creating meaningful digital experiences.
            </p>
          </div>
          <div className="prose prose-gray max-w-none">
            <p>
              Welcome to my portfolio! I'm a creative developer focused on building
              beautiful and functional web applications. With a keen eye for design
              and a love for clean code, I strive to create memorable digital
              experiences.
            </p>
            <h2>Skills & Expertise</h2>
            <ul>
              <li>Frontend Development (React, TypeScript, Tailwind CSS)</li>
              <li>UI/UX Design</li>
              <li>Responsive Web Development</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;


import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  pdfUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "A revolutionary web application",
    pdfUrl: "/project1.pdf",
  },
  {
    id: 2,
    title: "Project Two",
    description: "An innovative mobile app",
    pdfUrl: "/project2.pdf",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A groundbreaking platform",
    pdfUrl: "/project3.pdf",
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCardClick = (index: number) => {
    if (isAnimating || activeIndex === index) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleClose = () => {
    setIsAnimating(true);
    setActiveIndex(null);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <Navigation />
      <main className="flex-1 container mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-12">Projects</h1>
          <div className="card-stack relative h-[600px]">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`
                  project-card absolute inset-0 p-6 bg-card rounded-lg border shadow-lg
                  ${activeIndex === null ? "cursor-pointer" : ""}
                  ${
                    activeIndex === index
                      ? "animate-card-reveal"
                      : activeIndex !== null
                      ? "opacity-0"
                      : ""
                  }
                  ${isAnimating ? "pointer-events-none" : ""}
                `}
                style={{
                  zIndex: projects.length - index,
                  transform: `translateZ(${-index * 10}px)`,
                }}
                onClick={() => handleCardClick(index)}
                initial={false}
                animate={{
                  scale: activeIndex === index ? 1 : 0.95,
                  translateX: activeIndex === index ? "-50%" : "0%",
                  opacity: activeIndex === null || activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-semibold">{project.title}</h2>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                    {activeIndex === index && (
                      <button
                        onClick={handleClose}
                        className="p-2 hover:bg-secondary rounded-full transition-colors"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                  {activeIndex === index && (
                    <div className="flex-1 bg-muted rounded-md overflow-hidden">
                      <iframe
                        src={project.pdfUrl}
                        className="w-full h-full"
                        title={project.title}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Projects;

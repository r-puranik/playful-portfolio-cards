
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
            Explore my projects and learn more about my journey in creative development.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/projects"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Projects
            </Link>
            <Link
              to="/about"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              About Me
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

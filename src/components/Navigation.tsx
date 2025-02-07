
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-lg font-medium tracking-tight hover:opacity-80 transition-opacity"
        >
          Portfolio
        </Link>
        <div className="flex gap-8">
          <Link 
            to="/about" 
            className={`relative transition-colors hover:text-primary/80 ${
              location.pathname === "/about" ? "text-primary" : "text-primary/60"
            }`}
          >
            About Me
          </Link>
          <Link 
            to="/projects" 
            className={`relative transition-colors hover:text-primary/80 ${
              location.pathname === "/projects" ? "text-primary" : "text-primary/60"
            }`}
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

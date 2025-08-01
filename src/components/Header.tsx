import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4 text-white">KEERTHANA BETHI</h1>
        <p className="text-xl mb-2 text-white/90">Computer Science & Machine Learning Engineer</p>
        <p className="text-lg mb-8 text-white/80">B.Tech Student | AI/ML Enthusiast | Problem Solver</p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-white/10 text-white border-white/20 hover:bg-white/20"
            asChild
          >
            <a href="mailto:bethikeerthana052004@gmail.com">
              <Mail className="w-4 h-4" />
              Email
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-white/10 text-white border-white/20 hover:bg-white/20"
            asChild
          >
            <a href="https://github.com/Keerthana-Bethi" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-white/10 text-white border-white/20 hover:bg-white/20"
            asChild
          >
            <a href="https://www.linkedin.com/in/keerthana-bethi/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-white/10 text-white border-white/20 hover:bg-white/20"
            asChild
          >
            <a href="tel:9030351358">
              <Phone className="w-4 h-4" />
              Call
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
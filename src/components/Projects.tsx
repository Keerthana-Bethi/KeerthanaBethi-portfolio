import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import objectRecognitionImg from "@/assets/object-recognition.jpg";
import diseasePredictionImg from "@/assets/disease-prediction.jpg";
import disasterIdentificationImg from "@/assets/disaster-identification.jpg";
import classRoutineImg from "@/assets/class-routine.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Object Recognition System",
      description: "Built a real-time object recognition tool using Python and OpenCV. Integrated pre-trained models for accurate multi-object detection via live camera feed. Focused on enhancing accuracy through preprocessing and image analysis techniques.",
      image: objectRecognitionImg,
      technologies: ["Python", "OpenCV", "Computer Vision", "Machine Learning"],
      githubLink: "https://github.com/Keerthana-Bethi",
      liveLink: "#",
      category: "AI/ML Project"
    },
    {
      title: "Disease Outbreak Prediction",
      description: "Built a machine learning model to predict disease outbreaks using health and environmental data, improving early detection and response capabilities for better public health management.",
      image: diseasePredictionImg,
      technologies: ["Machine Learning", "Python", "Data Analysis", "Health Informatics"],
      githubLink: "https://project-on-prediction-of-diseases.streamlit.app/",
      liveLink: "https://project-on-prediction-of-diseases.streamlit.app/",
      category: "Health Tech"
    },
    {
      title: "Disaster Identification from Social Media",
      description: "Developed a deep learning model using attention mechanisms to identify disasters from social media posts by integrating text and image data for accurate classification.",
      image: disasterIdentificationImg,
      technologies: ["Deep Learning", "NLP", "Computer Vision", "Social Media Analytics"],
      githubLink: "https://github.com/Keerthana-Bethi/disaster-identification-from-socialmedia-posts",
      liveLink: "#",
      category: "Deep Learning"
    },
    {
      title: "Automatic Class Routine Generation",
      description: "Built an automatic class routine generator using scheduling algorithms. Optimized timetables based on faculty and room availability for efficient resource management.",
      image: classRoutineImg,
      technologies: ["Algorithms", "Optimization", "Scheduling", "Python"],
      githubLink: "https://github.com/Keerthana-Bethi/Automatic-Optimize-Class-Routine-Generation",
      liveLink: "#",
      category: "Optimization"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-primary">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  
                  {project.liveLink !== "#" && (
                    <Button 
                      variant="professional" 
                      size="sm" 
                      asChild
                    >
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const internships = [
    {
      title: "Virtual Intern - Infosys Springboard",
      company: "Infosys Springboard",
      duration: "16 Feb, 2025 - 10 Apr, 2025",
      location: "Virtual",
      description: "Infosys Springboard Internship 5.0",
      project: "Object Recognition System | Jan 2025",
      achievements: [
        "Built a real-time object recognition tool using Python and OpenCV",
        "Integrated pre-trained models for accurate multi-object detection via live camera feed",
        "Focused on enhancing accuracy through preprocessing and image analysis techniques"
      ],
      skills: ["Python", "OpenCV", "Computer Vision", "Machine Learning"]
    },
    {
      title: "AI/ML Intern",
      company: "TechSaksham, a joint CSR initiative by Microsoft & SAP",
      duration: "16 Jan, 2025 - 21 Feb, 2025",
      location: "Implemented by Edunet Foundation",
      description: "Prediction of Disease Outbreaks",
      project: "Machine Learning Model for Disease Prediction",
      achievements: [
        "Built a machine learning model to predict disease outbreaks",
        "Used health and environmental data for accurate predictions",
        "Improved early detection and response capabilities for public health management"
      ],
      skills: ["Machine Learning", "Python", "Data Analysis", "Health Informatics"]
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Professional Experience</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {internships.map((internship, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle className="text-primary mb-1">{internship.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-foreground">
                      {internship.company}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="shrink-0">
                    Current
                  </Badge>
                </div>
                
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {internship.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {internship.location}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-medium text-foreground mb-2">Project: {internship.project}</h4>
                  <p className="text-muted-foreground text-sm mb-3">{internship.description}</p>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-medium text-foreground mb-2">Key Achievements:</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {internship.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
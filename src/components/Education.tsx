import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech - Computer Science and Machine Learning",
      institution: "CMR Institute of Technology, Hyderabad",
      duration: "2022-2026",
      grade: "CGPA: 9.23 / 10",
      status: "Current",
      description: "Specializing in Computer Science with focus on Machine Learning and AI technologies"
    },
    {
      degree: "12th Grade - Intermediate",
      institution: "TWSREIS COE, Mulugu, Siddipet",
      duration: "2020-2022",
      grade: "Percentage: 94.60 / 100",
      status: "Completed",
      description: "Completed intermediate education with excellence in Mathematics and Science"
    },
    {
      degree: "10th Grade - Secondary Education",
      institution: "Z P High School Pamulaparthi, Siddipet",
      duration: "2020",
      grade: "BSET | Percentage: 95 / 10",
      status: "Completed",
      description: "Completed secondary education with outstanding academic performance"
    }
  ];

  const certifications = [
    "Data Structures and Algorithms Using Java",
    "Programming in Python",
    "AI Primer Certification",
    "Python Foundation",
    "AI-ML Virtual Internship"
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-primary mb-2">{edu.degree}</CardTitle>
                        <CardDescription className="text-foreground font-medium">
                          {edu.institution}
                        </CardDescription>
                      </div>
                      <Badge 
                        variant={edu.status === "Current" ? "default" : "secondary"}
                        className={edu.status === "Current" ? "bg-accent text-accent-foreground" : ""}
                      >
                        {edu.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {edu.grade}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Awards Section */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-primary">Awards & Scholarships</h4>
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-accent" />
                    <span className="font-medium">Reliance Foundation Scholarship</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Awarded for academic excellence and potential in technology
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
              <Award className="w-6 h-6" />
              Certifications
            </h3>
            
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-sm font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-accent-light rounded-lg">
                  <h5 className="font-medium text-foreground mb-2">Continuous Learning</h5>
                  <p className="text-sm text-muted-foreground">
                    Actively pursuing additional certifications in AI/ML, Deep Learning, and 
                    emerging technologies to stay current with industry trends.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
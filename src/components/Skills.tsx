import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const technicalSkills = [
    "Python", "Java", "Machine Learning", "Computer Vision", "OpenCV", 
    "Data Structures", "Algorithms", "AI/ML", "Deep Learning", 
    "Object Recognition", "Data Analysis", "Problem Solving"
  ];

  const tools = [
    "Git", "GitHub", "Jupyter Notebook", "TensorFlow", "PyTorch", 
    "Streamlit", "VS Code", "IntelliJ IDEA"
  ];

  const domains = [
    "Artificial Intelligence", "Machine Learning", "Computer Vision", 
    "Data Science", "Software Development", "Research"
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-center text-primary">Programming & Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-center text-primary">Tools & Frameworks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="text-sm">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-center text-primary">Domain Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {domains.map((domain) => (
                  <Badge key={domain} variant="secondary" className="text-sm">
                    {domain}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
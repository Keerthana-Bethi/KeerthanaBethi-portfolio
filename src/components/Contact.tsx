import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Phone, MapPin, Download } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bethikeerthana052004@gmail.com",
      href: "mailto:bethikeerthana052004@gmail.com",
      color: "text-red-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9030351358",
      href: "tel:9030351358",
      color: "text-green-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Keerthana-Bethi",
      href: "https://github.com/Keerthana-Bethi",
      color: "text-gray-700"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "keerthana-bethi",
      href: "https://www.linkedin.com/in/keerthana-bethi/",
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: "#",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground mb-6">
              I'm always interested in discussing new opportunities, innovative projects, and collaborations. 
              Feel free to reach out if you'd like to connect!
            </p>
            
            <Button 
              variant="gradient" 
              size="lg"
              className="mb-8"
              asChild
            >
              <a href="mailto:bethikeerthana052004@gmail.com">
                <Mail className="w-5 h-5" />
                Send Me an Email
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              
              return (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-6 h-6 ${contact.color}`} />
                      </div>
                      
                      <h3 className="font-semibold text-foreground mb-2">{contact.label}</h3>
                      
                      {contact.href !== "#" ? (
                        <a 
                          href={contact.href}
                          target={contact.href.startsWith("http") ? "_blank" : undefined}
                          rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <span className="text-sm text-muted-foreground">{contact.value}</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Card className="inline-block shadow-card">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <Download className="w-6 h-6 text-primary" />
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground">Download Resume</h3>
                    <p className="text-sm text-muted-foreground">Get a copy of my latest resume</p>
                  </div>
                  <Button variant="professional" size="sm">
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              "Innovation distinguishes between a leader and a follower." - Steve Jobs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
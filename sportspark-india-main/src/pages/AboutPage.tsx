import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Eye, 
  Users, 
  Brain,
  Cloud,
  Shield,
  Trophy,
  Heart,
  Zap,
  Globe,
  Award,
  TrendingUp
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  const values = [
    {
      icon: Target,
      title: "Democratization",
      description: "Making sports talent assessment accessible to every athlete in India, regardless of background or location"
    },
    {
      icon: Brain,
      title: "Innovation",
      description: "Leveraging cutting-edge AI and machine learning to revolutionize sports performance analysis"
    },
    {
      icon: Heart,
      title: "Inclusivity",
      description: "Creating opportunities for all athletes to showcase their talent and receive fair recognition"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Ensuring transparent, fair, and unbiased assessment through advanced anti-cheating technology"
    }
  ];

  const technologies = [
    { name: "Computer Vision AI", description: "Advanced video analysis and motion tracking" },
    { name: "Machine Learning", description: "Intelligent performance prediction and improvement suggestions" },
    { name: "Cloud Computing", description: "Scalable infrastructure for millions of users" },
    { name: "Blockchain", description: "Secure and immutable performance records" },
    { name: "Real-time Analytics", description: "Instant performance feedback and rankings" },
    { name: "Anti-Cheat Detection", description: "AI-powered fraud prevention and fair play" }
  ];

  const stats = [
    { number: "50+", label: "Sports Covered", icon: Trophy },
    { number: "10K+", label: "Active Athletes", icon: Users },
    { number: "500+", label: "Officials & Coaches", icon: Award },
    { number: "99.9%", label: "Uptime Reliability", icon: Zap }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="sports-badge mb-6">
            <Heart className="w-4 h-4 mr-2" />
            Our Mission
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Democratizing Sports Talent
            <span className="hero-gradient bg-clip-text text-transparent"> Assessment</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            We believe every athlete deserves a fair chance to showcase their talent. Our AI-powered platform 
            is revolutionizing how sports talent is discovered, assessed, and nurtured across India.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To democratize sports talent assessment in India by providing every athlete with access to 
                world-class AI-powered performance analysis, transparent rankings, and opportunities for 
                recognition regardless of their geographic or economic background.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-sports-blue" />
                  <span className="text-sm">Pan-India Coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-sports-green" />
                  <span className="text-sm">10K+ Athletes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-sports-orange" />
                  <span className="text-sm">50+ Sports</span>
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-accent" />
                  <span className="text-sm">AI-Powered</span>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-sports-green/10 rounded-xl flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-sports-green" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To become India's leading sports talent discovery platform, creating a future where merit 
                and talent shine through, supported by technology that ensures fairness, transparency, 
                and equal opportunity for all athletes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-sports-blue" />
                  <span className="text-sm">Continuous Growth</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-sports-green" />
                  <span className="text-sm">Fair Play Guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-sports-orange" />
                  <span className="text-sm">Innovation First</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-accent" />
                  <span className="text-sm">Athlete-Centric</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our mission to transform sports talent assessment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="sports-card group text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="sports-badge mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Powered by Technology
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on advanced AI/ML and scalable cloud technology to serve millions of athletes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="sports-card group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{tech.name}</h3>
                      <p className="text-muted-foreground text-sm">{tech.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Impact by Numbers
            </h2>
            <p className="text-xl text-muted-foreground">
              Our platform's growing impact on the sports community
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join the Sports Revolution
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Be part of India's most inclusive sports talent assessment platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" onClick={()=>navigate('/contact')}>
              <Users className="w-5 h-5 mr-2" />
              Join Our Community
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" onClick={()=>navigate('/contact')}>
              <Trophy className="w-5 h-5 mr-2" />
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
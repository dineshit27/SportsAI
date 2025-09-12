import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Brain, 
  Users, 
  BarChart3, 
  Medal, 
  Zap,
  Play,
  Download,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-sports.jpg";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const HomePage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const comingSoon = () => toast({ title: "Coming soon", description: "App downloads will be available shortly." });
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-5"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <Badge className="sports-badge mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Powered by AI Technology
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Democratizing Sports Talent Assessment in{" "}
                <span className="hero-gradient bg-clip-text text-transparent">
                  India
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Revolutionary AI-powered platform for comprehensive sports analysis, 
                community engagement, and talent recognition across all levels of Indian sports.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="hero" size="lg" className="group" onClick={comingSoon}>
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download App
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="group" onClick={() => navigate('/features')}>
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Free for Athletes
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  AI-Powered Analysis
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Real-time Rankings
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 hero-gradient rounded-2xl blur-3xl opacity-20 animate-pulse-glow"></div>
              <img
                src={heroImage}
                alt="Athletes in action showcasing diverse Indian sports"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Transform Your Sports Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of sports assessment with our comprehensive platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Brain,
                title: "AI Video Analysis",
                description: "Advanced AI analyzes your technique and provides instant feedback",
                color: "text-sports-blue"
              },
              {
                icon: Trophy,
                title: "Multi-Level Rankings",
                description: "Compete from zonal to national level with transparent rankings",
                color: "text-sports-green"
              },
              {
                icon: Users,
                title: "Community Platform",
                description: "Connect with athletes, coaches, and sports enthusiasts",
                color: "text-sports-orange"
              },
              {
                icon: Medal,
                title: "Gamified Progress",
                description: "Earn badges, medals, and achievements as you improve",
                color: "text-accent"
              }
            ].map((feature, index) => (
              <Card key={index} className="sports-card group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 ${feature.color} bg-current/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10K+", label: "Active Athletes", icon: Users },
              { number: "500+", label: "Sports Officials", icon: Trophy },
              { number: "50+", label: "Sports Covered", icon: Medal },
              { number: "1M+", label: "Videos Analyzed", icon: BarChart3 }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold hero-gradient bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <stat.icon className="w-4 h-4" />
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Elevate Your Sports Performance?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of athletes already using our platform to reach their potential
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="group" onClick={() => navigate('/login?role=athlete')}>
              <Trophy className="w-5 h-5 mr-2" />
              Join as Athlete
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" onClick={() => navigate('/login?role=coach')}>
              <Users className="w-5 h-5 mr-2" />
              Become a Coach
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
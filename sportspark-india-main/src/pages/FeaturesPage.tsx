import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Shield, 
  Trophy, 
  Users, 
  BarChart3, 
  Video,
  Target,
  Zap,
  CheckCircle,
  Award,
  Gamepad2,
  Camera,
  ArrowRight
} from "lucide-react";
import aiAnalysisImage from "@/assets/ai-analysis.jpg";
import leaderboardImage from "@/assets/leaderboard.jpg";
import communityImage from "@/assets/community.jpg";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FeaturesPage = () => {
  const navigate = useNavigate();
  const [openFeature, setOpenFeature] = useState<null | number>(null);
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Video Analysis",
      description: "Advanced computer vision technology analyzes your sports performance in real-time",
      image: aiAnalysisImage,
      benefits: [
        "Real-time technique analysis",
        "Performance improvement suggestions",
        "Automated cheat detection",
        "Biomechanical insights"
      ],
      color: "sports-blue"
    },
    {
      icon: Trophy,
      title: "Multi-Level Leaderboards",
      description: "Transparent ranking system from zonal to national competitions",
      image: leaderboardImage,
      benefits: [
        "Zonal to national rankings",
        "Category-wise leaderboards",
        "Real-time score updates",
        "Performance history tracking"
      ],
      color: "sports-green"
    },
    {
      icon: Users,
      title: "Community Platform",
      description: "Connect, share, and learn with athletes, coaches, and sports enthusiasts",
      image: communityImage,
      benefits: [
        "Athlete profile showcase",
        "Video sharing library",
        "Interactive engagement",
        "Coaching opportunities"
      ],
      color: "sports-orange"
    }
  ];

  const additionalFeatures = [
    {
      icon: Shield,
      title: "Cheat Detection",
      description: "AI-powered anti-cheating mechanisms ensure fair competition",
      color: "text-red-500"
    },
    {
      icon: Award,
      title: "Digital Certificates",
      description: "Verified achievements and performance certificates",
      color: "text-yellow-500"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Detailed analytics and insights for continuous improvement",
      color: "text-blue-500"
    },
    {
      icon: Gamepad2,
      title: "Gamification",
      description: "Badges, medals, and achievements to keep you motivated",
      color: "text-purple-500"
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set and track your sports performance goals effectively",
      color: "text-green-500"
    },
    {
      icon: Camera,
      title: "Video Upload",
      description: "Easy video upload and automatic analysis processing",
      color: "text-orange-500"
    }
  ];

  const activeFeature = openFeature !== null ? features[openFeature] : null;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="sports-badge mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Cutting-Edge Technology
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Revolutionary Sports
            <span className="hero-gradient bg-clip-text text-transparent"> Features</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience the most advanced sports assessment platform with AI-powered analysis, 
            transparent rankings, and community-driven engagement.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center mb-20 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-slide-up`}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-${feature.color}/10 rounded-xl flex items-center justify-center mr-4`}>
                    <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                  </div>
                  <Badge className="sports-badge">Featured</Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {feature.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {feature.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="hero"
                    size="lg"
                    onClick={() => setOpenFeature(index)}
                    className="group"
                    aria-label={`Learn more about ${feature.title}`}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  {/* Contextual quick action */}
                  {feature.title.includes('Leaderboard') && (
                    <Button variant="outline" size="lg" onClick={() => navigate('/leaderboard')}>
                      View Leaderboards
                    </Button>
                  )}
                  {feature.title.includes('Community') && (
                    <Button variant="outline" size="lg" onClick={() => navigate('/community')}>
                      Visit Community
                    </Button>
                  )}
                </div>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} relative animate-fade-in`}>
                <div className="absolute inset-0 hero-gradient rounded-2xl blur-2xl opacity-20"></div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Sports Ecosystem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for comprehensive sports assessment and development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="sports-card group">
                <CardHeader>
                  <div className={`w-12 h-12 ${feature.color} bg-current/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience the Future of Sports Assessment
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your journey with our comprehensive sports platform today
          </p>
          <Button variant="secondary" size="lg" className="group" onClick={() => navigate('/community')}>
            <Video className="w-5 h-5 mr-2" />
            Start Free Trial
          </Button>
        </div>
      </section>

      {/* Learn More Modal */}
      <Dialog open={openFeature !== null} onOpenChange={(v)=> setOpenFeature(v ? openFeature : null)}>
        <DialogContent className="max-w-3xl w-[95vw]">
          {activeFeature && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3">
                  <activeFeature.icon className={`w-6 h-6 text-${activeFeature.color}`} />
                  {activeFeature.title}
                </DialogTitle>
                <DialogDescription>
                  {activeFeature.description}
                </DialogDescription>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <img src={activeFeature.image} alt={activeFeature.title} className="rounded-xl shadow w-full h-auto" />
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">Key benefits:</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {activeFeature.benefits.map((b, i)=> (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <div className="pt-4 flex flex-wrap gap-3">
                    <Button variant="hero" onClick={() => { setOpenFeature(null); navigate('/community'); }}>
                      Try it in Community
                    </Button>
                    {activeFeature.title.includes('Leaderboard') && (
                      <Button variant="outline" onClick={() => { setOpenFeature(null); navigate('/leaderboard'); }}>
                        View Leaderboards
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FeaturesPage;
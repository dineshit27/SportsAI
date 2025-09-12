import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Users,
  Trophy,
  Briefcase,
  Send,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["support@sportsai.in", "partnerships@sportsai.in"],
      color: "text-sports-blue"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211"],
      color: "text-sports-green"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Tech Hub, Bangalore", "Karnataka 560001"],
      color: "text-sports-orange"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Weekend support available"],
      color: "text-accent"
    }
  ];

  const inquiryTypes = [
    { icon: Users, title: "Athlete Registration", description: "Get started as an athlete on our platform" },
    { icon: Trophy, title: "Coach Partnership", description: "Join our network of certified coaches" },
    { icon: Briefcase, title: "Sponsorship Opportunities", description: "Partner with us to support athletes" },
    { icon: MessageCircle, title: "General Inquiry", description: "Any other questions or feedback" }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", color: "text-blue-600" },
    { icon: Twitter, name: "Twitter", color: "text-blue-400" },
    { icon: Instagram, name: "Instagram", color: "text-pink-500" },
    { icon: Linkedin, name: "LinkedIn", color: "text-blue-700" },
    { icon: Youtube, name: "YouTube", color: "text-red-500" }
  ];

  return (
    <div className="min-h-screen pt-20 bg-muted/30">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="sports-badge mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            Get in Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Connect With
            <span className="hero-gradient bg-clip-text text-transparent"> Our Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Whether you're an athlete, coach, or sponsor, we're here to help you succeed. 
            Reach out to us for any inquiries or partnerships.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="sports-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Send className="w-6 h-6 text-sports-blue" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Inquiry Type Selection */}
                <div>
                  <label className="text-sm font-medium mb-3 block">What can we help you with?</label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {inquiryTypes.map((type, index) => (
                      <div key={index} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <type.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm mb-1">{type.title}</h4>
                            <p className="text-xs text-muted-foreground">{type.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name *</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name *</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address *</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <Input type="tel" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Sport/Interest</label>
                    <Input placeholder="e.g., Cricket, Football, Basketball" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Location</label>
                    <Input placeholder="City, State" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message *</label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry, goals, or how we can help you..."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="newsletter" className="rounded" />
                  <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                    Subscribe to our newsletter for sports updates and platform news
                  </label>
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="sports-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-sports-green" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-10 h-10 ${info.color} bg-current/10 rounded-lg flex items-center justify-center`}>
                      <info.icon className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="sports-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-sports-orange" />
                  Follow Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {socialLinks.map((social, index) => (
                    <button
                      key={index}
                      className="p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <social.icon className={`w-6 h-6 mx-auto ${social.color} group-hover:scale-110 transition-transform duration-300`} />
                      <span className="text-xs mt-1 block">{social.name}</span>
                    </button>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Stay updated with the latest sports news and platform updates
                </p>
              </CardContent>
            </Card>

            {/* Quick Support */}
            <Card className="sports-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  Quick Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-1">Athletes & Coaches</h4>
                  <p className="text-sm text-green-700">Get instant support for platform usage and technical issues</p>
                  <Button variant="outline" size="sm" className="mt-2 w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat Support
                  </Button>
                </div>
                
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-1">Officials & Partners</h4>
                  <p className="text-sm text-blue-700">Dedicated support for official verifications and partnerships</p>
                  <Button variant="outline" size="sm" className="mt-2 w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Priority Line
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <Card className="sports-card">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    question: "How do I register as an athlete?",
                    answer: "Download our mobile app and complete the registration process with your sports profile and initial video submission."
                  },
                  {
                    question: "Is the platform free for athletes?",
                    answer: "Yes! Our core platform is completely free for athletes. Premium features are available for advanced analytics."
                  },
                  {
                    question: "How does the AI analysis work?",
                    answer: "Our AI analyzes your uploaded videos using computer vision to provide technique feedback and performance scores."
                  },
                  {
                    question: "Can coaches join the platform?",
                    answer: "Absolutely! We welcome certified coaches to join our network and help mentor athletes on the platform."
                  }
                ].map((faq, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg">
                    <h4 className="font-medium mb-2">{faq.question}</h4>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy, 
  Medal, 
  Crown, 
  TrendingUp,
  MapPin,
  Filter,
  Star,
  Award,
  BarChart3,
  Target,
  Zap,
  Gamepad2
} from "lucide-react";
import { useState } from "react";

// Import profile images
import profile1 from "@/assets/profile1.jpg";
import profile2 from "@/assets/profile2.jpg";
import profile3 from "@/assets/profile3.jpg";
import profile4 from "@/assets/profile4.jpg";
import profile5 from "@/assets/profile5.jpg";

const LeaderboardPage = () => {
  const [selectedRegion, setSelectedRegion] = useState("National");
  const [selectedCategory, setSelectedCategory] = useState("Overall");
  
  const leaderboardData = {
    cricket: [
      { rank: 1, name: "Arjun Sharma", location: "Mumbai, MH", score: 9850, change: "+5", avatar: profile1, achievements: 15 },
      { rank: 2, name: "Rohit Gupta", location: "Delhi, NCR", score: 9720, change: "+2", avatar: profile2, achievements: 12 },
      { rank: 3, name: "Vikash Kumar", location: "Bangalore, KA", score: 9650, change: "-1", avatar: profile3, achievements: 10 },
      { rank: 4, name: "Suresh Patel", location: "Ahmedabad, GJ", score: 9580, change: "+3", avatar: profile4, achievements: 9 },
      { rank: 5, name: "Amit Singh", location: "Jaipur, RJ", score: 9520, change: "0", avatar: profile5, achievements: 8 }
    ],
    football: [
      { rank: 1, name: "Vikram Singh", location: "Delhi, NCR", score: 9780, change: "+1", avatar: profile3, achievements: 14 },
      { rank: 2, name: "Mohammed Ali", location: "Kolkata, WB", score: 9650, change: "-1", avatar: profile1, achievements: 11 },
      { rank: 3, name: "Ravi Shankar", location: "Chennai, TN", score: 9580, change: "+2", avatar: profile5, achievements: 10 },
      { rank: 4, name: "Kiran Reddy", location: "Hyderabad, TS", score: 9520, change: "0", avatar: profile2, achievements: 9 },
      { rank: 5, name: "Deepak Kumar", location: "Pune, MH", score: 9480, change: "+1", avatar: profile4, achievements: 7 }
    ],
    basketball: [
      { rank: 1, name: "Priya Patel", location: "Ahmedabad, GJ", score: 9900, change: "+2", avatar: profile2, achievements: 16 },
      { rank: 2, name: "Sneha Sharma", location: "Mumbai, MH", score: 9820, change: "0", avatar: profile4, achievements: 13 },
      { rank: 3, name: "Anjali Singh", location: "Delhi, NCR", score: 9750, change: "+1", avatar: profile1, achievements: 11 },
      { rank: 4, name: "Kavya Reddy", location: "Bangalore, KA", score: 9680, change: "-2", avatar: profile3, achievements: 10 },
      { rank: 5, name: "Pooja Kumar", location: "Chennai, TN", score: 9620, change: "+1", avatar: profile5, achievements: 8 }
    ],
    badminton: [
      { rank: 1, name: "Anita Reddy", location: "Hyderabad, TS", score: 9720, change: "+3", avatar: profile4, achievements: 14 },
      { rank: 2, name: "Saina Patel", location: "Mumbai, MH", score: 9680, change: "+1", avatar: profile2, achievements: 12 },
      { rank: 3, name: "Rajesh Kumar", location: "Delhi, NCR", score: 9620, change: "0", avatar: profile1, achievements: 11 },
      { rank: 4, name: "Meera Singh", location: "Bangalore, KA", score: 9580, change: "-1", avatar: profile5, achievements: 9 },
      { rank: 5, name: "Aryan Sharma", location: "Chennai, TN", score: 9540, change: "+2", avatar: profile3, achievements: 8 }
    ],
    tennis: [
      { rank: 1, name: "Raj Kumar", location: "Bangalore, KA", score: 9640, change: "+2", avatar: profile5, achievements: 13 },
      { rank: 2, name: "Leela Patel", location: "Ahmedabad, GJ", score: 9590, change: "0", avatar: profile2, achievements: 11 },
      { rank: 3, name: "Akash Singh", location: "Delhi, NCR", score: 9550, change: "+1", avatar: profile1, achievements: 10 },
      { rank: 4, name: "Priyanka Reddy", location: "Hyderabad, TS", score: 9520, change: "-2", avatar: profile4, achievements: 9 },
      { rank: 5, name: "Rohit Sharma", location: "Mumbai, MH", score: 9480, change: "+1", avatar: profile3, achievements: 7 }
    ],
    hockey: [
      { rank: 1, name: "Sunil Kumar", location: "Chandigarh, PB", score: 9560, change: "+1", avatar: profile1, achievements: 12 },
      { rank: 2, name: "Rani Patel", location: "Ahmedabad, GJ", score: 9520, change: "+2", avatar: profile2, achievements: 10 },
      { rank: 3, name: "Manpreet Singh", location: "Delhi, NCR", score: 9480, change: "0", avatar: profile3, achievements: 9 },
      { rank: 4, name: "Navjot Kaur", location: "Mumbai, MH", score: 9450, change: "-1", avatar: profile4, achievements: 8 },
      { rank: 5, name: "Harmanpreet Reddy", location: "Bangalore, KA", score: 9420, change: "+3", avatar: profile5, achievements: 7 }
    ]
  };

  const regions = ["National", "State", "District", "Zonal"];
  const categories = ["Overall", "Strength", "Stamina", "Style", "Technique"];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-sm font-bold text-muted-foreground">{rank}</span>;
    }
  };

  const getChangeColor = (change: string) => {
    if (change.startsWith('+')) return 'text-green-500';
    if (change.startsWith('-')) return 'text-red-500';
    return 'text-muted-foreground';
  };

  return (
    <div className="min-h-screen pt-20 bg-muted/30">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Live
            <span className="hero-gradient bg-clip-text text-transparent"> Leaderboards</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Real-time rankings from zonal to national level across all sports categories
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Filters */}
        <div className="sports-card mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium mb-3 block">Region</label>
                <div className="flex flex-wrap gap-2">
                  {regions.map((region) => (
                    <Badge 
                      key={region} 
                      variant={region === selectedRegion ? "default" : "outline"}
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => setSelectedRegion(region)}
                    >
                      <MapPin className="w-3 h-3 mr-1" />
                      {region}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-3 block">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Badge 
                      key={category} 
                      variant={category === selectedCategory ? "default" : "outline"}
                      className="cursor-pointer hover:bg-secondary hover:text-secondary-foreground transition-colors"
                      onClick={() => setSelectedCategory(category)}
                    >
                      <Target className="w-3 h-3 mr-1" />
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </div>

        {/* Sports Tabs */}
        <Tabs defaultValue="cricket" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mb-8">
            <TabsTrigger value="cricket" className="flex items-center gap-1 sm:gap-2">
              <Trophy className="w-4 h-4" />
              <span className="hidden sm:inline">Cricket</span>
              <span className="sm:hidden">Cricket</span>
            </TabsTrigger>
            <TabsTrigger value="football" className="flex items-center gap-1 sm:gap-2">
              <Medal className="w-4 h-4" />
              <span className="hidden sm:inline">Football</span>
              <span className="sm:hidden">Football</span>
            </TabsTrigger>
            <TabsTrigger value="basketball" className="flex items-center gap-1 sm:gap-2">
              <Award className="w-4 h-4" />
              <span className="hidden sm:inline">Basketball</span>
              <span className="sm:hidden">Basketball</span>
            </TabsTrigger>
            <TabsTrigger value="badminton" className="flex items-center gap-1 sm:gap-2">
              <Zap className="w-4 h-4" />
              <span className="hidden sm:inline">Badminton</span>
              <span className="sm:hidden">Badminton</span>
            </TabsTrigger>
            <TabsTrigger value="tennis" className="flex items-center gap-1 sm:gap-2">
              <Star className="w-4 h-4" />
              <span className="hidden sm:inline">Tennis</span>
              <span className="sm:hidden">Tennis</span>
            </TabsTrigger>
            <TabsTrigger value="hockey" className="flex items-center gap-1 sm:gap-2">
              <Gamepad2 className="w-4 h-4" />
              <span className="hidden sm:inline">Hockey</span>
              <span className="sm:hidden">Hockey</span>
            </TabsTrigger>
          </TabsList>

          {Object.entries(leaderboardData).map(([sport, athletes]) => (
            <TabsContent key={sport} value={sport}>
              <div className="grid gap-6 lg:gap-8 lg:grid-cols-3">
                {/* Top 3 Podium */}
                <div className="order-2 lg:order-1 lg:col-span-1">
                  <Card className="sports-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Crown className="w-5 h-5 text-yellow-500" />
                        Top Performers
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 sm:space-y-6">
                      {athletes.slice(0, 3).map((athlete, index) => (
                        <div key={athlete.rank} className="relative">
                          <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-muted/50 to-transparent hover:from-muted hover:shadow-lg transition-all duration-300">
                            <div className="relative flex-shrink-0">
                              {getRankIcon(athlete.rank)}
                              {index === 0 && (
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                              )}
                            </div>
                            <Avatar className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                              <AvatarImage src={athlete.avatar} />
                              <AvatarFallback>{athlete.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-sm sm:text-base truncate">{athlete.name}</h4>
                              <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1 truncate">
                                <MapPin className="w-3 h-3 flex-shrink-0" />
                                <span className="truncate">{athlete.location}</span>
                              </p>
                              <div className="flex items-center gap-2 mt-1 flex-wrap">
                                <Badge variant="outline" className="text-xs">
                                  {athlete.score} pts
                                </Badge>
                                <span className={`text-xs flex items-center gap-1 ${getChangeColor(athlete.change)}`}>
                                  <TrendingUp className="w-3 h-3" />
                                  {athlete.change}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* Full Leaderboard */}
                <div className="order-1 lg:order-2 lg:col-span-2">
                  <Card className="sports-card">
                    <CardHeader>
                      <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <span className="flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-sports-blue" />
                          <span className="truncate">{sport.charAt(0).toUpperCase() + sport.slice(1)} Rankings</span>
                        </span>
                        <Badge className="sports-badge self-start sm:self-auto">Live</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {athletes.map((athlete) => (
                          <div key={athlete.rank} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-muted/50 transition-colors border border-border/50">
                            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                              <div className="flex-shrink-0">
                                {getRankIcon(athlete.rank)}
                              </div>
                              <Avatar className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0">
                                <AvatarImage src={athlete.avatar} />
                                <AvatarFallback>{athlete.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div className="min-w-0 flex-1">
                                <h4 className="font-medium text-sm sm:text-base truncate">{athlete.name}</h4>
                                <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
                                  <MapPin className="w-3 h-3 flex-shrink-0" />
                                  <span className="truncate">{athlete.location}</span>
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-right">
                              <div className="flex-shrink-0">
                                <div className="font-semibold text-sm sm:text-base">{athlete.score}</div>
                                <div className="text-xs text-muted-foreground hidden sm:block">points</div>
                              </div>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                                <Badge variant="outline" className="text-xs self-end sm:self-auto">
                                  <Star className="w-3 h-3 mr-1" />
                                  {athlete.achievements}
                                </Badge>
                                <span className={`text-xs sm:text-sm font-medium ${getChangeColor(athlete.change)} self-end sm:self-auto`}>
                                  {athlete.change}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 text-center">
                        <Button 
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            alert("Viewing full rankings for this sport...");
                          }}
                        >
                          View Full Rankings
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          {[
            { label: "Total Athletes", value: "18,750", icon: Trophy, color: "text-sports-blue" },
            { label: "Active Competitions", value: "72", icon: Medal, color: "text-sports-green" },
            { label: "Sports Covered", value: "6", icon: Award, color: "text-sports-orange" },
            { label: "Rankings Updated", value: "Real-time", icon: TrendingUp, color: "text-accent" }
          ].map((stat, index) => (
            <Card key={index} className="sports-card text-center">
              <CardContent className="p-6">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
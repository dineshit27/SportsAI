import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Play, 
  Trophy, 
  Medal,
  Users,
  Video,
  Filter,
  Search,
  MapPin,
  Star
} from "lucide-react";
import { useState } from "react";

// Import profile images
import profile1 from "@/assets/profile1.jpg";
import profile2 from "@/assets/profile2.jpg";
import profile3 from "@/assets/profile3.jpg";
import profile4 from "@/assets/profile4.jpg";
import profile5 from "@/assets/profile5.jpg";

// Import video thumbnails
import cricketThumbnail from "@/assets/cricket-thumbnail.jpg";
import basketballThumbnail from "@/assets/basketball-thumbnail.jpg";
import footballThumbnail from "@/assets/football-thumbnail.jpg";
import badmintonThumbnail from "@/assets/badminton-thumbnail.jpg";

const CommunityPage = () => {
  const [selectedSport, setSelectedSport] = useState("All Sports");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  
  const athletes = [
    {
      id: 1,
      name: "Arjun Sharma",
      sport: "Cricket",
      location: "Mumbai, Maharashtra",
      rating: 4.8,
      achievements: ["State Champion 2023", "Best Batting Average"],
      avatar: profile1,
      videos: 15,
      followers: 2340
    },
    {
      id: 2,
      name: "Priya Patel",
      sport: "Basketball",
      location: "Ahmedabad, Gujarat",
      rating: 4.9,
      achievements: ["National Team Player", "MVP 2023"],
      avatar: profile2,
      videos: 23,
      followers: 3450
    },
    {
      id: 3,
      name: "Vikram Singh",
      sport: "Football",
      location: "Delhi, NCR",
      rating: 4.7,
      achievements: ["Zone Winner", "Best Goalkeeper"],
      avatar: profile3,
      videos: 18,
      followers: 1890
    },
    {
      id: 4,
      name: "Anita Reddy", 
      sport: "Badminton",
      location: "Hyderabad, Telangana",
      rating: 4.6,
      achievements: ["Zone Winner", "Best Smash"],
      avatar: profile4,
      videos: 12,
      followers: 1520
    },
    {
      id: 5,
      name: "Raj Kumar",
      sport: "Tennis", 
      location: "Bangalore, Karnataka",
      rating: 4.5,
      achievements: ["District Champion", "Rising Star"],
      avatar: profile5,
      videos: 8,
      followers: 890
    }
  ];

  const communityPosts = [
    {
      id: 1,
      author: "Arjun Sharma",
      sport: "Cricket",
      title: "Perfect Cover Drive Technique",
      description: "Breaking down the mechanics of a perfect cover drive shot",
      thumbnail: cricketThumbnail,
      likes: 234,
      comments: 45,
      duration: "2:30",
      category: "Technique"
    },
    {
      id: 2,
      author: "Priya Patel",
      sport: "Basketball",
      title: "Three-Point Shooting Drills",
      description: "5 essential drills to improve your three-point accuracy",
      thumbnail: basketballThumbnail,
      likes: 189,
      comments: 32,
      duration: "4:15",
      category: "Training"
    },
    {
      id: 3,
      author: "Vikram Singh",
      sport: "Football",
      title: "Goalkeeper Reflexes Training",
      description: "Advanced reflexes training for goalkeepers",
      thumbnail: footballThumbnail,
      likes: 156,
      comments: 28,
      duration: "3:45",
      category: "Skills"
    },
    {
      id: 4,
      author: "Anita Reddy",
      sport: "Badminton",
      title: "Smash Technique Breakdown",
      description: "Master the perfect badminton smash with these tips",
      thumbnail: badmintonThumbnail,
      likes: 203,
      comments: 51,
      duration: "2:15",
      category: "Technique"
    }
  ];

  const categories = ["All", "Technique", "Training", "Skills", "Competition", "Fitness"];
  const sports = ["All Sports", "Cricket", "Football", "Basketball", "Badminton", "Tennis"];

  const handleLike = (postId: number) => {
    setLikedPosts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(postId)) {
        newLiked.delete(postId);
      } else {
        newLiked.add(postId);
      }
      return newLiked;
    });
  };

  const filteredPosts = communityPosts.filter(post => 
    (selectedSport === "All Sports" || post.sport === selectedSport) &&
    (selectedCategory === "All" || post.category === selectedCategory)
  );

  return (
    <div className="min-h-screen pt-20 bg-muted/30">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Sports
            <span className="hero-gradient bg-clip-text text-transparent"> Community</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Connect with athletes, share your journey, and learn from the best sports performers across India
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Athlete Profiles */}
          <div className="lg:col-span-1">
            <div className="sports-card mb-6">
              <CardHeader>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-sports-blue" />
                  Top Athletes
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {athletes.map((athlete) => (
                  <div key={athlete.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={athlete.avatar} />
                      <AvatarFallback>{athlete.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{athlete.name}</h4>
                      <p className="text-xs text-muted-foreground">{athlete.sport}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span className="text-xs">{athlete.rating}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                        <span>{athlete.videos} videos</span>
                        <span>•</span>
                        <span>{athlete.followers} followers</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </div>

            {/* Filters */}
            <div className="sports-card">
              <CardHeader>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Filter className="w-5 h-5 text-sports-green" />
                  Filters
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Sport</label>
                  <div className="flex flex-wrap gap-2">
                    {sports.map((sport) => (
                    <Badge 
                      key={sport} 
                      variant={sport === selectedSport ? "default" : "outline"} 
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => setSelectedSport(sport)}
                    >
                      {sport}
                    </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                    <Badge 
                      key={category} 
                      variant={category === selectedCategory ? "default" : "outline"} 
                      className="cursor-pointer hover:bg-secondary hover:text-secondary-foreground transition-colors"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </div>
          </div>

          {/* Main Content - Video Feed */}
          <div className="lg:col-span-3">
            {/* Search and Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search videos, athletes, or techniques..."
                  className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <Button 
                variant="hero"
                onClick={() => {
                  // Add upload functionality here
                  alert("Upload Video functionality will be implemented!");
                }}
              >
                <Video className="w-4 h-4 mr-2" />
                Upload Video
              </Button>
            </div>

            {/* Video Feed */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="sports-card group">
                  <div className="relative cursor-pointer">
                    <div className="aspect-video rounded-t-xl overflow-hidden relative">
                      <img 
                        src={post.thumbnail} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                      <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white z-20 group-hover:scale-110 transition-transform duration-300" />
                      <Badge className="absolute top-3 left-3 z-20 sports-badge">
                        {post.category}
                      </Badge>
                      <span className="absolute bottom-3 right-3 z-20 text-white text-sm bg-black/50 px-2 py-1 rounded">
                        {post.duration}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium text-sm">{post.author}</h4>
                          <p className="text-xs text-muted-foreground">{post.sport}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {post.sport}
                      </Badge>
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <button 
                          className={`flex items-center gap-1 transition-colors ${
                            likedPosts.has(post.id) ? 'text-red-500' : 'hover:text-red-500'
                          }`}
                          onClick={() => handleLike(post.id)}
                        >
                          <Heart className={`w-4 h-4 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                          {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                        </button>
                        <button className="flex items-center gap-1 hover:text-primary transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          {post.comments}
                        </button>
                        <button className="flex items-center gap-1 hover:text-primary transition-colors">
                          <Share2 className="w-4 h-4" />
                          Share
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
                      <Button 
                        variant="outline"
                        onClick={() => {
                          alert("Loading more videos...");
                        }}
                      >
                        Load More Videos
                      </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
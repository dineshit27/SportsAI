import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line, PieChart, Pie, Cell, Legend, LabelList } from 'recharts';
import { 
  Shield, 
  Users, 
  BarChart3, 
  TrendingUp,
  Eye,
  CheckCircle,
  AlertTriangle,
  Download,
  FileText,
  Activity,
  Star,
  Trophy,
  Clock
} from "lucide-react";

interface AthletePerf {
  id: number; athlete: string; sport: string; event: string; score: number; status: string; date: string;
}

const DashboardPage = () => {
  const navigate = useNavigate();
  const [showAnalytics, setShowAnalytics] = useState(false);
  // Start with all verified athletes selected so they are clearly visible immediately
  const verifiedAthleteNames = ["Arjun Sharma", "Priya Patel", "Sneha Kumar"]; // keep in sync with verifiedData
  const [comparisonAthletes, setComparisonAthletes] = useState<string[]>(verifiedAthleteNames);
  const [comparisonReport, setComparisonReport] = useState<AthletePerf[] | null>(null);
  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('bar');
  const verifiedData: AthletePerf[] = [
    { id: 1, athlete: "Arjun Sharma", sport: "Cricket", event: "State Championship", score: 95.6, status: "verified", date: "2024-01-15" },
    { id: 2, athlete: "Priya Patel", sport: "Basketball", event: "Zone Finals", score: 92.3, status: "verified", date: "2024-01-14" },
    { id: 3, athlete: "Vikram Singh", sport: "Football", event: "District Cup", score: 89.7, status: "pending", date: "2024-01-13" },
    { id: 4, athlete: "Sneha Kumar", sport: "Badminton", event: "Regional Tournament", score: 94.2, status: "verified", date: "2024-01-12" },
  ];

  const analyticsData = {
    totalAthletes: 12450,
    verifiedPerformances: 8932,
    pendingReviews: 156,
    flaggedSubmissions: 23
  };

  const recentActivity = [
    { type: "verification", message: "Arjun Sharma's cricket performance verified", time: "2 hours ago" },
    { type: "alert", message: "Suspicious submission flagged for review", time: "4 hours ago" },
    { type: "approval", message: "New coach certification approved", time: "6 hours ago" },
    { type: "update", message: "Leaderboard rankings updated", time: "8 hours ago" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "verified":
        return <Badge className="bg-green-100 text-green-800 border-green-200"><CheckCircle className="w-3 h-3 mr-1" />Verified</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
      case "flagged":
        return <Badge className="bg-red-100 text-red-800 border-red-200"><AlertTriangle className="w-3 h-3 mr-1" />Flagged</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "verification":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "alert":
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case "approval":
        return <Star className="w-4 h-4 text-blue-500" />;
      case "update":
        return <Activity className="w-4 h-4 text-purple-500" />;
      default:
        return <Activity className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const topAthletes = [...verifiedData]
    .filter(a => a.status === 'verified')
    .sort((a,b) => b.score - a.score)
    .slice(0,5);

  const exportTopAthletesPdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Top Performance Athletes', 14, 18);
    doc.setFontSize(11);
    const headers = ['Athlete','Sport','Event','Score','Date'];
    let y = 30;
    doc.setFont('helvetica','bold');
    headers.forEach((h,i)=> doc.text(h, 14 + i*38, y));
    doc.setFont('helvetica','normal');
    y += 8;
    topAthletes.forEach(row => {
      [row.athlete, row.sport, row.event, row.score.toString(), row.date].forEach((val,i)=>{
        doc.text(String(val).substring(0,18), 14 + i*38, y);
      });
      y += 8;
    });
    doc.save('top_athletes.pdf');
  };

  const exportPerformanceTablePdf = () => {
    const doc = new jsPDF({ orientation: 'landscape' });
    doc.setFontSize(16);
    doc.text('Verified Performance Data', 14, 18);
    doc.setFontSize(10);
    const header = ['Athlete','Sport','Event','Score','Status','Date'];
    let y = 30;
    header.forEach((h,i)=> doc.text(h, 14 + i*45, y));
    y += 8;
    verifiedData.forEach(r => {
      [r.athlete,r.sport,r.event,r.score.toString(),r.status,r.date].forEach((v,i)=>{
        doc.text(String(v).substring(0,25), 14 + i*45, y);
      });
      y += 7;
      if (y > 190) { doc.addPage(); y = 20; }
    });
    doc.save('performance_data.pdf');
  };

  const toggleAthlete = (name: string) => {
    setComparisonAthletes(prev => prev.includes(name) ? prev.filter(a=>a!==name) : [...prev, name]);
  };

  // Simple synthetic historical performance data for line chart demonstration
  const performanceHistory: Record<string, { date: string; score: number }[]> = {
    'Arjun Sharma': [
      { date: '2024-01-01', score: 91 },
      { date: '2024-01-08', score: 93 },
      { date: '2024-01-15', score: 95.6 },
    ],
    'Priya Patel': [
      { date: '2024-01-01', score: 89 },
      { date: '2024-01-08', score: 90.5 },
      { date: '2024-01-14', score: 92.3 },
    ],
    'Sneha Kumar': [
      { date: '2024-01-01', score: 90 },
      { date: '2024-01-08', score: 92.1 },
      { date: '2024-01-12', score: 94.2 },
    ],
  };

  const generateComparison = () => {
    const data = verifiedData.filter(a => comparisonAthletes.includes(a.athlete));
    setComparisonReport(data);
  };

  // Keep report in sync automatically (no need to force user to click Generate to simply view names)
  useEffect(() => {
    generateComparison();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comparisonAthletes]);

  const lineChartData = (() => {
    if (comparisonAthletes.length < 2) return [];
    // Merge by date
    const dateMap: Record<string, any> = {};
    comparisonAthletes.forEach(name => {
      (performanceHistory[name] || []).forEach(pt => {
        if (!dateMap[pt.date]) dateMap[pt.date] = { date: pt.date };
        dateMap[pt.date][name] = pt.score;
      });
    });
    return Object.values(dateMap).sort((a: any, b: any) => a.date.localeCompare(b.date));
  })();

  const pieChartData = (comparisonReport || []).map(a => ({ name: a.athlete, value: a.score }));
  const pieColors = ['#2563eb', '#16a34a', '#f59e0b', '#dc2626', '#7c3aed'];
  
  // Format long tick labels for small screens
  const tickFormatter = (v: string | number) => {
    if (!isMobile) return v as any;
    if (typeof v === 'string') return v.length > 8 ? `${v.slice(0, 8)}…` : v;
    return v as any;
  };

  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-muted/30 overflow-x-hidden">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
                <Shield className="w-8 h-8 text-sports-blue" />
                Officials Dashboard
              </h1>
              <p className="text-lg text-muted-foreground">
                Secure access to verified performance data and athlete analytics
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Badge className="achievement-badge">
                <Shield className="w-4 h-4 mr-2" />
                Verified Official
              </Badge>
            </div>
          </div>
        </div>
      </section>

  <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pb-16">
        {/* Analytics Overview */}
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          {[
            { 
              title: "Total Athletes", 
              value: analyticsData.totalAthletes.toLocaleString(), 
              change: "+12%", 
              icon: Users,
              color: "text-sports-blue"
            },
            { 
              title: "Verified Performances", 
              value: analyticsData.verifiedPerformances.toLocaleString(), 
              change: "+8%", 
              icon: CheckCircle,
              color: "text-green-500"
            },
            { 
              title: "Pending Reviews", 
              value: analyticsData.pendingReviews.toString(), 
              change: "-5%", 
              icon: Clock,
              color: "text-yellow-500"
            },
            { 
              title: "Flagged Submissions", 
              value: analyticsData.flaggedSubmissions.toString(), 
              change: "+2%", 
              icon: AlertTriangle,
              color: "text-red-500"
            }
          ].map((stat, index) => (
            <Card key={index} className="sports-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className={`text-sm flex items-center gap-1 mt-1 ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      <TrendingUp className="w-3 h-3" />
                      {stat.change}
                    </p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="order-1 lg:col-span-2 space-y-6">
            {/* Performance Data */}
            <Card className="sports-card overflow-hidden">
              <CardHeader>
                <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <span className="flex items-center gap-2 text-xl sm:text-2xl leading-tight break-words">
                    <BarChart3 className="w-5 h-5 text-sports-blue" />
                    Verified Performance Data
                  </span>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Button variant="outline" size="sm" onClick={exportPerformanceTablePdf} className="w-full sm:w-auto">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                    <Button variant="secondary" size="sm" className="w-full sm:w-auto" onClick={()=>navigate('/send-report', { state: { topAthletes } })}>
                      Send Report
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="recent" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 overflow-x-auto gap-1 p-1">
                    <TabsTrigger value="recent" className="text-[11px] sm:text-sm py-1">Recent</TabsTrigger>
                    <TabsTrigger value="pending" className="text-[11px] sm:text-sm py-1">Pending</TabsTrigger>
                    <TabsTrigger value="flagged" className="text-[11px] sm:text-sm py-1">Flagged</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="recent" className="mt-4">
                    <div className="space-y-3">
                      {verifiedData.filter(item => item.status === "verified").map((item) => (
                        <div key={item.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 sm:p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 hero-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="font-medium text-sm sm:text-base truncate">{item.athlete}</h4>
                              <p className="text-xs sm:text-sm text-muted-foreground truncate">{item.sport} • {item.event}</p>
                              <p className="text-xs text-muted-foreground">{item.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between sm:text-right sm:flex-col sm:items-end gap-2">
                            <div className="flex items-center gap-2 sm:flex-col sm:gap-1">
                              <div className="font-semibold text-base sm:text-lg">{item.score}</div>
                              <div className="text-xs sm:text-sm text-muted-foreground">Performance Score</div>
                            </div>
                            {getStatusBadge(item.status)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="pending" className="mt-4">
                    <div className="space-y-3">
                      {verifiedData.filter(item => item.status === "pending").map((item) => (
                        <div key={item.id} className="flex flex-col gap-3 p-3 sm:p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-3 sm:gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="font-medium text-sm sm:text-base truncate">{item.athlete}</h4>
                              <p className="text-xs sm:text-sm text-muted-foreground truncate">{item.sport} • {item.event}</p>
                              <p className="text-xs text-muted-foreground">{item.date}</p>
                            </div>
                            <div className="font-semibold text-base sm:text-lg">{item.score}</div>
                          </div>
                          <div className="flex items-center justify-between gap-2">
                            {getStatusBadge(item.status)}
                            <div className="flex gap-2">
                              <Button size="sm" variant="default" className="text-xs">Approve</Button>
                              <Button size="sm" variant="outline" className="text-xs">Review</Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="flagged" className="mt-4">
                    <div className="text-center py-8">
                      <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">No Flagged Submissions</h3>
                      <p className="text-muted-foreground">All recent submissions have passed automated verification</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Athlete Comparison Tool */}
            <Card className="sports-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl sm:text-3xl leading-tight">
                  <Eye className="w-5 h-5 text-sports-green" />
                  <span className="break-words">Athlete Comparison Analytics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm sm:text-base font-medium mb-2 block">Select Athletes (click to toggle)</label>
                    <div className="flex flex-wrap gap-2">
                      {verifiedData.filter(v=>v.status==='verified').map(a => {
                        const active = comparisonAthletes.includes(a.athlete);
                        return (
                          <Badge
                            key={a.id}
                            onClick={()=>toggleAthlete(a.athlete)}
                            className={`cursor-pointer text-xs px-3 py-1 rounded-md border transition font-medium select-none
                              ${active
                                ? 'bg-sports-green text-white border-sports-green shadow-sm'
                                : 'bg-background text-foreground border-border hover:border-sports-green/60 hover:bg-sports-green/5'}
                            `}
                          >
                            {a.athlete}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Technique','Speed','Accuracy','Consistency'].map(p => (
                      <Badge key={p} variant="outline" className="justify-center text-[10px] sm:text-xs py-1">{p}</Badge>
                    ))}
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <div className="flex gap-2">
                      <Button variant={chartType==='bar' ? 'sports':'outline'} size="sm" onClick={()=>setChartType('bar')}>Bar</Button>
                      <Button variant={chartType==='line' ? 'sports':'outline'} size="sm" onClick={()=>setChartType('line')} disabled={comparisonAthletes.length<2}>Line</Button>
                      <Button variant={chartType==='pie' ? 'sports':'outline'} size="sm" onClick={()=>setChartType('pie')}>Pie</Button>
                    </div>
                    <Button variant="hero" size="sm" className="w-full md:w-auto" onClick={generateComparison} disabled={comparisonAthletes.length<2}>
                      <BarChart3 className="w-4 h-4 mr-2" />Generate
                    </Button>
                    {comparisonReport && <p className="text-xs text-muted-foreground">{comparisonReport.length} athlete(s)</p>}
                  </div>
                  {comparisonReport && (
                    <div className="w-full h-60 sm:h-72 overflow-x-auto">
                      <div className="min-w-[320px]">
                        <ResponsiveContainer width="100%" height={isMobile ? 220 : '100%'}>
                          {(() => {
                            if (chartType === 'bar') {
                              return (
                                <BarChart data={comparisonReport} margin={{ top: 16, right: 16, left: 8, bottom: 28 }} barCategoryGap={isMobile ? '30%' : '20%'}>
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="athlete" interval={0} tickFormatter={tickFormatter} tick={{ fontSize: isMobile ? 10 : 12, fill: '#1f2937' }} dy={10} angle={isMobile ? -25 : 0} height={isMobile ? 50 : undefined} />
                                  <YAxis tick={{ fontSize: isMobile ? 10 : 12 }} />
                                  <Tooltip />
                                  <Bar dataKey="score" fill="#2563eb" radius={[4,4,0,0]}>
                                    {!isMobile && (
                                      <LabelList dataKey="score" position="top" style={{ fill: '#111827', fontSize: 12, fontWeight: 600 }} />
                                    )}
                                  </Bar>
                                </BarChart>
                              );
                            }
                            if (chartType === 'line') {
                              if (lineChartData.length === 0) {
                                return <div className="flex items-center justify-center text-xs text-muted-foreground">No historical data available.</div>;
                              }
                              return (
                                <LineChart data={lineChartData} margin={{ top: 16, right: 20, left: 8, bottom: 20 }}>
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="date" tick={{ fontSize: isMobile ? 10 : 12 }} />
                                  <YAxis tick={{ fontSize: isMobile ? 10 : 12 }} />
                                  <Tooltip />
                                  {!isMobile && <Legend />}
                                  {comparisonAthletes.map((a,i)=>(
                                    <Line key={a} type="monotone" dataKey={a} stroke={pieColors[i % pieColors.length]} strokeWidth={2} dot={false} />
                                  ))}
                                </LineChart>
                              );
                            }
                            // pie
                            return (
                              <PieChart margin={{ top: 10, bottom: 10 }}>
                                <Tooltip />
                                {!isMobile && <Legend />}
                                <Pie dataKey="value" data={pieChartData} nameKey="name" outerRadius={isMobile ? 80 : 90} label={!isMobile}>
                                  {pieChartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                                  ))}
                                </Pie>
                              </PieChart>
                            );
                          })()}
                        </ResponsiveContainer>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="order-2 lg:order-2 space-y-6">
            {/* Recent Activity */}
            <Card className="sports-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-sports-orange" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      {getActivityIcon(activity.type)}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium break-words">{activity.message}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="sports-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start" onClick={exportTopAthletesPdf}>
                  <Download className="w-4 h-4 mr-2" />
                  Export Performance Data
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start" onClick={()=>setShowAnalytics(true)}>
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics Report
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start" onClick={()=>navigate('/privacy-security')}>
                  <Shield className="w-4 h-4 mr-2" />
                  Security Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        <Dialog open={showAnalytics} onOpenChange={setShowAnalytics}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Top Athletes (Score)</DialogTitle>
            </DialogHeader>
            <div className="w-full h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topAthletes} margin={{ top: 20, right: 20, left: 10, bottom: 40 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="athlete" interval={0} tick={{ fontSize: 12, fill: '#1f2937' }} dy={10} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="score" fill="#16a34a" radius={[4,4,0,0]}>
                    <LabelList dataKey="score" position="top" style={{ fill: '#111827', fontSize: 12, fontWeight: 600 }} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default DashboardPage;
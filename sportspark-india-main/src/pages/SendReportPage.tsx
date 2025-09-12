import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState, useMemo, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Download, Send, ArrowLeft, Eye, Mail, MessageSquare } from 'lucide-react';

interface AthletePerf { id: number; athlete: string; sport: string; event: string; score: number; status: string; date: string; }

const defaultData: AthletePerf[] = [
  { id: 1, athlete: 'Arjun Sharma', sport: 'Cricket', event: 'State Championship', score: 95.6, status: 'verified', date: '2024-01-15' },
  { id: 2, athlete: 'Priya Patel', sport: 'Basketball', event: 'Zone Finals', score: 92.3, status: 'verified', date: '2024-01-14' },
  { id: 4, athlete: 'Sneha Kumar', sport: 'Badminton', event: 'Regional Tournament', score: 94.2, status: 'verified', date: '2024-01-12' },
];

const SendReportPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const topAthletes: AthletePerf[] = (state?.topAthletes || defaultData).slice(0,5);

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [sendingWa, setSendingWa] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(()=>{ setEmail('m.dinesh.it27@gmail.com'); setPhone('+91 8122129450'); }, []);

  const reportText = useMemo(()=>{
    const lines = [
      'Top Athletes Performance Report',
      new Date().toLocaleString(),
      '--------------------------------',
      ...topAthletes.map(a => `${a.athlete} | ${a.sport} | ${a.event} | Score: ${a.score}`),
      '--------------------------------',
      'Generated via SportsPark Dashboard'
    ];
    return lines.join('\n');
  },[topAthletes]);

  const validateEmail = () => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!emailOk) {
      toast({ title: 'Invalid Email', description: 'Enter a valid email address', variant: 'destructive' });
      return false;
    }
    return true;
  };

  const validatePhone = () => {
    const digits = phone.replace(/[^+0-9]/g, '');
    const phoneOk = /^\+?\d{8,15}$/.test(digits);
    if (!phoneOk) {
      toast({ title: 'Invalid WhatsApp Number', description: 'Use international format e.g. +918122129450', variant: 'destructive' });
      return false;
    }
    return true;
  };

  const handleSendWhatsApp = () => {
    if (!validatePhone()) return;
    setSendingWa(true);
    try {
      const encodedReport = encodeURIComponent(reportText);
      const cleanPhone = phone.replace(/[^0-9+]/g, '').replace(/^\+/, '');
      const waUrl = `https://wa.me/${cleanPhone}?text=${encodedReport}`;
      window.open(waUrl, '_blank');
      toast({ title: 'WhatsApp Ready', description: 'A WhatsApp window has opened. Complete sending there.' });
    } catch (e: any) {
      toast({ title: 'WhatsApp Failed', description: e.message, variant: 'destructive' });
    } finally {
      setSendingWa(false);
    }
  };

  const handleSendEmail = () => {
    if (!validateEmail()) return;
    setSendingEmail(true);
    try {
      const subject = 'Top Athletes Report';
      const encodedReport = encodeURIComponent(reportText);
      const encodedSubject = encodeURIComponent(subject);
      const to = encodeURIComponent(email);

      // Mailto link (works best on mobile or when a default desktop mail client is configured)
      const mailUrl = `mailto:${to}?subject=${encodedSubject}&body=${encodedReport}`;

      // Gmail web compose (reliable on desktop browsers where mail client isn't set)
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${to}&su=${encodedSubject}&body=${encodedReport}`;

      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(navigator.userAgent);

      if (isMobileUA) {
        // On mobile, prefer mailto so it opens the native email app
        window.location.href = mailUrl;
        toast({ title: 'Email App Opening', description: 'Your mobile email app should open with a draft. Review and send.' });
      } else {
        // On desktop, try Gmail web first; fallback to mailto if blocked or unavailable
        const win = window.open(gmailUrl, '_blank');
        if (!win) {
          // Pop-up blocked: fallback
          window.location.href = mailUrl;
        }
        toast({ title: 'Gmail Compose Opened', description: 'A Gmail tab should open with a prefilled draft. If not, ensure you are signed into Gmail or set a default email app.' });
      }
    } catch (e: any) {
      toast({ title: 'Email Failed', description: e.message, variant: 'destructive' });
    } finally {
      setSendingEmail(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-24 bg-muted/30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Send Performance Report</h1>
          <Button variant="outline" size="sm" onClick={()=>navigate(-1)}><ArrowLeft className="w-4 h-4 mr-1" />Back</Button>
        </div>
        <Card className="sports-card">
          <CardHeader>
            <CardTitle>Recipient Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address</label>
              <Input placeholder="recipient@example.com" value={email} onChange={e=>setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">WhatsApp Number</label>
              <Input placeholder="+91 8122129450" value={phone} onChange={e=>setPhone(e.target.value)} />
              <p className="text-xs text-muted-foreground">Use international format with country code.</p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button type="button" variant="secondary" onClick={()=>setShowPreview(v=>!v)}>
                <Eye className="w-4 h-4" />
                {showPreview ? 'Hide Preview' : 'Preview Report'}
              </Button>
              <Button type="button" variant="outline" onClick={()=>navigate('/dashboard')}>Cancel</Button>
              {/* Send via WhatsApp */}
              <Button
                type="button"
                variant="hero"
                title="Send via WhatsApp"
                aria-label="Send via WhatsApp"
                className="w-full sm:w-auto"
                disabled={sendingWa}
                onClick={handleSendWhatsApp}
              >
                <MessageSquare className="w-4 h-4" />
                {sendingWa ? 'Opening WhatsApp…' : 'Send via WhatsApp'}
              </Button>
              {/* Send via Email */}
              <Button
                type="button"
                title="Send via Email"
                aria-label="Send via Email"
                className="w-full sm:w-auto"
                disabled={sendingEmail}
                onClick={handleSendEmail}
              >
                <Mail className="w-4 h-4" />
                {sendingEmail ? 'Opening Email…' : 'Send via Email'}
              </Button>
            </div>
          </CardContent>
        </Card>
        {showPreview && (
          <Card className="sports-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Download className="w-4 h-4" />Report Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="whitespace-pre-wrap text-sm bg-muted p-4 rounded-lg border max-h-80 overflow-auto">{reportText}</pre>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SendReportPage;
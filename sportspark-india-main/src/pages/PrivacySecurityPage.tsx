import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Shield, Lock, Bell, Eye } from "lucide-react";
import { useState } from "react";

const PrivacySecurityPage = () => {
  const [settings, setSettings] = useState({
    twoFactor: true,
    activityEmails: false,
    publicProfile: true,
    dataSharing: false,
  });

  const toggle = (key: keyof typeof settings) =>
    setSettings((s) => ({ ...s, [key]: !s[key] }));

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 bg-muted/30 pb-20">
      <div className="max-w-5xl mx-auto space-y-10">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Shield className="w-8 h-8 text-sports-blue" /> Privacy & Security
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage how your data is protected and how we notify you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="sports-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-sports-green" /> Authentication
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-sm">Two-Factor Authentication</p>
                  <p className="text-xs text-muted-foreground max-w-xs">
                    Add an extra layer of protection to your account.
                  </p>
                </div>
                <Switch checked={settings.twoFactor} onCheckedChange={() => toggle('twoFactor')} />
              </div>
              <Button variant="outline" size="sm">Manage Trusted Devices</Button>
            </CardContent>
          </Card>

          <Card className="sports-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-sports-orange" /> Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-sm">Performance Activity Emails</p>
                  <p className="text-xs text-muted-foreground max-w-xs">
                    Get email alerts when new athlete data is verified.
                  </p>
                </div>
                <Switch checked={settings.activityEmails} onCheckedChange={() => toggle('activityEmails')} />
              </div>
              <Button variant="outline" size="sm">Notification Preferences</Button>
            </CardContent>
          </Card>

          <Card className="sports-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-sports-blue" /> Visibility
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-sm">Public Profile</p>
                  <p className="text-xs text-muted-foreground max-w-xs">
                    Allow others to view your official profile & achievements.
                  </p>
                </div>
                <Switch checked={settings.publicProfile} onCheckedChange={() => toggle('publicProfile')} />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-sm">Data Sharing (Analytics)</p>
                  <p className="text-xs text-muted-foreground max-w-xs">
                    Share anonymized usage data to improve platform insight.
                  </p>
                </div>
                <Switch checked={settings.dataSharing} onCheckedChange={() => toggle('dataSharing')} />
              </div>
            </CardContent>
          </Card>

          <Card className="sports-card md:col-span-2">
            <CardHeader>
              <CardTitle>Security Logs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Recent login attempts, API key usage, and permission changes will appear here. (Placeholder)
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacySecurityPage;
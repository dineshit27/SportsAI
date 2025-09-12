import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams } from "react-router-dom";
import { Globe, Facebook, Square, Mail, Smartphone, Shield, UserPlus } from "lucide-react";

const ProviderButton = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <Button variant="outline" className="w-full" onClick={onClick}>
    {children}
  </Button>
);

const LoginPage = () => {
  const { toast } = useToast();
  const [params] = useSearchParams();
  const role = params.get("role");

  const showSuccessLogin = (provider: string) => {
    toast({
      title: `Successfully signed in with ${provider}`,
      description: "Welcome back! You are now logged in.",
    });
  };

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-md mx-auto">
        <Card className="sports-card">
          <CardHeader className="text-center space-y-2">
            <div className="flex justify-center">
              <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl">Welcome back</CardTitle>
            {role && (
              <div className="flex justify-center">
                <Badge className="sports-badge" aria-label={`Joining as ${role}`}>
                  <UserPlus className="w-4 h-4 mr-1" /> Joining as {role}
                </Badge>
              </div>
            )}
          </CardHeader>
          <CardContent className="space-y-3">
            <ProviderButton onClick={() => showSuccessLogin("Google")}>
              <Globe className="w-5 h-5 mr-2" /> Continue with Google
            </ProviderButton>
            <ProviderButton onClick={() => showSuccessLogin("Facebook")}>
              <Facebook className="w-5 h-5 mr-2" /> Continue with Facebook
            </ProviderButton>
            <ProviderButton onClick={() => showSuccessLogin("Microsoft")}>
              <Square className="w-5 h-5 mr-2" /> Continue with Microsoft
            </ProviderButton>
            <ProviderButton onClick={() => showSuccessLogin("Phone")}>
              <Smartphone className="w-5 h-5 mr-2" /> Continue with Phone
            </ProviderButton>
            <ProviderButton onClick={() => showSuccessLogin("Email (Gmail)")}>
              <Mail className="w-5 h-5 mr-2" /> Continue with Email (Gmail)
            </ProviderButton>

            <Separator className="my-4" />
            <div className="text-xs text-muted-foreground text-center">
              By continuing you agree to our Terms and Privacy Policy.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Zap } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-white/5 bg-[size:30px_30px] bg-[radial-gradient(circle,transparent_1px,rgba(255,255,255,0.05)_1px)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="p-12 text-center space-y-8">
            <div className="space-y-4 animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Start Your Free Trial Today
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Ready to Transform Your
                <span className="block text-primary">Lead Generation?</span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Join over 500 successful businesses that have increased their leads by 300% 
                with our SEO-powered platform. No credit card required.
              </p>
            </div>
            
            {/* Email Signup Form */}
            <div className="max-w-md mx-auto animate-scale-in">
              <div className="flex gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your business email"
                  className="flex-1 h-12 text-base"
                />
                <Button variant="hero" size="lg" className="h-12 px-6">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Start your 14-day free trial. No credit card required.
              </p>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-6 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">14 Days</div>
                <div className="text-sm text-muted-foreground">Free Trial</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">30 Days</div>
                <div className="text-sm text-muted-foreground">Money Back</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
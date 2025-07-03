import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 bg-[size:20px_20px] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                Generate Quality SEO Leads
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Transform Your
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  SEO Strategy
                </span>
                Into Lead Generation
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Our AI-powered platform helps businesses generate high-quality leads through 
                strategic SEO optimization and conversion tracking.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Generating Leads
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline-primary" size="lg" className="group">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Active Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">2.5M+</div>
                <div className="text-sm text-muted-foreground">Leads Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 scale-110"></div>
            <img 
              src={heroImage} 
              alt="SEO Analytics Dashboard" 
              className="relative w-full h-auto rounded-3xl shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">SEOLeads</h3>
              <p className="text-background/80 leading-relaxed">
                Transform your SEO strategy into a powerful lead generation engine with our AI-powered platform.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-background/80">
                <Mail className="w-5 h-5 mr-3" />
                <span>contact@seoleads.com</span>
              </div>
              <div className="flex items-center text-background/80">
                <Phone className="w-5 h-5 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-background/80">
                <MapPin className="w-5 h-5 mr-3" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          {/* Product */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Product</h4>
            <div className="space-y-3">
              {["Features", "Pricing", "Enterprise", "API", "Integrations", "Security"].map((item) => (
                <div key={item}>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    {item}
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          {/* Resources */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Resources</h4>
            <div className="space-y-3">
              {["Blog", "Case Studies", "Help Center", "Documentation", "Webinars", "Templates"].map((item) => (
                <div key={item}>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    {item}
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-background/80">
              Get the latest SEO tips and lead generation strategies delivered to your inbox.
            </p>
            
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button variant="secondary" className="w-full">
                Subscribe
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Facebook, href: "#" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <Separator className="bg-background/20 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-background/80">
            © 2024 SEOLeads. All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-sm">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-background/80 hover:text-background transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
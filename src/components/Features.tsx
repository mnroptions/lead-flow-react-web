import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import seoIcon from "@/assets/seo-icon.png";
import leadsIcon from "@/assets/leads-icon.png";
import analyticsIcon from "@/assets/analytics-icon.png";

const Features = () => {
  const features = [
    {
      icon: seoIcon,
      title: "Advanced SEO Optimization",
      description: "AI-powered keyword research, competitor analysis, and content optimization to boost your search rankings and drive organic traffic.",
      benefits: ["Keyword Research", "Content Optimization", "Technical SEO", "Link Building"]
    },
    {
      icon: leadsIcon,
      title: "Lead Generation Engine",
      description: "Convert website visitors into qualified leads with intelligent conversion funnels and personalized user experiences.",
      benefits: ["Smart Forms", "Lead Scoring", "Conversion Tracking", "CRM Integration"]
    },
    {
      icon: analyticsIcon,
      title: "Real-Time Analytics",
      description: "Track your SEO performance and lead generation metrics with comprehensive dashboards and actionable insights.",
      benefits: ["Performance Tracking", "ROI Analysis", "Custom Reports", "Data Visualization"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Everything You Need to
            <span className="block text-primary">Generate Quality Leads</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge SEO tools with powerful lead generation 
            capabilities to help your business grow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="relative group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center justify-center text-sm font-medium text-secondary"
                    >
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
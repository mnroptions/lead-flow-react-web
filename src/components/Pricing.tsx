import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses getting started with SEO lead generation",
      features: [
        "Up to 5 websites",
        "Basic SEO optimization",
        "Lead tracking",
        "Email support",
        "Monthly reports"
      ],
      buttonText: "Start Free Trial",
      variant: "outline-primary" as const,
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses that need advanced lead generation tools",
      features: [
        "Up to 25 websites",
        "Advanced SEO optimization",
        "AI-powered lead scoring",
        "CRM integrations",
        "Real-time analytics",
        "Priority support",
        "Weekly reports"
      ],
      buttonText: "Start Free Trial",
      variant: "hero" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations requiring comprehensive SEO and lead generation solutions",
      features: [
        "Unlimited websites",
        "Custom SEO strategies",
        "Advanced lead automation",
        "API access",
        "White-label reporting",
        "Dedicated account manager",
        "Daily reports",
        "Custom integrations"
      ],
      buttonText: "Contact Sales",
      variant: "outline-primary" as const,
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Simple, Transparent
            <span className="block text-primary">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your business. Start with a 14-day free trial, 
            no credit card required.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-slide-up ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <Button 
                  variant={plan.variant} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.buttonText}
                </Button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <Check className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            All plans include a 14-day free trial and 24/7 customer support
          </p>
          <div className="inline-flex items-center space-x-4 text-sm">
            <span className="flex items-center">
              <Check className="w-4 h-4 text-secondary mr-2" />
              No setup fees
            </span>
            <span className="flex items-center">
              <Check className="w-4 h-4 text-secondary mr-2" />
              Cancel anytime
            </span>
            <span className="flex items-center">
              <Check className="w-4 h-4 text-secondary mr-2" />
              30-day money back guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
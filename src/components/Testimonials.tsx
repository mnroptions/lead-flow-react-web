import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Marketing Director",
      company: "TechFlow Solutions",
      content: "Our lead generation increased by 300% within the first quarter. The SEO optimization tools are incredibly powerful and easy to use.",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "David Chen",
      role: "CEO",
      company: "GrowthLab",
      content: "The analytics dashboard gives us insights we never had before. We can track every lead source and optimize our conversion funnel in real-time.",
      rating: 5,
      avatar: "DC"
    },
    {
      name: "Emily Rodriguez",
      role: "Digital Marketing Manager",
      company: "InnovateCore",
      content: "The AI-powered keyword research has transformed our content strategy. We're ranking for keywords we never thought possible.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Trusted by
            <span className="block text-primary">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of successful businesses that have transformed their lead generation 
            with our platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 space-y-6">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                
                {/* Testimonial */}
                <blockquote className="text-lg leading-relaxed text-foreground">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
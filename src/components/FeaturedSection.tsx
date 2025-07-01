
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Flame } from "lucide-react";

const featuredDeals = [
  {
    title: "Summer Collection",
    discount: "Up to 70% OFF",
    description: "Trendy summer outfits for every occasion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop&crop=faces",
    badge: "Hot Deal",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Designer Brands",
    discount: "Exclusive Prices",
    description: "Premium fashion from top designers",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=300&fit=crop&crop=faces",
    badge: "Premium",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "New Arrivals",
    discount: "Fresh Styles",
    description: "Latest fashion trends just for you",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop&crop=faces",
    badge: "New",
    color: "from-blue-500 to-cyan-500"
  }
];

export function FeaturedSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 via-background to-accent/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blush/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-4 py-2 rounded-full mb-4 animate-slide-up">
            <Flame size={16} />
            <span className="text-sm font-medium">Featured Deals</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-up">
            Exclusive Fashion Deals
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Don't miss out on these limited-time offers from our premium collection
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDeals.map((deal, index) => (
            <div
              key={deal.title}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${deal.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                
                {/* Badge */}
                <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800 hover:bg-white">
                  {deal.badge}
                </Badge>
                
                {/* Stars decoration */}
                <div className="absolute top-4 right-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="text-yellow-400 fill-current opacity-80"
                    />
                  ))}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {deal.title}
                </h3>
                
                <div className="text-xl font-semibold text-blush mb-3">
                  {deal.discount}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {deal.description}
                </p>
                
                <Button 
                  variant="fashion" 
                  className="w-full group-hover:shadow-glow transition-all duration-300"
                >
                  Shop Now
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


import { ShoppingBag, Users, Award, Zap } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Happy Customers",
    description: "Satisfied shoppers worldwide",
    gradient: "from-blush to-blush/70"
  },
  {
    icon: ShoppingBag,
    value: "50K+",
    label: "Products",
    description: "Curated fashion items",
    gradient: "from-gold to-gold/70"
  },
  {
    icon: Award,
    value: "500+",
    label: "Brands",
    description: "Premium fashion partners",
    gradient: "from-primary to-primary/70"
  },
  {
    icon: Zap,
    value: "24/7",
    label: "Support",
    description: "Always here to help",
    gradient: "from-green-500 to-green-400"
  }
];

export function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blush/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Fashion Enthusiasts
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who have found their perfect style with Deal Dresser
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group bg-card/50 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-elegant transition-all duration-300 hover:scale-105 border border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-card group-hover:shadow-glow transition-all duration-300`}>
                <stat.icon size={24} className="text-white" />
              </div>
              
              <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {stat.value}
              </div>
              
              <div className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


import { useState } from "react";
import { Header } from "@/components/Header";
import { StyleFilter } from "@/components/StyleFilter";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductGrid } from "@/components/ProductGrid";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { FeaturedSection } from "@/components/FeaturedSection";

const Index = () => {
  const [selectedStyle, setSelectedStyle] = useState<"western" | "eastern" | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection />
      
      <StatsSection />
      
      <StyleFilter 
        selectedStyle={selectedStyle} 
        onStyleChange={setSelectedStyle} 
      />
      
      <CategoryFilter 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory} 
      />
      
      <FeaturedSection />
      
      <ProductGrid 
        selectedStyle={selectedStyle} 
        selectedCategory={selectedCategory} 
      />
      
      {/* Premium Footer */}
      <footer className="bg-gradient-to-br from-primary via-navy-deep to-primary text-primary-foreground py-20 mt-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blush/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow animate-float">
            <span className="text-white font-bold text-2xl">DD</span>
          </div>
          
          <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white to-primary-foreground/80 bg-clip-text text-transparent">
            Deal Dresser
          </h3>
          <p className="text-primary-foreground/90 mb-8 text-lg max-w-md mx-auto">
            Your premium fashion destination for trending styles and unbeatable deals
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blush mb-2">10K+</div>
              <div className="text-primary-foreground/70">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold mb-2">500+</div>
              <div className="text-primary-foreground/70">Premium Brands</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">24/7</div>
              <div className="text-primary-foreground/70">Customer Support</div>
            </div>
          </div>
          
          <div className="flex justify-center gap-8 text-sm text-primary-foreground/60 border-t border-primary-foreground/20 pt-8">
            <span>© 2024 Deal Dresser</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>Support</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

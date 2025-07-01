
import { useState } from "react";
import { Header } from "@/components/Header";
import { StyleFilter } from "@/components/StyleFilter";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductGrid } from "@/components/ProductGrid";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { FeaturedSection } from "@/components/FeaturedSection";
import { MobileQuickActions } from "@/components/MobileQuickActions";
import { TrendingBanner } from "@/components/TrendingBanner";
import { CategoryQuickSelect } from "@/components/CategoryQuickSelect";

const Index = () => {
  const [selectedStyle, setSelectedStyle] = useState<"western" | "eastern" | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <TrendingBanner />
      
      <HeroSection />
      
      <CategoryQuickSelect />
      
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
      
      <MobileQuickActions />
      
      {/* Enhanced Premium Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 mt-20 relative overflow-hidden pb-20 md:pb-16">
        {/* Enhanced background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-24 h-24 md:w-32 md:h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 md:w-40 md:h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-60 md:h-60 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl animate-float">
            <span className="text-white font-bold text-xl md:text-2xl">DD</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Deal Dresser
          </h3>
          <p className="text-white/90 mb-8 text-base md:text-lg max-w-md mx-auto">
            Your premium fashion destination for trending styles and unbeatable deals
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-pink-400 mb-2">10K+</div>
              <div className="text-white/70 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-white/70 text-sm">Premium Brands</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-xl md:text-2xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/70 text-sm">Customer Support</div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-white/60 border-t border-white/20 pt-6">
            <span>© 2024 Deal Dresser</span>
            <span className="hidden sm:inline">•</span>
            <span>Privacy Policy</span>
            <span className="hidden sm:inline">•</span>
            <span>Terms of Service</span>
            <span className="hidden sm:inline">•</span>
            <span>Support</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

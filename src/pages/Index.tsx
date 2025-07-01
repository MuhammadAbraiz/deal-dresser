import { useState } from "react";
import { Header } from "@/components/Header";
import { StyleFilter } from "@/components/StyleFilter";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductGrid } from "@/components/ProductGrid";

const Index = () => {
  const [selectedStyle, setSelectedStyle] = useState<"western" | "eastern" | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-white py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/20 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-up">
            Deal Dresser
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-slide-up">
            Dress to impress with curated fashion deals
          </p>
          <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto animate-slide-up">
            Discover trending styles from Eastern elegance to Western chic. 
            Find your perfect look with our smart filtering system.
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blush/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </section>

      <StyleFilter 
        selectedStyle={selectedStyle} 
        onStyleChange={setSelectedStyle} 
      />
      
      <CategoryFilter 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory} 
      />
      
      <ProductGrid 
        selectedStyle={selectedStyle} 
        selectedCategory={selectedCategory} 
      />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">DD</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Deal Dresser</h3>
          <p className="text-primary-foreground/80 mb-6">
            Your fashion destination for trending styles and unbeatable deals
          </p>
          <div className="flex justify-center gap-6 text-sm text-primary-foreground/60">
            <span>© 2024 Deal Dresser</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
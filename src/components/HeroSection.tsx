
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white py-24 lg:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blush/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gold/15 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-10 right-1/4 w-20 h-20 bg-white/5 rounded-full blur-xl animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-slide-up">
          <Sparkles size={16} className="text-gold" />
          <span className="text-sm font-medium">Premium Fashion Platform</span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up leading-tight">
          <span className="bg-gradient-to-r from-white via-blush-soft to-white bg-clip-text text-transparent">
            Deal Dresser
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="text-2xl md:text-3xl mb-6 text-white/90 animate-slide-up font-light">
          Dress to impress with curated fashion deals
        </p>
        
        {/* Description */}
        <p className="text-lg md:text-xl mb-10 text-white/80 max-w-3xl mx-auto animate-slide-up leading-relaxed">
          Discover trending styles from Eastern elegance to Western chic. 
          Find your perfect look with our smart filtering system and exclusive deals from premium brands.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button 
            size="lg" 
            variant="fashion" 
            className="text-lg px-8 py-4 h-auto bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-elegant"
          >
            Start Shopping
            <ArrowRight size={20} className="ml-2" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-4 h-auto border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
          >
            <TrendingUp size={20} className="mr-2" />
            View Trending
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-12 flex justify-center items-center gap-8 text-white/60 animate-slide-up">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm">Trusted by 10K+ customers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <span className="text-sm">500+ Premium brands</span>
          </div>
        </div>
      </div>
    </section>
  );
}

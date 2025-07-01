
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Search, Heart } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [searchFocus, setSearchFocus] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900 text-white py-16 lg:py-24 min-h-[90vh] flex items-center">
      {/* Enhanced mobile-first animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-4 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-xl animate-float opacity-70"></div>
        <div className="absolute bottom-20 right-4 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-2xl animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-16 right-1/4 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur-xl animate-float opacity-60" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Mobile-optimized gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-purple-900/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Enhanced mobile badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-slide-up border border-white/20">
          <Sparkles size={14} className="text-yellow-400 animate-pulse" />
          <span className="text-xs md:text-sm font-medium bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">Premium Fashion Hub</span>
        </div>
        
        {/* Mobile-optimized main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 animate-slide-up leading-tight">
          <span className="bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
            Deal Dresser
          </span>
        </h1>
        
        {/* Mobile-friendly subheading */}
        <p className="text-lg md:text-2xl lg:text-3xl mb-4 text-pink-100 animate-slide-up font-light">
          Dress to impress with curated fashion deals
        </p>
        
        {/* Mobile search bar */}
        <div className="max-w-md mx-auto mb-8 animate-slide-up">
          <div className={`relative transition-all duration-300 ${searchFocus ? 'scale-105' : ''}`}>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for styles, brands..."
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/20 transition-all duration-300"
              onFocus={() => setSearchFocus(true)}
              onBlur={() => setSearchFocus(false)}
            />
          </div>
        </div>
        
        {/* Mobile-optimized description */}
        <p className="text-base md:text-lg mb-8 text-white/90 max-w-2xl mx-auto animate-slide-up leading-relaxed px-4">
          Discover trending styles from Eastern elegance to Western chic. 
          Find your perfect look with exclusive deals from premium brands.
        </p>
        
        {/* Mobile-first CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-slide-up px-4">
          <Button 
            size="lg" 
            className="w-full sm:w-auto text-base px-6 py-3 h-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0"
          >
            Start Shopping
            <ArrowRight size={18} className="ml-2" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto text-base px-6 py-3 h-auto border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 bg-white/5 backdrop-blur-sm"
          >
            <TrendingUp size={18} className="mr-2" />
            View Trending
          </Button>
        </div>
        
        {/* Enhanced mobile trust indicators */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 text-white/70 animate-slide-up px-4">
          <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs md:text-sm">10K+ Happy Customers</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 backdrop-blur-sm">
            <Heart size={12} className="text-pink-400 animate-pulse" />
            <span className="text-xs md:text-sm">500+ Premium Brands</span>
          </div>
        </div>
      </div>
    </section>
  );
}

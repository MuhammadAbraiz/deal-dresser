import { useState, useMemo, useCallback } from "react";
import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";
import { PriceFilter } from "@/components/PriceFilter";
import { Search, Grid, List, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";

const Index = () => {
  const [selectedStyle, setSelectedStyle] = useState<"western" | "eastern" | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 21000]);

  // Calculate max price from products
  const maxPrice = useMemo(() => {
    return Math.max(...products.map(p => p.price));
  }, []);

  // Memoized categories with counts
  const categories = useMemo(() => [
    { id: "all", name: "All", count: products.length },
    { id: "tops", name: "Tops", count: products.filter(p => p.category === "tops").length },
    { id: "dresses", name: "Dresses", count: products.filter(p => p.category === "dresses").length },
    { id: "outerwear", name: "Outerwear", count: products.filter(p => p.category === "outerwear").length },
    { id: "footwear", name: "Footwear", count: products.filter(p => p.category === "footwear").length },
    { id: "sets", name: "Sets", count: products.filter(p => p.category === "sets").length },
    { id: "bottoms", name: "Bottoms", count: products.filter(p => p.category === "bottoms").length },
    { id: "accessories", name: "Accessories", count: products.filter(p => p.category === "accessories").length },
  ], []);

  // Optimized handlers
  const handleStyleChange = useCallback((style: "western" | "eastern" | null) => {
    setSelectedStyle(style);
  }, []);

  const handleCategoryChange = useCallback((category: string | null) => {
    setSelectedCategory(category);
  }, []);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  const handleViewModeChange = useCallback((mode: "grid" | "list") => {
    setViewMode(mode);
  }, []);

  const handlePriceChange = useCallback((min: number, max: number) => {
    setPriceRange([min, max]);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
              <Sparkles size={14} className="sm:w-4 sm:h-4" />
              Premium Fashion Collection
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 tracking-tight">
              Discover Your
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> Style</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed px-4">
              Curated fashion pieces for every occasion. Find your perfect look with our exclusive collection.
            </p>
          </div>
          
          {/* Enhanced Search Bar */}
          <div className="max-w-lg mx-auto mb-8 sm:mb-12">
            <div className="relative group">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5 group-focus-within:text-primary transition-colors" />
              <Input
                type="text"
                placeholder="Search for styles, brands, or categories..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 sm:pl-12 pr-4 h-12 sm:h-14 text-base border-2 focus:border-primary transition-all duration-200 bg-background/50 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Filters Section */}
      <section className="border-b border-border/50 bg-card/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 py-6 sm:py-8">
            {/* Style Filter */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              <Button
                variant={selectedStyle === null ? "default" : "outline"}
                size="sm"
                onClick={() => handleStyleChange(null)}
                className="font-medium flex-shrink-0"
              >
                All Styles
              </Button>
              <Button
                variant={selectedStyle === "western" ? "default" : "outline"}
                size="sm"
                onClick={() => handleStyleChange("western")}
                className="font-medium flex-shrink-0"
              >
                Western
              </Button>
              <Button
                variant={selectedStyle === "eastern" ? "default" : "outline"}
                size="sm"
                onClick={() => handleStyleChange("eastern")}
                className="font-medium flex-shrink-0"
              >
                Eastern
              </Button>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap overflow-x-auto scrollbar-hide">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryChange(category.id === "all" ? null : category.id)}
                  className="font-medium flex-shrink-0"
                >
                  {category.name}
                  {category.count > 0 && (
                    <Badge variant="secondary" className="ml-2 text-xs font-medium">
                      {category.count}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>

            {/* Price Filter */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <PriceFilter 
                onPriceChange={handlePriceChange}
                maxPrice={maxPrice}
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-1 ml-auto flex-shrink-0">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => handleViewModeChange("grid")}
                className="font-medium"
              >
                <Grid size={16} />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => handleViewModeChange("list")}
                className="font-medium"
              >
                <List size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <ProductGrid 
            selectedStyle={selectedStyle} 
            selectedCategory={selectedCategory} 
            viewMode={viewMode}
            priceRange={priceRange}
            searchQuery={searchQuery}
          />
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="border-t border-border/50 py-8 sm:py-12 mt-16 sm:mt-20 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary to-primary/80 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm sm:text-lg tracking-wider">DD</span>
            </div>
            <div className="text-left">
              <span className="text-lg sm:text-xl font-bold text-foreground tracking-tight">Deal Dresser</span>
              <p className="text-xs text-muted-foreground font-medium">Premium Fashion Platform</p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm font-medium">
            © 2024 Deal Dresser. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

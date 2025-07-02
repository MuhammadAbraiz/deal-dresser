import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { Product, products } from "@/data/products";
import { useState } from "react";

interface ProductGridProps {
  selectedStyle: "western" | "eastern" | null;
  selectedCategory: string | null;
  viewMode?: "grid" | "list";
  priceRange?: [number, number];
  searchQuery?: string;
}

export function ProductGrid({ 
  selectedStyle, 
  selectedCategory, 
  viewMode = "grid",
  priceRange = [0, 21000],
  searchQuery = ""
}: ProductGridProps) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const [sortBy, setSortBy] = useState<"price" | "trending">("trending");

  const filteredProducts = products.filter(product => {
    // Style filter
    if (selectedStyle && product.style !== selectedStyle) return false;
    
    // Category filter
    if (selectedCategory && selectedCategory !== "all" && product.category !== selectedCategory) return false;
    
    // Price filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const searchableText = `${product.name} ${product.brand} ${product.category} ${product.description} ${product.tags.join(' ')}`.toLowerCase();
      if (!searchableText.includes(query)) return false;
    }
    
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price") {
      return a.price - b.price;
    } else {
      return b.trending - a.trending;
    }
  });

  const handleWishlistToggle = (product: Product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleQuickAdd = (product: Product) => {
    addToCart(product);
  };

  if (viewMode === "list") {
    return (
      <div className="space-y-4">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="flex gap-4 p-4 bg-card rounded-lg border border-border/50 hover:border-border transition-colors"
          >
            <Link to={`/product/${product.id}`} className="flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-cover rounded-md"
              />
            </Link>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    {product.brand}
                  </p>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-base font-medium text-foreground hover:text-primary transition-colors truncate">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {product.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 ml-4">
                  <button 
                    onClick={() => handleWishlistToggle(product)}
                    className="p-2 hover:bg-muted rounded-md transition-colors"
                  >
                    <Heart 
                      size={16} 
                      className={`${isInWishlist(product.id) ? 'text-red-500 fill-red-500' : 'text-muted-foreground'}`} 
                    />
                  </button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handleQuickAdd(product)}
                  >
                    <ShoppingCart size={14} className="mr-1" />
                    Add
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-foreground">
                    PKR {product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      PKR {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {product.trending}% trending
                  </span>
                  <span className="text-xs text-muted-foreground capitalize">
                    {product.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {sortedProducts.map((product) => (
        <div
          key={product.id}
          className="group bg-card rounded-lg border border-border/50 overflow-hidden hover:border-border transition-all duration-200"
        >
          <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Trending Badge */}
            <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
              {product.trending}%
            </div>
          </Link>
          
          {/* Wishlist Button */}
          <button 
            onClick={() => handleWishlistToggle(product)}
            className="absolute top-2 right-2 w-8 h-8 bg-background/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-background"
          >
            <Heart 
              size={14} 
              className={`${isInWishlist(product.id) ? 'text-red-500 fill-red-500' : 'text-muted-foreground'}`} 
            />
          </button>
          
          <div className="p-4">
            <div className="mb-2">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                {product.brand}
              </p>
              <Link to={`/product/${product.id}`}>
                <h3 className="text-sm font-medium text-foreground line-clamp-2 hover:text-primary transition-colors">
                  {product.name}
                </h3>
              </Link>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-foreground">
                  PKR {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-muted-foreground line-through">
                    PKR {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => handleQuickAdd(product)}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <ShoppingCart size={14} />
              </Button>
            </div>
          </div>
        </div>
      ))}

      {sortedProducts.length === 0 && (
        <div className="col-span-full text-center py-16">
          <div className="text-4xl mb-4 opacity-20">👗</div>
          <h3 className="text-lg font-medium text-foreground mb-2">No products found</h3>
          <p className="text-muted-foreground">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
}
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { Product, products } from "@/data/products";
import { useState } from "react";

interface ProductGridProps {
  selectedStyle: "western" | "eastern" | null;
  selectedCategory: string | null;
}

export function ProductGrid({ selectedStyle, selectedCategory }: ProductGridProps) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const [sortBy, setSortBy] = useState<"price" | "trending">("trending");

  const filteredProducts = products.filter(product => {
    if (selectedStyle && product.style !== selectedStyle) return false;
    if (selectedCategory && selectedCategory !== "all" && product.category !== selectedCategory) return false;
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Trending Now</h2>
          <p className="text-muted-foreground">
            {sortedProducts.length} products found
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant={sortBy === "price" ? "fashion" : "filter"}
            size="sm"
            onClick={() => setSortBy("price")}
          >
            Sort by Price
          </Button>
          <Button 
            variant={sortBy === "trending" ? "fashion" : "filter"}
            size="sm"
            onClick={() => setSortBy("trending")}
          >
            Sort by Trending
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-slide-up"
          >
            <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Trending Badge */}
              <div className="absolute top-3 left-3 bg-blush text-white px-2 py-1 rounded-full text-xs font-medium">
                {product.trending}% trending
              </div>
            </Link>
            
            {/* Wishlist Button */}
            <button 
              onClick={() => handleWishlistToggle(product)}
              className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
            >
              <Heart 
                size={16} 
                className={`${isInWishlist(product.id) ? 'text-blush fill-blush' : 'text-gray-600 hover:text-blush'}`} 
              />
            </button>
            
            {/* Quick Add to Cart */}
            <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button 
                size="sm" 
                variant="fashion" 
                className="w-full"
                onClick={() => handleQuickAdd(product)}
              >
                <ShoppingCart size={16} />
                Quick Add
              </Button>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    {product.brand}
                  </p>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-sm font-medium text-foreground line-clamp-2 hover:text-blush transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                </div>
              </div>
              
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
            </div>
          </div>
        ))}
      </div>

      {sortedProducts.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4 opacity-20">👗</div>
          <h3 className="text-xl font-medium text-foreground mb-2">No products found</h3>
          <p className="text-muted-foreground">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
}
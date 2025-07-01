import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { ShoppingCart, X, ArrowLeft } from "lucide-react";

export default function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="text-6xl mb-4 opacity-20">💖</div>
          <h1 className="text-2xl font-bold mb-4">Your wishlist is empty</h1>
          <p className="text-muted-foreground mb-8">
            Save items you love to your wishlist and shop them later
          </p>
          <Link to="/">
            <Button variant="fashion" size="lg">
              Discover Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft size={16} />
              Back to Shopping
            </Link>
          </div>
          
          <h1 className="text-2xl font-bold">My Wishlist ({wishlist.length})</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </Link>
                
                {/* Trending Badge */}
                <div className="absolute top-3 left-3 bg-blush text-white px-2 py-1 rounded-full text-xs font-medium">
                  {product.trending}% trending
                </div>
                
                {/* Remove Button */}
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X size={16} className="text-gray-600" />
                </button>
                
                {/* Add to Cart Button */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    variant="fashion"
                    className="w-full"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </Button>
                </div>
              </div>
              
              <div className="p-4">
                <div className="mb-2">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    {product.brand}
                  </p>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-sm font-medium text-foreground line-clamp-2 hover:text-blush transition-colors">
                      {product.name}
                    </h3>
                  </Link>
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
      </div>
    </div>
  );
}
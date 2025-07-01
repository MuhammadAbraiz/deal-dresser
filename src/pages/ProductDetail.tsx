import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Heart, ShoppingCart, Star, ArrowLeft, Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { getProductById } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const { toast } = useToast();
  
  const product = getProductById(Number(id));
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/">
            <Button variant="fashion">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.sizes.length > 0 && !selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose your preferred size before adding to cart.",
        variant: "destructive",
      });
      return;
    }

    if (product.colors.length > 0 && !selectedColor) {
      toast({
        title: "Please select a color",
        description: "Choose your preferred color before adding to cart.",
        variant: "destructive",
      });
      return;
    }

    addToCart(product, quantity, selectedSize, selectedColor);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist(product);
      toast({
        title: "Added to wishlist!",
        description: `${product.name} has been added to your wishlist.`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft size={16} />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl bg-secondary/20">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[600px] object-cover"
              />
              {product.trending >= 90 && (
                <div className="absolute top-4 left-4 bg-blush text-white px-3 py-1 rounded-full text-sm font-medium">
                  🔥 Hot Trending
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-2">
                {product.brand}
              </p>
              <h1 className="text-3xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < Math.floor(product.rating)
                          ? "text-gold fill-gold"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <div className="bg-blush text-white px-2 py-1 rounded-full text-xs">
                  {product.trending}% trending
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-foreground">
                  PKR {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    PKR {product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                    Save PKR {(product.originalPrice - product.price).toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-medium mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-blush rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Selection */}
            {product.sizes.length > 0 && (
              <div>
                <h3 className="text-lg font-medium mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg transition-colors ${
                        selectedSize === size
                          ? "border-blush bg-blush text-white"
                          : "border-border hover:border-blush"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div>
                <h3 className="text-lg font-medium mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-lg transition-colors ${
                        selectedColor === color
                          ? "border-blush bg-blush text-white"
                          : "border-border hover:border-blush"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-medium mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-muted transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 min-w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-muted transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <span className="text-sm text-muted-foreground">
                  Total: PKR {(product.price * quantity).toLocaleString()}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <Button
                variant="fashion"
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart size={20} />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={handleWishlistToggle}
              >
                <Heart
                  size={20}
                  className={isInWishlist(product.id) ? "fill-blush text-blush" : ""}
                />
              </Button>
            </div>

            {product.inStock && (
              <p className="text-sm text-green-600 font-medium">✓ In Stock - Ready to ship</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
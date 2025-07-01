import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

export function Header() {
  const { getTotalItems, wishlist } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center animate-float">
              <span className="text-white font-bold text-lg">DD</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Deal Dresser</h1>
              <p className="text-xs text-muted-foreground">Dress to impress</p>
            </div>
          </Link>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link to="/wishlist">
                <Heart size={20} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-blush text-white text-xs rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>
            </Button>
            
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link to="/cart">
                <ShoppingCart size={20} />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
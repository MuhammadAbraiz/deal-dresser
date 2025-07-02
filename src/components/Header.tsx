import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Sun, Moon } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function Header() {
  const { getTotalItems, wishlist } = useCart();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary to-primary/80 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <span className="text-white font-bold text-sm sm:text-lg tracking-wider">DD</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-foreground tracking-tight">Deal Dresser</h1>
              <p className="text-xs text-muted-foreground font-medium">Dress to impress</p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-base font-bold text-foreground tracking-tight">Deal Dresser</h1>
            </div>
          </Link>
          
          <div className="flex items-center gap-1 sm:gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="h-8 w-8 sm:h-10 sm:w-10 hover:bg-muted/50 transition-colors"
            >
              {theme === 'light' ? <Moon size={16} className="sm:w-5 sm:h-5" /> : <Sun size={16} className="sm:w-5 sm:h-5" />}
            </Button>
            
            <Button variant="ghost" size="icon" className="relative h-8 w-8 sm:h-10 sm:w-10" asChild>
              <Link to="/wishlist">
                <Heart size={16} className="sm:w-5 sm:h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {wishlist.length > 9 ? '9+' : wishlist.length}
                  </span>
                )}
              </Link>
            </Button>
            
            <Button variant="ghost" size="icon" className="relative h-8 w-8 sm:h-10 sm:w-10" asChild>
              <Link to="/cart">
                <ShoppingCart size={16} className="sm:w-5 sm:h-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-primary text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {getTotalItems() > 9 ? '9+' : getTotalItems()}
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
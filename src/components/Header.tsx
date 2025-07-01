import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center animate-float">
              <span className="text-white font-bold text-lg">DD</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Deal Dresser</h1>
              <p className="text-xs text-muted-foreground">Dress to impress</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Heart size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-blush text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
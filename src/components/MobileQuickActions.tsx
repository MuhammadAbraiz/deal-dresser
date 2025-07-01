
import { ShoppingBag, Heart, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileQuickActions() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 p-4 z-50 md:hidden">
      <div className="flex justify-around items-center">
        <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 text-gray-600 hover:text-purple-600 transition-colors">
          <Search size={20} />
          <span className="text-xs">Search</span>
        </Button>
        
        <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 text-gray-600 hover:text-purple-600 transition-colors">
          <Heart size={20} />
          <span className="text-xs">Wishlist</span>
        </Button>
        
        <Button 
          size="sm" 
          className="flex flex-col items-center gap-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full w-12 h-12 p-0"
        >
          <ShoppingBag size={20} />
        </Button>
        
        <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 text-gray-600 hover:text-purple-600 transition-colors">
          <User size={20} />
          <span className="text-xs">Profile</span>
        </Button>
        
        <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1 text-gray-600 hover:text-purple-600 transition-colors">
          <Menu size={20} />
          <span className="text-xs">Menu</span>
        </Button>
      </div>
    </div>
  );
}

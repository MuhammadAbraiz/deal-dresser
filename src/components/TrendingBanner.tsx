
import { TrendingUp, Fire, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function TrendingBanner() {
  const trendingItems = [
    "🔥 Summer Collection 70% OFF",
    "⭐ New Designer Arrivals",
    "💎 Premium Brands Available",
    "🎯 Flash Sale Ending Soon"
  ];

  return (
    <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <div className="inline-flex items-center gap-8">
          {trendingItems.map((item, index) => (
            <div key={index} className="inline-flex items-center gap-2">
              <Fire size={16} className="text-yellow-300" />
              <span className="font-medium text-sm">{item}</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {trendingItems.map((item, index) => (
            <div key={`duplicate-${index}`} className="inline-flex items-center gap-2">
              <Fire size={16} className="text-yellow-300" />
              <span className="font-medium text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

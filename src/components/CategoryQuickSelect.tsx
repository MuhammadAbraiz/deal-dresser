
import { Button } from "@/components/ui/button";
import { Shirt, Crown, Watch, Zap } from "lucide-react";

const quickCategories = [
  { name: "Trending", icon: Zap, color: "from-yellow-400 to-orange-500", count: "2.5K" },
  { name: "Dresses", icon: Crown, color: "from-pink-400 to-rose-500", count: "1.8K" },
  { name: "Shirts", icon: Shirt, color: "from-blue-400 to-indigo-500", count: "3.2K" },
  { name: "Accessories", icon: Watch, color: "from-purple-400 to-violet-500", count: "950" },
];

export function CategoryQuickSelect() {
  return (
    <section className="py-8 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <h3 className="text-xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Shop by Category
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickCategories.map((category, index) => (
            <Button
              key={category.name}
              variant="ghost"
              className="h-auto p-6 flex flex-col items-center gap-3 hover:scale-105 transition-all duration-300 border border-gray-200 hover:border-purple-300 rounded-2xl group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <category.icon size={20} className="text-white" />
              </div>
              
              <div className="text-center">
                <div className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                  {category.name}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {category.count}+ items
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

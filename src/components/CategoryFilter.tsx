import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", name: "All", emoji: "🛍️" },
  { id: "tops", name: "Tops", emoji: "👕" },
  { id: "dresses", name: "Dresses", emoji: "👗" },
  { id: "outerwear", name: "Outerwear", emoji: "🧥" },
  { id: "footwear", name: "Footwear", emoji: "👟" },
];

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="w-full py-6 bg-background border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "fashion" : "filter"}
              size="sm"
              onClick={() => onCategoryChange(category.id === "all" ? null : category.id)}
              className="flex-shrink-0 gap-2"
            >
              <span>{category.emoji}</span>
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
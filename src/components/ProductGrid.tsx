import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  trending: number;
  category: string;
  style: "western" | "eastern";
}

const products: Product[] = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    brand: "UrbanEdge",
    price: 89,
    originalPrice: 120,
    image: product1,
    trending: 92,
    category: "outerwear",
    style: "western"
  },
  {
    id: 2,
    name: "Blush Pink Blouse",
    brand: "SoftStyle",
    price: 45,
    image: product2,
    trending: 87,
    category: "tops",
    style: "western"
  },
  {
    id: 3,
    name: "Elegant Black Dress",
    brand: "Elegance",
    price: 125,
    originalPrice: 150,
    image: product3,
    trending: 95,
    category: "dresses",
    style: "eastern"
  },
  {
    id: 4,
    name: "White Fashion Sneakers",
    brand: "ComfortWalk",
    price: 78,
    image: product4,
    trending: 89,
    category: "footwear",
    style: "western"
  }
];

interface ProductGridProps {
  selectedStyle: "western" | "eastern" | null;
  selectedCategory: string | null;
}

export function ProductGrid({ selectedStyle, selectedCategory }: ProductGridProps) {
  const filteredProducts = products.filter(product => {
    if (selectedStyle && product.style !== selectedStyle) return false;
    if (selectedCategory && selectedCategory !== "all" && product.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Trending Now</h2>
          <p className="text-muted-foreground">
            {filteredProducts.length} products found
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button variant="filter" size="sm">
            Sort by Price
          </Button>
          <Button variant="filter" size="sm">
            Sort by Trending
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-slide-up"
          >
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Trending Badge */}
              <div className="absolute top-3 left-3 bg-blush text-white px-2 py-1 rounded-full text-xs font-medium">
                {product.trending}% trending
              </div>
              
              {/* Wishlist Button */}
              <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
                <Heart size={16} className="text-gray-600 hover:text-blush" />
              </button>
              
              {/* Quick Add to Cart */}
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button size="sm" variant="fashion" className="w-full">
                  <ShoppingCart size={16} />
                  Quick Add
                </Button>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    {product.brand}
                  </p>
                  <h3 className="text-sm font-medium text-foreground line-clamp-2">
                    {product.name}
                  </h3>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-foreground">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4 opacity-20">👗</div>
          <h3 className="text-xl font-medium text-foreground mb-2">No products found</h3>
          <p className="text-muted-foreground">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
}
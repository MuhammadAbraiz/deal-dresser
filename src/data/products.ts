import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  trending: number;
  category: string;
  style: "western" | "eastern";
  description: string;
  features: string[];
  sizes: string[];
  colors: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    brand: "UrbanEdge",
    price: 12500, // PKR
    originalPrice: 16000,
    image: product1,
    trending: 92,
    category: "outerwear",
    style: "western",
    description: "A timeless classic that never goes out of style. This premium denim jacket features a comfortable fit and durable construction that will last for years.",
    features: [
      "100% Cotton Denim",
      "Classic Button Closure",
      "Multiple Pockets",
      "Machine Washable",
      "Pre-shrunk Fabric"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Classic Blue", "Dark Wash", "Light Blue"],
    inStock: true,
    rating: 4.5,
    reviews: 127
  },
  {
    id: 2,
    name: "Blush Pink Blouse",
    brand: "SoftStyle",
    price: 6300, // PKR
    image: product2,
    trending: 87,
    category: "tops",
    style: "western",
    description: "Elegant and versatile blouse perfect for both office and casual wear. Made from soft, breathable fabric that drapes beautifully.",
    features: [
      "Soft Polyester Blend",
      "Breathable Fabric",
      "Easy Care",
      "Wrinkle Resistant",
      "Comfortable Fit"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blush Pink", "White", "Cream", "Light Blue"],
    inStock: true,
    rating: 4.7,
    reviews: 89
  },
  {
    id: 3,
    name: "Elegant Black Dress",
    brand: "Elegance",
    price: 17500, // PKR
    originalPrice: 21000,
    image: product3,
    trending: 95,
    category: "dresses",
    style: "eastern",
    description: "Sophisticated black dress that combines traditional elegance with modern style. Perfect for special occasions and formal events.",
    features: [
      "Premium Fabric Blend",
      "Elegant Silhouette",
      "Hand-finished Details",
      "Comfortable Lining",
      "Professional Dry Clean"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy Blue", "Deep Purple"],
    inStock: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 4,
    name: "White Fashion Sneakers",
    brand: "ComfortWalk",
    price: 10900, // PKR
    image: product4,
    trending: 89,
    category: "footwear",
    style: "western",
    description: "Stylish white sneakers that combine comfort with modern design. Perfect for everyday wear and light sports activities.",
    features: [
      "Breathable Mesh Upper",
      "Cushioned Sole",
      "Non-slip Outsole",
      "Lightweight Design",
      "Easy to Clean"
    ],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    colors: ["Pure White", "Off-White", "White/Gray"],
    inStock: true,
    rating: 4.4,
    reviews: 203
  },
  {
    id: 5,
    name: "Traditional Kurta Set",
    brand: "Heritage",
    price: 8500,
    originalPrice: 11000,
    image: product3, // reusing image for demo
    trending: 78,
    category: "sets",
    style: "eastern",
    description: "Beautiful traditional kurta set with intricate embroidery. Perfect for cultural events and festive occasions.",
    features: [
      "Cotton Blend Fabric",
      "Hand Embroidery",
      "Comfortable Fit",
      "Traditional Design",
      "Easy Maintenance"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Cream", "White", "Light Blue", "Peach"],
    inStock: true,
    rating: 4.6,
    reviews: 92
  },
  {
    id: 6,
    name: "Casual T-Shirt",
    brand: "ComfortWear",
    price: 2800,
    image: product2, // reusing image for demo
    trending: 65,
    category: "tops",
    style: "western",
    description: "Comfortable cotton t-shirt for everyday wear. Soft fabric and relaxed fit make it perfect for casual outings.",
    features: [
      "100% Cotton",
      "Pre-shrunk",
      "Soft Touch",
      "Durable Print",
      "Machine Washable"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Gray", "Navy", "Red"],
    inStock: true,
    rating: 4.2,
    reviews: 315
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") return products;
  return products.filter(product => product.category === category);
};

export const getProductsByStyle = (style: "western" | "eastern"): Product[] => {
  return products.filter(product => product.style === style);
};
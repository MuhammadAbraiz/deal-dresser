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
  tags: string[];
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
    tags: ["denim", "jacket", "casual", "streetwear", "vintage", "classic", "blue", "comfortable", "durable", "pockets"],
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
    tags: ["blouse", "pink", "elegant", "office", "casual", "soft", "breathable", "versatile", "feminine", "workwear"],
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
    tags: ["dress", "black", "elegant", "formal", "occasion", "sophisticated", "traditional", "modern", "premium", "special"],
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
    tags: ["sneakers", "white", "comfortable", "casual", "sports", "everyday", "lightweight", "breathable", "modern", "clean"],
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
    image: product1, // reusing image for demo
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
    tags: ["kurta", "traditional", "ethnic", "embroidery", "cultural", "festive", "comfortable", "handmade", "elegant", "occasion"],
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
    tags: ["tshirt", "casual", "cotton", "comfortable", "everyday", "basic", "relaxed", "soft", "versatile", "affordable"],
    inStock: true,
    rating: 4.2,
    reviews: 315
  },
  {
    id: 7,
    name: "Premium Leather Handbag",
    brand: "LuxuryCraft",
    price: 25000,
    originalPrice: 32000,
    image: product3, // reusing image for demo
    trending: 91,
    category: "accessories",
    style: "western",
    description: "Exquisite leather handbag with premium craftsmanship. Features multiple compartments and elegant design for sophisticated women.",
    features: [
      "Genuine Leather",
      "Multiple Compartments",
      "Adjustable Strap",
      "Water Resistant",
      "Lifetime Warranty"
    ],
    sizes: ["One Size"],
    colors: ["Brown", "Black", "Tan", "Burgundy"],
    tags: ["handbag", "leather", "premium", "luxury", "elegant", "sophisticated", "compartments", "adjustable", "waterproof", "warranty"],
    inStock: true,
    rating: 4.9,
    reviews: 78
  },
  {
    id: 8,
    name: "Designer Anarkali Suit",
    brand: "RoyalFashion",
    price: 35000,
    originalPrice: 45000,
    image: product4, // reusing image for demo
    trending: 96,
    category: "sets",
    style: "eastern",
    description: "Stunning designer Anarkali suit with intricate work and premium fabric. Perfect for weddings and special celebrations.",
    features: [
      "Premium Silk Blend",
      "Hand Embroidered",
      "Heavy Work",
      "Matching Dupatta",
      "Dry Clean Only"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Green", "Blue", "Pink", "Purple"],
    tags: ["anarkali", "designer", "wedding", "silk", "embroidered", "heavy", "premium", "celebration", "traditional", "luxury"],
    inStock: true,
    rating: 4.9,
    reviews: 45
  },
  {
    id: 9,
    name: "High-Waist Skinny Jeans",
    brand: "DenimLux",
    price: 8900,
    originalPrice: 12000,
    image: product1, // reusing image for demo
    trending: 84,
    category: "bottoms",
    style: "western",
    description: "Trendy high-waist skinny jeans with stretch fabric for maximum comfort. Perfect for casual and semi-formal occasions.",
    features: [
      "Stretch Denim",
      "High Waist Design",
      "Skinny Fit",
      "Comfortable Stretch",
      "Machine Washable"
    ],
    sizes: ["24", "26", "28", "30", "32", "34"],
    colors: ["Dark Blue", "Black", "Light Blue", "Gray"],
    tags: ["jeans", "skinny", "highwaist", "denim", "stretch", "trendy", "casual", "comfortable", "versatile", "modern"],
    inStock: true,
    rating: 4.6,
    reviews: 234
  },
  {
    id: 10,
    name: "Elegant Saree Collection",
    brand: "TraditionalWeave",
    price: 18000,
    originalPrice: 25000,
    image: product2, // reusing image for demo
    trending: 88,
    category: "dresses",
    style: "eastern",
    description: "Beautiful handwoven saree with traditional motifs and premium silk fabric. Perfect for cultural events and celebrations.",
    features: [
      "Pure Silk",
      "Hand Woven",
      "Traditional Motifs",
      "Matching Blouse",
      "Dry Clean Only"
    ],
    sizes: ["Free Size"],
    colors: ["Red", "Green", "Blue", "Purple", "Orange"],
    tags: ["saree", "silk", "handwoven", "traditional", "cultural", "motifs", "elegant", "celebration", "ethnic", "premium"],
    inStock: true,
    rating: 4.8,
    reviews: 67
  },
  {
    id: 11,
    name: "Casual Summer Dress",
    brand: "SummerBreeze",
    price: 7200,
    image: product3, // reusing image for demo
    trending: 76,
    category: "dresses",
    style: "western",
    description: "Light and breezy summer dress perfect for warm weather. Features a flattering silhouette and comfortable fabric.",
    features: [
      "Light Cotton Blend",
      "Breathable Fabric",
      "A-Line Silhouette",
      "Easy Care",
      "Quick Dry"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Floral Print", "Solid Blue", "Striped", "Pastel Pink"],
    tags: ["dress", "summer", "casual", "breezy", "floral", "comfortable", "light", "breathable", "warm", "flattering"],
    inStock: true,
    rating: 4.5,
    reviews: 189
  },
  {
    id: 12,
    name: "Formal Business Shirt",
    brand: "ProfessionalWear",
    price: 5500,
    originalPrice: 7500,
    image: product4, // reusing image for demo
    trending: 82,
    category: "tops",
    style: "western",
    description: "Professional business shirt with crisp design and comfortable fit. Perfect for office wear and formal meetings.",
    features: [
      "Cotton Blend",
      "Wrinkle Resistant",
      "Professional Fit",
      "Easy Iron",
      "Breathable"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Light Blue", "Pink", "Lavender"],
    tags: ["shirt", "formal", "business", "office", "professional", "crisp", "wrinkle", "meeting", "workwear", "corporate"],
    inStock: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 13,
    name: "Stylish Winter Coat",
    brand: "WinterWarmth",
    price: 28000,
    originalPrice: 35000,
    image: product1, // reusing image for demo
    trending: 93,
    category: "outerwear",
    style: "western",
    description: "Warm and stylish winter coat with premium insulation. Features a modern design with practical functionality.",
    features: [
      "Premium Wool Blend",
      "Warm Insulation",
      "Water Resistant",
      "Multiple Pockets",
      "Detachable Hood"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Camel", "Gray"],
    tags: ["coat", "winter", "warm", "wool", "insulated", "waterproof", "pockets", "hood", "stylish", "premium"],
    inStock: true,
    rating: 4.8,
    reviews: 98
  },
  {
    id: 14,
    name: "Traditional Lehenga Set",
    brand: "BridalCollection",
    price: 45000,
    originalPrice: 60000,
    image: product2, // reusing image for demo
    trending: 97,
    category: "sets",
    style: "eastern",
    description: "Exquisite bridal lehenga set with heavy embroidery and premium fabric. Perfect for weddings and grand celebrations.",
    features: [
      "Premium Silk",
      "Heavy Embroidery",
      "Matching Blouse",
      "Designer Dupatta",
      "Custom Fitting"
    ],
    sizes: ["Custom"],
    colors: ["Red", "Pink", "Purple", "Gold", "Silver"],
    tags: ["lehenga", "bridal", "wedding", "heavy", "embroidery", "silk", "premium", "celebration", "traditional", "custom"],
    inStock: true,
    rating: 5.0,
    reviews: 23
  },
  {
    id: 15,
    name: "Comfortable Flats",
    brand: "WalkEase",
    price: 6800,
    originalPrice: 8500,
    image: product3, // reusing image for demo
    trending: 79,
    category: "footwear",
    style: "western",
    description: "Comfortable and stylish flats perfect for everyday wear. Features cushioned sole and breathable material.",
    features: [
      "Breathable Material",
      "Cushioned Sole",
      "Lightweight",
      "Slip-on Design",
      "Easy to Clean"
    ],
    sizes: ["5", "6", "7", "8", "9", "10"],
    colors: ["Black", "Brown", "Navy", "Red"],
    tags: ["flats", "comfortable", "everyday", "cushioned", "lightweight", "slipon", "breathable", "casual", "versatile", "easy"],
    inStock: true,
    rating: 4.6,
    reviews: 267
  },
  {
    id: 16,
    name: "Casual Hoodie",
    brand: "StreetStyle",
    price: 4200,
    image: product4, // reusing image for demo
    trending: 71,
    category: "outerwear",
    style: "western",
    description: "Comfortable casual hoodie perfect for relaxed days. Features soft fabric and practical kangaroo pocket.",
    features: [
      "Cotton Blend",
      "Soft Fabric",
      "Kangaroo Pocket",
      "Adjustable Hood",
      "Machine Washable"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gray", "Black", "Navy", "Olive", "Burgundy"],
    tags: ["hoodie", "casual", "comfortable", "soft", "pocket", "hood", "relaxed", "streetwear", "warm", "versatile"],
    inStock: true,
    rating: 4.4,
    reviews: 312
  },
  {
    id: 17,
    name: "Elegant Palazzo Suit",
    brand: "ModernEthnic",
    price: 15000,
    originalPrice: 20000,
    image: product1, // reusing image for demo
    trending: 85,
    category: "sets",
    style: "eastern",
    description: "Modern palazzo suit with contemporary design and comfortable fit. Perfect for semi-formal occasions.",
    features: [
      "Rayon Blend",
      "Wide Leg Palazzo",
      "Matching Top",
      "Comfortable Fit",
      "Easy Maintenance"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Green", "Pink", "Purple", "Orange"],
    tags: ["palazzo", "suit", "modern", "ethnic", "wide", "comfortable", "contemporary", "semiformal", "elegant", "versatile"],
    inStock: true,
    rating: 4.7,
    reviews: 89
  },
  {
    id: 18,
    name: "Designer Sunglasses",
    brand: "EyeStyle",
    price: 8500,
    originalPrice: 12000,
    image: product2, // reusing image for demo
    trending: 87,
    category: "accessories",
    style: "western",
    description: "Stylish designer sunglasses with UV protection and premium frame material. Perfect for sunny days and fashion statements.",
    features: [
      "UV Protection",
      "Premium Frame",
      "Lightweight Design",
      "Scratch Resistant",
      "Case Included"
    ],
    sizes: ["One Size"],
    colors: ["Black", "Brown", "Tortoise", "Clear"],
    tags: ["sunglasses", "designer", "uv", "protection", "premium", "stylish", "sunny", "fashion", "lightweight", "scratch"],
    inStock: true,
    rating: 4.8,
    reviews: 134
  },
  {
    id: 19,
    name: "Formal Pencil Skirt",
    brand: "OfficeElegance",
    price: 7800,
    originalPrice: 9500,
    image: product3, // reusing image for demo
    trending: 73,
    category: "bottoms",
    style: "western",
    description: "Professional pencil skirt perfect for office wear. Features a flattering fit and wrinkle-resistant fabric.",
    features: [
      "Wrinkle Resistant",
      "Professional Fit",
      "Back Slit",
      "Easy Care",
      "Versatile Design"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Gray", "Brown"],
    tags: ["skirt", "pencil", "formal", "office", "professional", "flattering", "wrinkle", "versatile", "business", "elegant"],
    inStock: true,
    rating: 4.6,
    reviews: 178
  },
  {
    id: 20,
    name: "Traditional Salwar Kameez",
    brand: "EthnicCharm",
    price: 12000,
    originalPrice: 16000,
    image: product4, // reusing image for demo
    trending: 81,
    category: "sets",
    style: "eastern",
    description: "Beautiful traditional salwar kameez with elegant embroidery. Perfect for cultural events and family gatherings.",
    features: [
      "Cotton Silk Blend",
      "Hand Embroidery",
      "Matching Dupatta",
      "Comfortable Fit",
      "Easy Maintenance"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Green", "Blue", "Pink", "Yellow", "Orange"],
    tags: ["salwar", "kameez", "traditional", "ethnic", "embroidery", "cultural", "family", "elegant", "comfortable", "gathering"],
    inStock: true,
    rating: 4.7,
    reviews: 95
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
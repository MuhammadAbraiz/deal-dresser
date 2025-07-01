import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { Plus, Minus, X, ArrowLeft } from "lucide-react";

export default function Cart() {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="text-6xl mb-4 opacity-20">🛒</div>
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">
            Looks like you haven&apos;t added anything to your cart yet
          </p>
          <Link to="/">
            <Button variant="fashion" size="lg">
              Start Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft size={16} />
              Continue Shopping
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">Shopping Cart</h1>
            <Button variant="outline" size="sm" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                className="bg-card rounded-2xl p-6 shadow-card"
              >
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                          {item.brand}
                        </p>
                        <h3 className="font-medium text-foreground">{item.name}</h3>
                        <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                          {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                          {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                        </div>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 hover:bg-muted rounded-full transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">
                          PKR {item.price.toLocaleString()}
                        </span>
                        {item.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            PKR {item.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center border border-border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-muted transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-2 min-w-12 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-muted transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-right mt-2">
                      <span className="text-sm text-muted-foreground">
                        Subtotal: PKR {(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 shadow-card sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span>PKR {getTotalPrice().toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>PKR {Math.round(getTotalPrice() * 0.17).toLocaleString()}</span>
                </div>
                
                <hr className="border-border" />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>PKR {Math.round(getTotalPrice() * 1.17).toLocaleString()}</span>
                </div>
              </div>
              
              <Link to="/checkout">
                <Button variant="fashion" size="lg" className="w-full">
                  Proceed to Checkout
                </Button>
              </Link>
              
              <div className="mt-4 text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <span>🔒</span>
                  <span>Secure checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
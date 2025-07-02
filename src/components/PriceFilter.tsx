import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Filter, X } from "lucide-react";

interface PriceFilterProps {
  onPriceChange: (min: number, max: number) => void;
  maxPrice: number;
}

export function PriceFilter({ onPriceChange, maxPrice }: PriceFilterProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    onPriceChange(priceRange[0], priceRange[1]);
  }, [priceRange, onPriceChange]);

  const handleRangeChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };

  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setPriceRange([value, Math.max(value, priceRange[1])]);
  };

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || maxPrice;
    setPriceRange([priceRange[0], Math.min(value, maxPrice)]);
  };

  const resetFilter = () => {
    setPriceRange([0, maxPrice]);
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
      >
        <Filter size={16} />
        Price
        {priceRange[0] > 0 || priceRange[1] < maxPrice ? (
          <span className="w-2 h-2 bg-primary rounded-full"></span>
        ) : null}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 p-4 bg-card border border-border rounded-lg shadow-lg z-50 min-w-64">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-sm">Price Range</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0"
            >
              <X size={14} />
            </Button>
          </div>

          <div className="space-y-4">
            {/* Price Range Slider */}
            <div className="px-2">
              <Slider
                value={priceRange}
                onValueChange={handleRangeChange}
                max={maxPrice}
                step={100}
                className="w-full"
              />
            </div>

            {/* Price Inputs */}
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="text-xs text-muted-foreground mb-1 block">Min</label>
                <Input
                  type="number"
                  value={priceRange[0]}
                  onChange={handleMinInputChange}
                  className="h-8 text-sm"
                  placeholder="0"
                />
              </div>
              <div className="flex-1">
                <label className="text-xs text-muted-foreground mb-1 block">Max</label>
                <Input
                  type="number"
                  value={priceRange[1]}
                  onChange={handleMaxInputChange}
                  className="h-8 text-sm"
                  placeholder={maxPrice.toString()}
                />
              </div>
            </div>

            {/* Price Display */}
            <div className="text-center text-sm text-muted-foreground">
              PKR {priceRange[0].toLocaleString()} - PKR {priceRange[1].toLocaleString()}
            </div>

            {/* Reset Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={resetFilter}
              className="w-full"
            >
              Reset Filter
            </Button>
          </div>
        </div>
      )}
    </div>
  );
} 
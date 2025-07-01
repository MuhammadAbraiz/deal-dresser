import { Button } from "@/components/ui/button";
import westernStyle from "@/assets/western-style.jpg";
import easternStyle from "@/assets/eastern-style.jpg";

interface StyleFilterProps {
  selectedStyle: "western" | "eastern" | null;
  onStyleChange: (style: "western" | "eastern" | null) => void;
}

export function StyleFilter({ selectedStyle, onStyleChange }: StyleFilterProps) {
  return (
    <div className="w-full py-8 bg-gradient-card">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
          Choose Your Style
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Western Style */}
          <div 
            className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 ${
              selectedStyle === "western" ? "ring-4 ring-blush shadow-glow" : "hover:shadow-elegant"
            }`}
            onClick={() => onStyleChange(selectedStyle === "western" ? null : "western")}
          >
            <img 
              src={westernStyle} 
              alt="Western Style" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Western Style</h3>
                <p className="text-sm opacity-90">Modern, trendy & casual</p>
              </div>
            </div>
            {selectedStyle === "western" && (
              <div className="absolute top-4 right-4 w-6 h-6 bg-blush rounded-full flex items-center justify-center animate-glow">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            )}
          </div>

          {/* Eastern Style */}
          <div 
            className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 ${
              selectedStyle === "eastern" ? "ring-4 ring-blush shadow-glow" : "hover:shadow-elegant"
            }`}
            onClick={() => onStyleChange(selectedStyle === "eastern" ? null : "eastern")}
          >
            <img 
              src={easternStyle} 
              alt="Eastern Style" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Eastern Style</h3>
                <p className="text-sm opacity-90">Traditional, elegant & sophisticated</p>
              </div>
            </div>
            {selectedStyle === "eastern" && (
              <div className="absolute top-4 right-4 w-6 h-6 bg-blush rounded-full flex items-center justify-center animate-glow">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            )}
          </div>
        </div>

        {selectedStyle && (
          <div className="flex justify-center mt-6">
            <Button 
              variant="outline" 
              onClick={() => onStyleChange(null)}
              className="animate-slide-up"
            >
              Clear Selection
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
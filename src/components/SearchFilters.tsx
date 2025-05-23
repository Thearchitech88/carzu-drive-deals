
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Filter, X } from "lucide-react";
import { useState } from "react";

const SearchFilters = () => {
  const [priceRange, setPriceRange] = useState([10000, 50000]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const removeFilter = (filter: string) => {
    setSelectedFilters(prev => prev.filter(f => f !== filter));
  };

  return (
    <section className="py-8 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
          
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Make" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="toyota">Toyota</SelectItem>
              <SelectItem value="honda">Honda</SelectItem>
              <SelectItem value="ford">Ford</SelectItem>
              <SelectItem value="bmw">BMW</SelectItem>
              <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
              <SelectItem value="audi">Audi</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Body Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sedan">Sedan</SelectItem>
              <SelectItem value="suv">SUV</SelectItem>
              <SelectItem value="hatchback">Hatchback</SelectItem>
              <SelectItem value="coupe">Coupe</SelectItem>
              <SelectItem value="wagon">Wagon</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2020">2020</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center gap-2 min-w-[200px]">
            <span className="text-sm font-medium">Price:</span>
            <span className="text-sm text-gray-600">
              ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
            </span>
          </div>
        </div>

        {/* Active Filters */}
        {selectedFilters.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-sm font-medium text-gray-700">Active filters:</span>
            {selectedFilters.map((filter) => (
              <Badge key={filter} variant="secondary" className="flex items-center gap-1">
                {filter}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => removeFilter(filter)}
                />
              </Badge>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedFilters([])}
              className="text-red-600 hover:text-red-700"
            >
              Clear all
            </Button>
          </div>
        )}

        {/* Quick Filters */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
            Under $20k
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
            Low Mileage
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
            Certified Pre-Owned
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
            Single Owner
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
            Automatic
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default SearchFilters;

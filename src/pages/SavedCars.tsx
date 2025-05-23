
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Search, Trash2, Car, Filter } from "lucide-react";

const SavedCars = () => {
  const [savedCars, setSavedCars] = useState([
    {
      id: 1,
      title: "2022 Toyota Camry",
      price: 24599,
      miles: 12453,
      location: "Los Angeles, CA",
      image: "camry",
      tags: ["hybrid", "sedan"]
    },
    {
      id: 2,
      title: "2023 Honda Civic",
      price: 22899,
      miles: 8734,
      location: "San Diego, CA",
      image: "civic",
      tags: ["sedan", "economical"]
    },
    {
      id: 3,
      title: "2021 Ford F-150",
      price: 34999,
      miles: 19876,
      location: "Sacramento, CA",
      image: "f150",
      tags: ["truck", "powerful"]
    },
    {
      id: 4,
      title: "2022 Tesla Model 3",
      price: 41599,
      miles: 5621,
      location: "San Francisco, CA",
      image: "model3",
      tags: ["electric", "luxury"]
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  
  const handleRemove = (id: number) => {
    setSavedCars(savedCars.filter(car => car.id !== id));
  };

  const filteredCars = savedCars.filter(car => 
    car.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center">
                <Heart className="mr-2 h-8 w-8 text-purple-600" fill="currentColor" /> 
                Saved Cars
              </h1>
              <div className="hidden md:block">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    className="pl-10 w-64" 
                    placeholder="Search saved cars..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>
            
            <div className="md:hidden mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  className="pl-10 w-full" 
                  placeholder="Search saved cars..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between mb-8">
              <div className="text-sm text-gray-600">
                {filteredCars.length} {filteredCars.length === 1 ? 'car' : 'cars'} saved
              </div>
              <Button variant="outline" size="sm" className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            {filteredCars.length === 0 ? (
              <div className="text-center py-16">
                <div className="bg-white p-8 rounded-xl shadow-md max-w-lg mx-auto">
                  {searchTerm ? (
                    <>
                      <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h2 className="text-2xl font-bold mb-2">No cars match your search</h2>
                      <p className="text-gray-600 mb-4">
                        We couldn't find any saved cars matching "{searchTerm}"
                      </p>
                      <Button onClick={() => setSearchTerm('')}>
                        Clear Search
                      </Button>
                    </>
                  ) : (
                    <>
                      <Car className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h2 className="text-2xl font-bold mb-2">No saved cars yet</h2>
                      <p className="text-gray-600 mb-4">
                        Start browsing and save your favorite cars to view them here later.
                      </p>
                      <Button 
                        className="bg-gradient-to-r from-blue-600 to-purple-600"
                        onClick={() => window.location.href = '/'}
                      >
                        Browse Cars
                      </Button>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <div key={car.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                    <div className="h-48 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                      <Car className="h-20 w-20 text-gray-500" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold">{car.title}</h3>
                        <button 
                          onClick={() => handleRemove(car.id)} 
                          className="text-gray-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="mt-2 text-2xl font-bold">${car.price.toLocaleString()}</div>
                      <div className="mt-1 text-sm text-gray-500">{car.miles.toLocaleString()} miles • {car.location}</div>
                      
                      <div className="mt-3 flex flex-wrap gap-2">
                        {car.tags.map((tag, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mt-4 flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          View Details
                        </Button>
                        <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600">
                          Contact Seller
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SavedCars;

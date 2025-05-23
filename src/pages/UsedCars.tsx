
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchFilters from "@/components/SearchFilters";
import { Button } from "@/components/ui/button";
import { Car, Star } from "lucide-react";

const UsedCars = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Quality Used Cars
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Find reliable pre-owned vehicles that fit your budget and lifestyle.
              </p>
            </div>

            <div className="mb-12">
              <SearchFilters />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
                  <div className="h-48 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                    <Car className="h-24 w-24 text-gray-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">2020 Model {item}</h3>
                    <p className="text-gray-600 mb-2">$18,{item}99</p>
                    <div className="flex items-center mb-4">
                      <span className="text-sm text-gray-500 mr-2">{25 + item}k miles</span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Star className="h-3 w-3 text-yellow-500 mr-1" fill="currentColor" />
                        <Star className="h-3 w-3 text-yellow-500 mr-1" fill="currentColor" />
                        <Star className="h-3 w-3 text-yellow-500 mr-1" fill="currentColor" />
                        <Star className="h-3 w-3 text-yellow-500 mr-1" fill="currentColor" />
                        <Star className="h-3 w-3 text-gray-300" />
                      </span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">View Details</Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Load More Cars
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UsedCars;


import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Calendar, Fuel, Settings, Star, Eye } from "lucide-react";
import { useState } from "react";

const FeaturedCars = () => {
  const [likedCars, setLikedCars] = useState<number[]>([]);

  const toggleLike = (carId: number) => {
    setLikedCars(prev => 
      prev.includes(carId) 
        ? prev.filter(id => id !== carId)
        : [...prev, carId]
    );
  };

  const featuredCars = [
    {
      id: 1,
      make: "Toyota",
      model: "Camry Hybrid",
      year: 2023,
      price: 28999,
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      mileage: "15,420",
      location: "San Francisco, CA",
      mpg: "52 city / 53 hwy",
      transmission: "CVT",
      badges: ["Certified", "Low Mileage"],
      rating: 4.8,
      dealer: "Premium Auto Sales"
    },
    {
      id: 2,
      make: "BMW",
      model: "X5 xDrive40i",
      year: 2022,
      price: 54999,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      mileage: "22,100",
      location: "Los Angeles, CA",
      mpg: "22 city / 29 hwy",
      transmission: "8-Speed Automatic",
      badges: ["AWD", "Premium"],
      rating: 4.9,
      dealer: "BMW of Beverly Hills"
    },
    {
      id: 3,
      make: "Tesla",
      model: "Model 3",
      year: 2023,
      price: 42999,
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      mileage: "8,500",
      location: "Austin, TX",
      mpg: "134 MPGe",
      transmission: "Single Speed",
      badges: ["Electric", "Autopilot"],
      rating: 4.7,
      dealer: "Tesla Direct"
    },
    {
      id: 4,
      make: "Honda",
      model: "Accord Sport",
      year: 2023,
      price: 32999,
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      mileage: "12,800",
      location: "Miami, FL",
      mpg: "32 city / 42 hwy",
      transmission: "CVT",
      badges: ["Sport", "Honda Sensing"],
      rating: 4.6,
      dealer: "Honda World"
    },
    {
      id: 5,
      make: "Mercedes-Benz",
      model: "C-Class C300",
      year: 2022,
      price: 47999,
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      mileage: "18,900",
      location: "New York, NY",
      mpg: "23 city / 34 hwy",
      transmission: "9-Speed Automatic",
      badges: ["Luxury", "AMG Line"],
      rating: 4.8,
      dealer: "Manhattan Mercedes"
    },
    {
      id: 6,
      make: "Ford",
      model: "Mustang GT",
      year: 2023,
      price: 44999,
      image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      mileage: "5,200",
      location: "Chicago, IL",
      mpg: "16 city / 25 hwy",
      transmission: "6-Speed Manual",
      badges: ["Performance", "V8"],
      rating: 4.9,
      dealer: "Ford Performance Center"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Cars
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked vehicles from our most trusted dealers and sellers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <Card key={car.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <CardHeader className="p-0 relative">
                <div className="relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={`${car.year} ${car.make} ${car.model}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button
                      size="sm"
                      variant={likedCars.includes(car.id) ? "default" : "secondary"}
                      className={`h-8 w-8 p-0 rounded-full ${
                        likedCars.includes(car.id) 
                          ? "bg-red-500 hover:bg-red-600 text-white" 
                          : "bg-white/90 hover:bg-white text-gray-700"
                      }`}
                      onClick={() => toggleLike(car.id)}
                    >
                      <Heart className="h-4 w-4" fill={likedCars.includes(car.id) ? "currentColor" : "none"} />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="h-8 w-8 p-0 rounded-full bg-white/90 hover:bg-white text-gray-700"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                    {car.badges.map((badge) => (
                      <Badge
                        key={badge}
                        className="bg-blue-600 hover:bg-blue-700 text-white text-xs"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold">
                    {car.year} {car.make} {car.model}
                  </CardTitle>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{car.rating}</span>
                  </div>
                </div>

                <div className="text-2xl font-bold text-blue-600 mb-4">
                  ${car.price.toLocaleString()}
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    <span>{car.mileage} miles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fuel className="h-4 w-4" />
                    <span>{car.mpg}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{car.location}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">Sold by {car.dealer}</p>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex gap-2">
                <Button variant="outline" className="flex-1">
                  View Details
                </Button>
                <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Contact Seller
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All Cars ({featuredCars.length * 8}+ Available)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;

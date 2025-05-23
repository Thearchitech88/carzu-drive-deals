
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Car, Shield, Check } from "lucide-react";

const CertifiedPreOwned = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Certified Pre-Owned Vehicles
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Premium used cars with extended warranty and rigorous inspection.
              </p>
              <div className="flex items-center justify-center mb-8">
                <Shield className="h-12 w-12 text-blue-600 mr-4" />
                <span className="text-xl font-medium text-gray-800">Quality Assured</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md mb-12">
              <h2 className="text-2xl font-bold mb-4">Why Choose Certified Pre-Owned?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Extended Warranty</h3>
                    <p className="text-gray-600 text-sm">Comprehensive coverage beyond the original warranty</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Multi-Point Inspection</h3>
                    <p className="text-gray-600 text-sm">Thorough examination of all major systems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Roadside Assistance</h3>
                    <p className="text-gray-600 text-sm">24/7 help when you need it most</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
                  <div className="h-48 bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center relative">
                    <Car className="h-24 w-24 text-blue-500" />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                      Certified
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">2022 Premium {item}</h3>
                    <p className="text-gray-600 mb-2">$22,{item}99</p>
                    <div className="flex items-center mb-4">
                      <span className="text-sm text-gray-500 mr-2">{15 + item}k miles</span>
                      <span className="text-sm text-blue-600 font-medium">Warranty: 2 Years</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">View Details</Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Explore All Certified Vehicles
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CertifiedPreOwned;

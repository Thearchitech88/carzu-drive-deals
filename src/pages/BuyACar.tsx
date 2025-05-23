
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car } from "lucide-react";

const BuyACar = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Find Your Perfect Car
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our extensive inventory of quality vehicles to find the perfect match for your needs and budget.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Car className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">New Cars</h3>
                  <p className="text-gray-600 mb-4">
                    Discover the latest models with cutting-edge features and technology.
                  </p>
                  <Link to="/new-cars">
                    <Button className="w-full">Browse New Cars</Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
                <div className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Car className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Used Cars</h3>
                  <p className="text-gray-600 mb-4">
                    Find quality pre-owned vehicles that fit your budget and lifestyle.
                  </p>
                  <Link to="/used-cars">
                    <Button className="w-full">Browse Used Cars</Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
                <div className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Car className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Certified Pre-Owned</h3>
                  <p className="text-gray-600 mb-4">
                    The perfect blend of value and peace of mind with extended warranty.
                  </p>
                  <Link to="/certified-pre-owned">
                    <Button className="w-full">Browse CPO Cars</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BuyACar;

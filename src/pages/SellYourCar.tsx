
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";

const SellYourCar = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Form */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Sell Your Car
                </h1>
                <p className="text-gray-600 mb-8">
                  Get a competitive offer for your vehicle in minutes. Fill out the form below to get started.
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Make</label>
                      <Input placeholder="e.g. Toyota" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Model</label>
                      <Input placeholder="e.g. Camry" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Year</label>
                      <Input placeholder="e.g. 2019" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Mileage</label>
                      <Input placeholder="e.g. 45,000" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Vehicle Condition</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {["Excellent", "Good", "Fair", "Poor"].map((condition) => (
                        <div key={condition} className="flex items-center space-x-2 p-2 border rounded-md hover:bg-gray-50 cursor-pointer">
                          <div className="h-4 w-4 rounded-full border border-gray-400"></div>
                          <span>{condition}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Additional Information</label>
                    <Textarea placeholder="Describe your vehicle (optional)" className="h-24" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <Input placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number</label>
                      <Input placeholder="Your phone" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input placeholder="Your email" />
                  </div>
                  
                  <div className="flex items-start space-x-2 text-sm">
                    <div className="h-5 w-5 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                    </div>
                    <span className="text-gray-500">
                      I agree to be contacted by Carzu about my vehicle and receive emails or text messages.
                    </span>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Get My Offer
                  </Button>
                </form>
              </div>
              
              {/* Right Column - Info */}
              <div className="lg:mt-12">
                <div className="mb-10">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Why Sell With Carzu?</h3>
                  <div className="space-y-4">
                    {[
                      "Get a fair, competitive offer in minutes",
                      "No hidden fees or obligations",
                      "Free pickup and same-day payment",
                      "Dedicated support from start to finish"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
                  <h3 className="text-xl font-bold mb-3">Did you know?</h3>
                  <p className="mb-4">
                    Car owners who sell through Carzu receive an average of 15% more than traditional dealer trade-ins.
                  </p>
                  <div className="text-sm opacity-80">
                    Based on internal data from Jan 2023 - May 2023
                  </div>
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

export default SellYourCar;

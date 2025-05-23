
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, CheckCircle } from "lucide-react";

const CarInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Protect Your Vehicle with Confidence
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Get competitive insurance quotes from top providers in minutes.
                </p>
                
                <div className="space-y-6">
                  {[
                    "Compare quotes from multiple providers",
                    "Customize coverage to fit your needs",
                    "Save up to 30% with special discounts",
                    "Quick and easy online application"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-6 text-center">Get Your Quote Today</h2>
                
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Car Make & Model</label>
                    <Input placeholder="e.g. Toyota Camry" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Year</label>
                      <Input placeholder="e.g. 2020" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Zip Code</label>
                      <Input placeholder="e.g. 90210" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Name</label>
                    <Input placeholder="Full name" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="Your email" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <Input type="tel" placeholder="Your phone" />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Get My Free Quote
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    By clicking above, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CarInsurance;

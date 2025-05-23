
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { DollarSign, Calendar, Car, ArrowRight } from "lucide-react";

const SellYourCar = () => {
  const [step, setStep] = useState(1);
  
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sell Your Car
              </h1>
              <p className="text-xl text-gray-600">
                Get a competitive offer in minutes with our easy selling process.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              {/* Progress Steps */}
              <div className="flex justify-between mb-8 relative">
                <div className="h-1 absolute top-4 left-0 right-0 bg-gray-200 z-0">
                  <div 
                    className="h-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${(step - 1) * 33.33}%` }}
                  ></div>
                </div>
                {[1, 2, 3].map((s) => (
                  <div 
                    key={s}
                    className={`relative z-10 flex flex-col items-center ${step >= s ? 'text-blue-600' : 'text-gray-400'}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step > s 
                        ? 'bg-blue-600 text-white' 
                        : step === s 
                          ? 'border-2 border-blue-600 bg-white' 
                          : 'border-2 border-gray-300 bg-white'
                    }`}>
                      {step > s ? <Check className="h-5 w-5" /> : s}
                    </div>
                    <span className="mt-2 text-sm">
                      {s === 1 ? 'Car Details' : s === 2 ? 'Your Info' : 'Get Quote'}
                    </span>
                  </div>
                ))}
              </div>

              {/* Form Steps */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">Tell us about your car</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Make</label>
                      <Input placeholder="e.g. Toyota" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Model</label>
                      <Input placeholder="e.g. Camry" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                      <Input placeholder="e.g. 2019" type="number" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Mileage</label>
                      <Input placeholder="e.g. 45000" type="number" />
                    </div>
                  </div>
                  <div className="flex justify-end mt-8">
                    <Button onClick={nextStep} className="bg-gradient-to-r from-blue-600 to-purple-600">
                      Next <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">Your Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <Input placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <Input placeholder="john@example.com" type="email" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <Input placeholder="(123) 456-7890" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                      <Input placeholder="90210" />
                    </div>
                  </div>
                  <div className="flex justify-between mt-8">
                    <Button variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                    <Button onClick={nextStep} className="bg-gradient-to-r from-blue-600 to-purple-600">
                      Next <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">Get Your Quote</h2>
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                    <p className="text-gray-700 mb-4">
                      Thank you for providing your information. Our team will analyze your vehicle details and 
                      contact you with a competitive offer within 24 hours.
                    </p>
                    <div className="flex items-center justify-center">
                      <DollarSign className="h-12 w-12 text-blue-600" />
                    </div>
                    <p className="text-center text-lg font-medium mt-4">
                      Your quote is being prepared!
                    </p>
                  </div>
                  <div className="flex justify-between mt-8">
                    <Button variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                      Submit Request
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SellYourCar;

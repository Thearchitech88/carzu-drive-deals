
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Upload, Car, Check, Image, Info } from "lucide-react";
import { toast } from "sonner";

const ListYourCar = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    trim: "",
    mileage: "",
    price: "",
    color: "",
    fuelType: "",
    transmission: "",
    description: "",
    name: "",
    email: "",
    phone: "",
    location: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const nextStep = () => {
    if (currentStep === 1 && (!formData.make || !formData.model || !formData.year || !formData.mileage)) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    if (currentStep === 3 && (!formData.name || !formData.email || !formData.phone)) {
      toast.error("Please provide your contact information");
      return;
    }
    
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your car has been successfully listed!");
    // Reset form or redirect
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                List Your Car
              </h1>
              <p className="text-xl text-gray-600">
                Reach thousands of potential buyers looking for a car like yours
              </p>
            </div>
            
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex justify-between">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center 
                        ${currentStep > step 
                          ? 'bg-green-500 text-white' 
                          : currentStep === step 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-200 text-gray-500'}`}
                    >
                      {currentStep > step ? <Check /> : step}
                    </div>
                    <span className={`mt-2 text-xs sm:text-sm ${currentStep === step ? 'font-medium text-blue-600' : 'text-gray-500'}`}>
                      {step === 1 ? 'Car Details' : step === 2 ? 'Photos & Description' : step === 3 ? 'Contact Info' : 'Review & Submit'}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep - 1) * 33.33}%` }}
                ></div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Car Details */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Basic Car Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Make <span className="text-red-500">*</span></label>
                        <Input
                          name="make"
                          placeholder="e.g. Toyota"
                          value={formData.make}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Model <span className="text-red-500">*</span></label>
                        <Input
                          name="model"
                          placeholder="e.g. Camry"
                          value={formData.model}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Year <span className="text-red-500">*</span></label>
                        <Input
                          name="year"
                          placeholder="e.g. 2020"
                          type="number"
                          value={formData.year}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Trim Level</label>
                        <Input
                          name="trim"
                          placeholder="e.g. SE, Limited, etc."
                          value={formData.trim}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mileage <span className="text-red-500">*</span></label>
                        <Input
                          name="mileage"
                          placeholder="e.g. 45000"
                          type="number"
                          value={formData.mileage}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                        <Input
                          name="price"
                          placeholder="e.g. 25000"
                          type="number"
                          value={formData.price}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
                        <Input
                          name="color"
                          placeholder="e.g. Silver"
                          value={formData.color}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Fuel Type</label>
                        <Input
                          name="fuelType"
                          placeholder="e.g. Gasoline"
                          value={formData.fuelType}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Step 2: Photos & Description */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Photos & Description</h2>
                    
                    <div className="mb-8">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Upload Photos</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <div className="mx-auto flex flex-col items-center">
                          <Upload className="h-10 w-10 text-gray-400 mb-3" />
                          <p className="text-sm text-gray-600 mb-2">
                            Drag and drop your photos here, or click to browse
                          </p>
                          <p className="text-xs text-gray-500 mb-4">
                            (Maximum 10 photos, 5MB each)
                          </p>
                          <Button variant="outline" size="sm">
                            Select Photos
                          </Button>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 flex items-center">
                        <Info className="h-3 w-3 mr-1" />
                        Photos significantly increase your chances of selling quickly
                      </p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <Textarea
                        name="description"
                        placeholder="Describe your car's condition, features, modifications, and any other details that might be important to buyers."
                        rows={6}
                        value={formData.description}
                        onChange={handleChange}
                        className="resize-none"
                      />
                    </div>
                  </div>
                )}
                
                {/* Step 3: Contact Info */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                        <Input
                          name="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                        <Input
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone <span className="text-red-500">*</span></label>
                        <Input
                          name="phone"
                          placeholder="(123) 456-7890"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <Input
                          name="location"
                          placeholder="City, State"
                          value={formData.location}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-blue-50 p-4 rounded-md border border-blue-100">
                      <p className="text-sm text-blue-800">
                        Your contact information will be visible to potential buyers. You can choose how you prefer to be contacted.
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Step 4: Review & Submit */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Review Your Listing</h2>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold">
                          {formData.year} {formData.make} {formData.model} {formData.trim}
                        </h3>
                        <Button variant="ghost" size="sm" onClick={() => setCurrentStep(1)}>
                          Edit
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <p className="text-sm text-gray-500">Mileage</p>
                          <p className="font-medium">{formData.mileage} miles</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Price</p>
                          <p className="font-medium">${formData.price}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Color</p>
                          <p className="font-medium">{formData.color || "Not specified"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Fuel Type</p>
                          <p className="font-medium">{formData.fuelType || "Not specified"}</p>
                        </div>
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div className="mb-6">
                        <p className="text-sm text-gray-500 mb-1">Description</p>
                        <p className="text-sm">{formData.description || "No description provided."}</p>
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold">Contact Information</h4>
                          <Button variant="ghost" size="sm" onClick={() => setCurrentStep(3)}>
                            Edit
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Name</p>
                            <p className="font-medium">{formData.name}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="font-medium">{formData.email}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Phone</p>
                            <p className="font-medium">{formData.phone}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Location</p>
                            <p className="font-medium">{formData.location || "Not specified"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-md border border-yellow-100 text-sm text-yellow-800">
                      Please verify that all information is correct before submitting your listing. Once published, your car will be visible to potential buyers.
                    </div>
                  </div>
                )}
                
                <div className="mt-8 flex justify-between">
                  {currentStep > 1 ? (
                    <Button type="button" variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  
                  {currentStep < 4 ? (
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      className="bg-gradient-to-r from-blue-600 to-purple-600"
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button 
                      type="submit"
                      className="bg-gradient-to-r from-green-600 to-green-500"
                    >
                      Publish Listing
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ListYourCar;

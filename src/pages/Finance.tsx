
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Calculator, DollarSign, Calendar, Percent } from "lucide-react";

const Finance = () => {
  const [loanAmount, setLoanAmount] = useState(25000);
  const [downPayment, setDownPayment] = useState(5000);
  const [interestRate, setInterestRate] = useState(4.5);
  const [loanTerm, setLoanTerm] = useState(60);

  // Calculate monthly payment
  const calculateMonthlyPayment = () => {
    const principal = loanAmount - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const payments = loanTerm;
    
    return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -payments));
  };

  const monthlyPayment = calculateMonthlyPayment();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Car Financing Options
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover flexible payment plans and competitive interest rates to drive your dream car home.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Calculator */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Calculator className="mr-3 h-6 w-6 text-blue-600" />
                  Payment Calculator
                </h2>

                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-medium">Vehicle Price</label>
                      <span>${loanAmount.toLocaleString()}</span>
                    </div>
                    <Slider
                      value={[loanAmount]}
                      min={5000}
                      max={100000}
                      step={1000}
                      onValueChange={(value) => setLoanAmount(value[0])}
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>$5,000</span>
                      <span>$100,000</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-medium">Down Payment</label>
                      <span>${downPayment.toLocaleString()}</span>
                    </div>
                    <Slider
                      value={[downPayment]}
                      min={0}
                      max={loanAmount * 0.5}
                      step={500}
                      onValueChange={(value) => setDownPayment(value[0])}
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>$0</span>
                      <span>${(loanAmount * 0.5).toLocaleString()}</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-medium">Interest Rate</label>
                      <span>{interestRate}%</span>
                    </div>
                    <Slider
                      value={[interestRate]}
                      min={1}
                      max={10}
                      step={0.1}
                      onValueChange={(value) => setInterestRate(value[0])}
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>1%</span>
                      <span>10%</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-medium">Loan Term</label>
                      <span>{loanTerm} months</span>
                    </div>
                    <Slider
                      value={[loanTerm]}
                      min={12}
                      max={84}
                      step={12}
                      onValueChange={(value) => setLoanTerm(value[0])}
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>12 months</span>
                      <span>84 months</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-gray-600 mb-2">Estimated Monthly Payment:</p>
                    <p className="text-3xl font-bold text-blue-700">
                      ${isNaN(monthlyPayment) ? "0" : monthlyPayment.toFixed(2)}
                    </p>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                    Apply For Financing
                  </Button>
                </div>
              </div>

              {/* Financing Info */}
              <div>
                <div className="bg-white p-8 rounded-xl shadow-md mb-8">
                  <h2 className="text-2xl font-bold mb-6">Financing Options</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4">
                        <DollarSign className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Traditional Auto Loans</h3>
                        <p className="text-gray-600 text-sm">
                          Fixed monthly payments over a set period, typically 36-72 months.
                          Interest rates currently starting at 3.99% APR.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4">
                        <Calendar className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Lease Options</h3>
                        <p className="text-gray-600 text-sm">
                          Lower monthly payments with the option to purchase or return the vehicle
                          at the end of the lease term (typically 24-36 months).
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4">
                        <Percent className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Special Financing</h3>
                        <p className="text-gray-600 text-sm">
                          Promotional rates as low as 0.9% APR for qualified buyers
                          on select models. Limited time offers available.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h2 className="text-2xl font-bold mb-6">Pre-Qualify Today</h2>
                  <p className="text-gray-600 mb-6">
                    Check your rate without affecting your credit score. Get pre-qualified in minutes.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <Input placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <Input placeholder="john@example.com" type="email" />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                      Check My Rate
                    </Button>
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

export default Finance;


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, HelpCircle, Phone, Mail, MessageCircle, FileText, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HelpCenter = () => {
  const faqCategories = [
    { name: "Buying a Car", count: 12 },
    { name: "Selling Your Car", count: 8 },
    { name: "Account & Profile", count: 6 },
    { name: "Payments & Financing", count: 10 },
    { name: "Website & Technical", count: 7 },
    { name: "Shipping & Delivery", count: 5 },
  ];
  
  const popularQuestions = [
    {
      question: "How do I schedule a test drive?",
      answer: "You can schedule a test drive by viewing a vehicle listing and clicking the 'Schedule Test Drive' button. You'll need to select a date and time that works for you, and provide your contact information. A Carzu representative will confirm your appointment."
    },
    {
      question: "What documents do I need to sell my car?",
      answer: "To sell your car through Carzu, you'll need your vehicle title, registration, a valid photo ID, and service records (if available). If there's a loan on the vehicle, you'll also need your loan account information."
    },
    {
      question: "How is the value of my car determined?",
      answer: "Carzu determines your car's value based on several factors including make, model, year, mileage, condition, service history, market demand, and local market conditions. We use advanced data analytics and real-time market data to provide competitive offers."
    },
    {
      question: "What fees are involved in buying a car?",
      answer: "When buying a car through Carzu, you may be responsible for sales tax, registration fees, title fees, and documentation fees. These fees vary by location. Carzu provides a transparent breakdown of all fees before you complete your purchase."
    },
    {
      question: "Can I return a car if I'm not satisfied?",
      answer: "Yes, Carzu offers a 7-day money-back guarantee on all vehicle purchases. If you're not completely satisfied, you can return the vehicle within 7 days of delivery for a full refund, provided the vehicle is in the same condition as when delivered."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                How Can We Help You?
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions or get in touch with our customer support team.
              </p>
            </div>

            {/* Search */}
            <div className="max-w-2xl mx-auto mb-12 relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Search for help articles..." 
                  className="pl-12 py-6 text-lg"
                />
              </div>
            </div>
            
            {/* Quick Help Categories */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
              {[
                { icon: <HelpCircle className="h-6 w-6" />, title: "FAQs" },
                { icon: <Phone className="h-6 w-6" />, title: "Contact Us" },
                { icon: <Mail className="h-6 w-6" />, title: "Email Support" },
                { icon: <MessageCircle className="h-6 w-6" />, title: "Live Chat" },
                { icon: <FileText className="h-6 w-6" />, title: "User Guides" },
                { icon: <FileText className="h-6 w-6" />, title: "Policies" },
              ].map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    {category.icon}
                  </div>
                  <h3 className="font-medium">{category.title}</h3>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* FAQ Categories */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-xl font-bold mb-6">Browse by Topic</h2>
                  <div className="space-y-3">
                    {faqCategories.map((category, index) => (
                      <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                        <span className="font-medium">{category.name}</span>
                        <span className="bg-gray-100 text-gray-500 text-sm rounded-full py-1 px-2">
                          {category.count}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <h3 className="font-medium mb-4">Need More Help?</h3>
                    <Button className="w-full">
                      Contact Support
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Popular Questions */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Popular Questions</h2>
                <Accordion type="single" collapsible className="bg-white rounded-xl shadow-md overflow-hidden">
                  {popularQuestions.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-0">
                      <AccordionTrigger className="py-4 px-6 text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="py-4 px-6 text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                <div className="mt-6 text-right">
                  <Button variant="ghost" className="group text-blue-600 hover:text-blue-700">
                    View All FAQs <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
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

export default HelpCenter;

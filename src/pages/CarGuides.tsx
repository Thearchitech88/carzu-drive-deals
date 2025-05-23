
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, Search, ArrowRight } from "lucide-react";

const CarGuides = () => {
  const guides = [
    {
      title: "How to Inspect a Used Car Before Buying",
      category: "Buying Guide",
      excerpt: "Learn what to look for when examining a used vehicle to avoid costly mistakes.",
      image: "bg-gradient-to-r from-blue-400 to-blue-600"
    },
    {
      title: "Understanding Car Financing Options",
      category: "Finance",
      excerpt: "Compare different financing methods to find the best option for your budget.",
      image: "bg-gradient-to-r from-purple-400 to-purple-600"
    },
    {
      title: "Essential Maintenance Tips for New Car Owners",
      category: "Maintenance",
      excerpt: "Follow these simple maintenance routines to extend your vehicle's life.",
      image: "bg-gradient-to-r from-green-400 to-green-600"
    },
    {
      title: "The Complete Guide to Car Insurance Coverage",
      category: "Insurance",
      excerpt: "Understand different types of coverage to make informed insurance decisions.",
      image: "bg-gradient-to-r from-yellow-400 to-orange-500"
    },
    {
      title: "Top 10 Most Reliable Used Car Models in 2024",
      category: "Recommendations",
      excerpt: "Discover which used cars offer the best reliability and value for your money.",
      image: "bg-gradient-to-r from-red-400 to-red-600"
    },
    {
      title: "Electric vs. Hybrid: Which is Right for You?",
      category: "Comparison",
      excerpt: "Compare the pros and cons of electric and hybrid vehicles for your lifestyle.",
      image: "bg-gradient-to-r from-teal-400 to-teal-600"
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
                Car Buying & Ownership Guides
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert advice and resources to help you make informed decisions throughout your car ownership journey.
              </p>
            </div>

            {/* Search */}
            <div className="max-w-2xl mx-auto mb-12 relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search guides..."
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {["All Guides", "Buying", "Selling", "Finance", "Insurance", "Maintenance"].map((category) => (
                <Button 
                  key={category}
                  variant={category === "All Guides" ? "default" : "outline"}
                  className={category === "All Guides" ? "bg-blue-600" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            {/* Guide Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
                  <div className={`h-40 ${guide.image} flex items-center justify-center`}>
                    <BookOpen className="h-12 w-12 text-white" />
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-medium text-blue-600 mb-2">{guide.category}</div>
                    <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
                    <p className="text-gray-600 mb-4">{guide.excerpt}</p>
                    <Button variant="ghost" className="group text-blue-600 hover:text-blue-700 p-0">
                      Read More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Newsletter */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 md:p-12 text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Expert Car Advice In Your Inbox</h2>
                  <p className="text-blue-100 mb-4">
                    Subscribe to our newsletter for weekly tips, guides, and automotive insights.
                  </p>
                </div>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 py-2 px-4 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
                    Subscribe
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

export default CarGuides;

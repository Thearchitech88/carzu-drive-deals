
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, User, Menu, X, Car, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <header 
      className={cn(
        "bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 transition-all duration-300",
        isScrolled ? "shadow-md" : ""
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Carzu
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => toggleDropdown('buy')}
              >
                Buy Cars
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {activeDropdown === 'buy' && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">New Cars</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Used Cars</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Certified Pre-Owned</a>
                </div>
              )}
            </div>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Sell Your Car
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Finance
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Reviews
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Heart className="h-4 w-4 mr-2" />
              Saved
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => toggleDropdown('account')}
            >
              <User className="h-4 w-4 mr-2" />
              Sign In
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
            {activeDropdown === 'account' && (
              <div className="absolute right-20 top-16 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Sign In</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Create Account</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Dealer Login</a>
              </div>
            )}
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              List Your Car
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              closeDropdowns();
            }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-in fade-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-4">
              <div className="space-y-1">
                <button 
                  className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => toggleDropdown('mobile-buy')}
                >
                  <span>Buy Cars</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'mobile-buy' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-buy' && (
                  <div className="pl-4 space-y-1 animate-in fade-in slide-in-from-top duration-200">
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">New Cars</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Used Cars</a>
                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Certified Pre-Owned</a>
                  </div>
                )}
              </div>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Sell Your Car
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Finance
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Reviews
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <Button variant="ghost" className="justify-start hover:bg-blue-50">
                  <Heart className="h-4 w-4 mr-2" />
                  Saved Cars
                </Button>
                <div className="space-y-1">
                  <Button 
                    variant="ghost" 
                    className="justify-between w-full"
                    onClick={() => toggleDropdown('mobile-account')}
                  >
                    <span className="flex items-center"><User className="h-4 w-4 mr-2" />Sign In</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'mobile-account' ? 'rotate-180' : ''}`} />
                  </Button>
                  {activeDropdown === 'mobile-account' && (
                    <div className="pl-4 space-y-1 animate-in fade-in slide-in-from-top duration-200">
                      <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Sign In</a>
                      <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Create Account</a>
                      <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Dealer Login</a>
                    </div>
                  )}
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full mt-2">
                  List Your Car
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

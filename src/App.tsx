import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Import all pages
import NewCars from "./pages/NewCars";
import UsedCars from "./pages/UsedCars";
import CertifiedPreOwned from "./pages/CertifiedPreOwned";
import SellYourCar from "./pages/SellYourCar";
import Finance from "./pages/Finance";
import Reviews from "./pages/Reviews";
import SavedCars from "./pages/SavedCars";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ListYourCar from "./pages/ListYourCar";

// Import newly created footer pages
import BuyACar from "./pages/BuyACar";
import CarInsurance from "./pages/CarInsurance";
import CarGuides from "./pages/CarGuides";
import HelpCenter from "./pages/HelpCenter";
import ContactUs from "./pages/ContactUs";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Buy Cars Routes */}
          <Route path="/new-cars" element={<NewCars />} />
          <Route path="/used-cars" element={<UsedCars />} />
          <Route path="/certified-pre-owned" element={<CertifiedPreOwned />} />
          <Route path="/buy-a-car" element={<BuyACar />} />
          
          {/* Other Header Navigation Routes */}
          <Route path="/sell-your-car" element={<SellYourCar />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/car-insurance" element={<CarInsurance />} />
          <Route path="/car-guides" element={<CarGuides />} />
          
          {/* User Account Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/saved-cars" element={<SavedCars />} />
          <Route path="/list-your-car" element={<ListYourCar />} />
          
          {/* Support Pages */}
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          
          {/* Add placeholder routes for the remaining footer links */}
          <Route path="/safety-tips" element={<NotFound />} />
          <Route path="/privacy-policy" element={<NotFound />} />
          <Route path="/dealer-program" element={<NotFound />} />
          <Route path="/accessibility" element={<NotFound />} />
          <Route path="/sitemap" element={<NotFound />} />
          <Route path="/careers" element={<NotFound />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

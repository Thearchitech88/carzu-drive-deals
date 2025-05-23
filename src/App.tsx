import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Import all the new pages
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
          
          {/* Other Header Navigation Routes */}
          <Route path="/sell-your-car" element={<SellYourCar />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/reviews" element={<Reviews />} />
          
          {/* User Account Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/saved-cars" element={<SavedCars />} />
          <Route path="/list-your-car" element={<ListYourCar />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

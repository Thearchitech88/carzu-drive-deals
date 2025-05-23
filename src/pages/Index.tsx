
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Calendar, Fuel, Settings, Heart, Star } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedCars from "@/components/FeaturedCars";
import SearchFilters from "@/components/SearchFilters";
import Footer from "@/components/Footer";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchFilters />
      <FeaturedCars />
      <Footer />
    </div>
  );
};

export default Index;

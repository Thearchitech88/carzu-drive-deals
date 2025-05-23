
import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedCars from "@/components/FeaturedCars";
import SearchFilters from "@/components/SearchFilters";
import Footer from "@/components/Footer";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="flex-1">
        <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <section className="py-8 md:py-12">
          <SearchFilters />
        </section>
        <section className="py-8 md:py-12">
          <FeaturedCars />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

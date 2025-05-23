
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Search, ThumbsUp, MessageCircle } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah J.",
      car: "Toyota Camry",
      rating: 5,
      date: "May 15, 2023",
      comment: "Excellent car with great fuel economy. The comfort is unmatched in its class and the technology features are intuitive.",
      likes: 24,
      replies: 3
    },
    {
      id: 2,
      name: "Michael T.",
      car: "Honda Accord",
      rating: 4,
      date: "April 3, 2023",
      comment: "Very reliable and comfortable for long drives. Could be a bit more exciting to drive, but overall a solid choice.",
      likes: 18,
      replies: 2
    },
    {
      id: 3,
      name: "Jessica L.",
      car: "Mazda CX-5",
      rating: 5,
      date: "June 22, 2023",
      comment: "This SUV handles like a sports car while having all the space I need. The interior quality is premium compared to competitors.",
      likes: 32,
      replies: 5
    },
    {
      id: 4,
      name: "Robert K.",
      car: "Ford F-150",
      rating: 4,
      date: "March 12, 2023",
      comment: "Powerful truck with impressive towing capacity. The cabin is comfortable, but fuel economy could be better.",
      likes: 15,
      replies: 1
    },
    {
      id: 5,
      name: "Emily W.",
      car: "Tesla Model 3",
      rating: 5,
      date: "July 8, 2023",
      comment: "Revolutionary electric car with amazing technology. The acceleration is incredible and the autopilot feature makes commuting easier.",
      likes: 41,
      replies: 7
    },
    {
      id: 6,
      name: "Daniel P.",
      car: "Subaru Outback",
      rating: 4,
      date: "May 30, 2023",
      comment: "Great for outdoor adventures. All-wheel drive performs excellently in poor conditions, and there's plenty of cargo space.",
      likes: 22,
      replies: 2
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Car Reviews
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Real opinions from real drivers to help you make informed decisions.
              </p>
              
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input className="pl-10" placeholder="Search for a specific car model..." />
              </div>
            </div>

            <Tabs defaultValue="recent" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="recent">Recent Reviews</TabsTrigger>
                  <TabsTrigger value="popular">Most Popular</TabsTrigger>
                  <TabsTrigger value="ratings">Highest Rated</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="recent" className="space-y-6">
                {reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </TabsContent>
              
              <TabsContent value="popular" className="space-y-6">
                {reviews.sort((a, b) => b.likes - a.likes).map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </TabsContent>
              
              <TabsContent value="ratings" className="space-y-6">
                {reviews.sort((a, b) => b.rating - a.rating).map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </TabsContent>
            </Tabs>

            <div className="mt-12 text-center">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Load More Reviews
              </Button>
            </div>
            
            <div className="mt-16 bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Share Your Experience</h2>
              <p className="text-gray-600 mb-8">
                Help other car shoppers by reviewing your vehicle. Your honest feedback makes a difference!
              </p>
              
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Write a Review
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

interface ReviewCardProps {
  review: {
    id: number;
    name: string;
    car: string;
    rating: number;
    date: string;
    comment: string;
    likes: number;
    replies: number;
  };
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-[1.01]">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg">{review.car}</h3>
          <div className="flex items-center mt-1">
            <div className="flex mr-2">
              {renderStars(review.rating)}
            </div>
            <span className="text-sm text-gray-500">Reviewed on {review.date}</span>
          </div>
        </div>
        <div className="bg-blue-100 px-3 py-1 rounded-full text-blue-800 text-sm font-medium">
          Verified Owner
        </div>
      </div>
      
      <p className="text-gray-700 mb-4">{review.comment}</p>
      
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          By {review.name}
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center text-gray-500 hover:text-blue-600 text-sm">
            <ThumbsUp className="h-4 w-4 mr-1" />
            <span>{review.likes}</span>
          </button>
          <button className="flex items-center text-gray-500 hover:text-blue-600 text-sm">
            <MessageCircle className="h-4 w-4 mr-1" />
            <span>{review.replies}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

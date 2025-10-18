import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import happyTravelersImage from "@/assets/happy-travelers.jpg";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Delhi",
      rating: 5,
      text: "Lavish Journeys made our European honeymoon absolutely perfect! From visa assistance to hotel bookings, everything was seamless. The personal attention to detail made all the difference.",
      trip: "Europe Honeymoon Package"
    },
    {
      name: "Rajesh Kumar",
      location: "Mumbai", 
      rating: 5,
      text: "Outstanding service for our corporate team's Singapore trip. The entire process was smooth, professional, and efficient. Highly recommend their business travel services.",
      trip: "Corporate Travel to Singapore"
    },
    {
      name: "Anita Patel",
      location: "Ghaziabad",
      rating: 5,
      text: "Getting my UK visa was stress-free thanks to their expert guidance. The team was responsive, knowledgeable, and made the complex process simple. Excellent support throughout!",
      trip: "UK Visa Assistance"
    },
    {
      name: "Vikram Singh",
      location: "Noida",
      rating: 5,
      text: "Family trip to Australia was incredible! Every detail was perfectly planned. The kids loved it, and we felt completely taken care of from start to finish. Thank you Lavish Journeys!",
      trip: "Family Holiday to Australia"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">What Our Travelers Say</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real experiences from real travelers who trusted us with their journeys. 
              Their satisfaction is our greatest achievement.
            </p>
          </div>

          {/* Happy Travelers Image */}
          <div className="mb-12 fade-in">
            <div className="relative max-w-4xl mx-auto">
              <img 
                src={happyTravelersImage} 
                alt="Happy travelers enjoying their journeys around the world" 
                className="rounded-2xl shadow-luxury w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <Card className="shadow-luxury fade-in-up">
              <CardContent className="p-8 lg:p-12">
                <div className="text-center">
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-luxury-gold text-luxury-gold" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl lg:text-2xl text-foreground mb-8 leading-relaxed italic">
                    "{currentTestimonial.text}"
                  </blockquote>

                  {/* Trip Info */}
                  <div className="mb-6">
                    <div className="inline-flex items-center px-4 py-2 bg-travel-blue/10 text-travel-blue rounded-full text-sm font-medium">
                      {currentTestimonial.trip}
                    </div>
                  </div>

                  {/* Author */}
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-1">{currentTestimonial.name}</h4>
                    <p className="text-muted-foreground">{currentTestimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 hover-lift"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 hover-lift"
              onClick={nextTestimonial}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-luxury-gold' : 'bg-muted'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 fade-in-up">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-luxury-gold mb-2">4.9</h3>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-travel-blue mb-2">100%</h3>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-success mb-2">5</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
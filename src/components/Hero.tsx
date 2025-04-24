
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-beach" />

      {/* Hero Content */}
      <div className="container mx-auto h-full flex flex-col justify-center px-4">
        <div className="max-w-2xl text-white space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight animate-reveal">
            Experience Pure Luxury on the Beach
          </h1>
          <p className="text-xl animate-reveal reveal-delay-1">
            Indulge in the perfect blend of luxury and natural beauty at our exclusive beachfront resort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-reveal reveal-delay-2">
            <Button size="lg" className="font-medium">
              Book Your Stay
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              Explore The Resort
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-reveal reveal-delay-3">
        <span className="text-white text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-9 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

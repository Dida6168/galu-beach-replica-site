
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-sand-50" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" 
                alt="Galu Beach Resort View" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded shadow-lg hidden md:block">
                <div className="text-center">
                  <span className="block text-4xl font-serif font-bold text-primary">15</span>
                  <span className="text-sm text-gray-600">Years of Excellence</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-2">
              <h2 className="text-sm font-medium uppercase tracking-wider text-primary">About Our Resort</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold">A Sanctuary of Luxury on Galu Beach</h3>
            </div>
            
            <p className="text-gray-700">
              Nestled on the pristine sands of Kenya's south coast, Galu Beach Resort offers an unparalleled blend of
              luxury and natural beauty. Our resort is designed to provide a tranquil escape from the ordinary,
              where the gentle sound of waves meets world-class hospitality.
            </p>
            
            <p className="text-gray-700">
              From our elegantly appointed rooms with ocean views to our exceptional dining experiences featuring
              local and international cuisine, every detail is crafted to ensure your stay is nothing short of
              extraordinary. Whether you're seeking adventure or relaxation, our dedicated staff is committed to
              making your experience unforgettable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button>Discover More</Button>
              <Button variant="outline">Our Story</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

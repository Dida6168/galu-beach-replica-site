
import { Wifi, Hotel, Calendar, Map } from "lucide-react";
import { cn } from "@/lib/utils";

const facilities = [
  {
    icon: Hotel,
    title: "Luxury Spa",
    description: "Indulge in rejuvenating treatments and massages at our world-class spa facility."
  },
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "Stay connected with complimentary high-speed wireless internet throughout the resort."
  },
  {
    icon: Calendar,
    title: "Event Spaces",
    description: "Host unforgettable events in our versatile spaces with breathtaking ocean backdrops."
  },
  {
    icon: Map,
    title: "Guided Tours",
    description: "Explore local attractions and hidden gems with our expert guides."
  }
];

const FacilitiesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-beach-50" id="facilities">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium uppercase tracking-wider text-primary">Amenities & Services</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mt-2">Resort Facilities</h3>
          <p className="text-gray-700 max-w-2xl mx-auto mt-4">
            Discover our exceptional range of facilities designed to enhance your stay and provide the ultimate comfort and convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={facility.title} 
              className={cn(
                "bg-white p-8 rounded-lg shadow-sm text-center transition-all hover:shadow-md",
                "transform hover:-translate-y-1 duration-300"
              )}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-beach-100 flex items-center justify-center">
                  <facility.icon size={28} className="text-primary" />
                </div>
              </div>
              <h4 className="text-xl font-serif font-semibold mb-3">{facility.title}</h4>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-64">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" 
                alt="Resort Pool" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-serif font-semibold mb-3">Infinity Pool</h4>
              <p className="text-gray-600">
                Our stunning infinity pool offers panoramic views of the Indian Ocean. Relax in the sun with a refreshing drink from the pool bar.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Open daily from 7:00 AM to 7:00 PM</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Poolside service available</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-64">
              <img 
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" 
                alt="Resort Restaurant" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-serif font-semibold mb-3">Beach Restaurant</h4>
              <p className="text-gray-600">
                Dine with your feet in the sand at our oceanfront restaurant featuring fresh seafood and international cuisine.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Breakfast: 7:00 AM - 10:30 AM</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Dinner: 7:00 PM - 10:30 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;

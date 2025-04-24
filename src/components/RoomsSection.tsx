
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bed } from "lucide-react";
import { cn } from "@/lib/utils";

const rooms = [
  {
    id: 1,
    name: "Ocean View Suite",
    description: "Experience luxury with stunning views of the Indian Ocean from your private balcony.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    price: 350,
    capacity: 2,
    size: "45m²",
    amenities: ["Ocean View", "King Bed", "Free WiFi", "Air Conditioning", "Private Balcony"]
  },
  {
    id: 2,
    name: "Garden Villa",
    description: "Nestled within lush tropical gardens, our spacious villas offer privacy and comfort.",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    price: 450,
    capacity: 4,
    size: "75m²",
    amenities: ["Garden View", "King Bed", "Private Pool", "Free WiFi", "Kitchenette"]
  },
  {
    id: 3,
    name: "Beachfront Cottage",
    description: "Just steps away from the beach, these cottages offer unparalleled access to the ocean.",
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    price: 550,
    capacity: 2,
    size: "60m²",
    amenities: ["Beachfront", "King Bed", "Outdoor Shower", "Free WiFi", "Private Terrace"]
  },
];

const RoomsSection = () => {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0].id);

  return (
    <section className="py-16 md:py-24 bg-white" id="rooms">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium uppercase tracking-wider text-primary">
            Accommodations
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mt-2">
            Elegant Rooms & Suites
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto mt-4">
            Discover our exquisite accommodations designed for comfort and style. Each room is thoughtfully appointed to provide a serene haven during your stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {rooms.map((room) => (
            <Card 
              key={room.id} 
              className={cn(
                "cursor-pointer transition-all overflow-hidden", 
                selectedRoom === room.id ? "ring-2 ring-primary" : "hover:shadow-lg"
              )}
              onClick={() => setSelectedRoom(room.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-serif font-semibold">{room.name}</h4>
                <div className="flex items-center mt-2 text-gray-600">
                  <Bed size={16} className="mr-1" />
                  <span className="text-sm">Up to {room.capacity} guests</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm">{room.size}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {room.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <div className="font-semibold">
                    <span className="text-primary">${room.price}</span>
                    <span className="text-sm text-gray-500"> / night</span>
                  </div>
                  <Button 
                    variant={selectedRoom === room.id ? "default" : "outline"} 
                    size="sm"
                  >
                    {selectedRoom === room.id ? "Selected" : "View Details"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg">View All Rooms</Button>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;

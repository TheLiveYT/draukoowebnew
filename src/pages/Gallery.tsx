
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop",
      title: "Epic Castle Build",
      description: "A magnificent castle built by our community members"
    },
    {
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop",
      title: "Mountain Vista",
      description: "Beautiful mountain landscape with custom terrain generation"
    },
    {
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1200&h=800&fit=crop",
      title: "Peaceful Lake",
      description: "Serene lake surrounded by player-built structures"
    },
    {
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=800&fit=crop",
      title: "Nether Portal Hub",
      description: "Central hub connecting to various nether portals"
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1200&h=800&fit=crop",
      title: "Wildlife Sanctuary",
      description: "Protected area for minecraft animals and creatures"
    },
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=800&fit=crop",
      title: "Modern City",
      description: "Bustling player-built metropolitan area"
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      title: "Underground Base",
      description: "Hidden underground facility with advanced redstone"
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop&bg=555",
      title: "Floating Islands",
      description: "Mystical floating islands in the sky dimension"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
    } else {
      setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Server Gallery</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore amazing builds, landscapes, and adventures from our Minecraft community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer hover-scale"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
            onClick={() => navigateImage('prev')}
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
            onClick={() => navigateImage('next')}
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          <div className="max-w-4xl max-h-full">
            <img 
              src={images[selectedImage].src}
              alt={images[selectedImage].title}
              className="max-w-full max-h-full object-contain"
            />
            <div className="text-white text-center mt-4">
              <h3 className="text-xl font-semibold mb-2">{images[selectedImage].title}</h3>
              <p className="text-gray-300">{images[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;

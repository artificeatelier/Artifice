import React from "react";
import Flyer_1 from '../../Assets/Flyer/Racing.jpg'
import Flyer_2 from '../../Assets/Flyer/Dance.jpg'
import Flyer_3 from '../../Assets/Flyer/Jet_Ski.jpg'

const images = [
{ src: Flyer_1, alt: "Image 1" },
    { src: Flyer_2, alt: "Image 2" },
    { src: Flyer_3, alt: "Image 3" },
];

const Flyers = () => {
  return (
    
    <div className="bg-black min-h-screen pt-28 text-white">
    
    <section>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt || `Image ${index + 1}`}
                className={`w-full h-auto object-cover ${index % 3 === 0 ? "sm:col-span-2 md:col-span-2 lg:col-span-2" : "sm:col-span-1 md:col-span-1 lg:col-span-1"}`}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Flyers;

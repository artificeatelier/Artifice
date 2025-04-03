import React from "react";
import Logo1 from '../../Assets/BCard/1.jpg'
import Logo2_1 from '../../Assets/BCard/2_1.jpg'
import Logo2_2 from '../../Assets/BCard/2_2.jpg'
import Logo3 from '../../Assets/BCard/3.jpg'
import Logo4_1 from '../../Assets/BCard/4_1.jpg'
import Logo4_2 from '../../Assets/BCard/4_2.jpg'
import Logo5 from '../../Assets/BCard/5.jpg'

const BCard = () => {
  const images = [
    { src: Logo1, alt: "Image 1" },
    { src: Logo2_1, alt: "Image 2" },
    { src: Logo2_2, alt: "Image 3" },
    { src: Logo3, alt: "Image 4" },
    { src: Logo4_1, alt: "Image 5" },
    { src: Logo4_2, alt: "Image 6" },
    { src: Logo5, alt: "Image 7" },

  ];

  return (
    <div className="bg-black min-h-screen pt-28 text-white">
      <section>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
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

export default BCard;

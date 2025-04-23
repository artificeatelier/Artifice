import React from "react";
import Flyer_1 from '../../Assets/Flyer/Racing.jpg'
import Flyer_2 from '../../Assets/Flyer/Dance.jpg'
import Flyer_3 from '../../Assets/Flyer/Sports.jpg'
import Flyer_4 from '../../Assets/Flyer/FCV.jpg'

const images = [
  Flyer_1,
  Flyer_2,
  Flyer_3,
  Flyer_4
];

const Flyers = () => {
  return (
    
    <div className="bg-black min-h-screen text-white">
    
    <section>
        <div className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="flex items-center justify-center rounded-lg shadow-lg"
          >
            <img src={src} alt={`Logo ${index + 1}`} className="w-full h-fit object-contain" />
          </div>
        ))}
      </div>
    </div>
      </section>

    </div>
  );
};

export default Flyers;

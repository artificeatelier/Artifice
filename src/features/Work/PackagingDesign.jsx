import React from "react";
import Img_1 from '../../Assets/Packging/1.jpg'
import Img_2 from '../../Assets/Packging/2.jpg'
import Img_3 from '../../Assets/Packging/3.jpg'
import Img_4 from '../../Assets/Packging/4.jpg'
import Img_5 from '../../Assets/Packging/5.jpg'
import Img_6 from '../../Assets/Packging/6.jpg'

const images = [
    Img_1,
    Img_2,
    Img_3,
    Img_4,
    Img_5,
    Img_6,
];

const Packaging  = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="bg-black min-h-screen flex items-center justify-center p-4">
        <div className="grid grid-cols-1 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-lg shadow-lg"
            >
              <img
                src={src}
                alt={`Logo ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packaging;

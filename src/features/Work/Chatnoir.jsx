import React from "react";
import Img_1 from '../../Assets/Chatnoir/1.jpg'
import Img_2 from '../../Assets/Chatnoir/2.jpg'
import Img_3 from '../../Assets/Chatnoir/3.jpg'


const images = [
    Img_1,
    Img_2,
    Img_3,
];

const Chatnoir = () => {
  return (
    <div className="bg-black min-h-screen pt-28 text-white">
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
                className="w-full h-fit object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chatnoir;

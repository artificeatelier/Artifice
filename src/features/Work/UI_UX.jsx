import React from "react";
import Img_1 from '../../Assets/UI_UX/1.jpg'
import Img_2 from '../../Assets/UI_UX/2.jpg'
import Img_3 from '../../Assets/UI_UX/3.jpg'
import Img_4 from '../../Assets/UI_UX/4.jpg'
import Img_5 from '../../Assets/UI_UX/5.jpg'
import Img_6 from '../../Assets/UI_UX/6.jpg'
import Img_7 from '../../Assets/UI_UX/7.jpg'
import Img_8 from '../../Assets/UI_UX/8.jpg'
import Img_9 from '../../Assets/UI_UX/9.jpg'
import Img_10 from '../../Assets/UI_UX/10.jpg'
import Img_11 from '../../Assets/UI_UX/11.jpg'
import Img_12 from '../../Assets/UI_UX/12.jpg'
import Img_13 from '../../Assets/UI_UX/13.jpg'
import Img_14 from '../../Assets/UI_UX/14.jpg'
import Img_15 from '../../Assets/UI_UX/15.jpg'
import Img_17 from '../../Assets/UI_UX/17.jpg'
import Img_18 from '../../Assets/UI_UX/18.jpg'
import Img_19 from '../../Assets/UI_UX/19.jpg'
import Img_20 from '../../Assets/UI_UX/20.jpg'


const images = [
    Img_1,
    Img_2,
    Img_3,
    Img_4,
    Img_5,
    Img_6,
    Img_7,
    Img_8,
    Img_9,
    Img_10,
    Img_11,
    Img_12,
    Img_13,
    Img_14,
    Img_15,
    Img_17,
    Img_18,
    Img_19,
    Img_20,
];

const UI_UX  = () => {
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

export default UI_UX;

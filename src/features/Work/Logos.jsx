import React from "react";
import Logo1 from '../../Assets/Portfolio_Logo/Logo1.jpg'
import Logo2 from '../../Assets/Portfolio_Logo/Logo2.jpg'
import Logo3 from '../../Assets/Portfolio_Logo/Logo3.jpg'
import Logo4 from '../../Assets/Portfolio_Logo/Logo4.jpg'
import Logo5 from '../../Assets/Portfolio_Logo/Logo5.jpg'
import Logo6 from '../../Assets/Portfolio_Logo/Logo6.jpg'
import Logo7 from '../../Assets/Portfolio_Logo/Logo7.jpg'
import Logo8 from '../../Assets/Portfolio_Logo/Logo8.jpg'
import Logo9 from '../../Assets/Portfolio_Logo/Logo9.jpg'
import Logo10 from '../../Assets/Portfolio_Logo/Logo10.jpg'
import Logo11 from '../../Assets/Portfolio_Logo/Logo11.jpg'
import Logo12 from '../../Assets/Portfolio_Logo/Logo12.jpg'
import Logo13 from '../../Assets/Portfolio_Logo/Logo13.jpg'
import Logo14 from '../../Assets/Portfolio_Logo/Logo14.jpg'
import Logo15 from '../../Assets/Portfolio_Logo/Logo15.jpg'
import Logo16 from '../../Assets/Portfolio_Logo/Logo16.jpg'
import Logo17 from '../../Assets/Portfolio_Logo/Logo17.jpg'
import Logo18 from '../../Assets/Portfolio_Logo/Logo18.jpg'
import Logo19 from '../../Assets/Portfolio_Logo/Logo19.jpg'
import Logo20 from '../../Assets/Portfolio_Logo/Logo20.jpg'
import Logo21 from '../../Assets/Portfolio_Logo/Logo21.jpg'
import Logo22 from '../../Assets/Portfolio_Logo/Logo22.jpg'
import Logo23 from '../../Assets/Portfolio_Logo/Logo23.jpg'
import Logo24 from '../../Assets/Portfolio_Logo/Logo24.jpg'
import Logo25 from '../../Assets/Portfolio_Logo/Logo25.jpg'
import Logo26 from '../../Assets/Portfolio_Logo/Logo26.jpg'
import Logo27 from '../../Assets/Portfolio_Logo/Logo27.jpg'

const images = [
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Logo8,
  Logo9,
  Logo10,
  Logo11,
  Logo12,
  Logo13,
  Logo14,
  Logo15,
  Logo16,
  Logo17,
  Logo18,
  Logo19,
  Logo20,
  Logo21,
  Logo22,
  Logo23,
  Logo24,
  Logo25,
  Logo26,
  Logo27,
];

const Logos = () => {
  return (
    
    <div className="bg-black min-h-screen text-white">
    
    <div className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="flex items-center justify-center rounded-lg shadow-lg"
          >
            <img src={src} alt={`Logo ${index + 1}`} className="w-72 h-72 object-contain" />
          </div>
        ))}
      </div>
    </div>

    </div>
  );
};

export default Logos;

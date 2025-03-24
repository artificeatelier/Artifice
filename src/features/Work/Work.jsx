import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const classNames = (...classes) => classes.filter(Boolean).join(" ");

export const Work = ({ images, className }) => {
  const { t, i18n } = useTranslation()
  const gridRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (gridRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = gridRef.current;
        const scrollProgress = scrollTop / (scrollHeight - clientHeight);
        setScrollPosition(scrollProgress);
      }
    };

    const container = gridRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const getTranslateY = (column) => {
    const maxTranslate = 200;
    return column % 2 === 0 ? scrollPosition * maxTranslate : -scrollPosition * maxTranslate;
  };

  const third = Math.ceil(images.length / 2);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);

  return (

    <div className="bg-black min-h-screen pt-28 text-white">

      <div
      className={classNames("h-[40rem] bg-black overflow-y-auto scrollbar-hide w-full", className)}
      ref={gridRef}
    >

      {/* -----Heading----- */}
      <div className="bg-black py-20 px-6">
      <div className="max-w-7xl">
        <div className="flex items-center justify-start relative">
          <div className="w-32 h-[1px] bg-white mr-4"></div>
          <h2 className="text-sm tracking-widest text-white uppercase">{t("OUR WORK")}</h2>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white md:mx-36 mt-6">{t("PORTFOLIO")}</h1>
        <p className="text-white md:mx-36 max-w-2xl mt-6">
          Explore our creative portfolio showcasing a diverse range of design projects across various categories.
        </p>
      </div>
      </div>

      {/*-----Grid----- */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        {[firstPart, secondPart].map((part, columnIndex) => (
          <div key={columnIndex} className="grid gap-10">
            {part.map((el, idx) => (
              <div
                key={`grid-${columnIndex}-${idx}`}
                style={{
                  transform: `translateY(${getTranslateY(columnIndex + 1)}px)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                <img
                  src={el || "/placeholder.svg"}
                  className="h-80 w-full object-cover object-left-top rounded-lg"
                  alt="thumbnail"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      </div>
    
    </div>
  );
};

export default function ParallaxScrollDemo() {
  const images = [
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&auto=format&fit=crop&w=3387&q=80",
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&auto=format&fit=crop&w=3070&q=80",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2640&q=80",
  ];

  return <Work images={images} />;
}
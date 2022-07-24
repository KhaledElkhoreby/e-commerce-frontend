import Image from 'next/image';
import { MouseEventHandler, useEffect, useState } from 'react';

export default function ImagesSlider({ images = [] }: { images: string[] }) {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [zoomStyle, setZoomStyle] = useState({
    backgroundImage: 'none',
    backgroundPosition: '0% 0%',
  });

  useEffect(() => {
    setActiveImage(images[0]);
  }, [images]);

  const hoverHandler = (image: string) => {
    setActiveImage(image);
  };

  const handleMouseEnter: MouseEventHandler = () => {
    const url = process.env.NEXT_PUBLIC_SERVER_HOST + activeImage;
    setZoomStyle((prev) => ({ ...prev, backgroundImage: `url('${url}')` }));
  };

  const handleMouseMove: MouseEventHandler = (event) => {
    const { left, top, width, height } = (
      event.target as HTMLElement
    ).getBoundingClientRect();
    const x = ((event.pageX - left) / width) * 100;
    const y = ((event.pageY - top) / height) * 100;
    setZoomStyle((prev) => ({ ...prev, backgroundPosition: `${x}% ${y}%` }));
  };

  const handleMouseLeave: MouseEventHandler = () => {
    setZoomStyle({
      backgroundImage: 'none',
      backgroundPosition: '0% 0%',
    });
  };

  return (
    <>
      <div className="w-full h-full">
        <div className="flex flex-col-reverse w-full items-center gap-y-2 lg:flex-row md:items-start md:h-[calc(100%-4rem)] md:gap-x-2">
          {/* thumbs*/}
          <div
            className="flex flex-nowrap justify-center gap-1 w-full h-[100px] shadow shadow-black carousel
                      lg:flex-col lg:w-[4.25rem] lg:h-[370px] lg:carousel-vertical lg:justify-start"
          >
            {images.map((image, index) => (
              /* img_wrap */
              <div
                className="flex-1 shrink-0 grow-0 basis-[4.5rem] cursor-pointer carousel-item relative"
                key={index}
                onMouseOver={() => hoverHandler(image)}
              >
                <Image
                  layout="fill"
                  src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${image}`}
                  alt=""
                  className={`object-contain text-center transition-all ease-linear border border-transparent ${
                    activeImage === image
                      ? 'outline outline-black shadow shadow-black brightness-100'
                      : 'shadow-sm brightness-50'
                  }`}
                />
              </div>
            ))}
          </div>
          {/* preview */}
          <figure
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="bg-no-repeat group lg:w-[calc(100%-4.25rem)] items-stretch self-stretch w-full h-[70vh] md:h-full relative"
            style={zoomStyle}
          >
            <Image
              layout="fill"
              objectFit="contain"
              src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${activeImage}`}
              priority
              alt=""
              className="block pointer-events-none group-hover:opacity-0 object-center md:object-left-top"
            />
          </figure>
        </div>
      </div>
    </>
  );
}

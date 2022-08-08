import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { IProduct } from '../../interfaces/Product/IProduct';
import RateStars from './RateStars';
import SwitchColors from './SwitchColors';
import SwitchSizes from './SwitchSizes';

const ProductCard = ({ product }: { product: IProduct | undefined }) => {
  const [variant, setVariant] = useState(product?.variants[0]);
  const [size, setSize] = useState(product?.variants[0]?.sizes[0]);
  const [color, setColor] = useState(variant?.color);
  const routre = useRouter();

  const colors = useMemo(
    () => product?.variants?.map((variant) => variant.color)!,
    [product]
  );

  useEffect(() => {
    const variant = product?.variants?.find(
      (variant) => variant?.color === color
    );
    setVariant(variant);
    setSize(variant?.sizes[0]);
  }, [color, product?.variants]);

  return (
    <li className=" h-[600px] w-64 shadow-md hover:shadow-xl transition-shadow flex flex-col rounded-md">
      <figure className="relative aspect-[2/3] max-h-[330px] flex-shrink-0">
        <Image
          src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${variant?.images[0]}`}
          className="cursor-pointer"
          layout="fill"
          objectFit="contain"
          objectPosition="top center"
          alt={product?.title}
          onClick={() =>
            routre.push(`/products/${product?._id}`, undefined, {
              scroll: true,
            })
          }
        />
      </figure>
      <div className="flex flex-col px-2 gap-y-5">
        <article>
          <h3 className="text-slate-500 text-sm font-light">
            {product?.brand}
          </h3>
          <Link
            href={`/products/${product?._id}`}
            as={`/products/${product?._id}`}
            scroll
            className="text-md"
          >
            {product?.title}
          </Link>
          <h2 className="text-md font-light">${size?.price}</h2>
        </article>
        <SwitchColors
          colors={colors}
          currentColorState={color}
          onChangeColorStateHandler={setColor}
          className="gap-2"
        />
        <SwitchSizes
          sizes={variant?.sizes!}
          onChangeSizeStateHandler={setSize}
          currentSizeState={size}
          boxSize={7}
        />
        <RateStars value={product?.ratingsAverage} readOnly />
        <button className="btn btn-outline rounded-none">Add To Cart</button>
      </div>
    </li>
  );
};

export default ProductCard;

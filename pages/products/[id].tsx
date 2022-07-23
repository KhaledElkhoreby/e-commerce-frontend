import { useEffect, useMemo, useState } from 'react';
import ImagesSlider from '../../components/Product/ImagesSlider';
import RateStars from '../../components/Product/RateStars';
import SwitchColors from '../../components/Product/SwitchColors';
import SwitchSizes from '../../components/Product/SwitchSizes';
import IProduct from '../../interfaces/Product/IProduct';

const productData: IProduct = {
  category: 'Shirts',
  brand: 'Ambrose14',
  brand_thumbnail: 'Gwendolyn_Wisoky',
  title: 'Ally Boly',
  description: 'Melba_Barrows',
  ratingsAverage: 2,
  ratingsQuantity: 79,
  variants: [
    {
      color: '#999933',
      sizes: [
        {
          size: 'XL',
          count: 62,
          price: 36,
        },
        {
          size: 'XXL',
          count: 52,
          price: 61,
        },
      ],
      images: [
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2879899039_1_1_1_628x.progressive.jpg?v=1542543939',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2879899039_2_1_1_628x.progressive.jpg?v=1542543940',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2879899039_2_2_1_628x.progressive.jpg?v=1542543942',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2879899039_2_3_1_628x.progressive.jpg?v=1542543943',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2879899039_2_4_1_628x.progressive.jpg?v=1542543944',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2879899250_1_1_1_628x.progressive.jpg?v=1542543945',
      ],
    },
    {
      color: '#00B3E6',
      sizes: [
        {
          size: 'S',
          count: 19,
          price: 80,
        },
        {
          size: 'XXL',
          count: 4,
          price: 12,
        },
        {
          size: 'XL',
          count: 15,
          price: 69,
        },
        {
          size: 'M',
          count: 34,
          price: 65,
        },
        {
          size: 'L',
          count: 20,
          price: 57,
        },
      ],
      images: [
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2046033800_1_1_1_628x.progressive.jpg?v=1525093946',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2046033800_2_1_1_628x.progressive.jpg?v=1525093947',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2046033800_2_2_1_628x.progressive.jpg?v=1525093948',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2046033800_2_3_1_628x.progressive.jpg?v=1525093949',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2046033800_2_4_1_628x.progressive.jpg?v=1525093950',
      ],
    },
    {
      color: '#66994D',
      sizes: [
        {
          size: 'M',
          count: 49,
          price: 32,
        },
        {
          size: 'XL',
          count: 75,
          price: 11,
        },
      ],
      images: [
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/0278211506_1_1_1_628x.progressive.jpg?v=1525093887',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/0278211506_2_1_1_490x.progressive.jpg?v=1525093887',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/0278211506_2_2_1_490x.progressive.jpg?v=1525093888',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/0278211506_2_3_1_490x.progressive.jpg?v=1525093889',
      ],
    },
    {
      color: '#99E6E6',
      sizes: [
        {
          size: 'M',
          count: 49,
          price: 5,
        },
      ],
      images: [
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2879899039_1_1_1_628x.progressive.jpg?v=1542543939',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2879899039_2_1_1_628x.progressive.jpg?v=1542543940',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2879899039_2_2_1_628x.progressive.jpg?v=1542543942',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2879899039_2_3_1_628x.progressive.jpg?v=1542543943',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2879899039_2_4_1_628x.progressive.jpg?v=1542543944',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2879899250_1_1_1_628x.progressive.jpg?v=1542543945',
      ],
    },
    {
      color: '#B33300',
      sizes: [
        {
          size: 'S',
          count: 47,
          price: 61,
        },
        {
          size: 'L',
          count: 11,
          price: 2,
        },
        {
          size: 'XL',
          count: 1,
          price: 35,
        },
        {
          size: 'XXL',
          count: 26,
          price: 49,
        },
        {
          size: 'M',
          count: 62,
          price: 54,
        },
      ],
      images: [
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2046033800_1_1_1_628x.progressive.jpg?v=1525093946',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2046033800_2_1_1_628x.progressive.jpg?v=1525093947',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2046033800_2_2_1_628x.progressive.jpg?v=1525093948',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2046033800_2_3_1_628x.progressive.jpg?v=1525093949',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2046033800_2_4_1_628x.progressive.jpg?v=1525093950',
      ],
    },
    {
      color: '#E666B3',
      sizes: [
        {
          size: 'XXL',
          count: 68,
          price: 73,
        },
        {
          size: 'L',
          count: 10,
          price: 69,
        },
        {
          size: 'XL',
          count: 5,
          price: 10,
        },
        {
          size: 'M',
          count: 39,
          price: 30,
        },
      ],
      images: [
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/0278211506_1_1_1_628x.progressive.jpg?v=1525093887',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/0278211506_2_1_1_490x.progressive.jpg?v=1525093887',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/0278211506_2_2_1_490x.progressive.jpg?v=1525093888',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/0278211506_2_3_1_490x.progressive.jpg?v=1525093889',
      ],
    },
    {
      color: '#CCCC00',
      sizes: [
        {
          size: 'XL',
          count: 2,
          price: 58,
        },
        {
          size: 'XXXl',
          count: 46,
          price: 12,
        },
      ],
      images: [
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2879899039_1_1_1_628x.progressive.jpg?v=1542543939',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2879899039_2_1_1_628x.progressive.jpg?v=1542543940',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2879899039_2_2_1_628x.progressive.jpg?v=1542543942',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2879899039_2_3_1_628x.progressive.jpg?v=1542543943',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2879899039_2_4_1_628x.progressive.jpg?v=1542543944',
        'https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2879899250_1_1_1_628x.progressive.jpg?v=1542543945',
      ],
    },
  ],
  _id: '62dae5bb25b426f73712296a',
  createdAt: '2022-07-22T18:00:28.013Z',
  updatedAt: '2022-07-22T18:00:28.013Z',
  slug: 'ally-boly',
  __v: 0,
};
export default function ProductDetails() {
  const [product, setProduct] = useState<IProduct>();
  const [variant, setVariant] = useState(product?.variants[0]);
  const [size, setSize] = useState(variant?.sizes[0]);
  const [color, setColor] = useState(variant?.color);

  const colors = useMemo(
    () => product?.variants?.map((variant) => variant.color)!,
    [product]
  );

  useEffect(() => {
    (async () => {
      const data = await new Promise<IProduct>((resolve) => {
        resolve(productData);
      });
      setProduct(data);
      setVariant(product?.variants[0]);
      setSize(product?.variants[0]?.sizes[0]);
    })();
  }, [product]);

  useEffect(() => {
    const variant = product?.variants?.find(
      (variant) => variant?.color === color
    );
    setVariant(variant);
    setSize(variant?.sizes[0]);
  }, [color, product?.variants]);

  return (
    variant && (
      <div className="container">
        <div className="capitalize text-center py-4 text-xs md:text-sm xl:text-start">
          home / {'productName'}
        </div>
        <div className="flex flex-wrap justify-between gap-6">
          <div className="flex-grow min-h-[600px] w-full lg:w-[50%] md:basis-[calc(50%-1.5rem)] ">
            <ImagesSlider images={variant?.images!} />
          </div>
          <div className=" flex-grow w-full md:basis-[calc(50%-1.5rem)] flex flex-col text-center lg:text-start gap-y-4">
            <div className="flex gap-x-2 justify-center capitalize text-sm lg:justify-start">
              <span className="badge-error text-white px-2">{'hot'}</span>
              <span className="badge-info text-white px-2">{'in stock'}</span>
            </div>
            <h1 className="text-xl lg:text-2xl">
              {'Skinny mid-rise trousers'}
            </h1>
            <div className="border-black flex justify-center lg:justify-start gap-x-2">
              <RateStars size={25} readOnly onChange={undefined} />
              <span className="underline uppercase font-thin">
                {'3 reviews'}
              </span>
            </div>
            <div>
              <span className="uppercase text-slate-500">{'Brand'}:</span>
              <span className="capitalize">{'Polo'}</span>
            </div>
            <h1 className="text-2xl lg:text-3xl">${'171.00'}</h1>
            <h3>
              Hurry! Only <span className="text-red-600">{6}</span> left in
              Stock!
            </h3>
            <progress
              className="progress w-full"
              value={70}
              max={100}
            ></progress>
            <hr className="my-4" />
            <div>
              <h1 className="uppercase font-thin mb-3">colors:{color}</h1>
              <SwitchColors
                colors={colors}
                onChangeColorStateHandler={setColor}
                currentColorState={color}
                circleSize={25}
                className="px-2 py-1 gap-6"
              />
            </div>
            <div>
              <h1 className="uppercase font-thin mb-3">sizes:{size?.size}</h1>
              <SwitchSizes
                sizes={variant?.sizes}
                onChangeSizeStateHandler={setSize}
                currentSizeState={size}
                boxSize={10}
                className="py-2 px-1 gap-x-3"
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

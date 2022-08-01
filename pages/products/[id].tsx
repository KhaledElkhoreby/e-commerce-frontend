import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import ImagesSlider from '../../components/Product/ImagesSlider';
import RateStars from '../../components/Product/RateStars';
import SwitchColors from '../../components/Product/SwitchColors';
import SwitchSizes from '../../components/Product/SwitchSizes';
import Reviews from '../../components/Reviews/Reviews';
import {
  getProductById,
  getRunningOperationPromises,
  useGetProductByIdQuery,
} from '../../lib/services/productsApi';
import { wrapper } from '../../lib/store';

export default function ProductDetails() {
  const router = useRouter();
  const id = router.query.id;

  const { isLoading, error, data } = useGetProductByIdQuery(
    typeof id === 'string' ? id : skipToken,
    {
      skip: router.isFallback,
    }
  );

  const product = data;

  const [variant, setVariant] = useState(product?.variants[0]);
  const [size, setSize] = useState(variant?.sizes[0]);
  const [color, setColor] = useState(variant?.color);

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
    <div className="container">
      <div className="capitalize text-center py-4 text-xs md:text-sm xl:text-start">
        home / {product?.category} / {product?.brand}
      </div>
      <div className="flex flex-wrap justify-between gap-6">
        <div className="flex-grow min-h-[600px] w-full lg:w-[50%] md:basis-[calc(50%-1.5rem)] ">
          {variant && <ImagesSlider images={variant?.images!} />}
        </div>
        <div className=" flex-grow w-full md:basis-[calc(50%-1.5rem)] flex flex-col text-center lg:text-start gap-y-4">
          <div className="flex gap-x-2 justify-center capitalize text-sm lg:justify-start">
            <span className="badge-error text-white px-2">{'hot'}</span>
            <span className="badge-info text-white px-2">{'in stock'}</span>
          </div>
          <h1 className="text-xl lg:text-2xl">{product?.title}</h1>
          <div className="border-black flex justify-center lg:justify-start gap-x-2">
            <RateStars size={25} readOnly />
            <span className="underline uppercase font-thin">
              {`${product?.ratingsQuantity} reviews`}
            </span>
          </div>
          <div>
            <span className="uppercase text-slate-500">Brand:</span>
            <span className="capitalize">{product?.brand}</span>
          </div>
          <h1 className="text-2xl lg:text-3xl">${'171.00'}</h1>
          <h3>
            Hurry! Only{' '}
            <span className="text-red-600">{product?.variants.length}</span>{' '}
            left in Stock!
          </h3>
          <progress className="progress w-full" value={70} max={100}></progress>
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
            {variant && (
              <SwitchSizes
                sizes={variant?.sizes}
                onChangeSizeStateHandler={setSize}
                currentSizeState={size}
                boxSize={10}
                className="py-2 px-1 gap-x-3"
              />
            )}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-semibold capitalize">customer reviews</h1>
        <Reviews productId={id as string} />
      </div>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const id = context.params?.id;
    if (typeof id === 'string') store.dispatch(getProductById.initiate(id));

    await Promise.all(getRunningOperationPromises());
    return {
      props: {},
    };
  }
);

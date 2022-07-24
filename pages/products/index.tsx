import { useRouter } from 'next/router';
import {
  getProductList,
  getRunningOperationPromises,
  useGetProductListQuery,
} from '../../lib/productsApi';
import { wrapper } from '../../lib/store';

export default function Products() {
  const router = useRouter();

  const { isLoading, error, data } = useGetProductListQuery(null, {
    skip: router.isFallback,
  });

  const productList = data?.data;

  return (
    <>
      {error && !isLoading && <div>There is error</div>}
      {isLoading && <div>Loading....</div>}
      {productList && (
        <div>
          {productList?.map((el) => (
            <div key={el._id}>{el.slug}</div>
          ))}
        </div>
      )}
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(getProductList.initiate(null));
  await Promise.all(getRunningOperationPromises());
  return {
    props: {},
  };
});

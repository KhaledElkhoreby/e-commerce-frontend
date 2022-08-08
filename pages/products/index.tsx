import { useRouter } from 'next/router';
import ProductList from '../../components/Product/ProductList';
import {
  getProductList,
  getRunningOperationPromises,
  useGetProductListQuery,
} from '../../lib/services/productsApi';
import { wrapper } from '../../lib/store';

export default function Products() {
  const router = useRouter();

  const {
    data: productList,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetProductListQuery(null, {
    skip: router.isFallback,
  });

  if (isError) console.log(error);

  return (
    <>
      {isError && <div>There is error</div>}
      {isLoading && <div>Loading....</div>}
      {isSuccess && <ProductList products={productList} />}
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

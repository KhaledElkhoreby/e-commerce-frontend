import type { NextPage } from 'next';
import ProductList from '../components/Product/ProductList';
import { useGetProductListQuery } from '../lib/services/productsApi';

const Home: NextPage = () => {
  const {
    data: products,
    isLoading,
    isError,
    isSuccess,
  } = useGetProductListQuery(null);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>There is an error</div>}
      {isSuccess && <ProductList products={products} />}
    </>
  );
};

export default Home;

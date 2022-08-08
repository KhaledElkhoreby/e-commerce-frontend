import type { NextPage } from 'next';
import Head from 'next/head';
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
      <Head>
        <title>My App</title>
        <meta name="description" content="Vastra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading && <div>Loading...</div>}
      {isError && <div>There is an error</div>}
      {isSuccess && <ProductList products={products} />}
    </>
  );
};

export default Home;

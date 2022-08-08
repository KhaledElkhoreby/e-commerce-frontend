import { IProduct } from '../../interfaces/Product/IProduct';
import ProductCard from './ProductCard';

const ProductList = ({ products }: { products: Array<IProduct> }) => {
  return (
    <ul className="flex flex-wrap justify-center gap-4 ">
      {products?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;

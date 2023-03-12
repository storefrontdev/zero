import { getAllProducts, getProductBySlug } from '@/lib/swell/products';
import Carousel from './carousel';
import Details from './details';

export async function generateStaticParams() {
  const products = await getAllProducts();

  return products.map((product) => ({
    slug: product.slug
  }));
}

export default async function ProductPage({ params }) {

  const product = await getProductBySlug(params.slug);

  const {name, description} = product;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-2 h-[500px]">
          <Carousel product={product} />
        </div>
        <div className="col-span-1">
          <Details product={product} />
        </div>
      </div>
    </div>
  );
}
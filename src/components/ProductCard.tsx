import Link from 'next/link';
import { Product } from '@/data/products';
import Image from 'next/image';

export default function ProductCard({ product }: { product: Product }) {
  const maxLength = 40;
  const description =
    product.desc.length < maxLength
      ? product.desc
      : product.desc.slice(0, maxLength - 3) + '...';

  return (
    <Link href={`/products/${product.id}`} className="block group">
      <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-lg"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold">{product.name}</h3>
          <p className="text-gray-600">{description}</p>
          <p className="mt-2 font-semibold">${product.price}</p>
        </div>
      </div>
    </Link>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discount = Math.round(((product.price - product.wholesalePrice) / product.price) * 100);

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-lg">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          />
          {discount > 0 && (
            <div className="absolute top-2 right-2 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white z-10">
              -{discount}%
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600">
            {product.name}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
            <span className="capitalize">{product.style.replace('-', ' ')}</span>
            <span>•</span>
            <span>{product.length}</span>
            <span>•</span>
            <span>{product.color}</span>
          </div>

          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-purple-600">
              ${product.wholesalePrice.toFixed(2)}
            </span>
            {product.price > product.wholesalePrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          <div className="mt-2 text-sm text-gray-600">
            Min Order: {product.minOrderQuantity} units
          </div>

          <div className="mt-3">
            <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
              product.stockQuantity > 50
                ? 'bg-green-100 text-green-800'
                : product.stockQuantity > 0
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {product.stockQuantity > 50
                ? 'In Stock'
                : product.stockQuantity > 0
                ? 'Low Stock'
                : 'Out of Stock'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

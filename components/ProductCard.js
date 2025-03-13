import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64 w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl text-center font-bold mb-4">{product.name}</h2>
        <p className="text-gray-600 text-sm text-center mb-6 line-clamp-3">
          {product.description}
        </p>
        <Link
          href={`/product/${product.id}`}
          className="block w-full text-center bg-black hover:bg-black/80 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
        >
          View More
        </Link>
      </div>
    </div>
  );
}

import { productDto } from "@/dto/productDto";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import FormatTaka from "./FormatTaka";

export default function ProductCard({ product }: { product: productDto }) {
  return (
    <div className={"h-full"}>
      {product !== undefined && (
        <Link
          to={`/products/${product._id}`}
          className="relative flex flex-col h-full overflow-hidden bg-white rounded">
          <img
            src={`${product.images[0]}`}
            className=" w-full h-72"
            alt={product.name}
          />

          {/* Offer Badge */}
          {product.isOffer && (
            <Badge className="absolute top-2 right-2 text-sm font-semibold bg-red-500 text-white">
              Offer
            </Badge>
          )}

          {/* Product Details */}
          <div className="flex flex-col flex-grow p-5 border border-t-0">
            <div className="mb-2 font-semibold uppercase">
              {/* Any extra icons you may want to add */}
            </div>

            <h3 className="text-xl font-semibold text-gray-800">
              {product.name}
            </h3>
            <p>
              By <span className="text-teal-700">{product.brand}</span>
            </p>

            {/* Product Tags */}
            {product?.tags?.length ? (
              <p className="my-2">
                <strong>Tags:</strong> <br />
                {product?.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block px-1 bg-gray-200 text-sm rounded py-1 mr-2 mb-2">
                    {tag}
                  </span>
                ))}
              </p>
            ) : (
              ""
            )}

            {/* Price */}
            <div className="mt-2">
              {product.isOffer && (
                <p className="text-sm text-gray-500 !line-through">
                  <FormatTaka
                    className="line-through"
                    amount={product.oldPrice ?? 0}
                  />
                </p>
              )}
              <p className="text-xl font-semibold text-gray-900">
                <FormatTaka amount={product.price} />
              </p>
            </div>

            {/* Stock Status */}
            <p
              className={`mt-1 ${
                product.stock > 0 ? "text-green-600" : "text-red-500"
              }`}>
              {product.stock > 0
                ? `In Stock (${product.stock})`
                : "Out of Stock"}
            </p>

            {/* Product Card Footer */}
            <div className="mt-auto pt-4">
              <button
                type="button"
                aria-label="View Product Details"
                className="inline-flex items-center font-semibold transition-colors duration-200 text-green-800 hover:underline cursor-pointer">
                View Details
              </button>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

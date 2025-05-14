import ProductCard from "@/components/ProductCard";
import { productDto } from "@/dto/productDto";
import { useGetProductsQuery } from "@/redux/features/proudct/productApi";
import { useParams } from "react-router-dom";

const SubCategory = () => {
  const {  subCategory } = useParams();

  const { data, isLoading } = useGetProductsQuery({});
  const products = data?.data || [];

const filtered = products.filter((p: productDto) =>
    p.category.toLowerCase().includes(subCategory?.toLowerCase() || "")
);
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold capitalize mb-6">
        {subCategory?.replace("-", " ")}
      </h2>

      {isLoading ? (
        <p>Loading...</p>
      ) : filtered.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((product:productDto) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SubCategory;

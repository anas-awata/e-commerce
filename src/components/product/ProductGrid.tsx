import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../services/fetchProducts";
import { ProductCard } from "./ProductCard";
import Loading from "../Loading";

const ProductGrid = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <Loading />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 my-8">
      {products?.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;

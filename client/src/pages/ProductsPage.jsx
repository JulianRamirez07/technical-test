import { useEffect } from "react";
import { useProducts } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";

function ProductsPage() {

    const { getProducts, products } = useProducts();

    useEffect(() => {
        getProducts()
    }, []);

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
            {products.map(product => (
                <ProductCard product={product} key={product._id} />
            ))}
        </div>
    )
}

export default ProductsPage
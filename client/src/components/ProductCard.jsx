import { useProducts } from "../context/ProductsContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {

    const { deleteProduct } = useProducts();

    return (
        <div className="bg-zinc-800 shadow-md p-6 rounded-lg">
            <header className="flex justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-100">{product.name}</h1>
            </header>
            <div className="border-t border-gray-600 py-2">
                <p className="font-bold text-gray-300 flex items-center">
                    Price: <span className="text-gray-100 ml-2">${product.price}</span>
                </p>
            </div>
            <div className="border-t border-gray-600 py-2">
                <p className="font-bold text-gray-300 flex items-center">
                    Value: <span className="text-gray-100 ml-2">{product.value}</span>
                </p>
            </div>
            <div className="border-t border-gray-600 py-2">
                <p className="font-bold text-gray-300 flex items-center">
                    Stock: <span className="text-gray-100 ml-2">{product.stock}</span>
                </p>
            </div>
            <div className="border-t border-gray-600 py-2">
                <p className="font-bold text-gray-300 flex items-center">
                    Created at: <span className="text-gray-100 ml-2">{new Date(product.createdAt).toLocaleDateString()}</span>
                </p>
            </div>
            <div className="flex justify-center mt-4">
                <button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mr-2 transition-colors duration-300"
                    onClick={() => {
                        deleteProduct(product._id);
                    }}
                >
                    Delete
                </button>
                <Link
                    to={`/products/${product._id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
                >
                    Edit
                </Link>
            </div>
        </div>
    )
}

export default ProductCard
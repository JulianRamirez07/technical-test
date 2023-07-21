import { useCategories } from "../context/CategoriesContext";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {

    const { deleteCategory } = useCategories();

    return (
        <div className="bg-zinc-800 shadow-md p-6 rounded-lg">
            <header className="flex justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-100">{category.name}</h1>
                <div className="flex gap-x-2 items-center">
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
                        onClick={() => {
                            deleteCategory(category._id);
                        }}
                    >
                        Delete
                    </button>
                    <Link
                        to={`/categories/${category._id}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
                    >
                        Edit
                    </Link>
                </div>
            </header>
            <p className="text-gray-300">{category.description}</p>
        </div>
    )
}

export default CategoryCard
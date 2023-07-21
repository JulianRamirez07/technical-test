import { useEffect } from "react";
import { useCategories } from "../context/CategoriesContext";
import CategoryCard from "../components/CategoryCard";

function CategoriesPage() {

    const { getCategories, categories } = useCategories();

    useEffect(() => {
        getCategories()
    }, []);

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
            {categories.map(category => (
                <CategoryCard category={category} key={category._id} />
            ))}
        </div>
    )
}

export default CategoriesPage
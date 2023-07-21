import { createContext, useContext, useState } from "react";
import { createCategoryRequest, getCategoriesRequest, deleteCategoryRequest, getCategoryRequest, updateCategoryRequest } from "../api/categories";

const CategoryContext = createContext();

export const useCategories = () => {
    const context = useContext(CategoryContext);

    if (!context) {
        throw new Error("useCategories must be used within a TaskProvider");
    }

    return context;
}

export function CategoryProvider({ children }) {

    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        try {
            const res = await getCategoriesRequest();
            setCategories(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    const createCategory = async (category) => {
        const res = await createCategoryRequest(category);
        console.log(res);
    }

    const deleteCategory = async (id) => {
        try {
            const res = await deleteCategoryRequest(id);
            if (res.status === 204) setCategories(categories.filter(category => category._id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const getCategory = async (id) => {
        try {
            const res = await getCategoryRequest(id);
            return res.data
        } catch (error) {
            console.error(error)
        }
    }

    const updateCategory = async (id, category) => {
        try {
            await updateCategoryRequest(id, category);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <CategoryContext.Provider value={{
            categories,
            createCategory,
            getCategories,
            deleteCategory,
            getCategory,
            updateCategory
        }}>
            {children}
        </CategoryContext.Provider>
    )
}
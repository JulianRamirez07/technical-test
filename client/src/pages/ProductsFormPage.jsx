import { useForm } from "react-hook-form";

import { useProducts } from "../context/ProductsContext";
import { useCategories } from "../context/CategoriesContext";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function ProductsFormPage() {
    const { register, handleSubmit, setValue } = useForm();
    const { createProduct, getProducts, getProduct, updateProduct } = useProducts();
    const navigate = useNavigate();
    const params = useParams();

    const { getCategories, categories } = useCategories();

    useEffect(() => {
        async function loadProduct() {
            if (params.id) {
                const product = await getProduct(params.id);
                console.log(product);
                setValue("name", product.name);
                setValue("price", product.price);
                setValue("value", product.value);
                setValue("stock", product.stock);
                setValue("category", product.category._id);
            }
        }
        loadProduct();
        getCategories();
    }, [])

    const onSubmit = handleSubmit(async (data) => {
        try {
            if (params.id) {
                await updateProduct(params.id, data);
                await getProducts();
            } else {
                await createProduct(data);
                await getProducts();
            }

            navigate("/products");

        } catch (error) {
            console.error(error);
        }
    });

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Name" {...register("name")} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" autoFocus />

                <label htmlFor="price">Price</label>
                <input type="number" placeholder="Price" {...register("price")} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" />

                <label htmlFor="value">Value</label>
                <input type="number" placeholder="Value" {...register("value")} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" />

                <label htmlFor="stock">Stock</label>
                <input type="number" placeholder="Stock" {...register("stock")} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" />

                <select {...register("category")} defaultValue={categories[0]?._id} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2">
                    {categories.map((category) => (
                        <option key={category._id} value={category._id}>
                            {category.name}
                        </option>
                    ))}
                </select>

                <button className="bg-slate-100 px-3 py-2 rounded-md text-black">Save</button>
            </form>
        </div>
    );
}

export default ProductsFormPage;

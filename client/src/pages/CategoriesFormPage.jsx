import { useForm } from "react-hook-form";
import { useCategories } from "../context/CategoriesContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function CategoriesForm() {
    const { register, handleSubmit, setValue } = useForm();
    const { createCategory, getCategories, getCategory, updateCategory } = useCategories();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadCategory() {
            if (params.id) {
                const category = await getCategory(params.id);
                console.log(category);
                setValue("name", category.name);
                setValue("description", category.description);
            }
        }
        loadCategory();
    }, [])

    const onSubmit = handleSubmit(async (data) => {
        try {
            if (params.id) {
                await updateCategory(params.id, data);
                await getCategories();
            } else {
                await createCategory(data);
                await getCategories();
            }

            navigate("/categories");

        } catch (error) {
            console.error(error);
        }
    });

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Name" {...register("name")} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" autoFocus />

                <label htmlFor="description">Description</label>
                <textarea rows="3" placeholder="Description" {...register("description")} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"></textarea>

                <button className="bg-slate-100 px-3 py-2 rounded-md text-black">Save</button>
            </form>
        </div>
    );
}

export default CategoriesForm;

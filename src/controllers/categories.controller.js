import Category from "../models/category.model.js";

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;

        const newCategory = new Category({
            name,
            description
        });

        const savedCategory = await newCategory.save();
        res.json(savedCategory);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const getCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) res.status(404).json({ message: "Category not found" });
        res.json(category);
    } catch (error) {
        return res.status(404).json({ message: "Category not found" });
    }
}

export const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) res.status(404).json({ message: "Category not found" });
        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: "Category not found" });
    }
}

export const updateCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (!category) res.status(404).json({ message: "Category not found" });
        res.json(category);
    } catch (error) {
        return res.status(404).json({ message: "Category not found" });
    }
}
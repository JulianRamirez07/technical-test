import { z } from "zod";

export const createProductSchema = z.object({
    name: z.string({
        required_error: "Name is required"
    }),
    price: z.string({
        required_error: "Price must be a number"
    }),
    value: z.string({
        required_error: "Value must be a number"
    }),
    price: z.string({
        required_error: "Price must be a number"
    }),
    stock: z.string({
        required_error: "Stock must be a number"
    })
    // category: z.string({
    //     required_error: "Category is required"
    // })
});
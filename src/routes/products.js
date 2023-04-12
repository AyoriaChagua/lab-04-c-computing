import Router from "express"

export const router_products = Router()

let products = [
    {
        id: 1,
        name: "Laptop",
        brand: "Apple",
        price: 9999.99
    },
    {
        id: 2,
        name: "iPhone",
        brand: "Apple",
        price: 3000.90
    },
    {
        id: 3,
        name: "iPad",
        brand: "Apple",
        price: 5000.95
    },
]

router_products.get('/products', (req, res)=>{
    res.render("products", {products})
})
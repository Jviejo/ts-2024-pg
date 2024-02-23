import { ClientConfig, Pool } from "pg";

type CustomerType = {
    customer_id: string
    company_name: string
    contact_name: string
    contact_title: string
    address: string
    city: string
    region: string | null
    postal_code: string
    country: string
    phone: string
    fax: string
}
type ProductType = {
    product_id: number
    product_name: string
    supplier_id: number
    category_id: number
    quantity_per_unit: string
    unit_price: number
    units_in_stock: number
    units_on_order: number
    reorder_level: number
    discontinued: number
}
const clientConfig: ClientConfig = {
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "pwd",
    port: 5432
}
const pool = new Pool(clientConfig);



async function main() {
    try {
        const resultado = await pool.query<CustomerType>('SELECT * FROM customers limit 2', []);
        const productos = await pool.query<ProductType>('SELECT * FROM products limit 10', []);
        console.log(resultado.rowCount)
        console.log(productos.rowCount)
        resultado.rows.forEach((row) => {
            console.log(row.customer_id)
        })
    } catch (error) {
        console.log(error)
    }
}
main().then(() => {
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log('finally')
    pool.end()
})



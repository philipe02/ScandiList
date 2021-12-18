import axios from './'

export async function getAllProducts() {
    const { data } = await axios.get('/product')
    return data
}

export async function createProduct(product) {
    const { data } = await axios.post('/product', product)
    return data
}

export async function deleteProducts(products) {
    console.log(products);
    const { data } = await axios.delete('/product', { data: { sku: products } })
    return data
}
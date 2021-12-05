import axios from './'

export async function getAllProducts() {
    const { data } = await axios.get('/products')
    return data
}

export async function createProduct(product) {
    const { data } = await axios.post('/products', product)
    return data
}

export async function deleteProducts(products) {
    const { data } = await axios.post('/products', products)
    return data
}
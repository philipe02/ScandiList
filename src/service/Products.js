import axios from './'

export async function getAllProducts() {
    return axios.get('product/')
        .then(response => response.data)
        .catch(error => { throw error })
}

export async function createProduct(product) {
    return axios.post('product/', product)
        .then(response => response.data)
        .catch(error => { throw error })

}

export async function deleteProducts(products) {
    return axios.delete('product/', { data: { sku: products } })
        .then(response => response.data)
        .catch(error => { throw error })
}
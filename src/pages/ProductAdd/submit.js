export default function formatProductSubmit(product) {
    const productSubmit = {};
    const productTypeObject = {};
    switch (product.productType) {
        case "1":
            Object.assign(productTypeObject, { size: parseFloat(product.size) })
            break;
        case "2":
            Object.assign(productTypeObject, {
                height: parseFloat(product.height),
                width: parseFloat(product.width),
                length: parseFloat(product['length'])
            });
            break;
        case "3":
            Object.assign(productTypeObject, {
                weight: parseFloat(product.weight)
            })
            break;
        default:
            return "Product type invalid!";
    }
    Object.assign(productSubmit, {
        sku: product.sku,
        name: product.name,
        price: parseFloat(product.price),
        product_type: parseInt(product.productType)
    }, productTypeObject)
    return productSubmit;
}

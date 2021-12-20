import { setErrors } from "store/ducks/products";

export default function validateProduct(product, dispatch) {
    let errors = [];
    if (!product.sku) {
        errors.push({ message: 'This field is required!', fieldName: 'sku' })
    }
    if (!product.name) {
        errors.push({ message: 'This field is required!', fieldName: 'name' })
    }
    if (!product.price) {
        errors.push({ message: 'This field is required!', fieldName: 'price' })
    }
    if (!product.productType) {
        errors.push({ message: 'Select a valid product type!', fieldName: 'productType' })
    }
    if (product.productType === '1')
        if (!product.size)
            errors.push({ message: 'This field is required!', fieldName: 'size' })
    if (product.productType === '2') {
        if (!product.height)
            errors.push({ message: 'This field is required!', fieldName: 'height' })
        if (!product.width)
            errors.push({ message: 'This field is required!', fieldName: 'width' })
        if (!product['length'])
            errors.push({ message: 'This field is required!', fieldName: 'length' })
    }
    if (product.productType === '3')
        if (!product.weight)
            errors.push({ message: 'This field is required!', fieldName: 'weight' })
    if (errors.length > 0) {
        dispatch(setErrors(errors))
        return false
    }
    return true
}
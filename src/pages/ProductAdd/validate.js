import { setErrors } from "store/ducks/products";

export default function validateProduct(product, dispatch) {
    let errors = [];
    if (!product.sku) {
        errors.push({ message: 'This field is required!', fieldName: 'sku' })
    }
    if (errors.length > 0) {
        dispatch(setErrors(errors))
        return false
    }
    return true
}
import { useSelector } from "react-redux";
import BookSection from "../BookSection";
import DvdSection from "../DvdSection";
import FurnitureSection from "../FurnitureSection";

const FormProduct = ({ product, handleChange, handleSave }) => {
    const { errors } = useSelector((state) => state.products);
    const productSection = {
        1: <DvdSection handleChange={handleChange} />,
        2: <FurnitureSection handleChange={handleChange} />,
        3: <BookSection handleChange={handleChange} />,
    };
    return (
        <form
            id="product_form"
            className="w-75 needs-validation"
            onSubmit={handleSave}
            noValidate
        >
            <button onClick={() => console.log(errors)}>Debug</button>
            <div className="d-flex justify-content-between mb-2">
                <label htmlFor="sku" className="form-label">
                    SKU
                </label>
                <div className="w-75">
                    <input
                        id="sku"
                        name="sku"
                        className={`form-control ${
                            errors.find((error) => error.fieldName === "sku")
                                ? "is-invalid"
                                : ""
                        }`}
                        type="text"
                        onChange={handleChange}
                        placeholder="Insert the product sku"
                        required
                    />
                    {errors.find((error) => error.fieldName === "sku") ? (
                        <p className="invalid-feedback m-0">
                            {
                                errors.find(
                                    (error) => error.fieldName === "sku"
                                ).message
                            }{" "}
                        </p>
                    ) : null}
                </div>
            </div>
            <div className="d-flex justify-content-between mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    id="name"
                    name="name"
                    className="form-control w-75"
                    type="text"
                    onChange={handleChange}
                    placeholder="Insert the product name"
                />
            </div>
            <div className="d-flex justify-content-between mb-3">
                <label htmlFor="price" className="form-label">
                    Price ($)
                </label>
                <input
                    id="price"
                    name="price"
                    className="form-control w-75"
                    type="text"
                    onChange={handleChange}
                    placeholder="Insert the product price"
                />
            </div>
            <div className="d-flex justify-content-between mb-3">
                <label htmlFor="productType" className="form-label">
                    Type
                </label>
                <select
                    id="productType"
                    name="productType"
                    className="form-select w-75"
                    onChange={handleChange}
                >
                    <option defaultValue="">Select the product type</option>
                    <option value="1">DVD</option>
                    <option value="2">Furniture</option>
                    <option value="3">Book</option>
                </select>
            </div>
            {product.productType ? productSection[product.productType] : null}
        </form>
    );
};

export default FormProduct;

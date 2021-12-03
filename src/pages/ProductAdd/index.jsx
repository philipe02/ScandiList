import Button from "../../components/Button";
import Title from "../../components/Title";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProductAdd = () => {
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    function handleSave() {
        console.log(product);
    }
    function handleCancel() {
        navigate("/");
    }
    function handleChange(e) {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }
    const productSection = {
        dvd: (
            <section id="DVD">
                <div className="d-flex justify-content-between mb-3">
                    <label htmlFor="size" className="form-label">
                        Size (MB)
                    </label>
                    <input
                        id="size"
                        name="size"
                        className="form-control w-75"
                        type="text"
                        onChange={handleChange}
                        placeholder="Insert the size in cm"
                    />
                </div>
                <p>Please provide size in megabytes</p>
            </section>
        ),
        furniture: (
            <section id="Furniture">
                <div className="d-flex justify-content-between mb-3">
                    <label htmlFor="height" className="form-label">
                        Height (CM)
                    </label>
                    <input
                        id="height"
                        name="height"
                        className="form-control w-75"
                        type="text"
                        onChange={handleChange}
                        placeholder="Insert the height in cm"
                    />
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <label htmlFor="width" className="form-label">
                        Width (CM)
                    </label>
                    <input
                        id="width"
                        name="width"
                        className="form-control w-75"
                        type="text"
                        onChange={handleChange}
                        placeholder="Insert the width in cm"
                    />
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <label htmlFor="length" className="form-label">
                        Length (CM)
                    </label>
                    <input
                        id="length"
                        name="length"
                        className="form-control w-75"
                        type="text"
                        onChange={handleChange}
                        placeholder="Insert the length in cm"
                    />
                </div>
                <p>Please provide dimensions in HxWxL format in centimeters</p>
            </section>
        ),
        book: (
            <section>
                <div className="d-flex justify-content-between mb-3">
                    <label htmlFor="weight" className="form-label">
                        Weight (KG)
                    </label>
                    <input
                        id="weight"
                        name="weight"
                        className="form-control w-75"
                        type="text"
                        onChange={handleChange}
                        placeholder="Insert the weight in kg"
                    />
                </div>
                <p>Please provide weight in kilograms</p>
            </section>
        ),
    };
    return (
        <>
            <section className="d-flex justify-content-between">
                <Title text="Product Add" />
                <div className="button-container">
                    <Button
                        id="add-product-btn"
                        className="btn-outline-primary"
                        type="button"
                        title="Save"
                        onClick={handleSave}
                    />
                    <Button
                        id="delete-product-btn"
                        className="btn-outline-danger"
                        type="button"
                        title="Cancel"
                        onClick={handleCancel}
                    />
                </div>
            </section>
            <hr className="opacity-100 border-top border-2 border-dark" />
            <form id="product_form" className="justify-self-start w-50">
                <div className="d-flex justify-content-between mb-3">
                    <label htmlFor="sku" className="form-label">
                        SKU
                    </label>
                    <input
                        id="sku"
                        name="sku"
                        className="form-control w-75"
                        type="text"
                        onChange={handleChange}
                        placeholder="Insert the product sku"
                    />
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
                        Price ($)
                    </label>
                    <select
                        id="productType"
                        name="type"
                        className="form-select w-75"
                        onChange={handleChange}
                    >
                        <option defaultValue="">Select the product type</option>
                        <option value="dvd">DVD</option>
                        <option value="book">Book</option>
                        <option value="furniture">Furniture</option>
                    </select>
                </div>
                {product.type ? productSection[product.type] : null}
            </form>
        </>
    );
};

export default ProductAdd;

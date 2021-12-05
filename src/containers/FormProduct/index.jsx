import BookSection from "../BookSection";
import DvdSection from "../DvdSection";
import FurnitureSection from "../FurnitureSection";

const FormProduct = ({ product, handleChange }) => {
    const productSection = {
        dvd: <DvdSection handleChange={handleChange} />,
        furniture: <FurnitureSection handleChange={handleChange} />,
        book: <BookSection handleChange={handleChange} />,
    };
    return (
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
    );
};

export default FormProduct;

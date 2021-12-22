import Input from "components/Input";
import Select from "components/Select";
import { useSelector } from "react-redux";
import BookSection from "../BookSection";
import DvdSection from "../DvdSection";
import FurnitureSection from "../FurnitureSection";

const FormProduct = ({ product, handleChange, handleSave }) => {
    const { errors } = useSelector((state) => state.products);
    const productSection = {
        1: <DvdSection handleChange={handleChange} errors={errors} />,
        2: <FurnitureSection handleChange={handleChange} errors={errors} />,
        3: <BookSection handleChange={handleChange} errors={errors} />,
    };
    return (
        <form
            id="product_form"
            className="w-75 needs-validation"
            onSubmit={handleSave}
            noValidate
        >
            <div className="d-flex justify-content-between mb-2">
                <label htmlFor="sku" className="form-label">
                    SKU
                </label>
                <Input
                    id="sku"
                    name="sku"
                    onChange={handleChange}
                    placeholder="Insert the product sku"
                    errors={errors}
                />
            </div>
            <div className="d-flex justify-content-between mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <Input
                    id="name"
                    name="name"
                    onChange={handleChange}
                    placeholder="Insert the product name"
                    errors={errors}
                />
            </div>
            <div className="d-flex justify-content-between mb-3">
                <label htmlFor="price" className="form-label">
                    Price ($)
                </label>
                <Input
                    id="price"
                    name="price"
                    onChange={handleChange}
                    type="number"
                    placeholder="Insert the product price"
                    errors={errors}
                />
            </div>
            <div className="d-flex justify-content-between mb-3">
                <label htmlFor="productType" className="form-label">
                    Type
                </label>
                <Select
                    id="productType"
                    name="productType"
                    onChange={handleChange}
                    placeholder="Select a product type"
                    options={[
                        { value: 1, text: "DVD" },
                        { value: 2, text: "Furniture" },
                        { value: 3, text: "Book" },
                    ]}
                    errors={errors}
                />
            </div>
            {product.productType ? productSection[product.productType] : null}
        </form>
    );
};

export default FormProduct;

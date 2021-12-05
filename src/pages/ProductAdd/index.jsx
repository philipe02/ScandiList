import Button from "../../components/Button";
import Title from "../../components/Title";
import { Link } from "react-router-dom";
import { useState } from "react";
import FormProduct from "../../containers/FormProduct";

const ProductAdd = () => {
    const [product, setProduct] = useState({});

    function handleSave() {
        console.log(product);
    }

    function handleChange(e) {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

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
                    <Link to="/">
                        <Button
                            id="delete-product-btn"
                            className="btn-outline-danger"
                            type="button"
                            title="Cancel"
                        />
                    </Link>
                </div>
            </section>
            <hr className="opacity-100 border-top border-2 border-dark" />
            <FormProduct handleChange={handleChange} product={product} />
        </>
    );
};

export default ProductAdd;

import Button from "../../components/Button";
import Title from "../../components/Title";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FormProduct from "../../containers/FormProduct";
import { createProduct } from "service/Products";
import formatProductSubmit from "./submit";
import validateProduct from "./validate";
import { useDispatch } from "react-redux";
import { closeModal, openModal, resetErrors } from "store/ducks/products";

const ProductAdd = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [product, setProduct] = useState({});

    function handleSave(e) {
        e.preventDefault();
        dispatch(resetErrors());
        if (validateProduct(product, dispatch))
            createProduct(formatProductSubmit(product))
                .then(() => {
                    navigate("/");
                })
                .catch(({ response }) => {
                    if (response?.data?.message)
                        dispatch(
                            openModal({
                                type: "error",
                                message: response?.data?.message,
                                actions: [
                                    {
                                        id: "confirm",
                                        title: "OK",
                                        onClick: () => dispatch(closeModal()),
                                        className: "btn-outline-primary",
                                    },
                                ],
                            })
                        );
                });
        else {
            dispatch(
                openModal({
                    type: "error",
                    message: "Please, submit required data",
                    actions: [
                        {
                            id: "confirm",
                            title: "OK",
                            onClick: () => dispatch(closeModal()),
                            className: "btn-outline-primary",
                        },
                    ],
                })
            );
        }
    }

    function handleChange(e) {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        dispatch(resetErrors());
    }, [dispatch]);

    return (
        <>
            <section className="d-flex justify-content-between">
                <Title text="Product Add" />
                <div className="button-container">
                    <Button
                        id="add-product-btn"
                        className="btn-outline-primary"
                        type="submit"
                        title="Save"
                        form="product_form"
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
            <FormProduct
                handleChange={handleChange}
                product={product}
                handleSave={handleSave}
            />
        </>
    );
};

export default ProductAdd;

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetSelected, setLoading } from "store/ducks/products";
import Button from "../../components/Button";
import Title from "../../components/Title";
import ProductsContainer from "../../containers/ProductsContainer";
import { deleteProducts, getAllProducts } from "../../service/Products";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        refreshProductList();
        dispatch(resetSelected());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    function refreshProductList() {
        dispatch(setLoading(true));
        getAllProducts()
            .then((data) => {
                setProducts(data);
            })
            .finally(() => dispatch(setLoading(false)));
    }

    function handleDelete() {
        let selected = [];
        document.querySelectorAll(".delete-checkbox").forEach((element) => {
            if (element.checked) selected.push(element.value);
        });

        if (selected.length)
            deleteProducts(selected).then(() => {
                refreshProductList();
            });
    }

    return (
        <>
            <section className="d-flex justify-content-between">
                <Title text="Product List" />
                <div className="button-container">
                    <Link to="/add-product">
                        <Button
                            id="add-product-btn"
                            className="btn-outline-primary"
                            type="button"
                            title="ADD"
                        />
                    </Link>
                    <Button
                        id="delete-product-btn"
                        className="btn-outline-danger"
                        type="button"
                        title="MASS DELETE"
                        onClick={handleDelete}
                    />
                </div>
            </section>
            <hr className="opacity-100 border-top border-2 border-dark" />
            <ProductsContainer products={products} />
        </>
    );
};
export default ProductList;

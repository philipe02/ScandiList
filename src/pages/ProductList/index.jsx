import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetSelected } from "store/ducks/products";
import Button from "../../components/Button";
import Title from "../../components/Title";
import ProductsContainer from "../../containers/ProductsContainer";
import { deleteProducts, getAllProducts } from "../../service/Products";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const selected = useSelector((state) => state.products.selectedProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        refreshProductList();
        dispatch(resetSelected());
    }, [dispatch]);

    useEffect(() => console.log(products), [products]);

    function refreshProductList() {
        getAllProducts().then((data) => {
            console.log(data);
            setProducts(data);
        });
    }

    function handleDelete() {
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
                            title="Add"
                        />
                    </Link>
                    <Button
                        id="delete-product-btn"
                        className="btn-outline-danger"
                        type="button"
                        title="Mass delete"
                        onClick={handleDelete}
                    />
                </div>
            </section>
            <hr className="opacity-100 border-top border-2 border-dark" />
            <ProductsContainer products={products} setProducts={setProducts} />
        </>
    );
};
export default ProductList;

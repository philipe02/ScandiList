import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Title from "../../components/Title";
import ProductsContainer from "../../containers/ProductsContainer";

const ProductList = () => {
    const productList = [
        {
            sku: 1,
            name: "Roules",
            price: 20.0,
            size: 10.5,
        },
        {
            sku: 2,
            name: "Roules",
            price: 20.0,
            size: 10.5,
        },
        {
            sku: 3,
            name: "Roules",
            price: 20.0,
            size: 10.5,
        },
        {
            sku: 4,
            name: "Roules",
            price: 20.0,
            size: 10.5,
        },
        {
            sku: 5,
            name: "Roules",
            price: 20.0,
            size: 10.5,
        },
        {
            sku: 6,
            name: "Roules",
            price: 20.0,
            size: 10.5,
        },
    ];

    const [products, setProducts] = useState([]);

    useEffect(() => setProducts(productList), []);

    useEffect(() => console.log(products), [products]);

    function handleDelete() {
        let deleteList = [];
        products.forEach((item) => {
            if (item.selected) deleteList.push(item.sku);
        });
        console.log(deleteList);
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

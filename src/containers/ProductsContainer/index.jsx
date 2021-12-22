import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const ProductsContainer = ({ products }) => {
    const { loading } = useSelector((state) => state.products);
    return (
        <section className="container">
            <div className="product-list">
                {loading ? (
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : products.length !== 0 ? (
                    products.map((product) => (
                        <ProductCard key={product.sku} product={product} />
                    ))
                ) : (
                    <p>No products to list</p>
                )}
            </div>
        </section>
    );
};

export default ProductsContainer;

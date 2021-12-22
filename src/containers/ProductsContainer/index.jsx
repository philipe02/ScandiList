import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectProduct } from "store/ducks/products";
import ProductCard from "../ProductCard";

const ProductsContainer = ({ products, setProducts }) => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.products);
    function handleSelection(e, product) {
        dispatch(selectProduct({ sku: product.sku, check: e.target.checked }));
    }
    return (
        <section className="container">
            <div className="product-list">
                {loading ? (
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : products.length !== 0 ? (
                    products.map((product) => (
                        <ProductCard
                            key={product.sku}
                            product={product}
                            handleSelection={handleSelection}
                        />
                    ))
                ) : (
                    <p>No products to list</p>
                )}
            </div>
        </section>
    );
};

export default ProductsContainer;

import { useDispatch } from "react-redux";
import { selectProduct } from "store/ducks/products";
import ProductCard from "../ProductCard";
import "./styles.css";

const ProductsContainer = ({ products, setProducts }) => {
    const dispatch = useDispatch();
    function handleSelection(e, product) {
        console.log(e.target.checked, product.sku);
        dispatch(selectProduct({ sku: product.sku, check: e.target.checked }));
    }
    return (
        <section className="container">
            <div className="product-list">
                {products.length !== 0 ? (
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

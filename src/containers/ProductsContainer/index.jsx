import ProductCard from "../ProductCard";
import "./styles.css";

const ProductsContainer = ({ products, setProducts }) => {
    function handleSelection(e, product) {
        const productIndex =
            products.find((item) => item.sku === product.sku).sku - 1;
        let newProductList = products;
        newProductList[productIndex] = {
            ...newProductList[productIndex],
            [e.target.name]: newProductList[productIndex].selected
                ? false
                : true,
        };
        console.log(newProductList);
        setProducts(newProductList);
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

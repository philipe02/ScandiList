import "./styles.css";

const ProductCard = ({ product }) => {
    const productType = {
        1: <p className="card-text">Size: {product.size} MB</p>,
        2: (
            <p className="card-text">
                Dimension:{" "}
                {`${product.height}x${product.width}x${product["length"]}`}
            </p>
        ),
        3: <p className="card-text">Weight: {product.weight} KG</p>,
    };
    return (
        <div className="d-flex justify-content-around border border-dark border-2 card">
            <input
                className="form-check-input ms-3 mt-3 card-checkbox delete-checkbox"
                type="checkbox"
                name="selected"
                value={product.sku}
            />
            <div className="d-flex flex-column align-items-center justify-content-center text-break text-center card-body">
                <p className="card-text">{product.sku}</p>
                <p className="card-text">{product.name}</p>
                <p className="card-text">{product.price.toFixed(2)} $</p>
                {productType[product.productType]}
            </div>
        </div>
    );
};

export default ProductCard;

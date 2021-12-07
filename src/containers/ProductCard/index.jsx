import "./styles.css";

const ProductCard = ({ product, handleSelection }) => {
    const productTypeDesc = {
        dvd: <p className="card-text">Size: {product.size} MB</p>,
        furniture: (
            <p className="card-text">
                Dimension:{" "}
                {`${product.height}x${product.width}x${product["length"]}`}
            </p>
        ),
        book: <p className="card-text">Weight: {product.weight} KG</p>,
    };
    return (
        <div className="d-flex justify-content-around border border-dark border-2 card">
            <input
                className="form-check-input ms-3 mt-3 card-checkbox"
                type="checkbox"
                name="selected"
                onClick={(e) => handleSelection(e, product)}
                value={product.selected}
            />
            <div className="d-flex flex-column align-items-center justify-content-center card-body">
                <p className="card-text">{product.sku}</p>
                <p className="card-text">{product.name}</p>
                <p className="card-text">{product.price.toFixed(2)} $</p>
                {productTypeDesc[product.type]}
            </div>
        </div>
    );
};

export default ProductCard;

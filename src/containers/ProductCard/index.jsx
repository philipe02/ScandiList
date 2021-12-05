const ProductCard = ({ product, handleSelection }) => {
    return (
        <div className="col d-flex justify-content-center border border-dark border-2">
            <input
                type="checkbox"
                name="selected"
                onClick={(e) => handleSelection(e, product)}
                value={product.selected}
            />
            {product.sku}
        </div>
    );
};

export default ProductCard;

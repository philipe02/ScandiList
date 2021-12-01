import Button from "../../components/Button";
import Title from "../../components/Title";

const ProductList = () => {
    return (
        <>
            <section className="d-flex justify-content-between">
                <Title text="Product List" />
                <div className="button-container">
                    <Button
                        id="add-product-btn"
                        className="btn-outline-primary"
                        type="button"
                        title="Add"
                    />
                    <Button
                        id="delete-product-btn"
                        className="btn-outline-danger"
                        type="button"
                        title="Mass delete"
                    />
                </div>
            </section>
            <hr className="opacity-100 border-top border-2 border-dark" />
            <section className="container">
                <div className="row">
                    <div class="col d-flex m-2 justify-content-center border border-dark border-2">
                        1 of 4
                    </div>
                    <div class="col d-flex m-2 justify-content-center border border-dark border-2">
                        2 of 4
                    </div>
                    <div class="col d-flex m-2 justify-content-center border border-dark border-2">
                        3 of 4
                    </div>
                    <div class="col d-flex m-2 justify-content-center border border-dark border-2">
                        4 of 4
                    </div>
                </div>
            </section>
        </>
    );
};
export default ProductList;

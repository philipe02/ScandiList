import { Provider } from "react-redux";
import store from "store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import ProductAdd from "pages/ProductAdd";
import ProductList from "pages/ProductList";
import Modal from "components/Modal";

const App = () => {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <div className="container mt-4">
                        <Routes>
                            <Route path="/" element={<ProductList />} />
                            <Route
                                path="add-product"
                                element={<ProductAdd />}
                            />
                        </Routes>
                        <Modal />
                    </div>
                </BrowserRouter>
            </Provider>
        </>
    );
};

export default App;

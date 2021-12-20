import { useSelector } from "react-redux";

const Loading = () => {
    const { loading } = useSelector((state) => state.products);
    return loading ? (
        <div className="loading-container">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    ) : null;
};
export default Loading;

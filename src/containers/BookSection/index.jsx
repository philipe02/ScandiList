const BookSection = ({ handleChange }) => {
    return (
        <section>
            <div className="d-flex justify-content-between mb-3">
                <label htmlFor="weight" className="form-label">
                    Weight (KG)
                </label>
                <input
                    id="weight"
                    name="weight"
                    className="form-control w-75"
                    type="text"
                    onChange={handleChange}
                    placeholder="Insert the weight in kg"
                />
            </div>
            <div className="d-flex justify-content-between mb-3">
                <label className="form-label"></label>
                <p className="form-label fs-6 w-75">
                    Please provide weight in kilograms
                </p>
            </div>
        </section>
    );
};

export default BookSection;

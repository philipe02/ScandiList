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
            <p>Please provide weight in kilograms</p>
        </section>
    );
};

export default BookSection;

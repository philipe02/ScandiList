import Input from "components/Input";

const BookSection = ({ handleChange, errors }) => {
    return (
        <section>
            <div className="d-flex justify-content-between mb-3">
                <label htmlFor="weight" className="form-label">
                    Weight (KG)
                </label>
                <Input
                    id="weight"
                    name="weight"
                    onChange={handleChange}
                    type="number"
                    placeholder="Insert the weight in kg"
                    errors={errors}
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

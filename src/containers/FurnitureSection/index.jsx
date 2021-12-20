import Input from "components/Input";

const FurnitureSection = ({ handleChange, errors }) => {
    return (
        <section id="Furniture">
            <div className="d-flex justify-content-between mb-3">
                <label htmlFor="height" className="form-label">
                    Height (CM)
                </label>
                <Input
                    id="height"
                    name="height"
                    onChange={handleChange}
                    type="number"
                    placeholder="Insert the height in cm"
                    errors={errors}
                />
            </div>
            <div className="d-flex justify-content-between mb-3">
                <label htmlFor="width" className="form-label">
                    Width (CM)
                </label>
                <Input
                    id="width"
                    name="width"
                    onChange={handleChange}
                    type="number"
                    placeholder="Insert the width in cm"
                    errors={errors}
                />
            </div>
            <div className="d-flex justify-content-between mb-3">
                <label htmlFor="length" className="form-label">
                    Length (CM)
                </label>
                <Input
                    id="length"
                    name="length"
                    onChange={handleChange}
                    type="number"
                    placeholder="Insert the length in cm"
                    errors={errors}
                />
            </div>
            <div className="d-flex justify-content-between mb-3">
                <label className="form-label"></label>
                <p className="form-label fs-6 w-75">
                    Please provide dimensions in HxWxL format in centimeters
                </p>
            </div>
        </section>
    );
};

export default FurnitureSection;

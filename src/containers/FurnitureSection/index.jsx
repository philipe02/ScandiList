const FurnitureSection = ({ handleChange }) => {
    return (
        <section id="Furniture">
            <div className="d-flex justify-content-between mb-3">
                <label htmlFor="height" className="form-label">
                    Height (CM)
                </label>
                <input
                    id="height"
                    name="height"
                    className="form-control w-75"
                    type="text"
                    onChange={handleChange}
                    placeholder="Insert the height in cm"
                />
            </div>
            <div className="d-flex justify-content-between mb-3">
                <label htmlFor="width" className="form-label">
                    Width (CM)
                </label>
                <input
                    id="width"
                    name="width"
                    className="form-control w-75"
                    type="text"
                    onChange={handleChange}
                    placeholder="Insert the width in cm"
                />
            </div>
            <div className="d-flex justify-content-between mb-3">
                <label htmlFor="length" className="form-label">
                    Length (CM)
                </label>
                <input
                    id="length"
                    name="length"
                    className="form-control w-75"
                    type="text"
                    onChange={handleChange}
                    placeholder="Insert the length in cm"
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

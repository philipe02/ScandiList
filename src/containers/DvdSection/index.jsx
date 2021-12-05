const DvdSection = ({ handleChange }) => {
    return (
        <section id="DVD">
            <div className="d-flex justify-content-between mb-3">
                <label htmlFor="size" className="form-label">
                    Size (MB)
                </label>
                <input
                    id="size"
                    name="size"
                    className="form-control w-75"
                    type="text"
                    onChange={handleChange}
                    placeholder="Insert the size in cm"
                />
            </div>
            <p>Please provide size in megabytes</p>
        </section>
    );
};

export default DvdSection;

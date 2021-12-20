import Input from "components/Input";

const DvdSection = ({ handleChange, errors }) => {
    return (
        <section id="DVD">
            <div className="d-flex justify-content-between mb-3">
                <label htmlFor="size" className="form-label">
                    Size (MB)
                </label>
                <Input
                    id="size"
                    name="size"
                    onChange={handleChange}
                    type="number"
                    placeholder="Insert the size in mb"
                    errors={errors}
                />
            </div>
            <div className="d-flex justify-content-between mb-3">
                <label className="form-label"></label>
                <p className="form-label fs-6 w-75">
                    Please provide size in megabytes
                </p>
            </div>
        </section>
    );
};

export default DvdSection;

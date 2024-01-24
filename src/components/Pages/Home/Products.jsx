import Button from "../../Button";
import Title from "../../Title";


const Products = () => {
    return (
        <div>

            <Title title="Browse Our Products" miniTitle="Popular Products" paragraph="the majority have suffered alteration in some form, by injected humour, or words which don't look even slightly believable. "></Title>
            <div className="flex items-center justify-center my-8">
                <Button name="More Products" border="border"></Button>
            </div>
        </div>
    );
};

export default Products;
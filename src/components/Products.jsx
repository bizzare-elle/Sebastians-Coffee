const Products = (props) => {
    return (
        <div className="size-[320px] bg-secondary/80 rounded-lg">
            <span className="font-bold text-[15px] border px-10 py-3 border-primary rounded-lg">
                {props.name}
            </span>
        </div>
    );
};

export default Products;

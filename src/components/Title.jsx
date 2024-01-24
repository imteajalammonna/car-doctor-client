

const Title = ({ title, miniTitle, paragraph }) => {
    return (
        <div className="space-y-5">
            <h4 className="text-[#FF3811] text-xl font-bold text-center">{miniTitle}</h4>
            <h2 className="text-5xl font-bold text-center">{title}</h2>
            <p className="capitalize text-center">{paragraph}</p>
        </div>
    );
};

export default Title;
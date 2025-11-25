
const Author = ({name, img}) => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 m-6">
            <img src={img} alt="" className="author rounded-[50%] h-[110px] w-[110px]" />
            <p className="author-name text-black">{name}</p>
        </div>
    );
};

export default Author;
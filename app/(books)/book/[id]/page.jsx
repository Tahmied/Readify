
const page = async ({params}) => {
    const {id} = await params
    console.log(params)
    return (
        <div>
            <h1 className="h-screen mt-32 text-black text-8xl">Dynamic Id {id}</h1>
        </div>
    );
};

export default page;
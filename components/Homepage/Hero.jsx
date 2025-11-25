
const Hero = () => {
    return (
        <section className='hero bg-white'>
            <div className="hero-container flex items-center justify-between max-w-[1200px] mx-auto py-[10vh] mt-[3rem] max-[1025px]:mt-[5rem] max-[769px]:flex-col">
                <div className="hero-left  flex items-start justify-center gap-4 items-center flex-col max-w-[600px] ml-8">
                    <p className="hero-title w-[80%] text-4xl text-black max-[1025px]:text-3xl">Readify - Here Every Book Tells a Story</p>
                    <p className="hero-desc w-[70%] text-xl text-black max-[1025px]:text-[18px]">At Readify, we believe that books are more than just pages; they are a doorway to new worlds, ideas and adventures. </p>
                    <button className="cta-btn border-[1px] border-[#eb7c1f] text-[#eb7c1f] bg-[#f8ecdc] font-semibold px-[35px] py-[15px] rounded-[15px] cursor-pointer transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
                        Shop Now
                    </button>
                </div>
                <img src="/hero/hero-img.png" alt="" className="hero-img max-w-[500px] mr-8 w-1/2 max-[769px]:w-[80%]" />
            </div>
        </section>
    );
};

export default Hero;
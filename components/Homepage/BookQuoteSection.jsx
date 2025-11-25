
export default function BookQuoteSection() {
  return (
    <section className="relative w-[80%] mx-auto h-64 md:h-80 lg:h-96 overflow-hidden rounded-[30px] m-4">

      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >

        <div className="absolute inset-0 bg-[#00000080] bg-opacity-60"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center h-full px-6 md:px-12 lg:px-24">
        <div className="text-center max-w-4xl">
          <blockquote className="text-white">
            <p className="text-xl capitalize md:text-2xl lg:text-3xl font-serif leading-relaxed mb-4">
                I do believe something very magical can happen when you read a book
            </p>
            <footer className="text-base md:text-lg lg:text-xl text-gray-200">
              — J. K. Rowling
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
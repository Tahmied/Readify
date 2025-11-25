'use client';

import { useRouter } from 'next/navigation';

const Ctabtn = ({ text, link }) => {
  const router = useRouter();
  
  const handleClick = () => {
    router.push(link);
  };
  
  return (
    <button 
      onClick={handleClick} 
      className="mx-auto my-4 cta-btn-comp flex items-center gap-2 px-7 py-3 bg-white text-[#eb7c1f] border-2 border-[#eb7c1f] rounded-full text-[0.95rem] font-semibold cursor-pointer transition-all duration-300 ease-in-out whitespace-nowrap hover:bg-[#eb7c1f] hover:text-white hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(59,130,246,0.3)] group"
    >
      {text}
      <svg 
        className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" 
        viewBox="0 0 16 16" 
        fill="none"
      >
        <path
          d="M8 3 L13 8 L8 13 M13 8 L3 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default Ctabtn;
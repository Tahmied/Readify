'use client'
import { Check, Eye, EyeOff, Image, Lock, Mail, User } from 'lucide-react';
import { useState } from 'react';

const Page = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        photoURL: '',
        terms: false
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Registration logic will be added later
        console.log('Registration submitted', formData);
    };

    const handleGoogleSignup = () => {
        // Google signup logic will be added later
        console.log('Google signup clicked');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-[6rem] p-5">
            <div className="flex w-full max-w-[950px] min-h-[580px] bg-white rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
                {/* Left Side */}
                <div className="flex-1 bg-[#eb7c1f] text-white p-12 flex flex-col justify-center relative overflow-hidden">
                    <h1 className="text-[32px] font-bold relative z-10 max-[375px]:text-[24px] max-[375px]:leading-[28px]">
                        Join Our Reading Community
                    </h1>
                    <p className="text-base opacity-90 mb-2 leading-relaxed relative z-10">
                        Create your account to discover new books, save favorites, and enjoy a personalized reading experience.
                    </p>
                    <ul className="mt-2 space-y-4 relative z-10">
                        <li className="flex items-center">
                            <Check className="mr-3 w-5 h-5" />
                            <span>Personalized book recommendations</span>
                        </li>
                        <li className="flex items-center">
                            <Check className="mr-3 w-5 h-5" />
                            <span>Discover stories that inspire and delight</span>
                        </li>
                        <li className="flex items-center">
                            <Check className="mr-3 w-5 h-5" />
                            <span>Curated collections from top authors</span>
                        </li>
                    </ul>
                </div>

                {/* Right Side */}
                <div className="flex-1 p-12 flex flex-col justify-center">
                    <div className="mb-9">
                        <h2 className="text-[28px] font-bold text-gray-800 mb-2 max-[375px]:text-[24px] max-[375px]:leading-[28px]">Create Account</h2>
                        <p className="text-gray-500 text-[15px]">
                            Fill in your details to get started
                        </p>
                    </div>

                    <div className=" overflow-y-auto pr-2">
                        <div onSubmit={handleSubmit}>
                            {/* Full Name Field */}
                            <div className="mb-5">
                                <label htmlFor="fullName" className="block mb-2 font-medium text-gray-600 text-sm">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        className="w-full py-3.5 pl-12 pr-4 border-[1.5px] border-gray-200 rounded-lg text-[15px] bg-gray-50 transition-all focus:outline-none focus:border-[#eb7c1f] focus:shadow-[0_0_0_3px_rgba(235,124,31,0.15)] focus:bg-white"
                                        placeholder="Name here"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 font-medium text-gray-600 text-sm">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full py-3.5 pl-12 pr-4 border-[1.5px] border-gray-200 rounded-lg text-[15px] bg-gray-50 transition-all focus:outline-none focus:border-[#eb7c1f] focus:shadow-[0_0_0_3px_rgba(235,124,31,0.15)] focus:bg-white"
                                        placeholder="name@email.com"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Photo URL Field */}
                            <div className="mb-5">
                                <label htmlFor="photoURL" className="block mb-2 font-medium text-gray-600 text-sm">
                                    Photo URL
                                </label>
                                <div className="relative">
                                    <Image className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        id="photoURL"
                                        name="photoURL"
                                        className="w-full py-3.5 pl-12 pr-4 border-[1.5px] border-gray-200 rounded-lg text-[15px] bg-gray-50 transition-all focus:outline-none focus:border-[#eb7c1f] focus:shadow-[0_0_0_3px_rgba(235,124,31,0.15)] focus:bg-white"
                                        placeholder="yourphotourl.com"
                                        required
                                        value={formData.photoURL}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="mb-5">
                                <label htmlFor="password" className="block mb-2 font-medium text-gray-600 text-sm">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        className="w-full py-3.5 pl-12 pr-12 border-[1.5px] border-gray-200 rounded-lg text-[15px] bg-gray-50 transition-all focus:outline-none focus:border-[#eb7c1f] focus:shadow-[0_0_0_3px_rgba(235,124,31,0.15)] focus:bg-white"
                                        placeholder="••••••••"
                                        required
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Terms Checkbox */}
                            <div className="mb-6 flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    name="terms"
                                    checked={formData.terms}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 w-4 h-4 accent-[#eb7c1f] cursor-pointer"
                                />
                                <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                                    I agree to the{' '}
                                    <a href="#" className="text-[#eb7c1f] hover:underline">
                                        Terms of Service
                                    </a>{' '}
                                    and{' '}
                                    <a href="#" className="text-[#eb7c1f] hover:underline">
                                        Privacy Policy
                                    </a>
                                </label>
                            </div>

                            {/* Register Button */}
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="w-full py-4 bg-[#eb7c1f] text-white rounded-lg text-base font-semibold cursor-pointer transition-all shadow-[0_4px_12px_rgba(235,124,31,0.3)] hover:bg-[#d66f1a] hover:-translate-y-0.5 active:translate-y-0"
                            >
                                Create Account
                            </button>

                            {/* Divider */}
                            <div className="text-center my-8 relative text-gray-400 text-sm">
                                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-200"></div>
                                <span className="bg-white px-4 relative z-10">Or sign up with</span>
                            </div>

                            {/* Google Signup */}
                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    onClick={handleGoogleSignup}
                                    className="flex-1 py-3 border-[1.5px] border-gray-200 rounded-lg bg-white flex items-center justify-center gap-2.5 cursor-pointer transition-all font-medium text-gray-600 hover:border-[#eb7c1f] hover:bg-gray-50"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path
                                            fill="#4285F4"
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        />
                                        <path
                                            fill="#34A853"
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        />
                                        <path
                                            fill="#FBBC05"
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        />
                                        <path
                                            fill="#EA4335"
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        />
                                    </svg>
                                    Google
                                </button>
                            </div>

                            {/* Login Link */}
                            <div className="text-center mt-8 text-sm text-gray-500">
                                Already have an account?{' '}
                                <a href="#" className="text-[#eb7c1f] font-medium hover:underline">
                                    Sign in here
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Responsive Styles */}
            <style>{`
                @media (max-width: 768px) {
                    .flex.w-full.max-w-\\[950px\\] {
                        flex-direction: column;
                        max-width: 450px;
                    }
                }
                
                /* Custom scrollbar for form */
                .overflow-y-auto::-webkit-scrollbar {
                    width: 6px;
                }
                
                .overflow-y-auto::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                
                .overflow-y-auto::-webkit-scrollbar-thumb {
                    background: #eb7c1f;
                    border-radius: 10px;
                }
                
                .overflow-y-auto::-webkit-scrollbar-thumb:hover {
                    background: #d66f1a;
                }
            `}</style>
        </div>
    );
};

export default Page;
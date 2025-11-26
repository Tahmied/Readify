'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { data: session } = useSession()
  // console.log(session)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();
  const isLoggedIn = !!session
  const loggedinUser = session?.user

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.classList.add('no-scroll');
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.classList.remove('no-scroll');
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownActive && !event.target.closest('.profile-nav') && !event.target.closest('.dropdown-menu')) {
        setIsDropdownActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownActive]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  let navItems;

  if (isLoggedIn) {
    navItems = [
      { name: 'Home', path: '/' },
      { name: 'All Books', path: '/books' },
      { name: 'My Books', path: '/my-books' },
    ];
  } else {
    navItems = [
      { name: 'Home', path: '/' },
      { name: 'All Books', path: '/books' }
    ];
  }

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  const handleLogout = () => {
    signOut()
    setIsDropdownActive(false);
  };

  const menuClicked = () => {
    setIsDropdownActive(false);
  };

  return (
    <>
      <style jsx global>{`
        @keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes dropdownSlideIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.mobile-nav-link-animate {
    animation: slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.hamburger-line {
    fill: none;
    stroke: #eb7c1f;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
        stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.hamburger-line-top-bottom {
    stroke-dasharray: 12 63;
}

.hamburger-checked .hamburger-line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
}

body.dark-mode {
    background: #060606;
}

body.dark-mode .learnova-header {
    background: rgb(0 0 0) !important;
}

body.dark-mode .nav-link-text {
    color: white !important;
}

/* Dropdown Menu Styles */
.profile-wrapper {
    position: relative;
}

.dropdown-menu {
    display: block;
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    min-width: 280px;
    border: 1px solid #e1e8ed;
    overflow: hidden;
    position: absolute;
    top: 60px;
    right: 0;
    z-index: 1001;
    animation: dropdownSlideIn 0.3s ease-out;
}

.dropdown-header {
    display: flex;
    align-items: center;
    padding: 20px;
    gap: 12px;
    background: rgba(59, 130, 246, 0.05);
}

.dropdown-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #eb7c1f;
}

.user-info {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.user-name {
    font-weight: 600;
    color: #1a1a1a;
    font-size: 16px;
    margin-bottom: 4px;
}

.dropdown-divider {
    height: 1px;
    background: #f0f0f0;
    margin: 0;
}

.dropdown-item {
    display: flex;
    align-items: center;
    padding: 16px 20px;
    color: #333;
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;
    border: none;
    background: none;
    width: 100%;
    font-size: 14px;
    text-align: left;
}

.dropdown-item:hover {
    background: rgba(59, 130, 246, 0.08);
    color: #eb7c1f;
}

.dropdown-item:active {
    background: #eb7c1f;
    color: white;
}

.logout-btn {
    color: #e74c3c;
}

.logout-btn:hover {
    background: #fff5f5 !important;
    color: #c0392b !important;
}

/* Mobile Profile Section */
.mobile-profile-section {
    margin-top: 2rem;
    width: 100%;
    position: relative;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu.active .mobile-profile-section {
    opacity: 1;
    transform: translateY(0);
}

.mobile-profile-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 1rem 2rem;
    background: rgba(59, 130, 246, 0.08);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.mobile-profile-nav:hover {
    background: rgba(59, 130, 246, 0.15);
}

.profile-name {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1a1a1a;
}

.mobile-profile-section .dropdown-menu {
    position: relative;
    top: 12px;
    right: auto;
    margin: 12px auto 0;
    max-width: 100%;
}

@media (max-width: 768px) {
    .dropdown-menu {
        min-width: 260px;
    }
}

@media (max-width: 480px) {
    .mobile-profile-section .dropdown-menu {
        min-width: 100%;
        width: calc(100% - 2rem);
    }
}

@media (max-width: 370px) {
    .dropdown-menu {
        right: -40px;
    }
}
      `}</style>

      <header className={`learnova-header fixed top-0 left-0 right-0 z-[1000] backdrop-blur-[10px] transition-all duration-300 ${isDarkMode ? 'bg-black/95' : 'bg-white/95'} ${isScrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.1)]' : 'shadow-[0_2px_10px_rgba(0,0,0,0.05)]'}`}>
        <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between md:px-6 max-[480px]:px-4 max-[480px]:py-[0.875rem]">
          {/* Logo */}
          <div className="flex items-center cursor-pointer transition-transform duration-300 hover:scale-105">
            <Link href={'/'}>
              <img
                src={isDarkMode ? "/header/logo-dark.png" : "/header/logo.png"}
                alt="mentor"
                className="h-[60px] w-auto object-contain md:h-[50px] max-[480px]:h-[45px]"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center justify-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={handleNavClick}
                className={`nav-link-text relative no-underline text-[0.95rem] font-medium whitespace-nowrap transition-colors duration-300 
                  after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#eb7c1f] after:transition-all after:duration-300
                  hover:text-[#eb7c1f] hover:after:w-full
                  ${pathname === item.path ? 'text-[#eb7c1f] after:w-full' : 'text-[#666] after:w-0'}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 md:gap-3 max-[480px]:gap-3">

            <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

            {isLoggedIn ? (
              <div className="profile-wrapper">
                <div
                  onClick={toggleDropdown}
                  className="profile-nav cursor-pointer transition-transform duration-300 hover:scale-110 hidden md:flex desktop-profile"
                >
                  <img
                    src={loggedinUser.image}
                    alt={loggedinUser.name}
                    className="w-[42px] h-[42px] rounded-full object-cover border-2 border-[#eb7c1f] transition-all duration-300 hover:border-[#eb7c1f]"
                  />
                </div>
                <div
                  onClick={toggleDropdown}
                  className="profile-nav cursor-pointer transition-transform duration-300 hover:scale-110 md:hidden"
                >
                  <img
                    src={loggedinUser.image}
                    alt={loggedinUser.name}
                    className="w-[38px] h-[38px] max-[480px]:w-[35px] max-[480px]:h-[35px] rounded-full object-cover border-2 border-[#eb7c1f] transition-all duration-300"
                  />
                </div>
                {isDropdownActive && (
                  <div className="dropdown-menu">
                    <div className="dropdown-header">
                      <img
                        src={loggedinUser.image || '/assets/usericon.svg'}
                        alt="User"
                        className="dropdown-avatar"
                      />
                      <div className="user-info">
                        <span className="user-name">{loggedinUser.name}</span>
                      </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="dropdown-divider"></div>
                    <button onClick={handleLogout} className="dropdown-item logout-btn">
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href={'/login'}>
                <button className="hidden md:flex items-center gap-2 px-7 py-3 bg-white text-[#eb7c1f] border-2 border-[#eb7c1f] rounded-[50px] text-[0.95rem] font-semibold cursor-pointer whitespace-nowrap transition-all duration-300 hover:bg-[#eb7c1f] hover:text-white hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(59,130,246,0.3)] group">
                  Start Free
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3 L13 8 L8 13 M13 8 L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </Link>
            )}

            <label className="md:hidden cursor-pointer">
              <input
                type="checkbox"
                checked={isMenuOpen}
                onChange={(e) => setIsMenuOpen(e.target.checked)}
                className="hidden"
              />
              <svg viewBox="0 0 32 32" className={`h-12 transition-transform duration-[600ms] cubic-bezier-[0.4,0,0.2,1] ${isMenuOpen ? 'rotate-[-45deg] hamburger-checked' : ''}`}>
                <path className="hamburger-line hamburger-line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" />
                <path className="hamburger-line" d="M7 16 27 16" />
              </svg>
            </label>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 right-0 bottom-0 z-[998] transition-all duration-[400ms] cubic-bezier-[0.4,0,0.2,1] ${isMenuOpen ? 'bg-black/50 pointer-events-auto' : 'bg-black/0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div className={`mobile-menu fixed top-0 w-[85%] max-w-[400px] h-screen backdrop-blur-[20px] z-[999] overflow-y-auto shadow-[-5px_0_30px_rgba(0,0,0,0.15)] transition-all duration-500 cubic-bezier-[0.4,0,0.2,1] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-gradient-to-b before:from-black/[0.02] before:to-black/[0.05] before:pointer-events-none max-[480px]:w-full max-[480px]:max-w-full ${isMenuOpen ? 'right-0' : 'right-[-100%]'} ${isDarkMode ? 'bg-black/98' : 'bg-white/98'}`}>
        <nav className="relative flex flex-col items-center justify-center min-h-screen px-8 py-12 gap-2">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.path}
              className={`mobile-nav-link-animate no-underline text-2xl max-[480px]:text-[1.3rem] font-semibold py-4 px-8 w-full text-center rounded-xl transition-all duration-300 cubic-bezier-[0.4,0,0.2,1] relative
                after:content-[''] after:absolute after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#eb7c1f] after:transition-all after:duration-300
                hover:text-[#eb7c1f] hover:-translate-x-1 hover:scale-[1.02] hover:after:w-[60%]
                ${pathname === item.path ? 'text-[#eb7c1f] bg-[#eb7b1f1d] after:w-[60%]' : isDarkMode ? 'text-white' : 'text-[#1a1a1a]'}`}
              style={{
                animationDelay: isMenuOpen ? `${index * 50 + 100}ms` : '0ms',
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateX(0)' : 'translateX(50px)'
              }}
              onClick={handleNavClick}
            >
              {item.name}
            </Link>
          ))}

          {isLoggedIn ? (
            <div
              className="mobile-profile-section"
              style={{
                transitionDelay: isMenuOpen ? `${navItems.length * 50 + 100}ms` : '0ms'
              }}
            >
              <div className="mobile-profile-nav" onClick={toggleDropdown}>
                <img
                  src={loggedinUser.image}
                  alt={loggedinUser.name}
                  className="w-[42px] h-[42px] rounded-full object-cover border-2 border-[#eb7c1f]"
                />
                <span className="profile-name">{loggedinUser.name}</span>
              </div>

              {isDropdownActive && (
                <div className="dropdown-menu">
                  <div className="dropdown-header">
                    <img
                      src={loggedinUser.image || '/assets/usericon.svg'}
                      alt="User"
                      className="dropdown-avatar"
                    />
                    <div className="user-info">
                      <span className="user-name">{loggedinUser.name}</span>
                    </div>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-divider"></div>
                  <button onClick={handleLogout} className="dropdown-item logout-btn">
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href={'/login'}>
              <button
                className="flex items-center gap-2 px-7 py-3 bg-white text-[#eb7c1f] border-2 border-[#eb7c1f] rounded-[50px] text-[0.95rem] font-semibold cursor-pointer whitespace-nowrap transition-all duration-300 hover:bg-[#eb7c1f] hover:text-white hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(59,130,246,0.3)] group mt-8"
                style={{
                  transitionDelay: isMenuOpen ? `${navItems.length * 50 + 100}ms` : '0ms',
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(30px)'
                }}
                onClick={handleNavClick}
              >
                Start Free
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3 L13 8 L8 13 M13 8 L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </Link>
          )}
        </nav>
      </div>
    </>
  );
};

export default Header;
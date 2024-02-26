"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const prevScrollPos = useRef(0);
  const [visible, setVisible] = useState(true);
  const [showShadow, setShowShadow] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > 50) {
      setShowShadow(true);
    }
    else {
      setShowShadow(false);
    }
    const scrollingDown = currentScrollPos > prevScrollPos.current;
    setVisible(!scrollingDown);
    prevScrollPos.current = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`transition duration-300 ease-in-out ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } fixed top-0 left-0 right-0 z-50 bg-white ${showShadow ? 'shadow-md' : ''}`}
    >
      <ul className="flex p-4 space-x-10">
        <li>
          <Link
            href="#main"
          >
            Home
            {/* {t('home')} */}
          </Link>
        </li>
        <li>
          <Link
            href="#services"
          >
            Services
            {/* {t('services')} */}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
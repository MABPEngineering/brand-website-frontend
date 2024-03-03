'use client';

import { useEffect, useRef, useState } from 'react';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

const Navbar = ({
  sections,
}: {
  sections: { title: string; id: string; icon: StaticImageData }[];
}) => {
  const prevScrollPos = useRef(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
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
      className={` transition duration-300 ease-in-out ${
        visible
          ? 'md:translate-y-0 md:opacity-100'
          : 'md:-translate-y-full md:opacity-0'
      } fixed bottom-0 md:top-0 md:bottom-auto left-0 right-0 z-50 shadow-md bg-white`}
    >
      <ul className="flex p-3 justify-around md:justify-center md:gap-20">
        {sections.map(({ title, id, icon }) => (
          <li key={id}>
            <Link href={`#${id}`}>
              <span className="hidden font-bold md:inline hover:underline underline-offset-8 decoration-2">
                {title}
              </span>
              <Image
                src={icon}
                alt={`${title} icon`}
                className="md:hidden size-8"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

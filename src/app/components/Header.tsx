import React from 'react';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import headerAstronaut from '../../../public/header/header-astronaut.png';
import shadow from '../../../public/header/shadow.png';

const Header = () => {
  const t = useTranslations('Header');

  // ! I've commented the div with the background color. It kinda hard to make the perfect design on all screens with that one. Tried a couple of things but a little blocked. Without it looks good the design, we can talk about it!
  {
    /* <div
        className="absolute inset-0 hidden lg:flex lg:mt-12 lg:h-3/6 xl:mt-20 md:z-9 2xl:h-2/4 2xl:mt-38"
        style={{
          background:
            'linear-gradient(to right, rgba(253, 251, 246, 1), rgba(74, 101, 163, 1))',
        }}
      /> */
  }

  return (
    <main className="flex items-center my-6 mx-2 md:flex-row md:mx-4 lg:mx-12 2xl:mt-24">
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl lg:text-5xl xl:text-6xl xl:mx-12">
          {t('title')}
          <span className="text-accent">{t('accentTitle')}</span>
        </h1>
        <div className="flex justify-center mt-10 gap-x-3 md:gap-x-6">
          <button className="px-6 py-3 border-2 border-black">
            {t('contactUs')}
          </button>
          <button className="px-6 py-3 text-white bg-black">
            {t('ourServices')}
          </button>
        </div>
        <div className="md:hidden">
          <Image
            src={headerAstronaut}
            alt="astronaut image"
            className="animate-[bounce_3s_ease-in-out_infinite] "
          />
          <Image
            src={shadow}
            alt="astronaut image"
            className="md:hidden animate-[pulse_3s_ease-in-out_infinite] -mt-8"
            priority
          />
        </div>
        <p className="font-medium mt-2 md:mt-12 xl:mx-24 2xl:mx-32 2xl:text-xl">
          {t('subtitleOne')}
          <span className="text-accent">{t('subtitleAccent')}</span>
          {t('subtitleTwo')}
        </p>
        <p className="font-bold text-2xl my-12">{t('subtitleThree')}</p>
      </div>
      <div className="flex flex-col items-center lg:w-4/5">
        <Image
          src={headerAstronaut}
          alt="astronaut image"
          className="hidden md:flex animate-[bounce_3s_ease-in-out_infinite]"
          priority
        />
        <Image
          src={shadow}
          alt="astronaut image"
          className="hidden md:flex animate-[pulse_3s_ease-in-out_infinite]  md:-mt-8 lg:-mt-16"
          priority
        />
      </div>
    </main>
  );
};

export default Header;

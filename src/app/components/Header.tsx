import Image from 'next/image';
import { useTranslations } from 'next-intl';

import Animation from './Animation';

import headerAstronaut from '../../../public/header/header-astronaut.png';
import shadow from '../../../public/header/shadow.png';

const Header = () => {
  const t = useTranslations('Header');

  return (
    <Animation>
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
          <p className="font-bold text-2xl my-12 lg:mx-24">
            {t('subtitleThree')}
          </p>
        </div>

        <div className="flex flex-col items-center lg:w-4/5">
          <Animation delay={0.5}>
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
          </Animation>
        </div>
      </main>
    </Animation>
  );
};

export default Header;

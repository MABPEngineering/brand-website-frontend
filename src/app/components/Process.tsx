import Image from 'next/image';
import { useTranslations } from 'next-intl';

import Animation from './Animation';

import moon_group from '../../../public/process/moon_group.png';
import astronaut from '../../../public/process/astronaut.png';

const Process = () => {
  const t = useTranslations('Process');

  return (
    <div className="font-body bg-black px-6 py-14 mx-auto mt-24 flex flex-col items-center text-center 2xl:mt-36 2xl:py-24">
      <div>
        <Animation delay={1}>
          <h1 className="text-white text-4xl font-black md:text-4xl md:mx-36 xl:text-5xl 2xl:text-6xl">
            {t('processHeaderTitle')}
          </h1>
          <Image
            src={moon_group}
            alt="moon image"
            className="w-full mt-6 2xl:w-4/5 2xl:mx-auto"
          />
        </Animation>
      </div>

      <div className="mt-12 flex items-center gap-5 xl:w-3/4 2xl:w-2/4">
        <Image
          src={astronaut}
          alt="moon image"
          className="h-80 md:h-auto md:w-96"
        />

        <div className="mx-auto md:w-3/5 2xl:w-5/5">
          <h1 className="text-white text-xl text-left font-semibold md:text-3xl xl:text-5xl">
            {t('processTitle')}
          </h1>
          <p className="mt-4 text-white text-base text-left font-semibold opacity-70 md:text-xl xl:text-3xl">
            {t('processSubtitle')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;

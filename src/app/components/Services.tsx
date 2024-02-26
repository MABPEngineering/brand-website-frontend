import { useTranslations } from 'next-intl';

import servicesDb from '../db/services.json';
import ServiceCard from './ServiceCard';

const Services = () => {
  const t = useTranslations('Services');

  return (
    <section id="services">
      <h1 className="font-black mx-8 mt-12 text-4xl xl:text-6xl 2xl:mt-32">
        {t('servicesTitle')}
      </h1>
      <div className="flex flex-wrap gap-8 mx-auto mt-16 justify-center w-3/4 2xl:gap-24 2xl:mt-24">
        {servicesDb?.map((service) => {
          return (
            <ServiceCard
              key={service.id}
              category={service.category}
              icon={service.icon}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Services;

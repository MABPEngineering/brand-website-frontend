import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface ServiceCardTypes {
  category: string;
  icon: string;
}

const ServiceCard = ({ category, icon }: ServiceCardTypes) => {
  const t = useTranslations('Services');
  const title = t(`${category}.title`);
  const description = t(`${category}.description`);
  const altIcon = t(`${category}.altIcon`);

  return (
    <div className="w-80 text-left flex flex-row">
      <div className="w-1/2">
        <Image src={`/service-icons/${icon}_icon.png`}
          alt={altIcon}
          width={24}
          height={24}
        />
      </div>
      <div>
        <h2 className="text-black text-sm font-black md:h-8">
          {title.toUpperCase()}
        </h2>
        <p className="mt-4 opacity-65 text-base">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

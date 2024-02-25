import { useTranslations } from 'next-intl';
import Image, { StaticImageData } from 'next/image';

interface ServiceCardTypes {
  icon: StaticImageData | string;
  altIcon: string;
  title: string;
  description: string;
}

const ServiceCard = ({
  icon,
  altIcon,
  title,
  description,
}: ServiceCardTypes) => {
  const t = useTranslations('Services');
  return (
    <div className="w-80 text-left flex flex-row">
      <div className="w-1/2">
        <Image
          src={`/service-icons/${icon}_icon.png`}
          alt={t(altIcon)}
          width={24}
          height={24}
        />
      </div>
      <div>
        <h2 className="text-black text-sm font-black md:h-8">
          {t(title).toUpperCase()}
        </h2>
        <p className="mt-4 opacity-65 text-base">{t(description)}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

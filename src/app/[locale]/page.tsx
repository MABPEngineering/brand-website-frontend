import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Home = () => {
  const t = useTranslations('Index');

  return (
    <div>
      <h1>{t('title')}</h1>
      <div className="flex flex-col">
        <div>
          <Link locale="es" href="/es">
            Español
          </Link>
        </div>
        <div>
          <Link locale="en" href="/en">
            English
          </Link>
        </div>
        <div>
          <Link locale="fr" href="/fr">
            Français
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

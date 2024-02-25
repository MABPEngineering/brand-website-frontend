import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Navbar = () => {
  const t = useTranslations('navbar');

  return (
    <nav>
      <ul className="flex p-4 space-x-10">
        <li>
          <Link
            href="/"
            className="bg-blue-700 bg-transparent text-blue-700 hover:text-gray-700"
          >
            {t('home')}
          </Link>
        </li>
        <li>
          <Link
            href="/aboutus"
            className="hover:bg-transparent hover:text-gray-700"
          >
            {t('aboutus')}
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="hover:bg-transparent hover:text-gray-700"
          >
            {t('blog')}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

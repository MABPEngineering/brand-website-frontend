import { useTranslations } from 'next-intl';

import blogIcon from '../../../public/navbar-icons/blog-icon.png';
import emailIcon from '../../../public/navbar-icons/email-icon.png';
import homeIcon from '../../../public/navbar-icons/home-icon.png';
import trophyIcon from '../../../public/navbar-icons/trophy-icon.png';
import BodyWrapper from '../components/BodyWrapper';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Services from '../components/Services';

const Home = () => {
  const t = useTranslations('navbar');

  const sections = [
    { title: t('home'), id: 'home', icon: homeIcon },
    { title: t('services'), id: 'services', icon: trophyIcon },
    { title: t('blog'), id: 'blog', icon: emailIcon },
    { title: t('contactUs'), id: 'contactUs', icon: blogIcon },
  ];
  return (
    <BodyWrapper>
      <Navbar sections={sections} />
      <Header />
      <Services />
    </BodyWrapper>
  );
};

export default Home;

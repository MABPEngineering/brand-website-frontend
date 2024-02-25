import Link from 'next/link';

import BodyWrapper from '../components/BodyWrapper';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Services from '../components/Services';

const Home = () => {
  return (
    <BodyWrapper>
      <Navbar />
      <Header />
      <Services />
      <div className="flex flex-col mt-24">
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
    </BodyWrapper>
  );
};

export default Home;

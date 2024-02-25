import Link from 'next/link';

import Wrapper from '../components/Wrapper';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Services from '../components/Services';

const Home = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Home;

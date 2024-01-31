import { useTranslations } from "next-intl";
import Link from "next/link";
import Navbar from "../components/Navbar";

const Home = () => {
  const t = useTranslations("Index");

  return (
    <div>
      <Navbar />
      <div className="flex flex-col">
        <h1>{t("title")}</h1>
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

import { useTranslations } from "next-intl";
import Link from "next/link";

const Navbar = () => {
  const t = useTranslations();

  return (
    <header className="py-6">
      <nav className="text-center">
        <ul className="flex p-4 space-x-10">
          <li>
            <Link
              href="#main"
              className="hover:bg-transparent hover:text-blue-500"
            >
              LOGO
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="hover:bg-transparent hover:text-blue-500"
            >
              {t("about")}
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="hover:bg-transparent hover:text-blue-500"
            >
              {t("services")}
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:bg-transparent hover:text-blue-500"
            >
              {t("contact")}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

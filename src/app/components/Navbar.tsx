import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("navbar");

  return (
    <nav className="dark:bg-gray-900">
      <ul className="flex p-4 space-x-10">
        <li>
          <a
            href="#"
            className="bg-blue-700 bg-transparent text-blue-700 hover:text-gray-700"
          >
            {t("home")}
          </a>
        </li>
        <li>
          <a href="#" className="hover:bg-transparent hover:text-gray-700">
            {t("aboutus")}
          </a>
        </li>
        <li>
          <a href="#" className="hover:bg-transparent hover:text-gray-700">
            {t("blog")}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

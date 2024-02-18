import React from "react";

import { useTranslations } from "next-intl";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  const t = useTranslations();

  return (
    <div className="container mx-auto">
      <Navbar />

      <main>
        <section id="main" className="bg-blue-500 text-white py-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
            <div className="text-center md:pl-12">
              <h1 className="text-5xl font-bold">{t("main.title")}</h1>
              <div className="mt-10">
                <button className="mr-4 bg-white text-blue-500 px-5 py-3 rounded-lg">
                  {t("main.contactButton")}
                </button>
                <button className="bg-white text-blue-500 px-5 py-3 rounded-lg">
                  {t("main.ourServicesButton")}
                </button>
              </div>
              <p className="mt-10">{t("main.subtitle")}</p>
            </div>
            <img
              src="/images/astronaut_soldier.png"
              alt="Astronaut Soldier"
              className="max-w-2xl"
            />
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold">{t("about")}</h2>
            <p className="mt-4">{t("about.description")}</p>
          </div>
        </section>

        <section id="services" className="bg-gray-200 py-16">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold">{t("services")}</h2>
            <button className="mt-8 bg-white text-blue-500 px-4 py-2 rounded-lg">
              {t("main.ourServicesButton")}
            </button>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold">{t("contact")}</h2>
          </div>
        </section>
      </main>

      <footer className="py-6 bg-blue-500 text-white">
        <div className="container mx-auto">
          <p>
            &copy; {new Date().getFullYear()} {t("title")}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

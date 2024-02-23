import { getTranslations } from "next-intl/server";
import localFont from "next/font/local";

const avenir = localFont({
  src: [
    {
      path: "../../../public/fonts/AvenirBlack.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/AvenirBook.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/AvenirHeavy.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/AvenirLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../../public/fonts/AvenirRegular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const LocaleLayout = ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  return (
    <html lang={locale} className={avenir.className}>
      <body>{children}</body>
    </html>
  );
};

export default LocaleLayout;

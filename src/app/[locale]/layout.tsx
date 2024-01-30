import { getTranslations } from 'next-intl/server';
import './globals.css';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    // Here we can see that it doesn't found the keys, but these already exists and are working on the browser properly.
    title: t('title'),
    description: t('description'),
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
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
};

export default LocaleLayout;

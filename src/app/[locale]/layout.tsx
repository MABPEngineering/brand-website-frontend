import { getTranslations } from 'next-intl/server';
import './globals.css';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
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

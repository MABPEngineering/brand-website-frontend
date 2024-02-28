import { useTranslations } from 'next-intl'

import BodyWrapper from '../components/BodyWrapper'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Services from '../components/Services'

const Home = () => {
  const t = useTranslations('navbar')

  const sections = [
    { title: t('home'), id: 'home' },
    { title: t('services'), id: 'services' },
    { title: t('blog'), id: 'blog' },
    { title: t('contactUs'), id: 'contactUs' },
  ]
  return (
    <BodyWrapper>
      <Navbar sections={sections} />
      <Header />
      <Services />
    </BodyWrapper>
  )
}

export default Home

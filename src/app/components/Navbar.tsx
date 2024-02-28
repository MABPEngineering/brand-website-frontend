'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const Navbar = ({
  sections,
}: {
  sections: { title: string; id: string }[]
}) => {
  const prevScrollPos = useRef(0)
  const [visible, setVisible] = useState(true)
  const [showShadow, setShowShadow] = useState(false)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY
    if (currentScrollPos > 50) {
      setShowShadow(true)
    } else {
      setShowShadow(false)
    }
    const scrollingDown = currentScrollPos > prevScrollPos.current
    setVisible(!scrollingDown)
    prevScrollPos.current = currentScrollPos
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`transition duration-300 ease-in-out ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } fixed top-0 left-0 right-0 z-50 bg-white ${
        showShadow ? 'shadow-md' : ''
      }`}
    >
      <ul className="flex p-4 space-x-10">
        {sections.map(({ title, id }) => (
          <li key={id}>
            <Link href={`#${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar

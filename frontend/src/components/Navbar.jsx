import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Navbar = () => {
  const headerRef = useRef(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const header = headerRef.current

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling Down → Hide Navbar
        gsap.to(header, {
          y: -120,
          duration: 0.4,
          ease: 'none'
        })
      } else {
        // Scrolling Up → Show Navbar
        gsap.to(header, {
          y: 0,
          duration: 0.4,
          ease: 'power2.out'
        })
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      ref={headerRef}
      className='fixed top-7.5 right-7.5 left-7.5 bg-[#111]/50 backdrop-blur-xs rounded-full py-3 px-7.5 z-99 flex justify-between items-center'
    >
      <div className="logo w-75 relative -left-8.5">
        <img src="/logo.svg" alt="" className='w-full object-center object-cover' />
      </div>

      <nav>
        <ul className='flex justify-between items-center gap-10 text-white text-base leading-5.25 font-medium'>
          <li><a href="#home">Home</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Works</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

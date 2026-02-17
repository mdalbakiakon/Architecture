import React from 'react'

const Navbar = () => {
  return (
    <header className='fixed top-7.5 right-7.5 left-7.5 bg-[#111]/50 backdrop-blur-xs rounded-full py-4 px-7.5 z-99 flex justify-between items-center'>
        <div className="logo w-75 relative -left-8.5"><img src="/logo.svg" alt="" className='w-full object-center object-cover'/></div>

        <nav>
        <ul className='flex justify-between items-center gap-10 text-white text-base leading-5.25 font-medium'>
            <li><a href="#">Home</a></li>
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
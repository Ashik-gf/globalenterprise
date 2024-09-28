
import logo from "../../assets/images/logo2.png"
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const navbar = [
  {
    "title": "Home",
    "path": "/",
    "id": 1
  },
  {
    "title": "About",
    "path": "/about",
    "id": 2
  },
  {
    "title": "Our Projects",
    "path": "/project",
    "id": 3
  },
  {
    "title": "Carrier",
    "path": "/carrier",
    "id": 4
  },
  {
    "title": "Contact",
    "path": "/contact",
    "id": 5
  },
]
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const openhandeler = () => {
    setOpen(!open)
  }
  return (
    <nav className=' max-w-7x h-20 flex mx-auto '>
      <div className=" w-full flex justify-between items-center">
        <div className="col-span-1">
          <img className=' h-12' src={logo} />
        </div>
        {/* desktop view */}
        <div className=" text-xl">
          <ul className=" hidden sm:flex justify-end items-center gap-4">
            {
              navbar.map(nev => <li key={nev.id}>
                <Link to={nev.path}>{nev.title}</Link>
              </li>)
            }

          </ul>
        </div>
        {/* mobile views */}
        <div className="sm:hidden relative">
          {
            open ? <svg onClick={openhandeler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg> : <svg onClick={openhandeler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>

          }
          {
            open && <div className="sm:hidden absolute top-8 right-0 rounded-l-lg z-20 
           w-[200px] min-h-screen bg-gray-900 opacity-85
            border-2">

              <ul className="   flex flex-col p-4 gap-4">
                {
                  navbar.map(nev => <li onClick={openhandeler} className=" text-lg  text-white
                  hover:border-l-2 border-l-2 border-l-black border-l-transparent transition-opacity duration-1000 hover:border-l-white px-2
                  " key={nev.id}>
                    <Link to={nev.path}>{nev.title}</Link>
                  </li>)
                }
              </ul>

            </div>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar
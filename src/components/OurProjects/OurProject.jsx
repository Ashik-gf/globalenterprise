/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'

const product = {
  name: 'Zip Tote Basket',
  price: '$220',
  rating: 3.9,
  href: '#',
  description:
    'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.',
  imageSrc: 'https://lh3.googleusercontent.com/proxy/Kbig0G_PPexxnkaJy_KRxRXt3jdsbHpNHDtCn-fUSdR8JLO9V8yM6ZUhQb_V-0f0lWXURK9zDdH5vKYQy1QwTWkMtkMJ3w',
  imageAlt: 'Back angled view with bag open and handles to the side.',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function OurProjects() {
  const [open, setOpen] = useState(false)

  return (
    <div className=" w-full mx-auto py-12">
        <div className=" w-full flex justify-center items-center">
            <div className=" border-x-inherit border-y-2 border-orange-950 p-2">
               <h1 className=' text-2xl'>Our Projects</h1>  
            </div>
           
        </div>

       <div
          className={` ${
            open
              ? " absolute h-[300px] inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"
              : " hidden"
          } "`}
        ></div>
        <div className=" flex justify-center w-full pt-12">
          <img
            className={` ${open ? "hidden" : "h-64 w-64"}`}
            src="https://lh3.googleusercontent.com/proxy/Kbig0G_PPexxnkaJy_KRxRXt3jdsbHpNHDtCn-fUSdR8JLO9V8yM6ZUhQb_V-0f0lWXURK9zDdH5vKYQy1QwTWkMtkMJ3w"
          ></img>
          <button
            onClick={() => setOpen(true)}
            className={`${
              open ? "hidden" : ""
            } p-2 bg-gray-200 bg-transparent/40 text-white rounded-r-lg`}
          >
            Click Hare
          </button>
        </div>
              <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className={`${open ? "":" hidden"} relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8`}>
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div className="sm:col-span-4 lg:col-span-5">
                      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                        <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center" />
                      </div>
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>

                      <section aria-labelledby="information-heading" className="mt-3">
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>

                        <p className="text-2xl text-gray-900">{product.price}</p>
                

                        <div className="mt-6">
                          <h4 className="sr-only">Description</h4>

                          <p className="text-sm text-gray-700">{product.description}</p>
                        </div>
                      </section>

                      <section aria-labelledby="options-heading" className="mt-6">
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
    </div>

     

  )
}

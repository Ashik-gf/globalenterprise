/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import { Link } from "react-router-dom"

const categories = [
    {
        name: 'Monitor',
        href: '#',
        imageSrc: 'https://www.ryans.com/assets/images/category-icon/svg/all-in-one.svg',
    },
    {
        name: 'Processor',
        href: '#',
        imageSrc: 'https://www.ryans.com/assets/images/category-icon/svg/Processor.svg',
    },
    {
        name: 'Camera',
        href: '#',
        imageSrc: 'https://www.ryans.com/assets/images/category-icon/svg/camera.svg',
    },
    {
        name: 'Printer',
        href: '#',
        imageSrc: 'https://www.ryans.com/assets/images/category-icon/svg/printer.svg',
    },
    {
        name: 'Software',
        href: '#',
        imageSrc: 'https://www.ryans.com/assets/images/category-icon/svg/software.svg'
    },
    {
        name: 'Monitor',
        href: '#',
        imageSrc: 'https://www.ryans.com/assets/images/category-icon/svg/Monitor.svg'
    },
    {
        name: 'Sound System',
        href: '#',
        imageSrc: 'https://www.ryans.com/assets/images/category-icon/svg/speaker.svg'
    },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Categories() {

    return (
        <div className="bg-white">
            <main>
                {/* Category section */}
                <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
                    <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
                        <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                            Shop by Category
                        </h2>
                        <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                            Browse all categories
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>

                    <div className=" my-8 w-full mx-auto grid sm:grid-cols-7 grid-cols-3 gap-4">
                        {
                            categories.map(categorie =>
                                <Link
                                    className=" flex flex-col gap-4 items-center justify-center"
                                    to={'/'}>
                                    <img className=" h-12 w-12 sm:h-20 sm:w-20 hover:case-out scale-100 hover:scale-125 duration-700" src={categorie.imageSrc} />
                                    <p className=" text-lg font-bold">{categorie.name}</p>

                                </Link>)
                        }
                    </div>

                    <div className="mt-6 px-4 sm:hidden">
                        <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                            Browse all categories
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>
                </section>
                {/* Featured section */}
            </main>
        </div>
    )
}

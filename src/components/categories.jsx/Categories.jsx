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
    { name: 'Software', 
    href: '#', 
    imageSrc: 'https://www.ryans.com/assets/images/category-icon/svg/software.svg' 
},
    { name: 'Monitor', 
    href: '#', 
    imageSrc: 'https://www.ryans.com/assets/images/category-icon/svg/Monitor.svg' 
},
    { name: 'Sound System', 
    href: '#', 
    imageSrc: 'https://www.ryans.com/assets/images/category-icon/svg/speaker.svg' 
},
]
const collections = [
    {
        name: 'Handcrafted Collection',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
        imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
        description: 'Keep your phone, keys, and wallet together, so you can lose everything at once.',
    },
    {
        name: 'Organized Desk Collection',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
        imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
        description: 'The rest of the house will still be a mess, but your desk will look great.',
    },
    {
        name: 'Focus Collection',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
        imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
        description: 'Be more productive than enterprise project managers with a single piece of paper.',
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

                 <div className=" my-8 w-full mx-auto border-2 grid sm:grid-cols-7 grid-cols-3 gap-4">
                    {
                        categories.map(categorie=>
                        <Link 
                        className=" flex flex-col gap-4 items-center justify-center"
                        to={'/'}>
                            <img className=" h-20 w-20" src={categorie.imageSrc} />
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
                <section
                    aria-labelledby="social-impact-heading"
                    className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8"
                >
                    <div className="relative overflow-hidden rounded-lg">
                        <div className="absolute inset-0">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
                            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                                <h2 id="social-impact-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    <span className="block sm:inline">Level up</span>
                                    <span className="block sm:inline">your desk</span>
                                </h2>
                                <p className="mt-3 text-xl text-white">
                                    Make your desk beautiful and organized. Post a picture to social media and watch it get more likes
                                    than life-changing announcements. Reflect on the shallow nature of existence. At least you have a
                                    really nice desk setup.
                                </p>
                                <a
                                    href="#"
                                    className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                                >
                                    Shop Workspace
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Collection section */}
                <section
                    aria-labelledby="collection-heading"
                    className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
                >
                    <h2 id="collection-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                        Shop by Collection
                    </h2>
                    <p className="mt-4 text-base text-gray-500">
                        Each season, we collaborate with world-class designers to create a collection inspired by the natural world.
                    </p>

                    <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                        {collections.map((collection) => (
                            <a key={collection.name} href={collection.href} className="group block">
                                <div
                                    aria-hidden="true"
                                    className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                                >
                                    <img
                                        src={collection.imageSrc}
                                        alt={collection.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-4 text-base font-semibold text-gray-900">{collection.name}</h3>
                                <p className="mt-2 text-sm text-gray-500">{collection.description}</p>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Featured section */}
                <section aria-labelledby="comfort-heading" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="relative overflow-hidden rounded-lg">
                        <div className="absolute inset-0">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg"
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
                            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                                <h2 id="comfort-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    Simple productivity
                                </h2>
                                <p className="mt-3 text-xl text-white">
                                    Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we're doing our best
                                    here. No kanban boards, burndown charts, or tangled flowcharts with our Focus system. Just the
                                    undeniable urge to fill empty circles.
                                </p>
                                <a
                                    href="#"
                                    className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                                >
                                    Shop Focus
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

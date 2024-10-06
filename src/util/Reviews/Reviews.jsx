import { StarIcon } from '@heroicons/react/24/solid'
import React from 'react'
const reviews = {
    average: 3.9,
    totalCount: 512,
    featured: [
        {
            id: 1,
            title: "Can't say enough good things",
            rating: 5,
            content: `
          <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
          <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
        `,
            author: 'Risako M',
            date: 'May 16, 2021',
            datetime: '2021-01-06',
        },
        // More reviews...
    ],
}
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Reviews = ({ ratings }) => {
    return (
        <div className="mt-4 py-4">
            <h2 className="sr-only">Reviews</h2>
            <div className="flex items-center">
                <p className="text-sm text-gray-700">
                    {ratings}
                    <span className="sr-only"> out of 5 stars</span>
                </p>
                <div className="ml-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                            key={rating}
                            className={classNames(
                                ratings > rating ? 'text-yellow-400' : 'text-gray-200',
                                'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                        />
                    ))}
                </div>
                <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
                    ·
                </div>
                <div className="ml-4 flex">
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        See all {reviews.totalCount} reviews
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Reviews
import React from 'react';
import { Link } from 'react-router-dom';

const CollectionsCard = ({ product }) => {

    const { title, id, categories, special_Price, regular_Price, img, reviews } = product || {}
    const handelClick = ({ id }) => {

    }



    return (
        <Link to={`/singleProducts/${id}`} onClick={() => handelClick(id)} className=" w-full h-[320px] bg-white shadow-lg rounded-md  border-red-400">
            <div className="img h-3/5 overflow-hidden">
                <img className='w-full h-full transition-transform duration-300 ease-in-out hover:scale-125' src={img} />
            </div>
            <div className="img h-2/5  px-2 space-y-1 py-2">
                <h1 className='text-center text-md py-1'>{categories}</h1>
                <h1 className=' text-justify text-sm'>{title.substring(0, 20)}...</h1>
                <div className="flex flex-col justify-center items-center gap-2 py-4">
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-green-600/20">
                        <span>Price:</span>  {special_Price} tk
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default CollectionsCard
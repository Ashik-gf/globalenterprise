import React from 'react';
import { useParams } from 'react-router-dom';
import Reviews from '../../util/Reviews/Reviews';
import { collections } from './Collections';

const Collection = () => {
    const productsId = useParams();
    const Productscollection = collections
    console.log(Productscollection);
    const filterData = Productscollection.find((item) => item.id === parseInt(productsId.productsId));
    const { title, id, categories, special_Price, regular_Price, img, reviews, productId, quick_overview, specifications } = filterData

    return (
        <div className=' grid grid-cols-1 sm:grid-cols-2 gap-2'>
            <div className=" w-full min-h-screen ">
                <img className=' w-full h-full  object-cover' src={img} />
            </div>
            <div className="flex flex-col gap-4 py-2 px-3">
                {/* details */}
                <div className="">
                    <h1 className=' text-lg font-bold'>{title}</h1>
                    <Reviews ratings={reviews} />
                    <p><span>Products ID: </span>{productId}</p>
                </div>
                {/* special Price */}
                <div className="w-[200px] h-[70px] px-4 py-2 bg-green-100 text-gray-700 space-y-2">
                    <p className=' text-sm text-gray-600'>Special Price</p>
                    <p className=' text-xl font-bold'>Tk: {special_Price}</p>
                </div>
                {/* regular price */}
                <div className="w-[200px] h-[60px] px-4 py-2 text-gray-700 space-y-2">
                    <p className=' text-sm text-gray-600'>Regular Price</p>
                    <p className=' text-xl font-bold'>Tk: {regular_Price}</p>
                </div>
                {/* status Products */}
                <div className="w-[200px] h-[35px] px-4 bg-green-600 text-white flex justify-center items-center rounded-md">
                    Avalaible
                </div>
                {/* Quick views */}
                {/*  "display": "21.5",
            "display_Resolution": "1920x1080",
            "panel_Type": "IPS",
            "refresh": "75Hz",
            "rotatable": "No",
            "Port": "HDMI Port", */}
                <div className="flex flex-col">
                    <h1 className=' text-lg font-bold py-3'>Quick Overview</h1>
                    <ol className=' space-y-2'>
                        <li className=' space-x-4'> <span className=' text-gray-800'>Display Size (Inch) -</span> {quick_overview.display}</li>
                        <li className=' space-x-4'><span className=' text-gray-800'>Display Resolutions -</span> {quick_overview.display_Resolution}</li>
                        <li className=' space-x-4'> <span className=' text-gray-800'>Refresh Rate (Hz)</span> {quick_overview.panel_Type}</li>
                        <li className=' space-x-4'> <span className=' text-gray-800'>Refresh -</span> {quick_overview.refresh}</li>
                        <li className=' space-x-4'> <span className=' text-gray-800'>HDMI Port -</span> {quick_overview.Port}</li>
                    </ol>
                </div>
                <div className="add_cart">
                    <button className=''>
                        <div className="w-[200px] h-[35px] px-4 bg-green-600 text-white flex justify-center items-center rounded-md">
                            Add Cart
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Collection
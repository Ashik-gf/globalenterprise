import React from 'react'
import { useParams } from 'react-router-dom'
import BorderStyle from '../../util/BorderStyle/BorderStyle'
import CollectionsCard from './CollectionsCard'

export const collections = [
    {
        "id": 1,
        "title": "HP M22F 21.5 Inch FHD IPS Monitor #2E2Y3AA/2D",
        "img": "https://www.ryans.com/storage/products/small/a4tech-fk11-grey-usb-fn-hotkeys-multimedia-mini-41727352177.webp",
        "categories": "KeyBoard",
        "special_Price": "2000",
        "regular_Price": "4000",
        "reviews": "4.5",
        "productId": "08.01.020.104",
        "quick_overview": {
            "display": "21.5",
            "display_Resolution": "1920x1080",
            "panel_Type": "IPS",
            "refresh": "75Hz",
            "rotatable": "No",
            "Port": "HDMI Port",
        },
        "specifications": {
            "brand": "HP",
            "model": "HP M22F",
            "series": "Regular",
            "shape": "Widescreen",
            "design": "Seamless design",
            "display": "21.5",
            "displayType": "FHD LED Display",
            "borderless": "Yes",
            "touchScreen": "NO",
            "displayResolution": "1920x1080",
            "refreshRate": "75Hz",
            "color": "Black",
            "weight": "2.2",
            "warrantyDetails": "3 Year (Box Mandatory While Claiming)"
        }
    },
    {
        "id": 2,
        "title": "HP M22F 21.5 Inch FHD IPS Monitor #2E2Y3AA/2D",
        "img": "https://www.ryans.com/storage/products/small/hp-m22f-215-inch-fhd-ips-monitor-71727352464.webp",
        "categories": "Monitor",
        "special_Price": "2000",
        "regular_Price": "4000",
        "reviews": "4.5",
        "productId": "08.01.020.104",
        "quick_overview": {
            "Display": "21.5",
            "display_Resolution": "1920x1080",
            "panel_Type": "IPS",
            "refresh": "75Hz",
            "rotatable": "No",
            "Port": "HDMI Port",
        },
        "specifications": {
            "brand": "HP",
            "model": "HP M22F",
            "series": "Regular",
            "shape": "Widescreen",
            "design": "Seamless design",
            "display": "21.5",
            "displayType": "FHD LED Display",
            "borderless": "Yes",
            "touchScreen": "NO",
            "displayResolution": "1920x1080",
            "refreshRate": "75Hz",
            "color": "Black",
            "weight": "2.2",
            "warrantyDetails": "3 Year (Box Mandatory While Claiming)"
        }
    },
    {
        "id": 3,
        "title": "Gigabyte C200 GLASS ATX Mid-Tower Gaming Casi ...",
        "img": "https://www.ryans.com/storage/products/small/gigabyte-c200-glass-atx-mid-tower-gaming-casing-41727264723.webp",
        "categories": "casing",
        "special_Price": "2000",
        "regular_Price": "4000",
        "reviews": "4.5",
        "productId": "08.01.020.104",
        "quick_overview": {
            "Display": "21.5",
            "display_Resolution": "1920x1080",
            "panel_Type": "IPS",
            "refresh": "75Hz",
            "rotatable": "No",
            "Port": "HDMI Port",
        },
        "specifications": {
            "brand": "HP",
            "model": "HP M22F",
            "series": "Regular",
            "shape": "Widescreen",
            "design": "Seamless design",
            "display": "21.5",
            "displayType": "FHD LED Display",
            "borderless": "Yes",
            "touchScreen": "NO",
            "displayResolution": "1920x1080",
            "refreshRate": "75Hz",
            "color": "Black",
            "weight": "2.2",
            "warrantyDetails": "3 Year (Box Mandatory While Claiming)"
        }
    },
    {
        "id": 4,
        "title": "Sandisk Extreme Pro 128GB MicroSDXC Memory Card with Adapter #SDSQXCD-128G-GN6MA",
        "img": "https://www.ryans.com/storage/products/small/sandisk-extreme-pro-128gb-microsdxc-memory-card-41727352098.webp",
        "categories": "Memory Card",
        "special_Price": "2000",
        "regular_Price": "4000",
        "reviews": "4.5",
        "productId": "08.01.020.104",
        "quick_overview": {
            "Display": "21.5",
            "display_Resolution": "1920x1080",
            "panel_Type": "IPS",
            "refresh": "75Hz",
            "rotatable": "No",
            "Port": "HDMI Port",
        },
        "specifications": {
            "brand": "HP",
            "model": "HP M22F",
            "series": "Regular",
            "shape": "Widescreen",
            "design": "Seamless design",
            "display": "21.5",
            "displayType": "FHD LED Display",
            "borderless": "Yes",
            "touchScreen": "NO",
            "displayResolution": "1920x1080",
            "refreshRate": "75Hz",
            "color": "Black",
            "weight": "2.2",
            "warrantyDetails": "3 Year (Box Mandatory While Claiming)"
        }
    },
    {
        "id": 5,
        "title": "Kaloc DS90 17-32 inch LCD/LED Monitor Single Arm Desk Mount Stand",
        "img": "https://www.ryans.com/storage/products/small/sandisk-extreme-pro-128gb-microsdxc-memory-card-41727352098.webp",
        "categories": "Monitor Accessories",
        "special_Price": "2000",
        "regular_Price": "4000",
        "reviews": "4.5",
        "productId": "08.01.020.104",
        "quick_overview": {
            "Display": "21.5",
            "display_Resolution": "1920x1080",
            "panel_Type": "IPS",
            "refresh": "75Hz",
            "rotatable": "No",
            "Port": "HDMI Port",
        },
        "specifications": {
            "brand": "HP",
            "model": "HP M22F",
            "series": "Regular",
            "shape": "Widescreen",
            "design": "Seamless design",
            "display": "21.5",
            "displayType": "FHD LED Display",
            "borderless": "Yes",
            "touchScreen": "NO",
            "displayResolution": "1920x1080",
            "refreshRate": "75Hz",
            "color": "Black",
            "weight": "2.2",
            "warrantyDetails": "3 Year (Box Mandatory While Claiming)"
        }
    },
    {
        "id": 6,
        "title": "Microlab M-590 2:1 Speaker",
        "img": "https://www.ryans.com/storage/products/small/microlab-m-590-21-51727352659.webp",
        "categories": "Speaker",
        "special_Price": "2000",
        "regular_Price": "4000",
        "reviews": "4.5",
        "productId": "08.01.020.104",
        "quick_overview": {
            "Display": "21.5",
            "display_Resolution": "1920x1080",
            "panel_Type": "IPS",
            "refresh": "75Hz",
            "rotatable": "No",
            "Port": "HDMI Port",
        },
        "specifications": {
            "brand": "HP",
            "model": "HP M22F",
            "series": "Regular",
            "shape": "Widescreen",
            "design": "Seamless design",
            "display": "21.5",
            "displayType": "FHD LED Display",
            "borderless": "Yes",
            "touchScreen": "NO",
            "displayResolution": "1920x1080",
            "refreshRate": "75Hz",
            "color": "Black",
            "weight": "2.2",
            "warrantyDetails": "3 Year (Box Mandatory While Claiming)"
        }
    },
]
const Collections = () => {
    const paransId = useParams()
    console.log(paransId);
    return (
        <div className=' lg:px-12 md:px-8 px-4 py-4 w-full min-h-screen bg-gray-300 space-y-6 space-x-4'>
            <div className=" pt-10">
                <BorderStyle />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                {
                    collections.map(prod => <CollectionsCard key={prod.id} product={prod} />)
                }
            </div>

        </div>
    )
}

export default Collections
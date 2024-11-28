import { Button } from '@/components/ui/button'
import React from 'react'
import img1 from '../../../../public/images/profile-pic1.jpg'
import img2 from '../../../../public/images/profile-pic2.jpg'



const datas = [
    {
        image: img1,
        businessman: "Md. Rahmatullah - Azim Uddin",
        IDs: "021241242154 - 114542157155",
        productName: "Potato",
        overflowPrice: 120,
        currentDate: "11 May, 2024 12: 56"
    },
    {
        image: img2,
        businessman: "Md. Niloy - Toushif",
        IDs: "4253356231 - 5698564756",
        productName: "Banana",
        overflowPrice: 350,
        currentDate: "18 December, 2028 07: 10"
    }
]

const TableMaking = () => {
    return (
        <>
            <h1 className='font-extrabold text-4xl mb-5 mt-5'>Dashboard</h1>
            <div className='bg-gray-100 min-h-24 min-w-[1000px] flex items-center justify-start pl-8 font-bold rounded-t-md'>
                <p>Price Bound Report</p>
            </div>

            {
                datas.map((data, index) => {
                    return (
                        <div className='bg-gray-100 min-h-24 min-w-[1000px] flex items-center justify-between pl-8 pr-8 mt-1'>
                            <div className='flex gap-6 items-center justify-start w-[400px]'>
                                <div className='w-16'>
                                    <img className=' w-full rounded-full' src="images/profile-pic.jpg" alt="Profile Picture" />
                                </div>
                                <div>
                                    <p className='text-lg font-bold'>{data.businessman}</p>
                                    <p className='text-sm text-gray-500 '>021241242154 - 114542157155</p>
                                    <div className='flex gap-4'>
                                        <p>Product: <span className='font-bold'>Potato</span></p>
                                        <p>OverFlow: <span className='font-bold'>120</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-center gap-2'>
                                <div className='min-h-2 min-w-2 bg-black rounded-full'></div>
                                <p>11 May, 2024 12: 56</p>
                            </div>
                            <div className='flex gap-4'>
                                <Button className='rounded-full'>Reject</Button>
                                <Button className='rounded-full'>Approve</Button>
                            </div>
                        </div>
                    )
                }
                )
            }


        </>
    )
}

export default TableMaking
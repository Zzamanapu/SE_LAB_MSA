import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
import { ITableData } from '@/interfaces/required-interfaces'

// const datas = [
//     {
//         image: img1,
//         businessman: "Md. Rahmatullah - Azim Uddin",
//         IDs: "021241242154 - 114542157155",
//         productName: "Potato",
//         overflowPrice: 120,
//         currentDate: "11 May, 2024 12: 56"
//     },
//     {
//         image: img2,
//         businessman: "Md. Niloy - Toushif",
//         IDs: "4253356231 - 5698564756",
//         productName: "Banana",
//         overflowPrice: 350,
//         currentDate: "18 December, 2028 07: 10"
//     }
// ]

const TableMaking = ({datas}: {datas: ITableData []}) => {
    console.log(datas)
    return (
        <>
            <h1 className='font-extrabold text-4xl mb-5 mt-5'>Dashboard</h1>
            <div className='bg-white min-h-24 min-w-[1000px] flex items-center justify-start pl-8 font-bold rounded-t-md border bg-card text-card-foreground shadow'>
                <p>Price Bound Report</p>
            </div>

            {
                datas.map((data) => {
                    return (
                        <div key={data.id} className='bg-white min-h-24 min-w-[1000px] flex items-center justify-between pl-8 pr-8 border bg-card text-card-foreground shadow'>
                            <div className='flex gap-6 items-center justify-start w-[350px]'>
                                <div className='w-16 h-16 rounded-full overflow-hidden'>
                                    <Image className=' w-full' src={`/images/${data.image}`} alt="Profile Picture" height={0} width={0} sizes='100vw'/>
                                </div>
                                <div>
                                    <p className='text-lg font-bold'>{data.businessman}</p>
                                    <p className='text-sm text-gray-500 '>021241242154 - 114542157155</p>
                                    <div className='flex gap-4'>
                                        <p>Product: <span className='font-bold'>{data.productName}</span></p>
                                        <p>OverFlow: <span className='font-bold'>{data.overflowPrice}</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-start gap-2 w-[200px]'>
                                <div className='min-h-2 min-w-2 bg-black rounded-full'></div>
                                <p>{data.currentDate}</p>
                            </div>
                            <div className='flex gap-4'>
                                <Button className='rounded-full bg-purple-700'>Reject</Button>
                                <Button className='rounded-full bg-green-400'>Approve</Button>
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
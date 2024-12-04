import { Button } from '@/components/ui/button'
import React from 'react'
import { IGeneralReportTable } from '@/interfaces/required-interfaces'
import Link from 'next/link'
import { CircleEllipsis, Ellipsis } from "lucide-react"


const reportDatas = [
    {
        id: 'r1243121',
        type: 'H',
        reporter: 'Md. Saiduzzaman Apu',
        reported_user: 'Toushif Muktashid Hasan',
        reason: 'Fraud',
        date: '6 Jul, 2024',
        status: 'Resolved',
    },
    {
        id: 'tu66543',
        type: 'J',
        reporter: 'Shahriar Rahman Niloy',
        reported_user: 'Toushif Muktashid Hasan',
        reason: 'Scam',
        date: '6 Sept, 2024',
        status: 'Pending',
    },
]

const GeneralReportTable = ({ datas }: { datas: IGeneralReportTable[] }) => {
    console.log(datas)
    return (
        <>
            <h1 className='font-extrabold text-4xl mb-5 mt-5'>Dashboard</h1>
            <div className='bg-white min-h-[70px] min-w-[1200px] flex items-center justify-start pl-8 font-bold rounded-t-md border-b bg-card text-card-foreground shadow'>
                <p>General Report</p>
            </div>
            <div className='bg-gray-50 min-h-[70px] min-w-[1200px] flex items-center justify-start font-bold pl-8 pr-8 bg-card text-card-foreground shadow'>
                <div className=' text-gray-500 w-[80px]'><p>Type</p></div>
                <div className=' text-gray-500 w-[250px]'><p>Reporter</p></div>
                <div className=' text-gray-500 w-[250px]'><p>Reported User</p></div>
                <div className=' text-gray-500 w-[180px]'><p>Reason</p></div>
                <div className=' text-gray-500 w-[160px]'><p>Date</p></div>
                <div className=' text-gray-500 w-[150px]'>Status</div>
                <div className=' text-gray-500 w-[100px]'><p>Actions</p></div>
            </div>

            {
                reportDatas.map((reportData) =>
                    <div key={reportData.id} className='bg-white min-h-[70px] min-w-[1200px] flex items-center justify-start pl-8 pr-8 border-t bg-card text-card-foreground shadow'>
                        <div className=' w-[80px] flex items-center justify-start'> <div className='h-[50px] w-[50px] bg-gray-200 rounded-full flex justify-center items-center'><p className='text-white text-xl'>{reportData.type}</p></div></div>
                        <div className='text-gray-800 w-[250px] '><p>{reportData.reporter}</p></div>
                        <div className='text-gray-800 w-[250px] '><p>{reportData.reported_user}</p></div>
                        <div className='text-gray-800 w-[180px] '><div className='bg-red-100 max-w-[90px] flex items-center justify-center rounded-md'><p className='  text-red-500 text-base font-semibold '>{reportData.reason}</p></div></div>
                        <div className='text-gray-800 w-[160px] '><p>{reportData.date}</p></div>
                        <div className='text-gray-800 w-[150px] '><div className='bg-green-100 max-w-[90px] flex items-center justify-center rounded-md'><p className='  text-green-500 text-base font-semibold '>{reportData.status}</p></div></div>
                        <div className='text-gray-800 w-[100px] '><Link href={`/general-report/${reportData.id}`}><Ellipsis/></Link></div>
                    </div>
                )
            }


        </>
    )
}

export default GeneralReportTable
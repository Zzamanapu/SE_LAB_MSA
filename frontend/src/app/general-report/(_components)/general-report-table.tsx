import { Button } from '@/components/ui/button'
import React from 'react'
import { IGeneralReportTable } from '@/interfaces/required-interfaces'
import Image from 'next/image'


const GeneralReportTable = ({ datas }: { datas: IGeneralReportTable[] }) => {
    console.log(datas)
    return (
        <>
            <h1 className='font-extrabold text-4xl mb-5 mt-5'>Dashboard</h1>
            <div className='bg-white min-h-[70px] min-w-[1263px] flex items-center justify-start pl-8 font-bold rounded-t-md border bg-card text-card-foreground shadow'>
                <p>General Report</p>
            </div>

            {
                datas.map((data) =>
                    <div key={data.id} className='bg-white min-h-[70px] min-w-[1200px] flex items-center justify-between pl-8 pr-8 border bg-card text-card-foreground shadow'>
                        <div className='flex gap-6 items-center justify-start w-[500px]'>
                            <div className='h-12 w-12 bg-slate-400 flex items-center justify-center rounded-full'>
                                <p className='text-white text-2xl'>{data.profile}</p>
                            </div>
                            <div>
                                <p className='text-base'>{data.address}</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <p className='bg-green-100 pr-3 pl-3 rounded-full border-2 border-green-200 text-green-600 '>{data.stakeholderType}</p>
                            <p className='bg-blue-100 pr-3 pl-3 rounded-full border-2 border-blue-200 text-blue-600 '>{data.reportType}</p>
                        </div>
                        <div className='flex items-center justify-start gap-2 w-[120px]'>
                            <div className='min-h-1 min-w-1 bg-black rounded-full'></div>
                            <p>{data.currentDate}</p>
                        </div>
                        <div className='flex gap-4'>
                            <Button className='rounded-full bg-purple-700'>Reject</Button>
                            <Button className='rounded-full bg-green-400'>Approve</Button>
                        </div>
                    </div>
                )
            }


        </>
    )
}

export default GeneralReportTable
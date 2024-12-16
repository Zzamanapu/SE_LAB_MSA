import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const NumberOfUser = ({ data }: any) => {
    return (
        <Card>
            <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
                <div className="grid flex-1 gap-0 text-center sm:text-left justify-end">
                    <CardDescription className='text-base text-black'>
                        {data.type}
                    </CardDescription>
                    <CardTitle className='text-3xl text-right'>{data.number}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <p className='text-gray-600'><span className='text-green-700 font-bold text-lg'>{data.growth}%</span> than last week</p>
            </CardContent>
        </Card>
    )
}

export default NumberOfUser



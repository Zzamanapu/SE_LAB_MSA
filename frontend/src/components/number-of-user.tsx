import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const NumberOfUser = () => {
    return (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <Card className='min-w-[400px]'>
                <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
                    <div className="grid flex-1 gap-1 text-center sm:text-left">
                        <CardTitle>Area Chart - Interactive</CardTitle>
                        <CardDescription>
                            Showing total visitors for the last 3 months
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                    <p>apu</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default NumberOfUser
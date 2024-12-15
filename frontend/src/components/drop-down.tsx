'use client'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

// const selectReportActionData = {
//     selectTitle: "Report Action",
//     selectValues1: {
//         value: "declined",
//         label: "Declined"
//     },
//     selectValues2: {
//         value: "approved",
//         label: "Approved"
//     }
// }
const DropDown = (data: any) => {
    console.log(data)
    if(data.selectValues1 === undefined){
        return(
            <></>
        )
    }else{
        return (
            <>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder={data.selectTitle} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value={'data.selectValues1.value'}>{'data.selectValues1.label'}</SelectItem>
                        <SelectItem value={'data.selectValues2.value'}>{'data.selectValues2.label'}</SelectItem>
                    </SelectContent>
                </Select>
            </>
        )

    }
}

export default DropDown
import React from 'react'
import { Payment, columns } from './colums'
import { DataTable } from "./data-table"
import { Table } from 'lucide-react'
import TableMaking from './(_components)/table-making'
import img1 from '../../../../public/images/profile-pic1.jpg'
import img2 from '../../../../public/images/profile-pic2.jpg'
import { ITableData } from '@/interfaces/required-interfaces'


const datas: ITableData [] = [
    {
        image: 'profile-pic1.jpg',
        businessman: "Md. Rahmatullah - Azim Uddin",
        IDs: "021241242154 - 114542157155",
        productName: "Potato",
        overflowPrice: 120,
        currentDate: "11 May, 2024 12: 56"
    },
    {
        image: 'profile-pic2.jpg',
        businessman: "Md. Niloy - Toushif",
        IDs: "4253356231 - 5698564756",
        productName: "Banana",
        overflowPrice: 350,
        currentDate: "18 December, 2028 07: 10"
    }
]


const PriceBoundReport = () => {


    return (
        <TableMaking datas={datas}/>
    )
}

export default PriceBoundReport
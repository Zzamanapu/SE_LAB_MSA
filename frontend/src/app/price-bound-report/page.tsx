import React from 'react'
import { Payment, columns } from './colums'
import { DataTable } from "./data-table"
import { Table } from 'lucide-react'
import TableMaking from './(_components)/table-making'


const PriceBoundReport = () => {
    const data: Payment[] = [{
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
    }]

    return (
        <TableMaking/>
    )
}

export default PriceBoundReport
import React from 'react'
import GeneralReportTable from './(_components)/general-report-table'
import { IGeneralReportTable } from '@/interfaces/required-interfaces'



const datas: IGeneralReportTable [] = [
  {
    id: 12345,
    profile: 'P',
    address: "h-171, Road-8, Journalist R/A, Mirpur-11, Dhaka-1208",
    stakeholderType: "farmer",
    reportType: "Audience Report",
    currentDate: "Mar 4, 2024",
  },
  {
    id: 7654,
    profile: 'A',
    address: "h-140, Road-Hatem Ali Road, Kharakanda, Betagi, Barguna",
    stakeholderType: "trader",
    reportType: "Summary Report",
    currentDate: "Jul 24, 2024",
  }
]

const GeneralReport = () => {
  return (
    <>
      <GeneralReportTable datas = {datas}/>
    </>
  )
}

export default GeneralReport
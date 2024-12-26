
"use client"
import React from 'react'

import { Bar, BarChart, Line, LineChart } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"


// const data = [
//   {
//     revenue: 10400,
//     subscription: 240,
//   },
//   {
//     revenue: 14405,
//     subscription: 300,
//   },
//   {
//     revenue: 9400,
//     subscription: 200,
//   },
//   {
//     revenue: 8200,
//     subscription: 278,
//   },
//   {
//     revenue: 7000,
//     subscription: 189,
//   },
//   {
//     revenue: 9600,
//     subscription: 239,
//   },
//   {
//     revenue: 11244,
//     subscription: 278,
//   },
//   {
//     revenue: 26475,
//     subscription: 189,
//   },
// ]

const chartConfig = {
  revenue: {
    label: "Revenue",
    theme: {
      light: "black",
      dark: "white",
    },
  },
  subscription: {
    label: "Subscriptions",
    theme: {
      light: "black",
      dark: "white",
    },
  },
} satisfies ChartConfig

const AmountUser = ({ data }: any) => {
  return (
    <Card className='h-[100%]'>
      <CardHeader className=" text-gray-800 flex flex-row items-center justify-between space-y-0 ">
        <CardTitle className="text-sm font-normal">{data.totalUserTitle}</CardTitle>
      </CardHeader>
      <CardContent className="w-[100%]">
        <div className=" text-gray-800 text-2xl font-bold">{data.totalUser}</div>
        <p className="text-xs text-muted-foreground">
          +{data.totalUserGrowth}% from last month
        </p>
        <ChartContainer config={chartConfig} className="h-[80px] w-full">
          <LineChart
            data={data.graphData}
            margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 0,
            }}
          >
            <Line
              type="monotone"
              strokeWidth={2}
              dataKey="revenue"
              activeDot={{
                r: 6,
                fill: "var(--color-revenue)",
              }}
              stroke="var(--color-revenue)"
            />
          </LineChart>
        </ChartContainer>
        <div className='mt-16 text-gray-800'>
          <div className='flex justify-between mb-5'>
              <p className='text-sm'>Active User</p>
              <div className='flex gap-1 items-center justify-center'>
                <p className='font-bold text-sm'>130000</p>
                <div className='w-0 h-0 border-l-[5px] border-l-transparent border-l-solid border-r-[5px] border-r-transparent border-r-solid border-b-[8px] border-b-solid border-b-[#166c0d] '></div>
              </div>
          </div>
          <hr className='border-gray-500 mb-1'/>
          <div className='flex justify-between mb-5'>
          <p className='text-sm'>Unactive User</p>
              <div className='flex gap-1 items-center justify-center'>
                <p className='font-bold text-sm'>2500</p>
                <div className='w-0 h-0 border-l-[5px] border-l-transparent border-l-solid border-r-[5px] border-r-transparent border-r-solid border-t-[8px] border-t-solid border-t-[#c01d1d] '></div>
              </div>
          </div>
          <hr className='border-gray-500'/>
        </div>
      </CardContent>
    </Card>

  )
}

export default AmountUser



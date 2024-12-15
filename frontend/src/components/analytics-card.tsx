
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

const AnalyticsCard = ({ data }: any) => {
  return (
    // <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
    <Card>
      <CardHeader className=" text-gray-800 flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-normal">{data.totalUserTitle}</CardTitle>
      </CardHeader>
      <CardContent className="pb-6">
        <div className=" text-gray-800 text-2xl font-bold">{data.totalUser}</div>
        <p className="text-xs text-muted-foreground">
          +{data.totalUserGrowth}% from last month
        </p>
        <ChartContainer config={chartConfig} className="h-[80px] w-full">
          <LineChart
            data={data.graphData}
            margin={{
              top: 5,
              right: 10,
              left: 10,
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
        <div className='mt-5 text-gray-800'>
          <div className='flex justify-between mb-5'>
              <p className='text-sm'>Active Users</p>
              <div className='flex gap-3 items-center justify-center'>
                <p className='font-bold'>130000</p>
                <div className='w-0 h-0 border-l-[8px] border-l-transparent border-l-solid border-r-[8px] border-r-transparent border-r-solid border-b-[12px] border-b-solid border-b-[#166c0d] '></div>
              </div>
          </div>
          <hr className='border-gray-500 mb-1'/>
          <div className='flex justify-between mb-5'>
          <p className='text-sm'>Active Users</p>
              <div className='flex gap-3 items-center justify-center'>
                <p className='font-bold'>130000</p>
                <div className='w-0 h-0 border-l-[8px] border-l-transparent border-l-solid border-r-[8px] border-r-transparent border-r-solid border-t-[12px] border-t-solid border-t-[#c01d1d] '></div>
              </div>
          </div>
          <hr className='border-gray-500 mb-2'/>
        </div>
      </CardContent>
    </Card>

  )
}

export default AnalyticsCard



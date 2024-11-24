// "use client"


// import React from 'react'
// import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
// import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart"

// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "#2563eb",
//   },
//   mobile: {
//     label: "Mobile",
//     color: "#60a5fa",
//   },
// } satisfies ChartConfig




// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
//   { month: "July", desktop: 56, mobile: 33 },
//   { month: "August", desktop: 456, mobile: 434 },
//   { month: "September", desktop: 214, mobile: 140 },
//   { month: "October", desktop: 215, mobile: 566 },
//   { month: "November", desktop: 200, mobile: 234 },
//   { month: "December", desktop: 214, mobile: 864 },
// ]


// const Dashboard = () => {
//   return (
//     <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
//       <BarChart accessibilityLayer data={chartData}>
//         <CartesianGrid vertical={false} />
//         <XAxis
//           dataKey="month"
//           tickLine={false}
//           tickMargin={10}
//           axisLine={false}
//           tickFormatter={(value) => value.slice(0, 3)}
//         />
//          <ChartTooltip content={<ChartTooltipContent />} />
//          <ChartLegend content={<ChartLegendContent />} />
//         <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
//         <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
//       </BarChart>
//     </ChartContainer>
//   )
// }

// export default Dashboard








import AnalyticsCard from '@/components/analytics-card'
import React from 'react'
import { chartConfig, chartData, DashboardAnalyticsData, } from '../../../public/Data/data'
import { MixedBarChart } from './(component)/mixedBarChart'


const Dashboard = () => {
  const date = new Date().getFullYear()
  console.log(date)
  return (
    <>
      <h1 className='font-extrabold text-4xl mb-5 mt-5'>Dashboard</h1>
      <div className='flex gap-2 mb-4'>
        <AnalyticsCard
        tradeTitle={DashboardAnalyticsData.AgroTradeData.tradeTitle}
        tradeValue={DashboardAnalyticsData.AgroTradeData.tradeValue}
        tradeGrowth={DashboardAnalyticsData.AgroTradeData.tradeGrowth}
        data={DashboardAnalyticsData.AgroTradeData.graphData} />
        <AnalyticsCard
        tradeTitle={DashboardAnalyticsData.TradeSalesData.tradeTitle}
        tradeValue={DashboardAnalyticsData.TradeSalesData.tradeValue}
        tradeGrowth={DashboardAnalyticsData.TradeSalesData.tradeGrowth}
        data={DashboardAnalyticsData.TradeSalesData.graphData} />
        <AnalyticsCard
        tradeTitle={DashboardAnalyticsData.RetailsData.tradeTitle}
        tradeValue={DashboardAnalyticsData.RetailsData.tradeValue}
        tradeGrowth={DashboardAnalyticsData.ProjectsData.tradeGrowth}
        data={DashboardAnalyticsData.RetailsData.graphData} />
        <AnalyticsCard
        tradeTitle={DashboardAnalyticsData.ProjectsData.tradeTitle}
        tradeValue={DashboardAnalyticsData.ProjectsData.tradeValue}
        tradeGrowth={DashboardAnalyticsData.ProjectsData.tradeGrowth}
        data={DashboardAnalyticsData.ProjectsData.graphData} />
      </div>
      <MixedBarChart chartData = {chartData} chartConfig = {chartConfig}/>
    </>
  )
}

export default Dashboard
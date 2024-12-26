"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
// const chartData = [
//   { month: "January", desktop: 0 },
//   { month: "February", desktop: 305 },
//   { month: "March", desktop: 237 },
//   { month: "April", desktop: 73 },
//   { month: "May", desktop: 209 },
//   { month: "June", desktop: 214 },
//   { month: "July", desktop: 305 },
//   { month: "August", desktop: 209 },
//   { month: "September", desktop: 73 },
//   { month: "October", desktop: 237 },
//   { month: "November", desktop: 214 },
//   { month: "December", desktop: 0 },
// ]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const AnalyticsCard = ({data}: any) => {
  console.log(data)
  return (
    <Card>
      <CardHeader className="p-4">
        <CardDescription >
          <div className="flex justify-between ">
            <p>
              {data.tradeTitle}
            </p>
            <div className="flex items-center gap-2 font-medium leading-none">
              {data.tradeGrowth}%<TrendingUp className="h-[100%] w-[100%]" />
            </div>
          </div>
          <CardTitle className="font-bold text-4xl">{data.tradeValue}</CardTitle>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-1">
        <ChartContainer config={chartConfig} className='w-[100%] h-[60px]'>
          <AreaChart
            accessibilityLayer
            data={data.graphData}
            margin={{
              left: 0,
              right: 0,
              top: 40
            }}
          >
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>

            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default AnalyticsCard

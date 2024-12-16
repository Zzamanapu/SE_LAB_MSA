"use client"

import { TrendingDown, TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

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

chartData: [
    { browser: "bean", visitors: 275, fill: "var(--color-bean)" },
    { browser: "onion", visitors: 200, fill: "var(--color-onion)" },
    { browser: "potato", visitors: 187, fill: "var(--color-potato)" },
    { browser: "raddish", visitors: 173, fill: "var(--color-raddish)" },
    { browser: "chili", visitors: 90, fill: "var(--color-chili)" },
]


const chartConfig = {
    visitors: {
      label: "Price",
    },
    bean: {
      label: "Bean",
      color: "hsl(var(--chart-1))",
    },
    onion: {
      label: "Onion",
      color: "hsl(var(--chart-2))",
    },
    potato: {
      label: "Potato",
      color: "hsl(var(--chart-3))",
    },
    raddish: {
      label: "Raddish",
      color: "hsl(var(--chart-4))",
    },
    chili: {
      label: "Chilli",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig



export function MaxPriceGraph({ data}: any) {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth();
    const day = currentDate.getDay();
    // console.log(currentDate, year, month, day)
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Product Price</CardTitle>
                    <CardDescription>{year}/{month}/{day}</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <BarChart
                            accessibilityLayer
                            data={data}
                            layout="vertical"
                            margin={{
                                left: 0,
                            }}
                        >
                            <YAxis
                                dataKey="browser"
                                type="category"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) =>
                                    chartConfig[value as keyof typeof chartConfig]?.label
                                }
                            />
                            <XAxis dataKey="visitors" type="number" hide />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Bar dataKey="visitors" layout="vertical" radius={5} />
                        </BarChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col items-start gap-2 text-sm">
                    <div className="flex gap-2 font-medium leading-none">
                        Trending up by 5.2% this month <TrendingDown className="h-4 w-4" />
                    </div>
                    <div className="leading-none text-muted-foreground">
                        Showing total visitors for the last 6 months
                    </div>

                </CardFooter>
            </Card>
        </div>
    )
}

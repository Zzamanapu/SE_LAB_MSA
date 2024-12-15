"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
//     { month: "January", desktop: 186, mobile: 80, tab: 80 },
//     { month: "February", desktop: 305, mobile: 200, tab: 80 },
//     { month: "March", desktop: 237, mobile: 120, tab: 80 },
//     { month: "April", desktop: 73, mobile: 190, tab: 80 },
//     { month: "May", desktop: 209, mobile: 130, tab: 80 },
//     { month: "June", desktop: 214, mobile: 140, tab: 80 },
// ]

const TotalGrowthDataForAll = [
    { month: "January", farmer_stock: 500, farmer_sales: 380, trader_stock: 700, trader_sales: 420, wholesaler_stock: 380, wholesaler_sales: 340, },
    { month: "February", farmer_stock: 220, farmer_sales: 180, trader_stock: 440, trader_sales: 380, wholesaler_stock: 340, wholesaler_sales: 310, },
    { month: "March", farmer_stock: 220, farmer_sales: 210, trader_stock: 250, trader_sales: 150, wholesaler_stock: 310, wholesaler_sales: 120, },
    { month: "April", farmer_stock: 1020, farmer_sales: 920, trader_stock: 700, trader_sales: 580, wholesaler_stock: 500, wholesaler_sales: 380, },
    { month: "May", farmer_stock: 300, farmer_sales: 210, trader_stock: 510, trader_sales: 390, wholesaler_stock: 110, wholesaler_sales: 110, },
    { month: "June", farmer_stock: 900, farmer_sales: 780, trader_stock: 700, trader_sales: 580, wholesaler_stock: 700, wholesaler_sales: 290, },
]



const chartConfig = {
    farmer_stock: {
        label: "Farmer Stock",
        color: "hsl(var(--chart-1))",
    },
    farmer_sales: {
        label: "Farmer Sales",
        color: "hsl(var(--chart-2))",
    },
    trader_stock: {
        label: "Trader Stock",
        color: "hsl(var(--chart-1))",
    },
    trader_sales: {
        label: "Trader Sales",
        color: "hsl(var(--chart-2))",
    },
    wholesaler_stock: {
        label: "Wholesaler Stock",
        color: "hsl(var(--chart-1))",
    },
    wholesaler_sales: {
        label: "Wholesaler Sales",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export function SalesStockCombo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Bar Chart - Multiple</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={TotalGrowthDataForAll}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent />}
                        />
                        <Bar dataKey="farmer_sales" stackId='a' fill="var(--color-sales)" radius={[0, 0, 4, 4]} />
                        <Bar dataKey="farmer_stock" stackId='a' fill="var(--color-stock)" radius={[4, 4, 0, 0]} />

                        <Bar dataKey="trader_sales" stackId='b' fill="var(--color-sales)" radius={[0, 0, 4, 4]} />
                        <Bar dataKey="trader_stock" stackId='b' fill="var(--color-stock)" radius={[4, 4, 0, 0]} />

                        <Bar dataKey="wholesaler_sales" stackId='c' fill="var(--color-sales)" radius={[0, 0, 4, 4]} />
                        <Bar dataKey="wholesaler_stock" stackId='c' fill="var(--color-stock)" radius={[4, 4, 0, 0]} />

                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter>
        </Card>
    )
}

import { ChartConfig } from "@/components/ui/chart"

export const DashboardAnalyticsData = {
  AgroTradeData: {
    tradeTitle: 'AgroTrade',
    tradeValue: '152,566,568',
    tradeGrowth: 20.1,
    graphData: [

      {
        revenue: 10400,
        subscription: 240,
      },
      {
        revenue: 14405,
        subscription: 300,
      },
      {
        revenue: 9400,
        subscription: 200,
      },
      {
        revenue: 5200,
        subscription: 278,
      },
      {
        revenue: 12000,
        subscription: 189,
      },
      {
        revenue: 9600,
        subscription: 239,
      },
      {
        revenue: 11244,
        subscription: 278,
      },
      {
        revenue: 26475,
        subscription: 189,
      },
    ]
  },
  TradeSalesData: {
    tradeTitle: 'Tradesales',
    tradeValue: '78,566,25',
    tradeGrowth: 19.7,
    graphData: [

      {
        revenue: 52365,
        subscription: 240,
      },
      {
        revenue: 42456,
        subscription: 300,
      },
      {
        revenue: 8956,
        subscription: 200,
      },
      {
        revenue: 14960,
        subscription: 278,
      },
      {
        revenue: 35645,
        subscription: 189,
      },
      {
        revenue: 9654,
        subscription: 239,
      },
      {
        revenue: 23365,
        subscription: 278,
      },
      {
        revenue: 12568,
        subscription: 189,
      },
    ]
  },
  RetailsData: {
    tradeTitle: 'Retails',
    tradeValue: '56,22,564',
    tradeGrowth: 24.4,
    graphData: [

      {
        revenue: 9654,
        subscription: 240,
      },
      {
        revenue: 4256,
        subscription: 300,
      },
      {
        revenue: 39654,
        subscription: 200,
      },
      {
        revenue: 20654,
        subscription: 278,
      },
      {
        revenue: 6986,
        subscription: 189,
      },
      {
        revenue: 63256,
        subscription: 239,
      },
      {
        revenue: 7895,
        subscription: 278,
      },
      {
        revenue: 12934,
        subscription: 189,
      },
    ]
  },
  ProjectsData: {
    tradeTitle: 'Projects',
    tradeValue: '526,96,36',
    tradeGrowth: 9.0,
    graphData: [

      {
        revenue: 906,
        subscription: 240,
      },
      {
        revenue: 1294,
        subscription: 300,
      },
      {
        revenue: 965,
        subscription: 200,
      },
      {
        revenue: 8965,
        subscription: 278,
      },
      {
        revenue: 853,
        subscription: 189,
      },
      {
        revenue: 6589,
        subscription: 239,
      },
      {
        revenue: 986,
        subscription: 278,
      },
      {
        revenue: 4236,
        subscription: 189,
      },
    ]
  },
}


export const ProductPricechartData = [
  { browser: "bean", visitors: 275, fill: "var(--color-bean)" },
  { browser: "onion", visitors: 200, fill: "var(--color-onion)" },
  { browser: "potato", visitors: 187, fill: "var(--color-potato)" },
  { browser: "raddish", visitors: 173, fill: "var(--color-raddish)" },
  { browser: "chili", visitors: 90, fill: "var(--color-chili)" },
]

export const product_price_chartConfig = {
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
    label: "Chili",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig


// export const ProduceCellchartData = {
//   productTitle: 'Banana',
//   productSubtitle: 'A total buy-sell graph of last 7 days',
//   productData: [
//       { date: "2024-07-15", running: 450, swimming: 300 },
//       { date: "2024-07-16", running: 380, swimming: 420 },
//       { date: "2024-07-17", running: 520, swimming: 120 },
//       { date: "2024-07-18", running: 140, swimming: 550 },
//       { date: "2024-07-19", running: 600, swimming: 350 },
//       { date: "2024-07-20", running: 480, swimming: 400 },
//       { date: "2024-07-21", running: 480, swimming: 400 },
//     ],
//   productConfig: {
//     running: {
//       label: "Running",
//       color: "hsl(var(--chart-1))",
//     },
//     swimming: {
//       label: "Swimming",
//       color: "hsl(var(--chart-2))",
//     },
//   } satisfies ChartConfig
// }




export const ProduceCellchartData = [
  { date: "2024-07-15", produce: 450, sell: 300 },
  { date: "2024-07-16", produce: 380, sell: 420 },
  { date: "2024-07-17", produce: 520, sell: 120 },
  { date: "2024-07-18", produce: 140, sell: 550 },
  { date: "2024-07-19", produce: 600, sell: 350 },
  { date: "2024-07-20", produce: 480, sell: 400 },
]

export const produce_cell_chartConfig = {
  produce: {
    label: "Produce",
    color: "hsl(var(--chart-1))",
  },
  sell: {
    label: "Sell",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig




export const FarmerAnalyticsData = {
    tradeTitle: 'AgroTrade',
    tradeValue: '152,566,568',
    tradeGrowth: 20.1,
    graphData: [

      {
        revenue: 10400,
        subscription: 240,
      },
      {
        revenue: 14405,
        subscription: 300,
      },
      {
        revenue: 9400,
        subscription: 200,
      },
      {
        revenue: 5200,
        subscription: 278,
      },
      {
        revenue: 12000,
        subscription: 189,
      },
      {
        revenue: 9600,
        subscription: 239,
      },
      {
        revenue: 11244,
        subscription: 278,
      },
      {
        revenue: 26475,
        subscription: 189,
      },
    ]
  }

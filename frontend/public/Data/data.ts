import { ChartConfig } from "@/components/ui/chart"



//page: Dashboard (top cards)
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

//page: Dashboard (bottom products prices)
export const ProductPricechartGraph = {

  chartData: [
    { browser: "bean", visitors: 275, fill: "var(--color-bean)" },
    { browser: "onion", visitors: 200, fill: "var(--color-onion)" },
    { browser: "potato", visitors: 187, fill: "var(--color-potato)" },
    { browser: "raddish", visitors: 173, fill: "var(--color-raddish)" },
    { browser: "chili", visitors: 90, fill: "var(--color-chili)" },
  ],
  chartConfig: {
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
  
}






//---------------------------------------------------------------------------------------------------------------------
//Farmer Page
//page: Farmer (left top card)

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

//page: Farmer (Right top card)
export const NumberOfUserFarmer = {
  type: 'Farmer',
  number: 281,
  growth: 20
}

//page: Farmer (Bottom cards)
export const ProduceCellDataFarmer = {
  graph1: {
    title: "Potato",
    chartData: [
      { date: "2024-07-15", produce: 450, sell: 300 },
      { date: "2024-07-16", produce: 380, sell: 420 },
      { date: "2024-07-17", produce: 562, sell: 562 },
      { date: "2024-07-18", produce: 865, sell: 125 },
      { date: "2024-07-19", produce: 125, sell: 451 },
      { date: "2024-07-20", produce: 634, sell: 400 },
    ]
  },
  graph2: {
    title: "Bean",
    chartData: [
      { date: "2024-07-15", produce: 450, sell: 300 },
      { date: "2024-07-16", produce: 451, sell: 562 },
      { date: "2024-07-17", produce: 125, sell: 634 },
      { date: "2024-07-18", produce: 140, sell: 550 },
      { date: "2024-07-19", produce: 564, sell: 451 },
      { date: "2024-07-20", produce: 480, sell: 125 },
    ]
  },
  graph3: {
    title: "Ladies Finger",
    chartData: [
      { date: "2024-07-15", produce: 562, sell: 300 },
      { date: "2024-07-16", produce: 380, sell: 420 },
      { date: "2024-07-17", produce: 634, sell: 50 },
      { date: "2024-07-18", produce: 125, sell: 550 },
      { date: "2024-07-19", produce: 564, sell: 451 },
      { date: "2024-07-20", produce: 480, sell: 562 },
    ],
  },

}

//page: Farmer & trader and wholesales (Bottom cards) config
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





//------------------------------------------------------------------------------------------------
//Trader Page

//page: Trader (left top card)
export const TraderAnalyticsData = {
  tradeTitle: 'Tradesales',
  tradeValue: '696,566,125',
  tradeGrowth: 5.1,
  graphData: [

    {
      revenue: 26421,
      subscription: 240,
    },
    {
      revenue: 14405,
      subscription: 300,
    },
    {
      revenue: 25615,
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
      revenue: 96586,
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

//page: Trader (Right top card)
export const NumberOfUserTrader = {
  type: 'Trader',
  number: 650,
  growth: 18
}


//page: Trader (Bottom cards)
export const ProduceCellDataTrader = {
  graph1: {
    title: "Potato",
    chartData: [
      { date: "2024-07-15", produce: 450, sell: 300 },
      { date: "2024-07-16", produce: 380, sell: 420 },
      { date: "2024-07-17", produce: 562, sell: 562 },
      { date: "2024-07-18", produce: 865, sell: 125 },
      { date: "2024-07-19", produce: 125, sell: 451 },
      { date: "2024-07-20", produce: 634, sell: 400 },
    ]
  },
  graph2: {
    title: "Bean",
    chartData: [
      { date: "2024-07-15", produce: 450, sell: 300 },
      { date: "2024-07-16", produce: 451, sell: 562 },
      { date: "2024-07-17", produce: 125, sell: 634 },
      { date: "2024-07-18", produce: 140, sell: 550 },
      { date: "2024-07-19", produce: 564, sell: 451 },
      { date: "2024-07-20", produce: 480, sell: 125 },
    ]
  },
  graph3: {
    title: "Ladies Finger",
    chartData: [
      { date: "2024-07-15", produce: 562, sell: 300 },
      { date: "2024-07-16", produce: 380, sell: 420 },
      { date: "2024-07-17", produce: 634, sell: 50 },
      { date: "2024-07-18", produce: 125, sell: 550 },
      { date: "2024-07-19", produce: 564, sell: 451 },
      { date: "2024-07-20", produce: 480, sell: 562 },
    ]
  },

}


//------------------------------------------------------------------------------------------------
//Wholesales Page

//page: Wholesales (left top card)
export const WholesalerAnalyticsData = {
  tradeTitle: 'Wholesaler',
  tradeValue: '265,352,000',
  tradeGrowth: 81.1,
  graphData: [

    {
      revenue: 26421,
      subscription: 240,
    },
    {
      revenue: 14405,
      subscription: 300,
    },
    {
      revenue: 25615,
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
      revenue: 96586,
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

//page: Wholesales (Right top card)
export const NumberOfUserWholesaler = {
  type: 'Wholesaler',
  number: 125,
  growth: 5
}

//page: Wholesales (Bottom cards)
export const ProduceCellDataWholesaler = {
  graph1: {
    title: "Potato",
    chartData: [
      { date: "2024-07-15", produce: 450, sell: 300 },
      { date: "2024-07-16", produce: 380, sell: 420 },
      { date: "2024-07-17", produce: 562, sell: 562 },
      { date: "2024-07-18", produce: 865, sell: 125 },
      { date: "2024-07-19", produce: 125, sell: 451 },
      { date: "2024-07-20", produce: 634, sell: 400 },
    ]
  },
  graph2: {
    title: "Bean",
    chartData: [
      { date: "2024-07-15", produce: 450, sell: 300 },
      { date: "2024-07-16", produce: 451, sell: 562 },
      { date: "2024-07-17", produce: 125, sell: 634 },
      { date: "2024-07-18", produce: 140, sell: 550 },
      { date: "2024-07-19", produce: 564, sell: 451 },
      { date: "2024-07-20", produce: 480, sell: 125 },
    ]
  },
  graph3: {
    title: "Ladies Finger",
    chartData: [
      { date: "2024-07-15", produce: 562, sell: 300 },
      { date: "2024-07-16", produce: 380, sell: 420 },
      { date: "2024-07-17", produce: 634, sell: 50 },
      { date: "2024-07-18", produce: 125, sell: 550 },
      { date: "2024-07-19", produce: 564, sell: 451 },
      { date: "2024-07-20", produce: 480, sell: 562 },
    ]
  },

}

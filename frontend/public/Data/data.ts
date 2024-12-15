import { ChartConfig } from "@/components/ui/chart"
import { ITableData } from "@/interfaces/required-interfaces"



//page: Dashboard (top cards)
export const UserAnalyticsData = {
    totalUserTitle: 'Total User',
    totalUser: '156K',
    totalUserGrowth: 20.1,
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

export const DashboardAnalyticsData = {
  AgroTradeData: {
    tradeTitle: 'AgroTrade',
    tradeValue: '152,56,568',
    tradeGrowth: 20.1,
    tradeStatus: 'TrendingUp',
    graphData: [
      { month: "January", desktop: 0 },
      { month: "February", desktop: 305 },
      { month: "March", desktop: 237 },
      { month: "April", desktop: 214 },
      { month: "May", desktop: 824 },
      { month: "June", desktop: 214 },
      { month: "July", desktop: 732 },
      { month: "August", desktop: 189 },
      { month: "September", desktop: 985 },
      { month: "October", desktop: 237 },
      { month: "November", desktop: 214 },
      { month: "December", desktop: 0 },
    ],
  },
  TraderSalesData: {
    tradeTitle: 'Tradesales',
    tradeValue: '78,56,25',
    tradeGrowth: 19.7,
    tradeStatus: 'TrendingUp',
    graphData: [
      { month: "January", desktop: 0 },
      { month: "February", desktop: 305 },
      { month: "March", desktop: 189 },
      { month: "April", desktop: 73 },
      { month: "May", desktop: 209 },
      { month: "June", desktop: 102 },
      { month: "July", desktop: 305 },
      { month: "August", desktop: 209 },
      { month: "September", desktop: 73 },
      { month: "October", desktop: 214 },
      { month: "November", desktop: 214 },
      { month: "December", desktop: 0 },
    ]
  },
  RetailsData: {
    tradeTitle: 'Retails',
    tradeValue: '56,22,54',
    tradeGrowth: 24.4,
    tradeStatus: 'TrendingUp',
    graphData: [
      { month: "January", desktop: 0 },
      { month: "February", desktop: 305 },
      { month: "March", desktop: 999 },
      { month: "April", desktop: 73 },
      { month: "May", desktop: 209 },
      { month: "June", desktop: 189 },
      { month: "July", desktop: 305 },
      { month: "August", desktop: 209 },
      { month: "September", desktop: 73 },
      { month: "October", desktop: 105 },
      { month: "November", desktop: 214 },
      { month: "December", desktop: 0 },
    ]
  },
  ProjectsData: {
    tradeTitle: 'Projects',
    tradeValue: '526,96,36',
    tradeGrowth: 9.0,
    tradeStatus: 'TrendingDown',
    graphData: [
      { month: "January", desktop: 0 },
      { month: "February", desktop: 305 },
      { month: "March", desktop: 237 },
      { month: "April", desktop: 73 },
      { month: "May", desktop: 189 },
      { month: "June", desktop: 214 },
      { month: "July", desktop: 305 },
      { month: "August", desktop: 209 },
      { month: "September", desktop: 73 },
      { month: "October", desktop: 852 },
      { month: "November", desktop: 214 },
      { month: "December", desktop: 0 },
    ],

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



//------------------------------------------------------------------------------------------------
//Price Bound Report Page

//page: Price Bound Report

export const datas: ITableData[] = [
  {
    id: 1234,
    image: 'profile-pic1.jpg',
    businessman: "Md. Rahmatullah - Azim Uddin",
    IDs: "021241242154 - 114542157155",
    productName: "Potato",
    overflowPrice: 120,
    currentDate: "11 May, 2024 12: 56"
  },
  {
    id: 5678,
    image: 'profile-pic2.jpg',
    businessman: "Md. Niloy - Toushif",
    IDs: "4253356231 - 5698564756",
    productName: "Banana",
    overflowPrice: 350,
    currentDate: "18 December, 2028 07: 10"
  },
  {
    id: 3456,
    image: 'profile-pic2.jpg',
    businessman: "Md. Niloy - Toushif",
    IDs: "4253356231 - 5698564756",
    productName: "Banana",
    overflowPrice: 350,
    currentDate: "18 December, 2028 07: 10"
  }
]


//..................................................................................................
// General Report Page ID


export const selectReportActionData = {
  selectTitle: "Report Action",
  selectValues1: {
    value: "declined",
    label: "Declined"
  },
  selectValues2: {
    value: "approved",
    label: "Approved"
  }
}


export const selectStatusActionData = {
  selectTitle: "Status",
  selectValues1: {
    value: "pending",
    label: "Pending"
  },
  selectValues2: {
    value: "resolved",
    label: "Resolved"
  }
}










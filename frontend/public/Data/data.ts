import { ChartConfig } from "@/components/ui/chart"
import { ITableData } from "@/interfaces/required-interfaces"

//page: Dashboard (top cards)

//Dashboard: top cards
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

//Dashboard: sales stock
export const TotalSalesStockData = [
  { month: "January", farmer_stock: 500, farmer_sales: 380, trader_stock: 700, trader_sales: 420, wholesaler_stock: 380, wholesaler_sales: 340, },
  { month: "February", farmer_stock: 220, farmer_sales: 180, trader_stock: 440, trader_sales: 380, wholesaler_stock: 340, wholesaler_sales: 310, },
  { month: "March", farmer_stock: 220, farmer_sales: 210, trader_stock: 250, trader_sales: 150, wholesaler_stock: 310, wholesaler_sales: 120, },
  { month: "April", farmer_stock: 1020, farmer_sales: 920, trader_stock: 700, trader_sales: 580, wholesaler_stock: 500, wholesaler_sales: 380, },
  { month: "May", farmer_stock: 300, farmer_sales: 210, trader_stock: 510, trader_sales: 390, wholesaler_stock: 110, wholesaler_sales: 110, },
  { month: "June", farmer_stock: 900, farmer_sales: 780, trader_stock: 700, trader_sales: 580, wholesaler_stock: 700, wholesaler_sales: 290, },
]

//page: Dashboard: Max Price graph
export const ProductPricechartGraph = [
  { browser: "bean", visitors: 275, fill: "var(--color-bean)" },
  { browser: "onion", visitors: 200, fill: "var(--color-onion)" },
  { browser: "potato", visitors: 187, fill: "var(--color-potato)" },
  { browser: "raddish", visitors: 173, fill: "var(--color-raddish)" },
  { browser: "chili", visitors: 90, fill: "var(--color-chili)" },
]

//Dashboard: Number of User
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











//---------------------------------------------------------------------------------------------------------------------
//Farmer Page
//page: Farmer: Agro Trade Card

export const FarmerCardAnalyticsData = {
  tradeTitle: 'AgroTrade',
  tradeValue: '152,566,250',
  tradeGrowth: 20.1,
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
}

//page: Farmer: Number of user
export const NumberOfUserFarmer = {
  type: 'Farmer',
  number: 281,
  growth: 20
}


//Page: Farmer: active unactive user
export const FarmerUserAnalyticsData = {
  totalUserTitle: 'Total Farmer',
  totalUser: '120K',
  totalUserGrowth: 2.1,
  graphData: [

    {
      revenue: 2535,
      subscription: 240,
    },
    {
      revenue: 56856,
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
      revenue: 5681,
      subscription: 189,
    },
    {
      revenue: 9600,
      subscription: 239,
    },
    {
      revenue: 12589,
      subscription: 278,
    },
    {
      revenue: 26475,
      subscription: 189,
    },
  ]
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


//------------------------------------------------------------------------------------------------
//Trader Page

//page: Trader Analytics Card
export const TraderCardAnalyticsData = {
  tradeTitle: 'Tradesales',
  tradeValue: '696,566,125',
  tradeGrowth: 5.1,
  graphData: [
    { month: "January", desktop: 0 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 256 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 102 },
    { month: "July", desktop: 305 },
    { month: "August", desktop: 562 },
    { month: "September", desktop: 73 },
    { month: "October", desktop: 214 },
    { month: "November", desktop: 125 },
    { month: "December", desktop: 0 },
  ]
}

//page: Trader Number of user trader
export const NumberOfUserTrader = {
  type: 'Trader',
  number: 650,
  growth: 18
}


//Page: Trader: active unactive user
export const TraderUserAnalyticsData = {
  totalUserTitle: 'Total Trader',
  totalUser: '10K',
  totalUserGrowth: 9.1,
  graphData: [

    {
      revenue: 2535,
      subscription: 240,
    },
    {
      revenue: 56856,
      subscription: 4546,
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
      revenue: 5681,
      subscription: 25631,
    },
    {
      revenue: 9600,
      subscription: 239,
    },
    {
      revenue: 12589,
      subscription: 278,
    },
    {
      revenue: 5365,
      subscription: 189,
    },
  ]
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










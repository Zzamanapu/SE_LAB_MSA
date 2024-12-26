

const DashboardPageData = {
    DashboardAnalyticsData: {
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

    },

    TotalSalesStockData: [
        { month: "January", farmer_stock: 500, farmer_sales: 380, trader_stock: 700, trader_sales: 420, wholesaler_stock: 380, wholesaler_sales: 340, },
        { month: "February", farmer_stock: 220, farmer_sales: 180, trader_stock: 440, trader_sales: 380, wholesaler_stock: 340, wholesaler_sales: 310, },
        { month: "March", farmer_stock: 220, farmer_sales: 210, trader_stock: 250, trader_sales: 150, wholesaler_stock: 310, wholesaler_sales: 120, },
        { month: "April", farmer_stock: 1020, farmer_sales: 920, trader_stock: 700, trader_sales: 580, wholesaler_stock: 500, wholesaler_sales: 380, },
        { month: "May", farmer_stock: 300, farmer_sales: 210, trader_stock: 510, trader_sales: 390, wholesaler_stock: 110, wholesaler_sales: 110, },
        { month: "June", farmer_stock: 900, farmer_sales: 780, trader_stock: 700, trader_sales: 580, wholesaler_stock: 700, wholesaler_sales: 290, },
    ],

    ProductPricechartGraph: [
        { browser: "bean", visitors: 275, fill: "var(--color-bean)" },
        { browser: "onion", visitors: 200, fill: "var(--color-onion)" },
        { browser: "potato", visitors: 187, fill: "var(--color-potato)" },
        { browser: "raddish", visitors: 173, fill: "var(--color-raddish)" },
        { browser: "chili", visitors: 90, fill: "var(--color-chili)" },
    ],

    UserAnalyticsData: {
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
}
export const dashboardPageHandle = (req, res) => {
    // console.log('data passed')
    res.status(200).json({ data: DashboardPageData })
}



const FarmerPageData = {
    FarmerCardAnalyticsData: {
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
    },
    NumberOfUserFarmer: {
        type: 'Farmer',
        number: 281,
        growth: 20
    },
    FarmerUserAnalyticsData: {
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
    },
    ProduceCellDataFarmer: {
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
}

export const farmerPageHandle = (req, res) => {
    console.log('data passed')
    res.status(200).json({ data: FarmerPageData })
}


// const TraderPageData = {
//     TraderCardAnalyticsData: {
//         tradeTitle: 'Tradesales',
//         tradeValue: '696,566,125',
//         tradeGrowth: 5.1,
//         graphData: [
//             { month: "January", desktop: 0 },
//             { month: "February", desktop: 305 },
//             { month: "March", desktop: 256 },
//             { month: "April", desktop: 73 },
//             { month: "May", desktop: 209 },
//             { month: "June", desktop: 102 },
//             { month: "July", desktop: 305 },
//             { month: "August", desktop: 562 },
//             { month: "September", desktop: 73 },
//             { month: "October", desktop: 214 },
//             { month: "November", desktop: 125 },
//             { month: "December", desktop: 0 },
//         ]
//     },
//     NumberOfUserTrader: {
//         type: 'Trader',
//         number: 650,
//         growth: 18
//     },
//     TraderUserAnalyticsData = {
//         totalUserTitle: 'Total Trader',
//         totalUser: '10K',
//         totalUserGrowth: 9.1,
//         graphData: [

//             {
//                 revenue: 2535,
//                 subscription: 240,
//             },
//             {
//                 revenue: 56856,
//                 subscription: 4546,
//             },
//             {
//                 revenue: 9400,
//                 subscription: 200,
//             },
//             {
//                 revenue: 5200,
//                 subscription: 278,
//             },
//             {
//                 revenue: 5681,
//                 subscription: 25631,
//             },
//             {
//                 revenue: 9600,
//                 subscription: 239,
//             },
//             {
//                 revenue: 12589,
//                 subscription: 278,
//             },
//             {
//                 revenue: 5365,
//                 subscription: 189,
//             },
//         ]
//     },
//     ProduceCellDataTrader: {
//         graph1: {
//             title: "Potato",
//             chartData: [
//                 { date: "2024-07-15", produce: 450, sell: 300 },
//                 { date: "2024-07-16", produce: 380, sell: 420 },
//                 { date: "2024-07-17", produce: 562, sell: 562 },
//                 { date: "2024-07-18", produce: 865, sell: 125 },
//                 { date: "2024-07-19", produce: 125, sell: 451 },
//                 { date: "2024-07-20", produce: 634, sell: 400 },
//             ]
//         },
//         graph2: {
//             title: "Bean",
//             chartData: [
//                 { date: "2024-07-15", produce: 450, sell: 300 },
//                 { date: "2024-07-16", produce: 451, sell: 562 },
//                 { date: "2024-07-17", produce: 125, sell: 634 },
//                 { date: "2024-07-18", produce: 140, sell: 550 },
//                 { date: "2024-07-19", produce: 564, sell: 451 },
//                 { date: "2024-07-20", produce: 480, sell: 125 },
//             ]
//         },
//         graph3: {
//             title: "Ladies Finger",
//             chartData: [
//                 { date: "2024-07-15", produce: 562, sell: 300 },
//                 { date: "2024-07-16", produce: 380, sell: 420 },
//                 { date: "2024-07-17", produce: 634, sell: 50 },
//                 { date: "2024-07-18", produce: 125, sell: 550 },
//                 { date: "2024-07-19", produce: 564, sell: 451 },
//                 { date: "2024-07-20", produce: 480, sell: 562 },
//             ]
//         },

//     }

// }

// export const traderPageHandle = (req, res) => {
//     console.log('data passed')
//     res.status(200).json({ data: TraderPageData })
// }

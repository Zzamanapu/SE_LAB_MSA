import AnalyticsCard from '@/components/analytics-card'
import React from 'react'
import { product_price_chartConfig, ProductPricechartData, DashboardAnalyticsData, } from '../../../public/Data/data'
import { MixedBarChart } from './(_components)/mixedBarChart'
import { DuelChart } from './(_components)/duel-graph'
import { AnotherGraph } from './(_components)/another-graph'


const Dashboard = () => {
  const date = new Date().getFullYear()
  console.log(date)
  return (
    <>
      <h1 className='font-extrabold text-4xl mb-5 mt-5'>Dashboard</h1>
      <div className='flex gap-5'>
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
      <div className='flex gap-5'>
        <MixedBarChart chartData={ProductPricechartData} chartConfig={product_price_chartConfig} />
        <AnotherGraph />
      </div>

    </>
  )
}

export default Dashboard
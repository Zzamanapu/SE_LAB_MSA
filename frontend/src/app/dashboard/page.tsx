
import React from 'react'
import { DashboardAnalyticsData, ProductPricechartGraph, UserAnalyticsData } from '../../../public/Data/data'
import { MaxPriceGraph } from './(_components)/max-price-graph'
import { DuelChart } from './(_components)/duel-graph'

import NewGraph from '@/components/new-graph'
import { SalesStockCombo } from './(_components)/another-graph'
import AnalyticsCard from '@/components/analytics-card'


const Dashboard = () => {
  const date = new Date().getFullYear()
  console.log(date)
  return (
    <>
      <div className='w-[100%]'>
        <div className='grid grid-cols-8 auto-rows-auto gap-3'>
          <div className='col-span-8'>
            <h1 className='font-extrabold text-4xl mb-5 mt-5'>Dashboard</h1>
          </div>
          <div className='col-span-2'>
            <NewGraph data={DashboardAnalyticsData.AgroTradeData} />
          </div>
          <div className='col-span-2'>
            <NewGraph data={DashboardAnalyticsData.TraderSalesData} />
          </div>
          <div className='col-span-2'>
            <NewGraph data={DashboardAnalyticsData.RetailsData} />
          </div>
          <div className='col-span-2'>
            <NewGraph data={DashboardAnalyticsData.ProjectsData} />
          </div>
          <div className='col-span-3'>
            <SalesStockCombo />
          </div>
          <div className='col-span-3'>
            <MaxPriceGraph chartData={ProductPricechartGraph.chartData} chartConfig={ProductPricechartGraph.chartConfig} />
          </div>
          <div className='col-span-2'>
            <AnalyticsCard data={UserAnalyticsData} />
          </div>
        </div>
      </div>

    </>
  )
}

export default Dashboard
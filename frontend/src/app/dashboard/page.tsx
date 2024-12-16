
import React from 'react'
import { DashboardAnalyticsData, TotalSalesStockData, UserAnalyticsData, ProductPricechartGraph } from '../../../public/Data/data'
import { MaxPriceGraph } from './(_components)/max-price-graph'
import { DuelChart } from './(_components)/duel-graph'
import AmountUser from '@/components/amount-user'
import AnalyticsCard from '@/components/analytics-card'
import { SalesStockCombo } from './(_components)/sales-stock-combo'


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
            <AnalyticsCard data={DashboardAnalyticsData.AgroTradeData} />
          </div>
          <div className='col-span-2'>
            <AnalyticsCard data={DashboardAnalyticsData.TraderSalesData} />
          </div>
          <div className='col-span-2'>
            <AnalyticsCard data={DashboardAnalyticsData.RetailsData} />
          </div>
          <div className='col-span-2'>
            <AnalyticsCard data={DashboardAnalyticsData.ProjectsData} />
          </div>
          <div className='col-span-3'>
            <SalesStockCombo data={TotalSalesStockData} />
          </div>
          <div className='col-span-3'>
            <MaxPriceGraph data={ProductPricechartGraph} />
          </div>
          <div className='col-span-2'>
            <AmountUser data={UserAnalyticsData} />
          </div>
        </div>
      </div>

    </>
  )
}
export default Dashboard
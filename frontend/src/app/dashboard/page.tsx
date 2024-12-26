'use client'
import React, { useEffect, useState } from 'react'
// import { DashboardAnalyticsData, TotalSalesStockData, UserAnalyticsData, ProductPricechartGraph } from '../../../public/Data/data'
import { MaxPriceGraph } from './(_components)/max-price-graph'
import AmountUser from '@/components/amount-user'
import AnalyticsCard from '@/components/analytics-card'
import { SalesStockCombo } from './(_components)/sales-stock-combo'
import { dashboardPageDataHandle } from '@/services/dashboard'


const Dashboard = () => {

  const date = new Date().getFullYear()

  const [DashboardData, SetDashboardData] = useState<any>(undefined);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await dashboardPageDataHandle()
      // console.log(data)
      SetDashboardData(data)
    }
    fetchData()
  }, [])


  if (DashboardData) {
    return (
      <>
        <div>
          <div className='grid grid-cols-8 auto-rows-auto gap-3'>
            <div className='col-span-8'>
              <h1 className='font-extrabold text-4xl mb-5 mt-5'>Dashboard</h1>
            </div>
            <div className='col-span-2'>
              <AnalyticsCard data={DashboardData?.DashboardAnalyticsData.AgroTradeData} />
            </div>
            <div className='col-span-2'>
              <AnalyticsCard data={DashboardData?.DashboardAnalyticsData.TraderSalesData} />
            </div>
            <div className='col-span-2'>
              <AnalyticsCard data={DashboardData?.DashboardAnalyticsData.RetailsData} />
            </div>
            <div className='col-span-2'>
              <AnalyticsCard data={DashboardData?.DashboardAnalyticsData.ProjectsData} />
            </div>
            <div className='col-span-3'>
              <SalesStockCombo data={DashboardData?.TotalSalesStockData} />
            </div>
            <div className='col-span-3'>
              <MaxPriceGraph data={DashboardData?.ProductPricechartGraph} />
            </div>
            <div className='col-span-2'>
              <AmountUser data={DashboardData?.UserAnalyticsData} />
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (<></>)
  }
}
export default Dashboard
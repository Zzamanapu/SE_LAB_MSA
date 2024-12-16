
import { ProductSellGraph } from '@/components/produce-sell-graph'
import React from 'react'
import { FarmerCardAnalyticsData, NumberOfUserFarmer, ProduceCellDataFarmer, DashboardAnalyticsData, FarmerUserAnalyticsData } from '../../../public/Data/data'
import NumberOfUser from '@/components/number-of-user'
import AnalyticsCard from '@/components/analytics-card'
import AmountUser from '@/components/amount-user'


const Farmer = () => {
  return (

    <>
      <div className='w-[100%]'>
        <div className='grid grid-cols-8 auto-rows-auto gap-3'>
          <div className='col-span-8'>
            <h1 className='font-extrabold text-4xl mb-5 mt-5'>Farmer</h1>
          </div>
          <div className='col-span-2'>
            <AnalyticsCard data={FarmerCardAnalyticsData} />
          </div>
          <div className='col-span-2'>
            <NumberOfUser data={NumberOfUserFarmer} />
          </div>
          <div className='row-span-2 col-span-2'>
            <AmountUser data={FarmerUserAnalyticsData} />
          </div>
          <div className='col-span-2'>
            <ProductSellGraph data={ProduceCellDataFarmer.graph1} />
          </div>
          <div className='col-span-2'>
            <ProductSellGraph data={ProduceCellDataFarmer.graph2} />
          </div>
          <div className='col-span-2'>
            <ProductSellGraph data={ProduceCellDataFarmer.graph3} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Farmer
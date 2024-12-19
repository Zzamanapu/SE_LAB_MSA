import React from 'react'
import { ProductSellGraph } from '@/components/produce-sell-graph'
import { ProduceCellDataWholesaler, WholesalerAnalyticsData, NumberOfUserWholesaler, WholesalerUserAnalyticsData } from '../../../public/Data/data'

import NumberOfUser from '@/components/number-of-user'
import AnalyticsCard from '@/components/analytics-card'
import AmountUser from '@/components/amount-user'

const Wholesalers = () => {
  return (
    <>

      <div className='w-[100%]'>
        <div className='grid grid-cols-8 auto-rows-auto gap-3'>
          <div className='col-span-8'>
            <h1 className='font-extrabold text-4xl mb-5 mt-5'>Wholesalers</h1>
          </div>
          <div className='col-span-2'>
            <AnalyticsCard data={WholesalerAnalyticsData} />
          </div>
          <div className='col-span-2'>
            <NumberOfUser data={NumberOfUserWholesaler} />
          </div>
          <div className='row-span-2 col-span-2'>
            <AmountUser data={WholesalerUserAnalyticsData} />
          </div>
          <div className='col-span-2'>
            <ProductSellGraph data={ProduceCellDataWholesaler.graph1} />
          </div>
          <div className='col-span-2'>
            <ProductSellGraph data={ProduceCellDataWholesaler.graph2} />
          </div>
          <div className='col-span-2'>
            <ProductSellGraph data={ProduceCellDataWholesaler.graph3} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Wholesalers
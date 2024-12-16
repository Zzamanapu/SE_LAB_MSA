import React from 'react'
import { ProductSellGraph } from '@/components/produce-sell-graph'
import { TraderCardAnalyticsData, ProduceCellDataTrader, NumberOfUserTrader, TraderUserAnalyticsData } from '../../../public/Data/data'
import NumberOfUser from '@/components/number-of-user'
import { TraderAreaChart } from './(_components)/area-chart'
import AnalyticsCard from '@/components/analytics-card'
import AmountUser from '@/components/amount-user'


const Traders = () => {
  return (
    <>
      <div className='w-[100%]'>
        <div className='grid grid-cols-8 auto-rows-auto gap-3'>
          <div className='col-span-8'>
            <h1 className='font-extrabold text-4xl mb-5 mt-5'>Trader</h1>
          </div>
          <div className='col-span-2'>
            <AnalyticsCard data={TraderCardAnalyticsData} />
          </div>
          <div className='col-span-2'>
            <NumberOfUser data={NumberOfUserTrader} />
          </div>
          <div className='row-span-2 col-span-2'>
            <AmountUser data={TraderUserAnalyticsData} />
          </div>
          <div className='col-span-2'>
            <ProductSellGraph data={ProduceCellDataTrader.graph1} />
          </div>
          <div className='col-span-2'>
            <ProductSellGraph data={ProduceCellDataTrader.graph2} />
          </div>
          <div className='col-span-2'>
            <ProductSellGraph data={ProduceCellDataTrader.graph3} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Traders
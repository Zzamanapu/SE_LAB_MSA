import React from 'react'
import { ProductSellGraph } from '@/components/produce-sell-graph'
import { produce_cell_chartConfig, ProduceCellDataWholesaler, WholesalerAnalyticsData, NumberOfUserWholesaler } from '../../../public/Data/data'

import NumberOfUser from '@/components/number-of-user'
import AnalyticsCard from '@/components/analytics-card'

const Wholesalers = () => {
  return (
    <>
    <div className='flex mt-5'>
      <AnalyticsCard tradeTitle={WholesalerAnalyticsData.tradeTitle} tradeValue={WholesalerAnalyticsData.tradeValue} tradeGrowth={WholesalerAnalyticsData.tradeGrowth} data={WholesalerAnalyticsData.graphData} />
      <NumberOfUser type={NumberOfUserWholesaler.type} number = {NumberOfUserWholesaler.number} growth = {NumberOfUserWholesaler.growth}/>
    </div>
    <div className='flex'>
      <ProductSellGraph title={ProduceCellDataWholesaler.graph1.title} chartData={ProduceCellDataWholesaler.graph1.chartData} chartConfig={produce_cell_chartConfig} />
      <ProductSellGraph title={ProduceCellDataWholesaler.graph2.title} chartData={ProduceCellDataWholesaler.graph2.chartData} chartConfig={produce_cell_chartConfig} />
      <ProductSellGraph title={ProduceCellDataWholesaler.graph3.title} chartData={ProduceCellDataWholesaler.graph3.chartData} chartConfig={produce_cell_chartConfig} />
    </div>
  </>
  )
}

export default Wholesalers

import { ProductSellGraph } from '@/components/produce-sell-graph'
import React from 'react'
import { FarmerAnalyticsData, produce_cell_chartConfig, ProduceCellchartData } from '../../../public/Data/data'
import AnalyticsCard from '@/components/analytics-card'
import NumberOfUser from '@/components/number-of-user'

const Farmer = () => {
  return (

    <>
      <div className='flex'>
        <AnalyticsCard tradeTitle={FarmerAnalyticsData.tradeTitle} tradeValue={FarmerAnalyticsData.tradeValue} tradeGrowth={FarmerAnalyticsData.tradeGrowth} data={FarmerAnalyticsData.graphData} />
        <NumberOfUser />
      </div>
      <ProductSellGraph chartData={ProduceCellchartData} chartConfig={produce_cell_chartConfig} />
    </>



  )
}

export default Farmer
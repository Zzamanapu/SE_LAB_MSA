
import { ProductSellGraph } from '@/components/produce-sell-graph'
import React from 'react'
import { FarmerAnalyticsData, produce_cell_chartConfig, NumberOfUserFarmer, ProduceCellDataFarmer } from '../../../public/Data/data'
import NumberOfUser from '@/components/number-of-user'
import AnalyticsCard from '@/components/analytics-card'

const Farmer = () => {
  return (

    <>
      <h1 className='font-extrabold text-4xl mb-5 mt-5'>Dashboard</h1>
      <div className='flex mt-5'>
        <AnalyticsCard tradeTitle={FarmerAnalyticsData.tradeTitle} tradeValue={FarmerAnalyticsData.tradeValue} tradeGrowth={FarmerAnalyticsData.tradeGrowth} data={FarmerAnalyticsData.graphData} />
        <NumberOfUser type={NumberOfUserFarmer.type} number = {NumberOfUserFarmer.number} growth = {NumberOfUserFarmer.growth}/>
      </div>
      <div className='flex'>
      <ProductSellGraph title = {ProduceCellDataFarmer.graph1.title} chartData={ProduceCellDataFarmer.graph1.chartData} chartConfig={produce_cell_chartConfig} />
      <ProductSellGraph title = {ProduceCellDataFarmer.graph2.title} chartData={ProduceCellDataFarmer.graph2.chartData} chartConfig={produce_cell_chartConfig} />
      <ProductSellGraph title = {ProduceCellDataFarmer.graph3.title} chartData={ProduceCellDataFarmer.graph3.chartData} chartConfig={produce_cell_chartConfig} />
      </div>
    </>

  )
}

export default Farmer
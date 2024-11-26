import React from 'react'
import { ProductSellGraph } from '@/components/produce-sell-graph'
import { TraderAnalyticsData, produce_cell_chartConfig, ProduceCellDataTrader, NumberOfUserTrader } from '../../../public/Data/data'
import AnalyticsCard from '@/components/analytics-card'
import NumberOfUser from '@/components/number-of-user'
import { TraderAreaChart } from './(_components)/area-chart'


const Traders = () => {
  return (
    // <TraderAreaChart />

    <>
      <div className='flex mt-5'>
        <AnalyticsCard tradeTitle={TraderAnalyticsData.tradeTitle} tradeValue={TraderAnalyticsData.tradeValue} tradeGrowth={TraderAnalyticsData.tradeGrowth} data={TraderAnalyticsData.graphData} />
        <NumberOfUser type={NumberOfUserTrader.type} number = {NumberOfUserTrader.number} growth = {NumberOfUserTrader.growth}/>
      </div>
      <div className='flex'>
        <ProductSellGraph title={ProduceCellDataTrader.graph1.title} chartData={ProduceCellDataTrader.graph1.chartData} chartConfig={produce_cell_chartConfig} />
        <ProductSellGraph title={ProduceCellDataTrader.graph2.title} chartData={ProduceCellDataTrader.graph2.chartData} chartConfig={produce_cell_chartConfig} />
        <ProductSellGraph title={ProduceCellDataTrader.graph3.title} chartData={ProduceCellDataTrader.graph3.chartData} chartConfig={produce_cell_chartConfig} />
      </div>
    </>
  )
}

export default Traders
'use client'
import { ProductSellGraph } from '@/components/produce-sell-graph'
import React, { useEffect, useState } from 'react'
// import { FarmerCardAnalyticsData, NumberOfUserFarmer, ProduceCellDataFarmer, FarmerUserAnalyticsData } from '../../../public/Data/data'
import NumberOfUser from '@/components/number-of-user'
import AnalyticsCard from '@/components/analytics-card'
import AmountUser from '@/components/amount-user'
import { farmerPageDataHandle } from '@/services/dashboard'


const Farmer = () => {
  const [FarmerData, SetFarmerData] = useState<any>(undefined)
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await farmerPageDataHandle()
      // console.log(data)
      SetFarmerData(data)
    }
    fetchData()
  }, [])

  if (FarmerData) {
    return (
      <>
        <div className='w-[100%]'>
          <div className='grid grid-cols-8 auto-rows-auto gap-3'>
            <div className='col-span-8'>
              <h1 className='font-extrabold text-4xl mb-5 mt-5'>Farmer</h1>
            </div>
            <div className='col-span-2'>
              <AnalyticsCard data={FarmerData?.FarmerCardAnalyticsData} />
            </div>
            <div className='col-span-2'>
              <NumberOfUser data={FarmerData?.NumberOfUserFarmer} />
            </div>
            <div className='row-span-2 col-span-2'>
              <AmountUser data={FarmerData?.FarmerUserAnalyticsData} />
            </div>
            <div className='col-span-2'>
              <ProductSellGraph data={FarmerData.ProduceCellDataFarmer.graph1} />
            </div>
            <div className='col-span-2'>
              <ProductSellGraph data={FarmerData?.ProduceCellDataFarmer.graph2} />
            </div>
            <div className='col-span-2'>
              <ProductSellGraph data={FarmerData?.ProduceCellDataFarmer.graph3} />
            </div>
          </div>
        </div>
      </>
    )
  }
  else {
    <> </>
  }

}

export default Farmer
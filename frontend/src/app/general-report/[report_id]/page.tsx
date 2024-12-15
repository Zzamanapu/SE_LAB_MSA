import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'
import { Truck, FlagTriangleRight, MessageCircleWarning } from "lucide-react"
import DropDown from '@/components/drop-down'
import { selectReportActionData, selectStatusActionData } from '../../../../public/Data/data'
import { Textarea } from "@/components/ui/textarea"


const ReportDetails = ({ params }: { params: { report_id: string } }) => {
  const report_id = params.report_id
  return (
    <>
      <div>{`ReportID: ${report_id}`}</div>
      <div className='h-auto p-6 max-w-auto mr-2 mb-4 rounded-md border bg-card text-card-foreground shadow'>
        <div className='w-full grid grid-cols-2'>
          <div>
            <p className='text-lg font-bold'>Reporter</p>
            <div className='w-[500px] flex justify-start items-center'>
              <div className='h-16 w-16 bg-red-600 mr-3 rounded-md'>
                {/* <Image className=' w-full' src={`/images/${data.image}`} alt="Profile Picture" height={0} width={0} sizes='100vw'/> */}
              </div>
              <div className='text-base'>
                <p className='font-bold mb-[-4px]'>Md. Saiduzzaman Apu</p>
                <p className='mb-[-4px]'>Farmer</p>
                <p>ID: 123456789</p>
              </div>
            </div>
          </div>
          <div>
            <p className='text-lg font-bold'>Reporterted Name</p>
            <div className='w-[500px] flex justify-start items-center'>
              <div className='h-16 w-16 bg-red-600 mr-3 rounded-md'>
                {/* <Image className=' w-full' src={`/images/${data.image}`} alt="Profile Picture" height={0} width={0} sizes='100vw'/> */}
              </div>
              <div className='text-base'>
                <p className='font-bold mb-[-4px]'>Md. Saiduzzaman Apu</p>
                <p className='mb-[-4px]'>Farmer</p>
                <p>ID: 123456789</p>
              </div>
            </div>
          </div>
        </div>
        <hr className='mt-2 mb-4' />
        <div className='flex'>
          <div className='h-auto max-w-auto mr-4'>
            <p className='bg-gray-100 h-auto w-auto p-4 rounded-md mb-3'>Report Type: <span className='font-bold text-lg text-red-600'>Fraud</span></p>
            <p className='bg-gray-100 h-auto w-auto p-4 rounded-md'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio a ea iusto tempore ex cumque vero architecto, facere odit labore, neque rem ipsam accusantium beatae blanditiis ducimus minus dicta quos excepturi vitae aliquam molestias! Doloribus voluptatum ratione laboriosam quas facere tempora sit expedita nostrum dolorem molestias quod enim accusamus eveniet ipsa alias ipsum dolores odit vitae iure, totam excepturi labore, et error fugit. Consequatur laborum hic tempora atque perferendis! Placeat, vel. Sit, suscipit, at optio, dignissimos quos porro earum odio sapiente iusto ab sint. Iusto, mollitia! Pariatur repudiandae ipsum numquam aliquam exercitationem, commodi, eveniet hic totam nihil neque veritatis!
            </p>
          </div>
          <div className='w-full h-[170px]'>
            <p className='h-auto w-auto font-bold'>Attachment</p>
            <hr className='mt-2 mb-4'/>
            <div className='bg-black h-full w-full'></div>
          </div>
        </div>
      </div >
      {/* //----------------------------------------------------------------------------- */}
      <div className='h-auto p-6 max-w-auto mr-2 rounded-md border bg-card text-card-foreground shadow'>
        <p className='text-lg font-bold'>Actions</p>
        <hr className='mt-2 mb-4' />
        <div className='flex gap-5 mb-8'>
          <DropDown data = {selectReportActionData}/>
          {/* <DropDown /> */}
        </div>
        <div>
          <Textarea />
          <div className='flex items-center justify-center mt-5'>
            <Button>Submit</Button>
          </div>
        </div>

      </div >
    </>
  )
}

export default ReportDetails
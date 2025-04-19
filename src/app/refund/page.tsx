import React from 'react'

const page = () => {
  return (
    <div className='md:py-20 py-12'>
      <h2 className='text-3xl font-bold text-lightBlack font-secondary md:pb-8 pb-4 border-b'>Refund Policy</h2>
      <h3 className='md:text-2xl text-xl md:pt-16 pt-5 font-semibold text-lightBlack font-secondary md:pb-8 pb-4'>Refund policy:</h3>
      <ul className='text-lightBlack text-[20px] font-primary md:pb-4 pb-2 list-decimal'>
        <li className='md:pb-4 pb-2'>Before accepting the health card, you must read and understand the advantages/disadvantages of the health card on the web page/leaflet provided by us. The price/fee of the health card will not be refundable or refundable in any way.</li>
        <li className='md:pb-4 pb-2'>The cost/fee of the health card has to be paid only using the “Amar Sebaghar” payment gateway. “Amar Sebaghar” will not be responsible for any other means used and the service not being provided through it.</li>
        <li>No illegal transactions will be accepted through "Amar Sevaghar".</li>
      </ul>
    </div>
  )
}

export default page;
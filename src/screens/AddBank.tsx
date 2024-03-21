export default function AddBank() {
  return (
    <div>
      <button id='addBankButton'>Add Bank</button>
      <div
        id='addBank'
        className='addBank'
      >
        <div className='w-full font-bold'>Add New Bank Card</div>
        <div className='flex w-full flex-col items-center gap-2.5'>
          <div className='flex w-full flex-col gap-0.5'>
            <div className='px-0.5 text-sm font-semibold text-black'>Bank IFSC</div>
            <input
              type='text'
              name=''
              id=''
              placeholder='Enter your IFSC code'
              className='w-full rounded-[14px] border-[1.5px] border-[#FC5F0F] bg-[#FC5F0F]/5 p-3.5'
            />
          </div>
          <div className='flex w-full flex-col gap-0.5'>
            <div className='px-0.5 text-sm font-semibold text-black'>Card Holder Name</div>
            <input
              type='text'
              name=''
              id=''
              placeholder='Enter your Card Holder Name'
              className='w-full rounded-[14px] border-[1.5px] border-[#FC5F0F] bg-[#FC5F0F]/5 p-3.5'
            />
          </div>
          <div className='flex w-full flex-col gap-0.5'>
            <div className='px-0.5 text-sm font-semibold text-black'>Bank Account Number</div>
            <input
              type='text'
              name=''
              id=''
              placeholder='Enter your Bank Account Number'
              className='w-full rounded-[14px] border-[1.5px] border-[#FC5F0F] bg-[#FC5F0F]/5 p-3.5'
            />
          </div>
          <div className='flex w-full flex-col gap-0.5'>
            <div className='px-0.5 text-sm font-semibold text-black'>Bank Name</div>
            <input
              type='text'
              name=''
              id=''
              placeholder='Enter your Bank Name'
              className='w-full rounded-[14px] border-[1.5px] border-[#FC5F0F] bg-[#FC5F0F]/5 p-3.5'
            />
          </div>
        </div>
        <div className='flex w-full items-center justify-center py-3'>
          <button
            className='w-4/5 rounded-full border-[1.5px] border-[#FC5F0F] bg-[#FC5F0F] px-14 py-3 text-xs font-semibold text-white'
            id='btn'
          >
            Next
          </button>
        </div>
      </div>
      <div className='close ' id='close'>
        Close
      </div>
      
    </div>
  )
}

export default function QR() {
  return (
    <div className='flex min-h-[100dvh] items-center justify-center bg-[#FEFEFE] '>
      <div className='w-full max-w-xl flex-grow flex-col gap-4 p-5 '>
        <div className='flex items-center justify-between '>
          <div className='py-4 text-[26px] font-semibold'>UPI PAYMENT</div>
          <div className='rounded-full border border-[#FC5F0F] px-4 py-0.5 text-lg font-medium text-[#FC5F0F]'>
            15:20
          </div>
        </div>
        <div className='flex flex-col items-center justify-center py-5'>
          <img src='./img/qr.svg' alt='' className='px-14 ' />
          <img src='./img/paymentApps.png ' alt='' className='px-14' />
          <button className='flex items-center justify-center gap-2 rounded-full border-[1.5px] border-[#FC5F0F] bg-[#FC5F0F] px-16 py-2 text-xs font-normal text-white'>
            <img src='./img/downArrow.svg' alt='' className='w-7' />
            <div>DOWNLOAD QR</div>
          </button>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex w-full flex-col gap-1'>
            <div className='text-sm font-semibold opacity-45'>UPI ID</div>
            <div className='flex w-full items-center justify-end gap-3 rounded-[14px] border-[1.5px] border-[#FC5F0F] bg-[#FC5F0F]/5 px-3.5 py-3.5 '>
              <input
                type='text'
                className='w-full border-none bg-transparent text-lg font-semibold text-black outline-none'
                placeholder='Enter your UPI ID'
              />
              <img src='./icons/copyText.svg' alt='' className='w-[22px] ' />
            </div>
          </div>
          <div className='flex w-full flex-col gap-1'>
            <div className='text-sm font-semibold opacity-45'>Amount</div>
            <div className='flex w-full items-center justify-end gap-3 rounded-[14px] border-[1.5px] border-[#FC5F0F] bg-[#FC5F0F]/5 px-3.5 py-3.5 '>
              <input
                type='number'
                className='w-full border-none bg-transparent text-lg font-semibold outline-none'
                placeholder='Enter your Amount'
              />
              <img src='./icons/copyText.svg' alt='' className='w-[22px] ' />
            </div>
          </div>
          <div className='flex w-full flex-col gap-1'>
            <div className='text-sm font-semibold opacity-45'>UTR Number</div>
            <div className='flex w-full items-center justify-end gap-3 rounded-[14px] border-[1.5px] border-[#FC5F0F] bg-[#FC5F0F]/5 px-3.5 py-3.5 '>
              <input
                type='number'
                className='w-full border-none bg-transparent text-lg font-semibold outline-none'
                placeholder='Enter your UTR Number'
              />
            </div>
          </div>
        </div>
        <div className='text-2 flex h-full flex-col justify-between pt-10'>
          <div className='flex w-full flex-col items-center justify-center gap-3'>
            <button className='w-full rounded-xl bg-[#FC5F0F] py-4 text-base font-normal text-white'>Pay Now</button>
            <div className='flex items-center justify-center gap-2'>
              <img src='./icons/lock.svg' alt='' className='w-5' />
              <div className='text-sm text-[#35D49C]'>Your payment is secured</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

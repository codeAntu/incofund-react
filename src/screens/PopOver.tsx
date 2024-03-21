import React from 'react'

export default function PopOver() {
  return (
    // <div classNameName='flex h-[100dvh] items-center justify-center '>
    //   <div classNameName='flex w-10/12 flex-col items-center gap-20 rounded-3xl border bg-white p-5 backdrop-blur-2xl '>
    //     <div classNameName='flex flex-col items-center gap-1 text-center'>
    //       <img src='./icons/telegram.svg' alt='' classNameName='aspect-square w-[65px]' />
    //       <div classNameName='text-sm font-semibold'>Join our Telegram community</div>
    //       <div classNameName='text-xs font-semibold text-black/40'>
    //         Join our lively Telegram community for discussions and updates today!
    //       </div>
    //     </div>
    //     <button classNameName='w-4/5 rounded-full border-[1.5px] border-[#FC5F0F] bg-[#FC5F0F] px-14 py-3 text-xs font-medium text-white outline-none'>
    //       Join
    //     </button>
    //   </div>
    // </div>
    <div>
      <button id='popUpBtn'>Pop Up</button>
      <div
        id='popUp'
        className='fixed z-30 left-0 top-0 hidden h-[100dvh] w-full items-center justify-center bg-black/20'
      >
        <div className='flex w-10/12 flex-col items-center gap-8 rounded-3xl border bg-white px-5 py-6 backdrop-blur-2xl'>
          <div className='flex w-full flex-col items-center gap-3 text-center'>
            <div className='text-2xl font-semibold' id='text'>
              Exchange
            </div>

            <div className='text-sm font-semibold text-black/40'>Please enter a valid redemption code to redeem</div>
            <input
              type='text'
              name=''
              id=''
              placeholder='Input Redeem Code'
              className='w-full rounded-2xl border-[1.5px] border-[#FC5F0F] bg-[#FC5F0F]/5 p-3'
            />
          </div>

          <div className='flex w-full flex-col items-center gap-3'>
            <button
              className='w-full rounded-full border-[1.5px] border-[#FC5F0F] bg-[#FC5F0F]/5 px-14 py-3 text-xs font-semibold text-[#FC5F0F]'
              id='btn1'
            >
              Cancel
            </button>
            <button
              className='w-full rounded-full border-[1.5px] border-[#FC5F0F] bg-[#FC5F0F] px-14 py-3 text-xs font-medium text-white outline-none'
              id='btn2'
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

export default function PopOver() {
  return (
    // <div className NameName='flex h-[100dvh] items-center justify-center '>
    //   <div className NameName='flex w-10/12 flex-col items-center gap-20 rounded-3xl border bg-white p-5 backdrop-blur-2xl '>
    //     <div className NameName='flex flex-col items-center gap-1 text-center'>
    //       <img src='./icons/telegram.svg' alt='' className NameName='aspect-square w-[65px]' />
    //       <div className NameName='text-sm font-semibold'>Join our Telegram community</div>
    //       <div className NameName='text-xs font-semibold text-black/40'>
    //         Join our lively Telegram community for discussions and updates today!
    //       </div>
    //     </div>
    //     <button className NameName='w-4/5 rounded-full border-[1.5px] border-[#FC5F0F] bg-[#FC5F0F] px-14 py-3 text-xs font-medium text-white outline-none'>
    //       Join
    //     </button>
    //   </div>
    // </div>
    // <div>
    //   <button id='popUpBtn'>Pop Up</button>
    //   <div
    //     id='popUp'
    //     className Name='fixed z-30 left-0 top-0 hidden h-[100dvh] w-full items-center justify-center bg-black/20'
    //   >
    //     <div className Name='flex w-10/12 flex-col items-center gap-8 rounded-3xl border bg-white px-5 py-6 backdrop-blur-2xl'>
    //       <div className Name='flex w-full flex-col items-center gap-3 text-center'>
    //         <div className Name='text-2xl font-semibold' id='text'>
    //           Exchange
    //         </div>

    //         <div className Name='text-sm font-semibold text-black/40'>Please enter a valid redemption code to redeem</div>
    //         <input
    //           type='text'
    //           name=''
    //           id=''
    //           placeholder='Input Redeem Code'
    //           className Name='w-full rounded-2xl border-[1.5px] border-[#FC5F0F] bg-[#FC5F0F]/5 p-3'
    //         />
    //       </div>

    //       <div className Name='flex w-full flex-col items-center gap-3'>
    //         <button
    //           className Name='w-full rounded-full border-[1.5px] border-[#FC5F0F] bg-[#FC5F0F]/5 px-14 py-3 text-xs font-semibold text-[#FC5F0F]'
    //           id='btn1'
    //         >
    //           Cancel
    //         </button>
    //         <button
    //           className Name='w-full rounded-full border-[1.5px] border-[#FC5F0F] bg-[#FC5F0F] px-14 py-3 text-xs font-medium text-white outline-none'
    //           id='btn2'
    //         >
    //           Ok
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div id='popUp' className='fixed left-0 top-0 z-30 h-[100dvh] w-full items-center justify-center bg-black/20'>
      <div className='flex w-10/12 flex-col items-center gap-8 rounded-3xl border bg-white px-5 py-6 backdrop-blur-2xl'>
        <div className='flex flex-col items-center gap-1 pt-3 text-center'>
          <div className='text-2xl font-semibold' id='text'>
            PopUp
          </div>
          <div className='text-[15px] font-semibold text-black/40' id='message'>
            PopUp text
          </div>
        </div>
        <div className='flex w-full flex-col items-center gap-3'>
          <button
            className='hidden w-full rounded-full border-[1.5px] border-[#FC5F0F] bg-[#FC5F0F] px-14 py-3 text-xs font-medium text-white outline-none'
            id='btn1'
          >
            Ok
          </button>
          <button
            className='hidden w-full rounded-full border-[1.5px] border-[#FC5F0F] bg-[#FC5F0F]/5 px-14 py-3 text-xs font-semibold text-[#FC5F0F]'
            id='btn2'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

export default function PopOver() {
  return (
    <div className='flex h-[100dvh] items-center justify-center '>
      <div className='flex w-10/12 flex-col items-center gap-20 rounded-3xl border bg-white p-5 backdrop-blur-2xl '>
        <div className='flex flex-col items-center gap-1 text-center'>
          <img src='./icons/telegram.svg' alt='' className='aspect-square w-[65px]' />
          <div className='text-sm font-semibold'>Join our Telegram community</div>
          <div className='text-xs font-semibold text-black/40'>
            Join our lively Telegram community for discussions and updates today!
          </div>
        </div>
        <button className='w-4/5 rounded-full border-[1.5px] border-[#FC5F0F] bg-[#FC5F0F] px-14 py-3 text-xs font-medium text-white outline-none'>
          Join
        </button>
      </div>
    </div>
  )
}

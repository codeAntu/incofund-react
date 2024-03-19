import React from 'react'

export default function PopOver() {
  return (


    // this is not the actual code,

    <div className='flexCenter h-[100dvh] bg-black/20'>
      {/* <div className='flex w-[85%] flex-col items-center gap-8 rounded-[32px] bg-white p-5'>
        <div className='flex flex-col items-center gap-1 text-center'>
          <img src='./icons/telegram.svg' alt='' className='aspect-square w-[65px]' />
          <div className='text-sm font-semibold'>Join our Telegram community</div>
          <div className='text-xs font-semibold text-black/40'>
            Join our lively Telegram community for discussions and updates today!
          </div>
        </div>
        <button className='buttonRounded w-[80%]'>Join</button>
      </div> */}

      <div className='flex w-[85%] flex-col items-center gap-8 rounded-[32px] bg-white p-5'>
        <div className='text-sm font-semibold'>Exchange</div>
        <div className='flex flex-col items-center gap-1 text-center'>
          <div className='text-xs font-semibold text-black/40'>Please enter a valid redemption code to redeem</div>
          <input type='text' name='' id='' />
        </div>
        <div>
          <button className='buttonRounded w-[80%]'>Join</button>
        </div>
      </div>
    </div>
  )
}

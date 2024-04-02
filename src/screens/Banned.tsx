export default function Banned() {
  return (
    <div id='popUp' className='fixed left-0 top-0 z-30 h-[100dvh] w-full items-center justify-center bg-black/20'>
      <div className='flex w-10/12 flex-col items-center gap-8 rounded-3xl border bg-white px-8 py-6 backdrop-blur-2xl'>
        <img src='./icons/banned.png' alt='' className='w-24' />
        <div className='flex flex-col items-center gap-1 text-center'>
          <div className='text-sm font-semibold' id='text'>
            Your account has been suspended
          </div>
          <div className='text-xs font-semibold leading-tight text-black/40' id='message'>
            Your account has been suspended for violating our community guidelines. We previously sent you an email
            explaining why and how to appeal. If you have questions, get in touch with us.
          </div>
        </div>
        <div className='flex w-full flex-col items-center gap-3'>
          <button
            className='w-full rounded-full border-[1.5px] border-[#FC5F0F] bg-[#FC5F0F] px-14 py-2.5 text-sm font-medium text-white outline-none'
            id='btn1'
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}

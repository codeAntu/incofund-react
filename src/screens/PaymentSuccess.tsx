export default function PaymentSuccess() {
  return (
    <div id='popUp' className='fixed left-0 top-0 z-30 h-[100dvh] w-full items-center justify-center bg-black/20'>
      <div className='flex w-10/12 flex-col items-center gap-8 rounded-3xl border bg-white px-8 py-6 backdrop-blur-2xl'>
        <img src='./icons/success.png' alt='' className='w-24' />
        <div className='flex flex-col items-center gap-1 text-center'>
          <div className='text-xl font-semibold' id='text'>
            Success
          </div>
          <div className='text-base font-semibold leading-tight text-black/40' id='message'>
            Your payment is successful
          </div>
        </div>
        <div className='flex w-full flex-col items-center gap-3'>
          <button
            className='w-full rounded-full bg-[#35D49C] px-14 py-3 text-sm font-medium text-white outline-none'
            id='btn1'
          >
            Done
          </button>
        </div>
      </div>
    </div>
  )
}

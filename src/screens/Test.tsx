export default function Test() {
  return (
    <>
      <div
        id='popUp'
        className='absolute left-0 top-0 hidden h-[100dvh] w-full items-center justify-center bg-black/20'
      >
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
      <h1>Hello</h1>
    </>
  )
}

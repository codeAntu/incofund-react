export default function EnterCode() {
  return (
    <div className='component flexCenter'>
      <div className='maxWidth flex w-full flex-col justify-center gap-20'>
        <div className='flex flex-col items-center gap-16'>
          <img src='./icons/appIcon.svg' alt='' className='w-[60%] pt-6' />
          <div className='flex flex-col items-center justify-center gap-2'>
            <div className='text-3xl font-semibold text-accent'>Enter Code</div>
            <div className='px-10 text-center text-sm font-semibold opacity-50'>Code has been sent to +917783</div>
          </div>
        </div>
        <form action=''>
          <div className='flex flex-col gap-8 '>
            <div className='flex justify-between gap-3'>
              <input type='text' name='' id='' className='otpInput' />
              <input type='text' name='' id='' className='otpInput' />
              <input type='text' name='' id='' className='otpInput' />
              <input type='text' name='' id='' className='otpInput' />
              <input type='text' name='' id='' className='otpInput' />
              <input type='text' name='' id='' className='otpInput' />
            </div>
            <div className='flex flex-col gap-1 '>
              <div className='text-center text-sm font-semibold opacity-40'>Didn’t get OTP Code ?</div>
              <a href='' className='px-2 pb-1 text-center text-sm font-semibold text-accent opacity-90'>
                Resend Code
              </a>
            </div>
            <div className='flex flex-col gap-3'>
              <button className='button'>Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

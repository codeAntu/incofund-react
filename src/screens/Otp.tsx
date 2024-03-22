export default function Otp() {
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
          <div className='flex flex-col gap-14 '>
            <div className='flex items-center justify-between gap-3 '>
              <input type='number' maxLength={1} className='otpInput ' />
              <input type='number' maxLength={1} className='otpInput ' />
              <input type='number' maxLength={1} className='otpInput ' />
              <input type='number' maxLength={1} className='otpInput ' />
              <input type='number' maxLength={1} className='otpInput ' />
              <input type='number' maxLength={1} className='otpInput ' />
            </div>
            <div className='flexCol gap-2'>
              {' '}
              <div className='px-10 text-center text-sm font-semibold opacity-50'>Didn’t get OTP Code ?</div>
              <div className='px-10 text-center text-sm font-semibold text-accent'>Resend Code</div>
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

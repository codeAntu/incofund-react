export default function ForgotPassword() {
  return (
    <div className='component flexCenter'>
      <div className='maxWidth flex w-full flex-col justify-center gap-20'>
        <div className='flex flex-col items-center gap-16'>
          <img src='./icons/appIcon.svg' alt='' className='w-[60%] pt-6' />
          <div className='flex flex-col items-center justify-center gap-2'>
            <div className='text-3xl font-semibold text-accent'>Forget Password?</div>
            <div className='px-10 text-center text-sm font-semibold opacity-50'>
              We just need your register number to reset your password
            </div>
          </div>
        </div>
        <form action=''>
          <div className='flex flex-col gap-8 '>
            <div className='flex flex-col gap-3'>
              <div className='inputContainer'>
                <div className='inputText'>Phone Number</div>
                <div className='inputBox'>
                  <img src='./icons/phone.svg' alt='' className='inputIcon' />
                  <input type='text' className='input' placeholder='Enter your phone number' />
                </div>
              </div>
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

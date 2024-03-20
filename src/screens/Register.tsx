export default function Register() {
  return (
    <div className='font-Montserrat flex min-h-[100dvh] w-full items-center justify-center'>
      <div className='maxWidth flex w-full flex-col justify-center gap-10 p-5'>
        <form action=''>
          <div className='flex flex-col items-center gap-16'>
            <img src='./icons/appIcon.svg' alt='' className='w-[60%] pt-6' />
            <div className='flex flex-col items-center justify-center gap-2'>
              <div className='text-3xl font-semibold text-accent'>Register</div>
              <div className='text-sm font-semibold opacity-50'>Welcome to Incogroup investing app</div>
            </div>
          </div>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-3'>
              <div className='inputContainer'>
                <div className='inputText'>User Name</div>
                <div className='inputBox'>
                  <img src='./icons/phone.svg' alt='' className='inputIcon' />
                  <input type='text' className='input' placeholder='Enter your usename' />
                </div>
              </div>
              <div className='inputContainer'>
                <div className='inputText'>Phone Number</div>
                <div className='inputBox'>
                  <img src='./icons/phone.svg' alt='' className='inputIcon' />
                  <input type='text' className='input' placeholder='Enter your phone number' />
                </div>
              </div>
              <div className='inputContainer'>
                <div className='inputText'>Password</div>
                <div className='inputBox'>
                  <img src='./icons/key.svg' alt='' className='inputIcon' />
                  <input type='password' className='input ' placeholder='Enter password' />
                </div>
              </div>
              <div className='inputContainer'>
                <div className='inputText'>Referral code (optional)</div>
                <div className='inputBox'>
                  <img src='./icons/phone.svg' alt='' className='inputIcon' />
                  <input type='text' className='input' placeholder='Enter your referral code' />
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-3 pb-5'>
              <button className='button' type='submit'>
                Register
              </button>
              <a href='' className='text-center text-xs'>
                Already have an account? <span className='font-medium text-accent'>Log In</span>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

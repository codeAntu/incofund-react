import { Phone } from 'lucide-react'

export default function Login() {
  return (
    <div className='component flexCenter'>
      <div className='maxWidth flex w-full flex-col justify-center gap-16'>
        <div className='flex flex-col items-center gap-24'>
          <img src='./icons/appIcon.svg' alt='' className='w-[60%] pt-6' />
          <div className='flex flex-col items-center justify-center gap-2'>
            <div className='text-3xl font-semibold text-accent'>Welcome</div>
            <div className='text-sm font-semibold opacity-50'>Welcome to Incogroup investing app</div>
          </div>
        </div>
        <form action=''>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-3'>
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
                  <input type='password' className='input' placeholder='Enter password' />
                </div>
              </div>
              <div className='px-2 pb-1 text-right text-sm text-accent opacity-90'>
                <a href=''>Forget password?</a>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <button className='button' type='submit'>
                Log In
              </button>
              <div className='flex w-full items-center gap-1 px-2 '>
                <hr className='w-full border-[0.5px] border-black/20' />
                <p className='text-xs text-black/60'>Or</p>
                <hr className='w-full border-[0.5px] border-black/20' />
              </div>
              <button className='button2'>Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

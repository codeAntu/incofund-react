import { Phone } from 'lucide-react'

export default function Login() {
  return (
    <div className='font-Montserrat flex min-h-[100dvh] w-full items-center justify-center'>
      <div className='flex w-full max-w-[400px] flex-col justify-center gap-16 p-5 '>
        <div className='flex flex-col items-center gap-24'>
          <img src='./icons/appIcon.svg' alt='' className='w-[60%] pt-6' />
          <div className='flex flex-col items-center justify-center gap-2'>
            <div className='text-3xl font-semibold text-accent'>Welcome</div>
            <div className='text-sm font-semibold opacity-50'>Welcome to Incogroup investing app</div>
          </div>
        </div>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-1 '>
              <div className='text-sm font-semibold opacity-45'>Phone Number</div>
              <div className='flex w-full items-center rounded-[14px] border-[1.5px] border-accent bg-accent/5 px-3.5'>
                <img src='./icons/phone.svg' alt='' className='w-[22px]' />
                <input
                  type='text'
                  className='w-full bg-transparent px-3 py-4 text-sm font-semibold text-black/80 outline-none '
                  placeholder='Enter your phone number'
                />
              </div>
            </div>
            <div className='flex flex-col gap-1 '>
              <div className='text-sm font-semibold opacity-45'>Password</div>
              <div className='flex w-full items-center rounded-[14px] border-[1.5px] border-accent bg-accent/5 px-3.5'>
                <img src='./icons/key.svg' alt='' className='w-[22px]' />
                <input
                  type='password'
                  className='w-full bg-transparent px-3 py-4 text-sm font-semibold text-black/80 outline-none '
                  placeholder='Enter your phone number'
                />
              </div>
            </div>
            <div className='px-2 pb-1 text-right text-sm text-accent opacity-90'>
              <a href=''>Forget password?</a>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <button className='w-full rounded-[14px] bg-accent p-3.5 text-sm font-medium text-white'> Log In</button>
            <div className='flex w-full items-center gap-1 px-2 '>
              <hr className='w-full border-[0.5px] border-black/20' />
              <p className='text-xs text-black/60'>Or</p>
              <hr className='w-full border-[0.5px] border-black/20' />
            </div>
            <button className='w-full rounded-[14px] border-[1.5px] border-accent bg-accent/5 p-3.5 text-sm font-medium text-accent'>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

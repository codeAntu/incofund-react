import { Phone } from 'lucide-react'

export default function Login() {
  return (
    <div className='flex min-h-[100dvh] flex-col justify-center gap-8 p-5'>
      <div className='flex flex-col gap-10'>
        <div className='bg-accent p-8 text-3xl'>Helo</div>
        <div className='flex flex-col items-center justify-center gap-2 border'>
          <div className='text-3xl font-medium text-accent'>Welcome</div>
          <div className='text-sm font-medium opacity-55'>Welcome to Incogroup investing app</div>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-0.5'>
            <div className='px-1 text-sm font-medium opacity-50'>Phone Number</div>
            <div className='flex w-full items-center rounded-lg border border-accent bg-accent/10 px-2'>
              <Phone className='h-7 w-7 rounded-full bg-accent p-1.5 text-white ' />
              <input
                type='text'
                className='w-full rounded-lg bg-transparent p-4 text-sm outline-none'
                placeholder='Enter your phone number'
              />
            </div>
          </div>
          <div className='flex flex-col gap-0.5'>
            <div className='px-1 text-sm font-medium opacity-50'>Phone Number</div>
            <div className='flex w-full items-center rounded-lg border border-accent bg-accent/10 px-2'>
              <Phone className='h-7 w-7 rounded-full bg-accent p-1.5 text-white ' />
              <input
                type='text'
                className='w-full rounded-lg bg-transparent p-3.5 text-sm outline-none'
                placeholder='Enter your phone number'
              />
            </div>
          </div>
          <div className='px-2 pb-1 text-right text-sm text-accent opacity-90'>
            <a href=''>forget password?</a>
          </div>
        </div>
        <div className='mb-10 flex flex-col gap-2'>
          <button className='w-full rounded-xl bg-accent p-3.5 text-sm font-medium text-white'> Sign In</button>
          <div className='flex w-full items-center gap-1 px-2 text-black opacity-30'>
            <hr className='w-full border-t-2 border-black' />
            <p className='text-xs '>Or</p>
            <hr className='w-full border-t-2 border-black' />
          </div>
          <button className='w-full rounded-xl border-2 border-accent p-3.5 text-sm font-medium text-accent '>
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

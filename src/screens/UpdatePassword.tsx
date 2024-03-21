export default function UpdatePassword() {
  return (
    <div className='component flexCenter'>
      <div className='maxWidth flex w-full flex-col justify-center gap-20'>
        <div className='flex flex-col items-center gap-16'>
          <img src='./icons/appIcon.svg' alt='' className='w-[60%] pt-6' />
          <div className='flex flex-col items-center justify-center gap-2'>
            <div className='text-3xl font-semibold text-accent'>Update Password</div>
            <div className='px-10 text-center text-sm font-semibold opacity-50'>Just one step to get it done</div>
          </div>
        </div>
        <form action=''>
          <div className='flex flex-col gap-8 '>
            <div className='flex flex-col gap-3'>
              <div className='inputContainer'>
                <div className='inputText'>New Password</div>
                <div className='inputBox'>
                  <img src='./icons/key.svg' alt='' className='inputIcon' />
                  <input type='text' className='input' placeholder='New Password' />
                </div>
              </div>
              <div className='inputContainer'>
                <div className='inputText'>Re-type New Password</div>
                <div className='inputBox'>
                  <img src='./icons/key.svg' alt='' className='inputIcon' />
                  <input type='text' className='input' placeholder='New Password' />
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

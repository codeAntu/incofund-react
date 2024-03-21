export default function Home() {
  return (
    <div className='component pb-24'>
      <div className='maxWidth flexCol gap-6'>
        <div className='headerContainer'>
          <div className='header'>
            <img src='./icons/appIcon.svg' alt='' className='w-20' />
          </div>
          <img src='./icons/appIcon.svg' alt='' className='profilePic ' />
        </div>
        <div className='flexCol fixed bottom-24 right-3 justify-center gap-0 '>
          <div className='rounded-full bg-[#FEE4D7] p-5'>
            <img src='./icons/Check-In.svg' alt='' className='w-5' />
          </div>
          <button className='absolute -bottom-2 left-px w-full rounded-full bg-accent px-1 py-0.5 text-[10px] font-semibold text-white'>
            check in
          </button>
        </div>
        <div className='flexCol gap-5'>
          <div className='mitraCard '>
            <div className='mitraImgContainer'>
              <div className='mitraHeader'>
                Say Hello to <span>MITRA</span>
              </div>
              <div className='mitraText '>
                Redefine CX with powerful user- friendly robots that enhance engagement and capture crucial data.
              </div>
              <div className=''>
                <button className='buttonRounded'>Get Started</button>
              </div>
            </div>
            <div className='w-44'>
              <img src='./icons/robot.svg' alt='' className='' />
            </div>
          </div>
          <div className='walletCard'>
            <div className='flex items-center justify-between  '>
              <div>
                <div className='text-sm font-medium'>wallet Balance</div>
                <div className='text-3xl font-semibold text-accent'>$ 2000.00</div>
              </div>
              <div>
                <img src='./icons/wallet3.svg' alt='' className='w-8' />
              </div>
            </div>
            <div className='flex gap-3'>
              <div>
                <button className='buttonRounded px-5'>
                  <img src='./icons/wallet2.svg' alt='' className='buttonIcon' />
                  <div className='text-xs'>Recharge</div>
                </button>
              </div>
              <button className='buttonRounded2 px-5'>
                <img src='./icons/withdraw.svg' alt='' className='buttonIcon' />
                <div className='text-xs'>Withdraw</div>
              </button>
            </div>
          </div>
          <div className='inviteCard '>
            <div className='flexCol gap-4'>
              <div> Invite Friends and Earn 1500000</div>
              <div>
                <button className='inviteCardBtn'>Get more cash rewards</button>
              </div>
              <div>
                <button className='inviteCardBt2 flex-grow-0'>Invite Now</button>
              </div>
            </div>
            <div className='flexCenter w-44 '>
              <img src='./icons/man.svg' alt='' className='object-' />
            </div>
          </div>
          <div>
            <button className='buttonRounded px-4'>
              <img src='./icons/download.svg' alt='' className='buttonIcon' />
              <div>Get the application</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Profile() {
  return (
    <div className='component pb-24 '>
      <div className='maxWidth flex w-full flex-col  gap-4'>
        <div className='header '>Profile</div>
        <div className=' flex flex-col gap-8'>
          <div className='flexColCenter gap-3 py-4'>
            <div>
              <img src='./icons/appIcon.svg' alt='' className='h-24 w-24 rounded-full bg-accent/20' />
            </div>
            <div>
              <div className='text-xl font-bold'>username</div>
              <div className='text-center text-sm font-semibold text-black/40'>Id 12345678</div>
            </div>
          </div>
          <div className='myRecordCard'>
            <div className='text-xl font-bold'>My Records</div>
            <div className='flexCol w-full gap-1.5'>
              <a className='recordItem '>
                <div className='recordItemTitle'>Nickname</div>
                <div className='recordItemValue'>
                  <div>username</div>
                  <img src='./icons/rightArrow.svg' alt='' className='recordCardArrow' />
                </div>
              </a>
              <a className='recordItem '>
                <div className='recordItemTitle'>Phone Number</div>
                <div className='recordItemValue'>
                  <div>1234567890</div>
                  <img src='./icons/rightArrow.svg' alt='' className='recordCardArrow' />
                </div>
              </a>
              <a className='recordItem '>
                <div className='recordItemTitle'>Change Account Password</div>
                <div className='recordItemValue'>
                  <div></div>
                  <img src='./icons/rightArrow.svg' alt='' className='recordCardArrow' />
                </div>
              </a>
              <a className='recordItem '>
                <div className='recordItemTitle'>Change Trade Password</div>
                <div className='recordItemValue'>
                  <div></div>
                  <img src='./icons/rightArrow.svg' alt='' className='recordCardArrow' />
                </div>
              </a>
            </div>
          </div>
          <div className='flexCol gap-2'>
            <div className='optionItem'>
              <div className='flex items-center justify-between gap-3'>
                <img src='./icons/bankCard.svg' alt='' className='optionItemImg' />
                <div className='optionItemTitle'>Bank Cards</div>
              </div>
              <div>
                <img src='./icons/rightArrow.svg' alt='' className='optionItemArrow' />
              </div>
            </div>
            <div className='optionItem'>
              <div className='flex items-center justify-between gap-4'>
                <img src='./icons/vip.svg' alt='' className='optionItemImg' />
                <div className='optionItemTitle'>VIP Level</div>
              </div>
              <div>
                <img src='./icons/rightArrow.svg' alt='' className='optionItemArrow' />
              </div>
            </div>
            <div className='optionItem'>
              <div className='flex items-center justify-between gap-4'>
                <img src='./icons/logOut.svg' alt='' className='optionItemImg' />
                <div className='optionItemTitle'>Logout</div>
              </div>
              <div>
                <img src='./icons/rightArrow.svg' alt='' className='optionItemArrow' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

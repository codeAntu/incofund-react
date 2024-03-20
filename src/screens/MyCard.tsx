export default function MyCard() {
  return (
    <div className='component flex justify-center '>
      <div className='maxWidth flexCol gap-4 pr-0 '>
        <div className='header'>My Card</div>
        <div className='flex gap-4'>
          <div className='myCardPlusContainer'>
            <div className='myCardPlus'>+</div>
          </div>
          <div className='overflow-hidden'>
            <div className='myCard flexCol justify-between'>
              <div>
                <div className='muCardText'>Balance</div>
                <div className='myCardNumber'>$ 4013.90</div>
              </div>
              <div className='flexCol gap-3.5'>
                <img src='./icons/myCardIcon.svg' alt='' className='myCardIcon' />
                <div>
                  <div className='muCardText'>SBI Bank</div>
                  <div className='myCardNumber'>5401 **** **** 8510</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flexCol gap-4 pt-6'>
          <div className='text-lg font-semibold'>Cards</div>
          <label className='flex gap-6' htmlFor='card1'>
            <div className='flex items-center justify-center'>
              <input type='radio' name='card' value='credit' className='radio' id='card1' />
            </div>
            <div className='overflow-hidden'>
              <div className='myCard flexCol justify-between  '>
                <div>
                  <div className='muCardText'>Balance</div>
                  <div className='myCardNumber'>$ 4013.90</div>
                </div>
                <div className='flexCol gap-3.5'>
                  <img src='./icons/myCardIcon.svg' alt='' className='myCardIcon' />
                  <div>
                    <div className='muCardText'>SBI Bank</div>
                    <div className='myCardNumber'>5401 **** **** 8510</div>
                  </div>
                </div>
              </div>
            </div>
          </label>
          <label className='flex gap-6' htmlFor='card2'>
            <div className='flex items-center justify-center'>
              <input type='radio' name='card' value='credit' className='radio' id='card2' />
            </div>
            <div className='overflow-hidden'>
              <div className='myCard flexCol justify-between  '>
                <div>
                  <div className='muCardText'>Balance</div>
                  <div className='myCardNumber'>$ 4013.90</div>
                </div>
                <div className='flexCol gap-3.5'>
                  <img src='./icons/myCardIcon.svg' alt='' className='myCardIcon' />
                  <div>
                    <div className='muCardText'>SBI Bank</div>
                    <div className='myCardNumber'>5401 **** **** 8510</div>
                  </div>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}

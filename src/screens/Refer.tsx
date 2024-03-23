export default function Refer() {
  return (
    <div className='component pb-24'>
      <div className='maxWidth flexCol gap-6'>
        <div className='headerContainer'>
          <div className='header'>Refer</div>
          <img src='./icons/appIcon.svg' alt='' className='profilePic ' />
        </div>
        <div className='flexCol gap-8'>
          <div className='contentHeader'>And you can both save $10.</div>
          <div className='referCard'>
            <div className='referCardItem'>
              <div className='referIconRapper'>
                <img src='./icons/referIcon1.svg' alt='' className='referIcon' />
              </div>
              <div className='referTextContainer'>
                <div className='contentHeader '>Direct Recommendation</div>
                <div className='subText'>
                  You will get an additional reward of 100, and you will get 31% (when product type is ITEM) or 5% (when
                  product type in Lucky) of A's total investment.
                </div>
              </div>
            </div>
            <div className='referCardItem'>
              <div className='referIconRapper'>
                <img src='./icons/referIcon2.svg' alt='' className='referIcon' />
              </div>
              <div className='referTextContainer'>
                <div className='contentHeader'>Indirect Recommendation</div>
                <div className='subText'>
                  You will also receive a reward of 2% (when product type is ITEM) of B's total investment.
                </div>
              </div>
            </div>
            <div className='referCardItem'>
              <div className='referIconRapper'>
                <img src='./icons/referIcon3.svg' alt='' className='referIcon' />
              </div>
              <div className='referTextContainer'>
                <div className='contentHeader'>Indirect Recommendation</div>
                <div className='subText'>
                  You will also receive a reward of 2% (when product type is ITEM) of B's total investment.
                </div>
              </div>
            </div>
          </div>
          <div className='inputBox justify-between gap-2 border-none px-3 py-1.5'>
            <div className='line-clamp-1 text-sm font-medium'>https://www.telegram.com/I..</div>
            <button className='buttonRounded px-10'>Copy</button>
          </div>
          <div className='flexCenter '>
            <button className='buttonRounded px-16 '>View My Invitation</button>
          </div>
        </div>
      </div>
    </div>
  )
}

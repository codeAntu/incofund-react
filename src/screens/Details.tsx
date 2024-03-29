export default function Details() {
  return (
    <div className='component flex justify-center bg-[#F7F7F7] '>
      <div className='maxWidth flexCol flex-grow gap-4 '>
        <div className='header'>Details</div>
        <div className='content'>
          <div className='flexCol gap-5'>
            <div className='detailsCard '>
              <div className='flex items-center justify-between'>
                <div className='flexCol text-left'>
                  <div className='detailsCardTitle'>Inv. Amount</div>
                  <div className='detailsCardAmount text-[#C7C0BC]'>$100</div>
                </div>
                <div className=''>
                  <img src='./icons/arrow.svg' alt='' className='w-8' />
                </div>
                <div className='flexCol text-right'>
                  <div className='detailsCardTitle'>Return Amount</div>
                  <div className='detailsCardAmount'>$10000</div>
                </div>
              </div>
              <hr className='w-full border-black/5' />
              <div className='flex justify-between'>
                <div className='flexCol text-left'>
                  <div className='detailsCardTitle'>Returns (%)</div>
                  <div className='detailsCardText'>+17.45 %</div>
                </div>
                <div className='flexCol text-right'>
                  <div className='detailsCardTitle'>1D Returns (%)</div>
                  <div className='detailsCardText'>+1.15 %</div>
                </div>
              </div>
            </div>
            <div>
              <div className='py-3 font-semibold'>Specification</div>
              <div className='grid grid-cols-2'>
                <div className='flexCol gap-3.5 '>
                  <div className='SpecificationItem '>
                    <img src='./icons/dollar.svg' alt='' className='SpecificationCardIcon' />
                    <div className='flexCol gap-0'>
                      <div className='SpecificationItemTitle'>Inv. Amount</div>
                      <div className='SpecificationItemValue'>₹ 100.00</div>
                    </div>
                  </div>
                  <div className='SpecificationItem '>
                    <img src='./icons/clock.svg' alt='' className='SpecificationCardIcon' />
                    <div className='flexCol gap-0'>
                      <div className='SpecificationItemTitle'>For Timing</div>
                      <div className='SpecificationItemValue'>15 Days</div>
                    </div>
                  </div>
                  <div className='SpecificationItem '>
                    <img src='./icons/calendar.svg' alt='' className='SpecificationCardIcon' />
                    <div className='flexCol gap-0'>
                      <div className='SpecificationItemTitle'>Return Interval</div>
                      <div className='SpecificationItemValue'>Every Day</div>
                    </div>
                  </div>
                </div>
                <div className='flexCol gap-3.5 '>
                  <div className='SpecificationItem '>
                    <img src='./icons/return.svg' alt='' className='SpecificationCardIcon' />
                    <div className='flexCol gap-0'>
                      <div className='SpecificationItemTitle'>Total Returns (%)</div>
                      <div className='SpecificationItemValue'>+17.45 %</div>
                    </div>
                  </div>
                  <div className='SpecificationItem '>
                    <img src='./icons/return.svg' alt='' className='SpecificationCardIcon' />
                    <div className='flexCol gap-0'>
                      <div className='SpecificationItemTitle'>1D Returns (%)</div>
                      <div className='SpecificationItemValue'>+1.15 %</div>
                    </div>
                  </div>
                  <div className='SpecificationItem '>
                    <img src='./icons/clock.svg' alt='' className='SpecificationCardIcon' />
                    <div className='flexCol gap-0'>
                      <div className='SpecificationItemTitle'>Repeat Time</div>
                      <div className='SpecificationItemValue'>90 Times</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flexCenter relative w-full py-4'>
            <div className='slidText'>Slide to Invest</div>
            <input type='range' className='sliderCss' value='0' />
          </div>

          {/* for  -> You were already invested*/}
          {/* Just replace this Div */}
          {/* <div className='flexCenter relative w-full py-4 '>
            <div className='slidText text-xs'>You were already invested disable </div>
            <input type='range' className='sliderDisabled' disabled value='0' />
          </div> */}
        </div>
      </div>
    </div>
  )
}

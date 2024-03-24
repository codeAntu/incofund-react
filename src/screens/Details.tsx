export default function Details() {
  return (
    <div className='component flex justify-center  '>
      <div className='maxWidth flexCol flex-grow gap-4 '>
        <div className='header'>Details</div>
        <div className='content'>
          <div className='detailsCard '>
            <div className='flex justify-between'>
              <div className='flexCol text-left'>
                <div className='detailsCardTitle'>Inv. Amount</div>
                <div className='detailsCardAmount'>$100</div>
              </div>
              <div></div>
              <div>
                <div className='detailsCardTitle'>Return Amount</div>
                <div className='detailsCardAmount'>$10000</div>
              </div>
            </div>
            <br />
            <div className='flex justify-between'>
              <div>
                <div className='detailsCardTitle'>Returns (%)</div>
                <div className="detailsCardText">+17.45 %</div>
              </div>
              <div>
                <div className='detailsCardTitle'>1D Returns (%)</div>
                <div>+1.15 %</div>F
              </div>
            </div>
          </div>
          <div className='flexCenter w-full py-4'>
            <button className='buttonRounded w-2/3'>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  )
}

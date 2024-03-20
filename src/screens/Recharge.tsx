export default function Recharge() {
  return (
    <div className='component flexCenter'>
      <div className='maxWidth flexCol gap-2'>
        <div className='header '>Recharge</div>
        <div className='flexCol gap-5'>
          <div className='flexCol gap-1'>
            <div className='inputText'>Deposit Amount</div>
            <div className='inputBox'>
              <input type='text' placeholder='Enter Deposit Amount' className='input' />
            </div>
            <div className='text-sm font-medium text-black/30'>Withdraw Amount: ₹15.00</div>
          </div>
          <div className='flexCol gap-2 '>
            <div className='inputText '>Quick Options</div>
            <div className='buttonRadio '>
              <input type='radio' id='780' name='quick-opt' className='radioHidden' />
              <label htmlFor='780' className=''>
                <div className='option'>780</div>
              </label>
              <input type='radio' id='2000' name='quick-opt' className='radioHidden' />
              <label htmlFor='2000' className=''>
                <div className='option'>2000</div>
              </label>
              <input type='radio' id='5000' name='quick-opt' className='radioHidden' />
              <label htmlFor='5000' className=''>
                <div className='option'>5000</div>
              </label>
              <input type='radio' id='10000' name='quick-opt' className='radioHidden' />
              <label htmlFor='10000' className=''>
                <div className='option'>10000</div>
              </label>
              <input type='radio' id='20000' name='quick-opt' className='radioHidden' />
              <label htmlFor='20000' className=''>
                <div className='option'>20000</div>
              </label>
              <input type='radio' id='30000' name='quick-opt' className='radioHidden' />
              <label htmlFor='30000' className=''>
                <div className='option'>30000</div>
              </label>
              <input type='radio' id='40000' name='quick-opt' className='radioHidden' />
              <label htmlFor='40000' className=''>
                <div className='option'>40000</div>
              </label>
              <input type='radio' id='50000' name='quick-opt' className='radioHidden' />
              <label htmlFor='50000' className=''>
                <div className='option'>50000</div>
              </label>
            </div>
          </div>

          <div className='flexCol gap-2'>
            <div className='inputText '>Select the Deposit Channel</div>
            <div className='flexCol gap-3'>
              <div className='inputBox'>
                <input type='radio' id='channel1' name='radio' className='channelRadio' />
                <label htmlFor='channel1' className='channel'>
                  Pay 100-50000 (₹100 - ₹50000)
                </label>
              </div>
              <div className='inputBox'>
                <input type='radio' id='channel2' name='radio' className='channelRadio' />
                <label htmlFor='channel2' className='channel'>
                  Pay 100-50000 (₹100 - ₹50000)
                </label>
              </div>
              <div className='inputBox'>
                <input type='radio' id='channel3' name='radio' className='channelRadio' />
                <label htmlFor='channel3' className='channel'>
                  Pay 100-50000 (₹100 - ₹50000)
                </label>
              </div>
              <div className='inputBox'>
                <input type='radio' id='channel4' name='radio' className='channelRadio' />
                <label htmlFor='channel4' className='channel'>
                  Pay 100-50000 (₹100 - ₹50000)
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className='flexCenter pt-8 '>
          <button className='buttonRounded w-2/3'>Deposit</button>
        </div>
      </div>
    </div>
  )
}

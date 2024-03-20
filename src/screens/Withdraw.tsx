export default function Withdraw() {
  return (
    <div className='component flex justify-center  '>
      <div className='maxWidth flexCol flex-grow gap-4 '>
        <div className='header'>Withdraw</div>
        <div className='content'>
          <div className='flexCol gap-5 '>
            <div className='flexCol gap-2'>
              <div className='inputContainer'>
                <div className='inputText'>Withdraw Amount</div>
                <div className='inputBox'>
                  <input type='text' className='input' placeholder='Enter Withdraw Amount' />
                </div>
              </div>
              <div>Withdraw Amount: ₹0.00</div>
              <div className='inputContainer'>
                <div className='inputText'>Trade Password</div>
                <div className='inputBox'>
                  <input type='text' className='input' placeholder='Please Enter Trade Password' />
                </div>
              </div>
            </div>
            <div className='flexCol gap-2'>
              <div className='flex justify-between'>
                <div className='contentHeader'>Selected Receiving Bank Card</div>
                <a className='contentHeader text-accent'>Add Card +</a>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='50000' className='flex items-center gap-2 text-sm font-semibold text-black/80'>
                  <input type='radio' id='50000' name='quick-opt' className='radio ' />
                  <div className=''>4065000100112784 (Name)</div>
                </label>
              </div>
            </div>
            <div className='flexCol gap-2'>
              <div className='contentHeader font-medium'>Withdraw Instruction</div>
              <ul className='list-disc px-5 text-[13px] text-black/40 '>
                <li>Open the app and log in</li>
                <li>Navigate to the "Withdraw" section</li>
                <li>Select the amount, choose withdrawal method, and confirm the request</li>
              </ul>
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

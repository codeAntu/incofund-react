export default function MyTeam() {
  return (
    <div className='component flex justify-center'>
      <div className='maxWidth flexCol gap-5 '>
        <div className='header'>My Team</div>
        <div className='flexCol gap-5'>
          <div className='card gap-1.5 p-3'>
            <div className='contentHeader flex justify-between '>
              <div className=''>0</div>
              <div>₹0.00</div>
            </div>
            <div className='contentText flex justify-between '>
              <div>Quantity</div>
              <div>Total Gains</div>
            </div>
          </div>
          <div className='flex  gap-2'>
            <div className='levelSelected'>Level 1</div>
            <div className='level'>Level 2</div>
            <div className='level'>Level 3</div>
          </div>
        </div>
        <div className='py-10'>
          <img src='./icons/noInvitation.svg' alt='' className='' />
          <div className='text-center text-sm font-semibold text-accent '>No Invitation Yet</div>
        </div>
      </div>
    </div>
  )
}

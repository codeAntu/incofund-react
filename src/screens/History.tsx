export default function History() {
  return (
    <div className='component pb-24'>
      <div className='maxWidth flexCol gap-8'>
        <div className='headerContainer'>
          <div className='header'>History</div>
          <img src='./icons/appIcon.svg' alt='' className='profilePic ' />
        </div>
        <div className='grid grid-cols-2 gap-3'>
          <div className='levelSelected'>DEPOSIT</div>
          <div className='level'>WITHDRAW</div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='reportCard'>
            <div className='flex items-center justify-between'>
              <div>
                <div className='reportCardTitle'>Name</div>
                <div className=''>Code Antu</div>
              </div>
              <div className='text-right'>
                <div className='reportCardTitle'>Date</div>
                <div className=''>23-04-2024</div>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div>
                <div className='reportCardTitle'>Account</div>
                <div className=''>₹100</div>
              </div>
              <div className='text-right'>
                <div className='reportCardTitle'>Gateway</div>
                <div className=''>UPI</div>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div>
                <div className='reportCardTitle'>Platform Fee</div>
                <div className=''>₹100</div>
              </div>
              <div className='status pending'>
                <img src='./icons/pending.svg' alt='' className='statusImg' />
                <div>Pending</div>
              </div>
            </div>
          </div>
          <div className='reportCard'>
            <div className='flex items-center justify-between'>
              <div>
                <div className='reportCardTitle'>Name</div>
                <div className=''>Code Antu</div>
              </div>
              <div className='text-right'>
                <div className='reportCardTitle'>Date</div>
                <div className=''>23-04-2024</div>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div>
                <div className='reportCardTitle'>Account</div>
                <div className=''>₹100</div>
              </div>
              <div className='text-right'>
                <div className='reportCardTitle'>Gateway</div>
                <div className=''>UPI</div>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div>
                <div className='reportCardTitle'>Platform Fee</div>
                <div className=''>₹100</div>
              </div>
              <div className='status approved'>
                <img src='./icons/approved.svg' alt='' className='statusImg' />
                <div>Approved</div>
              </div>
            </div>
          </div>
          <div className='reportCard'>
            <div className='flex items-center justify-between'>
              <div>
                <div className='reportCardTitle'>Name</div>
                <div className=''>Code Antu</div>
              </div>
              <div className='text-right'>
                <div className='reportCardTitle'>Date</div>
                <div className=''>23-04-2024</div>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div>
                <div className='reportCardTitle'>Account</div>
                <div className=''>₹100</div>
              </div>
              <div className='text-right'>
                <div className='reportCardTitle'>Gateway</div>
                <div className=''>UPI</div>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div>
                <div className='reportCardTitle'>Platform Fee</div>
                <div className=''>₹100</div>
              </div>
              <div className='status rejected'>
                <img src='./icons/rejected.svg' alt='' className='statusImg' />
                <div>Rejected</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

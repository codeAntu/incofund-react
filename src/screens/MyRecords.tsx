export default function MyRecords() {
  return (
    <div className='component'>
      <div className='maxWidth'>
        <div className='header'>My Records</div>
        <div className='grid grid-cols-2 gap-x-3.5 gap-y-3.5 py-5'>
          <a className='recordCard'>
            <img src='./icons/rupee.svg' alt='' className='recordCardImg' />
            <div className='recordCardTitle'>Balance Records</div>
          </a>
          <a className='recordCard'>
            <img src='./icons/wallet.svg' alt='' className='recordCardImg' />
            <div className='recordCardTitle'>Deposit Rewards</div>
          </a>
          <a className='recordCard'>
            <img src='./icons/withdraw.svg' alt='' className='recordCardImg' />
            <div className='recordCardTitle'>Withdraw Rewards</div>
          </a>
          <a className='recordCard'>
            <img src='./icons/earning.svg' alt='' className='recordCardImg' />
            <div className='recordCardTitle'>Earning Rewards</div>
          </a>
          <a className='recordCard'>
            <img src='./icons/commission.svg' alt='' className='recordCardImg' />
            <div className='recordCardTitle'>Commission Records</div>
          </a>
          <a className='recordCard'>
            <img src='./icons/rewards.svg' alt='' className='recordCardImg' />
            <div className='recordCardTitle'>Rewards Records</div>
          </a>
        </div>
      </div>
    </div>
  )
}

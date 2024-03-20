export default function Menu() {
  return (
    <div className='component '>
      <div className='maxWidth relative'>
        <div className='menu'>
          <div className='flexCol gap-10'>
            <div>
              <img src='./icons/appIcon.svg' alt='' className='w-24' />
            </div>
            <div className='menuItems'>
              <a className='menuItemActive'>
                <img src='./icons/business.svg' alt='' className='menuItemIcon' />
                <div>Our Business</div>
              </a>
              <a className='menuItem'>
                <img src='./icons/messages.svg' alt='' className='menuItemIcon' />
                <div>Messages</div>
              </a>
              <a className='menuItem'>
                <img src='./icons/exchange.svg' alt='' className='menuItemIcon' />
                <div>Exchange</div>
              </a>
              <a className='menuItem'>
                <img src='./icons/task.svg' alt='' className='menuItemIcon' />
                <div>Our Task</div>
              </a>
              <a className='menuItem'>
                <img src='./icons/team.svg' alt='' className='menuItemIcon' />
                <div>My Team</div>
              </a>
              <a className='menuItem'>
                <img src='./icons/support.svg' alt='' className='menuItemIcon' />
                <div>24/7 Support</div>
              </a>
              <a className='menuItem'>
                <img src='./icons/policy.svg' alt='' className='menuItemIcon' />
                <div>Policy</div>
              </a>
            </div>
          </div>
          <a className='flex items-center gap-3 px-5 text-sm font-semibold text-accent'>
            <img src='./icons/logOut.svg' alt='' />
            <div>LogOut</div>
          </a>
        </div>
        <div className='menuHide'></div>
      </div>
    </div>
  )
}

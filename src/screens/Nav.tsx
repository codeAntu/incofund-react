export default function Nav() {
  return (
    <div className='component'>
      <div className='maxWidth relative border bg-accent'>
        <div className='nav'>
          <a href='#home' className='navItem '>
            <img src='./icons/home.svg' alt='' className='navIcon' />
            <div className='navTextActive'>Home</div>
          </a>
          <a href='#home' className='navItem '>
            <img src='./icons/product.svg' alt='' className='navIcon' />
            <div className='navText'>Product</div>
          </a>
          <a href='#home' className='navItem '>
            <img src='./icons/refer.svg' alt='' className='navIcon' />
            <div className='navText'>Refer</div>
          </a>
          <a href='#home' className='navItem '>
            <img src='./icons/wallet3.svg' alt='' className='navIcon' />
            <div className='navText'>Wallet</div>
          </a>
        </div>
      </div>
    </div>
  )
}

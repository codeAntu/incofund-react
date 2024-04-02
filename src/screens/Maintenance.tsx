export default function Maintenance() {
  return (
    <div className='component flexCenter bg-[#F7F7F7]'>
      <div className='maxWidth flex w-full flex-col items-center gap-20 '>
        <img src='./icons/maintenance.svg' alt='' />
        <div className='flex flex-col gap-2.5 text-center'>
          <div className='text-lg font-bold '>APP UNDER MAINTENANCE</div>
          <div className='text-xs font-semibold text-black/25'>Something is wrong. Try again after sometime</div>
        </div>
        <button className='button '>Try Again</button>
      </div>
    </div>
  )
}

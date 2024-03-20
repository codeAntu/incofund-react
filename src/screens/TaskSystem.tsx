export default function TaskSystem() {
  return (
    <div className='component flex justify-center'>
      <div className='maxWidth flex w-full flex-col gap-0'>
        <div className='headerContainer'>
          <div className='header'>Task System</div>
          <img src='./icons/appIcon.svg' alt='' className='profilePic ' />
        </div>
        <div>
          <div className='px-0.5 py-4  text-lg font-semibold'>Do tasks to get more rewards</div>
          <div className='flexCol gap-3.5'>
            <div className='taskCard '>
              <div className='contentHeader'>Invite to activate 10</div>
              <div className='contentText'>
                By sharing, when the member you recommend reaches VIP1 or above, success +10. Additional rewards 50(when
                you reach the goal, you can receive the bonus here every day)
              </div>
              <div className='flexCol gap-1 py-1'>
                <div className='taskBar'></div>
                <div className='flex items-center justify-between px-0.5'>
                  <div className='taskBarText'>You have successfully invite 1 friends</div>
                  <div className='taskStatus'>1 / 10 </div>
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <button className='buttonRounded w-[92%]'>Confirm</button>
              </div>
            </div>
            <div className='taskCard '>
              <div className='contentHeader'>Invite to activate 10</div>
              <div className='contentText'>
                By sharing, when the member you recommend reaches VIP1 or above, success +10. Additional rewards 50(when
                you reach the goal, you can receive the bonus here every day)
              </div>
              <div className='flexCol gap-1 py-1'>
                <div className='taskBar'></div>
                <div className='flex items-center justify-between px-0.5'>
                  <div className='taskBarText'>You have successfully invite 1 friends</div>
                  <div className='taskStatus'>1 / 10 </div>
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <button className='buttonRounded w-[92%]'>Confirm</button>
              </div>
            </div>
            <div className='taskCard '>
              <div className='contentHeader'>Invite to activate 10</div>
              <div className='contentText'>
                By sharing, when the member you recommend reaches VIP1 or above, success +10. Additional rewards 50(when
                you reach the goal, you can receive the bonus here every day)
              </div>
              <div className='flexCol gap-1 py-1'>
                <div className='taskBar'></div>
                <div className='flex items-center justify-between px-0.5'>
                  <div className='taskBarText'>You have successfully invite 1 friends</div>
                  <div className='taskStatus'>1 / 10 </div>
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <button className='buttonRounded w-[90%]'>Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

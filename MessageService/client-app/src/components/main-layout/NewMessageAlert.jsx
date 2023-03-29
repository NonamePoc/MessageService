import React from 'react'

function NewMessageAlert() {
  setInterval(() => {
    document.querySelector('.newMsgAlert').classList.add('active')
  }, 20000)

  setTimeout(() => {
    document.querySelector('.newMsgAlert').classList.remove('active')
  }, 1000)

  return (
    <div className='newMsgAlert active'>
      <img
        className='newMsgAlert__img'
        src='https://picsum.photos/id/235/800'
        alt='profile-img'
      />
      <div>
        <h1 className='newMsgAlert__name'>User001</h1>
        <p className='newMsgAlert__text'>New message</p>
      </div>
    </div>
  )
}

export default NewMessageAlert
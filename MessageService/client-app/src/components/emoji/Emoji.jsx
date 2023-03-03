import React from 'react'
import EmojisPicker from './EmojisPicker'
import GiphsPicker from './GiphsPicker'

const Emoji = React.memo(function Emoji() {
  const [visiblePopup, setVisiblePopup] = React.useState(false)
  const [isEmojisActive, setEmojisActive] = React.useState(true)

  const emojiRef = React.useRef()

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup)
  }
  const handleOutsideClick = (event) => {
    const path = event.composedPath && event.composedPath()
    if (!path.includes(emojiRef.current)) {
      setVisiblePopup(false)
    }
  }
  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
  }, [])
  return (
    <div ref={emojiRef}>
      <div className={`emoji__wrapper ${visiblePopup ? 'show' : ''}`}>
        <div className='emoji__wrapper__type'>
          <div
            className={`emoji__wrapper__type__emoji ${
              isEmojisActive ? 'active' : ''
            }`}
          >
            <EmojisPicker />
          </div>
          <div
            className={`emoji__wrapper__type__giph ${
              !isEmojisActive ? 'active' : ''
            }`}
          >
            <GiphsPicker />
          </div>
        </div>
        <ul className='emoji__wrapper__options'>
          <li onClick={() => setEmojisActive(true)}>😃</li>
          <li onClick={() => setEmojisActive(false)}>Giphs</li>
        </ul>
      </div>
      <button onClick={toggleVisiblePopup} className='emoji__btn'>
        <svg
          className='emoji__btn__svg'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M6.74927 12C6.53852 12 6.33749 12.0887 6.19539 12.2443C6.05329 12.4 5.98323 12.6082 6.00237 12.8181C6.28259 15.8916 8.55224 18.5 12 18.5C15.4478 18.5 17.7174 15.8916 17.9977 12.8181C18.0168 12.6082 17.9468 12.4 17.8047 12.2443C17.6626 12.0887 17.4616 12 17.2508 12H6.74927ZM12 17C9.74286 17 8.12852 15.5205 7.63237 13.5H16.3677C15.8715 15.5205 14.2571 17 12 17Z' />
          <path d='M15.2501 8.75C14.8416 8.75 14.5398 9.03719 14.492 9.35982C14.4314 9.76957 14.05 10.0526 13.6403 9.99192C13.2305 9.93126 12.9475 9.54993 13.0082 9.14018C13.1696 8.0495 14.1313 7.25 15.2501 7.25C16.3689 7.25 17.3306 8.0495 17.492 9.14018C17.5527 9.54993 17.2697 9.93126 16.8599 9.99192C16.4502 10.0526 16.0688 9.76957 16.0082 9.35982C15.9604 9.03719 15.6586 8.75 15.2501 8.75Z' />
          <path d='M7.99202 9.35982C8.03977 9.03719 8.34157 8.75 8.7501 8.75C9.15863 8.75 9.46043 9.03719 9.50818 9.35982C9.56884 9.76957 9.95017 10.0526 10.3599 9.99192C10.7697 9.93126 11.0527 9.54993 10.992 9.14018C10.8306 8.0495 9.86892 7.25 8.7501 7.25C7.63128 7.25 6.66963 8.0495 6.50818 9.14018C6.44753 9.54993 6.73053 9.93126 7.14028 9.99192C7.55003 10.0526 7.93136 9.76957 7.99202 9.35982Z' />
          <path d='M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12Z' />
        </svg>
      </button>
    </div>
  )
})

export default Emoji

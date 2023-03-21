import React from 'react'
import Emoji from '../emoji/Emoji'
import useInput from '../../hooks/useInput'

function Input({ type }) {
  const [focused, setFocused] = React.useState(false)
  const inputRef = React.useRef(null)
  const { value, handleChange, handleEmojiSelect } = useInput('')

  const handleBlur = (event) => {
    if (event.relatedTarget === null) {
      setFocused(false)
    }
  }

  React.useEffect(() => {
    inputRef.current.style.height = 'auto'
    inputRef.current.style.height = inputRef.current.scrollHeight + 'px'
  }, [inputRef, value])

  return (
    <div
      onFocus={() => setFocused(true)}
      onBlur={handleBlur}
      className={`card input ${focused ? 'active' : ''} ${
        type ? 'sendPost' : ''
      }`}
    >
      <div className='input__info'>
        <img
          className={`input__avatar ${type ? 'sendPost' : ''}`}
          src='https://picsum.photos/200'
          alt='user avatar'
        />
        <h1 className='input__name'>ProfileName_001</h1>
      </div>
      <textarea
        ref={inputRef}
        className='input__input'
        onChange={handleChange}
        value={value}
        maxLength='1200'
        type='text'
        placeholder={`${
          type ? "What's new, ProfileName__001?" : 'Write a comment...'
        }`}
      />

      <div className='input__btns'>
        <Emoji
          popupStyle='replie-input'
          handleEmojiSelect={handleEmojiSelect}
        />
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10.04 26.96C9.00001 26.96 7.96001 26.56 7.16001 25.76C5.56001 24.2 5.56001 21.6 7.16001 20L18.24 8.96C19.2 8 20.8 8 21.76 8.96C22.24 9.44 22.48 10.04 22.48 10.72C22.48 11.4 22.24 12 21.76 12.48L12.96 21.2C12.64 21.52 12.12 21.52 11.76 21.2C11.44 20.88 11.44 20.36 11.76 20L20.52 11.24C20.68 11.08 20.76 10.88 20.76 10.68C20.76 10.48 20.68 10.28 20.52 10.12C20.2 9.8 19.68 9.8 19.4 10.12L8.36001 21.2C7.44001 22.12 7.44001 23.68 8.36001 24.6C9.28001 25.52 10.84 25.52 11.76 24.6L22.8 13.52C23.56 12.76 23.96 11.76 23.96 10.68C23.96 9.6 23.56 8.6 22.8 7.84C21.24 6.28 18.72 6.28 17.16 7.84L8.40001 16.64C8.08001 16.96 7.56001 16.96 7.20001 16.64C6.88001 16.32 6.88001 15.8 7.20001 15.44L16 6.68C18.2 4.48 21.8 4.48 24.04 6.68C25.12 7.76 25.72 9.16 25.72 10.68C25.72 12.2 25.12 13.64 24.04 14.68L12.96 25.76C12.16 26.56 11.16 26.96 10.04 26.96Z'
            fill='#9BA9BA'
            stroke='#9BA9BA'
            strokeWidth='0.5'
          />
        </svg>
        <button className='btn postIt'>{`${
          type ? 'Post it!' : 'Send'
        }`}</button>
      </div>
    </div>
  )
}

export default Input

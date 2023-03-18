import React from 'react'

function Input({ type }) {
  const [focused, setFocused] = React.useState(false)
  const [inputVal, setInputVal] = React.useState('')
  const inputRef = React.useRef(null)

  const handleChange = (event) => {
    setInputVal(event.target.value)
  }

  React.useEffect(() => {
    inputRef.current.style.height = 'auto'
    inputRef.current.style.height = inputRef.current.scrollHeight + 'px'
  }, [inputRef, inputVal])

  return (
    <div
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
        value={inputVal}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        maxLength='1200'
        type='text'
        placeholder={`${
          type ? "What's new, ProfileName__001?" : 'Write a comment...'
        }`}
      />

      <div className='input__btns'>
        <svg
          width='28'
          height='28'
          viewBox='0 0 28 28'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8.63325 16.5668C9.14709 16.1813 9.87537 16.284 10.2629 16.7952L10.2683 16.8021C10.2753 16.8109 10.2885 16.8273 10.3078 16.8503C10.3464 16.8964 10.4091 16.9682 10.4946 17.0575C10.6664 17.2368 10.9247 17.4801 11.259 17.7232C11.9323 18.2128 12.863 18.6668 13.9999 18.6668C15.1368 18.6668 16.0676 18.2128 16.7407 17.7232C17.0752 17.4801 17.3334 17.2368 17.5053 17.0575C17.5907 16.9682 17.6534 16.8964 17.692 16.8503C17.7114 16.8273 17.7246 16.8109 17.7315 16.8021L17.737 16.7952C18.1244 16.284 18.8528 16.1813 19.3666 16.5668C19.882 16.9533 19.9865 17.6846 19.5999 18.2001L19.5987 18.2016C19.4738 18.3674 19.3333 18.5222 19.1899 18.6719C18.9425 18.9301 18.5809 19.2701 18.1132 19.6103C17.1823 20.2873 15.7796 21.0001 13.9999 21.0001C12.2201 21.0001 10.8176 20.2873 9.88663 19.6103C9.41891 19.2701 9.05735 18.9301 8.80994 18.6719C8.66696 18.5227 8.52734 18.3684 8.40243 18.2034C8.01914 17.6941 8.12256 16.9498 8.63325 16.5668Z'
            fill='#9BA9BA'
          />
          <path
            d='M12.25 10.5C12.25 11.4665 11.4665 12.25 10.5 12.25C9.5335 12.25 8.75 11.4665 8.75 10.5C8.75 9.5335 9.5335 8.75 10.5 8.75C11.4665 8.75 12.25 9.5335 12.25 10.5Z'
            fill='#9BA9BA'
          />
          <path
            d='M17.5 12.25C18.4665 12.25 19.25 11.4665 19.25 10.5C19.25 9.5335 18.4665 8.75 17.5 8.75C16.5335 8.75 15.75 9.5335 15.75 10.5C15.75 11.4665 16.5335 12.25 17.5 12.25Z'
            fill='#9BA9BA'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M14 1.16667C6.91235 1.16667 1.16667 6.91235 1.16667 14C1.16667 21.0876 6.91235 26.8333 14 26.8333C21.0876 26.8333 26.8333 21.0876 26.8333 14C26.8333 6.91235 21.0876 1.16667 14 1.16667ZM3.50001 14C3.50001 8.20102 8.20102 3.50001 14 3.50001C19.799 3.50001 24.5 8.20102 24.5 14C24.5 19.799 19.799 24.5 14 24.5C8.20102 24.5 3.50001 19.799 3.50001 14Z'
            fill='#9BA9BA'
          />
        </svg>
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
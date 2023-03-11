import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <p>Logo</p>
      <div className='header__rightSide'>
        <button className='btn'>
          <svg
            width='22'
            height='22'
            viewBox='0 0 22 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M11 5.5C11.5063 5.5 11.9167 5.91041 11.9167 6.41667V10.0833H15.5833C16.0896 10.0833 16.5 10.4937 16.5 11C16.5 11.5063 16.0896 11.9167 15.5833 11.9167H11.9167V15.5833C11.9167 16.0896 11.5063 16.5 11 16.5C10.4937 16.5 10.0833 16.0896 10.0833 15.5833V11.9167H6.41667C5.91041 11.9167 5.5 11.5063 5.5 11C5.5 10.4937 5.91041 10.0833 6.41667 10.0833H10.0833V6.41667C10.0833 5.91041 10.4937 5.5 11 5.5Z'
              fill='white'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M1.83334 4.12501C1.83334 2.85936 2.85936 1.83334 4.12501 1.83334H17.875C19.1407 1.83334 20.1667 2.85936 20.1667 4.12501V17.875C20.1667 19.1407 19.1407 20.1667 17.875 20.1667H4.12501C2.85936 20.1667 1.83334 19.1407 1.83334 17.875V4.12501ZM4.12501 3.66668C3.87188 3.66668 3.66668 3.87188 3.66668 4.12501V17.875C3.66668 18.1281 3.87188 18.3333 4.12501 18.3333H17.875C18.1281 18.3333 18.3333 18.1281 18.3333 17.875V4.12501C18.3333 3.87188 18.1281 3.66668 17.875 3.66668H4.12501Z'
              fill='white'
            />
          </svg>
          Create
        </button>
        <Link to='/profile'>
          <img
            className='avatar'
            src='https://picsum.photos/200'
            alt='avatar'
          ></img>
        </Link>
      </div>
    </header>
  )
}

export default Header

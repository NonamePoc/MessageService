import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function MenuTab() {
  const user = useSelector((state) => state.user)
  return (
    <nav className='card menu'>
      <ul>
        <li>
          <NavLink className='menu__item' to='/'>
            <svg
              className='home-icon'
              width='30'
              height='30'
              viewBox='0 0 30 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M27.1875 24.4191V13.9926C27.1875 12.7111 26.631 11.5015 25.6794 10.7148L18.6664 4.91629C16.7855 3.36124 14.152 3.36124 12.2711 4.91629L5.25805 10.7148C4.30654 11.5015 3.75 12.7111 3.75 13.9926V24.4191C3.75 25.948 4.91592 27.1875 6.35417 27.1875H8.95833C10.3966 27.1875 11.5625 26.0216 11.5625 24.5833V20.2667C11.5625 18.7378 12.7284 17.4983 14.1667 17.4983H16.7708C18.2091 17.4983 19.375 18.7378 19.375 20.2667V24.5833C19.375 26.0216 20.5409 27.1875 21.9792 27.1875H24.5833C26.0216 27.1875 27.1875 25.948 27.1875 24.4191Z'
                stroke='#8093ab'
                strokeWidth='2.5'
              />
            </svg>
            <span> Home </span>
          </NavLink>
        </li>
        <li>
          <NavLink className='menu__item' to={`/friends/${user.userName}`}>
            <svg
              width='32'
              height='32'
              viewBox='0 0 30 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_4_140)' filter='url(#filter0_i_4_140)'>
                <path
                  d='M25 10H7C6.20462 10.0009 5.44206 10.3172 4.87964 10.8796C4.31722 11.4421 4.00087 12.2046 4 13V19C4.00061 19.5302 4.21152 20.0386 4.58646 20.4135C4.9614 20.7885 5.46975 20.9994 6 21V28C6.00061 28.5302 6.21152 29.0386 6.58646 29.4135C6.9614 29.7885 7.46975 29.9994 8 30H12C12.5302 29.9994 13.0386 29.7885 13.4135 29.4135C13.7885 29.0386 13.9994 28.5302 14 28V16H12V28H8V19H6V13C6.00024 12.7349 6.10567 12.4806 6.29316 12.2932C6.48064 12.1057 6.73486 12.0002 7 12H25C25.2651 12.0002 25.5194 12.1057 25.7068 12.2932C25.8943 12.4806 25.9998 12.7349 26 13V19H24V28H20V16H18V28C18.0006 28.5302 18.2115 29.0386 18.5865 29.4135C18.9614 29.7885 19.4698 29.9994 20 30H24C24.5302 29.9994 25.0386 29.7885 25.4135 29.4135C25.7885 29.0386 25.9994 28.5302 26 28V21C26.5302 20.9994 27.0386 20.7885 27.4135 20.4135C27.7885 20.0386 27.9994 19.5302 28 19V13C27.9991 12.2046 27.6828 11.4421 27.1204 10.8796C26.5579 10.3172 25.7954 10.0009 25 10Z'
                  fill='#9BA9BA'
                />
                <path
                  d='M10 9C9.20888 9 8.43552 8.76541 7.77772 8.32588C7.11992 7.88635 6.60723 7.26164 6.30448 6.53074C6.00173 5.79983 5.92252 4.99556 6.07686 4.21964C6.2312 3.44372 6.61216 2.73098 7.17157 2.17157C7.73098 1.61216 8.44372 1.2312 9.21964 1.07686C9.99556 0.92252 10.7998 1.00173 11.5307 1.30448C12.2616 1.60723 12.8864 2.11992 13.3259 2.77772C13.7654 3.43552 14 4.20888 14 5C13.9989 6.06053 13.5771 7.0773 12.8272 7.8272C12.0773 8.57711 11.0605 8.99889 10 9ZM10 3C9.60444 3 9.21776 3.1173 8.88886 3.33706C8.55996 3.55683 8.30362 3.86918 8.15224 4.23463C8.00087 4.60009 7.96126 5.00222 8.03843 5.39018C8.1156 5.77814 8.30608 6.13451 8.58579 6.41422C8.86549 6.69392 9.22186 6.8844 9.60982 6.96157C9.99778 7.03874 10.3999 6.99914 10.7654 6.84776C11.1308 6.69639 11.4432 6.44004 11.6629 6.11114C11.8827 5.78224 12 5.39556 12 5C11.9994 4.46976 11.7885 3.9614 11.4135 3.58646C11.0386 3.21152 10.5302 3.00061 10 3Z'
                  fill='#9BA9BA'
                />
                <path
                  d='M22 9C21.2089 9 20.4355 8.76541 19.7777 8.32588C19.1199 7.88635 18.6072 7.26164 18.3045 6.53074C18.0017 5.79983 17.9225 4.99556 18.0769 4.21964C18.2312 3.44372 18.6122 2.73098 19.1716 2.17157C19.731 1.61216 20.4437 1.2312 21.2196 1.07686C21.9956 0.92252 22.7998 1.00173 23.5307 1.30448C24.2616 1.60723 24.8864 2.11992 25.3259 2.77772C25.7654 3.43552 26 4.20888 26 5C25.9989 6.06053 25.5771 7.0773 24.8272 7.8272C24.0773 8.57711 23.0605 8.99889 22 9ZM22 3C21.6044 3 21.2178 3.1173 20.8889 3.33706C20.56 3.55683 20.3036 3.86918 20.1522 4.23463C20.0009 4.60009 19.9613 5.00222 20.0384 5.39018C20.1156 5.77814 20.3061 6.13451 20.5858 6.41422C20.8655 6.69392 21.2219 6.8844 21.6098 6.96157C21.9978 7.03874 22.3999 6.99914 22.7654 6.84776C23.1308 6.69639 23.4432 6.44004 23.6629 6.11114C23.8827 5.78224 24 5.39556 24 5C23.9994 4.46976 23.7885 3.9614 23.4135 3.58646C23.0386 3.21152 22.5302 3.00061 22 3Z'
                  fill='#9BA9BA'
                />
              </g>
              <defs>
                <filter
                  id='filter0_i_4_140'
                  x='0'
                  y='0'
                  width='32'
                  height='32'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation='2' />
                  <feComposite
                    in2='hardAlpha'
                    operator='arithmetic'
                    k2='-1'
                    k3='1'
                  />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.55 0 0 0 0 0.55 0 0 0 0 0.55 0 0 0 0.5 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='shape'
                    result='effect1_innerShadow_4_140'
                  />
                </filter>
                <clipPath id='clip0_4_140'>
                  <rect width='32' height='32' fill='white' />
                </clipPath>
              </defs>
            </svg>
            <span> Friends </span>
          </NavLink>
        </li>
        <li>
          <NavLink className='menu__item' to='/chat'>
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M16 2.66667C13.9589 2.66534 11.9449 3.1326 10.1129 4.03245C8.28094 4.9323 6.68002 6.24071 5.43349 7.85687C4.18696 9.47303 3.32811 11.3538 2.9231 13.3542C2.51809 15.3547 2.57775 17.4214 3.09747 19.3951C3.61718 21.3689 4.58309 23.197 5.92077 24.7386C7.25844 26.2801 8.93217 27.494 10.813 28.2867C12.6938 29.0794 14.7315 29.4297 16.769 29.3106C18.8066 29.1916 20.7896 28.6063 22.5653 27.6L27.5786 29.2707C27.7149 29.3137 27.8571 29.3348 28 29.3333C28.2111 29.3332 28.4192 29.2829 28.6071 29.1866C28.7951 29.0902 28.9574 28.9507 29.0808 28.7793C29.2042 28.608 29.2852 28.4098 29.3171 28.2011C29.3489 27.9923 29.3307 27.779 29.264 27.5787L27.6 22.5653C28.7525 20.538 29.3524 18.2435 29.3397 15.9115C29.327 13.5795 28.7021 11.2917 27.5277 9.27702C26.3532 7.26232 24.6703 5.59136 22.6472 4.43129C20.6242 3.27122 18.332 2.66272 16 2.66667ZM24.8706 22.828L25.892 25.8947L22.8253 24.8733C22.6382 24.8095 22.4392 24.7884 22.2429 24.8115C22.0465 24.8345 21.8579 24.9012 21.6906 25.0067C19.4668 26.414 16.8022 26.9519 14.2066 26.5174C11.611 26.0829 9.26675 24.7065 7.62257 22.6516C5.97839 20.5967 5.14972 18.0076 5.29516 15.3799C5.44059 12.7522 6.54991 10.2704 8.41082 8.40951C10.2717 6.5486 12.7535 5.43928 15.3812 5.29385C18.0089 5.14841 20.598 5.97708 22.6529 7.62126C24.7078 9.26545 26.0842 11.6097 26.5187 14.2053C26.9532 16.8009 26.4153 19.4655 25.008 21.6893C24.9018 21.857 24.8344 22.0462 24.8106 22.2431C24.7869 22.4401 24.8074 22.6399 24.8706 22.828ZM22.6666 12.6667C22.6666 13.0203 22.5262 13.3594 22.2761 13.6095C22.0261 13.8595 21.6869 14 21.3333 14H10.6666C10.313 14 9.97388 13.8595 9.72383 13.6095C9.47379 13.3594 9.33331 13.0203 9.33331 12.6667C9.33331 12.313 9.47379 11.9739 9.72383 11.7239C9.97388 11.4738 10.313 11.3333 10.6666 11.3333H21.3333C21.6869 11.3333 22.0261 11.4738 22.2761 11.7239C22.5262 11.9739 22.6666 12.313 22.6666 12.6667ZM17.3333 19.3333C17.3333 19.687 17.1928 20.0261 16.9428 20.2761C16.6927 20.5262 16.3536 20.6667 16 20.6667H10.6666C10.313 20.6667 9.97388 20.5262 9.72383 20.2761C9.47379 20.0261 9.33331 19.687 9.33331 19.3333C9.33331 18.9797 9.47379 18.6406 9.72383 18.3905C9.97388 18.1405 10.313 18 10.6666 18H16C16.3536 18 16.6927 18.1405 16.9428 18.3905C17.1928 18.6406 17.3333 18.9797 17.3333 19.3333Z'
                fill='#9BA9BA'
              />
            </svg>
            <span> Chat </span>
          </NavLink>
        </li>
        <li>
          <NavLink className='menu__item' to='/settings'>
            <svg
              width='30'
              height='30'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M21.9996 0.0106506C21.469 0.0106568 20.9601 0.214924 20.585 0.578517C20.2098 0.94211 19.999 1.43524 19.999 1.94944V2.91978H2.00055C1.46998 2.91978 0.961146 3.12404 0.585974 3.48761C0.210801 3.85118 2.1063e-05 4.34429 0 4.85847C-2.39956e-06 5.11307 0.0517414 5.36519 0.152277 5.60041C0.252813 5.83563 0.400171 6.04936 0.585939 6.22939C0.771707 6.40943 0.992246 6.55224 1.23497 6.64967C1.47768 6.74711 1.73783 6.79726 2.00055 6.79726H19.999V7.76874C19.999 8.28293 20.2098 8.77606 20.585 9.13966C20.9601 9.50325 21.469 9.70752 21.9996 9.70752C22.5301 9.70752 23.039 9.50325 23.4142 9.13966C23.7893 8.77606 24.0001 8.28293 24.0001 7.76874V6.79726H27.9988C28.2615 6.79727 28.5217 6.74713 28.7644 6.6497C29.0071 6.55227 29.2277 6.40946 29.4134 6.22943C29.5992 6.04939 29.7466 5.83566 29.8471 5.60043C29.9477 5.3652 29.9994 5.11308 29.9994 4.85847C29.9994 4.60387 29.9476 4.35176 29.8471 4.11654C29.7465 3.88132 29.5992 3.6676 29.4134 3.48758C29.2276 3.30755 29.0071 3.16475 28.7644 3.06733C28.5216 2.96991 28.2615 2.91977 27.9988 2.91978H24.0001V1.94944C24.0001 1.43524 23.7893 0.94211 23.4142 0.578517C23.039 0.214924 22.5301 0.0106568 21.9996 0.0106506ZM7.49985 9.70743C7.23713 9.70742 6.97697 9.75756 6.73424 9.85499C6.49151 9.95242 6.27096 10.0952 6.08518 10.2753C5.89941 10.4553 5.75204 10.669 5.6515 10.9043C5.55095 11.1395 5.49921 11.3916 5.49921 11.6462V12.6165H2.00113C1.73841 12.6165 1.47827 12.6666 1.23555 12.764C0.992832 12.8615 0.772293 13.0043 0.586525 13.1843C0.400757 13.3644 0.253398 13.5781 0.152863 13.8133C0.0523273 14.0485 0.000583493 14.3006 0.000585917 14.5553C0.000583493 14.8099 0.0523273 15.062 0.152863 15.2972C0.253398 15.5324 0.400757 15.7461 0.586525 15.9262C0.772293 16.1062 0.992832 16.249 1.23555 16.3465C1.47827 16.4439 1.73841 16.494 2.00113 16.494H5.49921V17.4655C5.49921 17.7201 5.55096 17.9722 5.6515 18.2075C5.75204 18.4427 5.89941 18.6564 6.08518 18.8365C6.27096 19.0165 6.49151 19.1593 6.73424 19.2567C6.97697 19.3542 7.23713 19.4043 7.49985 19.4043C8.03044 19.4043 8.53928 19.2 8.91446 18.8364C9.28963 18.4728 9.5004 17.9797 9.5004 17.4655V16.494H27.9995C28.2622 16.494 28.5223 16.4439 28.765 16.3465C29.0078 16.249 29.2283 16.1062 29.4141 15.9262C29.5998 15.7461 29.7472 15.5324 29.8477 15.2972C29.9483 15.062 30 14.8099 30 14.5553C30 14.3006 29.9483 14.0485 29.8477 13.8133C29.7472 13.5781 29.5998 13.3644 29.4141 13.1843C29.2283 13.0043 29.0078 12.8615 28.765 12.764C28.5223 12.6666 28.2622 12.6165 27.9995 12.6165H9.5004V11.6462C9.5004 11.132 9.28963 10.6389 8.91446 10.2753C8.53928 9.9117 8.03044 9.70744 7.49985 9.70743ZM13.9997 19.4043C13.4692 19.4043 12.9603 19.6086 12.5852 19.9721C12.21 20.3357 11.9992 20.8288 11.9992 21.343V22.3132H2.00113C1.73841 22.3132 1.47827 22.3634 1.23555 22.4608C0.992832 22.5583 0.772293 22.7011 0.586525 22.8811C0.400757 23.0611 0.253398 23.2749 0.152863 23.5101C0.0523273 23.7453 0.000583493 23.9974 0.000585917 24.252C0.000607018 24.7662 0.211387 25.2593 0.58656 25.6229C0.961732 25.9865 1.47057 26.1907 2.00113 26.1907H11.9992V27.1623C11.9992 27.6765 12.21 28.1696 12.5852 28.5332C12.9603 28.8967 13.4692 29.101 13.9997 29.101C14.5303 29.101 15.0391 28.8967 15.4143 28.5332C15.7895 28.1696 16.0002 27.6765 16.0003 27.1623V26.1907H27.9995C28.53 26.1907 29.0389 25.9865 29.414 25.6229C29.7892 25.2593 30 24.7662 30 24.252C30 23.9974 29.9483 23.7453 29.8477 23.5101C29.7472 23.2749 29.5998 23.0611 29.4141 22.8811C29.2283 22.7011 29.0078 22.5583 28.765 22.4608C28.5223 22.3634 28.2622 22.3132 27.9995 22.3132H16.0003V21.343C16.0002 20.8288 15.7895 20.3357 15.4143 19.9721C15.0391 19.6086 14.5303 19.4043 13.9997 19.4043Z'
                fill='#9BA9BA'
                fillOpacity='0.9'
              />
            </svg>
            <span> Settings </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default MenuTab

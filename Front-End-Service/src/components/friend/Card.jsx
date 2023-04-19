import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import usePopup from '../../hooks/usePopup'
import { Status } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFriends, createChatRoom } from '../../redux/slices/user'
import { joinToRoom } from '../../redux/slices/chat'

function Card({ friend }) {
  const { isOpen, togglePopup } = usePopup()
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onClickRemove = (user) => {
    dispatch(removeFromFriends(user))
  }

  const onClickChat = (friend) => {
    const room = user.rooms.find((room) =>
      room.users.some((user) => user.id === friend.id)
    )
    if (room) {
      navigate(`/chat/${room.id}`)
    } else {
      dispatch(createChatRoom(`${user.userName}, ${friend.userName}`))
      dispatch(joinToRoom(friend.id))
    }
  }

  return (
    <div className='card friendCard'>
      <svg
        onClick={togglePopup}
        className='dots friendCard__dots'
        width='30'
        height='30'
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_5_170)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M26.2903 14.9812C26.2903 16.0158 25.4498 16.8562 24.4153 16.8562C23.3803 16.8562 22.5403 16.0158 22.5403 14.9812C22.5403 13.9462 23.3803 13.1062 24.4153 13.1062C25.4498 13.1062 26.2903 13.9462 26.2903 14.9812Z'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M7.54028 14.9812C7.54028 16.0158 6.69981 16.8562 5.66528 16.8562C4.63028 16.8562 3.79028 16.0158 3.79028 14.9812C3.79028 13.9462 4.63028 13.1062 5.66528 13.1062C6.69981 13.1062 7.54028 13.9462 7.54028 14.9812Z'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M16.9153 14.9812C16.9153 16.0158 16.0748 16.8562 15.0403 16.8562C14.0053 16.8562 13.1653 16.0158 13.1653 14.9812C13.1653 13.9462 14.0053 13.1062 15.0403 13.1062C16.0748 13.1062 16.9153 13.9462 16.9153 14.9812Z'
          />
        </g>
        <defs>
          <clipPath id='clip0_5_170'>
            <rect width='30' height='30' fill='white' />
          </clipPath>
        </defs>
      </svg>
      <ul className={`pop popup popup__friendCard ${isOpen ? 'open' : ''}`}>
        <li
          onClick={() => {
            onClickRemove(friend.id)
          }}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0_14_267)'>
              <path
                d='M21.2325 5.5725C21.1148 5.42063 20.9432 5.31974 20.7533 5.29065C20.5633 5.26156 20.3695 5.30649 20.2117 5.41617C20.0539 5.52585 19.9442 5.69192 19.9053 5.8801C19.8664 6.06828 19.9012 6.26423 20.0025 6.4275C20.8766 7.68343 21.4429 9.12747 21.6555 10.6428C21.868 12.1582 21.721 13.7023 21.2261 15.1502C20.7313 16.5982 19.9026 17.9094 18.8071 18.9777C17.7116 20.046 16.38 20.8415 14.92 21.2998C13.4601 21.758 11.9128 21.8662 10.4033 21.6156C8.89373 21.3651 7.46438 20.7627 6.23082 19.8573C4.99727 18.9518 3.99413 17.7688 3.30257 16.4038C2.61101 15.0388 2.25043 13.5302 2.25 12C2.25945 9.90204 2.94124 7.86237 4.19527 6.18043C5.4493 4.49849 7.20952 3.26288 9.2175 2.655C9.31205 2.62693 9.40015 2.58051 9.47676 2.5184C9.55338 2.45628 9.617 2.37968 9.66401 2.29298C9.71102 2.20627 9.74049 2.11115 9.75074 2.01306C9.76099 1.91496 9.75182 1.81581 9.72375 1.72125C9.69568 1.6267 9.64926 1.5386 9.58715 1.46199C9.52503 1.38538 9.44843 1.32175 9.36173 1.27474C9.27502 1.22773 9.1799 1.19826 9.08181 1.18801C8.98371 1.17776 8.88455 1.18693 8.79 1.215C6.79025 1.81035 4.99547 2.95009 3.60624 4.50684C2.21701 6.0636 1.28809 7.97602 0.923289 10.0304C0.558488 12.0847 0.772185 14.2001 1.5405 16.1399C2.30881 18.0798 3.60146 19.7678 5.27398 21.0152C6.94649 22.2627 8.93297 23.0204 11.0114 23.2038C13.0898 23.3872 15.1783 22.9889 17.0433 22.0535C18.9084 21.1182 20.4766 19.6825 21.5727 17.9071C22.6688 16.1317 23.2495 14.0865 23.25 12C23.2542 9.70105 22.5497 7.45668 21.2325 5.5725Z'
                fill='white'
              />
              <path
                d='M14.7825 2.65499C15.9517 3.00977 17.0434 3.58232 18 4.34249C18.0773 4.40356 18.1659 4.4488 18.2607 4.47563C18.3555 4.50245 18.4546 4.51035 18.5525 4.49886C18.6503 4.48737 18.745 4.45671 18.831 4.40865C18.917 4.36059 18.9927 4.29606 19.0537 4.21874C19.1148 4.14143 19.16 4.05284 19.1869 3.95804C19.2137 3.86324 19.2216 3.76409 19.2101 3.66624C19.1986 3.56839 19.168 3.47376 19.1199 3.38776C19.0718 3.30175 19.0073 3.22606 18.93 3.16499C17.8154 2.28237 16.5426 1.62053 15.18 1.21499C14.989 1.1583 14.7834 1.17979 14.6083 1.27473C14.4331 1.36967 14.3029 1.53029 14.2462 1.72124C14.1895 1.9122 14.211 2.11785 14.306 2.29297C14.4009 2.46808 14.5615 2.5983 14.7525 2.65499H14.7825ZM11.4675 2.03249C11.5404 2.09874 11.6241 2.15201 11.715 2.18999C11.8048 2.22967 11.9018 2.25017 12 2.25017C12.0981 2.25017 12.1952 2.22967 12.285 2.18999C12.3758 2.15188 12.4595 2.09862 12.5325 2.03249C12.602 1.96241 12.657 1.8793 12.6943 1.78792C12.7316 1.69654 12.7506 1.5987 12.75 1.49999C12.7472 1.30142 12.6695 1.11122 12.5325 0.967493C12.4459 0.87719 12.3381 0.809985 12.2189 0.771996C12.0997 0.734008 11.9729 0.726444 11.85 0.749993C11.803 0.758309 11.7575 0.77347 11.715 0.794993C11.6671 0.81124 11.6217 0.83395 11.58 0.862493L11.4675 0.952493C11.3992 1.02382 11.3457 1.10793 11.31 1.19999C11.2696 1.29481 11.2492 1.39693 11.25 1.49999C11.2512 1.598 11.2715 1.69483 11.31 1.78499C11.3481 1.87581 11.4013 1.9595 11.4675 2.03249ZM17.0325 6.96749C16.892 6.82781 16.7019 6.7494 16.5037 6.7494C16.3056 6.7494 16.1155 6.82781 15.975 6.96749L12 10.9425L8.03248 6.96749C7.889 6.84462 7.70445 6.78042 7.51569 6.78771C7.32693 6.795 7.14788 6.87325 7.01431 7.00682C6.88074 7.14039 6.80249 7.31945 6.7952 7.5082C6.78791 7.69696 6.85211 7.88152 6.97498 8.02499L10.9425 12L6.96748 15.9675C6.88897 16.0347 6.8252 16.1175 6.78019 16.2105C6.73517 16.3036 6.70987 16.4049 6.70588 16.5082C6.70189 16.6115 6.7193 16.7145 6.757 16.8107C6.79471 16.907 6.8519 16.9944 6.92499 17.0675C6.99808 17.1406 7.08549 17.1978 7.18174 17.2355C7.27798 17.2732 7.38098 17.2906 7.48427 17.2866C7.58756 17.2826 7.68891 17.2573 7.78196 17.2123C7.87501 17.1673 7.95774 17.1035 8.02498 17.025L12 13.0575L15.9675 17.025C16.111 17.1479 16.2955 17.2121 16.4843 17.2048C16.673 17.1975 16.8521 17.1192 16.9857 16.9857C17.1192 16.8521 17.1975 16.673 17.2048 16.4843C17.2121 16.2955 17.1479 16.111 17.025 15.9675L13.0575 12L17.025 8.03249C17.0958 7.96327 17.1522 7.88071 17.1909 7.78958C17.2296 7.69846 17.2499 7.60056 17.2506 7.50156C17.2513 7.40255 17.2324 7.30438 17.1949 7.21272C17.1575 7.12105 17.1023 7.03771 17.0325 6.96749Z'
                fill='white'
              />
            </g>
            <defs>
              <clipPath id='clip0_14_267'>
                <rect width='24' height='24' fill='white' />
              </clipPath>
            </defs>
          </svg>
          Remove friend
        </li>
      </ul>
      <img
        className='friendCard__image'
        src='https://picsum.photos/id/235/800'
        alt='avatar'
      />
      <div className='friendCard__info'>
        <h1 className='friendCard__name'>{friend.userName}</h1>
        <Status user={friend} />
      </div>
      <div className='friendCard__btns'>
        <Link to={`/profile/${friend.userName}`} aria-label='View Profile'>
          <button className='btn prfl' aria-label='view profile'>
            <svg
              width='26'
              height='26'
              viewBox='0 0 26 26'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13 10.5625C11.6512 10.5625 10.5625 11.6512 10.5625 13C10.5625 14.3487 11.6512 15.4375 13 15.4375C14.3487 15.4375 15.4375 14.3487 15.4375 13C15.4375 11.6512 14.3487 10.5625 13 10.5625ZM8.9375 13C8.9375 10.7538 10.7538 8.9375 13 8.9375C15.2462 8.9375 17.0625 10.7538 17.0625 13C17.0625 15.2462 15.2462 17.0625 13 17.0625C10.7538 17.0625 8.9375 15.2462 8.9375 13Z'
                fill='white'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2.47303 10.0462C5.08405 6.43789 8.87917 4.3008 13.0001 4.3008C17.1212 4.3008 20.9164 6.43809 23.5275 10.0467C24.1359 10.8852 24.413 11.9623 24.413 12.9946C24.413 14.027 24.1358 15.1043 23.5272 15.9429C20.9161 19.5512 17.121 21.6883 13.0001 21.6883C8.87897 21.6883 5.08367 19.551 2.47264 15.9423C1.86429 15.1038 1.58716 14.0268 1.58716 12.9946C1.58716 11.9621 1.86439 10.8848 2.47303 10.0462ZM13.0001 5.9258C9.47284 5.9258 6.1398 7.75055 3.78916 10.9993L3.78839 11.0004C3.42229 11.5047 3.21216 12.2271 3.21216 12.9946C3.21216 13.7619 3.42229 14.4845 3.78839 14.9887L3.78916 14.9898C6.1398 18.2386 9.47284 20.0633 13.0001 20.0633C16.5273 20.0633 19.8603 18.2386 22.211 14.9898L22.2118 14.9887C22.5778 14.4845 22.788 13.7619 22.788 12.9946C22.788 12.2271 22.5778 11.5047 22.2118 11.0004L22.211 10.9993C19.8603 7.75055 16.5273 5.9258 13.0001 5.9258Z'
                fill='white'
              />
            </svg>
          </button>
        </Link>

        <button
          onClick={() => onClickChat(friend)}
          className='btn msg'
          aria-label='chat with user'
        >
          <svg
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M12.5 2.08333C10.9054 2.08229 9.33193 2.44734 7.90071 3.15034C6.46949 3.85335 5.21877 4.87555 4.24492 6.13817C3.27107 7.40079 2.60009 8.87014 2.28368 10.433C1.96727 11.9958 2.01387 13.6105 2.4199 15.1524C2.82593 16.6944 3.58055 18.1226 4.62561 19.327C5.67066 20.5313 6.97826 21.4797 8.44765 22.099C9.91703 22.7183 11.509 22.9919 13.1008 22.8989C14.6927 22.8059 16.2419 22.3487 17.6292 21.5625L21.5458 22.8677C21.6523 22.9013 21.7634 22.9178 21.875 22.9167C22.04 22.9165 22.2025 22.8772 22.3493 22.802C22.4961 22.7267 22.623 22.6177 22.7194 22.4838C22.8158 22.35 22.8791 22.1952 22.904 22.0321C22.9288 21.869 22.9146 21.7023 22.8625 21.5458L21.5625 17.6292C22.4629 16.0453 22.9315 14.2527 22.9216 12.4309C22.9117 10.609 22.4236 8.82165 21.506 7.24767C20.5884 5.67368 19.2736 4.36824 17.6932 3.46194C16.1127 2.55563 14.3219 2.08024 12.5 2.08333ZM19.4302 17.8344L20.2281 20.2302L17.8323 19.4323C17.6861 19.3824 17.5306 19.3659 17.3773 19.3839C17.2239 19.402 17.0765 19.4541 16.9458 19.5365C15.2085 20.636 13.1267 21.0562 11.0989 20.7167C9.07107 20.3772 7.23966 19.3019 5.95514 17.6965C4.67063 16.0911 4.02323 14.0684 4.13685 12.0155C4.25047 9.96265 5.11713 8.02376 6.57096 6.56992C8.02479 5.11609 9.96369 4.24943 12.0166 4.13581C14.0695 4.02219 16.0922 4.66959 17.6976 5.95411C19.3029 7.23862 20.3783 9.07004 20.7178 11.0978C21.0572 13.1257 20.637 15.2074 19.5375 16.9448C19.4545 17.0757 19.4019 17.2236 19.3833 17.3775C19.3647 17.5314 19.3808 17.6874 19.4302 17.8344ZM17.7083 9.89583C17.7083 10.1721 17.5986 10.437 17.4032 10.6324C17.2079 10.8277 16.9429 10.9375 16.6667 10.9375H8.33332C8.05706 10.9375 7.7921 10.8277 7.59675 10.6324C7.4014 10.437 7.29166 10.1721 7.29166 9.89583C7.29166 9.61956 7.4014 9.35461 7.59675 9.15926C7.7921 8.96391 8.05706 8.85416 8.33332 8.85416H16.6667C16.9429 8.85416 17.2079 8.96391 17.4032 9.15926C17.5986 9.35461 17.7083 9.61956 17.7083 9.89583ZM13.5417 15.1042C13.5417 15.3804 13.4319 15.6454 13.2366 15.8407C13.0412 16.0361 12.7763 16.1458 12.5 16.1458H8.33332C8.05706 16.1458 7.7921 16.0361 7.59675 15.8407C7.4014 15.6454 7.29166 15.3804 7.29166 15.1042C7.29166 14.8279 7.4014 14.5629 7.59675 14.3676C7.7921 14.1722 8.05706 14.0625 8.33332 14.0625H12.5C12.7763 14.0625 13.0412 14.1722 13.2366 14.3676C13.4319 14.5629 13.5417 14.8279 13.5417 15.1042Z' />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Card

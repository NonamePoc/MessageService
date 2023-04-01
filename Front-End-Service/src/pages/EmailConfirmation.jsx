import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { registerUser } from '../api/userRequests'

function EmailConfirmation() {
  const userData = useSelector((state) => state.user)

  const handleClick = () => {
    registerUser(userData)
  }

  return (
    <div className='emailConfirm__bg'>
      <div className='card emailConfirm'>
        <Link
          to='/auth'
          className='emailConfirm__return'
          aria-label='Go Back to Authentication Page'
        >
          <svg
            className='emailConfirm__return__img'
            width='26px'
            viewBox='0 0 48 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12.9998 8L6 14L12.9998 21'
              strokeWidth='4'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984'
              strokeWidth='4'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Link>
        <div className='emailConfirm__body'>
          <svg
            className='emailConfirm__img'
            version='1.1'
            id='_x36_'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <g>
              <polygon
                style={{ fill: `#C0874A` }}
                points='511.401,173.663 502.513,179.269 458.244,207.066 268.606,326.073 266.213,327.652 
		265.699,327.968 256.043,334.048 255.701,334.207 247.753,329.232 246.299,328.284 66.659,215.516 54.439,207.856 0.598,174.057 
		0,173.663 54.439,139.469 249.548,16.988 261.854,16.988 458.244,140.258 464.74,144.365 	'
              />
              <path
                style={{ fill: `#69B25F` }}
                d='M467.859,16.065v383.862c0,8.807-7.88,15.985-17.641,15.985H62.29
		c-9.671,0-17.551-7.178-17.551-15.985V16.065C44.739,7.176,52.619,0,62.29,0h387.928C459.978,0,467.859,7.176,467.859,16.065z'
              />
              <g>
                <g>
                  <rect
                    x='110.787'
                    y='75.101'
                    style={{ fill: `#A2CC86` }}
                    width='190.508'
                    height='25.378'
                  />
                  <rect
                    x='110.787'
                    y='71.093'
                    style={{ fill: `#53A654` }}
                    width='190.508'
                    height='25.378'
                  />
                </g>
                <g>
                  <rect
                    x='110.787'
                    y='214.682'
                    style={{ fill: `#A2CC86` }}
                    width='289.501'
                    height='25.378'
                  />
                  <rect
                    x='110.787'
                    y='210.675'
                    style={{ fill: `#53A654` }}
                    width='289.501'
                    height='25.378'
                  />
                </g>
                <g>
                  <rect
                    x='110.787'
                    y='284.473'
                    style={{ fill: `#A2CC86` }}
                    width='289.501'
                    height='25.378'
                  />
                  <rect
                    x='110.787'
                    y='280.466'
                    style={{ fill: `#53A654` }}
                    width='289.501'
                    height='25.378'
                  />
                </g>
                <g>
                  <rect
                    x='110.787'
                    y='144.891'
                    style={{ fill: `#A2CC86` }}
                    width='289.501'
                    height='25.378'
                  />
                  <rect
                    x='110.787'
                    y='140.884'
                    style={{ fill: `#53A654` }}
                    width='289.501'
                    height='25.378'
                  />
                </g>
              </g>
              <polygon
                style={{ fill: `#F0BA7D` }}
                points='256.299,322.118 253.308,323.881 195.45,357.662 188.356,361.847 12.392,464.583 
		0.598,471.413 0.598,172.824 71.446,214.169 246.642,316.464 248.009,317.272 256.043,321.971 	'
              />
              <g>
                <path
                  style={{ fill: `#E5A864` }}
                  d='M510.236,167.293c0.97-0.567,1.764-0.111,1.764,1.013v294.576c0,1.124-0.019,2.027-0.043,2.006
			s-0.139-0.103-0.257-0.184c-0.118-0.081-0.291-0.197-0.385-0.257c-0.094-0.061-0.19-0.11-0.214-0.11
			c-0.024,0-0.837-0.464-1.807-1.03L265.498,320.993c-0.97-0.566-2.556-1.497-3.524-2.068l-0.839-0.495
			c-0.968-0.571-2.452-1.451-3.298-1.956c-0.846-0.505-0.743-1.379,0.229-1.944l6.209-3.604c0.972-0.564,1.825-1.059,1.895-1.099
			c0.071-0.04,0.186-0.107,0.257-0.147c0.071-0.04,0.923-0.535,1.895-1.1l5.44-3.161c0.972-0.564,2.56-1.49,3.531-2.057
			L510.236,167.293z'
                />
              </g>
              <circle
                style={{ fill: `#EEF3CA`, opacity: 0.68 }}
                cx='377.142'
                cy='75.101'
                r='38.186'
              />
              <path
                style={{ fill: `#C0874A` }}
                d='M512,425.251v45.808h-0.513l-7.35,0.342H27.689l-0.341-7.094
		c8.632-5.896,20.082-13.845,27.518-18.887l1.025-0.684l24.956-17.178l38.97-26.92l11.28-7.777l118.365-81.615l7.947-5.556
		c1.88-1.195,4.017-2.222,6.324-2.904c2.735-0.941,5.726-1.539,8.717-1.795c1.025-0.086,1.965-0.171,2.991-0.086
		c1.025-0.171,2.052-0.171,3.077-0.171c2.735-0.085,5.385,0.171,7.948,0.683c2.734,0.513,5.213,1.369,7.435,2.564l89.735,49.91
		l44.354,24.697l11.538,6.41l41.79,23.245l27.518,15.298c0.77,0.428,1.624,0.855,2.479,1.368
		C511.487,424.995,511.743,425.166,512,425.251z'
              />
              <path
                style={{ fill: `#ECB168` }}
                d='M512,441.404v29.997H0.598v-29.997c8.974-5.471,20.768-12.905,28.459-17.52l1.025-0.684
		l25.724-15.98l40.252-24.955l11.623-7.264l122.125-75.805l8.204-5.127c4.273-2.564,9.828-3.846,15.298-3.932
		c1.025-0.086,1.965-0.086,2.991,0c1.026-0.086,2.051-0.086,3.077,0c2.393,0,4.701,0.257,6.923,0.769
		c3.077,0.599,5.896,1.71,8.29,3.163l11.879,7.349l75.377,46.834l43.073,26.75l11.196,7.007l40.68,25.212l26.748,16.665
		c0.77,0.428,1.539,0.854,2.393,1.367c5.47,3.505,12.477,7.864,19.058,11.88C507.385,438.669,509.778,440.122,512,441.404z'
              />
              <path
                style={{ fill: `#BADB9E`, opacity: 0.2 }}
                d='M467.816,16.066v4.273c0-8.887-7.863-16.066-17.605-16.066H62.301
		c-9.656,0-17.604,7.178-17.604,16.066v-4.273C44.696,7.178,52.645,0,62.301,0h387.911C459.953,0,467.816,7.178,467.816,16.066z'
              />
            </g>
          </svg>
          <h2>Email Confirmation</h2>
          <p>
            We have sent email to your address{' '}
            <span className='user-email'>{userData.email}</span> to confirm the
            validity of our email address. After receicing the email follow the
            link provided to complete your registration.
          </p>
          <hr className='emailConfirm__divider' />
          <p>
            If you not got any mail
            <span onClick={handleClick} className='accent'>
              {' '}
              Resend cofirmation mail
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default EmailConfirmation

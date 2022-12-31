import { ComponentPropsWithoutRef } from 'react'

export const MediaPlayer = (props: ComponentPropsWithoutRef<'svg'>) => (
  <svg
    width="40"
    height="48"
    viewBox="0 0 40 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.55417 1.30539C4.13125 0.421017 6.06354 0.457476 7.60729 1.40018L37.6042 19.7293C39.0938 20.646 40 22.2606 40 24.0002C40 25.7398 39.0938 27.3543 37.6042 28.1773L7.60729 46.5106C6.06354 47.5419 4.13125 47.5835 2.55417 46.6981C0.976771 45.8127 0 44.146 0 42.3335V5.66685C0 3.85852 0.976771 2.19081 2.55417 1.30539ZM5 42.3335L35 24.0002L5 5.66685V42.3335Z"
      fill="currentColor"
    />
  </svg>
)

import React from 'react'
import SocialMedia from './SocialMedia'

const ContactIntro = () => {
  return (
    <div className="pattern-background flex flex-col items-center justify-center text-center lg:p-15 p-10">
      <h6 className="text-main uppercase">
             contact
            </h6>
            <h2 className="mt-0 text-black">
              Let's Connect!
            </h2>
            <SocialMedia />
      </div>
  )
}

export default ContactIntro
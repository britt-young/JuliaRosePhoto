import React from 'react'
import SocialMedia from './SocialMedia'

const ContactIntro = () => {
  return (
    <div className="pattern-background flex flex-col items-center justify-center text-center lg:p-15 p-10">
      <h2 className="text-base/7 font-semibold text-dark uppercase tracking-tighter">
             contact
            </h2>
            <p className="mt-0 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Let's Connect!
            </p>
            <SocialMedia />
      </div>
  )
}

export default ContactIntro
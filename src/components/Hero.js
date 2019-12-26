import React from 'react'

// passing children in makes sure that whatever's inside the Hero tag is rendered
export default function Hero({children, hero}) {
  return (
    <header className={hero}>
      {children}
    </header>
  )
}

Hero.defaultProps = {
  hero: 'defaultHero'
}

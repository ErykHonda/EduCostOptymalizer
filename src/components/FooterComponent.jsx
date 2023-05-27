import React from 'react'
import { Author, Version } from '../assets/assets'
function FooterComponent() {
  return (
    <footer>
      <div className='x'>Projekted By: {Author}</div>
      <div className='xx'>Build: {Version}</div>
    </footer>
  )
}

export default FooterComponent
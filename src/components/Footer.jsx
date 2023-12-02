import React from 'react'
import "../styles/footer.scss"

export const Footer = () => {
  return (
    <footer>
        <div className='Top'>
            <h1>TechMan</h1>
            <p>all right reserved</p>
        </div>
        <div className='Bottom'>
            <h5>Follow us</h5>
            <div>
                <a href="http://youtube.com">Youtube</a>
                <a href="http://instagram.com">Instagram</a>
                <a href="http://github.com">Github</a>
            </div>
        </div>
    </footer>
  )
}

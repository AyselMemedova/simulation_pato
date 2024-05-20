import React from 'react'
import "./Section2.css"
const Section2_italian = () => {
  return (
    <div className='section2_all'>
      <div className="container">
        <div className="row section2 ">
            <div className="col-6 section2_text">
                <h4>Italian Restaurant</h4>
                <h3>WELCOME</h3>
                <p>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</p>
                <span>  OUR STORY  <i class="fa-solid fa-arrow-right"></i></span>
            </div>

            <div className="col-6 section2_image">
                <img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg.webp" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section2_italian

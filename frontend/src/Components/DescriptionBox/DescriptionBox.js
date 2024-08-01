import React from 'react'
import "./descriptionbox.css"

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
            Description
        </div>
        <div className="descriptionbox-nav-box fade">
            Reviews
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti deleniti eveniet aperiam quisquam nihil voluptatibus ipsam maxime, hic consequatur fuga, unde maiores voluptate debitis sequi in. Deserunt tempora blanditiis quasi, sequi ducimus assumenda recusandae illum quidem iure commodi, mollitia maxime.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem vitae repudiandae optio dicta nihil.</p>
      </div>
    </div>
  )
}

export default DescriptionBox

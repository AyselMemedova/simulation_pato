import React from 'react'
import "./Customer.css"
const Customer = () => {
    return (
        <div className='customer_all'>
            <div className="customer_text">
                <h4>Customers Say</h4>
                <h3>REVIEW</h3>
            </div>

            <div className="cuctomer_img">
                <img src="https://preview.colorlib.com/theme/pato/images/avatar-05.jpg.webp" alt="" />
            </div>

            <div className="customer_text2">
                <p>
                    “ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre- <br />tium nec, fermentum viverra dui ”
                </p>
                <div className='customer_text2_ulduz'>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>

                <p>Marie Simmons ˗ New York</p>
            </div>
        </div>
    )
}

export default Customer

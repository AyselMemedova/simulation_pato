import React, { useContext } from 'react'
import "./Detail.css"
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router'
import MainContext from '../../../context/context'
const Detail = () => {

    
    const { id } = useParams()
    const { data } = useContext(MainContext)

    const target=data.find((item)=>item._id==id)
    return (

        
        <div className='detail_all'>
              <Helmet>
                <title>Detail</title>
            </Helmet>
            <div className="detail_img">
                <img src={target.image} alt="" />
            </div>

            <div className="detail_text">
                <h4>{target.title}</h4>
                <p>Description:{target.description}</p>
                <p>Price:{target.price}$</p>
            </div>

        </div>
    )
}

export default Detail

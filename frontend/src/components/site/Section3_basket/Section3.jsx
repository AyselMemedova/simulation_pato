import React, { useContext, useEffect, useState } from 'react'
import "./Section3.css"
import MainContext from '../../../context/context'
import { Link } from 'react-router-dom';
import axios  from 'axios';

const Section3 = () => {
  const { data } = useContext(MainContext)
  const [search, setSearch] = useState("");
  const [product,setProduct]=useState([]);
  const [sortby, setSortby] = useState(null);

  return (

    <div className='section3_all'>
      <div className='filter'>
      <div className="search">
      <input
        type="text" id='search'
        placeholder="search data "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button id='search'>Search</button>
      </div>
      </div>
      
      
    
      <div className="container">
        <div className="cards">
          <div className="row">
            {
                data && data.filter((x) => x.title.toLowerCase().includes(search.toLowerCase()))

                  .map((item, index) => (
                    <div className="col-4" key={index}>

                      <img src={item.image} alt="" />
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <p>{item.price}</p>
                      <button  > <Link to={`detail/${item._id}`}>
                        LEARN MORE  <i class="fa-solid fa-arrow-right"></i>
                      </Link>

                      </button>
                    </div>
                  ))
            }

          </div>

        </div>
      </div>
    </div>
  )
}

export default Section3

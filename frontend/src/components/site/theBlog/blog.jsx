import React from 'react'
import "./blog.css"
const Blog = () => {
    return (
        <div>

            <div className="container blog_all">
                <div className="row">
                <div className="blog_text">
                    <h3>Latest News</h3>
                    <h4>THE BLOG</h4>
                </div>
                <div className="col-4 cardlar" >
                        <img src="https://preview.colorlib.com/theme/pato/images/blog-01.jpg.webp" alt="" />
                        <h4>BEST PLACES FOR WINE</h4>
                        <p>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                        <button>
                            CONTINUE READING  <i class="fa-solid fa-arrow-right"></i>

                        </button>
                    </div>

                    <div className="col-4 cardlar" >
                        <img src="https://preview.colorlib.com/theme/pato/images/blog-02.jpg.webp" alt="" />
                        <h4>BEST PLACES FOR WINE</h4>
                        <p>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                        <button>
                            CONTINUE READING  <i class="fa-solid fa-arrow-right"></i>

                        </button>
                    </div>

                    <div className="col-4 cardlar" >
                        <img src="https://preview.colorlib.com/theme/pato/images/blog-03.jpg.webp" alt="" />
                        <h4>BEST PLACES FOR WINE</h4>
                        <p>Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                        <button>
                            CONTINUE READING  <i class="fa-solid fa-arrow-right"></i>

                        </button>
                    </div>

                </div>
            </div>
           
        </div>
    )
}

export default Blog

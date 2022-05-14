import axios from 'axios';
import { useEffect, useState } from 'react';
import CategoryBlog from './CategoryBlog';
import { Link } from 'react-router-dom';
import "../blog/Blog.css";

//

export default function BodyBlog() {
    const [productBlog, setProductBlog] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/product-blog`)
            .then(data => setProductBlog(data.data.productBlogs))
    }, [])


    return (
        <div className='container-fluid content__body__blog'>
            <div className='row'>
                <div className='col-lg col-md-3'>
                    <CategoryBlog />

                    <div>
                        <h4 className='recent_news_blog'>
                            <b style={{ color: '#7fad39' }}>Recent News</b>
                            {/* <div class="card mb-3" style={{ maxWidth: '70%', height: '75px', fontSize: '15px', marginTop: '20px', borderRadius: '0' }}>
                                <div class="row g-0">
                                    <div class="col-4">
                                        <img style={{ height: '90%', width: '78%' }} src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/248369484_1218543181991435_3868190749928450779_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=szt29d3FzuAAX_Bu-96&_nc_ht=scontent.fdad3-4.fna&oh=00_AT9kq0rf4AFUqhwIYbRspulIJYYfoNAaPq_1Nwp1yg77aQ&oe=6222596F" class="img-fluid rounded-start" alt="..." />
                                    </div>

                                    <div class="col-md-8">
                                        <div style={{ marginLeft: '0px' }}>
                                            <p class="card-title"><b>6 ways to prepare breakfast for 30</b></p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </h4>
                    </div>

                    <div className=''>
                        <b>Search By</b>
                    </div>
                </div>


                <div className='col-xl-9'>
                    {productBlog.map((data, index) => (
                        <div key={index}>
                            <div className="card mb-3" style={{ maxWidth: "100%", border: 'none' }}>
                                <div className="row g-0">
                                    <div className="col-md-5">
                                        <img style={{ width: '100%', minHeight: '230px' }} src={data.imgProduct} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div style={{ position: 'relative' }} className="col-md-7">
                                        <div className="card-body">
                                            <h5 style={{ fontSize: '17px' }} className="card-title"><b>{data.nameProduct}</b></h5>
                                            <p className="card-text"><small className="text-muted">by Halo Themes on January 02, 2019 0 Comments</small></p>
                                            <p style={{ fontSize: '15px', color: '#9A9C9A' }} className="card-text">{data.descriptionProduct}</p>

                                            <Link className='readMore' to={`/Blog/${data.nameProduct}`}>
                                                <div style={{ position: 'absolute', bottom: '30px'}} className='btn-read-more'><p>READ MORE</p></div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <p style={{ width: '100%', height: '1px', background: '#E6E6E6', marginTop: '50px', marginBottom: '50px' }}></p>
                </div>
            </div>
        </div>
    );
}

// https://loza.vn/blog-thoi-trang
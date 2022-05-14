import React, { useEffect, useState } from 'react';
import CategoryBlog from '../components/blog/CategoryBlog';
import BoundaryLine from '../components/reuseComponents/BoundaryLine';
import { getDetailProductBlog } from '../callDatas/Api';
import { useParams } from 'react-router-dom';

export default function PostBlogDetail() {
  const [productBlog, setProductBlog] = useState([])
  const { ParamNameProduct } = useParams()

  useEffect(() => {
    if (ParamNameProduct) {
      const fetch = async () => {
        const res = await getDetailProductBlog(ParamNameProduct);
        if (res && res.status === 200) {
          setProductBlog(res.data.productDetailBlog[0])
        }
      }
      fetch();
    }
  }, [ParamNameProduct])

  console.log(productBlog)


  return (
    <div style={{ paddingTop: '80px', width: '90%' }} className='container-fluid wrapp__detail__blog'>
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
          <p>Loremous Comodous: Trending</p>
          <h5>{productBlog.nameProduct}</h5>
          <p>by Halo Themes on Jan 02, 2019 0 Comments</p>
          <img style={{ width: '100%', maxHeight: '50%' }} src={productBlog.imgProduct} alt='' />
          <p>{productBlog.descriptionProduct}</p>
          <BoundaryLine />
        </div>
      </div>
    </div>
  )
}

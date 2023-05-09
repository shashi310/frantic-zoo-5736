import React from 'react'
import Navbar from './Navbar'
import Footer from "../Components/Footer"
import  "../css/Home.css"
import poster from "../images/poster.png"
import { AiFillStar } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import 'typeface-poppins';


function Home() {

  // const [data,setData] = useState([])
  // const [filterByColor, setFilterByColor] = useState(null);
  // useEffect(() => {
  //   axios.get(`http://localhost:8080/flowers` )
  //     .then((res) => res.data)
  //     .then(data =>{
  //       let filteredData =data ;
  //         if (filterByColor) {
  //           filteredData = data.filter(data => data.color === filterByColor);
  //         }
  //         setData(filteredData)
  //     })
  
  //     .catch((err) => alert(err));
  // }, [filterByColor]);
  

  return (
    <>
    <Navbar/>
     <div className='Home-container'>
        <div className='two-in-one'>
        <img src='https://www.netmeds.com/images/cms/aw_rbslider/slides/1682870704_Web_Home_Bannersvbvv.jpg?quality=70&auto=webp&optimize={medium}' alt='first-image'/>
        <form className='form-home-occasion'>
        <h4 style={{color:"rgb(110, 50, 144)"}}>Get the Service Now</h4>
        <div className='Find-perfecti-gift'>
        <div>
        <label>Locate Yourself</label>
         <input placeholder='Delivery zip code'/>
          </div>
         <div className='hero'>
        <label >Services</label>
        <select> 
        <option value="" selected>Select an item</option>
         <option value="item">Lab Test</option>
         <option value="item2">Order Medicine</option>
         <option value="item3">Book Appointment</option>
        <option value="item4">Health Devices</option>
       </select>
         </div>
        </div>
        <button>Order Now</button>
         </form>
        </div>


        <h1>Shop by Category</h1>
        <div id='Send-flowers'>
        <div>
          <img src="https://www.netmeds.com/images/category/v1/3964/thumb/petcare_2.jpg?quality=85&auto=webp&optimize={medium}" alt='pet Care'/>
          Pet Care </div>
          <div>
          <img src="https://www.netmeds.com/images/category/3222/thumb/vitamins_and_supplements_1.jpg?quality=85&auto=webp&optimize={medium}" alt='Vitamins and Supplements'/>
           Vitamins and Supplements</div>
          <div>
          <img src="https://www.netmeds.com/images/category/v1/676/thumb/orthopaedics_2.jpg?quality=85&auto=webp&optimize={medium}" alt='OrthoPaedics'/>
          OrthoPaedics</div>
          <div>
          <img src="https://www.netmeds.com/images/category/675/thumb/measurements_1.jpg?quality=85&auto=webp&optimize={medium}" alt='Measurments'/>
          Measurments</div>
          <div>
          <img src="https://www.netmeds.com/images/category/3362/thumb/dilutions_0.jpg?quality=85&auto=webp&optimize={medium}" alt='Dilutions'/>
          Dilutions</div>
          <div>
          <img src="https://www.netmeds.com/images/product-v1/150x150/895027/onelife_monofloral_manuka_honey_500_gm_0_1.jpg?quality=85&auto=webp&optimize={medium}" alt='Ingredients'/>
          Ingredients</div>
        </div>




        <div className='birthday-special' >
          <img src='https://www.netmeds.com/images/cms/aw_rbslider/slides/1683242996_personal-care_web.jpg?quality=85&auto=webp&optimize={medium}' alt='change'></img>
        </div>

        <h3 className='two-spring-htag'>Trending Today</h3>
        <div className='two-spring-bulb'>
          <img src='https://www.netmeds.com/images/cms/aw_rbslider/slides/1682684006_Vicks_Home_Page_Mini_Banner_Web.jpg?quality=60&auto=webp&optimize={medium}' alt='spring-bulb'/>
          <img src='https://www.netmeds.com/images/cms/aw_rbslider/slides/1683139078_Vetoquinol_mini_web.jpg?quality=60&auto=webp&optimize={medium}' alt='spring-bulb'/>
          <img src='https://www.netmeds.com/images/cms/aw_rbslider/slides/1683022850_Dabur_web.jpg?quality=60&auto=webp&optimize={medium}' alt='spring-bulb'/>
          <img src='https://www.netmeds.com/images/cms/aw_rbslider/slides/1683023296_Dr._Willmar_Schwabe_Mini_banner_web.jpg?quality=60&auto=webp&optimize={medium}' alt='spring-bulb'/>
        </div>

        <h2 style={{textAlign:"center"}}>New on Medmarket</h2>
        <div className='selfcare'>
          <img src='https://www.netmeds.com/images/cms/aw_rbslider/slides/1682405979_Dhootapapeshwar_web.jpg?v=1?quality=85&auto=webp&optimize={medium}'/>
          <img src='https://www.netmeds.com/images/cms/aw_rbslider/slides/1678797273_Bangalore-Bio-plasgens_web.jpg?v=1?quality=85&auto=webp&optimize={medium}'/>
          <img src='https://www.netmeds.com/images/cms/aw_rbslider/slides/1679996052_Wolfe-Dietri_web.jpg?quality=85&auto=webp&optimize={medium}'/>
          <img src='https://www.netmeds.com/images/cms/aw_rbslider/slides/1683139269_Nutrileague_web.jpg?quality=85&auto=webp&optimize={medium}'/>
          <img src='https://www.netmeds.com/images/cms/aw_rbslider/slides/1683139204_Hapro-Homeo_web.jpg?quality=85&auto=webp&optimize={medium}'/>
          <img src='https://www.netmeds.com/images/cms/aw_rbslider/slides/1683139389_Ramaraju_web.jpg?quality=85&auto=webp&optimize={medium}'/>
        </div>
        
        <h2 className='delicious-gift'>Hot Brands</h2>
        <div  className='two-spring-bulb'>
          <img src='https://www.netmeds.com/images/cms/aw_rbslider/slides/1676974628_Inlife_mini-banners-web.jpg?quality=60&auto=webp&optimize={medium}' alt='err1'/>
          <img src='https://www.netmeds.com/images/cms/aw_rbslider/slides/1681209297_Lenskart_mini_web.jpg?quality=60&auto=webp&optimize={medium}' alt='err-2'/>
        </div>

        <div className='gifts-and-more'>
          <img src='https://softwareauggest-blogimages.s3.ca-central-1.amazonaws.com/blog/wp-content/uploads/2022/11/28162754/Best-FreeOpen-Source-Hospital-Management-System-01.png?quality=85&auto=webp&optimize={medium}' alt='gift'/>
          <div>
          <img src='https://www.ebsco.com/sites/default/files/acquiadam-assets/accessibility-screen-reader-blog-image-780.jpg?w=1060&t=st=1680109152~exp=1680109752~hmac=cdd0edb15742608d3a43ca946879b00b77543a3fcd36e8f2410c11304b1af870' alt='my-choice'/>
          </div>
        </div>
         






        <h1>know more</h1>
        <div id='Send-flowers'>
        <div>
          <img src="https://www.netmeds.com/images/cms/magefan_blog/nmslite/1683266525_World-Thalassemia-Day_480x180.jpg?quality=85&auto=webp&optimize={medium}" alt='pet Care'/>
          Pet Care </div>
          <div>
          <img src="https://www.netmeds.com/images/cms/magefan_blog/nmslite/1683282362_Header-Banner_480x180.jpg?quality=85&auto=webp&optimize={medium}" alt='Vitamins and Supplements'/>
           Vitamins and Supplements</div>
          <div>
          <img src="https://www.netmeds.com/images/cms/magefan_blog/nmslite/1596790929_Celery_features_480.jpg?quality=85&auto=webp&optimize={medium}" alt='OrthoPaedics'/>
          OrthoPaedics</div>
          <div>
          <img src="https://www.netmeds.com/images/cms/magefan_blog/nmslite/1581057471_Lemongrass_Unbelievable_Featuredimage_480x180.jpg?quality=85&auto=webp&optimize={medium}" alt='Measurments'/>
          Measurments</div>
          <div>
          <img src="https://www.netmeds.com/images/cms/magefan_blog/nmslite/1649232100_480x180.jpg?quality=85&auto=webp&optimize={medium}" alt='Dilutions'/>
          Dilutions</div>
          <div>
          <img src="https://www.netmeds.com/images/cms/magefan_blog/nmslite/1683282362_Header-Banner_480x180.jpg?quality=85&auto=webp&optimize={medium}" alt='Ingredients'/>
          Ingredients</div>
        </div>





        <h1>Health concerns</h1>
        <div id='Send-flowerss'>
        <div>
          <img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/lung-care.jpg?v=1?quality=85&auto=webp&optimize={medium}" alt='pet Care'/>
          Lung care </div>
          <div>
          <img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/weight-care.jpg?v=1?quality=85&auto=webp&optimize={medium}" alt='Vitamins and Supplements'/>
           Vitamins and Supplements</div>
          <div>
          <img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/women-s-care.jpg?v=1?quality=85&auto=webp&optimize={medium}" alt='OrthoPaedics'/>
          OrthoPaedics</div>
          <div>
          <img src="https://www.netmeds.com/images/cms/wysiwyg/category/v2/img/bone-and-joint-pain.jpg?v=1?v=1?v=1?quality=85&auto=webp&optimize={medium}" alt='Measurments'/>
          Measurments</div>
          
          
        </div>







         {/* <h2 style={{textAlign:"center"}}>Trending Flowers & Gifts</h2>
         <div className='eight-images'>
        <div>
          <img src='https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191309lz.jpg?quality=85&auto=webp&optimize={medium}' alt='err'/>
          <p>Spring Sensation™</p>
        </div>
        <div>
          <img src='https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191254xlx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}' alt='err'/>
          <p>Fields Of Europe® </p>
        </div>
        <div>
          <img src='https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/90925mpuv5ch29x.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}' alt='err-3'/>
          <p>Two Dozen Assorted Roses</p>
        </div>
        <div>
          <img src='https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/91158mmmj2sc9x.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}' alt='err-4'/>
          <p>Sweet Spring Lily Bouquet</p>
        </div>
        <div>
          <img src='https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/158024lg1x.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}' alt='err-5'/>
          <p>Delightful Daffodil Bulbs </p>
        </div>
        <div>
          <img src='https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/90577mprsv1sc9x.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}' alt='err-6'/>
          <p>Assorted Tulip Bouquet</p>
        </div>
        <div>
          <img src='https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191310lx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}' alt='err-7'/>
          <p>Spring Sentiment™ Bouquet</p>
        </div>
        <div>
          <img src='https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191308lx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}' alt='err-8'/>
          <p>Pastel Posy™ Bouquet</p>
        </div>
        </div> */}





        {/* <div className='free-shipping-poster' >
          <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltacd983b63a7ffb07/63c5ccc2eeda2410c17f4286/Post_Enrollment_Desktop_V2_Image_(2).png?quality=85&auto=webp&optimize={medium}' alt='free-shipping'></img>
        </div> */}
          




         {/* <h2 style={{textAlign:"center"}}>  Share Your #MadeMeSmile Flowers Moment</h2>
        <div className='insta-icon-four-images'>
         <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltbcf30ced0a418919/63fcd5c452820c02597c04e3/ugc-image-fields-of-europe-spring.jpg?quality=85&auto=webp&optimize={medium}'/>
         <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt9536a0b1f715fd80/63fcd60582b5176dad0999c4/ugc-image-assorted-tulip-bouquet.jpg?quality=85&auto=webp&optimize={medium}'/>
         <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltf96a2f03a42e1c17/63fcd62d16515710b8ed4694/ugc-image-sorbet-roses.jpg?quality=85&auto=webp&optimize={medium}'/>
         <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt205c41fe8e8ce8f6/63fcd65eff1d0646c816f367/ugc-image-marble-queen-pothos-plant.jpg?quality=85&auto=webp&optimize={medium}'/>
        </div> */}








      <h2 className='rating-heading'>Some of the Great Things Our Customers Say About Us</h2>
      <div className='rating'>
         <div>
          <img src='https://www.netmeds.com/images/product-v1/150x150/1064023/vissco_core_sacro_lumbar_belt_with_double_strapping_mild_support_0101_xl_1s_481378_0_0.jpg?quality=70&auto=webp&optimize={medium}' alt='1st-img'/>
          <div className='start-color'>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          </div>
          <h5>Comfy</h5>
          <p>"I bought these for my Nana and she said they were amazing</p>
          <h5>- Pamela</h5>
         </div>

         <div>
          <img src='https://www.netmeds.com/images/product-v1/150x150/924248/gynocup_reusable_menstrual_cup_small_natural_intimate_gynowipe_10s_natural_menstrual_cup_wash_liquid_100_ml_426070_0_1.jpg?quality=60&auto=webp&optimize={medium}' alt='2nd-img'/>
          <div className='start-color'>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          </div>
          <h5>satisfied</h5>
          <p>"goood Product"</p>
          <h5>- Jennifer</h5>
         </div>

         <div>
          <img src='https://www.netmeds.com/images/product-v1/150x150/1058957/newnik_digital_weighing_scale_grey_1s_461155_0_0.jpg?quality=60&auto=webp&optimize={medium}' alt='3-img'/>
          <div className='start-color'>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          </div>
          <h5>Very Happy!</h5>
          <p>"I bought this for my Clinic and it is a quality product ! thanks Medmarket"</p>
          <h5>- Betty</h5>
         </div>

         <div>
          <img src='https://www.netmeds.com/images/product-v1/150x150/1069586/sahyog_wellness_stature_meter_wall_mount_height_measurement_2m_200cm_black_1s_496190_0_1.jpg?quality=60&auto=webp&optimize={medium}' alt='4-img'/>
          <div className='start-color'>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          </div>
          <h5>Loved it</h5>
          <p>"Such a Quality item"</p>
          <h5>- Brian</h5>
         </div>
      </div>
      <div className='powered-by-img'>
         <p>Powered by</p>
         <div>
           <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltcf637a6e16efdb8e/5ea9acbed4b10d15d3e8cfb3/yotpo-logo.png?quality=70&auto=webp&optimize={medium}'/>  
         </div>
         </div>
       <div>
        <img src={poster} alt="poster"/>
       </div>
       {/* <div className='deliver-heading'>
      <h4>More About Our Flower Delivery <BiRightArrowAlt/></h4>

      <div className='color'>
        <h5>Send Flowers Online with Flower Delivery by 1-800-Flowers.com, the World's Favorite Florist!</h5>
      <p>There's no better place to order flowers online than 1-800-Flowers.com. Whether you're looking to buy flowers and gifts like roses, orchids, gift baskets, bonsai trees, flowering plants or wedding bouquets, we have the highest quality blooms and the most talented florists who can create exactly what you order. Dazzle and delight your loved ones wherever they may be with truly original flowers and gifts from 1-800-Flowers.com.</p>
      </div>
      <div className='color'>
        <h5>Quick Flower Delivery and Great Customer Service</h5>
      <p>Same-day flower delivery is available every day, for all seasons: spring, winter, summer and fall. To send flowers for same-day delivery, all you have to do is place your order by the following times in the gift receiver's time zone: 2:30 p.m. weekdays, 1:15 p.m. Saturdays, and 11:45 a.m. Sundays. Our customer service team is standing by to help you with any gift or flower order. Whether you're sending red roses to your sweetie, celebrating a birthday, or sending a get well gift to someone feeling under the weather, if you have questions, our team has answers! Just call 1-800-356-9377 or place an order for flower delivery online. We will help you find and deliver the perfect flowers, plants, or gift to celebrate life's most meaningful moments - from birthday gift recommendations, to anniversary floral arrangements she is sure to love.
      </p>
      <p> For sympathy gifts and funeral flowers, our team of experienced Sympathy Advisors are ready to assist you at 1-866-538-2259.</p>
      <div className='color'>
        <h5>Send Flowers Internationally</h5>
      <p>We deliver flowers across the United States and around the world. If you want to send flowers internationally, trust us to deliver your most heartfelt messages. Because of our partnerships with local florists and flower growers, we are able to ensure that bouquets are delivered fresh from the field and on time. Our flower arrangements are artfully created and delivered perfectly arranged by professional florists.</p>
      </div>
      </div>

      </div> */}


   <Footer/>

     </div>
    </>
  )
}

export default Home
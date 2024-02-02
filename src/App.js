import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMdSearch } from "react-icons/io";
import { AiFillShopping } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { IoExtensionPuzzle } from "react-icons/io5";
import { MdLocationCity } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { MdNetworkWifi2Bar } from "react-icons/md";
import { Button, Carousel } from 'react-bootstrap';



function App() {
  return (
    <div>

      <header className='container'>
        <div className='logo'>
          <img src={require('./image/logo-black.png')}></img>
        </div>
        <div className='manu'>
          <li>
            <ul>Home</ul>
            <ul>Project</ul>
            <ul>Service</ul>
            <ul>Pages</ul>
            <ul>Blog</ul>
            <ul>Shop</ul>
            <ul>Contact</ul>
          </li>
          <i><IoMdSearch></IoMdSearch></i>
          <i><AiFillShopping></AiFillShopping></i>
          <i><IoMenu></IoMenu></i>
        </div>
      </header>


      <div className='slider'>
        {/* <div>
          <img src={require('./image/slide-01.jpg')}></img>
        </div> */}
        <Carousel>
      <Carousel.Item interval={1000}>
      <img src={require('./image/slide-01.jpg')}></img>
        
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button>see more</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src={require('./image/slide-01.jpg')}></img>

        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>see more</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={require('./image/slide-01.jpg')}></img>

        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <button>see more</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>


      <div className='section-3'>
        <div className='img-1'>
          <div className='img1-1'>
            <h3>WE ARE ARCH</h3>
            <h2>YOUR BEST SOLUTION</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              Ut enim ad minim veniam, quis nostrud exercitat ullamco laboris nisi ut aliquip ex ea com consequat realzonal.</p>
            <button>see more</button>
          </div>
        </div>
        <div className='img-2'>
          <div className='img2'>
            <img src={require('./image/icon-service-01.png')}></img>
            <p>AGENCY INTERIOR</p>
          </div>
        </div>
        <div className='img-3'>
          <div className='img2'>
            <img src={require('./image/icon-service-02.png')}></img>
            <p>ECOMMERCE INTERIOR</p>
          </div>
        </div>
        <div className='img-4'>
          <div className='img2'>
            <img src={require('./image/icon-service-03.png')}></img>
            <p>RESIDENTIAL INTERIOR</p>
          </div>
        </div>
      </div>


      <div className='section-4'>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1>OUR</h1>
          <h1 style={{ color: '#ebcd1e', marginLeft: '10px' }}>PROCESS</h1>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px', color: 'GrayText' }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br></br>elit, sed do eiusmod tempor</p>
        </div>
        <div className='container' style={{ display: 'flex', marginTop: '100px', justifyContent: 'space-between' }}>
          <div className='box'>
            <div className='box1'>
              <i><BsFillPeopleFill></BsFillPeopleFill></i>
              <h2>MEET</h2>
            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuntium.</p>
          </div>
          <div className='box'>
            <div className='box2'>
              <i><MdOutlineLocalLibrary></MdOutlineLocalLibrary></i>
              <h2>DISCUSSION</h2>
            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuntium.</p>
          </div>
          <div className='box'>
            <div className='box3'>
              <i><IoExtensionPuzzle></IoExtensionPuzzle></i>
              <h2>IDEAL</h2>
            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuntium.</p>

          </div>
          <div className='box'>
            <div className='box4'>
              <i><MdLocationCity></MdLocationCity></i>
              <h2> CONSTRUCT</h2>
            </div>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuntium.</p>

          </div>
        </div>
      </div>


      <div className='section-5'>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
          <h1>LATEST</h1>
          <h1 style={{ color: '#ebcd1e', marginLeft: '10px' }}>PROJECT</h1>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px', color: 'GrayText', marginBottom: '80px' }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br></br>elit, sed do eiusmod tempor</p>
        </div>
        <div className='gallery'>
          <div className='six-img'>
            <div>
              <div className='g-img1'>
                <img src={require('./image/latest-project-01.jpg')}></img>
              </div>
              <div className='g-img2'>
                <img src={require('./image/latest-project-02.jpg')}></img>
              </div>
            </div>
            <div>
              <div className='g-img3'>
                <img src={require('./image/latest-project-03.jpg')}></img>
              </div>
              <div className='g-img4'>
                <img src={require('./image/latest-project-04.jpg')}></img>
              </div>
            </div>
            <div>
              <div className='g-img5'>
                <img src={require('./image/latest-project-05.jpg')}></img>
              </div><div className='g-img6'>
                <img src={require('./image/latest-project-06.jpg')}></img>
              </div>
            </div>
          </div>
          <div className='big-img'>
            <div className='g-img7'>
              <img src={require('./image/latest-project-07.jpg')}></img>
            </div>
          </div>
        </div>
      </div>


      <div className='section-6'>
        <div className='container'>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
            <h1>OUR</h1>
            <h1 style={{ color: '#ebcd1e', marginLeft: '10px' }}>BLOG</h1>
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px', color: 'GrayText', marginBottom: '80px' }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br></br>elit, sed do eiusmod tempor</p>
          </div>
          <div style={{ display: 'flex' }}>
            <div className='blog-single'>
              <img src={require('./image/blog-single-01.jpg')}></img>
              <div class="date date--big">
                <div class="date" style={{margin: '0px 0px',border: 'solid white 0.5px',width:'50px',height:'50px'}}>
                  <p class="day">24<br></br>des</p>
                  {/* <p class="month">dec</p> */}
                </div>
              </div>
            </div>
            <div className='blogs'>
              <div>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '665px', marginRight: '35px' }}>
                    <img src={require('./image/blog-01.jpg')}></img>
                    <div class="date date--big1">
                      <div class="date">
                        <p class="day">24<br></br>des</p>
                        {/* <p class="month">dec</p> */}
                      </div>
                    </div>

                  </div>
                  <div style={{ lineHeight: '20px' }}>
                    <p className='title-blog'>the detail are not the detail , they make the design</p>
                    <p className='blog-cap0'>by Anthony Lee</p>
                    <p className='blog-cap'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labequat.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', marginTop: '65px' }}>
                  <div style={{ width: '665px', marginRight: '35px' }}>
                    <img src={require('./image/blog-02.jpg')}></img>
                    <div class="date date--big2">
                      <div class="date">
                        <p class="day">24<br></br>des</p>
                        {/* <p class="month">dec</p> */}
                      </div>
                    </div>

                  </div>
                  <div style={{ lineHeight: '20px' }}>
                    <p className='title-blog'>5 things will make your room more beautiful</p>
                    <p className='blog-cap0'>by Anthony Lee</p>
                    <p className='blog-cap'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labequat.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', marginTop: '65px' }}>
                  <div style={{ width: '665px', marginRight: '35px' }}>
                    <img src={require('./image/blog-03.jpg')}></img>
                    <div class="date date--big3">
                      <div class="date">
                        <p class="day">24<br></br>des</p>
                        {/* <p class="month">dec</p> */}
                      </div>
                    </div>

                  </div>
                  <div style={{ lineHeight: '20px' }}>
                    <p className='title-blog'>the best design projects are the ones where people broke the rules</p>
                    <p className='blog-cap0'>by Anthony Lee</p>
                    <p className='blog-cap'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labequat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '170px' }}>
            <div style={{ marginTop: '10px' }}>
              <p style={{ fontWeight: '650', fontSize: '20px' }}>DEDIGN IS THINKING MAKE VISUAL</p>
              <p style={{ fontSize: '12px', lineHeight: '25px', color: 'gray' }}>by Mike Song</p>
              <p style={{ fontSize: '14px', color: '#555' }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem illution<br></br> accusantium doloremque laudantium, totam.</p>
            </div>
            <div>
              <button>See More</button>
            </div>
          </div>
        </div>

      </div>

      <div className='section-7' style={{ backgroundColor: '#f8f8f8', paddingTop: '100px', paddingBottom: '100px' }}>
        <div className='container'>
          <div className='say'>
            <h1>WHAT CLIENT<span style={{ color: '#ebcd1e' }}> SAY</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br></br> elit, sed do eiusmod tempor</p>
          </div>
          <div style={{ display: 'flex' }}>
            <div className='client-01'>
              <div style={{ width: '500px' }}>
                <img src={require('./image/client-01.jpg')}></img>
              </div>
              <div style={{ backgroundColor: '#222222', color: 'whitesmoke', textAlign: 'left', padding: '25px', fontSize: '14px', lineHeight: '20px' }}>
                <p>Sed ut perspiciatis under omnis iste natus error sit set voluptatem accusantium alti doloremque ipsa.</p>
                <p style={{ marginTop: '20px', color: '#ebcd1e' }}>Lamar Hill</p>
                <em>Developer</em>
              </div>
            </div>
            <div className='client-02'>
              <div style={{ width: '500px' }}>
                <img src={require('./image/client-02.jpg')}></img>
              </div>
              <div style={{ backgroundColor: '#222222', color: 'whitesmoke', textAlign: 'left', padding: '25px', fontSize: '14px', lineHeight: '20px' }}>
                <p>Sed ut perspiciatis under omnis iste natus error sit set voluptatem accusantium alti doloremque ipsa.</p>
                <p style={{ marginTop: '20px', color: '#ebcd1e' }}>jack Man</p>
                <em>photographer</em>
              </div>
            </div>
            <div className='client-03'>
              <div style={{ width: '500px' }}>
                <img src={require('./image/client-03.jpg')}></img>
              </div>
              <div style={{ backgroundColor: '#222222', color: 'whitesmoke', textAlign: 'left', padding: '25px', fontSize: '14px', lineHeight: '20px' }}>
                <p>Sed ut perspiciatis under omnis iste natus error sit set voluptatem accusantium alti doloremque ipsa.</p>
                <p style={{ marginTop: '20px', color: '#ebcd1e' }}>jackie Lee</p>
                <em>designer</em>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className='last'>
            <div><img src={require('./image/partner-01.png')}></img></div>
            <div><img src={require('./image/partner-02.png')}></img></div>
            <div><img src={require('./image/partner-03.png')}></img></div>
            <div><img src={require('./image/partner-04.png')}></img></div>
            <div><img src={require('./image/partner-05.png')}></img></div>
            <div><img src={require('./image/partner-06.png')}></img></div>
        </div>
      

      <footer>
        <div style={{ backgroundColor: 'rgba(0,0,0,.8)' }}>
          <div className='logo' style={{ textAlign: 'center ', paddingTop: '90px' }}>
            <img src={require('./image/logo-white.png')}></img>
          </div>
          <form method="post" className="form-footer">
            <input type="text" name="name" class="form__input" placeholder="Your Email..."></input>
            <button type="submit" className="au-btn au-btn--yellow au-btn--white au-btn--submit">Send</button>
           
          </form>
          <ul className="ul--inline ul--footer">
            <li>
              <p href="service-list.html">Service</p>
            </li>
            <li>
              <p href="product.html">Product</p>
            </li>
            <li>
              <p href="portfolio-detail-v1.html">Gallery</p>
            </li>
            <li>
              <p href="blog-list.html">Blog</p>
            </li>
            <li>
              <p href="contact.html">Contact</p>
            </li>
          </ul>
          <div class="social">
            <p href="" className="social__item social__item--circle">
              <i class="zmdi zmdi-facebook"><TiSocialFacebook></TiSocialFacebook></i>
            </p>
            <p href="" className="social__item social__item--circle">
              <i class="zmdi zmdi-dribbble"><TiSocialTwitter></TiSocialTwitter></i>
            </p>
            <p href="" className="social__item social__item--circle">
              <i class="zmdi zmdi-google"><SlSocialInstagram></SlSocialInstagram></i>
            </p>
            <p href="" className="social__item social__item--circle">
              <i class="zmdi zmdi-twitter"><TiSocialPinterestCircular></TiSocialPinterestCircular></i>
            </p>
            <p href="" className="social__item social__item--circle">
              <i class="zmdi zmdi-instagram"><MdNetworkWifi2Bar></MdNetworkWifi2Bar></i>
            </p>
          </div>
        </div>
      </footer>
      <section className="copyright">
<div className="container">

Copyright © 2017 Designer by
<span>Authemes</span> . All rights reserved
</div>

</section>

    </div >
  );
}
export default App;

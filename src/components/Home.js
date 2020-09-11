import React from "react";
import SliderImage from "./Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Product from "./Product";
import Category from "./Category";
import Discover from "./Discover";

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        {/* <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt=''
        /> */}
        <SliderImage />

        <div className='home__row'>
          <Category
            title='Amazon Basics'
            image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg'
            link='See more'
          />
          <Category
            title='Computer & Acessories'
            image='https://images-na.ssl-images-amazon.com/images/I/81pG6xR8dnL._AC_SL1500_.jpg'
            link='See more'
          />
          <Category
            title='Get fit at home'
            image='https://images-na.ssl-images-amazon.com/images/I/51FxE1LMBKL._AC_SL1000_.jpg'
            link='See more'
          />
          <Category
            title='Video Games'
            image='https://images-na.ssl-images-amazon.com/images/I/61tl4Go6rqL._AC_SL1100_.jpg'
            link='See more'
          />

          {/* Product */}
          {/* Product */}
        </div>
        <div className='home__row'>
          <Product
            title='Think Like A Monk - By Jay Shetty'
            price={29.99}
            image='https://m.media-amazon.com/images/I/41mXQJF3aEL.jpg'
            rating={5}
          />
          <Product
            title='Profit With Javascript-A course that’ll kick your a**, teach you how to complete real-world projects and make a living as a modern JavaScript web developer.'
            price={399.99}
            image='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/a3liO9nUSCyEhyiAnDOw_Profit-with-JavaScript-new.jpg'
            rating={5}
          />
          <Product
            title='Lenovo Flex 5 14" 2-in-1 Laptop, 14.0" FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, Win 10, 81X20005US, Graphite Grey'
            price={1389.99}
            image='https://images-na.ssl-images-amazon.com/images/I/81x%2B9uFY1QL._AC_SL1500_.jpg'
            rating={5}
          />
        </div>
        <div className='home__row'>
          <Discover />
        </div>
        <div className='home__row'>
          {/* Product */}
          {/* Product */}
          <Product
            id='49035850'
            title='samsung LC49RG90SSUXEN 49" Curved LED Gaming Monitor'
            price={199.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
            rating={3}
          />
          <Product
            id='1532346'
            title='Echo Plus (2nd Generation) with Amazon Smart Plug - Charcoal'
            price={99.99}
            image='https://images-na.ssl-images-amazon.com/images/I/61mhy8eQGEL._AC_SL1000_.jpg'
            rating={4}
          />
          <Product
            id='4548135'
            title='New Apple iPad Pro (11-inch, Wi-Fi + Cellular, 256GB) - Space Gray (2nd Generation) with AppleCare+ Bundle'
            price={1178.99}
            image='https://images-na.ssl-images-amazon.com/images/I/61Qhkzxsb-L._AC_SL1500_.jpg'
            rating={5}
          />
          {/* Product */}
        </div>
        <div className='home__row'>
          {/* https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/a3liO9nUSCyEhyiAnDOw_Profit-with-JavaScript-new.jpg */}
          <Product
            id='490535850'
            title='Samsung CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty (C49J890DKN)'
            price={199.99}
            image='https://m.media-amazon.com/images/S/aplus-media/vc/b3fa1b54-e7f0-4838-9161-7c04ff734a65.__CR0,0,2000,820_PT0_SX1464_V1___.jpg'
            rating={3}
          />
          {/* Product */}
        </div>
      </div>
    </div>
  );
}

export default Home;

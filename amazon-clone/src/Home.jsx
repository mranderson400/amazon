import React from 'react'
import "./Home.css"
import Product from './Product'
const Home = () => {
  return (
    <div className='Home'>
        <div className='Home-container'>
            <img className='home_image' src="https://m.media-amazon.com/images/I/61QH1LQm4KL.jpg" alt="home banner" />

<div className='home_row'>
<Product title='The headphones' price={29.99}
 image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSvQR7MTsSwBXMt1N-73pSaTrIOB22yG00CraYPLGBbLmxt3Lnfg4PxPeAl6w7lo2x2gPkvpbI&usqp=CAc"
 rating={2}/>
<Product title='The tablet' price={199.99}
 image="https://images-na.ssl-images-amazon.com/images/I/61uE03cRsyS._AC_UL675_SR675,480_.jpg"
 rating={7}/>

</div>



<div className='home_row'>
<Product title='Stupid Harrys life story' price={1.99}
 image="https://images-na.ssl-images-amazon.com/images/I/91Szm8FpdfL._AC_UL675_SR675,480_.jpg"
 rating={1} />
<Product title='Pillow' price={299.99}
 image="https://images-na.ssl-images-amazon.com/images/I/41P4MmahPnS._AC_UL675_SR675,480_.jpg"
 rating={9}/>
<Product title='The headphones' price={29.99}
 image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSvQR7MTsSwBXMt1N-73pSaTrIOB22yG00CraYPLGBbLmxt3Lnfg4PxPeAl6w7lo2x2gPkvpbI&usqp=CAc"
 rating={2}/>
</div>


<div className='home_row'>
<Product title='TV' price={299.99}
 image="https://m.media-amazon.com/images/I/51mLyn02rKL._AC_SY400_.jpg"
 rating={8} />

</div>






        </div>
    </div>
  )
}

export default Home
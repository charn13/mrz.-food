import React from 'react'
import {Header, Footer, ProdcutItem} from '../Components/index'

const Home = (props) => {

  const productarry = [
    {
      id:1,
      productname:'Butter Chicken',
      price:320,
      img: 'https://tse3.mm.bing.net/th?id=OIP.EF_8fVl_dppijVaO9fenKgHaF-&pid=Api&P=0&h=180' 
    },
    {
      id:2,
      productname:'Tandoori Chicken',
      price:380,
      img: 'https://foodiewish.com/wp-content/uploads/2020/05/Tandoori-Chicken-Recipe.jpg'  
    },
    {
      id:3,
      productname:'Afghani Tandoori Chicken',
      price:400,
      img: 'https://tse2.mm.bing.net/th?id=OIP.qZezX6mYXc-A2g87pKNtpgHaE8&pid=Api&P=0&h=180'  
    },
    {
      id:4,
      productname:'Chicken Pakora ',
      price:250,
      img: 'https://tse2.mm.bing.net/th?id=OIP._h_Scd0IjvG5PEvq4M5UXgHaHa&pid=Api&P=0&h=180'  
    },
    {
      id:5,
      productname:'Chilli Chicken',
      price:450,
      img: 'https://tse3.mm.bing.net/th?id=OIP.fSSemaL8tjDgsOiD2ypKOQHaEK&pid=Api&P=0&h=180'  
    },
    {
      id:6,
      productname:'Karahi Chicken',
      price:450,
      img: 'https://tse1.mm.bing.net/th?id=OIP.wR_m-uFWVVNRv6c2qyMshQHaHa&pid=Api&P=0&h=180'  
      
    }
    

  ]





  return (
    <>
    <Header />
    <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner hght ">
    <div className="carousel-item active">
      <img src="https://wallpapercave.com/wp/wp2055375.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://wallpapercave.com/wp/wp2055348.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://wallpaperaccess.com/full/715494.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

</div>


<section>
    <div className='container'>

        <h3 className='fw-bold py-5'>Latest Products</h3>
        <div className='row hght'>

            {productarry.map((item, index)=>(
              <ProdcutItem 
              key={index} 
              productname={item.productname} 
              productimg={item.img} 
              productprice={item.price} 
              productid={item.id}

            
              />
            
            )
            
            
            )}

          
    {/* <select name="Item" id="">
      <option value="1">1</option>
      <option value="1">2</option>
      <option value="1">3</option>
      <option value="1">4</option>

</select> */}

            

           
        

        </div>
    </div>
</section>





    <Footer />
    </>
  )
}

export default Home
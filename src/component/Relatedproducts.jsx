import React from 'react'
import relate1 from '../images/related1.webp'
import relate2 from '../images/related2.webp'
import relate3 from '../images/related3.webp'




export default function Relatedproducts() {
  return (
    <div className='d-flex g-0'>
        <div className='container text-dark d-block'>
        <img src={relate1} alt="" className="img-fluid" style={{height:"250px"}} />
            <h5>Roadster</h5>
            <h6>Men Regular Fit Solid Spread Collar Casual Shirt</h6>
           

        </div>
        <div className='container text-dark d-block'>
        <img src={relate2} alt="" className="img-fluid" style={{height:"250px"}}/>
            <h5>Roadster</h5>
            <h6>Men Regular Fit Solid Spread Collar Casual Shirt</h6>
           

        </div>
        <div className='container text-dark d-block'>
        <img src={relate3} alt="" className="img-fluid" style={{height:"250px",objectFit:'contain'}}/>
            <h5>Roadster</h5>
            <h6>Men Regular Fit Solid Spread Collar Casual Shirt</h6>
           

        </div>
        <div className='container text-dark d-block'>
        <img src={relate1} alt="" className="img-fluid" style={{height:"250px"}}/>
            <h5>Roadster</h5>
            <h6>Men Regular Fit Solid Spread Collar Casual Shirt</h6>
           

        </div>
    </div>
  )
}

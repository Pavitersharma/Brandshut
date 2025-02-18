import React from 'react'

export default function Filter() {
  return (
    <div className='filters'>
        <div className="p-3 rounded border" >
  
            
            <div className="filters-item mb-3">
                <h4>Mens Category</h4>
            <ul className='list-style-none'>
                    <li><label><input type='checkbox' name='' value={''} /> T-Shirts </label></li>
                    <li><label><input type='checkbox' name='' value={''} /> Jeans </label></li>
                    <li><label><input type='checkbox' name='' value={''} /> Jackets </label></li>
                    <li><label><input type='checkbox' name='' value={''} /> Dresses </label></li>
                    <li><label><input type='checkbox' name='' value={''} /> Sweaters </label></li>
                </ul>
            </div>
            <div className='filter-item mb-3'>
                <h4>Size</h4>
                <ul className='list-style-none'>
                    <li><label><input type='checkbox' name='' value={''} /> Small </label></li>
                    <li><label><input type='checkbox' name='' value={''} /> Medium </label></li>
                    <li><label><input type='checkbox' name='' value={''} /> Large </label></li>
                    <li><label><input type='checkbox' name='' value={''} /> Extra Large </label></li>
                </ul>
            </div>
            <div className='filter-item mb-3'>
                <h5>Brand</h5>
                <ul className='list-style-none'>
                    <li><label><input type='checkbox' name='' value={''} /> Nike </label></li>
                    <li><label><input type='checkbox' name='' value={''} /> Adidas </label></li>
                    <li><label><input type='checkbox' name='' value={''} /> Puma </label></li>
                    <li><label><input type='checkbox' name='' value={''} /> Levi's </label></li>
                </ul>
            </div>
            <div className='filter-item mb-3'>
                <h5>Color</h5>
                <ul className='list-style-none'>
                    <li><label><input type='checkbox' name='' value={''} /> Red </label></li>
                    <li><label><input type='checkbox' name='' value={''} /> Blue </label></li>
                    <li><label><input type='checkbox' name='' value={''} /> Black </label></li>
                    <li><label><input type='checkbox' name='' value={''} /> White </label></li>
                </ul>
            </div>
        </div>
        

    </div>
  )
}

import React from 'react'
import style from './ProductDescription.module.scss'

const ProductDescription = ({data}) => {
  return (
    <div className={style.productDescription}>
      <div className={style.productText}>
        <h3>What will you do?</h3>
        <p>{data.description}</p>

        <div className={style.productDuration}>
          <h4>Duration</h4>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" wi viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-4a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2h-4z" clipRule="evenodd"/></svg>
            <p>{data.duration} {data.duration > 1 ? 'Hours' : 'Hour'}</p>
          </div>  
        </div>
      </div>

      
    </div>
  )
}

export default ProductDescription

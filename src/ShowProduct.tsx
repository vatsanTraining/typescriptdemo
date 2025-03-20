
import { Product } from './RootLayout'
import React, { JSX } from 'react'

const ShowProduct:React.FC<Product> = ({productCode,productName}:Product):JSX.Element => {
  return <> 
     <p>{productCode},{productName}</p>
  </>
}


export default ShowProduct
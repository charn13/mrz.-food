



import React from 'react'

const ProdcutItem = ({productname, productimg, productprice, productid}) => {


  return (
    <div className="col-md-4">
                <div className="p-lg-5 p-4 shadow">
                    <div className="lc-block mb-4"><img alt="" className="img-fluid" src={productimg} />


                        <h4 className="my-3" editable="inline">{productname}</h4>
                        <p editable="inline">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est.&nbsp;</p>
                        <h3>Rs.{productprice}/-</h3>

                        <a className="btn btn-outline-primary mt-4" href={`productdetail/${productid}`} role="button">More Info</a>
                     <div className="row">
                      <div className="col-md-4">

                          <select name="Item" id="">
      <option value="1">1</option>
      <option value="1">2</option>
      <option value="1">3</option>
      <option value="1">4</option>

</select>

                      </div>

                     </div>
                    </div>
                </div>
            </div>

            
  )
}

export default ProdcutItem


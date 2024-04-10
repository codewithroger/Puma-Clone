import React from 'react'
import md1 from './image/model1.jpg'
import md2 from './image/model2.jpg'
import md3 from './image/model3.jpg'
import './Model.css'
const Model = () => {
  return (
    <div>
        <div className="hd">
            <h2 style={{color:"black",display:"flex",justifyContent:"center",margin:"20px 0px 15px 0px"}}>RUN. TRAIN. CONQUER.</h2>
        </div>
            <div className='imgs'>
        
<div className="md1s" style={{margin:"0px 5px 20px 10px"}}>
     <img src={md1} alt="Loading.." style={{height: "700px",width: "490px" }}/>    
{/* <p style={{color:"GrayText"}}>jfjslf</p> */}
</div>
<div className="md2"  style={{margin:"0px 10px 20px 10px"}}>
     <img src={md2} alt="Loading.."  style={{height: "700px",width: "490px"}} />
</div>
<div className="md3"  style={{margin:"0px 10px 20px 5px"}}>
     <img src={md3} alt="Loading.."  style={{height: "700px",width: "490px"}} />
</div>
     
    </div>
    </div>

  )
}

export default Model

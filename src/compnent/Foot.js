import React from 'react'
import './Foot.css'
function Foot() {
  return (
    <div>
     
      <div className="fot">
        <ul className='fotVar'>
            <li style={{paddingLeft:"21px", margin:"10px 0px 10px 0px"}}><b>SUPPORT</b></li>
            <li style={{margin:"0px 0px 5px 0px"}}><a href='/' >Contact us</a></li>
            <li style={{margin:"0px 0px 5px 0px"}}> <a href='/'>FAQs</a></li>
            <li style={{margin:"0px 0px 5px 0px"}}><a href='/'>Tech Glossary</a></li>
            <li style={{margin:"0px 0px 5px 0px"}}><a href='/'>Privacy Policy</a></li>
            <li style={{margin:"0px 0px 5px 0px"}}><a href='/'>Terms & Conditions</a></li>
        </ul>
        <ul className='fotabt' style={{ margin:"0px 0px 0px 300px"}}>
            <li style={{paddingLeft:"21px", margin:"10px 0px 10px 0px"}}><b>ABOUT</b></li>
            <li style={{margin:"0px 0px 5px 0px"}}><a href='/' >Company</a></li>
            <li style={{margin:"0px 0px 5px 0px"}}> <a href='/'>Corporate News</a></li>
            <li style={{margin:"0px 0px 5px 0px"}}><a href='/'>Press Center</a></li>
            <li style={{margin:"0px 0px 5px 0px"}}><a href='/'>Investors</a></li>
              <li style={{margin:"0px 0px 5px 0px"}}><a href='/'>Sustainability</a></li>
              <li style={{margin:"0px 0px 5px 0px"}}><a href='/'>PUMA DNA</a></li>
        </ul>
        </div>
        <div className="lk">        <hr style={{width:"50%",textAlign:"left",margin:"0"}}/>
</div>
        
    </div>
  )
}

export default Foot




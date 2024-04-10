import React from 'react'
import logo from "./image/logo.png"
import "./Navs.css"
const Navs=(props)=> {
  return (
    <div className="App">
              <div className="disc"><p><b>EXTRA {props.dis} DISCOUNT FOR ALL ONLINE PAYMENTS</b></p></div>

      <div className="header">
      <div className="log">
                <img src={logo} alt="" style={{width:"150px"}} />
            </div>
        <div className="nav">
            <ul className='nscbar'>
            <li style={{alignContent:"center"}}><a href='/'>Home</a></li>
            <li  style={{alignContent:"center"}}><a href='/'>Men</a></li>
            <li  style={{alignContent:"center"}}><a href='/'>Women</a></li>
            <li  style={{alignContent:"center"}}><a href='/'>Kid</a></li>
            <li  style={{alignContent:"center"}}><a href='/'>About</a></li>
            </ul>
        

        </div>
      </div>
         
    </div>
  )
}
export default Navs


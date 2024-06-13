import React,{useState,useEffect} from 'react';
import adminbg from'../Image/Adminstrator-home/admin-bg-v7.gif';
import '../CSS/adminhome.css'
export default function Adminpage() {
  let lapagedetails=[
    {'page':"Query Page","id":1,"icon":"bi bi-person-raised-hand"},{"page":"Asset Page","id":2,"icon":"bi bi-pc-display-horizontal"},{"page":"Role Page","id":3,"icon":'bi bi-person-rolodex'}
  ]
  const lostyle={
    backgroundImage: `url(${adminbg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height:'100vh'
    
  }
  let lahover=['border-green-500','border-pink-500','border-yellow-500']
  let lashovertxt=["green",'pink','yellow']  
  return (
    <React.Fragment>
      <div style={lostyle}>
        <div className='centered-container'>
        <div className="grid grid-nogutter">
     {lapagedetails.map((product,index)=>{
        return(
          <div className={'hover:'+lahover[index] +' border-round  border-3 m-2 flex align-items-center justify-content-center'}style={{backdropFilter:`blur(${'14px'})`,width:'200px',textAlign:'center',color:'white'}  } >
          <div className="col" key={product.id}>
          <i className={product.icon + ' p-2'} style={{ display: 'inline-block' }}></i>
 <p className='p-2' style={{ display: 'inline-block', verticalAlign: 'top' }}>{product.page}</p>

          </div>
       </div>
        )
      })} 
    </div>
        </div>
      
      </div>
      
    </React.Fragment>
  )
}

import React from 'react';
import adminbg from'../Image/Adminstrator-home/admin-bg-v7.gif';
import '../CSS/adminhome.css'
import Dockmenu from '../Components/Controls/Dockmenu';
import logout from '../Image/menu-images/power-btn.png'
import back from '../Image/menu-images/left-arrow-back.png'
export default function Adminpage() {
 
  const lostyle={
    backgroundImage: `url(${adminbg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height:'100vh'
  }
  let lapagedetails=[
    {'page':"Query Page","id":1,"icon":"bi bi-person-raised-hand"},{"page":"Asset Page","id":2,"icon":"bi bi-pc-display-horizontal"},{"page":"Role Page","id":3,"icon":'bi bi-person-rolodex'}
  ]
  let lahover=['border-green-500','border-pink-500','border-yellow-500']
  let lashovertxt=["green",'pink','yellow'] ;
  let ladockmenuitems=[
    {label: 'Logout',
    icon: () => <img title='logout' alt="logout" src={logout} width="100%" />,
    command: () => {
      alert('hi')
    }},{label: 'bacl',
      icon: () => <img title='logout' alt="logout" src={back} width="100%" />,
      command: () => {
        alert('hi')
      }}

  ]
  
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
      <Dockmenu custom={{position:'left',items:ladockmenuitems}} />
    </React.Fragment>
  )
}

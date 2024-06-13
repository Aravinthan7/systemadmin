import React,{useEffect, useState} from 'react';
import { Menu } from 'primereact/menu';


const Menuscroll=(props)=>{
const [items,setItems]=useState([]);

useEffect(()=>{
if(props.hasOwnProperty('')){
    
}
},[])



    return(
        <React.Fragment>
            <div className="card flex justify-content-center">
            <Menu model={items} className="w-full md:w-15rem" />
        </div>
        </React.Fragment>
    )



}
export default Menuscroll;

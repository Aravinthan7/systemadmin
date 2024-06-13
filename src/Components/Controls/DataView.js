import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import React,{useState,useEffect} from 'react';
const DataViewCtrl=(props)=>{
    const [datas,setDatas]=useState(props.page);



    const itemTemplate = (product, index) => {
        let lahover=['border-indigo-500','border-pink-500','border-yellow-500']

        return (
            <div className={'hover:'+lahover[index] +' border-round surface-overlay font-bold border-3 m-2 flex align-items-center justify-content-center'}>
               <div className="col-12" key={product.id}>
                <i className=''></i>
                {product.page}
               
               </div>
            </div>
        )
    }
    const listTemplate = (items) => {
        if (!items || items.length === 0) return null;

        let list = items.map((product, index) => {
            return itemTemplate(product, index);
        });

        return <div className="grid grid-nogutter">{list}
        </div>;
    };

    return(
        <React.Fragment>
            <div className="card">
            <DataView value={datas} listTemplate={listTemplate} />
        </div>
        </React.Fragment>
    )
}
export default DataViewCtrl;
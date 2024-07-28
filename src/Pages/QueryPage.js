import React,{memo,forwardRef} from "react";
import MyDataTable from "../Components/Controls/MyDataTable";
const Querypage=forwardRef((prop,ref)=>{


    let lavalue=[{
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    }]
    let lacolumns=[{'field':'name','header':'Name'}]

    return(
        <React.Fragment>
            <div className="card">
            <MyDataTable custom={{value:lavalue,columns:lacolumns}}  />
            </div>
            
            
        </React.Fragment>
    )
});
export default memo(Querypage);
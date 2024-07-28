import React, { useState, memo, useImperativeHandle, useRef, forwardRef, useEffect } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import PropTypes from 'prop-types';
const MyDataTable = forwardRef((props, ref) => {

    //ref's declared
    const refCurrentElement = useRef([]);
    //----

    //useImperative handle
    useImperativeHandle(ref, () => refCurrentElement.current);
    //------

    let { custom: locustom } = props;
    let { value: lavalue,columns:lacolumns } = locustom;


    //useEffect Handled
    useEffect(()=>{
        
    },[])
    //--------


    //functions Handled here

    //----------



    return (
        <React.Fragment>
            <DataTable id={locustom.id}  ref={refCurrentElement} value={lavalue}>
            {lacolumns.map((o)=>
                <Column field={o.field} header={o.header} headerStyle={o.headerStyle} ></Column>
            )}
            </DataTable>
        </React.Fragment>
    )
});
MyDataTable.propTypes = {
    custom: PropTypes.shape({
        value: PropTypes.array.isRequired,
        selectionMode: PropTypes.string,
        id:PropTypes.string,
        columns:PropTypes.array.isRequired,
        search:PropTypes.bool,
        paginator:PropTypes.bool,
        
    }).isRequired

}


MyDataTable.defaultProps = {
    custom: {
        columns: [],
        selectionMode: 'single',
        id:'',
        value:[],
        search:false,
        paginator:false
    }
}
export default memo(MyDataTable);
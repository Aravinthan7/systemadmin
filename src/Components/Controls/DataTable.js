import React, { useState, memo, useImperativeHandle, useRef, forwardRef } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import PropTypes from 'prop-types';
const DataTable = forwardRef((props, ref) => {

    //ref's declared
    const refCurrentElement = useRef([]);
    //----

    //useImperative handle
    useImperativeHandle(ref, () => refCurrentElement.current);
    //------

    
    return (
        <React.Fragment>
            <DataTable>

            </DataTable>
        </React.Fragment>
    )
});
DataTable.propTypes={
    value:PropTypes.array,
    selectionMode:PropTypes.string,


}
export default memo(DataTable);
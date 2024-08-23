import React, { forwardRef,useImperativeHandle,useEffect,useRef } from "react";
import { Dropdown } from 'primereact/dropdown';
import PropTypes from 'prop-types';
const MyDropdown=forwardRef((props,ref)=>{

    //
    const refCurrentElement=useRef();
    //----------

    //useImperative handled here
    useImperativeHandle(ref,()=>refCurrentElement.current);
    //----------
    
    //
    let{editable,className,options,placeholder,checkmark,showClear,invalid,disabled,highlightOnSelect}=props.custom;
    //----------
    useEffect(()=>{

    });

    return(
        <React.Fragment>
            <Dropdown ref={refCurrentElement} editable={editable} className={className} options={options} placeholder={placeholder} checkmark={checkmark}
             showClear={showClear} invalid={invalid} disabled={disabled} highlightOnSelect={highlightOnSelect}
               />
        </React.Fragment>
    )
});
MyDropdown.propTypes={
    custom:PropTypes.shape({
        editable:PropTypes.bool,
        className:PropTypes.string,
        options:PropTypes.array,
        placeholder:PropTypes.string,
        checkmark:PropTypes.bool,
        showClear:PropTypes.bool,
        invalid:PropTypes.bool,
        disabled:PropTypes.bool,
        highlightOnSelect:PropTypes.bool
    }).isRequired
}
MyDropdown.defaultProps={
    custom:{
        editable:false,
        className:'',
        options:[],
        placeholder:'',
        checkmark:false,
        showClear:false,
        invalid:false,
        disabled:false,
        highlightOnSelect:false,
    }
}
export default MyDropdown;
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import PropTypes from "prop-types";
const MyTextArea = forwardRef((props, ref) => {

  //
  const refCurrentElement = useRef();
  //-------------

  //useImperative handle
  useImperativeHandle(ref,()=>refCurrentElement.current)
  //------

  return (
    <React.Fragment>
      <InputTextarea
        value={value}
       
        rows={5}
        cols={30}
      />
    </React.Fragment>
  );
});
MyTextArea.propTypes={
    custom:PropTypes.shape({
        id:PropTypes.any,
        value:PropTypes.string,
        rows:PropTypes.number,
        cols:PropTypes.number,
        invalid:PropTypes.bool,
        labelledby:PropTypes.string,
        keyfilter:PropTypes.string,
    })
}
MyTextArea.defaultProps={
    custom:{
        id:'',
        value:'',
        rows:5,
        cols:4,
        invalid:false,
        labelledby:'',
        keyfilter:''
    }
}

export default MyTextArea;

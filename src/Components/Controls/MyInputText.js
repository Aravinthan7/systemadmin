import React, { useImperativeHandle, forwardRef, memo } from "react";
import { InputText } from "primereact/inputtext";
import PropTypes from 'prop-types';
const MyInputText = forwardRef((props, ref) => {

    const refCurrentElement = useRef();

    //states declared

    //-------

    //useImprative handle
    useImperativeHandle(ref, () => refCurrentElement.current);
    //------

    //props destructing handling
    let { custom: locustom } = props;
    let { value: lsvalue, placeholder: lsplaceholder, classname: lsclassname, id: lsid, disabled: lbdisabled, invalid: lbinvalid,discribed:lsdiscribed,description:lsdescription } = locustom;
    //---



    return (
        <React.Fragment>
            <div className="flex flex-column gap-2">
                <label htmlFor="username">Username</label>

                <InputText id={lsid} ref={refCurrentElement} value={lsvalue} placeholder={lsplaceholder} type='text' className={lsclassname} disabled={lbdisabled} invalid={lbinvalid} aria-describedby={lsdiscribed} />
                {
                    typeof lsdiscribed==='string'&& lsdiscribed!=='' && typeof lsdescription ==='string' && lsdescription !==''?
                     <small id={lsdiscribed}>
                    {lsdescription}
                    </small>:null
                }
            </div>

        </React.Fragment>

    )


});
MyInputText.propTypes={
    custom:PropTypes.shape({
        value:PropTypes.string,
        caption:PropTypes.string,
        description:PropTypes.string,
        invalid:PropTypes.bool,
        placeholder:PropTypes.string,
        className:PropTypes.string,
        id:PropTypes.string,
        discribed:PropTypes.string,
        disabled:PropTypes.bool
    }).isRequired
}
MyInputText.defaultProps={
    custom:{
        value:'',
        caption:'',
        description:'',
        invalid:false,
        placeholder:'',
        className:'',
        id:'',
        discribed:'',
        disabled:true,
    }
}

export default memo(MyInputText);
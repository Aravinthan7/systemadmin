import React, { useImperativeHandle, forwardRef, memo } from "react";
import { InputText } from "primereact/inputtext";
const MyInputText = forwardRef((props, ref) => {

    const refCurrentElement = useRef();

    //states declared

    //-------

    //useImprative handle
    useImperativeHandle(ref, () => refCurrentElement.current);
    //------

    //props destructing handling
    let { custom: locustom } = props;
    let { value: lsvalue, placeholder: lsplaceholder, classname: lsclassname, id: lsid, disabled: lbdisabled, invalid: lbinvalid,discribed:lsdiscribed,discription:lsdiscription } = locustom;
    //---



    return (
        <React.Fragment>
            <div className="flex flex-column gap-2">
                <label htmlFor="username">Username</label>

                <InputText id={lsid} ref={refCurrentElement} value={lsvalue} placeholder={lsplaceholder} type='text' className={lsclassname} disabled={lbdisabled} invalid={lbinvalid} aria-describedby={lsdiscribed} />
                {
                    typeof lsdiscribed==='string'&& lsdiscribed!=='' && typeof lsdiscription ==='string' && lsdiscription !==''?
                     <small id={lsdiscribed}>
                    {lsdiscription}
                    </small>:null
                }
            </div>

        </React.Fragment>

    )


});

export default memo(MyInputText);
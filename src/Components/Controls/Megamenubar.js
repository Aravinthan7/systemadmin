import React, { useRef, useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { MegaMenu } from 'primereact/megamenu';
import PropTypes from 'prop-types';

const Megamenubar=forwardRef((props,ref)=>{
    let {custom:locustom}=props
    return(
        <React.Fragment>
             <div className="card">
            <MegaMenu model={items} orientation="horizontal" start={start} end={end} breakpoint="960px" className="p-3 surface-0 shadow-2" style={{ borderRadius: '3rem' }} />
        </div>
        </React.Fragment>
    )
})
Megamenubar.propTypes = {
    items: PropTypes.array.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    orientation:PropTypes.string.isRequired
};

export default React.memo(Megamenubar);
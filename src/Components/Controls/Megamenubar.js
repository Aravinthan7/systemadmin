import React, { useRef, useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { MegaMenu } from 'primereact/megamenu';
import PropTypes from 'prop-types';

const Megamenubar = forwardRef((props, ref) => {
    let { custom: locustom } = props

    //ref declared
    const refCurrentElement = useRef([]);
    //----

    //useImprative handle
    useImperativeHandle(ref, () => refCurrentElement.current);
    //---
    return (
        <React.Fragment>
            <div className="">
                <MegaMenu ref={refCurrentElement} model={locustom.items} orientation={locustom.orientation} start={locustom.start} end={locustom.end} breakpoint="960px" className="p-3 surface-0 shadow-2" style={{ borderRadius: '3rem' }} />
            </div>
        </React.Fragment>
    )
})
Megamenubar.propTypes = {
    items: PropTypes.array.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    orientation: PropTypes.string.isRequired
};

export default React.memo(Megamenubar);
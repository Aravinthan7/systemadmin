import React, { useRef, useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { Dock } from 'primereact/dock';
import PropTypes from 'prop-types';

const Dockmenu = forwardRef((props, ref) => {
  // Destructuring props
  const { custom } = props;

  // State variables
  const [position, setPosition] = useState(custom.position);
  const [items, setItems] = useState(custom.items);

  // Ref for the Dock component
  const refCurrentElement = useRef();

  // Update state when props change
  useEffect(() => {
    setPosition(custom.position);
    setItems(custom.items);
  }, [custom]);

  // Expose method to parent component using ref
  useImperativeHandle(ref, () =>refCurrentElement.current );

  return (
    <div  className="dock-window">
         <Dock ref={refCurrentElement} model={items} position={position} />
    </div>
   
  );
});

// Define PropTypes for Dockmenu component
Dockmenu.propTypes = {
  custom: PropTypes.shape({
    position: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })).isRequired,
    // Add more PropTypes as needed
  }).isRequired,
};

export default React.memo(Dockmenu);

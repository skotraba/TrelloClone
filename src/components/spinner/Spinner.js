import React from 'react';

import './Spinner.scss';

function Spinner(props) {
  return (
    <div className="spinnerContainer">
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );
}

export default Spinner;
import React from "react";
import Icon from '@material-ui/core/Icon';
import '../../styles/ShoppinglistS.css';

const AddItemWindowM = props => {

  return (
    

      <div className="window-box">
        <div className="close-icon-container" onClick={props.closeWindowFunction}>
          <Icon>add_circle</Icon>
        </div>
      </div>



    );
};

export default AddItemWindowM;
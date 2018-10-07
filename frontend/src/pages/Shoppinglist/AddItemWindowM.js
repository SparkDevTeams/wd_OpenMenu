import React from "react";
import CloseIcon from '@material-ui/icons/Close'
import '../../styles/ShoppinglistS.css';

const AddItemWindowM = props => {

  return (
    

      <div className="window-box">
        <div className="close-icon-container" onClick={props.closeWindowFunction}>
          <CloseIcon/>
        </div>
      </div>



    );
};

export default AddItemWindowM;
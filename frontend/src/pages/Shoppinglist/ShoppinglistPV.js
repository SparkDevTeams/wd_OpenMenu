import React from "react";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import '../../styles/ShoppinglistS.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});



function ShoppinglistPV(props) {
  const { classes } = props;
  return (
    <div>
      <h1>Shopping list</h1>
      <Button variant="fab" color="secondary" aria-label="Add">
        <AddIcon/>
      </Button>
      <div onClick={props.openWindowFunction} className="fab-add-button">
      
      </div>
    </div>
    );
};

ShoppinglistPV.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShoppinglistPV);
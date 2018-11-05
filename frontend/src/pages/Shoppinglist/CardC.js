import React, { Component } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

class CardC extends Component {

  constructor(props) {
    super();
    this.state = {
        checked: props.checked
    };
  }

  toggleChecked(){
      this.setState({
          item: this.props.card,
          checked: !this.state.checked
      });
  }

  render() {

    let card = this.props.card;   
    let cardIcon;
    console.log(card);

    if (this.state.checked) {
        this.props.notifyChecked(card.key);
        cardIcon = <CheckCircleIcon color="secondary" className="add-card-icon" onClick={this.toggleChecked.bind(this)}/>;
    }
    else{
        this.props.notifyUnchecked(card.key);
        cardIcon = <AddCircleIcon color="action" className="add-card-icon" onClick={this.toggleChecked.bind(this)}/>;
    }

    return (
    
    <div>
        <div className="card-header-container">
            <div className="add-card-icon-container">
                {cardIcon}
            </div>
        </div>
        {card}
    </div>

    );
  }
}


export default CardC;


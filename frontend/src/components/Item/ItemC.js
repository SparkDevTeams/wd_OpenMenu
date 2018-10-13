import React, { Component, Fragment } from "react";
import ItemV from "./ItemV.js";
import { connect } from "react-redux";

class ItemC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "dummy-id",
      name: "ItemName",
      img:
        "https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg",
      tags: ["tasty", "delicious", "italian", "Vegan"],
      description: "A tasty dish.",
      size: "Gallon",
      price: "$9.50",
      detailsOpen: false,
      EditOpen: false,
      newName: "",
      newDescription: "",
      newImg: "",
      newSize: "",
      newTags: "",
      newPrice: "",
      currentItem: {}
    };

    // this.generateTags = this.generateTags.bind(this);
    // this.deleteItem = this.deleteItem.bind(this);
    // this.editItem = this.editItem.bind(this);
    // this.shareItem = this.shareItem.bind(this);
    // this.detailsToggle = this.detailsToggle.bind(this);
    // this.editToggle = this.editToggle.bind(this);
    // this.editItemDetails = this.editItemDetails.bind(this);
  }

  componentWillMount() {
    this.setState({
      newName: this.state.name,
      newDescription: this.state.description,
      newImg: this.state.img,
      newSize: this.state.size,
      newTags: this.state.tags,
      newPrice: this.state.price
    });
  }

  componentDidMount() {
    let userItem = this.props.userItems.filter(item => {
      // console.log(item.uid, " " + this.props.itemId);
      return item.uid === this.props.itemId;
    });

    this.setState({
      currentItem: userItem
    });
  }

  generateTags = () => {
    return this.state.tags.map((tagText, index) => {
      return <Tag key={this.state.name + "tag" + index} tag={tagText} />;
    });
  };

  editItem = () => {
    // console.log(this.state);
    this.setState({
      editToggle: false
    });
    alert("Edit");
  };

  shareItem = e => {
    e.stopPropagation();
    alert("share");
  };

  deleteItem = e => {
    e.stopPropagation();
    alert("delete item");
  };

  detailsToggle = () => {
    this.setState({
      detailsOpen: !this.state.detailsOpen
    });
  };

  editToggle = e => {
    e.stopPropagation();
    this.setState({
      editOpen: !this.state.editOpen,
      newName: this.state.name,
      newDescription: this.state.description,
      newImg: this.state.img,
      newSize: this.state.size,
      newTags: this.state.tags,
      newPrice: this.state.price
    });
    // console.log(this.state);
  };

  editItemDetails = e => {
    let field = e.target.name;
    let value = e.target.value;

    switch (field) {
      case "name":
        this.setState({
          newName: value
        });
        break;
      case "price":
        this.setState({
          newPrice: value
        });
        break;
      case "size":
        this.setState({
          newSize: value
        });
        break;
      case "description":
        this.setState({
          newDescription: value
        });
        break;
      case "tags":
        this.setState({
          newTags: value.split(",")
        });
        break;
      default:
        break;
    }
    // console.log(this.state.newName);
  };

  render() {
    let userItem = this.props.userItems.filter(item => {
      // console.log(item.uid, " " + this.props.itemId);
      return item.uid === this.props.itemId;
    });
    userItem = userItem[0];

    return (
      <Fragment>
        <ItemV
          name={userItem.name}
          description={userItem.description}
          img={userItem.image}
          size={this.props.amount}
          price={userItem.price}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
          editToggle={this.editToggle}
          editOpen={this.state.editOpen}
          shareItem={this.shareItem}
          tags={this.generateTags}
          tagArr={userItem.tags}
          detailsToggle={this.detailsToggle}
          detailsOpen={this.state.detailsOpen}
          editItemDetails={this.editItemDetails}
        />
      </Fragment>
    );
  }
}

const styles = {
  tag: {
    background: "rgba(200,0,0,0.3)",
    display: "inline-block",
    borderRadius: 4,
    padding: "2px 5px",
    fontWeight: 500,
    margin: "3px",
    color: "#333"
  }
};

const Tag = props => {
  return (
    <div key={props.key} style={styles.tag}>
      {props.tag}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userItems: state.ItemR.userItems
  };
};

export default connect(mapStateToProps)(ItemC);

import React, { Component, Fragment } from "react";
import ItemV from "./ItemV.js";

class ItemC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ItemName",
      img:
        "https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg",
      tags: ["tasty", "delicious", "italian", "Vegan"],
      description: "A tasty dish.",
      detailsOpen: false,
      EditOpen: true,
      newName: "",
      newDescription: ""
    };

    this.generateTags = this.generateTags.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.shareItem = this.shareItem.bind(this);
    this.detailsToggle = this.detailsToggle.bind(this);
    this.editToggle = this.editToggle.bind(this);
    this.addName = this.addName.bind(this);
    this.addDescription = this.addDescription.bind(this);
  }

  generateTags() {
    return this.state.tags.map((tagText, index) => {
      return <Tag key={this.state.name + "tag" + index} tag={tagText} />;
    });
  }

  editItem() {
    let name = this.state.newName;
    let description = this.state.Newdescription;

    if (name == false || description == false) {
      alert("Name and description cannot be empty");
      return;
    }

    alert("Edit");
  }

  shareItem(e) {
    e.stopPropagation();
    alert("share");
  }

  deleteItem(e) {
    e.stopPropagation();
    alert("delete item");
  }

  detailsToggle() {
    this.setState({
      detailsOpen: !this.state.detailsOpen
    });
  }

  editToggle(e) {
    e.stopPropagation();
    this.setState({
      editOpen: !this.state.editOpen,
      newName: "",
      newDescription: ""
    });
  }

  addName(e) {
    this.setState({
      newName: e.target.value
    });
    console.log(e.target.value + " new name: " + this.state.newName);
  }

  addDescription(e) {
    this.setState({
      newDescription: e.target.value
    });
    console.log(e.target.value + " new name: " + this.state.newDescription);
  }

  render() {
    return (
      <Fragment>
        <ItemV
          name={this.state.name}
          description={this.state.description}
          img={this.state.img}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
          editToggle={this.editToggle}
          editOpen={this.state.editOpen}
          shareItem={this.shareItem}
          tags={this.generateTags}
          detailsToggle={this.detailsToggle}
          detailsOpen={this.state.detailsOpen}
          addDescription={this.addDescription}
          addName={this.addName}
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

export default ItemC;

import React from "react";
import Button from "@material-ui/core/Button";
// import AddIcon from "material-ui-icons/Add";
import RecipeDetailV from "./RecipeDetailV";
import ItemCardV from "./ItemCardV";

const RecipeV = props => {
  return (
    <div>
      <RecipeDetailV />
      {/* if you want to execute the function immediately 
      after it is defined, you have to wrap the whole declaration 
      in parenthesis (to convert it to an expression) and execute
       it by adding two more parentheses (passing any arguments 
       the function may take. */}
      {/* {(() => {
        return (
          <div>
            <ItemCardV />
            <ItemCardV />
            <ItemCardV />
          </div>
        );
      })()} */}
      <div className="row my-5">
        <Button variant="fab" color="secondary" aria-label="Add">
          +{/* <AddIcon /> */}
        </Button>
      </div>

      {props.items.length > 0
        ? props.items.map(item => {
            return <ItemCardV name={item.item} img={item.image} />;
          })
        : console.log("items array is empty")}
    </div>
  );
};

export default RecipeV;

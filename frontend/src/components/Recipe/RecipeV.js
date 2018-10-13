import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RecipeDetailV from "./RecipeDetailV";
import ItemCardV from "./ItemCardV";
// import ItemCard from "./../../components/Item/ItemV";

const styles = {
  bttn: {
    position: "absolute",
    right: 0
  }
};

const RecipeV = props => {
  return (
    <div>
      <RecipeDetailV
        name={props.recipe.name}
        image={props.recipe.image}
        instructions={props.recipe.instructions}
      />
      <h1>Ingredients</h1>

      {props.recipe.ingredients.length > 0
        ? props.recipe.ingredients.map(item => {
            return <ItemCardV itemID={item.itemID} amount={item.amount} />;
          })
        : console.log("No ingredient. Add some")}
      <div>
        <Button
          style={styles.bttn}
          margin-left="20px"
          variant="fab"
          color="secondary"
          aria-label="Add"
          onClick={props.addItem}
        >
          <AddIcon />
        </Button>
      </div>
    </div>
  );
};

export default RecipeV;

{
  /* if you want to execute the function immediately 
      after it is defined, you have to wrap the whole declaration 
      in parenthesis (to convert it to an expression) and execute
       it by adding two more parentheses (passing any arguments 
       the function may take. */
}
{
  /* {(() => {
        return (
          <div>
            <ItemCardV />
            <ItemCardV />
            <ItemCardV />
          </div>
        );
      })()} */
}

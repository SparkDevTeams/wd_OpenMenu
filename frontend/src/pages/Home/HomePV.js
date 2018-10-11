import React from "react";
import Grid from "@material-ui/core/Grid";

const HomeCSS = {
  marginTop: "100px"
};

/*
<Grid item> are basically columns 
<Grid Continers> are basically rows
*/
const HomePV = props => {
  return (
    <div style={HomeCSS}>
      <Grid container spacing={24} justify="center">
        <Grid item xs={3}>
          <p>Link To History</p>
          <p>Link To Trending</p>
          <p>Link to Suggestions</p>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={24}>
            <p>History</p>
          </Grid>
          <Grid container spacing={24}>
            <p>Trending</p>
          </Grid>
          <Grid container spacing={24}>
            <p>Suggestions</p>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid>
            <p>Advertisement</p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePV;

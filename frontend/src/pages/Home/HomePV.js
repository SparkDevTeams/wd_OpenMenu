import React from 'react';

import Card from '@material-ui/core/Card';
import MiaC from '../../components/MiaC';
import MauricioC from '../../components/MauricioC';
import TommyC from './../../components/TommyC';


const LandingPV = props => {
  return (
    <div>
      <Card>
        <h1>Home Page!</h1>
        <MiaC />
        <MauricioC />
        <TommyC />
      </Card>
    </div>
  );
};

export default LandingPV;

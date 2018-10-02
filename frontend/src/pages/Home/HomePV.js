import React from 'react';

import Card from '@material-ui/core/Card'
import MauricioC from '../../components/MauricioC'
import OctavioC from '../../components/OctavioC'
import MiaC from '../../components/MiaC';
import TommyC from './../../components/TommyC';
import AmyC from '../../components/AmyC';

const LandingPV = props => {
  return (
    <div>
      <Card>
        <h1>Home Page!</h1>
        <AmyC />
        <MiaC />
        <MauricioC />
        <TommyC />
        <OctavioC />
      </Card>
    </div>
  );
};

export default LandingPV;

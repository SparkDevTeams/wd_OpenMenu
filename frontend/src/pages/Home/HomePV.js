import React from 'react'

import Card from '@material-ui/core/Card'
import MauricioC from '../../components/MauricioC'
import OctavioC from '../../components/OctavioC'

const LandingPV = (props) => {
    return(
        <div>
        <Card>
            <h1>Home Page!</h1>
            <MauricioC />
            <OctavioC />
        </Card>
      </div>
    );
}

export default LandingPV;
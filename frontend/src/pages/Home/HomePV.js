import React from "react";

import JabinC from "../../components/JabinC"
import AndresC from "../../components/AndresC";
import ElliotC from "../../components/ElliotC";
import Card from "@material-ui/core/Card";
import MauricioC from "../../components/MauricioC";
import CristianC from "../../components/CristianC";
import OctavioC from "../../components/OctavioC";
import MiaC from "../../components/MiaC";
import TommyC from "./../../components/TommyC";
import AmyC from "../../components/AmyC";
import SoyaD from "../../components/SoyaD";

const LandingPV = props => {
  return (
    <div>
      <Card>
        <h1>Home Page!</h1>
        <JabinC />
        <CristianC />
        <AmyC />
        <MiaC />
        <MauricioC />
        <AndresC />
        <ElliotC />
        <TommyC />
        <OctavioC />
        <SoyaD />
      </Card>
    </div>
  );
};

export default LandingPV;

import React from "react";
import { Switch } from "@material-ui/core";

const BotaoSwitch = (props) => {
  const { ativo, onChange } = props;
  return <Switch checked={ativo} inputProps={{ "aria-label": "primary checkbox" }} onChange={() => onChange(!ativo)} />;
};

export default BotaoSwitch;

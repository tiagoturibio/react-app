import React, { useState } from "react";
import { Switch } from "@material-ui/core";

const BotaoSwitch = (props) => {
  const { ativo } = props;
  const [switchAtivo, setSwitchAtivo] = useState(ativo);
  return (
    <Switch
      checked={switchAtivo}
      inputProps={{ "aria-label": "primary checkbox" }}
      onChange={() => setSwitchAtivo(!switchAtivo)}
    />
  );
};

export default BotaoSwitch;

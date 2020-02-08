// https://material-ui.com/components/buttons/

import React from "react";
import { Button } from "@material-ui/core";
import { ButtonProps } from "@material-ui/core/Button";
import classnames from "classnames";
import { logToConsole } from "../../../utils/logger";
import styles from "./PrimaryButton.module.scss";

export const PrimaryButton = (props: ButtonProps) => {
  logToConsole(`Rendering Primary Button with Props: ${JSON.stringify(props)}`);
  const { classes = {} } = props;
  return (
    <Button
      {...props}
      classes={{
        ...classes,
        root: classnames(styles.PrimaryButton, classes.root)
      }}
    />
  );
};

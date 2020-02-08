import React, { ChangeEvent, Component } from "react";
import styles from "./TextInput.module.scss";
import classNames from "classnames";
import { logToConsole } from "../../../utils/logger";

interface State {
  error?: string;
}

class TextInput extends Component<
  React.InputHTMLAttributes<HTMLInputElement>,
  State
> {
  constructor(props: Readonly<React.InputHTMLAttributes<HTMLInputElement>>) {
    super(props);
    this.state = {
      error: ""
    };
  }

//   onChange = (e: ChangeEvent<HTMLInputElement>) => {
//     logToConsole(`
//     Text input on change, 
//         name: ${e.target.name}
//         value: ${e.target.value}
//     `);
//     const { minLength, onChange } = this.props;
//     const value = e.target.value;
//     if (value && minLength && value.length < minLength) {
//       this.setState({ error: "Minimum of 2 characters required" });
//     } else {
//       this.setState({ error: "" });
//     }
//     onChange && onChange(e);
//   };

  render() {
    const { error } = this.state;
    const { onChange } = this.props;
    return (
      <span className={styles.TextInput}>
        <input
          {...this.props}
          type="text"
          className={classNames(styles.StyledTextInput, this.props.className)}
          onChange={onChange}
        />
        {error && <span className={styles.Exception}>{error}</span>}
      </span>
    );
  }
}

export default TextInput;

import { useContext } from "react";
import classNames from "classnames";
import { ThemeContext } from "../Theme/ThemeProvider";

const Button = ({ children, variant }) => {
  const theme = useContext(ThemeContext);
  const className = classNames("button", variant);

  return (
    <button className={className}>
      {children}
      <style jsx global>{`
        .button {
          border-radius: 0px;
          outline: none;
          border: 2px solid black;
          margin: 5px;
          padding: 5px;
          min-width: 60px;
        }

        .button.base {
          background: ${theme.colors.button.base.background};
          color: ${theme.colors.button.base.text};
          border-color: ${theme.colors.button.base.border};
        }

        .button.ok {
          background: ${theme.colors.button.ok.background};
          color: ${theme.colors.button.ok.text};
          border-color: ${theme.colors.button.ok.border};
        }

        .button.err {
          background: ${theme.colors.button.err.background};
          color: ${theme.colors.button.err.text};
          border-color: ${theme.colors.button.err.border};
        }
      `}</style>
    </button>
  );
};
export default Button;

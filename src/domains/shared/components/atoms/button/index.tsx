import { ButtonHTMLAttributes } from "react";
import { css } from "@emotion/react";
import { darken, parseToRgb } from "polished";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  size?: "lg" | "md" | "sm" | "xs";
  variant?: "contained" | "outlined";
  rounded?: "md" | "lg" | "none";
  backgroundColor?: string;
  fontColor?: string;
  fullWidth?: boolean;
}

const Button = ({
  rounded = "md",
  backgroundColor = "#B51D29",
  fontColor = "#fff",
  variant = "contained",
  fullWidth = false,
  size = "lg",
  children,
  ...props
}: ButtonProps) => {
  const darkHoverColor = darken(0.05, backgroundColor);
  const lightHoverColor = `rgba(${parseToRgb(backgroundColor).red}, ${
    parseToRgb(backgroundColor).green
  }, ${parseToRgb(backgroundColor).blue}, 0.1)`;

  const buttonStyle = css`
    ${variant === "contained" &&
    css`
      background-color: ${backgroundColor};
      border: none;
      color: ${fontColor};
      &:hover {
        background-color: ${darkHoverColor};
      }
    `}
    ${variant === "outlined" &&
    css`
      background-color: #fff;
      border: 1px solid ${backgroundColor};
      color: ${backgroundColor};
      &:hover {
        background-color: ${lightHoverColor};
      }
    `}

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    cursor: pointer;
  `;

  const buttonRoundedStyle = css`
    ${rounded === "md" &&
    css`
      border-radius: 6px;
    `}
    ${rounded === "lg" &&
    css`
      border-radius: 50px;
    `}
  `;

  const buttonSizeStyle = css`
    ${size === "lg" &&
    css`
      width: ${fullWidth ? "100%" : "295px"};
      height: 50px;
      font-size: 16px;
    `}
    ${size === "md" &&
    css`
      width: ${fullWidth ? "100%" : "200px"};
      height: 40px;
      font-size: 13px;
    `}
    ${size === "sm" &&
    css`
      width: ${fullWidth ? "100%" : "145px"};
      height: 30px;
      font-size: 11px;
    `}
    ${size === "xs" &&
    css`
      width: ${fullWidth ? "100%" : "44px"};
      height: 30px;
      font-size: 11px;
    `}
  `;

  return (
    <button css={[buttonStyle, buttonRoundedStyle, buttonSizeStyle]} {...props}>
      {children}
    </button>
  );
};

export default Button;

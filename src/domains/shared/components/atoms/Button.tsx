import { css } from "@emotion/react";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  color?: string;
  fontColor?: string;
  rounded?: boolean;
}

const Button = ({
  rounded = false,
  color = "#B51D29",
  fontColor = "#fff",
  children,
  ...props
}: ButtonProps) => {
  const buttonStyle = css`
    width: 100%;
    height: 50px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    background-color: ${color};
    color: ${fontColor};
    ${rounded && "border-radius: 6px;"}

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  return (
    <button css={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;

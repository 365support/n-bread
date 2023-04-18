import { ButtonHTMLAttributes } from "react";
import { css } from "@emotion/react";
import { darken } from "polished";
import { COLOR } from "@domains/shared/constants/style";

export interface FloatingButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  backgroundColor?: string;
  fontColor?: string;
  size?: "lg" | "md" | "sm";
}

const defaultButtonStyle = css`
  border-radius: 100%;
  border: none;
  color: ${COLOR.White100};
  transition: transform 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const FloatingButton = ({
  backgroundColor = "#B51D29",
  fontColor = "#fff",
  size = "md",
  children,
  ...props
}: FloatingButtonProps) => {
  const hoverColor = darken(0.05, backgroundColor);

  const customButtonStyle = css`
    background-color: ${backgroundColor};
    &:hover {
      background-color: ${hoverColor};
    }
  `;

  const buttonSizeStyle = css`
    ${size === "lg" &&
    css`
      width: 90px;
      height: 90px;
      font-size: 18px;
      background-color: black;
    `}
    ${size === "md" &&
    css`
      width: 80px;
      height: 80px;
      font-size: 16px;
      background-color: red;
    `}
    ${size === "sm" &&
    css`
      width: 70px;
      height: 70px;
      font-size: 14px;
      background-color: #4c00ff;
    `}
  `;

  return (
    <button
      css={[defaultButtonStyle, buttonSizeStyle, customButtonStyle]}
      {...props}
    >
      {children}
    </button>
  );
};

export default FloatingButton;

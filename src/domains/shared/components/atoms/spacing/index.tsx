import { css } from "@emotion/react";

export interface SpacingProps {
  widthGap?: number;
  heightGap?: number;
}

const Spacing = ({ widthGap = 0, heightGap = 0 }: SpacingProps) => {
  const SpacingStyle = css`
    margin-top: ${heightGap}px;
    margin-right: ${widthGap}px;
  `;

  return <div css={SpacingStyle} />;
};

export default Spacing;

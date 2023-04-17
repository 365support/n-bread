import type { StoryObj } from "@storybook/react";
import { css } from "@emotion/react";
import Spacing, { SpacingProps } from ".";
import Button from "../button";
import Input from "../input";

export default {
  title: "components/Spacing",
  component: Spacing,
  argTypes: {},
};

type Story = StoryObj<SpacingProps>;

const spacingContainer = css`
  display: flex;
`;

const inputStyle = css`
  width: 200px;
`;

export const SpacingBasic: Story = ({ ...props }) => {
  return (
    <>
      <div css={spacingContainer}>
        <Input css={inputStyle} />
        <Spacing {...props} />
        <Button size="md">button</Button>
      </div>
      <Spacing {...props} />
      <Button size="md">button</Button>
    </>
  );
};

SpacingBasic.args = {
  heightGap: 10,
  widthGap: 10,
};

SpacingBasic.storyName = "Default";

import type { StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button, { FloatingButtonProps } from ".";
import FloatingButton from ".";

export default {
  title: "components/Button",
  component: FloatingButton,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    backgroundColor: {
      control: { type: "color" },
    },
    fontColor: {
      control: { type: "color" },
    },
  },
};

type Story = StoryObj<FloatingButtonProps>;

export const Floating: Story = ({ ...props }) => {
  return (
    <FloatingButton {...props} onClick={action("onClick")}>
      button
    </FloatingButton>
  );
};

Floating.args = {
  size: "lg",
  disabled: false,
  backgroundColor: "#B51D29",
  fontColor: "#fff",
};

Floating.storyName = "floatingButton";

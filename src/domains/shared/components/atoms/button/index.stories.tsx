import type { StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button, { ButtonProps } from ".";

export default {
  title: "components/Button",
  component: Button,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
    variant: {
      options: ["contained", "outlined"],
      control: { type: "select" },
    },
    rounded: {
      options: ["none", "md", "lg"],
      control: { type: "select" },
    },
    fullWidth: {
      control: { type: "boolean" },
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

type Story = StoryObj<ButtonProps>;

export const Basic: Story = ({ ...props }) => {
  return (
    <Button {...props} onClick={action("onClick")}>
      button
    </Button>
  );
};

Basic.args = {
  size: "lg",
  rounded: "md",
  fullWidth: false,
  disabled: false,
  variant: "contained",
  backgroundColor: "#B51D29",
  fontColor: "#fff",
};

Basic.storyName = "Default";

import { useRef } from "react";
import type { StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Input, { InputProps } from ".";

export default {
  title: "components/Input",
  component: Input,
  argTypes: {
    autoFocus: {
      control: { type: "boolean" },
    },
  },
};

type Story = StoryObj<InputProps>;

export const InputBasic: Story = ({ ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      action(`onChange input with value: ${inputValue}`)();
    }
  };

  return <Input {...props} onChange={handleClick} ref={inputRef} />;
};

InputBasic.args = {
  placeholder: "placeholder",
  autoFocus: true,
};

InputBasic.storyName = "Default";

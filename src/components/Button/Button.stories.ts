import { Meta, StoryObj } from "@storybook/react";

import type { ButtonProps } from "./Button";
import { Button } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Molecules/Button",
  component: Button,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
  },
};

export const Violet: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    className: "theme-violet",
  },
};

import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonsProps } from ".";

export default {
  title: "Buttons/Button",
  component: Button,
} as Meta<ButtonsProps>;

export const Default: StoryObj<ButtonsProps> = {
  args: {
    textButton: "Botão",
  },
};

export const Solid: StoryObj<ButtonsProps> = {
  args: {
    textButton: "Botão",
    styles: "solid",
  },
};

export const Outline: StoryObj<ButtonsProps> = {
  args: {
    textButton: "Botão",
    styles: "outline",
  },
};

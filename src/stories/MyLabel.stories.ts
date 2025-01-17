import { Meta, StoryObj } from "@storybook/react";
import { MyLabel, Props } from "../components/MyLabel";

const meta: Meta<Props> = {
    title: 'UI/labels/MyLabel',
    component: MyLabel,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'inline-radio'
        }
    }

} satisfies Meta<typeof MyLabel>

export default meta;

type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
      label: 'Basic Label',
      allCaps: false
    }
}

export const AllCaps: Story = {
  args: {
    label: "All caps Label",
    allCaps: true
  }
};

export const Secondary: Story = {
  args: {
    label: "Secondary Label",
    color: 'text-secondary',
    allCaps: false
  }
};

export const CustomColor: Story = {
  args: {
    label: "Custom color Label",
    fontColor: "#18cae5"
  }
};

export const CustomBackground: Story = {
  args: {
    label: "Custom color background",
    fontColor: "white",
    backgroundColor: 'black'
  }
};

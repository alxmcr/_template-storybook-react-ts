import type { Meta, StoryObj } from '@storybook/react';
import { ButtonOutline } from '.';

const meta = {
  title: 'atoms/buttons/ButtonOutline',
  component: ButtonOutline,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof ButtonOutline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default button',
    onClick: () => {
      console.log('Default...');
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled button',
    onClick: () => {
      console.log('Disabled...');
    },
  },
};

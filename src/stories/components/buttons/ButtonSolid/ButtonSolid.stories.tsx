import type { Meta, StoryObj } from '@storybook/react';
import { ButtonSolid } from '.';

const meta = {
  title: 'atoms/buttons/ButtonSolid',
  component: ButtonSolid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof ButtonSolid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    onClick: () => {
      console.log('Default...');
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Button',
    onClick: () => {
      console.log('Disabled...');
    },
  },
};

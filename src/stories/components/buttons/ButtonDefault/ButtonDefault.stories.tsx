import type { Meta, StoryObj } from '@storybook/react';
import { ButtonDefault } from '.';

const meta = {
  title: 'atoms/buttons/Button',
  component: ButtonDefault,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof ButtonDefault>;

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

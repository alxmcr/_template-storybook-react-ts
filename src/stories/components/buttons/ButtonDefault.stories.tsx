import type { Meta, StoryObj } from '@storybook/react';
import { ButtonDefault } from './ButtonDefault';

const meta = {
  title: 'atoms/buttons/ButtonDefault',
  component: ButtonDefault,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

Primary.args = {
  onClick: () => {
    console.log('primary...');
  },
};

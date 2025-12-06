import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import UnderConstructionImage from './UnderConstructionImage';

const meta = {
  component: UnderConstructionImage,
  parameters: {
    // layout: "centered",
  }
} satisfies Meta<typeof UnderConstructionImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "title",
    subtitle: "subtitle",
    socialButtons: []
  }
};
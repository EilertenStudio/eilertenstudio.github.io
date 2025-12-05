import type {Meta, StoryObj} from '@storybook/nextjs-vite';

import Card from './Card';
import {SocialButtonType} from "@/app/under_construction/components/SocialButton";

const meta = {
  component: Card,
  parameters: {
    layout: 'centered',
  }
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "John Doe",

    socialButtons: [
      {
        type: SocialButtonType.GitHub,
        link: "example.com"
      },
      {
        type: SocialButtonType.Discord,
        link: "example.com"
      }
    ],

    subtitle: "IT & CGI Artist"
  }
};
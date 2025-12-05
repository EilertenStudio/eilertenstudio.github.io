import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import SocialButton, {SocialButtonType} from './SocialButton';

const meta = {
  component: SocialButton,
} satisfies Meta<typeof SocialButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GitHub: Story = {
  name: "GitHub",
  args: {
    type: SocialButtonType.GitHub,
    link: "https://github.com"
  }
};

export const ItchIo: Story = {
  name: "Itch.io",
  args: {
    type: SocialButtonType.ItchIo,
    link: "https://itch.io"
  }
};

export const Discord: Story = {
  name: "Discord",
  args: {
    type: SocialButtonType.Discord,
    link: "https://discord.gg"
  }
};
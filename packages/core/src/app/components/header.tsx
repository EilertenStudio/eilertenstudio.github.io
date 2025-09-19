import Logo from "./logo";
import { Menu, MenuItem } from "./menu";

type HeaderProps = {
  className?: string;
};

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`${className} w-full h-15 p-5 flex`}>
      <Logo />
      <Menu>
        <MenuItem>About</MenuItem>
      </Menu>
    </header>
  );
}
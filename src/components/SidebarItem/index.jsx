import { StyledSidebarItem } from "./style";

export default function SidebarItem({ Icon, text, action, path }) {
  return (
    <StyledSidebarItem onClick={() => action(path)}>
      <Icon />
      {text}
    </StyledSidebarItem>
  );
}

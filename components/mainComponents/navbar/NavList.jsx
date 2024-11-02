import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  IoChevronDown,
  Link,
} from "@/components/imports";

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-white">
      <Menu>
        <MenuHandler>
          <Link href="" className="flex items-center gap-1">
            <span className="font-medium">KWD</span>
            <IoChevronDown />
          </Link>
        </MenuHandler>
        <MenuList>
          <MenuItem>Menu Item 1</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
          <MenuItem>Menu Item 3</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuHandler>
          <Link href="" className="flex items-center gap-1">
            <span className="font-medium">My bookings</span>
            <IoChevronDown />
          </Link>
        </MenuHandler>
        <MenuList>
          <MenuItem>Menu Item 1</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
          <MenuItem>Menu Item 3</MenuItem>
        </MenuList>
      </Menu>
    </ul>
  );
}

export default NavList;

import { Flex, Icon, Link, Menu, MenuButton, Text } from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";
import { FaTable } from "react-icons/fa";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaUserPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const icons = {
  Dashboard: {
    link:'/dashboard',
    icon:FiHome,
    name:"Dashboard"
  },
  NewApartment : {
    link:'/add-apartment',
    icon:MdFormatListBulletedAdd,
    name:"New Apartment"
  },

  // NewSyndic: {
  //   link:'/Register',
  //   icon:FaUserPlus,
  //   name:"New Syndic"
  // }
};

export default function Items({ navSize }) {
 
  return (
    <Flex mx="10px" flexDirection="column" gap={6} alignItems={navSize === "small" ? "center" : "flex-start"}>
      <Menu placement="right">
        {Object.entries(icons).map(([key, value]) => (
          <Link as={NavLink} to={value.link}  key={key} borderRadius={8} _hover={{ textDecor: "none", backgroundColor: "blue.900" }} w={navSize == "large" && "100%"}>
            <MenuButton >
              <Flex p={3} gap="10px" alignItems="center">
                <Icon color="blue.300" as={value.icon} />
                <Text color="gray.400" display={navSize === "small" ? "none" : "flex"}>
                  {value.name}
                </Text>
              </Flex>
            </MenuButton>
          </Link>
        ))}
      </Menu>
    </Flex>
  );
}

import { Flex, Icon, Link, Menu, MenuButton ,Text } from '@chakra-ui/react'
import { FiHome } from "react-icons/fi";
import { FaTable } from "react-icons/fa";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaUserPlus } from "react-icons/fa";





const icons = {
    Dashboard: FiHome,
    Table: FaTable,
    Add: MdFormatListBulletedAdd,
    ListApprt: CiBoxList,
    SignIn : CgProfile,
    SignUp : FaUserPlus,
}

export default function Items({navSize}) {

  return (
    <Flex
    mx="10px"
    flexDirection="column"
    gap={6}
    alignItems={navSize === "small" ? "center" : "flex-start"}
    >
        <Menu placement = "right">
        {Object.entries(icons).map(([key, value]) => (
            <Link key={key}
            // p ={3}
            borderRadius={8}
            _hover={{ textDecor: "none" , backgroundColor: "blue.900" }}
            w = {navSize == "large" && "80%"}
            >
            <MenuButton>
                <Flex p={3} gap = "10px" alignItems="center" >
                    <Icon color="blue.300" as = {value}     />
                    <Text color="gray.400" display={navSize === "small" ? "none" : "flex" }>{key}</Text>
                </Flex>
            </MenuButton>
            </Link>

))}
        </Menu>

    </Flex>

  )
}

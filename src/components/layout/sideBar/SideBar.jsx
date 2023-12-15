import {
  Avatar,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  IconButton,
  MenuButton,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import Items from "./items";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { logout } from "../../../redux/actions/adminActions";


const NewSyndic = {
  link: "/Register",
  icon: FaUserPlus,
  name: "New Syndic",
};

export default function SideBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("syndic"));
  const syndic = user && user.admin;
  const userSyndic = useSelector((state) => state.admin.admin);
  const [navSize, setNaveChange] = useState("large");
  const MenuToggle = () => {
    navSize === "large" ? setNaveChange("small") : setNaveChange("large");
  };

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')

  }
  useEffect(() => {}, [userSyndic]);

  return (
    <Flex
      fontWeight="bold"
      pos="sticky"
      h="100vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRightRadius={navSize === "small" ? "0px" : "20px"}
      w={navSize === "small" ? "50px" : "200px"}
      flexDir="column"
      background="linear-gradient(112deg, #060B26 50.3%, rgba(26, 31, 55, 0.70) 100%)"
      backdropFilter="blur(60px)"
      transition="width 0.4s ease-in-out"
      alignItems="center"
    >
      <Text
        color="white"
        fontSize="2xl"
        ml="10px"
        mt="10px"
        display={navSize === "small" ? "none" : "flex"}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        bgGradient="linear-gradient(98deg, #FFF 70.67%, rgba(117, 122, 140, 0.00) 108.55%)"
        bgClip="text"
      >
        DigiSynd
      </Text>
      <Flex p="5%" flexDir="column" alignItems="flex-start" as="nav">
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<HamburgerIcon />}
          onClick={MenuToggle}
          size="lg"
          color="white"
        />
      </Flex>
      <Items navSize={navSize} />

      <Flex p="5%" flexDir="column" w="100%" alignItems="flex-start" mb={4}>
        {syndic && syndic.role === "superAdmin" && (
          <Flex mb="10px">
            <Link
              as={NavLink}
              to={NewSyndic.link}
              borderRadius={8}
              _hover={{ textDecor: "none", backgroundColor: "blue.900" }}
              w={navSize == "large" && "100%"}
            >
              <Flex p={3} gap="10px" alignItems="center">
                <Icon color="blue.300" as={NewSyndic.icon} />
                <Text
                  color="gray.400"
                  display={navSize === "small" ? "none" : "flex"}
                >
                  {NewSyndic.name}
                </Text>
              </Flex>
            </Link>
          </Flex>
        )}
        <Divider display={navSize == "small" ? "none" : "flex"} />


        <Flex mt={4} align="center">
          <Avatar
            ml="8px"
            size="sm"
            name={syndic ? syndic.fullName : ""}

            // src="https://bit.ly/tioluwani-kolawole"
          />{" "}
          <Flex
            flexDir="column"
            ml={4}
            display={navSize == "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="xs" color="white">
              {syndic ? syndic.fullName : "Not Connected"}
            </Heading>
          </Flex>
        </Flex>

          <Flex ml={navSize == "small" ? "none" : "30px"} display={syndic ? "block" : "none"}> 

        <Button background="red" position="absolute" bottom="5" onClick={handleLogout}>
        <CiLogout color="white"/>
        <Flex
          flexDir="column"
          ml={4}
          display={navSize == "small" ? "none" : "flex"}
          color="white"
          >
          
          Logout
        </Flex>
      </Button>
          </Flex>
      </Flex>
      
    </Flex>
  );
}

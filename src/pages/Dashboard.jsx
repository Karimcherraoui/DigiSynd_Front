import { Flex, Text } from "@chakra-ui/react";
import Background from "../assets/images/Background.png";
import BoxStat from "../components/ListApart/BoxStat";
import { FaWallet } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import Footer from "../components/layout/Footer";
import SideBar from "../components/layout/sideBar/SideBar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {

  

  return (
    <Flex
      flexDirection="row"
      backgroundImage={Background}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      w="100vw"
      minHeight="100vh"
    >
      <SideBar />

      <Flex flexDirection="column" mt="25px" mx="auto" >
        <Flex gap="150px" justifyContent="center" >
          <BoxStat
            title="Today's Money"
            number="2000 Dh"
            icon={<FaWallet color="white" size="20px" />}
          />
          <BoxStat
            title="Today’s Users"
            number="2"
            icon={<FaUsers color="white" size="20px" />}
          />
          <BoxStat
            title="Total Sales"
            number="10933 Dh"
            icon={<GiTakeMyMoney color="white" size="20px" />}
          />
        </Flex>

        <Outlet/>

        <Footer />
      </Flex>
    </Flex>
  );
}

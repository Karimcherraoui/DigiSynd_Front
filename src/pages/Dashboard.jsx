import { Flex, Text } from "@chakra-ui/react";
import Background from "../assets/images/Background.png";
import BoxStat from "./Tables/ListApprt/BoxStat";
import { FaWallet } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import ListAppart from "./Tables/ListApprt/ListAppart";
import ApartmentForm from "../components/forms/ApartmentForm";
import Footer from "../components/layout/Footer";
import SideBar from "../components/layout/sideBar/SideBar";
import TableAppart from "./Tables/TableAppart/TableApprt";

export default function Dashboard() {
  return (
    <Flex
      flexDirection="row"
      backgroundImage={Background}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      // h="100vh"
      minHeight="100vh"
    >
      <SideBar />

      <Flex flexDirection="column" mt="25px">
        <Flex gap="150px" justifyContent="center" ml="130px">
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

        {/* <Flex
          justifyContent="center"
          alignItems="center"
          mt="50px"
          w="100%"
          mx="50px"
         
        >
          
            <ListAppart />
        </Flex> */}


        <Flex
          justifyContent="center"
          alignItems="center"
          mt="50px"
          w="100%"
          mx="50px"
         
        >
          
            <TableAppart />
        </Flex>



        {/* <ApartmentForm
          justifyContent="center"
          alignItems="center"
          w="80%"

        /> */}

        <Footer />
      </Flex>
    </Flex>
  );
}

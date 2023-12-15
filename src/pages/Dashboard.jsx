import { Flex } from "@chakra-ui/react";
import Background from "../assets/images/Background.png";
import BoxStat from "../components/ListApart/BoxStat";

import { GiTakeMyMoney } from "react-icons/gi";
import Footer from "../components/layout/Footer";
import SideBar from "../components/layout/sideBar/SideBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdApartment } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { useEffect, useLayoutEffect } from "react";

export default function Dashboard() {
  const aparts = useSelector((state) => state.aparts.apartments);
  const paidAparts = aparts.filter((apart) => apart.isPaid === true);
  const numberOfApartments = aparts.length;
  const numberOfPaidApartments = paidAparts.length;
  const numberOfNotPaidApartments = numberOfApartments - numberOfPaidApartments;


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

      <Flex flexDirection="column" mt="25px" mx="auto">
        <Flex gap="150px" justifyContent="center">
          <BoxStat
            title="Number of Apartments"
            number={numberOfApartments}
            icon={<MdApartment color="white" size="20px" />}
          />
          <BoxStat
            title="Apartments paid"
            number={numberOfPaidApartments}
            icon={<GiTakeMyMoney color="white" size="20px" />}
          />
          <BoxStat
            title="Apartments not paid"
            number={numberOfNotPaidApartments}
            icon={<FaMoneyBillTransfer color="white" size="20px" />}
          />
        </Flex>

        <Outlet />

        <Footer />
      </Flex>
    </Flex>
  );
}

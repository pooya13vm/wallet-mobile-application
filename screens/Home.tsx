import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";

//custom components
import { Container } from "../components/shared";
import { colors } from "../components/colors";
import CardSection from "../components/cards/CardSection";

//images
import Logo1 from "./../assets/cards/mc.png";
import Logo2 from "./../assets/cards/visa_white.png";

const HomeContainer = styled(Container)`
  background-color: ${colors.grayLight};
  width: 100%;
  flex: 1;
`;

const Home: FunctionComponent = () => {
  const cardsDate = [
    {
      id: 1,
      accountNo: "02948243858",
      balance: 20000.12,
      alias: "Work Debit",
      logo: Logo1,
    },
    {
      id: 2,
      accountNo: "89368767957",
      balance: 47000.67,
      alias: "Personal Prepaid",
      logo: Logo2,
    },
    {
      id: 3,
      accountNo: "93876556678",
      balance: 7000.42,
      alias: "School Prepaid",
      logo: Logo1,
    },
  ];

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardsDate} />
    </HomeContainer>
  );
};

export default Home;

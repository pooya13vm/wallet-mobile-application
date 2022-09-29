import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";

//custom components
import { Container } from "../components/shared";
import { colors } from "../components/colors";
import CardSection from "../components/cards/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";

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
  const transactionData = [
    {
      id: 1,
      amount: "-86.00",
      date: "14 sep 2021",
      title: "Taxi",
      subtitle: "Uber car",
      art: {
        background: colors.primary,
        icon: "car",
      },
    },
    {
      id: 2,
      amount: "-210.00",
      date: "16 sep 2021",
      title: "Shopping",
      subtitle: "Walmart",
      art: {
        background: colors.tertiary,
        icon: "cart-outline",
      },
    },
    {
      id: 3,
      amount: "-240.00",
      date: "17 sep 2021",
      title: "Travel",
      subtitle: "Ticket",
      art: {
        background: colors.secondary,
        icon: "airplane-outline",
      },
    },
    {
      id: 4,
      amount: "-18.00",
      date: "18 sep 2021",
      title: "Cafe",
      subtitle: "Starbucks",
      art: {
        background: colors.accent,
        icon: "cafe-outline",
      },
    },
    {
      id: 5,
      amount: "-20.00",
      date: "18 sep 2021",
      title: "Fast food",
      subtitle: "Macdonald",
      art: {
        background: colors.accent,
        icon: "fast-food-outline",
      },
    },
  ];

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardsDate} />
      <TransactionSection data={transactionData} />
    </HomeContainer>
  );
};

export default Home;

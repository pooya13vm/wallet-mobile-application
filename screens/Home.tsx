import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";

//custom components
import { Container } from "../components/shared";
import { colors } from "../components/colors";
import CardSection from "../components/cards/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";
import SendMoneySection from "../components/SendMoney/SendMoneySection";

//images
import Logo1 from "./../assets/cards/mc.png";
import Logo2 from "./../assets/cards/visa_white.png";
import Portrait1 from "./../assets/portraits/1.jpg";
import Portrait2 from "./../assets/portraits/2.jpg";
import Portrait3 from "./../assets/portraits/3.jpg";

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
  const sendMoneyData = [
    {
      id: 1,
      amount: "2487.05",
      name: "Jennifer West",
      background: colors.tertiary,
      img: Portrait1,
    },
    {
      id: 2,
      amount: "987.34",
      name: "Jack Brown",
      background: colors.primary,
      img: Portrait2,
    },
    {
      id: 3,
      amount: "4567.45",
      name: "Ross Cortin",
      background: colors.accent,
      img: Portrait3,
    },
  ];

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardsDate} />
      <TransactionSection data={transactionData} />
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  );
};

export default Home;

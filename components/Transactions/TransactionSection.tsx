import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import Ionicons from "@expo/vector-icons/Ionicons";
//types
import { TransactionSectionProps } from "./types";
//components
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import TransactionItem from "./TransactionItem";

const TransactionSectionBackground = styled.View`
  width: 100%;
  padding-horizontal: 25px;
  padding-top: 5px;
  flex: 2;
`;
const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;
const TransactionList = styled.FlatList`
  width: 100%;
`;

const TransactionSection: FunctionComponent<TransactionSectionProps> = (
  props
) => {
  return (
    <TransactionSectionBackground>
      <TransactionRow>
        <RegularText textStyles={{ fontSize: 19, color: colors.secondary }}>
          Transaction
        </RegularText>
        <SmallText textStyles={{ color: colors.secondary }}>Recent</SmallText>
        <Ionicons name="caret-down" size={13} color={colors.grayDark} />
      </TransactionRow>
      <TransactionList
        data={props.data}
        showVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 25,
        }}
        keyExtractor={({ id }: any) => id.toString()}
        renderItem={({ item }: any) => <TransactionItem {...item} />}
      />
    </TransactionSectionBackground>
  );
};

export default TransactionSection;

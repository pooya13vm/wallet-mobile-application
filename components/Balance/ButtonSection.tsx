import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import Ionicons from "@expo/vector-icons/Ionicons";

//custom components
import RegularButton from "../Buttons/RegularButton";
import { colors } from "../colors";

const ButtonSectionBackground = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
`;

const ButtonSection: FunctionComponent = () => {
  return (
    <ButtonSectionBackground>
      <RegularButton
        btnStyles={{
          width: "50%",
          alignItems: "center",
        }}
        onPress={() => {}}
      >
        Cancel{"  "} <Ionicons size={17} name="card" color={colors.white} />
      </RegularButton>
    </ButtonSectionBackground>
  );
};
export default ButtonSection;

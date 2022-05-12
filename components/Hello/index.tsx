import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const HelloContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-col
        h-screen
        relative
    `}
`;
const Hello = () => {
  return <HelloContainer>Hello!</HelloContainer>;
};

export default Hello;

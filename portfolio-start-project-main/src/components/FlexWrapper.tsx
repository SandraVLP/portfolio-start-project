import styled from "styled-components";

type FlexWrapperPropsType = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  margin?: string;
  padding?: string;
  gap?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "space-around"};
  align-items: ${props => props.align || "center"};
  flex-wrap: ${props => props.wrap || "nowrap"};
  margin: ${props => props.margin || "0"};
  padding:${props => props.padding || "0"};
  gap: ${props => props.gap || "0"};
`;

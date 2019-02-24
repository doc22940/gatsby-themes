import styled from '@emotion/styled';

export const Article = styled.article`
  padding: ${props => props.theme.spaces.xl};
`;

export const Main = styled.main`
  background: ${props => props.theme.palette.white};
  height: 100vh;
  position: absolute;
  right: 0;
  overflow-y: auto;
  top: 0;
  width: calc(100% - ${props => props.theme.dimensions.infoBox.width});
`;

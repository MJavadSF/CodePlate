import styled from 'styled-components/macro';

export const StyledWrapper = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  padding: 3px;
`;

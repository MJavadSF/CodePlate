import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name='description' content='Page not found' />
      </Helmet>
      <Wrapper></Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;

/**
 *
 * Index
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Helmet } from 'react-helmet-async';
import Logo from 'assets/images/DarkLogo.webp';
interface Props {}

export function Index(props: Props) {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t(messages.title())}</title>
        <meta name='description' content={t(messages.description())} />
      </Helmet>
      <Div>
        <Image src={Logo} alt={''} />
      </Div>
    </>
  );
}

const Div = styled.div`
  background-color: #2a2a2a;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Image = styled.img`
  height: 20%;
`;

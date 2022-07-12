import { Helmet } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Routes from './Components/Routes';

export const AppRouter = () => {
  const { i18n } = useTranslation();
  return (
    <Router>
      <Helmet titleTemplate='%s - CodePlate' defaultTitle='React.JS Custom Boilerplate' htmlAttributes={{ lang: i18n.language, dir: i18n.dir() }}>
        <meta name='description' content='React.JS Custom Boilerplate' />
      </Helmet>
      <Routes.AppRoutes />
    </Router>
  );
};

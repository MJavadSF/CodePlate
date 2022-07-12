import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from 'components/NotFoundPage/Loadable';
import { Index } from 'app/pages/Index';

function AppRoutes() {
  return (
    <Routes>
      <Route path={'/'} element={<Index />} />
      <Route path={'*'} element={<NotFoundPage />} />
    </Routes>
  );
}

export { AppRoutes };
const exportedRoutes = { AppRoutes };
export default exportedRoutes;

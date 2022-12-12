import { Outlet } from 'react-router-dom';
import { Cabecalho } from '../../components/Cabecalho';

export const PaginaPadrao = () => {
  return (
    <>
        <Cabecalho/>
        <Outlet/>   
      
    </>
  );
}



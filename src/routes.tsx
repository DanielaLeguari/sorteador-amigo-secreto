import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { PaginaPadrao } from './Pages/PaginaPadrao';

export const Router = () => {
    return (
        <BrowserRouter>
            <RecoilRoot>
                <Routes>
                    <Route path='/' element={<PaginaPadrao />} />
                </Routes>
            </RecoilRoot>
        </BrowserRouter>
    )
}
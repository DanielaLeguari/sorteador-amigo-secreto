import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Home } from './Pages/Home';


export const Router = () => {
    return (
        <BrowserRouter>
            <RecoilRoot>
                <Routes>
                    <Route path='/' element={<Home />} />
                   
                </Routes>
            </RecoilRoot>
        </BrowserRouter>
    )
}
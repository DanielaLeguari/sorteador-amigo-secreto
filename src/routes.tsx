import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Home } from './Pages/Home';
import { Sorteio } from './Pages/Sorteio';


export const Router = () => {
    return (
        <BrowserRouter>
            <RecoilRoot>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/sorteio' element={<Sorteio />}/>
                </Routes>
            </RecoilRoot>
        </BrowserRouter>
    )
}
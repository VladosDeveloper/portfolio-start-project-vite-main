import './App.css'
import { GoTop } from './components/goTopBtnFile/GoTopBtn';
import { Partilce } from './components/particle/Particle';
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { About } from './layout/sections/about/About';
import { Contact } from './layout/sections/contacts/Contact';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Works } from './layout/sections/Works/Works';

function App() {
    return (
        <>
            <Partilce/>
            <Header/>
            <Main/>
            <About />
            <Works/>
            <Skills/>
            <Contact/>
            <Footer/>
            <GoTop/>
        </>
    )
}

export default App

import './App.css';
import styled from 'styled-components';
import { Header } from './layout/Header';
import { Main } from './layout/sections/main/Main';
import { About } from './layout/sections/about/About';
import { Skills } from './layout/sections/skills/Skills';
import { Services } from './layout/services/Services';
import { Portfolio } from './layout/portfolio/Portfolio';
import { Contacts } from './layout/contacts/Contacts';
import { Footer } from './layout/Footer';


function App() {
    return (
        
        <div className="App">
            <Header />
            <Main />
            <About/>
            <Skills/>
            <Services/>
            <Portfolio/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;
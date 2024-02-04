import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { Header } from './layout/Header';
import { Main } from './layout/sections/main/Main';
import { About } from './layout/sections/about/About';
import { Skills } from './layout/sections/skills/Skills';
import { Services } from './layout/services/Services';
import { Portfolio } from './layout/portfolio/Portfolio';
import { Contacts } from './layout/contacts/Contacts';
import { Footer } from './layout/Footer';
import { myTheme } from './styles/Theme';


function App() {
    return (
        
        <div className="App">
            <ThemeProvider theme={myTheme}>
            <Header />
            <Main />
            <About/>
            <Skills/>
            <Services/>
            <Portfolio/>
            <Contacts/>
            <Footer/>
            </ThemeProvider>
        </div>
    );
}

export default App;


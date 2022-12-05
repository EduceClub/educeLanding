import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout'
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree'
import HowItWorks from './components/HowItWorks';
import { createTheme, ThemeProvider } from "@mui/material";

import ReactGA from 'react-ga';

ReactGA.initialize('G-X5QZPD7RWC');
ReactGA.pageview(window.location.pathname + window.location.search);

const educeTheme = createTheme({
  palette: {
    primary: {
      main: "#AAF0C1"
    },
    secondary: {
      main: "#000000"
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={educeTheme}>
      <div className="App">
        <Layout>
          <SectionOne />
          <SectionTwo />
          {/* <SectionThree /> */}
          <HowItWorks />
        </Layout>
      </div>
      </ThemeProvider>
  );
}

export default App;

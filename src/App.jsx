import { createTheme, ThemeProvider } from '@mui/material';

import Layout from './components/Layout';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
// import SectionThree from './components/SectionThree'
import HowItWorks from './components/HowItWorks';

import './App.css';

import ReactGA from 'react-ga4';
ReactGA.initialize('G-X5QZPD7RWC');
ReactGA.send('pageview');

const educeTheme = createTheme({
  palette: {
    primary: {
      main: '#AAF0C1',
    },
    secondary: {
      main: '#000000',
    },
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

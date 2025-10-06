import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';

import Layout from './components/Layout';
import SimplifyKnowledge from './components/SimplifyKnowledge';
import InfoOverload from './components/InfoOverload';
import HowItWorks from './components/HowItWorks';

import './App.css';

import ReactGA from 'react-ga4';
ReactGA.initialize('G-X5QZPD7RWC');
ReactGA.send('pageview');

const educeTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#FFFFFF',
    },
    accent: {
      main: '#6db0a7',
      secondary: '#AAF0C1',
    },
  },
});

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={educeTheme}>
        <div className="App">
          <Layout>
            <SimplifyKnowledge />
            <InfoOverload />
            <HowItWorks />
          </Layout>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;

import { ThemeProvider } from './context/ThemeContext.jsx';
import AppRouter from './routers/AppRouter.jsx'
import './styles/global.css'

function App() {
  return (<ThemeProvider><AppRouter/></ThemeProvider>);
}

export default App
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import history from './services/history'
import GlobalStyles from './styles/global'
import { Provider } from 'react-redux'
import { store } from './store'
import Navigation from './containers/Navigation'


function App() {
  return (
    <Provider store={store}>
      <Router >
        <Routes />
        <GlobalStyles />
      </Router>
    </Provider>
  );
}

export default App;

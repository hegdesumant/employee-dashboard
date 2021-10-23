import './App.css';
import Main from './container/index'
import { store } from './container/redux/store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;

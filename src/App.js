import './App.css';
import AppRouter from './Router';
import { Provider } from 'react-redux';
import createStore from './Store';

const App = () => {
  const store = createStore();
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
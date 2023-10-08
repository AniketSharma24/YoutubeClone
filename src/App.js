import { Provider } from 'react-redux';
import { createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Layout from './components/Layout';
import Main from './components/Main';
import WatchPage from './components/WatchPage';
import store from './utils/store';

export const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: 'watch',
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Layout />
      </div>
    </Provider>
  );
}

export default App;

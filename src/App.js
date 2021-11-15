import React from 'react';
import Routes from './routes';

import { UserProvider,WatchnowProvider } from './component/Context/UserContext';
import LoaderContext from './component/LoaderContext'
import GlobalSpinnerContextProvider from './component/Context/GlobalSpinnerContext';
import { PayPalScriptProvider,  } from "@paypal/react-paypal-js";

function App() {
  return (
    <PayPalScriptProvider options={{ "client-id": "AT4EfS2dlIaPC4mHIBWoZHIWg8fqaKJ0pyb63vVqz3PX33n3_fQQQWbXvcbDZfvaMnU-5WIJ4O7-QJbN" }}>
      <GlobalSpinnerContextProvider>
        <UserProvider>
          <WatchnowProvider>
          <LoaderContext />
          <Routes />
          </WatchnowProvider>
        </UserProvider>
      </GlobalSpinnerContextProvider>
    </PayPalScriptProvider>
  );
}

export default App;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import AppRoutes from "./router/AppRoutes";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import CartSideNav from "./components/cart/CartSideNav";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./components/Loading";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <div className="flex flex-col min-h-screen">
              <AppRoutes />
              <CartSideNav />
            </div>
          </QueryClientProvider>
        </Provider>
      </PersistGate>
    </>
  );
}

export default App;

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { BrowserRouter, RouterProvider } from "react-router";
import routes from './routes/route.tsx';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './providers/Theme-provider.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
          <RouterProvider router={routes}/>
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)

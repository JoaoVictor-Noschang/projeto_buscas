import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'

const DetalhePessoa = lazy(() => import('./pages/DetalhePessoa.jsx'));


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/DetalhePessoa",
    element: (
      <Suspense fallback={<div className="loading-det">Carregando detalhes...<div className="det-spinner"></div></div>}>
        <DetalhePessoa />
      </Suspense>
    ),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

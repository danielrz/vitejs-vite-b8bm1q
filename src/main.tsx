import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contacts, { loader, action } from './routes/contacts.tsx'
import Contact, { loader as contactLoader, action as favouriteAction } from './routes/contact.jsx'
import { action as deleteContactAction } from './routes/destroy-contact.tsx'
import EditContact, {action as editContactAction} from './routes/edit-contact.tsx'
import ErrorPage from './components/ErrorPage.tsx'
import IndexContact from './routes/index-contact.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/contacts',
    element: <Contacts />,
    loader: loader,
    action: action,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <IndexContact /> },
      {
        path: '/contacts/:id',
        element: <Contact />,
        loader: contactLoader,
        action: favouriteAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/contacts/:id/edit',
        element: <EditContact />,
        loader: contactLoader,
        action: editContactAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/contacts/:id/destroy',
        action: deleteContactAction,
        errorElement: <ErrorPage />
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  connect,
  NatsConnection,
  jwtAuthenticator,
} from "nats.ws"

import './index.css'

let nc: NatsConnection

export const connectWs = async ({wsEndpoint, appConnToken}:{wsEndpoint:string, appConnToken:string}) => {
  // create a connection to a wss server
  nc = await connect({
      servers: wsEndpoint,
      authenticator: jwtAuthenticator(appConnToken),
      });
}


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

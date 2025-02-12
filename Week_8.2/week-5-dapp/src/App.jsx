import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

import './App.css'

function App() {
  

  return (
    <>
     <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
     <WalletProvider wallets={[]} autoConnect>
     <WalletModalProvider>
        <div>
          <WalletMultiButton/>
        </div>
     </WalletModalProvider>
     </WalletProvider>
     </ConnectionProvider>
    </>
  )
}

export default App

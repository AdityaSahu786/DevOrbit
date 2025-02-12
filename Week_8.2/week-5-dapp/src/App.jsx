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
import { RequestAirdrop } from './RequestAirdrop';

function App() {
  

  return (
    <>
     <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
     <WalletProvider wallets={[]} autoConnect>
     <WalletModalProvider>
        <div style={{width: "100vw", display: "flex", justifyContent: "center" }}>
          <WalletMultiButton/>
        </div>
        <div style={{width: "100vw", display: "flex", justifyContent: "center" }}>
        <RequestAirdrop/>
        </div>
     </WalletModalProvider>
     </WalletProvider>
     </ConnectionProvider>
    </>
  )
}

export default App

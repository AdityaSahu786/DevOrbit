import './App.css'
import { TokenLaunchpad } from './components/TokenLaunchpad'
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

function App() {
  return (
    <ConnectionProvider endpoint={"https://api.devent.solana.com"}>
    <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
             <WalletMultiButton></WalletMultiButton>
            <TokenLaunchpad></TokenLaunchpad>
            { /* Your app's components go here, nested within the context providers. */ }
        </WalletModalProvider>
    </WalletProvider>
</ConnectionProvider>
  )
}

export default App

//wallet adapter imports
import {ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
      walletModalProvider,
      walletDisconnectButton,
      walletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/style.css';




export function TokenLaunchpad() {
    return  <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <h1>Solana Token Launchpad</h1>
        <input className='inputText' type='text' placeholder='Name'></input> <br />
        <input className='inputText' type='text' placeholder='Symbol'></input> <br />
        <input className='inputText' type='text' placeholder='Image URL'></input> <br />
        <input className='inputText' type='text' placeholder='Initial Supply'></input> <br />
        <button className='btn'>Create a token</button>
    </div>
}
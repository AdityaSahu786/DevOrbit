import { useConnection, useWallet } from "@solana/wallet-adapter-react"

// The useWallet hook provides the wallet variable inside the airdrop component.

// because i wrapped the airdrop component inside the walletprovider

export function Airdrop() {

    // hooks in react
    
    const wallet = useWallet();
    const {connection} = useConnection();

    //define the function inside the component body
     async function sendAirdropToUser() {
        await connection.requestAirdrop(wallet.publicKey, 1000000000)
        alert("airdropped sol")
    }
    

    return <div>

        <input type="text" placeholder="Amount"></input>
        <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
} 
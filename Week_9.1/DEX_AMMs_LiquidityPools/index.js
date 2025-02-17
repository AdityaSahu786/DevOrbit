require("dotenv").config();

const { Connection, Keypair, VersionedTransaction } = require('@solana/web3.js');
const axios = require('axios');
const { Wallet } = require('@project-serum/anchor');
const bs58 = require('bs58');

const connection = new Connection("https://api.mainnet-beta.solana.com");
const wallet = new Wallet(Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY)));

async function main() {
    try {
        // Fetch quote
        const response = await axios.get(""); // Add the correct API URL
        const quoteResponse = response.data;
        console.log(quoteResponse);

        // Send swap request
        const swapResponse = await axios.post("https://quote-api.jup.ag/v6/swap", {
            quoteResponse,
            userPublicKey: wallet.publicKey.toString(),
        });

        const swapTransaction = swapResponse.data.swapTransaction;
        console.log("SwapTransaction:", swapTransaction);

        // Deserialize transaction
        const swapTransactionBuf = Buffer.from(swapTransaction, 'base64');
        const transaction = VersionedTransaction.deserialize(swapTransactionBuf);
        
    } catch (error) {
        console.error("Error:", error);
    }
}

main();

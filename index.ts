import { Keypair } from "@solana/web3.js";
import "dotenv/config";
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";


const sol = async() => {
    const publicKey = new PublicKey("7m1t9Y2s92e5aGrMvQVmL7P57Tc7x9XWPGfBGzyrP1NH");

const connection = new Connection("https://api.devnet.solana.com", "confirmed");
let balance;
const balanceInLamports =await connection.getBalance(publicKey);
	  



const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
	`💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);
}

sol();


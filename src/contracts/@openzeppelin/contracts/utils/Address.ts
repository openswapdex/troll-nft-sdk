import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../../../bin/@openzeppelin/contracts/utils/Address.json");

export class Address extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(): Promise<string>{        	
        return this._deploy();
    }
}
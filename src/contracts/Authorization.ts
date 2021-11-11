import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../bin/Authorization.json");

export class Authorization extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(): Promise<string>{        	
        return this._deploy();
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): {user:string}[]{
        return this.parseEvents(receipt, "Authorize");
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): {user:string}[]{
        return this.parseEvents(receipt, "Deauthorize");
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): {user:string}[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer");
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): {user:string}[]{
        return this.parseEvents(receipt, "TransferOwnership");
    }
    async deny(user:string): Promise<TransactionReceipt>{
        let result = await this.methods('deny',user);
        return result;
    }
    async isPermitted(param1:string): Promise<boolean>{
        let result = await this.methods('isPermitted',param1);
        return result;
    }
    async newOwner(): Promise<string>{
        let result = await this.methods('newOwner');
        return result;
    }
    async owner(): Promise<string>{
        let result = await this.methods('owner');
        return result;
    }
    async permit(user:string): Promise<TransactionReceipt>{
        let result = await this.methods('permit',user);
        return result;
    }
    async takeOwnership(): Promise<TransactionReceipt>{
        let result = await this.methods('takeOwnership');
        return result;
    }
    async transferOwnership(newOwner:string): Promise<TransactionReceipt>{
        let result = await this.methods('transferOwnership',newOwner);
        return result;
    }
}
import {Wallet, Contract, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
const Bin = require("../../bin/Authorization.json");

export class Authorization extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(): Promise<string>{
        return this._deploy();
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): Authorization.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): Authorization.AuthorizeEvent{
        let result = event.data;
        return {
            _event:event,
            user: result.user
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): Authorization.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): Authorization.DeauthorizeEvent{
        let result = event.data;
        return {
            _event:event,
            user: result.user
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Authorization.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): Authorization.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            _event:event,
            user: result.user
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): Authorization.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): Authorization.TransferOwnershipEvent{
        let result = event.data;
        return {
            _event:event,
            user: result.user
        };
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
export module Authorization{
    export interface AuthorizeEvent {_event:Event,user:string}
    export interface DeauthorizeEvent {_event:Event,user:string}
    export interface StartOwnershipTransferEvent {_event:Event,user:string}
    export interface TransferOwnershipEvent {_event:Event,user:string}
}
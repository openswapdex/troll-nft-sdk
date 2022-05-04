import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./Authorization.json";

export class Authorization extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
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
            user: result.user,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): Authorization.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): Authorization.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Authorization.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): Authorization.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): Authorization.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): Authorization.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    async deny_send(user:string): Promise<TransactionReceipt>{
        let result = await this.send('deny',[user]);
        return result;
    }
    async deny_call(user:string): Promise<void>{
        let result = await this.call('deny',[user]);
        return;
    }
    deny: {
        (user:string): Promise<TransactionReceipt>;
        call: (user:string) => Promise<void>;
    }
    async isPermitted(param1:string): Promise<boolean>{
        let result = await this.call('isPermitted',[param1]);
        return result;
    }
    async newOwner(): Promise<string>{
        let result = await this.call('newOwner');
        return result;
    }
    async owner(): Promise<string>{
        let result = await this.call('owner');
        return result;
    }
    async permit_send(user:string): Promise<TransactionReceipt>{
        let result = await this.send('permit',[user]);
        return result;
    }
    async permit_call(user:string): Promise<void>{
        let result = await this.call('permit',[user]);
        return;
    }
    permit: {
        (user:string): Promise<TransactionReceipt>;
        call: (user:string) => Promise<void>;
    }
    async takeOwnership_send(): Promise<TransactionReceipt>{
        let result = await this.send('takeOwnership');
        return result;
    }
    async takeOwnership_call(): Promise<void>{
        let result = await this.call('takeOwnership');
        return;
    }
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    async transferOwnership_send(newOwner:string): Promise<TransactionReceipt>{
        let result = await this.send('transferOwnership',[newOwner]);
        return result;
    }
    async transferOwnership_call(newOwner:string): Promise<void>{
        let result = await this.call('transferOwnership',[newOwner]);
        return;
    }
    transferOwnership: {
        (newOwner:string): Promise<TransactionReceipt>;
        call: (newOwner:string) => Promise<void>;
    }
    private assign(){
        this.deny = Object.assign(this.deny_send, {call:this.deny_call});
        this.permit = Object.assign(this.permit_send, {call:this.permit_call});
        this.takeOwnership = Object.assign(this.takeOwnership_send, {call:this.takeOwnership_call});
        this.transferOwnership = Object.assign(this.transferOwnership_send, {call:this.transferOwnership_call});
    }
}
export module Authorization{
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
}
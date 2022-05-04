import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./ERC721.json";

export class ERC721 extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params:{name:string,symbol:string}): Promise<string>{
        return this._deploy(params.name,params.symbol);
    }
    parseApprovalEvent(receipt: TransactionReceipt): ERC721.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): ERC721.ApprovalEvent{
        let result = event.data;
        return {
            owner: result.owner,
            approved: result.approved,
            tokenId: new BigNumber(result.tokenId),
            _event: event
        };
    }
    parseApprovalForAllEvent(receipt: TransactionReceipt): ERC721.ApprovalForAllEvent[]{
        return this.parseEvents(receipt, "ApprovalForAll").map(e=>this.decodeApprovalForAllEvent(e));
    }
    decodeApprovalForAllEvent(event: Event): ERC721.ApprovalForAllEvent{
        let result = event.data;
        return {
            owner: result.owner,
            operator: result.operator,
            approved: result.approved,
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): ERC721.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): ERC721.TransferEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            tokenId: new BigNumber(result.tokenId),
            _event: event
        };
    }
    async approve_send(params:{to:string,tokenId:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('approve',[params.to,Utils.toString(params.tokenId)]);
        return result;
    }
    async approve_call(params:{to:string,tokenId:number|BigNumber}): Promise<void>{
        let result = await this.call('approve',[params.to,Utils.toString(params.tokenId)]);
        return;
    }
    approve: {
        (params:{to:string,tokenId:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{to:string,tokenId:number|BigNumber}) => Promise<void>;
    }
    async balanceOf(owner:string): Promise<BigNumber>{
        let result = await this.call('balanceOf',[owner]);
        return new BigNumber(result);
    }
    async getApproved(tokenId:number|BigNumber): Promise<string>{
        let result = await this.call('getApproved',[Utils.toString(tokenId)]);
        return result;
    }
    async isApprovedForAll(params:{owner:string,operator:string}): Promise<boolean>{
        let result = await this.call('isApprovedForAll',[params.owner,params.operator]);
        return result;
    }
    async name(): Promise<string>{
        let result = await this.call('name');
        return result;
    }
    async ownerOf(tokenId:number|BigNumber): Promise<string>{
        let result = await this.call('ownerOf',[Utils.toString(tokenId)]);
        return result;
    }
    async safeTransferFrom_send(params:{from:string,to:string,tokenId:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('safeTransferFrom',[params.from,params.to,Utils.toString(params.tokenId)]);
        return result;
    }
    async safeTransferFrom_call(params:{from:string,to:string,tokenId:number|BigNumber}): Promise<void>{
        let result = await this.call('safeTransferFrom',[params.from,params.to,Utils.toString(params.tokenId)]);
        return;
    }
    safeTransferFrom: {
        (params:{from:string,to:string,tokenId:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{from:string,to:string,tokenId:number|BigNumber}) => Promise<void>;
    }
    async safeTransferFrom_1_send(params:{from:string,to:string,tokenId:number|BigNumber,data:string}): Promise<TransactionReceipt>{
        let result = await this.send('safeTransferFrom',[params.from,params.to,Utils.toString(params.tokenId),params.data]);
        return result;
    }
    async safeTransferFrom_1_call(params:{from:string,to:string,tokenId:number|BigNumber,data:string}): Promise<void>{
        let result = await this.call('safeTransferFrom',[params.from,params.to,Utils.toString(params.tokenId),params.data]);
        return;
    }
    safeTransferFrom_1: {
        (params:{from:string,to:string,tokenId:number|BigNumber,data:string}): Promise<TransactionReceipt>;
        call: (params:{from:string,to:string,tokenId:number|BigNumber,data:string}) => Promise<void>;
    }
    async setApprovalForAll_send(params:{operator:string,approved:boolean}): Promise<TransactionReceipt>{
        let result = await this.send('setApprovalForAll',[params.operator,params.approved]);
        return result;
    }
    async setApprovalForAll_call(params:{operator:string,approved:boolean}): Promise<void>{
        let result = await this.call('setApprovalForAll',[params.operator,params.approved]);
        return;
    }
    setApprovalForAll: {
        (params:{operator:string,approved:boolean}): Promise<TransactionReceipt>;
        call: (params:{operator:string,approved:boolean}) => Promise<void>;
    }
    async supportsInterface(interfaceId:string): Promise<boolean>{
        let result = await this.call('supportsInterface',[interfaceId]);
        return result;
    }
    async symbol(): Promise<string>{
        let result = await this.call('symbol');
        return result;
    }
    async tokenURI(tokenId:number|BigNumber): Promise<string>{
        let result = await this.call('tokenURI',[Utils.toString(tokenId)]);
        return result;
    }
    async transferFrom_send(params:{from:string,to:string,tokenId:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('transferFrom',[params.from,params.to,Utils.toString(params.tokenId)]);
        return result;
    }
    async transferFrom_call(params:{from:string,to:string,tokenId:number|BigNumber}): Promise<void>{
        let result = await this.call('transferFrom',[params.from,params.to,Utils.toString(params.tokenId)]);
        return;
    }
    transferFrom: {
        (params:{from:string,to:string,tokenId:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{from:string,to:string,tokenId:number|BigNumber}) => Promise<void>;
    }
    private assign(){
        this.approve = Object.assign(this.approve_send, {call:this.approve_call});
        this.safeTransferFrom = Object.assign(this.safeTransferFrom_send, {call:this.safeTransferFrom_call});
        this.safeTransferFrom_1 = Object.assign(this.safeTransferFrom_1_send, {call:this.safeTransferFrom_1_call});
        this.setApprovalForAll = Object.assign(this.setApprovalForAll_send, {call:this.setApprovalForAll_call});
        this.transferFrom = Object.assign(this.transferFrom_send, {call:this.transferFrom_call});
    }
}
export module ERC721{
    export interface ApprovalEvent {owner:string,approved:string,tokenId:BigNumber,_event:Event}
    export interface ApprovalForAllEvent {owner:string,operator:string,approved:boolean,_event:Event}
    export interface TransferEvent {from:string,to:string,tokenId:BigNumber,_event:Event}
}
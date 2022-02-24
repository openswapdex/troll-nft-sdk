import {Wallet, Contract, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
const Bin = require("../../../../../../bin/@openzeppelin/contracts/token/ERC721/ERC721.json");

export class ERC721 extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
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
            _event:event,
            owner: result.owner,
            approved: result.approved,
            tokenId: new BigNumber(result.tokenId)
        };
    }
    parseApprovalForAllEvent(receipt: TransactionReceipt): ERC721.ApprovalForAllEvent[]{
        return this.parseEvents(receipt, "ApprovalForAll").map(e=>this.decodeApprovalForAllEvent(e));
    }
    decodeApprovalForAllEvent(event: Event): ERC721.ApprovalForAllEvent{
        let result = event.data;
        return {
            _event:event,
            owner: result.owner,
            operator: result.operator,
            approved: result.approved
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): ERC721.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): ERC721.TransferEvent{
        let result = event.data;
        return {
            _event:event,
            from: result.from,
            to: result.to,
            tokenId: new BigNumber(result.tokenId)
        };
    }
    async approve(params:{to:string,tokenId:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('approve',params.to,Utils.toString(params.tokenId));
        return result;
    }
    async balanceOf(owner:string): Promise<BigNumber>{
        let result = await this.methods('balanceOf',owner);
        return new BigNumber(result);
    }
    async getApproved(tokenId:number|BigNumber): Promise<string>{
        let result = await this.methods('getApproved',Utils.toString(tokenId));
        return result;
    }
    async isApprovedForAll(params:{owner:string,operator:string}): Promise<boolean>{
        let result = await this.methods('isApprovedForAll',params.owner,params.operator);
        return result;
    }
    async name(): Promise<string>{
        let result = await this.methods('name');
        return result;
    }
    async ownerOf(tokenId:number|BigNumber): Promise<string>{
        let result = await this.methods('ownerOf',Utils.toString(tokenId));
        return result;
    }
    async safeTransferFrom(params:{from:string,to:string,tokenId:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('safeTransferFrom',params.from,params.to,Utils.toString(params.tokenId));
        return result;
    }
    async safeTransferFrom_1(params:{from:string,to:string,tokenId:number|BigNumber,data:string}): Promise<TransactionReceipt>{
        let result = await this.methods('safeTransferFrom',params.from,params.to,Utils.toString(params.tokenId),params.data);
        return result;
    }
    async setApprovalForAll(params:{operator:string,approved:boolean}): Promise<TransactionReceipt>{
        let result = await this.methods('setApprovalForAll',params.operator,params.approved);
        return result;
    }
    async supportsInterface(interfaceId:string): Promise<boolean>{
        let result = await this.methods('supportsInterface',interfaceId);
        return result;
    }
    async symbol(): Promise<string>{
        let result = await this.methods('symbol');
        return result;
    }
    async tokenURI(tokenId:number|BigNumber): Promise<string>{
        let result = await this.methods('tokenURI',Utils.toString(tokenId));
        return result;
    }
    async transferFrom(params:{from:string,to:string,tokenId:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('transferFrom',params.from,params.to,Utils.toString(params.tokenId));
        return result;
    }
}
export module ERC721{
    export interface ApprovalEvent {_event:Event,owner:string,approved:string,tokenId:BigNumber}
    export interface ApprovalForAllEvent {_event:Event,owner:string,operator:string,approved:boolean}
    export interface TransferEvent {_event:Event,from:string,to:string,tokenId:BigNumber}
}
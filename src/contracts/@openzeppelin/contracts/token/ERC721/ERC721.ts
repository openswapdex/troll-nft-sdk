import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../../../../../bin/@openzeppelin/contracts/token/ERC721/ERC721.json");

export class ERC721 extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{name:string,symbol:string}): Promise<string>{        	
        return this._deploy(params.name,params.symbol);
    }
    parseApprovalEvent(receipt: TransactionReceipt): {owner:string,approved:string,tokenId:BigNumber}[]{
        return this.parseEvents(receipt, "Approval");
    }
    parseApprovalForAllEvent(receipt: TransactionReceipt): {owner:string,operator:string,approved:boolean}[]{
        return this.parseEvents(receipt, "ApprovalForAll");
    }
    parseTransferEvent(receipt: TransactionReceipt): {from:string,to:string,tokenId:BigNumber}[]{
        return this.parseEvents(receipt, "Transfer");
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
        let result = await this.methods('getApproved',tokenId);
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
        let result = await this.methods('ownerOf',tokenId);
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
        let result = await this.methods('tokenURI',tokenId);
        return result;
    }
    async transferFrom(params:{from:string,to:string,tokenId:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('transferFrom',params.from,params.to,Utils.toString(params.tokenId));
        return result;
    }
}
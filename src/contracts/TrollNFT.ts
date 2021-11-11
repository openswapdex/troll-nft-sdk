import {Wallet, Contract, TransactionReceipt, Utils, BigNumber} from "@ijstech/eth-wallet";
const Bin = require("../../bin/TrollNFT.json");

export class TrollNFT extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{name:string,symbol:string,baseURI:string,cap:number|BigNumber,stakeToken:string,requireApproval:boolean,minimumStake:number|BigNumber,protocolFee:number|BigNumber,protocolFeeTo:string}): Promise<string>{        	
        return this._deploy(params.name,params.symbol,params.baseURI,Utils.toString(params.cap),params.stakeToken,params.requireApproval,Utils.toString(params.minimumStake),Utils.toString(params.protocolFee),params.protocolFeeTo);
    }
    parseApprovalEvent(receipt: TransactionReceipt): {owner:string,approved:string,tokenId:BigNumber}[]{
        return this.parseEvents(receipt, "Approval");
    }
    parseApprovalForAllEvent(receipt: TransactionReceipt): {owner:string,operator:string,approved:boolean}[]{
        return this.parseEvents(receipt, "ApprovalForAll");
    }
    parseApprovedStakerEvent(receipt: TransactionReceipt): {staker:string,allow:boolean}[]{
        return this.parseEvents(receipt, "ApprovedStaker");
    }
    parseAttributeEvent(receipt: TransactionReceipt): {tokenId:BigNumber,attribute:BigNumber}[]{
        return this.parseEvents(receipt, "Attribute");
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): {user:string}[]{
        return this.parseEvents(receipt, "Authorize");
    }
    parseBaseURIEvent(receipt: TransactionReceipt): {baseURI:string}[]{
        return this.parseEvents(receipt, "BaseURI");
    }
    parseCapEvent(receipt: TransactionReceipt): {cap:BigNumber}[]{
        return this.parseEvents(receipt, "Cap");
    }
    parseCustomAttributeEvent(receipt: TransactionReceipt): {tokenId:BigNumber,attribute:BigNumber}[]{
        return this.parseEvents(receipt, "CustomAttribute");
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): {user:string}[]{
        return this.parseEvents(receipt, "Deauthorize");
    }
    parseMinimumStakeEvent(receipt: TransactionReceipt): {minimumStake:BigNumber}[]{
        return this.parseEvents(receipt, "MinimumStake");
    }
    parseProtocolFeeEvent(receipt: TransactionReceipt): {protocolFee:BigNumber,protocolFeeTo:string}[]{
        return this.parseEvents(receipt, "ProtocolFee");
    }
    parseStakeEvent(receipt: TransactionReceipt): {who:string,tokenId:BigNumber,amount:BigNumber}[]{
        return this.parseEvents(receipt, "Stake");
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): {user:string}[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer");
    }
    parseTransferEvent(receipt: TransactionReceipt): {from:string,to:string,tokenId:BigNumber}[]{
        return this.parseEvents(receipt, "Transfer");
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): {user:string}[]{
        return this.parseEvents(receipt, "TransferOwnership");
    }
    parseUnstakeEvent(receipt: TransactionReceipt): {who:string,tokenId:BigNumber,amount:BigNumber}[]{
        return this.parseEvents(receipt, "Unstake");
    }
    async _attributes(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.methods('_attributes',param1);
        return new BigNumber(result);
    }
    async _customAttributes(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.methods('_customAttributes',param1);
        return new BigNumber(result);
    }
    async approve(params:{to:string,tokenId:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('approve',params.to,Utils.toString(params.tokenId));
        return result;
    }
    async approvedStaker(param1:string): Promise<boolean>{
        let result = await this.methods('approvedStaker',param1);
        return result;
    }
    async balanceOf(owner:string): Promise<BigNumber>{
        let result = await this.methods('balanceOf',owner);
        return new BigNumber(result);
    }
    async baseURI(): Promise<string>{
        let result = await this.methods('baseURI');
        return result;
    }
    async batchApprove(stakers:string[]): Promise<TransactionReceipt>{
        let result = await this.methods('batchApprove',stakers);
        return result;
    }
    async cap(): Promise<BigNumber>{
        let result = await this.methods('cap');
        return new BigNumber(result);
    }
    async counter(): Promise<BigNumber>{
        let result = await this.methods('counter');
        return new BigNumber(result);
    }
    async creationTime(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.methods('creationTime',param1);
        return new BigNumber(result);
    }
    async deny(user:string): Promise<TransactionReceipt>{
        let result = await this.methods('deny',user);
        return result;
    }
    async getApproved(tokenId:number|BigNumber): Promise<string>{
        let result = await this.methods('getApproved',tokenId);
        return result;
    }
    async getAttributes1(params:{tokenId:number|BigNumber,base:number|BigNumber,offset:number|BigNumber,digits:number|BigNumber}): Promise<BigNumber>{
        let result = await this.methods('getAttributes1',Utils.toString(params.tokenId),Utils.toString(params.base),Utils.toString(params.offset),Utils.toString(params.digits));
        return new BigNumber(result);
    }
    async getAttributes2(params:{tokenId:number|BigNumber,base:number|BigNumber,digits:number[]|BigNumber[]}): Promise<BigNumber[]>{
        let result = await this.methods('getAttributes2',Utils.toString(params.tokenId),Utils.toString(params.base),Utils.toString(params.digits));
        return result;
    }
    async isApprovedForAll(params:{owner:string,operator:string}): Promise<boolean>{
        let result = await this.methods('isApprovedForAll',params.owner,params.operator);
        return result;
    }
    async isPermitted(param1:string): Promise<boolean>{
        let result = await this.methods('isPermitted',param1);
        return result;
    }
    async minimumStake(): Promise<BigNumber>{
        let result = await this.methods('minimumStake');
        return new BigNumber(result);
    }
    async minted(param1:string): Promise<boolean>{
        let result = await this.methods('minted',param1);
        return result;
    }
    async name(): Promise<string>{
        let result = await this.methods('name');
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
    async ownerOf(tokenId:number|BigNumber): Promise<string>{
        let result = await this.methods('ownerOf',tokenId);
        return result;
    }
    async permit(user:string): Promise<TransactionReceipt>{
        let result = await this.methods('permit',user);
        return result;
    }
    async protocolFee(): Promise<BigNumber>{
        let result = await this.methods('protocolFee');
        return new BigNumber(result);
    }
    async protocolFeeBalance(): Promise<BigNumber>{
        let result = await this.methods('protocolFeeBalance');
        return new BigNumber(result);
    }
    async protocolFeeTo(): Promise<string>{
        let result = await this.methods('protocolFeeTo');
        return result;
    }
    async requireApproval(): Promise<boolean>{
        let result = await this.methods('requireApproval');
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
    async setApprovedStaker(params:{staker:string,allow:boolean}): Promise<TransactionReceipt>{
        let result = await this.methods('setApprovedStaker',params.staker,params.allow);
        return result;
    }
    async setBaseURI(baseURI:string): Promise<TransactionReceipt>{
        let result = await this.methods('setBaseURI',baseURI);
        return result;
    }
    async setCap(cap:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('setCap',cap);
        return result;
    }
    async setCustomAttribute(params:{tokenId:number|BigNumber,attribute:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('setCustomAttribute',Utils.toString(params.tokenId),Utils.toString(params.attribute));
        return result;
    }
    async setMinimumStake(minimumStake:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('setMinimumStake',minimumStake);
        return result;
    }
    async setProtocolFee(params:{protocolFee:number|BigNumber,protocolFeeTo:string}): Promise<TransactionReceipt>{
        let result = await this.methods('setProtocolFee',Utils.toString(params.protocolFee),params.protocolFeeTo);
        return result;
    }
    async stake(amount:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('stake',amount);
        return result;
    }
    async stakeToken(): Promise<string>{
        let result = await this.methods('stakeToken');
        return result;
    }
    async stakingBalance(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.methods('stakingBalance',param1);
        return new BigNumber(result);
    }
    async supportsInterface(interfaceId:string): Promise<boolean>{
        let result = await this.methods('supportsInterface',interfaceId);
        return result;
    }
    async symbol(): Promise<string>{
        let result = await this.methods('symbol');
        return result;
    }
    async takeOwnership(): Promise<TransactionReceipt>{
        let result = await this.methods('takeOwnership');
        return result;
    }
    async tokenByIndex(index:number|BigNumber): Promise<BigNumber>{
        let result = await this.methods('tokenByIndex',index);
        return new BigNumber(result);
    }
    async tokenOfOwnerByIndex(params:{owner:string,index:number|BigNumber}): Promise<BigNumber>{
        let result = await this.methods('tokenOfOwnerByIndex',params.owner,Utils.toString(params.index));
        return new BigNumber(result);
    }
    async tokenURI(tokenId:number|BigNumber): Promise<string>{
        let result = await this.methods('tokenURI',tokenId);
        return result;
    }
    async totalSupply(): Promise<BigNumber>{
        let result = await this.methods('totalSupply');
        return new BigNumber(result);
    }
    async transferFrom(params:{from:string,to:string,tokenId:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('transferFrom',params.from,params.to,Utils.toString(params.tokenId));
        return result;
    }
    async transferOwnership(newOwner:string): Promise<TransactionReceipt>{
        let result = await this.methods('transferOwnership',newOwner);
        return result;
    }
    async transferProtocolFee(): Promise<TransactionReceipt>{
        let result = await this.methods('transferProtocolFee');
        return result;
    }
    async unstake(tokenId:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('unstake',tokenId);
        return result;
    }
}
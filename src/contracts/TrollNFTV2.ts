import {Wallet, Contract, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
const Bin = require("../../bin/TrollNFTV2.json");

export class TrollNFTV2 extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{name:string,symbol:string,baseURI:string,cap:number|BigNumber,stakeToken:string,requireApproval:boolean,minimumStake:number|BigNumber,protocolFee:number|BigNumber,protocolFeeTo:string,nftInfo:{listValidNFTs:string[],maximumValidNFTs:number|BigNumber}}): Promise<string>{
        return this._deploy(params.name,params.symbol,params.baseURI,Utils.toString(params.cap),params.stakeToken,params.requireApproval,Utils.toString(params.minimumStake),Utils.toString(params.protocolFee),params.protocolFeeTo,Utils.toString(Object.values(params.nftInfo)));
    }
    parseAddStakesEvent(receipt: TransactionReceipt): TrollNFTV2.AddStakesEvent[]{
        return this.parseEvents(receipt, "AddStakes").map(e=>this.decodeAddStakesEvent(e));
    }
    decodeAddStakesEvent(event: Event): TrollNFTV2.AddStakesEvent{
        let result = event.data;
        return {
            _event:event,
            tokenId: new BigNumber(result.tokenId),
            amountAdded: new BigNumber(result.amountAdded),
            newAmount: new BigNumber(result.newAmount)
        };
    }
    parseAddValidNFTEvent(receipt: TransactionReceipt): TrollNFTV2.AddValidNFTEvent[]{
        return this.parseEvents(receipt, "AddValidNFT").map(e=>this.decodeAddValidNFTEvent(e));
    }
    decodeAddValidNFTEvent(event: Event): TrollNFTV2.AddValidNFTEvent{
        let result = event.data;
        return {
            _event:event,
            nft: result.nft
        };
    }
    parseApprovalEvent(receipt: TransactionReceipt): TrollNFTV2.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): TrollNFTV2.ApprovalEvent{
        let result = event.data;
        return {
            _event:event,
            owner: result.owner,
            approved: result.approved,
            tokenId: new BigNumber(result.tokenId)
        };
    }
    parseApprovalForAllEvent(receipt: TransactionReceipt): TrollNFTV2.ApprovalForAllEvent[]{
        return this.parseEvents(receipt, "ApprovalForAll").map(e=>this.decodeApprovalForAllEvent(e));
    }
    decodeApprovalForAllEvent(event: Event): TrollNFTV2.ApprovalForAllEvent{
        let result = event.data;
        return {
            _event:event,
            owner: result.owner,
            operator: result.operator,
            approved: result.approved
        };
    }
    parseApprovedStakerEvent(receipt: TransactionReceipt): TrollNFTV2.ApprovedStakerEvent[]{
        return this.parseEvents(receipt, "ApprovedStaker").map(e=>this.decodeApprovedStakerEvent(e));
    }
    decodeApprovedStakerEvent(event: Event): TrollNFTV2.ApprovedStakerEvent{
        let result = event.data;
        return {
            _event:event,
            staker: result.staker,
            allow: result.allow
        };
    }
    parseAttributeEvent(receipt: TransactionReceipt): TrollNFTV2.AttributeEvent[]{
        return this.parseEvents(receipt, "Attribute").map(e=>this.decodeAttributeEvent(e));
    }
    decodeAttributeEvent(event: Event): TrollNFTV2.AttributeEvent{
        let result = event.data;
        return {
            _event:event,
            tokenId: new BigNumber(result.tokenId),
            attribute: new BigNumber(result.attribute)
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): TrollNFTV2.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): TrollNFTV2.AuthorizeEvent{
        let result = event.data;
        return {
            _event:event,
            user: result.user
        };
    }
    parseBaseURIEvent(receipt: TransactionReceipt): TrollNFTV2.BaseURIEvent[]{
        return this.parseEvents(receipt, "BaseURI").map(e=>this.decodeBaseURIEvent(e));
    }
    decodeBaseURIEvent(event: Event): TrollNFTV2.BaseURIEvent{
        let result = event.data;
        return {
            _event:event,
            baseURI: result.baseURI
        };
    }
    parseCapEvent(receipt: TransactionReceipt): TrollNFTV2.CapEvent[]{
        return this.parseEvents(receipt, "Cap").map(e=>this.decodeCapEvent(e));
    }
    decodeCapEvent(event: Event): TrollNFTV2.CapEvent{
        let result = event.data;
        return {
            _event:event,
            cap: new BigNumber(result.cap)
        };
    }
    parseCustomAttributeEvent(receipt: TransactionReceipt): TrollNFTV2.CustomAttributeEvent[]{
        return this.parseEvents(receipt, "CustomAttribute").map(e=>this.decodeCustomAttributeEvent(e));
    }
    decodeCustomAttributeEvent(event: Event): TrollNFTV2.CustomAttributeEvent{
        let result = event.data;
        return {
            _event:event,
            tokenId: new BigNumber(result.tokenId),
            attribute: new BigNumber(result.attribute)
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): TrollNFTV2.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): TrollNFTV2.DeauthorizeEvent{
        let result = event.data;
        return {
            _event:event,
            user: result.user
        };
    }
    parseEquipNFTEvent(receipt: TransactionReceipt): TrollNFTV2.EquipNFTEvent[]{
        return this.parseEvents(receipt, "EquipNFT").map(e=>this.decodeEquipNFTEvent(e));
    }
    decodeEquipNFTEvent(event: Event): TrollNFTV2.EquipNFTEvent{
        let result = event.data;
        return {
            _event:event,
            trollId: new BigNumber(result.trollId),
            nft: result.nft,
            nftId: new BigNumber(result.nftId)
        };
    }
    parseMinimumStakeEvent(receipt: TransactionReceipt): TrollNFTV2.MinimumStakeEvent[]{
        return this.parseEvents(receipt, "MinimumStake").map(e=>this.decodeMinimumStakeEvent(e));
    }
    decodeMinimumStakeEvent(event: Event): TrollNFTV2.MinimumStakeEvent{
        let result = event.data;
        return {
            _event:event,
            minimumStake: new BigNumber(result.minimumStake)
        };
    }
    parseProtocolFeeEvent(receipt: TransactionReceipt): TrollNFTV2.ProtocolFeeEvent[]{
        return this.parseEvents(receipt, "ProtocolFee").map(e=>this.decodeProtocolFeeEvent(e));
    }
    decodeProtocolFeeEvent(event: Event): TrollNFTV2.ProtocolFeeEvent{
        let result = event.data;
        return {
            _event:event,
            protocolFee: new BigNumber(result.protocolFee),
            protocolFeeTo: result.protocolFeeTo
        };
    }
    parseStakeEvent(receipt: TransactionReceipt): TrollNFTV2.StakeEvent[]{
        return this.parseEvents(receipt, "Stake").map(e=>this.decodeStakeEvent(e));
    }
    decodeStakeEvent(event: Event): TrollNFTV2.StakeEvent{
        let result = event.data;
        return {
            _event:event,
            who: result.who,
            tokenId: new BigNumber(result.tokenId),
            amount: new BigNumber(result.amount)
        };
    }
    parseStakesApprovalEvent(receipt: TransactionReceipt): TrollNFTV2.StakesApprovalEvent[]{
        return this.parseEvents(receipt, "StakesApproval").map(e=>this.decodeStakesApprovalEvent(e));
    }
    decodeStakesApprovalEvent(event: Event): TrollNFTV2.StakesApprovalEvent{
        let result = event.data;
        return {
            _event:event,
            fromTokenId: new BigNumber(result.fromTokenId),
            spender: result.spender,
            amount: new BigNumber(result.amount)
        };
    }
    parseStakesTransferEvent(receipt: TransactionReceipt): TrollNFTV2.StakesTransferEvent[]{
        return this.parseEvents(receipt, "StakesTransfer").map(e=>this.decodeStakesTransferEvent(e));
    }
    decodeStakesTransferEvent(event: Event): TrollNFTV2.StakesTransferEvent{
        let result = event.data;
        return {
            _event:event,
            fromTokenId: new BigNumber(result.fromTokenId),
            toTokenId: new BigNumber(result.toTokenId),
            amount: new BigNumber(result.amount)
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): TrollNFTV2.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): TrollNFTV2.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            _event:event,
            user: result.user
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): TrollNFTV2.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): TrollNFTV2.TransferEvent{
        let result = event.data;
        return {
            _event:event,
            from: result.from,
            to: result.to,
            tokenId: new BigNumber(result.tokenId)
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): TrollNFTV2.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): TrollNFTV2.TransferOwnershipEvent{
        let result = event.data;
        return {
            _event:event,
            user: result.user
        };
    }
    parseUnequipNFTEvent(receipt: TransactionReceipt): TrollNFTV2.UnequipNFTEvent[]{
        return this.parseEvents(receipt, "UnequipNFT").map(e=>this.decodeUnequipNFTEvent(e));
    }
    decodeUnequipNFTEvent(event: Event): TrollNFTV2.UnequipNFTEvent{
        let result = event.data;
        return {
            _event:event,
            trollId: new BigNumber(result.trollId),
            nft: result.nft,
            nftId: new BigNumber(result.nftId)
        };
    }
    parseUnstakeEvent(receipt: TransactionReceipt): TrollNFTV2.UnstakeEvent[]{
        return this.parseEvents(receipt, "Unstake").map(e=>this.decodeUnstakeEvent(e));
    }
    decodeUnstakeEvent(event: Event): TrollNFTV2.UnstakeEvent{
        let result = event.data;
        return {
            _event:event,
            who: result.who,
            tokenId: new BigNumber(result.tokenId),
            amount: new BigNumber(result.amount)
        };
    }
    async _attributes(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.methods('_attributes',Utils.toString(param1));
        return new BigNumber(result);
    }
    async _customAttributes(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.methods('_customAttributes',Utils.toString(param1));
        return new BigNumber(result);
    }
    async _stakesTransferAllowances(params:{param1:number|BigNumber,param2:string}): Promise<BigNumber>{
        let result = await this.methods('_stakesTransferAllowances',Utils.toString(params.param1),params.param2);
        return new BigNumber(result);
    }
    async addStakes(params:{tokenId:number|BigNumber,amount:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('addStakes',Utils.toString(params.tokenId),Utils.toString(params.amount));
        return result;
    }
    async addValidNFTs(nfts:string[]): Promise<TransactionReceipt>{
        let result = await this.methods('addValidNFTs',nfts);
        return result;
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
    async creationDate(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.methods('creationDate',Utils.toString(param1));
        return new BigNumber(result);
    }
    async deny(user:string): Promise<TransactionReceipt>{
        let result = await this.methods('deny',user);
        return result;
    }
    async destoryDate(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.methods('destoryDate',Utils.toString(param1));
        return new BigNumber(result);
    }
    async equipNFT(params:{trollId:number|BigNumber,nft:string,nftId:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('equipNFT',Utils.toString(params.trollId),params.nft,Utils.toString(params.nftId));
        return result;
    }
    async extraStakes(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.methods('extraStakes',Utils.toString(param1));
        return new BigNumber(result);
    }
    async getApproved(tokenId:number|BigNumber): Promise<string>{
        let result = await this.methods('getApproved',Utils.toString(tokenId));
        return result;
    }
    async getAttributes1(params:{tokenId:number|BigNumber,base:number|BigNumber,offset:number|BigNumber,digits:number|BigNumber}): Promise<BigNumber>{
        let result = await this.methods('getAttributes1',Utils.toString(params.tokenId),Utils.toString(params.base),Utils.toString(params.offset),Utils.toString(params.digits));
        return new BigNumber(result);
    }
    async getAttributes2(params:{tokenId:number|BigNumber,base:number|BigNumber,digits:(number|BigNumber)[]}): Promise<BigNumber[]>{
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
    async isValidNFT(param1:string): Promise<boolean>{
        let result = await this.methods('isValidNFT',param1);
        return result;
    }
    async lastStakeDate(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.methods('lastStakeDate',Utils.toString(param1));
        return new BigNumber(result);
    }
    async listValidNFTs(param1:number|BigNumber): Promise<string>{
        let result = await this.methods('listValidNFTs',Utils.toString(param1));
        return result;
    }
    async maximumValidNFTs(): Promise<BigNumber>{
        let result = await this.methods('maximumValidNFTs');
        return new BigNumber(result);
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
    async nftsEquipped(params:{param1:string,param2:number|BigNumber}): Promise<BigNumber>{
        let result = await this.methods('nftsEquipped',params.param1,Utils.toString(params.param2));
        return new BigNumber(result);
    }
    async owner(): Promise<string>{
        let result = await this.methods('owner');
        return result;
    }
    async ownerOf(tokenId:number|BigNumber): Promise<string>{
        let result = await this.methods('ownerOf',Utils.toString(tokenId));
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
        let result = await this.methods('setCap',Utils.toString(cap));
        return result;
    }
    async setCustomAttribute(params:{tokenId:number|BigNumber,attribute:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('setCustomAttribute',Utils.toString(params.tokenId),Utils.toString(params.attribute));
        return result;
    }
    async setMinimumStake(minimumStake:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('setMinimumStake',Utils.toString(minimumStake));
        return result;
    }
    async setProtocolFee(params:{protocolFee:number|BigNumber,protocolFeeTo:string}): Promise<TransactionReceipt>{
        let result = await this.methods('setProtocolFee',Utils.toString(params.protocolFee),params.protocolFeeTo);
        return result;
    }
    async stake(amount:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('stake',Utils.toString(amount));
        return result;
    }
    async stakeToken(): Promise<string>{
        let result = await this.methods('stakeToken');
        return result;
    }
    async stakingBalance(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.methods('stakingBalance',Utils.toString(param1));
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
        let result = await this.methods('tokenByIndex',Utils.toString(index));
        return new BigNumber(result);
    }
    async tokenOfOwnerByIndex(params:{owner:string,index:number|BigNumber}): Promise<BigNumber>{
        let result = await this.methods('tokenOfOwnerByIndex',params.owner,Utils.toString(params.index));
        return new BigNumber(result);
    }
    async tokenURI(tokenId:number|BigNumber): Promise<string>{
        let result = await this.methods('tokenURI',Utils.toString(tokenId));
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
    async trollOwnedNFTs(params:{param1:number|BigNumber,param2:string}): Promise<BigNumber>{
        let result = await this.methods('trollOwnedNFTs',Utils.toString(params.param1),params.param2);
        return new BigNumber(result);
    }
    async unequipNFT(params:{trollId:number|BigNumber,nft:string,nftId:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('unequipNFT',Utils.toString(params.trollId),params.nft,Utils.toString(params.nftId));
        return result;
    }
    async unstake(tokenId:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('unstake',Utils.toString(tokenId));
        return result;
    }
    async validNFTsLength(): Promise<BigNumber>{
        let result = await this.methods('validNFTsLength');
        return new BigNumber(result);
    }
}
export module TrollNFTV2{
    export interface AddStakesEvent {_event:Event,tokenId:BigNumber,amountAdded:BigNumber,newAmount:BigNumber}
    export interface AddValidNFTEvent {_event:Event,nft:string}
    export interface ApprovalEvent {_event:Event,owner:string,approved:string,tokenId:BigNumber}
    export interface ApprovalForAllEvent {_event:Event,owner:string,operator:string,approved:boolean}
    export interface ApprovedStakerEvent {_event:Event,staker:string,allow:boolean}
    export interface AttributeEvent {_event:Event,tokenId:BigNumber,attribute:BigNumber}
    export interface AuthorizeEvent {_event:Event,user:string}
    export interface BaseURIEvent {_event:Event,baseURI:string}
    export interface CapEvent {_event:Event,cap:BigNumber}
    export interface CustomAttributeEvent {_event:Event,tokenId:BigNumber,attribute:BigNumber}
    export interface DeauthorizeEvent {_event:Event,user:string}
    export interface EquipNFTEvent {_event:Event,trollId:BigNumber,nft:string,nftId:BigNumber}
    export interface MinimumStakeEvent {_event:Event,minimumStake:BigNumber}
    export interface ProtocolFeeEvent {_event:Event,protocolFee:BigNumber,protocolFeeTo:string}
    export interface StakeEvent {_event:Event,who:string,tokenId:BigNumber,amount:BigNumber}
    export interface StakesApprovalEvent {_event:Event,fromTokenId:BigNumber,spender:string,amount:BigNumber}
    export interface StakesTransferEvent {_event:Event,fromTokenId:BigNumber,toTokenId:BigNumber,amount:BigNumber}
    export interface StartOwnershipTransferEvent {_event:Event,user:string}
    export interface TransferEvent {_event:Event,from:string,to:string,tokenId:BigNumber}
    export interface TransferOwnershipEvent {_event:Event,user:string}
    export interface UnequipNFTEvent {_event:Event,trollId:BigNumber,nft:string,nftId:BigNumber}
    export interface UnstakeEvent {_event:Event,who:string,tokenId:BigNumber,amount:BigNumber}
}
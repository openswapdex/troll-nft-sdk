import {Wallet, Contract, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
const Bin = require("../../bin/TrollNFT_VRF.json");

export class TrollNFT_VRF extends Contract{
    constructor(wallet: Wallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params:{name:string,symbol:string,baseURI:string,cap:number|BigNumber,stakeToken:string,requireApproval:boolean,minimumStake:number|BigNumber,protocolFee:number|BigNumber,protocolFeeTo:string,vrfAddresses:string[],vrfParams:string[]}): Promise<string>{
        return this._deploy(params.name,params.symbol,params.baseURI,Utils.toString(params.cap),params.stakeToken,params.requireApproval,Utils.toString(params.minimumStake),Utils.toString(params.protocolFee),params.protocolFeeTo,params.vrfAddresses,Utils.stringToBytes32(params.vrfParams));
    }
    parseApprovalEvent(receipt: TransactionReceipt): TrollNFT_VRF.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): TrollNFT_VRF.ApprovalEvent{
        let result = event.data;
        return {
            _event:event,
            owner: result.owner,
            approved: result.approved,
            tokenId: new BigNumber(result.tokenId)
        };
    }
    parseApprovalForAllEvent(receipt: TransactionReceipt): TrollNFT_VRF.ApprovalForAllEvent[]{
        return this.parseEvents(receipt, "ApprovalForAll").map(e=>this.decodeApprovalForAllEvent(e));
    }
    decodeApprovalForAllEvent(event: Event): TrollNFT_VRF.ApprovalForAllEvent{
        let result = event.data;
        return {
            _event:event,
            owner: result.owner,
            operator: result.operator,
            approved: result.approved
        };
    }
    parseApprovedStakerEvent(receipt: TransactionReceipt): TrollNFT_VRF.ApprovedStakerEvent[]{
        return this.parseEvents(receipt, "ApprovedStaker").map(e=>this.decodeApprovedStakerEvent(e));
    }
    decodeApprovedStakerEvent(event: Event): TrollNFT_VRF.ApprovedStakerEvent{
        let result = event.data;
        return {
            _event:event,
            staker: result.staker,
            allow: result.allow
        };
    }
    parseAttributeEvent(receipt: TransactionReceipt): TrollNFT_VRF.AttributeEvent[]{
        return this.parseEvents(receipt, "Attribute").map(e=>this.decodeAttributeEvent(e));
    }
    decodeAttributeEvent(event: Event): TrollNFT_VRF.AttributeEvent{
        let result = event.data;
        return {
            _event:event,
            tokenId: new BigNumber(result.tokenId),
            attribute: new BigNumber(result.attribute)
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): TrollNFT_VRF.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): TrollNFT_VRF.AuthorizeEvent{
        let result = event.data;
        return {
            _event:event,
            user: result.user
        };
    }
    parseBaseURIEvent(receipt: TransactionReceipt): TrollNFT_VRF.BaseURIEvent[]{
        return this.parseEvents(receipt, "BaseURI").map(e=>this.decodeBaseURIEvent(e));
    }
    decodeBaseURIEvent(event: Event): TrollNFT_VRF.BaseURIEvent{
        let result = event.data;
        return {
            _event:event,
            baseURI: result.baseURI
        };
    }
    parseCapEvent(receipt: TransactionReceipt): TrollNFT_VRF.CapEvent[]{
        return this.parseEvents(receipt, "Cap").map(e=>this.decodeCapEvent(e));
    }
    decodeCapEvent(event: Event): TrollNFT_VRF.CapEvent{
        let result = event.data;
        return {
            _event:event,
            cap: new BigNumber(result.cap)
        };
    }
    parseCustomAttributeEvent(receipt: TransactionReceipt): TrollNFT_VRF.CustomAttributeEvent[]{
        return this.parseEvents(receipt, "CustomAttribute").map(e=>this.decodeCustomAttributeEvent(e));
    }
    decodeCustomAttributeEvent(event: Event): TrollNFT_VRF.CustomAttributeEvent{
        let result = event.data;
        return {
            _event:event,
            tokenId: new BigNumber(result.tokenId),
            attribute: new BigNumber(result.attribute)
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): TrollNFT_VRF.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): TrollNFT_VRF.DeauthorizeEvent{
        let result = event.data;
        return {
            _event:event,
            user: result.user
        };
    }
    parseMinimumStakeEvent(receipt: TransactionReceipt): TrollNFT_VRF.MinimumStakeEvent[]{
        return this.parseEvents(receipt, "MinimumStake").map(e=>this.decodeMinimumStakeEvent(e));
    }
    decodeMinimumStakeEvent(event: Event): TrollNFT_VRF.MinimumStakeEvent{
        let result = event.data;
        return {
            _event:event,
            minimumStake: new BigNumber(result.minimumStake)
        };
    }
    parseProtocolFeeEvent(receipt: TransactionReceipt): TrollNFT_VRF.ProtocolFeeEvent[]{
        return this.parseEvents(receipt, "ProtocolFee").map(e=>this.decodeProtocolFeeEvent(e));
    }
    decodeProtocolFeeEvent(event: Event): TrollNFT_VRF.ProtocolFeeEvent{
        let result = event.data;
        return {
            _event:event,
            protocolFee: new BigNumber(result.protocolFee),
            protocolFeeTo: result.protocolFeeTo
        };
    }
    parseStakeEvent(receipt: TransactionReceipt): TrollNFT_VRF.StakeEvent[]{
        return this.parseEvents(receipt, "Stake").map(e=>this.decodeStakeEvent(e));
    }
    decodeStakeEvent(event: Event): TrollNFT_VRF.StakeEvent{
        let result = event.data;
        return {
            _event:event,
            who: result.who,
            tokenId: new BigNumber(result.tokenId),
            amount: new BigNumber(result.amount)
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): TrollNFT_VRF.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): TrollNFT_VRF.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            _event:event,
            user: result.user
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): TrollNFT_VRF.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): TrollNFT_VRF.TransferEvent{
        let result = event.data;
        return {
            _event:event,
            from: result.from,
            to: result.to,
            tokenId: new BigNumber(result.tokenId)
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): TrollNFT_VRF.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): TrollNFT_VRF.TransferOwnershipEvent{
        let result = event.data;
        return {
            _event:event,
            user: result.user
        };
    }
    parseUnstakeEvent(receipt: TransactionReceipt): TrollNFT_VRF.UnstakeEvent[]{
        return this.parseEvents(receipt, "Unstake").map(e=>this.decodeUnstakeEvent(e));
    }
    decodeUnstakeEvent(event: Event): TrollNFT_VRF.UnstakeEvent{
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
        let result = await this.methods('creationTime',Utils.toString(param1));
        return new BigNumber(result);
    }
    async deny(user:string): Promise<TransactionReceipt>{
        let result = await this.methods('deny',user);
        return result;
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
    async rawFulfillRandomness(params:{requestId:string,randomness:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('rawFulfillRandomness',Utils.stringToBytes32(params.requestId),Utils.toString(params.randomness));
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
    async setVrfParams(params:{vrfKeyHash:string,vrfFee:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.methods('setVrfParams',Utils.stringToBytes32(params.vrfKeyHash),Utils.toString(params.vrfFee));
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
    async unstake(tokenId:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('unstake',Utils.toString(tokenId));
        return result;
    }
    async withdrawLink(amount:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.methods('withdrawLink',Utils.toString(amount));
        return result;
    }
}
export module TrollNFT_VRF{
    export interface ApprovalEvent {_event:Event,owner:string,approved:string,tokenId:BigNumber}
    export interface ApprovalForAllEvent {_event:Event,owner:string,operator:string,approved:boolean}
    export interface ApprovedStakerEvent {_event:Event,staker:string,allow:boolean}
    export interface AttributeEvent {_event:Event,tokenId:BigNumber,attribute:BigNumber}
    export interface AuthorizeEvent {_event:Event,user:string}
    export interface BaseURIEvent {_event:Event,baseURI:string}
    export interface CapEvent {_event:Event,cap:BigNumber}
    export interface CustomAttributeEvent {_event:Event,tokenId:BigNumber,attribute:BigNumber}
    export interface DeauthorizeEvent {_event:Event,user:string}
    export interface MinimumStakeEvent {_event:Event,minimumStake:BigNumber}
    export interface ProtocolFeeEvent {_event:Event,protocolFee:BigNumber,protocolFeeTo:string}
    export interface StakeEvent {_event:Event,who:string,tokenId:BigNumber,amount:BigNumber}
    export interface StartOwnershipTransferEvent {_event:Event,user:string}
    export interface TransferEvent {_event:Event,from:string,to:string,tokenId:BigNumber}
    export interface TransferOwnershipEvent {_event:Event,user:string}
    export interface UnstakeEvent {_event:Event,who:string,tokenId:BigNumber,amount:BigNumber}
}
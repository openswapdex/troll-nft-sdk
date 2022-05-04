import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event} from "@ijstech/eth-wallet";
import Bin from "./TrollNFTV2.json";

export class TrollNFTV2 extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params:{name:string,symbol:string,baseURI:string,cap:number|BigNumber,stakeToken:string,requireApproval:boolean,minimumStake:number|BigNumber,protocolFee:number|BigNumber,protocolFeeTo:string,nftInfo:{listValidNFTs:string[],maximumValidNFTs:number|BigNumber}}): Promise<string>{
        return this._deploy(params.name,params.symbol,params.baseURI,Utils.toString(params.cap),params.stakeToken,params.requireApproval,Utils.toString(params.minimumStake),Utils.toString(params.protocolFee),params.protocolFeeTo,[params.nftInfo.listValidNFTs,Utils.toString(params.nftInfo.maximumValidNFTs)]);
    }
    parseAddStakesEvent(receipt: TransactionReceipt): TrollNFTV2.AddStakesEvent[]{
        return this.parseEvents(receipt, "AddStakes").map(e=>this.decodeAddStakesEvent(e));
    }
    decodeAddStakesEvent(event: Event): TrollNFTV2.AddStakesEvent{
        let result = event.data;
        return {
            tokenId: new BigNumber(result.tokenId),
            amountAdded: new BigNumber(result.amountAdded),
            newAmount: new BigNumber(result.newAmount),
            _event: event
        };
    }
    parseAddValidNFTEvent(receipt: TransactionReceipt): TrollNFTV2.AddValidNFTEvent[]{
        return this.parseEvents(receipt, "AddValidNFT").map(e=>this.decodeAddValidNFTEvent(e));
    }
    decodeAddValidNFTEvent(event: Event): TrollNFTV2.AddValidNFTEvent{
        let result = event.data;
        return {
            nft: result.nft,
            _event: event
        };
    }
    parseApprovalEvent(receipt: TransactionReceipt): TrollNFTV2.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): TrollNFTV2.ApprovalEvent{
        let result = event.data;
        return {
            owner: result.owner,
            approved: result.approved,
            tokenId: new BigNumber(result.tokenId),
            _event: event
        };
    }
    parseApprovalForAllEvent(receipt: TransactionReceipt): TrollNFTV2.ApprovalForAllEvent[]{
        return this.parseEvents(receipt, "ApprovalForAll").map(e=>this.decodeApprovalForAllEvent(e));
    }
    decodeApprovalForAllEvent(event: Event): TrollNFTV2.ApprovalForAllEvent{
        let result = event.data;
        return {
            owner: result.owner,
            operator: result.operator,
            approved: result.approved,
            _event: event
        };
    }
    parseApprovedStakerEvent(receipt: TransactionReceipt): TrollNFTV2.ApprovedStakerEvent[]{
        return this.parseEvents(receipt, "ApprovedStaker").map(e=>this.decodeApprovedStakerEvent(e));
    }
    decodeApprovedStakerEvent(event: Event): TrollNFTV2.ApprovedStakerEvent{
        let result = event.data;
        return {
            staker: result.staker,
            allow: result.allow,
            _event: event
        };
    }
    parseAttributeEvent(receipt: TransactionReceipt): TrollNFTV2.AttributeEvent[]{
        return this.parseEvents(receipt, "Attribute").map(e=>this.decodeAttributeEvent(e));
    }
    decodeAttributeEvent(event: Event): TrollNFTV2.AttributeEvent{
        let result = event.data;
        return {
            tokenId: new BigNumber(result.tokenId),
            attribute: new BigNumber(result.attribute),
            _event: event
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): TrollNFTV2.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): TrollNFTV2.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseBaseURIEvent(receipt: TransactionReceipt): TrollNFTV2.BaseURIEvent[]{
        return this.parseEvents(receipt, "BaseURI").map(e=>this.decodeBaseURIEvent(e));
    }
    decodeBaseURIEvent(event: Event): TrollNFTV2.BaseURIEvent{
        let result = event.data;
        return {
            baseURI: result.baseURI,
            _event: event
        };
    }
    parseCapEvent(receipt: TransactionReceipt): TrollNFTV2.CapEvent[]{
        return this.parseEvents(receipt, "Cap").map(e=>this.decodeCapEvent(e));
    }
    decodeCapEvent(event: Event): TrollNFTV2.CapEvent{
        let result = event.data;
        return {
            cap: new BigNumber(result.cap),
            _event: event
        };
    }
    parseCustomAttributeEvent(receipt: TransactionReceipt): TrollNFTV2.CustomAttributeEvent[]{
        return this.parseEvents(receipt, "CustomAttribute").map(e=>this.decodeCustomAttributeEvent(e));
    }
    decodeCustomAttributeEvent(event: Event): TrollNFTV2.CustomAttributeEvent{
        let result = event.data;
        return {
            tokenId: new BigNumber(result.tokenId),
            attribute: new BigNumber(result.attribute),
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): TrollNFTV2.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): TrollNFTV2.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseEquipNFTEvent(receipt: TransactionReceipt): TrollNFTV2.EquipNFTEvent[]{
        return this.parseEvents(receipt, "EquipNFT").map(e=>this.decodeEquipNFTEvent(e));
    }
    decodeEquipNFTEvent(event: Event): TrollNFTV2.EquipNFTEvent{
        let result = event.data;
        return {
            trollId: new BigNumber(result.trollId),
            nft: result.nft,
            nftId: new BigNumber(result.nftId),
            _event: event
        };
    }
    parseMinimumStakeEvent(receipt: TransactionReceipt): TrollNFTV2.MinimumStakeEvent[]{
        return this.parseEvents(receipt, "MinimumStake").map(e=>this.decodeMinimumStakeEvent(e));
    }
    decodeMinimumStakeEvent(event: Event): TrollNFTV2.MinimumStakeEvent{
        let result = event.data;
        return {
            minimumStake: new BigNumber(result.minimumStake),
            _event: event
        };
    }
    parseProtocolFeeEvent(receipt: TransactionReceipt): TrollNFTV2.ProtocolFeeEvent[]{
        return this.parseEvents(receipt, "ProtocolFee").map(e=>this.decodeProtocolFeeEvent(e));
    }
    decodeProtocolFeeEvent(event: Event): TrollNFTV2.ProtocolFeeEvent{
        let result = event.data;
        return {
            protocolFee: new BigNumber(result.protocolFee),
            protocolFeeTo: result.protocolFeeTo,
            _event: event
        };
    }
    parseStakeEvent(receipt: TransactionReceipt): TrollNFTV2.StakeEvent[]{
        return this.parseEvents(receipt, "Stake").map(e=>this.decodeStakeEvent(e));
    }
    decodeStakeEvent(event: Event): TrollNFTV2.StakeEvent{
        let result = event.data;
        return {
            who: result.who,
            tokenId: new BigNumber(result.tokenId),
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseStakesApprovalEvent(receipt: TransactionReceipt): TrollNFTV2.StakesApprovalEvent[]{
        return this.parseEvents(receipt, "StakesApproval").map(e=>this.decodeStakesApprovalEvent(e));
    }
    decodeStakesApprovalEvent(event: Event): TrollNFTV2.StakesApprovalEvent{
        let result = event.data;
        return {
            fromTokenId: new BigNumber(result.fromTokenId),
            spender: result.spender,
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseStakesTransferEvent(receipt: TransactionReceipt): TrollNFTV2.StakesTransferEvent[]{
        return this.parseEvents(receipt, "StakesTransfer").map(e=>this.decodeStakesTransferEvent(e));
    }
    decodeStakesTransferEvent(event: Event): TrollNFTV2.StakesTransferEvent{
        let result = event.data;
        return {
            fromTokenId: new BigNumber(result.fromTokenId),
            toTokenId: new BigNumber(result.toTokenId),
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): TrollNFTV2.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): TrollNFTV2.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): TrollNFTV2.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): TrollNFTV2.TransferEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            tokenId: new BigNumber(result.tokenId),
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): TrollNFTV2.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): TrollNFTV2.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUnequipNFTEvent(receipt: TransactionReceipt): TrollNFTV2.UnequipNFTEvent[]{
        return this.parseEvents(receipt, "UnequipNFT").map(e=>this.decodeUnequipNFTEvent(e));
    }
    decodeUnequipNFTEvent(event: Event): TrollNFTV2.UnequipNFTEvent{
        let result = event.data;
        return {
            trollId: new BigNumber(result.trollId),
            nft: result.nft,
            nftId: new BigNumber(result.nftId),
            _event: event
        };
    }
    parseUnstakeEvent(receipt: TransactionReceipt): TrollNFTV2.UnstakeEvent[]{
        return this.parseEvents(receipt, "Unstake").map(e=>this.decodeUnstakeEvent(e));
    }
    decodeUnstakeEvent(event: Event): TrollNFTV2.UnstakeEvent{
        let result = event.data;
        return {
            who: result.who,
            tokenId: new BigNumber(result.tokenId),
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    async _attributes(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.call('_attributes',[Utils.toString(param1)]);
        return new BigNumber(result);
    }
    async _customAttributes(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.call('_customAttributes',[Utils.toString(param1)]);
        return new BigNumber(result);
    }
    async _stakesTransferAllowances(params:{param1:number|BigNumber,param2:string}): Promise<BigNumber>{
        let result = await this.call('_stakesTransferAllowances',[Utils.toString(params.param1),params.param2]);
        return new BigNumber(result);
    }
    async addStakes_send(params:{tokenId:number|BigNumber,amount:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('addStakes',[Utils.toString(params.tokenId),Utils.toString(params.amount)]);
        return result;
    }
    async addStakes_call(params:{tokenId:number|BigNumber,amount:number|BigNumber}): Promise<void>{
        let result = await this.call('addStakes',[Utils.toString(params.tokenId),Utils.toString(params.amount)]);
        return;
    }
    addStakes: {
        (params:{tokenId:number|BigNumber,amount:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{tokenId:number|BigNumber,amount:number|BigNumber}) => Promise<void>;
    }
    async addValidNFTs_send(nfts:string[]): Promise<TransactionReceipt>{
        let result = await this.send('addValidNFTs',[nfts]);
        return result;
    }
    async addValidNFTs_call(nfts:string[]): Promise<void>{
        let result = await this.call('addValidNFTs',[nfts]);
        return;
    }
    addValidNFTs: {
        (nfts:string[]): Promise<TransactionReceipt>;
        call: (nfts:string[]) => Promise<void>;
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
    async approvedStaker(param1:string): Promise<boolean>{
        let result = await this.call('approvedStaker',[param1]);
        return result;
    }
    async balanceOf(owner:string): Promise<BigNumber>{
        let result = await this.call('balanceOf',[owner]);
        return new BigNumber(result);
    }
    async baseURI(): Promise<string>{
        let result = await this.call('baseURI');
        return result;
    }
    async batchApprove_send(stakers:string[]): Promise<TransactionReceipt>{
        let result = await this.send('batchApprove',[stakers]);
        return result;
    }
    async batchApprove_call(stakers:string[]): Promise<void>{
        let result = await this.call('batchApprove',[stakers]);
        return;
    }
    batchApprove: {
        (stakers:string[]): Promise<TransactionReceipt>;
        call: (stakers:string[]) => Promise<void>;
    }
    async cap(): Promise<BigNumber>{
        let result = await this.call('cap');
        return new BigNumber(result);
    }
    async counter(): Promise<BigNumber>{
        let result = await this.call('counter');
        return new BigNumber(result);
    }
    async creationDate(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.call('creationDate',[Utils.toString(param1)]);
        return new BigNumber(result);
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
    async destoryDate(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.call('destoryDate',[Utils.toString(param1)]);
        return new BigNumber(result);
    }
    async equipNFT_send(params:{trollId:number|BigNumber,nft:string,nftId:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('equipNFT',[Utils.toString(params.trollId),params.nft,Utils.toString(params.nftId)]);
        return result;
    }
    async equipNFT_call(params:{trollId:number|BigNumber,nft:string,nftId:number|BigNumber}): Promise<void>{
        let result = await this.call('equipNFT',[Utils.toString(params.trollId),params.nft,Utils.toString(params.nftId)]);
        return;
    }
    equipNFT: {
        (params:{trollId:number|BigNumber,nft:string,nftId:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{trollId:number|BigNumber,nft:string,nftId:number|BigNumber}) => Promise<void>;
    }
    async extraStakes(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.call('extraStakes',[Utils.toString(param1)]);
        return new BigNumber(result);
    }
    async getApproved(tokenId:number|BigNumber): Promise<string>{
        let result = await this.call('getApproved',[Utils.toString(tokenId)]);
        return result;
    }
    async getAttributes1(params:{tokenId:number|BigNumber,base:number|BigNumber,offset:number|BigNumber,digits:number|BigNumber}): Promise<BigNumber>{
        let result = await this.call('getAttributes1',[Utils.toString(params.tokenId),Utils.toString(params.base),Utils.toString(params.offset),Utils.toString(params.digits)]);
        return new BigNumber(result);
    }
    async getAttributes2(params:{tokenId:number|BigNumber,base:number|BigNumber,digits:(number|BigNumber)[]}): Promise<BigNumber[]>{
        let result = await this.call('getAttributes2',[Utils.toString(params.tokenId),Utils.toString(params.base),Utils.toString(params.digits)]);
        return result.map(e=>new BigNumber(e));
    }
    async isApprovedForAll(params:{owner:string,operator:string}): Promise<boolean>{
        let result = await this.call('isApprovedForAll',[params.owner,params.operator]);
        return result;
    }
    async isPermitted(param1:string): Promise<boolean>{
        let result = await this.call('isPermitted',[param1]);
        return result;
    }
    async isValidNFT(param1:string): Promise<boolean>{
        let result = await this.call('isValidNFT',[param1]);
        return result;
    }
    async lastStakeDate(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.call('lastStakeDate',[Utils.toString(param1)]);
        return new BigNumber(result);
    }
    async listValidNFTs(param1:number|BigNumber): Promise<string>{
        let result = await this.call('listValidNFTs',[Utils.toString(param1)]);
        return result;
    }
    async maximumValidNFTs(): Promise<BigNumber>{
        let result = await this.call('maximumValidNFTs');
        return new BigNumber(result);
    }
    async minimumStake(): Promise<BigNumber>{
        let result = await this.call('minimumStake');
        return new BigNumber(result);
    }
    async minted(param1:string): Promise<boolean>{
        let result = await this.call('minted',[param1]);
        return result;
    }
    async name(): Promise<string>{
        let result = await this.call('name');
        return result;
    }
    async newOwner(): Promise<string>{
        let result = await this.call('newOwner');
        return result;
    }
    async nftsEquipped(params:{param1:string,param2:number|BigNumber}): Promise<BigNumber>{
        let result = await this.call('nftsEquipped',[params.param1,Utils.toString(params.param2)]);
        return new BigNumber(result);
    }
    async owner(): Promise<string>{
        let result = await this.call('owner');
        return result;
    }
    async ownerOf(tokenId:number|BigNumber): Promise<string>{
        let result = await this.call('ownerOf',[Utils.toString(tokenId)]);
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
    async protocolFee(): Promise<BigNumber>{
        let result = await this.call('protocolFee');
        return new BigNumber(result);
    }
    async protocolFeeBalance(): Promise<BigNumber>{
        let result = await this.call('protocolFeeBalance');
        return new BigNumber(result);
    }
    async protocolFeeTo(): Promise<string>{
        let result = await this.call('protocolFeeTo');
        return result;
    }
    async requireApproval(): Promise<boolean>{
        let result = await this.call('requireApproval');
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
    async setApprovedStaker_send(params:{staker:string,allow:boolean}): Promise<TransactionReceipt>{
        let result = await this.send('setApprovedStaker',[params.staker,params.allow]);
        return result;
    }
    async setApprovedStaker_call(params:{staker:string,allow:boolean}): Promise<void>{
        let result = await this.call('setApprovedStaker',[params.staker,params.allow]);
        return;
    }
    setApprovedStaker: {
        (params:{staker:string,allow:boolean}): Promise<TransactionReceipt>;
        call: (params:{staker:string,allow:boolean}) => Promise<void>;
    }
    async setBaseURI_send(baseURI:string): Promise<TransactionReceipt>{
        let result = await this.send('setBaseURI',[baseURI]);
        return result;
    }
    async setBaseURI_call(baseURI:string): Promise<void>{
        let result = await this.call('setBaseURI',[baseURI]);
        return;
    }
    setBaseURI: {
        (baseURI:string): Promise<TransactionReceipt>;
        call: (baseURI:string) => Promise<void>;
    }
    async setCap_send(cap:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('setCap',[Utils.toString(cap)]);
        return result;
    }
    async setCap_call(cap:number|BigNumber): Promise<void>{
        let result = await this.call('setCap',[Utils.toString(cap)]);
        return;
    }
    setCap: {
        (cap:number|BigNumber): Promise<TransactionReceipt>;
        call: (cap:number|BigNumber) => Promise<void>;
    }
    async setCustomAttribute_send(params:{tokenId:number|BigNumber,attribute:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('setCustomAttribute',[Utils.toString(params.tokenId),Utils.toString(params.attribute)]);
        return result;
    }
    async setCustomAttribute_call(params:{tokenId:number|BigNumber,attribute:number|BigNumber}): Promise<void>{
        let result = await this.call('setCustomAttribute',[Utils.toString(params.tokenId),Utils.toString(params.attribute)]);
        return;
    }
    setCustomAttribute: {
        (params:{tokenId:number|BigNumber,attribute:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{tokenId:number|BigNumber,attribute:number|BigNumber}) => Promise<void>;
    }
    async setMinimumStake_send(minimumStake:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('setMinimumStake',[Utils.toString(minimumStake)]);
        return result;
    }
    async setMinimumStake_call(minimumStake:number|BigNumber): Promise<void>{
        let result = await this.call('setMinimumStake',[Utils.toString(minimumStake)]);
        return;
    }
    setMinimumStake: {
        (minimumStake:number|BigNumber): Promise<TransactionReceipt>;
        call: (minimumStake:number|BigNumber) => Promise<void>;
    }
    async setProtocolFee_send(params:{protocolFee:number|BigNumber,protocolFeeTo:string}): Promise<TransactionReceipt>{
        let result = await this.send('setProtocolFee',[Utils.toString(params.protocolFee),params.protocolFeeTo]);
        return result;
    }
    async setProtocolFee_call(params:{protocolFee:number|BigNumber,protocolFeeTo:string}): Promise<void>{
        let result = await this.call('setProtocolFee',[Utils.toString(params.protocolFee),params.protocolFeeTo]);
        return;
    }
    setProtocolFee: {
        (params:{protocolFee:number|BigNumber,protocolFeeTo:string}): Promise<TransactionReceipt>;
        call: (params:{protocolFee:number|BigNumber,protocolFeeTo:string}) => Promise<void>;
    }
    async stake_send(amount:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('stake',[Utils.toString(amount)]);
        return result;
    }
    async stake_call(amount:number|BigNumber): Promise<BigNumber>{
        let result = await this.call('stake',[Utils.toString(amount)]);
        return new BigNumber(result);
    }
    stake: {
        (amount:number|BigNumber): Promise<TransactionReceipt>;
        call: (amount:number|BigNumber) => Promise<BigNumber>;
    }
    async stakeToken(): Promise<string>{
        let result = await this.call('stakeToken');
        return result;
    }
    async stakingBalance(param1:number|BigNumber): Promise<BigNumber>{
        let result = await this.call('stakingBalance',[Utils.toString(param1)]);
        return new BigNumber(result);
    }
    async supportsInterface(interfaceId:string): Promise<boolean>{
        let result = await this.call('supportsInterface',[interfaceId]);
        return result;
    }
    async symbol(): Promise<string>{
        let result = await this.call('symbol');
        return result;
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
    async tokenByIndex(index:number|BigNumber): Promise<BigNumber>{
        let result = await this.call('tokenByIndex',[Utils.toString(index)]);
        return new BigNumber(result);
    }
    async tokenOfOwnerByIndex(params:{owner:string,index:number|BigNumber}): Promise<BigNumber>{
        let result = await this.call('tokenOfOwnerByIndex',[params.owner,Utils.toString(params.index)]);
        return new BigNumber(result);
    }
    async tokenURI(tokenId:number|BigNumber): Promise<string>{
        let result = await this.call('tokenURI',[Utils.toString(tokenId)]);
        return result;
    }
    async totalSupply(): Promise<BigNumber>{
        let result = await this.call('totalSupply');
        return new BigNumber(result);
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
    async transferProtocolFee_send(): Promise<TransactionReceipt>{
        let result = await this.send('transferProtocolFee');
        return result;
    }
    async transferProtocolFee_call(): Promise<void>{
        let result = await this.call('transferProtocolFee');
        return;
    }
    transferProtocolFee: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    async trollOwnedNFTs(params:{param1:number|BigNumber,param2:string}): Promise<BigNumber>{
        let result = await this.call('trollOwnedNFTs',[Utils.toString(params.param1),params.param2]);
        return new BigNumber(result);
    }
    async unequipNFT_send(params:{trollId:number|BigNumber,nft:string,nftId:number|BigNumber}): Promise<TransactionReceipt>{
        let result = await this.send('unequipNFT',[Utils.toString(params.trollId),params.nft,Utils.toString(params.nftId)]);
        return result;
    }
    async unequipNFT_call(params:{trollId:number|BigNumber,nft:string,nftId:number|BigNumber}): Promise<void>{
        let result = await this.call('unequipNFT',[Utils.toString(params.trollId),params.nft,Utils.toString(params.nftId)]);
        return;
    }
    unequipNFT: {
        (params:{trollId:number|BigNumber,nft:string,nftId:number|BigNumber}): Promise<TransactionReceipt>;
        call: (params:{trollId:number|BigNumber,nft:string,nftId:number|BigNumber}) => Promise<void>;
    }
    async unstake_send(tokenId:number|BigNumber): Promise<TransactionReceipt>{
        let result = await this.send('unstake',[Utils.toString(tokenId)]);
        return result;
    }
    async unstake_call(tokenId:number|BigNumber): Promise<void>{
        let result = await this.call('unstake',[Utils.toString(tokenId)]);
        return;
    }
    unstake: {
        (tokenId:number|BigNumber): Promise<TransactionReceipt>;
        call: (tokenId:number|BigNumber) => Promise<void>;
    }
    async validNFTsLength(): Promise<BigNumber>{
        let result = await this.call('validNFTsLength');
        return new BigNumber(result);
    }
    private assign(){
        this.addStakes = Object.assign(this.addStakes_send, {call:this.addStakes_call});
        this.addValidNFTs = Object.assign(this.addValidNFTs_send, {call:this.addValidNFTs_call});
        this.approve = Object.assign(this.approve_send, {call:this.approve_call});
        this.batchApprove = Object.assign(this.batchApprove_send, {call:this.batchApprove_call});
        this.deny = Object.assign(this.deny_send, {call:this.deny_call});
        this.equipNFT = Object.assign(this.equipNFT_send, {call:this.equipNFT_call});
        this.permit = Object.assign(this.permit_send, {call:this.permit_call});
        this.safeTransferFrom = Object.assign(this.safeTransferFrom_send, {call:this.safeTransferFrom_call});
        this.safeTransferFrom_1 = Object.assign(this.safeTransferFrom_1_send, {call:this.safeTransferFrom_1_call});
        this.setApprovalForAll = Object.assign(this.setApprovalForAll_send, {call:this.setApprovalForAll_call});
        this.setApprovedStaker = Object.assign(this.setApprovedStaker_send, {call:this.setApprovedStaker_call});
        this.setBaseURI = Object.assign(this.setBaseURI_send, {call:this.setBaseURI_call});
        this.setCap = Object.assign(this.setCap_send, {call:this.setCap_call});
        this.setCustomAttribute = Object.assign(this.setCustomAttribute_send, {call:this.setCustomAttribute_call});
        this.setMinimumStake = Object.assign(this.setMinimumStake_send, {call:this.setMinimumStake_call});
        this.setProtocolFee = Object.assign(this.setProtocolFee_send, {call:this.setProtocolFee_call});
        this.stake = Object.assign(this.stake_send, {call:this.stake_call});
        this.takeOwnership = Object.assign(this.takeOwnership_send, {call:this.takeOwnership_call});
        this.transferFrom = Object.assign(this.transferFrom_send, {call:this.transferFrom_call});
        this.transferOwnership = Object.assign(this.transferOwnership_send, {call:this.transferOwnership_call});
        this.transferProtocolFee = Object.assign(this.transferProtocolFee_send, {call:this.transferProtocolFee_call});
        this.unequipNFT = Object.assign(this.unequipNFT_send, {call:this.unequipNFT_call});
        this.unstake = Object.assign(this.unstake_send, {call:this.unstake_call});
    }
}
export module TrollNFTV2{
    export interface AddStakesEvent {tokenId:BigNumber,amountAdded:BigNumber,newAmount:BigNumber,_event:Event}
    export interface AddValidNFTEvent {nft:string,_event:Event}
    export interface ApprovalEvent {owner:string,approved:string,tokenId:BigNumber,_event:Event}
    export interface ApprovalForAllEvent {owner:string,operator:string,approved:boolean,_event:Event}
    export interface ApprovedStakerEvent {staker:string,allow:boolean,_event:Event}
    export interface AttributeEvent {tokenId:BigNumber,attribute:BigNumber,_event:Event}
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface BaseURIEvent {baseURI:string,_event:Event}
    export interface CapEvent {cap:BigNumber,_event:Event}
    export interface CustomAttributeEvent {tokenId:BigNumber,attribute:BigNumber,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface EquipNFTEvent {trollId:BigNumber,nft:string,nftId:BigNumber,_event:Event}
    export interface MinimumStakeEvent {minimumStake:BigNumber,_event:Event}
    export interface ProtocolFeeEvent {protocolFee:BigNumber,protocolFeeTo:string,_event:Event}
    export interface StakeEvent {who:string,tokenId:BigNumber,amount:BigNumber,_event:Event}
    export interface StakesApprovalEvent {fromTokenId:BigNumber,spender:string,amount:BigNumber,_event:Event}
    export interface StakesTransferEvent {fromTokenId:BigNumber,toTokenId:BigNumber,amount:BigNumber,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferEvent {from:string,to:string,tokenId:BigNumber,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
    export interface UnequipNFTEvent {trollId:BigNumber,nft:string,nftId:BigNumber,_event:Event}
    export interface UnstakeEvent {who:string,tokenId:BigNumber,amount:BigNumber,_event:Event}
}
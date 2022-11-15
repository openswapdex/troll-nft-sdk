import {IWallet, Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-contract";
import Bin from "./TrollNFT_VRFV2.json";

export interface IDeployParams {name:string;symbol:string;baseURI:string;cap:number|BigNumber;stakeToken:string;requireApproval:boolean;minimumStake:number|BigNumber;protocolFee:number|BigNumber;protocolFeeTo:string;nftInfo:{listValidNFTs:string[],maximumValidNFTs:number|BigNumber};vrfInfo:{vrfAddresses:string[],vrfParams:string[]}}
export interface I_stakesTransferAllowancesParams {param1:number|BigNumber;param2:string}
export interface IAddStakesParams {tokenId:number|BigNumber;amount:number|BigNumber}
export interface IApproveParams {to:string;tokenId:number|BigNumber}
export interface IEquipNFTParams {trollId:number|BigNumber;nft:string;nftId:number|BigNumber}
export interface IGetAttributes1Params {tokenId:number|BigNumber;base:number|BigNumber;offset:number|BigNumber;digits:number|BigNumber}
export interface IGetAttributes2Params {tokenId:number|BigNumber;base:number|BigNumber;digits:(number|BigNumber)[]}
export interface IIsApprovedForAllParams {owner:string;operator:string}
export interface INftsEquippedParams {param1:string;param2:number|BigNumber}
export interface IRawFulfillRandomnessParams {requestId:string;randomness:number|BigNumber}
export interface ISafeTransferFromParams {from:string;to:string;tokenId:number|BigNumber}
export interface ISafeTransferFrom_1Params {from:string;to:string;tokenId:number|BigNumber;data:string}
export interface ISetApprovalForAllParams {operator:string;approved:boolean}
export interface ISetApprovedStakerParams {staker:string;allow:boolean}
export interface ISetCustomAttributeParams {tokenId:number|BigNumber;attribute:number|BigNumber}
export interface ISetProtocolFeeParams {protocolFee:number|BigNumber;protocolFeeTo:string}
export interface ISetVrfParamsParams {vrfKeyHash:string;vrfFee:number|BigNumber}
export interface ITokenOfOwnerByIndexParams {owner:string;index:number|BigNumber}
export interface ITransferFromParams {from:string;to:string;tokenId:number|BigNumber}
export interface ITrollOwnedNFTsParams {param1:number|BigNumber;param2:string}
export interface IUnequipNFTParams {trollId:number|BigNumber;nft:string;nftId:number|BigNumber}
export class TrollNFT_VRFV2 extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.name,params.symbol,params.baseURI,this.wallet.utils.toString(params.cap),params.stakeToken,params.requireApproval,this.wallet.utils.toString(params.minimumStake),this.wallet.utils.toString(params.protocolFee),params.protocolFeeTo,[params.nftInfo.listValidNFTs,this.wallet.utils.toString(params.nftInfo.maximumValidNFTs)],[params.vrfInfo.vrfAddresses,this.wallet.utils.stringToBytes32(params.vrfInfo.vrfParams)]]);
    }
    parseAddStakesEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.AddStakesEvent[]{
        return this.parseEvents(receipt, "AddStakes").map(e=>this.decodeAddStakesEvent(e));
    }
    decodeAddStakesEvent(event: Event): TrollNFT_VRFV2.AddStakesEvent{
        let result = event.data;
        return {
            tokenId: new BigNumber(result.tokenId),
            amountAdded: new BigNumber(result.amountAdded),
            newAmount: new BigNumber(result.newAmount),
            _event: event
        };
    }
    parseAddValidNFTEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.AddValidNFTEvent[]{
        return this.parseEvents(receipt, "AddValidNFT").map(e=>this.decodeAddValidNFTEvent(e));
    }
    decodeAddValidNFTEvent(event: Event): TrollNFT_VRFV2.AddValidNFTEvent{
        let result = event.data;
        return {
            nft: result.nft,
            _event: event
        };
    }
    parseApprovalEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): TrollNFT_VRFV2.ApprovalEvent{
        let result = event.data;
        return {
            owner: result.owner,
            approved: result.approved,
            tokenId: new BigNumber(result.tokenId),
            _event: event
        };
    }
    parseApprovalForAllEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.ApprovalForAllEvent[]{
        return this.parseEvents(receipt, "ApprovalForAll").map(e=>this.decodeApprovalForAllEvent(e));
    }
    decodeApprovalForAllEvent(event: Event): TrollNFT_VRFV2.ApprovalForAllEvent{
        let result = event.data;
        return {
            owner: result.owner,
            operator: result.operator,
            approved: result.approved,
            _event: event
        };
    }
    parseApprovedStakerEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.ApprovedStakerEvent[]{
        return this.parseEvents(receipt, "ApprovedStaker").map(e=>this.decodeApprovedStakerEvent(e));
    }
    decodeApprovedStakerEvent(event: Event): TrollNFT_VRFV2.ApprovedStakerEvent{
        let result = event.data;
        return {
            staker: result.staker,
            allow: result.allow,
            _event: event
        };
    }
    parseAttributeEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.AttributeEvent[]{
        return this.parseEvents(receipt, "Attribute").map(e=>this.decodeAttributeEvent(e));
    }
    decodeAttributeEvent(event: Event): TrollNFT_VRFV2.AttributeEvent{
        let result = event.data;
        return {
            tokenId: new BigNumber(result.tokenId),
            attribute: new BigNumber(result.attribute),
            _event: event
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): TrollNFT_VRFV2.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseBaseURIEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.BaseURIEvent[]{
        return this.parseEvents(receipt, "BaseURI").map(e=>this.decodeBaseURIEvent(e));
    }
    decodeBaseURIEvent(event: Event): TrollNFT_VRFV2.BaseURIEvent{
        let result = event.data;
        return {
            baseURI: result.baseURI,
            _event: event
        };
    }
    parseCapEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.CapEvent[]{
        return this.parseEvents(receipt, "Cap").map(e=>this.decodeCapEvent(e));
    }
    decodeCapEvent(event: Event): TrollNFT_VRFV2.CapEvent{
        let result = event.data;
        return {
            cap: new BigNumber(result.cap),
            _event: event
        };
    }
    parseCustomAttributeEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.CustomAttributeEvent[]{
        return this.parseEvents(receipt, "CustomAttribute").map(e=>this.decodeCustomAttributeEvent(e));
    }
    decodeCustomAttributeEvent(event: Event): TrollNFT_VRFV2.CustomAttributeEvent{
        let result = event.data;
        return {
            tokenId: new BigNumber(result.tokenId),
            attribute: new BigNumber(result.attribute),
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): TrollNFT_VRFV2.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseEquipNFTEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.EquipNFTEvent[]{
        return this.parseEvents(receipt, "EquipNFT").map(e=>this.decodeEquipNFTEvent(e));
    }
    decodeEquipNFTEvent(event: Event): TrollNFT_VRFV2.EquipNFTEvent{
        let result = event.data;
        return {
            trollId: new BigNumber(result.trollId),
            nft: result.nft,
            nftId: new BigNumber(result.nftId),
            _event: event
        };
    }
    parseMinimumStakeEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.MinimumStakeEvent[]{
        return this.parseEvents(receipt, "MinimumStake").map(e=>this.decodeMinimumStakeEvent(e));
    }
    decodeMinimumStakeEvent(event: Event): TrollNFT_VRFV2.MinimumStakeEvent{
        let result = event.data;
        return {
            minimumStake: new BigNumber(result.minimumStake),
            _event: event
        };
    }
    parseProtocolFeeEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.ProtocolFeeEvent[]{
        return this.parseEvents(receipt, "ProtocolFee").map(e=>this.decodeProtocolFeeEvent(e));
    }
    decodeProtocolFeeEvent(event: Event): TrollNFT_VRFV2.ProtocolFeeEvent{
        let result = event.data;
        return {
            protocolFee: new BigNumber(result.protocolFee),
            protocolFeeTo: result.protocolFeeTo,
            _event: event
        };
    }
    parseStakeEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.StakeEvent[]{
        return this.parseEvents(receipt, "Stake").map(e=>this.decodeStakeEvent(e));
    }
    decodeStakeEvent(event: Event): TrollNFT_VRFV2.StakeEvent{
        let result = event.data;
        return {
            who: result.who,
            tokenId: new BigNumber(result.tokenId),
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseStakesApprovalEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.StakesApprovalEvent[]{
        return this.parseEvents(receipt, "StakesApproval").map(e=>this.decodeStakesApprovalEvent(e));
    }
    decodeStakesApprovalEvent(event: Event): TrollNFT_VRFV2.StakesApprovalEvent{
        let result = event.data;
        return {
            fromTokenId: new BigNumber(result.fromTokenId),
            spender: result.spender,
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseStakesTransferEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.StakesTransferEvent[]{
        return this.parseEvents(receipt, "StakesTransfer").map(e=>this.decodeStakesTransferEvent(e));
    }
    decodeStakesTransferEvent(event: Event): TrollNFT_VRFV2.StakesTransferEvent{
        let result = event.data;
        return {
            fromTokenId: new BigNumber(result.fromTokenId),
            toTokenId: new BigNumber(result.toTokenId),
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): TrollNFT_VRFV2.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): TrollNFT_VRFV2.TransferEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            tokenId: new BigNumber(result.tokenId),
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): TrollNFT_VRFV2.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUnequipNFTEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.UnequipNFTEvent[]{
        return this.parseEvents(receipt, "UnequipNFT").map(e=>this.decodeUnequipNFTEvent(e));
    }
    decodeUnequipNFTEvent(event: Event): TrollNFT_VRFV2.UnequipNFTEvent{
        let result = event.data;
        return {
            trollId: new BigNumber(result.trollId),
            nft: result.nft,
            nftId: new BigNumber(result.nftId),
            _event: event
        };
    }
    parseUnstakeEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.UnstakeEvent[]{
        return this.parseEvents(receipt, "Unstake").map(e=>this.decodeUnstakeEvent(e));
    }
    decodeUnstakeEvent(event: Event): TrollNFT_VRFV2.UnstakeEvent{
        let result = event.data;
        return {
            who: result.who,
            tokenId: new BigNumber(result.tokenId),
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    _attributes: {
        (param1:number|BigNumber): Promise<BigNumber>;
    }
    _customAttributes: {
        (param1:number|BigNumber): Promise<BigNumber>;
    }
    _stakesTransferAllowances: {
        (params: I_stakesTransferAllowancesParams): Promise<BigNumber>;
    }
    addStakes: {
        (params: IAddStakesParams): Promise<TransactionReceipt>;
        call: (params: IAddStakesParams) => Promise<void>;
    }
    addValidNFTs: {
        (nfts:string[]): Promise<TransactionReceipt>;
        call: (nfts:string[]) => Promise<void>;
    }
    approve: {
        (params: IApproveParams): Promise<TransactionReceipt>;
        call: (params: IApproveParams) => Promise<void>;
    }
    approvedStaker: {
        (param1:string): Promise<boolean>;
    }
    balanceOf: {
        (owner:string): Promise<BigNumber>;
    }
    baseURI: {
        (): Promise<string>;
    }
    batchApprove: {
        (stakers:string[]): Promise<TransactionReceipt>;
        call: (stakers:string[]) => Promise<void>;
    }
    cap: {
        (): Promise<BigNumber>;
    }
    counter: {
        (): Promise<BigNumber>;
    }
    creationDate: {
        (param1:number|BigNumber): Promise<BigNumber>;
    }
    deny: {
        (user:string): Promise<TransactionReceipt>;
        call: (user:string) => Promise<void>;
    }
    destoryDate: {
        (param1:number|BigNumber): Promise<BigNumber>;
    }
    equipNFT: {
        (params: IEquipNFTParams): Promise<TransactionReceipt>;
        call: (params: IEquipNFTParams) => Promise<void>;
    }
    extraStakes: {
        (param1:number|BigNumber): Promise<BigNumber>;
    }
    getApproved: {
        (tokenId:number|BigNumber): Promise<string>;
    }
    getAttributes1: {
        (params: IGetAttributes1Params): Promise<BigNumber>;
    }
    getAttributes2: {
        (params: IGetAttributes2Params): Promise<BigNumber[]>;
    }
    isApprovedForAll: {
        (params: IIsApprovedForAllParams): Promise<boolean>;
    }
    isPermitted: {
        (param1:string): Promise<boolean>;
    }
    isValidNFT: {
        (param1:string): Promise<boolean>;
    }
    lastStakeDate: {
        (param1:number|BigNumber): Promise<BigNumber>;
    }
    listValidNFTs: {
        (param1:number|BigNumber): Promise<string>;
    }
    maximumValidNFTs: {
        (): Promise<BigNumber>;
    }
    minimumStake: {
        (): Promise<BigNumber>;
    }
    minted: {
        (param1:string): Promise<boolean>;
    }
    name: {
        (): Promise<string>;
    }
    newOwner: {
        (): Promise<string>;
    }
    nftsEquipped: {
        (params: INftsEquippedParams): Promise<BigNumber>;
    }
    owner: {
        (): Promise<string>;
    }
    ownerOf: {
        (tokenId:number|BigNumber): Promise<string>;
    }
    permit: {
        (user:string): Promise<TransactionReceipt>;
        call: (user:string) => Promise<void>;
    }
    protocolFee: {
        (): Promise<BigNumber>;
    }
    protocolFeeBalance: {
        (): Promise<BigNumber>;
    }
    protocolFeeTo: {
        (): Promise<string>;
    }
    rawFulfillRandomness: {
        (params: IRawFulfillRandomnessParams): Promise<TransactionReceipt>;
        call: (params: IRawFulfillRandomnessParams) => Promise<void>;
    }
    requireApproval: {
        (): Promise<boolean>;
    }
    safeTransferFrom: {
        (params: ISafeTransferFromParams): Promise<TransactionReceipt>;
        call: (params: ISafeTransferFromParams) => Promise<void>;
    }
    safeTransferFrom_1: {
        (params: ISafeTransferFrom_1Params): Promise<TransactionReceipt>;
        call: (params: ISafeTransferFrom_1Params) => Promise<void>;
    }
    setApprovalForAll: {
        (params: ISetApprovalForAllParams): Promise<TransactionReceipt>;
        call: (params: ISetApprovalForAllParams) => Promise<void>;
    }
    setApprovedStaker: {
        (params: ISetApprovedStakerParams): Promise<TransactionReceipt>;
        call: (params: ISetApprovedStakerParams) => Promise<void>;
    }
    setBaseURI: {
        (baseURI:string): Promise<TransactionReceipt>;
        call: (baseURI:string) => Promise<void>;
    }
    setCap: {
        (cap:number|BigNumber): Promise<TransactionReceipt>;
        call: (cap:number|BigNumber) => Promise<void>;
    }
    setCustomAttribute: {
        (params: ISetCustomAttributeParams): Promise<TransactionReceipt>;
        call: (params: ISetCustomAttributeParams) => Promise<void>;
    }
    setMinimumStake: {
        (minimumStake:number|BigNumber): Promise<TransactionReceipt>;
        call: (minimumStake:number|BigNumber) => Promise<void>;
    }
    setProtocolFee: {
        (params: ISetProtocolFeeParams): Promise<TransactionReceipt>;
        call: (params: ISetProtocolFeeParams) => Promise<void>;
    }
    setVrfParams: {
        (params: ISetVrfParamsParams): Promise<TransactionReceipt>;
        call: (params: ISetVrfParamsParams) => Promise<void>;
    }
    stake: {
        (amount:number|BigNumber): Promise<TransactionReceipt>;
        call: (amount:number|BigNumber) => Promise<BigNumber>;
    }
    stakeToken: {
        (): Promise<string>;
    }
    stakingBalance: {
        (param1:number|BigNumber): Promise<BigNumber>;
    }
    supportsInterface: {
        (interfaceId:string): Promise<boolean>;
    }
    symbol: {
        (): Promise<string>;
    }
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    tokenByIndex: {
        (index:number|BigNumber): Promise<BigNumber>;
    }
    tokenOfOwnerByIndex: {
        (params: ITokenOfOwnerByIndexParams): Promise<BigNumber>;
    }
    tokenURI: {
        (tokenId:number|BigNumber): Promise<string>;
    }
    totalSupply: {
        (): Promise<BigNumber>;
    }
    transferFrom: {
        (params: ITransferFromParams): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams) => Promise<void>;
    }
    transferOwnership: {
        (newOwner:string): Promise<TransactionReceipt>;
        call: (newOwner:string) => Promise<void>;
    }
    transferProtocolFee: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    trollOwnedNFTs: {
        (params: ITrollOwnedNFTsParams): Promise<BigNumber>;
    }
    unequipNFT: {
        (params: IUnequipNFTParams): Promise<TransactionReceipt>;
        call: (params: IUnequipNFTParams) => Promise<void>;
    }
    unstake: {
        (tokenId:number|BigNumber): Promise<TransactionReceipt>;
        call: (tokenId:number|BigNumber) => Promise<void>;
    }
    validNFTsLength: {
        (): Promise<BigNumber>;
    }
    withdrawLink: {
        (amount:number|BigNumber): Promise<TransactionReceipt>;
        call: (amount:number|BigNumber) => Promise<void>;
    }
    private assign(){
        let _attributes_call = async (param1:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('_attributes',[this.wallet.utils.toString(param1)]);
            return new BigNumber(result);
        }
        this._attributes = _attributes_call
        let _customAttributes_call = async (param1:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('_customAttributes',[this.wallet.utils.toString(param1)]);
            return new BigNumber(result);
        }
        this._customAttributes = _customAttributes_call
        let _stakesTransferAllowancesParams = (params: I_stakesTransferAllowancesParams) => [this.wallet.utils.toString(params.param1),params.param2];
        let _stakesTransferAllowances_call = async (params: I_stakesTransferAllowancesParams): Promise<BigNumber> => {
            let result = await this.call('_stakesTransferAllowances',_stakesTransferAllowancesParams(params));
            return new BigNumber(result);
        }
        this._stakesTransferAllowances = _stakesTransferAllowances_call
        let approvedStaker_call = async (param1:string): Promise<boolean> => {
            let result = await this.call('approvedStaker',[param1]);
            return result;
        }
        this.approvedStaker = approvedStaker_call
        let balanceOf_call = async (owner:string): Promise<BigNumber> => {
            let result = await this.call('balanceOf',[owner]);
            return new BigNumber(result);
        }
        this.balanceOf = balanceOf_call
        let baseURI_call = async (): Promise<string> => {
            let result = await this.call('baseURI');
            return result;
        }
        this.baseURI = baseURI_call
        let cap_call = async (): Promise<BigNumber> => {
            let result = await this.call('cap');
            return new BigNumber(result);
        }
        this.cap = cap_call
        let counter_call = async (): Promise<BigNumber> => {
            let result = await this.call('counter');
            return new BigNumber(result);
        }
        this.counter = counter_call
        let creationDate_call = async (param1:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('creationDate',[this.wallet.utils.toString(param1)]);
            return new BigNumber(result);
        }
        this.creationDate = creationDate_call
        let destoryDate_call = async (param1:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('destoryDate',[this.wallet.utils.toString(param1)]);
            return new BigNumber(result);
        }
        this.destoryDate = destoryDate_call
        let extraStakes_call = async (param1:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('extraStakes',[this.wallet.utils.toString(param1)]);
            return new BigNumber(result);
        }
        this.extraStakes = extraStakes_call
        let getApproved_call = async (tokenId:number|BigNumber): Promise<string> => {
            let result = await this.call('getApproved',[this.wallet.utils.toString(tokenId)]);
            return result;
        }
        this.getApproved = getApproved_call
        let getAttributes1Params = (params: IGetAttributes1Params) => [this.wallet.utils.toString(params.tokenId),this.wallet.utils.toString(params.base),this.wallet.utils.toString(params.offset),this.wallet.utils.toString(params.digits)];
        let getAttributes1_call = async (params: IGetAttributes1Params): Promise<BigNumber> => {
            let result = await this.call('getAttributes1',getAttributes1Params(params));
            return new BigNumber(result);
        }
        this.getAttributes1 = getAttributes1_call
        let getAttributes2Params = (params: IGetAttributes2Params) => [this.wallet.utils.toString(params.tokenId),this.wallet.utils.toString(params.base),this.wallet.utils.toString(params.digits)];
        let getAttributes2_call = async (params: IGetAttributes2Params): Promise<BigNumber[]> => {
            let result = await this.call('getAttributes2',getAttributes2Params(params));
            return result.map(e=>new BigNumber(e));
        }
        this.getAttributes2 = getAttributes2_call
        let isApprovedForAllParams = (params: IIsApprovedForAllParams) => [params.owner,params.operator];
        let isApprovedForAll_call = async (params: IIsApprovedForAllParams): Promise<boolean> => {
            let result = await this.call('isApprovedForAll',isApprovedForAllParams(params));
            return result;
        }
        this.isApprovedForAll = isApprovedForAll_call
        let isPermitted_call = async (param1:string): Promise<boolean> => {
            let result = await this.call('isPermitted',[param1]);
            return result;
        }
        this.isPermitted = isPermitted_call
        let isValidNFT_call = async (param1:string): Promise<boolean> => {
            let result = await this.call('isValidNFT',[param1]);
            return result;
        }
        this.isValidNFT = isValidNFT_call
        let lastStakeDate_call = async (param1:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('lastStakeDate',[this.wallet.utils.toString(param1)]);
            return new BigNumber(result);
        }
        this.lastStakeDate = lastStakeDate_call
        let listValidNFTs_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('listValidNFTs',[this.wallet.utils.toString(param1)]);
            return result;
        }
        this.listValidNFTs = listValidNFTs_call
        let maximumValidNFTs_call = async (): Promise<BigNumber> => {
            let result = await this.call('maximumValidNFTs');
            return new BigNumber(result);
        }
        this.maximumValidNFTs = maximumValidNFTs_call
        let minimumStake_call = async (): Promise<BigNumber> => {
            let result = await this.call('minimumStake');
            return new BigNumber(result);
        }
        this.minimumStake = minimumStake_call
        let minted_call = async (param1:string): Promise<boolean> => {
            let result = await this.call('minted',[param1]);
            return result;
        }
        this.minted = minted_call
        let name_call = async (): Promise<string> => {
            let result = await this.call('name');
            return result;
        }
        this.name = name_call
        let newOwner_call = async (): Promise<string> => {
            let result = await this.call('newOwner');
            return result;
        }
        this.newOwner = newOwner_call
        let nftsEquippedParams = (params: INftsEquippedParams) => [params.param1,this.wallet.utils.toString(params.param2)];
        let nftsEquipped_call = async (params: INftsEquippedParams): Promise<BigNumber> => {
            let result = await this.call('nftsEquipped',nftsEquippedParams(params));
            return new BigNumber(result);
        }
        this.nftsEquipped = nftsEquipped_call
        let owner_call = async (): Promise<string> => {
            let result = await this.call('owner');
            return result;
        }
        this.owner = owner_call
        let ownerOf_call = async (tokenId:number|BigNumber): Promise<string> => {
            let result = await this.call('ownerOf',[this.wallet.utils.toString(tokenId)]);
            return result;
        }
        this.ownerOf = ownerOf_call
        let protocolFee_call = async (): Promise<BigNumber> => {
            let result = await this.call('protocolFee');
            return new BigNumber(result);
        }
        this.protocolFee = protocolFee_call
        let protocolFeeBalance_call = async (): Promise<BigNumber> => {
            let result = await this.call('protocolFeeBalance');
            return new BigNumber(result);
        }
        this.protocolFeeBalance = protocolFeeBalance_call
        let protocolFeeTo_call = async (): Promise<string> => {
            let result = await this.call('protocolFeeTo');
            return result;
        }
        this.protocolFeeTo = protocolFeeTo_call
        let requireApproval_call = async (): Promise<boolean> => {
            let result = await this.call('requireApproval');
            return result;
        }
        this.requireApproval = requireApproval_call
        let stakeToken_call = async (): Promise<string> => {
            let result = await this.call('stakeToken');
            return result;
        }
        this.stakeToken = stakeToken_call
        let stakingBalance_call = async (param1:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('stakingBalance',[this.wallet.utils.toString(param1)]);
            return new BigNumber(result);
        }
        this.stakingBalance = stakingBalance_call
        let supportsInterface_call = async (interfaceId:string): Promise<boolean> => {
            let result = await this.call('supportsInterface',[interfaceId]);
            return result;
        }
        this.supportsInterface = supportsInterface_call
        let symbol_call = async (): Promise<string> => {
            let result = await this.call('symbol');
            return result;
        }
        this.symbol = symbol_call
        let tokenByIndex_call = async (index:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('tokenByIndex',[this.wallet.utils.toString(index)]);
            return new BigNumber(result);
        }
        this.tokenByIndex = tokenByIndex_call
        let tokenOfOwnerByIndexParams = (params: ITokenOfOwnerByIndexParams) => [params.owner,this.wallet.utils.toString(params.index)];
        let tokenOfOwnerByIndex_call = async (params: ITokenOfOwnerByIndexParams): Promise<BigNumber> => {
            let result = await this.call('tokenOfOwnerByIndex',tokenOfOwnerByIndexParams(params));
            return new BigNumber(result);
        }
        this.tokenOfOwnerByIndex = tokenOfOwnerByIndex_call
        let tokenURI_call = async (tokenId:number|BigNumber): Promise<string> => {
            let result = await this.call('tokenURI',[this.wallet.utils.toString(tokenId)]);
            return result;
        }
        this.tokenURI = tokenURI_call
        let totalSupply_call = async (): Promise<BigNumber> => {
            let result = await this.call('totalSupply');
            return new BigNumber(result);
        }
        this.totalSupply = totalSupply_call
        let trollOwnedNFTsParams = (params: ITrollOwnedNFTsParams) => [this.wallet.utils.toString(params.param1),params.param2];
        let trollOwnedNFTs_call = async (params: ITrollOwnedNFTsParams): Promise<BigNumber> => {
            let result = await this.call('trollOwnedNFTs',trollOwnedNFTsParams(params));
            return new BigNumber(result);
        }
        this.trollOwnedNFTs = trollOwnedNFTs_call
        let validNFTsLength_call = async (): Promise<BigNumber> => {
            let result = await this.call('validNFTsLength');
            return new BigNumber(result);
        }
        this.validNFTsLength = validNFTsLength_call
        let addStakesParams = (params: IAddStakesParams) => [this.wallet.utils.toString(params.tokenId),this.wallet.utils.toString(params.amount)];
        let addStakes_send = async (params: IAddStakesParams): Promise<TransactionReceipt> => {
            let result = await this.send('addStakes',addStakesParams(params));
            return result;
        }
        let addStakes_call = async (params: IAddStakesParams): Promise<void> => {
            let result = await this.call('addStakes',addStakesParams(params));
            return;
        }
        this.addStakes = Object.assign(addStakes_send, {
            call:addStakes_call
        });
        let addValidNFTs_send = async (nfts:string[]): Promise<TransactionReceipt> => {
            let result = await this.send('addValidNFTs',[nfts]);
            return result;
        }
        let addValidNFTs_call = async (nfts:string[]): Promise<void> => {
            let result = await this.call('addValidNFTs',[nfts]);
            return;
        }
        this.addValidNFTs = Object.assign(addValidNFTs_send, {
            call:addValidNFTs_call
        });
        let approveParams = (params: IApproveParams) => [params.to,this.wallet.utils.toString(params.tokenId)];
        let approve_send = async (params: IApproveParams): Promise<TransactionReceipt> => {
            let result = await this.send('approve',approveParams(params));
            return result;
        }
        let approve_call = async (params: IApproveParams): Promise<void> => {
            let result = await this.call('approve',approveParams(params));
            return;
        }
        this.approve = Object.assign(approve_send, {
            call:approve_call
        });
        let batchApprove_send = async (stakers:string[]): Promise<TransactionReceipt> => {
            let result = await this.send('batchApprove',[stakers]);
            return result;
        }
        let batchApprove_call = async (stakers:string[]): Promise<void> => {
            let result = await this.call('batchApprove',[stakers]);
            return;
        }
        this.batchApprove = Object.assign(batchApprove_send, {
            call:batchApprove_call
        });
        let deny_send = async (user:string): Promise<TransactionReceipt> => {
            let result = await this.send('deny',[user]);
            return result;
        }
        let deny_call = async (user:string): Promise<void> => {
            let result = await this.call('deny',[user]);
            return;
        }
        this.deny = Object.assign(deny_send, {
            call:deny_call
        });
        let equipNFTParams = (params: IEquipNFTParams) => [this.wallet.utils.toString(params.trollId),params.nft,this.wallet.utils.toString(params.nftId)];
        let equipNFT_send = async (params: IEquipNFTParams): Promise<TransactionReceipt> => {
            let result = await this.send('equipNFT',equipNFTParams(params));
            return result;
        }
        let equipNFT_call = async (params: IEquipNFTParams): Promise<void> => {
            let result = await this.call('equipNFT',equipNFTParams(params));
            return;
        }
        this.equipNFT = Object.assign(equipNFT_send, {
            call:equipNFT_call
        });
        let permit_send = async (user:string): Promise<TransactionReceipt> => {
            let result = await this.send('permit',[user]);
            return result;
        }
        let permit_call = async (user:string): Promise<void> => {
            let result = await this.call('permit',[user]);
            return;
        }
        this.permit = Object.assign(permit_send, {
            call:permit_call
        });
        let rawFulfillRandomnessParams = (params: IRawFulfillRandomnessParams) => [this.wallet.utils.stringToBytes32(params.requestId),this.wallet.utils.toString(params.randomness)];
        let rawFulfillRandomness_send = async (params: IRawFulfillRandomnessParams): Promise<TransactionReceipt> => {
            let result = await this.send('rawFulfillRandomness',rawFulfillRandomnessParams(params));
            return result;
        }
        let rawFulfillRandomness_call = async (params: IRawFulfillRandomnessParams): Promise<void> => {
            let result = await this.call('rawFulfillRandomness',rawFulfillRandomnessParams(params));
            return;
        }
        this.rawFulfillRandomness = Object.assign(rawFulfillRandomness_send, {
            call:rawFulfillRandomness_call
        });
        let safeTransferFromParams = (params: ISafeTransferFromParams) => [params.from,params.to,this.wallet.utils.toString(params.tokenId)];
        let safeTransferFrom_send = async (params: ISafeTransferFromParams): Promise<TransactionReceipt> => {
            let result = await this.send('safeTransferFrom',safeTransferFromParams(params));
            return result;
        }
        let safeTransferFrom_call = async (params: ISafeTransferFromParams): Promise<void> => {
            let result = await this.call('safeTransferFrom',safeTransferFromParams(params));
            return;
        }
        this.safeTransferFrom = Object.assign(safeTransferFrom_send, {
            call:safeTransferFrom_call
        });
        let safeTransferFrom_1Params = (params: ISafeTransferFrom_1Params) => [params.from,params.to,this.wallet.utils.toString(params.tokenId),this.wallet.utils.stringToBytes(params.data)];
        let safeTransferFrom_1_send = async (params: ISafeTransferFromParams): Promise<TransactionReceipt> => {
            let result = await this.send('safeTransferFrom',safeTransferFromParams(params));
            return result;
        }
        let safeTransferFrom_1_call = async (params: ISafeTransferFromParams): Promise<void> => {
            let result = await this.call('safeTransferFrom',safeTransferFromParams(params));
            return;
        }
        this.safeTransferFrom_1 = Object.assign(safeTransferFrom_1_send, {
            call:safeTransferFrom_1_call
        });
        let setApprovalForAllParams = (params: ISetApprovalForAllParams) => [params.operator,params.approved];
        let setApprovalForAll_send = async (params: ISetApprovalForAllParams): Promise<TransactionReceipt> => {
            let result = await this.send('setApprovalForAll',setApprovalForAllParams(params));
            return result;
        }
        let setApprovalForAll_call = async (params: ISetApprovalForAllParams): Promise<void> => {
            let result = await this.call('setApprovalForAll',setApprovalForAllParams(params));
            return;
        }
        this.setApprovalForAll = Object.assign(setApprovalForAll_send, {
            call:setApprovalForAll_call
        });
        let setApprovedStakerParams = (params: ISetApprovedStakerParams) => [params.staker,params.allow];
        let setApprovedStaker_send = async (params: ISetApprovedStakerParams): Promise<TransactionReceipt> => {
            let result = await this.send('setApprovedStaker',setApprovedStakerParams(params));
            return result;
        }
        let setApprovedStaker_call = async (params: ISetApprovedStakerParams): Promise<void> => {
            let result = await this.call('setApprovedStaker',setApprovedStakerParams(params));
            return;
        }
        this.setApprovedStaker = Object.assign(setApprovedStaker_send, {
            call:setApprovedStaker_call
        });
        let setBaseURI_send = async (baseURI:string): Promise<TransactionReceipt> => {
            let result = await this.send('setBaseURI',[baseURI]);
            return result;
        }
        let setBaseURI_call = async (baseURI:string): Promise<void> => {
            let result = await this.call('setBaseURI',[baseURI]);
            return;
        }
        this.setBaseURI = Object.assign(setBaseURI_send, {
            call:setBaseURI_call
        });
        let setCap_send = async (cap:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('setCap',[this.wallet.utils.toString(cap)]);
            return result;
        }
        let setCap_call = async (cap:number|BigNumber): Promise<void> => {
            let result = await this.call('setCap',[this.wallet.utils.toString(cap)]);
            return;
        }
        this.setCap = Object.assign(setCap_send, {
            call:setCap_call
        });
        let setCustomAttributeParams = (params: ISetCustomAttributeParams) => [this.wallet.utils.toString(params.tokenId),this.wallet.utils.toString(params.attribute)];
        let setCustomAttribute_send = async (params: ISetCustomAttributeParams): Promise<TransactionReceipt> => {
            let result = await this.send('setCustomAttribute',setCustomAttributeParams(params));
            return result;
        }
        let setCustomAttribute_call = async (params: ISetCustomAttributeParams): Promise<void> => {
            let result = await this.call('setCustomAttribute',setCustomAttributeParams(params));
            return;
        }
        this.setCustomAttribute = Object.assign(setCustomAttribute_send, {
            call:setCustomAttribute_call
        });
        let setMinimumStake_send = async (minimumStake:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('setMinimumStake',[this.wallet.utils.toString(minimumStake)]);
            return result;
        }
        let setMinimumStake_call = async (minimumStake:number|BigNumber): Promise<void> => {
            let result = await this.call('setMinimumStake',[this.wallet.utils.toString(minimumStake)]);
            return;
        }
        this.setMinimumStake = Object.assign(setMinimumStake_send, {
            call:setMinimumStake_call
        });
        let setProtocolFeeParams = (params: ISetProtocolFeeParams) => [this.wallet.utils.toString(params.protocolFee),params.protocolFeeTo];
        let setProtocolFee_send = async (params: ISetProtocolFeeParams): Promise<TransactionReceipt> => {
            let result = await this.send('setProtocolFee',setProtocolFeeParams(params));
            return result;
        }
        let setProtocolFee_call = async (params: ISetProtocolFeeParams): Promise<void> => {
            let result = await this.call('setProtocolFee',setProtocolFeeParams(params));
            return;
        }
        this.setProtocolFee = Object.assign(setProtocolFee_send, {
            call:setProtocolFee_call
        });
        let setVrfParamsParams = (params: ISetVrfParamsParams) => [this.wallet.utils.stringToBytes32(params.vrfKeyHash),this.wallet.utils.toString(params.vrfFee)];
        let setVrfParams_send = async (params: ISetVrfParamsParams): Promise<TransactionReceipt> => {
            let result = await this.send('setVrfParams',setVrfParamsParams(params));
            return result;
        }
        let setVrfParams_call = async (params: ISetVrfParamsParams): Promise<void> => {
            let result = await this.call('setVrfParams',setVrfParamsParams(params));
            return;
        }
        this.setVrfParams = Object.assign(setVrfParams_send, {
            call:setVrfParams_call
        });
        let stake_send = async (amount:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('stake',[this.wallet.utils.toString(amount)]);
            return result;
        }
        let stake_call = async (amount:number|BigNumber): Promise<BigNumber> => {
            let result = await this.call('stake',[this.wallet.utils.toString(amount)]);
            return new BigNumber(result);
        }
        this.stake = Object.assign(stake_send, {
            call:stake_call
        });
        let takeOwnership_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('takeOwnership');
            return result;
        }
        let takeOwnership_call = async (): Promise<void> => {
            let result = await this.call('takeOwnership');
            return;
        }
        this.takeOwnership = Object.assign(takeOwnership_send, {
            call:takeOwnership_call
        });
        let transferFromParams = (params: ITransferFromParams) => [params.from,params.to,this.wallet.utils.toString(params.tokenId)];
        let transferFrom_send = async (params: ITransferFromParams): Promise<TransactionReceipt> => {
            let result = await this.send('transferFrom',transferFromParams(params));
            return result;
        }
        let transferFrom_call = async (params: ITransferFromParams): Promise<void> => {
            let result = await this.call('transferFrom',transferFromParams(params));
            return;
        }
        this.transferFrom = Object.assign(transferFrom_send, {
            call:transferFrom_call
        });
        let transferOwnership_send = async (newOwner:string): Promise<TransactionReceipt> => {
            let result = await this.send('transferOwnership',[newOwner]);
            return result;
        }
        let transferOwnership_call = async (newOwner:string): Promise<void> => {
            let result = await this.call('transferOwnership',[newOwner]);
            return;
        }
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call:transferOwnership_call
        });
        let transferProtocolFee_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('transferProtocolFee');
            return result;
        }
        let transferProtocolFee_call = async (): Promise<void> => {
            let result = await this.call('transferProtocolFee');
            return;
        }
        this.transferProtocolFee = Object.assign(transferProtocolFee_send, {
            call:transferProtocolFee_call
        });
        let unequipNFTParams = (params: IUnequipNFTParams) => [this.wallet.utils.toString(params.trollId),params.nft,this.wallet.utils.toString(params.nftId)];
        let unequipNFT_send = async (params: IUnequipNFTParams): Promise<TransactionReceipt> => {
            let result = await this.send('unequipNFT',unequipNFTParams(params));
            return result;
        }
        let unequipNFT_call = async (params: IUnequipNFTParams): Promise<void> => {
            let result = await this.call('unequipNFT',unequipNFTParams(params));
            return;
        }
        this.unequipNFT = Object.assign(unequipNFT_send, {
            call:unequipNFT_call
        });
        let unstake_send = async (tokenId:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('unstake',[this.wallet.utils.toString(tokenId)]);
            return result;
        }
        let unstake_call = async (tokenId:number|BigNumber): Promise<void> => {
            let result = await this.call('unstake',[this.wallet.utils.toString(tokenId)]);
            return;
        }
        this.unstake = Object.assign(unstake_send, {
            call:unstake_call
        });
        let withdrawLink_send = async (amount:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('withdrawLink',[this.wallet.utils.toString(amount)]);
            return result;
        }
        let withdrawLink_call = async (amount:number|BigNumber): Promise<void> => {
            let result = await this.call('withdrawLink',[this.wallet.utils.toString(amount)]);
            return;
        }
        this.withdrawLink = Object.assign(withdrawLink_send, {
            call:withdrawLink_call
        });
    }
}
export module TrollNFT_VRFV2{
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
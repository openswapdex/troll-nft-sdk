import { Wallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class TrollNFT_VRF extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        name: string;
        symbol: string;
        baseURI: string;
        cap: number | BigNumber;
        stakeToken: string;
        requireApproval: boolean;
        minimumStake: number | BigNumber;
        protocolFee: number | BigNumber;
        protocolFeeTo: string;
        vrfAddresses: string[];
        vrfParams: string[];
    }): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): TrollNFT_VRF.ApprovalEvent[];
    decodeApprovalEvent(event: Event): TrollNFT_VRF.ApprovalEvent;
    parseApprovalForAllEvent(receipt: TransactionReceipt): TrollNFT_VRF.ApprovalForAllEvent[];
    decodeApprovalForAllEvent(event: Event): TrollNFT_VRF.ApprovalForAllEvent;
    parseApprovedStakerEvent(receipt: TransactionReceipt): TrollNFT_VRF.ApprovedStakerEvent[];
    decodeApprovedStakerEvent(event: Event): TrollNFT_VRF.ApprovedStakerEvent;
    parseAttributeEvent(receipt: TransactionReceipt): TrollNFT_VRF.AttributeEvent[];
    decodeAttributeEvent(event: Event): TrollNFT_VRF.AttributeEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): TrollNFT_VRF.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): TrollNFT_VRF.AuthorizeEvent;
    parseBaseURIEvent(receipt: TransactionReceipt): TrollNFT_VRF.BaseURIEvent[];
    decodeBaseURIEvent(event: Event): TrollNFT_VRF.BaseURIEvent;
    parseCapEvent(receipt: TransactionReceipt): TrollNFT_VRF.CapEvent[];
    decodeCapEvent(event: Event): TrollNFT_VRF.CapEvent;
    parseCustomAttributeEvent(receipt: TransactionReceipt): TrollNFT_VRF.CustomAttributeEvent[];
    decodeCustomAttributeEvent(event: Event): TrollNFT_VRF.CustomAttributeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): TrollNFT_VRF.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): TrollNFT_VRF.DeauthorizeEvent;
    parseMinimumStakeEvent(receipt: TransactionReceipt): TrollNFT_VRF.MinimumStakeEvent[];
    decodeMinimumStakeEvent(event: Event): TrollNFT_VRF.MinimumStakeEvent;
    parseProtocolFeeEvent(receipt: TransactionReceipt): TrollNFT_VRF.ProtocolFeeEvent[];
    decodeProtocolFeeEvent(event: Event): TrollNFT_VRF.ProtocolFeeEvent;
    parseStakeEvent(receipt: TransactionReceipt): TrollNFT_VRF.StakeEvent[];
    decodeStakeEvent(event: Event): TrollNFT_VRF.StakeEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): TrollNFT_VRF.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): TrollNFT_VRF.StartOwnershipTransferEvent;
    parseTransferEvent(receipt: TransactionReceipt): TrollNFT_VRF.TransferEvent[];
    decodeTransferEvent(event: Event): TrollNFT_VRF.TransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): TrollNFT_VRF.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): TrollNFT_VRF.TransferOwnershipEvent;
    parseUnstakeEvent(receipt: TransactionReceipt): TrollNFT_VRF.UnstakeEvent[];
    decodeUnstakeEvent(event: Event): TrollNFT_VRF.UnstakeEvent;
    _attributes(param1: number | BigNumber): Promise<BigNumber>;
    _customAttributes(param1: number | BigNumber): Promise<BigNumber>;
    approve(params: {
        to: string;
        tokenId: number | BigNumber;
    }): Promise<TransactionReceipt>;
    approvedStaker(param1: string): Promise<boolean>;
    balanceOf(owner: string): Promise<BigNumber>;
    baseURI(): Promise<string>;
    batchApprove(stakers: string[]): Promise<TransactionReceipt>;
    cap(): Promise<BigNumber>;
    counter(): Promise<BigNumber>;
    creationTime(param1: number | BigNumber): Promise<BigNumber>;
    deny(user: string): Promise<TransactionReceipt>;
    getApproved(tokenId: number | BigNumber): Promise<string>;
    getAttributes1(params: {
        tokenId: number | BigNumber;
        base: number | BigNumber;
        offset: number | BigNumber;
        digits: number | BigNumber;
    }): Promise<BigNumber>;
    getAttributes2(params: {
        tokenId: number | BigNumber;
        base: number | BigNumber;
        digits: (number | BigNumber)[];
    }): Promise<BigNumber[]>;
    isApprovedForAll(params: {
        owner: string;
        operator: string;
    }): Promise<boolean>;
    isPermitted(param1: string): Promise<boolean>;
    minimumStake(): Promise<BigNumber>;
    minted(param1: string): Promise<boolean>;
    name(): Promise<string>;
    newOwner(): Promise<string>;
    owner(): Promise<string>;
    ownerOf(tokenId: number | BigNumber): Promise<string>;
    permit(user: string): Promise<TransactionReceipt>;
    protocolFee(): Promise<BigNumber>;
    protocolFeeBalance(): Promise<BigNumber>;
    protocolFeeTo(): Promise<string>;
    rawFulfillRandomness(params: {
        requestId: string;
        randomness: number | BigNumber;
    }): Promise<TransactionReceipt>;
    requireApproval(): Promise<boolean>;
    safeTransferFrom(params: {
        from: string;
        to: string;
        tokenId: number | BigNumber;
    }): Promise<TransactionReceipt>;
    safeTransferFrom_1(params: {
        from: string;
        to: string;
        tokenId: number | BigNumber;
        data: string;
    }): Promise<TransactionReceipt>;
    setApprovalForAll(params: {
        operator: string;
        approved: boolean;
    }): Promise<TransactionReceipt>;
    setApprovedStaker(params: {
        staker: string;
        allow: boolean;
    }): Promise<TransactionReceipt>;
    setBaseURI(baseURI: string): Promise<TransactionReceipt>;
    setCap(cap: number | BigNumber): Promise<TransactionReceipt>;
    setCustomAttribute(params: {
        tokenId: number | BigNumber;
        attribute: number | BigNumber;
    }): Promise<TransactionReceipt>;
    setMinimumStake(minimumStake: number | BigNumber): Promise<TransactionReceipt>;
    setProtocolFee(params: {
        protocolFee: number | BigNumber;
        protocolFeeTo: string;
    }): Promise<TransactionReceipt>;
    setVrfParams(params: {
        vrfKeyHash: string;
        vrfFee: number | BigNumber;
    }): Promise<TransactionReceipt>;
    stake(amount: number | BigNumber): Promise<TransactionReceipt>;
    stakeToken(): Promise<string>;
    stakingBalance(param1: number | BigNumber): Promise<BigNumber>;
    supportsInterface(interfaceId: string): Promise<boolean>;
    symbol(): Promise<string>;
    takeOwnership(): Promise<TransactionReceipt>;
    tokenByIndex(index: number | BigNumber): Promise<BigNumber>;
    tokenOfOwnerByIndex(params: {
        owner: string;
        index: number | BigNumber;
    }): Promise<BigNumber>;
    tokenURI(tokenId: number | BigNumber): Promise<string>;
    totalSupply(): Promise<BigNumber>;
    transferFrom(params: {
        from: string;
        to: string;
        tokenId: number | BigNumber;
    }): Promise<TransactionReceipt>;
    transferOwnership(newOwner: string): Promise<TransactionReceipt>;
    transferProtocolFee(): Promise<TransactionReceipt>;
    unstake(tokenId: number | BigNumber): Promise<TransactionReceipt>;
    withdrawLink(amount: number | BigNumber): Promise<TransactionReceipt>;
}
export declare module TrollNFT_VRF {
    interface ApprovalEvent {
        _event: Event;
        owner: string;
        approved: string;
        tokenId: BigNumber;
    }
    interface ApprovalForAllEvent {
        _event: Event;
        owner: string;
        operator: string;
        approved: boolean;
    }
    interface ApprovedStakerEvent {
        _event: Event;
        staker: string;
        allow: boolean;
    }
    interface AttributeEvent {
        _event: Event;
        tokenId: BigNumber;
        attribute: BigNumber;
    }
    interface AuthorizeEvent {
        _event: Event;
        user: string;
    }
    interface BaseURIEvent {
        _event: Event;
        baseURI: string;
    }
    interface CapEvent {
        _event: Event;
        cap: BigNumber;
    }
    interface CustomAttributeEvent {
        _event: Event;
        tokenId: BigNumber;
        attribute: BigNumber;
    }
    interface DeauthorizeEvent {
        _event: Event;
        user: string;
    }
    interface MinimumStakeEvent {
        _event: Event;
        minimumStake: BigNumber;
    }
    interface ProtocolFeeEvent {
        _event: Event;
        protocolFee: BigNumber;
        protocolFeeTo: string;
    }
    interface StakeEvent {
        _event: Event;
        who: string;
        tokenId: BigNumber;
        amount: BigNumber;
    }
    interface StartOwnershipTransferEvent {
        _event: Event;
        user: string;
    }
    interface TransferEvent {
        _event: Event;
        from: string;
        to: string;
        tokenId: BigNumber;
    }
    interface TransferOwnershipEvent {
        _event: Event;
        user: string;
    }
    interface UnstakeEvent {
        _event: Event;
        who: string;
        tokenId: BigNumber;
        amount: BigNumber;
    }
}

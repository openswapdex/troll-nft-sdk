import { Wallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class TrollNFT_VRFV2 extends Contract {
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
        nftInfo: {
            listValidNFTs: string[];
            maximumValidNFTs: number | BigNumber;
        };
        vrfInfo: {
            vrfAddresses: string[];
            vrfParams: string[];
        };
    }): Promise<string>;
    parseAddStakesEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.AddStakesEvent[];
    decodeAddStakesEvent(event: Event): TrollNFT_VRFV2.AddStakesEvent;
    parseAddValidNFTEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.AddValidNFTEvent[];
    decodeAddValidNFTEvent(event: Event): TrollNFT_VRFV2.AddValidNFTEvent;
    parseApprovalEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.ApprovalEvent[];
    decodeApprovalEvent(event: Event): TrollNFT_VRFV2.ApprovalEvent;
    parseApprovalForAllEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.ApprovalForAllEvent[];
    decodeApprovalForAllEvent(event: Event): TrollNFT_VRFV2.ApprovalForAllEvent;
    parseApprovedStakerEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.ApprovedStakerEvent[];
    decodeApprovedStakerEvent(event: Event): TrollNFT_VRFV2.ApprovedStakerEvent;
    parseAttributeEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.AttributeEvent[];
    decodeAttributeEvent(event: Event): TrollNFT_VRFV2.AttributeEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): TrollNFT_VRFV2.AuthorizeEvent;
    parseBaseURIEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.BaseURIEvent[];
    decodeBaseURIEvent(event: Event): TrollNFT_VRFV2.BaseURIEvent;
    parseCapEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.CapEvent[];
    decodeCapEvent(event: Event): TrollNFT_VRFV2.CapEvent;
    parseCustomAttributeEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.CustomAttributeEvent[];
    decodeCustomAttributeEvent(event: Event): TrollNFT_VRFV2.CustomAttributeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): TrollNFT_VRFV2.DeauthorizeEvent;
    parseEquipNFTEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.EquipNFTEvent[];
    decodeEquipNFTEvent(event: Event): TrollNFT_VRFV2.EquipNFTEvent;
    parseMinimumStakeEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.MinimumStakeEvent[];
    decodeMinimumStakeEvent(event: Event): TrollNFT_VRFV2.MinimumStakeEvent;
    parseProtocolFeeEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.ProtocolFeeEvent[];
    decodeProtocolFeeEvent(event: Event): TrollNFT_VRFV2.ProtocolFeeEvent;
    parseStakeEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.StakeEvent[];
    decodeStakeEvent(event: Event): TrollNFT_VRFV2.StakeEvent;
    parseStakesApprovalEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.StakesApprovalEvent[];
    decodeStakesApprovalEvent(event: Event): TrollNFT_VRFV2.StakesApprovalEvent;
    parseStakesTransferEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.StakesTransferEvent[];
    decodeStakesTransferEvent(event: Event): TrollNFT_VRFV2.StakesTransferEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): TrollNFT_VRFV2.StartOwnershipTransferEvent;
    parseTransferEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.TransferEvent[];
    decodeTransferEvent(event: Event): TrollNFT_VRFV2.TransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): TrollNFT_VRFV2.TransferOwnershipEvent;
    parseUnequipNFTEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.UnequipNFTEvent[];
    decodeUnequipNFTEvent(event: Event): TrollNFT_VRFV2.UnequipNFTEvent;
    parseUnstakeEvent(receipt: TransactionReceipt): TrollNFT_VRFV2.UnstakeEvent[];
    decodeUnstakeEvent(event: Event): TrollNFT_VRFV2.UnstakeEvent;
    _attributes(param1: number | BigNumber): Promise<BigNumber>;
    _customAttributes(param1: number | BigNumber): Promise<BigNumber>;
    _stakesTransferAllowances(params: {
        param1: number | BigNumber;
        param2: string;
    }): Promise<BigNumber>;
    addStakes(params: {
        tokenId: number | BigNumber;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
    addValidNFTs(nfts: string[]): Promise<TransactionReceipt>;
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
    creationDate(param1: number | BigNumber): Promise<BigNumber>;
    deny(user: string): Promise<TransactionReceipt>;
    destoryDate(param1: number | BigNumber): Promise<BigNumber>;
    equipNFT(params: {
        trollId: number | BigNumber;
        nft: string;
        nftId: number | BigNumber;
    }): Promise<TransactionReceipt>;
    extraStakes(param1: number | BigNumber): Promise<BigNumber>;
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
    isValidNFT(param1: string): Promise<boolean>;
    lastStakeDate(param1: number | BigNumber): Promise<BigNumber>;
    listValidNFTs(param1: number | BigNumber): Promise<string>;
    maximumValidNFTs(): Promise<BigNumber>;
    minimumStake(): Promise<BigNumber>;
    minted(param1: string): Promise<boolean>;
    name(): Promise<string>;
    newOwner(): Promise<string>;
    nftsEquipped(params: {
        param1: string;
        param2: number | BigNumber;
    }): Promise<BigNumber>;
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
    trollOwnedNFTs(params: {
        param1: number | BigNumber;
        param2: string;
    }): Promise<BigNumber>;
    unequipNFT(params: {
        trollId: number | BigNumber;
        nft: string;
        nftId: number | BigNumber;
    }): Promise<TransactionReceipt>;
    unstake(tokenId: number | BigNumber): Promise<TransactionReceipt>;
    validNFTsLength(): Promise<BigNumber>;
    withdrawLink(amount: number | BigNumber): Promise<TransactionReceipt>;
}
export declare module TrollNFT_VRFV2 {
    interface AddStakesEvent {
        _event: Event;
        tokenId: BigNumber;
        amountAdded: BigNumber;
        newAmount: BigNumber;
    }
    interface AddValidNFTEvent {
        _event: Event;
        nft: string;
    }
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
    interface EquipNFTEvent {
        _event: Event;
        trollId: BigNumber;
        nft: string;
        nftId: BigNumber;
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
    interface StakesApprovalEvent {
        _event: Event;
        fromTokenId: BigNumber;
        spender: string;
        amount: BigNumber;
    }
    interface StakesTransferEvent {
        _event: Event;
        fromTokenId: BigNumber;
        toTokenId: BigNumber;
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
    interface UnequipNFTEvent {
        _event: Event;
        trollId: BigNumber;
        nft: string;
        nftId: BigNumber;
    }
    interface UnstakeEvent {
        _event: Event;
        who: string;
        tokenId: BigNumber;
        amount: BigNumber;
    }
}

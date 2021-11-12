import { Wallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export declare class TrollNFT extends Contract {
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
    }): Promise<string>;
    parseAddStakesEvent(receipt: TransactionReceipt): {
        tokenId: BigNumber;
        amountAdded: BigNumber;
        newAmount: BigNumber;
    }[];
    parseApprovalEvent(receipt: TransactionReceipt): {
        owner: string;
        approved: string;
        tokenId: BigNumber;
    }[];
    parseApprovalForAllEvent(receipt: TransactionReceipt): {
        owner: string;
        operator: string;
        approved: boolean;
    }[];
    parseApprovedStakerEvent(receipt: TransactionReceipt): {
        staker: string;
        allow: boolean;
    }[];
    parseAttributeEvent(receipt: TransactionReceipt): {
        tokenId: BigNumber;
        attribute: BigNumber;
    }[];
    parseAuthorizeEvent(receipt: TransactionReceipt): {
        user: string;
    }[];
    parseBaseURIEvent(receipt: TransactionReceipt): {
        baseURI: string;
    }[];
    parseCapEvent(receipt: TransactionReceipt): {
        cap: BigNumber;
    }[];
    parseCustomAttributeEvent(receipt: TransactionReceipt): {
        tokenId: BigNumber;
        attribute: BigNumber;
    }[];
    parseDeauthorizeEvent(receipt: TransactionReceipt): {
        user: string;
    }[];
    parseMinimumStakeEvent(receipt: TransactionReceipt): {
        minimumStake: BigNumber;
    }[];
    parseProtocolFeeEvent(receipt: TransactionReceipt): {
        protocolFee: BigNumber;
        protocolFeeTo: string;
    }[];
    parseStakeEvent(receipt: TransactionReceipt): {
        who: string;
        tokenId: BigNumber;
        amount: BigNumber;
    }[];
    parseStakesApprovalEvent(receipt: TransactionReceipt): {
        fromTokenId: BigNumber;
        spender: string;
        amount: BigNumber;
    }[];
    parseStakesTransferEvent(receipt: TransactionReceipt): {
        fromTokenId: BigNumber;
        toTokenId: BigNumber;
        amount: BigNumber;
    }[];
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): {
        user: string;
    }[];
    parseTransferEvent(receipt: TransactionReceipt): {
        from: string;
        to: string;
        tokenId: BigNumber;
    }[];
    parseTransferOwnershipEvent(receipt: TransactionReceipt): {
        user: string;
    }[];
    parseUnstakeEvent(receipt: TransactionReceipt): {
        who: string;
        tokenId: BigNumber;
        amount: BigNumber;
    }[];
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
        digits: number[] | BigNumber[];
    }): Promise<BigNumber[]>;
    isApprovedForAll(params: {
        owner: string;
        operator: string;
    }): Promise<boolean>;
    isPermitted(param1: string): Promise<boolean>;
    lastStakeDate(param1: number | BigNumber): Promise<BigNumber>;
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
}

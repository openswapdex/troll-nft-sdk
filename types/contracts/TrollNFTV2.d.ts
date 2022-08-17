import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDeployParams {
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
}
export interface I_stakesTransferAllowancesParams {
    param1: number | BigNumber;
    param2: string;
}
export interface IAddStakesParams {
    tokenId: number | BigNumber;
    amount: number | BigNumber;
}
export interface IApproveParams {
    to: string;
    tokenId: number | BigNumber;
}
export interface IEquipNFTParams {
    trollId: number | BigNumber;
    nft: string;
    nftId: number | BigNumber;
}
export interface IGetAttributes1Params {
    tokenId: number | BigNumber;
    base: number | BigNumber;
    offset: number | BigNumber;
    digits: number | BigNumber;
}
export interface IGetAttributes2Params {
    tokenId: number | BigNumber;
    base: number | BigNumber;
    digits: (number | BigNumber)[];
}
export interface IIsApprovedForAllParams {
    owner: string;
    operator: string;
}
export interface INftsEquippedParams {
    param1: string;
    param2: number | BigNumber;
}
export interface ISafeTransferFromParams {
    from: string;
    to: string;
    tokenId: number | BigNumber;
}
export interface ISafeTransferFrom_1Params {
    from: string;
    to: string;
    tokenId: number | BigNumber;
    data: string;
}
export interface ISetApprovalForAllParams {
    operator: string;
    approved: boolean;
}
export interface ISetApprovedStakerParams {
    staker: string;
    allow: boolean;
}
export interface ISetCustomAttributeParams {
    tokenId: number | BigNumber;
    attribute: number | BigNumber;
}
export interface ISetProtocolFeeParams {
    protocolFee: number | BigNumber;
    protocolFeeTo: string;
}
export interface ITokenOfOwnerByIndexParams {
    owner: string;
    index: number | BigNumber;
}
export interface ITransferFromParams {
    from: string;
    to: string;
    tokenId: number | BigNumber;
}
export interface ITrollOwnedNFTsParams {
    param1: number | BigNumber;
    param2: string;
}
export interface IUnequipNFTParams {
    trollId: number | BigNumber;
    nft: string;
    nftId: number | BigNumber;
}
export declare class TrollNFTV2 extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseAddStakesEvent(receipt: TransactionReceipt): TrollNFTV2.AddStakesEvent[];
    decodeAddStakesEvent(event: Event): TrollNFTV2.AddStakesEvent;
    parseAddValidNFTEvent(receipt: TransactionReceipt): TrollNFTV2.AddValidNFTEvent[];
    decodeAddValidNFTEvent(event: Event): TrollNFTV2.AddValidNFTEvent;
    parseApprovalEvent(receipt: TransactionReceipt): TrollNFTV2.ApprovalEvent[];
    decodeApprovalEvent(event: Event): TrollNFTV2.ApprovalEvent;
    parseApprovalForAllEvent(receipt: TransactionReceipt): TrollNFTV2.ApprovalForAllEvent[];
    decodeApprovalForAllEvent(event: Event): TrollNFTV2.ApprovalForAllEvent;
    parseApprovedStakerEvent(receipt: TransactionReceipt): TrollNFTV2.ApprovedStakerEvent[];
    decodeApprovedStakerEvent(event: Event): TrollNFTV2.ApprovedStakerEvent;
    parseAttributeEvent(receipt: TransactionReceipt): TrollNFTV2.AttributeEvent[];
    decodeAttributeEvent(event: Event): TrollNFTV2.AttributeEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): TrollNFTV2.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): TrollNFTV2.AuthorizeEvent;
    parseBaseURIEvent(receipt: TransactionReceipt): TrollNFTV2.BaseURIEvent[];
    decodeBaseURIEvent(event: Event): TrollNFTV2.BaseURIEvent;
    parseCapEvent(receipt: TransactionReceipt): TrollNFTV2.CapEvent[];
    decodeCapEvent(event: Event): TrollNFTV2.CapEvent;
    parseCustomAttributeEvent(receipt: TransactionReceipt): TrollNFTV2.CustomAttributeEvent[];
    decodeCustomAttributeEvent(event: Event): TrollNFTV2.CustomAttributeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): TrollNFTV2.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): TrollNFTV2.DeauthorizeEvent;
    parseEquipNFTEvent(receipt: TransactionReceipt): TrollNFTV2.EquipNFTEvent[];
    decodeEquipNFTEvent(event: Event): TrollNFTV2.EquipNFTEvent;
    parseMinimumStakeEvent(receipt: TransactionReceipt): TrollNFTV2.MinimumStakeEvent[];
    decodeMinimumStakeEvent(event: Event): TrollNFTV2.MinimumStakeEvent;
    parseProtocolFeeEvent(receipt: TransactionReceipt): TrollNFTV2.ProtocolFeeEvent[];
    decodeProtocolFeeEvent(event: Event): TrollNFTV2.ProtocolFeeEvent;
    parseStakeEvent(receipt: TransactionReceipt): TrollNFTV2.StakeEvent[];
    decodeStakeEvent(event: Event): TrollNFTV2.StakeEvent;
    parseStakesApprovalEvent(receipt: TransactionReceipt): TrollNFTV2.StakesApprovalEvent[];
    decodeStakesApprovalEvent(event: Event): TrollNFTV2.StakesApprovalEvent;
    parseStakesTransferEvent(receipt: TransactionReceipt): TrollNFTV2.StakesTransferEvent[];
    decodeStakesTransferEvent(event: Event): TrollNFTV2.StakesTransferEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): TrollNFTV2.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): TrollNFTV2.StartOwnershipTransferEvent;
    parseTransferEvent(receipt: TransactionReceipt): TrollNFTV2.TransferEvent[];
    decodeTransferEvent(event: Event): TrollNFTV2.TransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): TrollNFTV2.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): TrollNFTV2.TransferOwnershipEvent;
    parseUnequipNFTEvent(receipt: TransactionReceipt): TrollNFTV2.UnequipNFTEvent[];
    decodeUnequipNFTEvent(event: Event): TrollNFTV2.UnequipNFTEvent;
    parseUnstakeEvent(receipt: TransactionReceipt): TrollNFTV2.UnstakeEvent[];
    decodeUnstakeEvent(event: Event): TrollNFTV2.UnstakeEvent;
    _attributes: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    _customAttributes: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    _stakesTransferAllowances: {
        (params: I_stakesTransferAllowancesParams): Promise<BigNumber>;
    };
    addStakes: {
        (params: IAddStakesParams): Promise<TransactionReceipt>;
        call: (params: IAddStakesParams) => Promise<void>;
    };
    addValidNFTs: {
        (nfts: string[]): Promise<TransactionReceipt>;
        call: (nfts: string[]) => Promise<void>;
    };
    approve: {
        (params: IApproveParams): Promise<TransactionReceipt>;
        call: (params: IApproveParams) => Promise<void>;
    };
    approvedStaker: {
        (param1: string): Promise<boolean>;
    };
    balanceOf: {
        (owner: string): Promise<BigNumber>;
    };
    baseURI: {
        (): Promise<string>;
    };
    batchApprove: {
        (stakers: string[]): Promise<TransactionReceipt>;
        call: (stakers: string[]) => Promise<void>;
    };
    cap: {
        (): Promise<BigNumber>;
    };
    counter: {
        (): Promise<BigNumber>;
    };
    creationDate: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    deny: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    destoryDate: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    equipNFT: {
        (params: IEquipNFTParams): Promise<TransactionReceipt>;
        call: (params: IEquipNFTParams) => Promise<void>;
    };
    extraStakes: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    getApproved: {
        (tokenId: number | BigNumber): Promise<string>;
    };
    getAttributes1: {
        (params: IGetAttributes1Params): Promise<BigNumber>;
    };
    getAttributes2: {
        (params: IGetAttributes2Params): Promise<BigNumber[]>;
    };
    isApprovedForAll: {
        (params: IIsApprovedForAllParams): Promise<boolean>;
    };
    isPermitted: {
        (param1: string): Promise<boolean>;
    };
    isValidNFT: {
        (param1: string): Promise<boolean>;
    };
    lastStakeDate: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    listValidNFTs: {
        (param1: number | BigNumber): Promise<string>;
    };
    maximumValidNFTs: {
        (): Promise<BigNumber>;
    };
    minimumStake: {
        (): Promise<BigNumber>;
    };
    minted: {
        (param1: string): Promise<boolean>;
    };
    name: {
        (): Promise<string>;
    };
    newOwner: {
        (): Promise<string>;
    };
    nftsEquipped: {
        (params: INftsEquippedParams): Promise<BigNumber>;
    };
    owner: {
        (): Promise<string>;
    };
    ownerOf: {
        (tokenId: number | BigNumber): Promise<string>;
    };
    permit: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    protocolFee: {
        (): Promise<BigNumber>;
    };
    protocolFeeBalance: {
        (): Promise<BigNumber>;
    };
    protocolFeeTo: {
        (): Promise<string>;
    };
    requireApproval: {
        (): Promise<boolean>;
    };
    safeTransferFrom: {
        (params: ISafeTransferFromParams): Promise<TransactionReceipt>;
        call: (params: ISafeTransferFromParams) => Promise<void>;
    };
    safeTransferFrom_1: {
        (params: ISafeTransferFrom_1Params): Promise<TransactionReceipt>;
        call: (params: ISafeTransferFrom_1Params) => Promise<void>;
    };
    setApprovalForAll: {
        (params: ISetApprovalForAllParams): Promise<TransactionReceipt>;
        call: (params: ISetApprovalForAllParams) => Promise<void>;
    };
    setApprovedStaker: {
        (params: ISetApprovedStakerParams): Promise<TransactionReceipt>;
        call: (params: ISetApprovedStakerParams) => Promise<void>;
    };
    setBaseURI: {
        (baseURI: string): Promise<TransactionReceipt>;
        call: (baseURI: string) => Promise<void>;
    };
    setCap: {
        (cap: number | BigNumber): Promise<TransactionReceipt>;
        call: (cap: number | BigNumber) => Promise<void>;
    };
    setCustomAttribute: {
        (params: ISetCustomAttributeParams): Promise<TransactionReceipt>;
        call: (params: ISetCustomAttributeParams) => Promise<void>;
    };
    setMinimumStake: {
        (minimumStake: number | BigNumber): Promise<TransactionReceipt>;
        call: (minimumStake: number | BigNumber) => Promise<void>;
    };
    setProtocolFee: {
        (params: ISetProtocolFeeParams): Promise<TransactionReceipt>;
        call: (params: ISetProtocolFeeParams) => Promise<void>;
    };
    stake: {
        (amount: number | BigNumber): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber) => Promise<BigNumber>;
    };
    stakeToken: {
        (): Promise<string>;
    };
    stakingBalance: {
        (param1: number | BigNumber): Promise<BigNumber>;
    };
    supportsInterface: {
        (interfaceId: string): Promise<boolean>;
    };
    symbol: {
        (): Promise<string>;
    };
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    tokenByIndex: {
        (index: number | BigNumber): Promise<BigNumber>;
    };
    tokenOfOwnerByIndex: {
        (params: ITokenOfOwnerByIndexParams): Promise<BigNumber>;
    };
    tokenURI: {
        (tokenId: number | BigNumber): Promise<string>;
    };
    totalSupply: {
        (): Promise<BigNumber>;
    };
    transferFrom: {
        (params: ITransferFromParams): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams) => Promise<void>;
    };
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    transferProtocolFee: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    trollOwnedNFTs: {
        (params: ITrollOwnedNFTsParams): Promise<BigNumber>;
    };
    unequipNFT: {
        (params: IUnequipNFTParams): Promise<TransactionReceipt>;
        call: (params: IUnequipNFTParams) => Promise<void>;
    };
    unstake: {
        (tokenId: number | BigNumber): Promise<TransactionReceipt>;
        call: (tokenId: number | BigNumber) => Promise<void>;
    };
    validNFTsLength: {
        (): Promise<BigNumber>;
    };
    private assign;
}
export declare module TrollNFTV2 {
    interface AddStakesEvent {
        tokenId: BigNumber;
        amountAdded: BigNumber;
        newAmount: BigNumber;
        _event: Event;
    }
    interface AddValidNFTEvent {
        nft: string;
        _event: Event;
    }
    interface ApprovalEvent {
        owner: string;
        approved: string;
        tokenId: BigNumber;
        _event: Event;
    }
    interface ApprovalForAllEvent {
        owner: string;
        operator: string;
        approved: boolean;
        _event: Event;
    }
    interface ApprovedStakerEvent {
        staker: string;
        allow: boolean;
        _event: Event;
    }
    interface AttributeEvent {
        tokenId: BigNumber;
        attribute: BigNumber;
        _event: Event;
    }
    interface AuthorizeEvent {
        user: string;
        _event: Event;
    }
    interface BaseURIEvent {
        baseURI: string;
        _event: Event;
    }
    interface CapEvent {
        cap: BigNumber;
        _event: Event;
    }
    interface CustomAttributeEvent {
        tokenId: BigNumber;
        attribute: BigNumber;
        _event: Event;
    }
    interface DeauthorizeEvent {
        user: string;
        _event: Event;
    }
    interface EquipNFTEvent {
        trollId: BigNumber;
        nft: string;
        nftId: BigNumber;
        _event: Event;
    }
    interface MinimumStakeEvent {
        minimumStake: BigNumber;
        _event: Event;
    }
    interface ProtocolFeeEvent {
        protocolFee: BigNumber;
        protocolFeeTo: string;
        _event: Event;
    }
    interface StakeEvent {
        who: string;
        tokenId: BigNumber;
        amount: BigNumber;
        _event: Event;
    }
    interface StakesApprovalEvent {
        fromTokenId: BigNumber;
        spender: string;
        amount: BigNumber;
        _event: Event;
    }
    interface StakesTransferEvent {
        fromTokenId: BigNumber;
        toTokenId: BigNumber;
        amount: BigNumber;
        _event: Event;
    }
    interface StartOwnershipTransferEvent {
        user: string;
        _event: Event;
    }
    interface TransferEvent {
        from: string;
        to: string;
        tokenId: BigNumber;
        _event: Event;
    }
    interface TransferOwnershipEvent {
        user: string;
        _event: Event;
    }
    interface UnequipNFTEvent {
        trollId: BigNumber;
        nft: string;
        nftId: BigNumber;
        _event: Event;
    }
    interface UnstakeEvent {
        who: string;
        tokenId: BigNumber;
        amount: BigNumber;
        _event: Event;
    }
}

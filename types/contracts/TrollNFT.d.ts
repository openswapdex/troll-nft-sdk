import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class TrollNFT extends Contract {
    constructor(wallet: IWallet, address?: string);
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
    parseApprovalEvent(receipt: TransactionReceipt): TrollNFT.ApprovalEvent[];
    decodeApprovalEvent(event: Event): TrollNFT.ApprovalEvent;
    parseApprovalForAllEvent(receipt: TransactionReceipt): TrollNFT.ApprovalForAllEvent[];
    decodeApprovalForAllEvent(event: Event): TrollNFT.ApprovalForAllEvent;
    parseApprovedStakerEvent(receipt: TransactionReceipt): TrollNFT.ApprovedStakerEvent[];
    decodeApprovedStakerEvent(event: Event): TrollNFT.ApprovedStakerEvent;
    parseAttributeEvent(receipt: TransactionReceipt): TrollNFT.AttributeEvent[];
    decodeAttributeEvent(event: Event): TrollNFT.AttributeEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): TrollNFT.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): TrollNFT.AuthorizeEvent;
    parseBaseURIEvent(receipt: TransactionReceipt): TrollNFT.BaseURIEvent[];
    decodeBaseURIEvent(event: Event): TrollNFT.BaseURIEvent;
    parseCapEvent(receipt: TransactionReceipt): TrollNFT.CapEvent[];
    decodeCapEvent(event: Event): TrollNFT.CapEvent;
    parseCustomAttributeEvent(receipt: TransactionReceipt): TrollNFT.CustomAttributeEvent[];
    decodeCustomAttributeEvent(event: Event): TrollNFT.CustomAttributeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): TrollNFT.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): TrollNFT.DeauthorizeEvent;
    parseMinimumStakeEvent(receipt: TransactionReceipt): TrollNFT.MinimumStakeEvent[];
    decodeMinimumStakeEvent(event: Event): TrollNFT.MinimumStakeEvent;
    parseProtocolFeeEvent(receipt: TransactionReceipt): TrollNFT.ProtocolFeeEvent[];
    decodeProtocolFeeEvent(event: Event): TrollNFT.ProtocolFeeEvent;
    parseStakeEvent(receipt: TransactionReceipt): TrollNFT.StakeEvent[];
    decodeStakeEvent(event: Event): TrollNFT.StakeEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): TrollNFT.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): TrollNFT.StartOwnershipTransferEvent;
    parseTransferEvent(receipt: TransactionReceipt): TrollNFT.TransferEvent[];
    decodeTransferEvent(event: Event): TrollNFT.TransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): TrollNFT.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): TrollNFT.TransferOwnershipEvent;
    parseUnstakeEvent(receipt: TransactionReceipt): TrollNFT.UnstakeEvent[];
    decodeUnstakeEvent(event: Event): TrollNFT.UnstakeEvent;
    _attributes(param1: number | BigNumber): Promise<BigNumber>;
    _customAttributes(param1: number | BigNumber): Promise<BigNumber>;
    approve_send(params: {
        to: string;
        tokenId: number | BigNumber;
    }): Promise<TransactionReceipt>;
    approve_call(params: {
        to: string;
        tokenId: number | BigNumber;
    }): Promise<void>;
    approve: {
        (params: {
            to: string;
            tokenId: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            to: string;
            tokenId: number | BigNumber;
        }) => Promise<void>;
    };
    approvedStaker(param1: string): Promise<boolean>;
    balanceOf(owner: string): Promise<BigNumber>;
    baseURI(): Promise<string>;
    batchApprove_send(stakers: string[]): Promise<TransactionReceipt>;
    batchApprove_call(stakers: string[]): Promise<void>;
    batchApprove: {
        (stakers: string[]): Promise<TransactionReceipt>;
        call: (stakers: string[]) => Promise<void>;
    };
    cap(): Promise<BigNumber>;
    counter(): Promise<BigNumber>;
    creationTime(param1: number | BigNumber): Promise<BigNumber>;
    deny_send(user: string): Promise<TransactionReceipt>;
    deny_call(user: string): Promise<void>;
    deny: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
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
    permit_send(user: string): Promise<TransactionReceipt>;
    permit_call(user: string): Promise<void>;
    permit: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    protocolFee(): Promise<BigNumber>;
    protocolFeeBalance(): Promise<BigNumber>;
    protocolFeeTo(): Promise<string>;
    requireApproval(): Promise<boolean>;
    safeTransferFrom_send(params: {
        from: string;
        to: string;
        tokenId: number | BigNumber;
    }): Promise<TransactionReceipt>;
    safeTransferFrom_call(params: {
        from: string;
        to: string;
        tokenId: number | BigNumber;
    }): Promise<void>;
    safeTransferFrom: {
        (params: {
            from: string;
            to: string;
            tokenId: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            from: string;
            to: string;
            tokenId: number | BigNumber;
        }) => Promise<void>;
    };
    safeTransferFrom_1_send(params: {
        from: string;
        to: string;
        tokenId: number | BigNumber;
        data: string;
    }): Promise<TransactionReceipt>;
    safeTransferFrom_1_call(params: {
        from: string;
        to: string;
        tokenId: number | BigNumber;
        data: string;
    }): Promise<void>;
    safeTransferFrom_1: {
        (params: {
            from: string;
            to: string;
            tokenId: number | BigNumber;
            data: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            from: string;
            to: string;
            tokenId: number | BigNumber;
            data: string;
        }) => Promise<void>;
    };
    setApprovalForAll_send(params: {
        operator: string;
        approved: boolean;
    }): Promise<TransactionReceipt>;
    setApprovalForAll_call(params: {
        operator: string;
        approved: boolean;
    }): Promise<void>;
    setApprovalForAll: {
        (params: {
            operator: string;
            approved: boolean;
        }): Promise<TransactionReceipt>;
        call: (params: {
            operator: string;
            approved: boolean;
        }) => Promise<void>;
    };
    setApprovedStaker_send(params: {
        staker: string;
        allow: boolean;
    }): Promise<TransactionReceipt>;
    setApprovedStaker_call(params: {
        staker: string;
        allow: boolean;
    }): Promise<void>;
    setApprovedStaker: {
        (params: {
            staker: string;
            allow: boolean;
        }): Promise<TransactionReceipt>;
        call: (params: {
            staker: string;
            allow: boolean;
        }) => Promise<void>;
    };
    setBaseURI_send(baseURI: string): Promise<TransactionReceipt>;
    setBaseURI_call(baseURI: string): Promise<void>;
    setBaseURI: {
        (baseURI: string): Promise<TransactionReceipt>;
        call: (baseURI: string) => Promise<void>;
    };
    setCap_send(cap: number | BigNumber): Promise<TransactionReceipt>;
    setCap_call(cap: number | BigNumber): Promise<void>;
    setCap: {
        (cap: number | BigNumber): Promise<TransactionReceipt>;
        call: (cap: number | BigNumber) => Promise<void>;
    };
    setCustomAttribute_send(params: {
        tokenId: number | BigNumber;
        attribute: number | BigNumber;
    }): Promise<TransactionReceipt>;
    setCustomAttribute_call(params: {
        tokenId: number | BigNumber;
        attribute: number | BigNumber;
    }): Promise<void>;
    setCustomAttribute: {
        (params: {
            tokenId: number | BigNumber;
            attribute: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            tokenId: number | BigNumber;
            attribute: number | BigNumber;
        }) => Promise<void>;
    };
    setMinimumStake_send(minimumStake: number | BigNumber): Promise<TransactionReceipt>;
    setMinimumStake_call(minimumStake: number | BigNumber): Promise<void>;
    setMinimumStake: {
        (minimumStake: number | BigNumber): Promise<TransactionReceipt>;
        call: (minimumStake: number | BigNumber) => Promise<void>;
    };
    setProtocolFee_send(params: {
        protocolFee: number | BigNumber;
        protocolFeeTo: string;
    }): Promise<TransactionReceipt>;
    setProtocolFee_call(params: {
        protocolFee: number | BigNumber;
        protocolFeeTo: string;
    }): Promise<void>;
    setProtocolFee: {
        (params: {
            protocolFee: number | BigNumber;
            protocolFeeTo: string;
        }): Promise<TransactionReceipt>;
        call: (params: {
            protocolFee: number | BigNumber;
            protocolFeeTo: string;
        }) => Promise<void>;
    };
    stake_send(amount: number | BigNumber): Promise<TransactionReceipt>;
    stake_call(amount: number | BigNumber): Promise<BigNumber>;
    stake: {
        (amount: number | BigNumber): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber) => Promise<BigNumber>;
    };
    stakeToken(): Promise<string>;
    stakingBalance(param1: number | BigNumber): Promise<BigNumber>;
    supportsInterface(interfaceId: string): Promise<boolean>;
    symbol(): Promise<string>;
    takeOwnership_send(): Promise<TransactionReceipt>;
    takeOwnership_call(): Promise<void>;
    takeOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    tokenByIndex(index: number | BigNumber): Promise<BigNumber>;
    tokenOfOwnerByIndex(params: {
        owner: string;
        index: number | BigNumber;
    }): Promise<BigNumber>;
    tokenURI(tokenId: number | BigNumber): Promise<string>;
    totalSupply(): Promise<BigNumber>;
    transferFrom_send(params: {
        from: string;
        to: string;
        tokenId: number | BigNumber;
    }): Promise<TransactionReceipt>;
    transferFrom_call(params: {
        from: string;
        to: string;
        tokenId: number | BigNumber;
    }): Promise<void>;
    transferFrom: {
        (params: {
            from: string;
            to: string;
            tokenId: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            from: string;
            to: string;
            tokenId: number | BigNumber;
        }) => Promise<void>;
    };
    transferOwnership_send(newOwner: string): Promise<TransactionReceipt>;
    transferOwnership_call(newOwner: string): Promise<void>;
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    transferProtocolFee_send(): Promise<TransactionReceipt>;
    transferProtocolFee_call(): Promise<void>;
    transferProtocolFee: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    unstake_send(tokenId: number | BigNumber): Promise<TransactionReceipt>;
    unstake_call(tokenId: number | BigNumber): Promise<void>;
    unstake: {
        (tokenId: number | BigNumber): Promise<TransactionReceipt>;
        call: (tokenId: number | BigNumber) => Promise<void>;
    };
    private assign;
}
export declare module TrollNFT {
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
    interface UnstakeEvent {
        who: string;
        tokenId: BigNumber;
        amount: BigNumber;
        _event: Event;
    }
}

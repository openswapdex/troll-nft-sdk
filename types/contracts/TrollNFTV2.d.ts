import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class TrollNFTV2 extends Contract {
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
        nftInfo: {
            listValidNFTs: string[];
            maximumValidNFTs: number | BigNumber;
        };
    }): Promise<string>;
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
    _attributes(param1: number | BigNumber): Promise<BigNumber>;
    _customAttributes(param1: number | BigNumber): Promise<BigNumber>;
    _stakesTransferAllowances(params: {
        param1: number | BigNumber;
        param2: string;
    }): Promise<BigNumber>;
    addStakes_send(params: {
        tokenId: number | BigNumber;
        amount: number | BigNumber;
    }): Promise<TransactionReceipt>;
    addStakes_call(params: {
        tokenId: number | BigNumber;
        amount: number | BigNumber;
    }): Promise<void>;
    addStakes: {
        (params: {
            tokenId: number | BigNumber;
            amount: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            tokenId: number | BigNumber;
            amount: number | BigNumber;
        }) => Promise<void>;
    };
    addValidNFTs_send(nfts: string[]): Promise<TransactionReceipt>;
    addValidNFTs_call(nfts: string[]): Promise<void>;
    addValidNFTs: {
        (nfts: string[]): Promise<TransactionReceipt>;
        call: (nfts: string[]) => Promise<void>;
    };
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
    creationDate(param1: number | BigNumber): Promise<BigNumber>;
    deny_send(user: string): Promise<TransactionReceipt>;
    deny_call(user: string): Promise<void>;
    deny: {
        (user: string): Promise<TransactionReceipt>;
        call: (user: string) => Promise<void>;
    };
    destoryDate(param1: number | BigNumber): Promise<BigNumber>;
    equipNFT_send(params: {
        trollId: number | BigNumber;
        nft: string;
        nftId: number | BigNumber;
    }): Promise<TransactionReceipt>;
    equipNFT_call(params: {
        trollId: number | BigNumber;
        nft: string;
        nftId: number | BigNumber;
    }): Promise<void>;
    equipNFT: {
        (params: {
            trollId: number | BigNumber;
            nft: string;
            nftId: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            trollId: number | BigNumber;
            nft: string;
            nftId: number | BigNumber;
        }) => Promise<void>;
    };
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
    trollOwnedNFTs(params: {
        param1: number | BigNumber;
        param2: string;
    }): Promise<BigNumber>;
    unequipNFT_send(params: {
        trollId: number | BigNumber;
        nft: string;
        nftId: number | BigNumber;
    }): Promise<TransactionReceipt>;
    unequipNFT_call(params: {
        trollId: number | BigNumber;
        nft: string;
        nftId: number | BigNumber;
    }): Promise<void>;
    unequipNFT: {
        (params: {
            trollId: number | BigNumber;
            nft: string;
            nftId: number | BigNumber;
        }): Promise<TransactionReceipt>;
        call: (params: {
            trollId: number | BigNumber;
            nft: string;
            nftId: number | BigNumber;
        }) => Promise<void>;
    };
    unstake_send(tokenId: number | BigNumber): Promise<TransactionReceipt>;
    unstake_call(tokenId: number | BigNumber): Promise<void>;
    unstake: {
        (tokenId: number | BigNumber): Promise<TransactionReceipt>;
        call: (tokenId: number | BigNumber) => Promise<void>;
    };
    validNFTsLength(): Promise<BigNumber>;
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

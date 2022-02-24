import { Wallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export declare class ERC721 extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(params: {
        name: string;
        symbol: string;
    }): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): ERC721.ApprovalEvent[];
    decodeApprovalEvent(event: Event): ERC721.ApprovalEvent;
    parseApprovalForAllEvent(receipt: TransactionReceipt): ERC721.ApprovalForAllEvent[];
    decodeApprovalForAllEvent(event: Event): ERC721.ApprovalForAllEvent;
    parseTransferEvent(receipt: TransactionReceipt): ERC721.TransferEvent[];
    decodeTransferEvent(event: Event): ERC721.TransferEvent;
    approve(params: {
        to: string;
        tokenId: number | BigNumber;
    }): Promise<TransactionReceipt>;
    balanceOf(owner: string): Promise<BigNumber>;
    getApproved(tokenId: number | BigNumber): Promise<string>;
    isApprovedForAll(params: {
        owner: string;
        operator: string;
    }): Promise<boolean>;
    name(): Promise<string>;
    ownerOf(tokenId: number | BigNumber): Promise<string>;
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
    supportsInterface(interfaceId: string): Promise<boolean>;
    symbol(): Promise<string>;
    tokenURI(tokenId: number | BigNumber): Promise<string>;
    transferFrom(params: {
        from: string;
        to: string;
        tokenId: number | BigNumber;
    }): Promise<TransactionReceipt>;
}
export declare module ERC721 {
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
    interface TransferEvent {
        _event: Event;
        from: string;
        to: string;
        tokenId: BigNumber;
    }
}

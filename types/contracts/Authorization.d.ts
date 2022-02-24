import { Wallet, Contract, TransactionReceipt, Event } from "@ijstech/eth-wallet";
export declare class Authorization extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(): Promise<string>;
    parseAuthorizeEvent(receipt: TransactionReceipt): Authorization.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): Authorization.AuthorizeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): Authorization.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): Authorization.DeauthorizeEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Authorization.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): Authorization.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): Authorization.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): Authorization.TransferOwnershipEvent;
    deny(user: string): Promise<TransactionReceipt>;
    isPermitted(param1: string): Promise<boolean>;
    newOwner(): Promise<string>;
    owner(): Promise<string>;
    permit(user: string): Promise<TransactionReceipt>;
    takeOwnership(): Promise<TransactionReceipt>;
    transferOwnership(newOwner: string): Promise<TransactionReceipt>;
}
export declare module Authorization {
    interface AuthorizeEvent {
        _event: Event;
        user: string;
    }
    interface DeauthorizeEvent {
        _event: Event;
        user: string;
    }
    interface StartOwnershipTransferEvent {
        _event: Event;
        user: string;
    }
    interface TransferOwnershipEvent {
        _event: Event;
        user: string;
    }
}

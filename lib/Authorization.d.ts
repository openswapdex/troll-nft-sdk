import { Wallet, Contract, TransactionReceipt } from "@ijstech/eth-wallet";
export declare class Authorization extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(): Promise<string>;
    parseAuthorizeEvent(receipt: TransactionReceipt): {
        user: string;
    }[];
    parseDeauthorizeEvent(receipt: TransactionReceipt): {
        user: string;
    }[];
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): {
        user: string;
    }[];
    parseTransferOwnershipEvent(receipt: TransactionReceipt): {
        user: string;
    }[];
    deny(user: string): Promise<TransactionReceipt>;
    isPermitted(param1: string): Promise<boolean>;
    newOwner(): Promise<string>;
    owner(): Promise<string>;
    permit(user: string): Promise<TransactionReceipt>;
    takeOwnership(): Promise<TransactionReceipt>;
    transferOwnership(newOwner: string): Promise<TransactionReceipt>;
}

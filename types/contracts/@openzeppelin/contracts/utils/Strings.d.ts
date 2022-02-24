import { Wallet, Contract } from "@ijstech/eth-wallet";
export declare class Strings extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(): Promise<string>;
}

import { Wallet, Contract } from "@ijstech/eth-wallet";
export declare class SafeERC20 extends Contract {
    constructor(wallet: Wallet, address?: string);
    deploy(): Promise<string>;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SafeERC20 = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../../../../../bin/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.json");
class SafeERC20 extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy() {
        return this._deploy();
    }
}
exports.SafeERC20 = SafeERC20;

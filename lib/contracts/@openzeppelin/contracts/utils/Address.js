"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../../../bin/@openzeppelin/contracts/utils/Address.json");
class Address extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy() {
        return this._deploy();
    }
}
exports.Address = Address;
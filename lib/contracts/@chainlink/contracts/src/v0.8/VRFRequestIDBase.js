"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VRFRequestIDBase = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../../../../bin/@chainlink/contracts/src/v0.8/VRFRequestIDBase.json");
class VRFRequestIDBase extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy() {
        return this._deploy();
    }
}
exports.VRFRequestIDBase = VRFRequestIDBase;

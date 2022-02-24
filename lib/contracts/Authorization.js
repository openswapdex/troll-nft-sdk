"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorization = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../bin/Authorization.json");
class Authorization extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy() {
        return this._deploy();
    }
    parseAuthorizeEvent(receipt) {
        return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event) {
        let result = event.data;
        return {
            _event: event,
            user: result.user
        };
    }
    parseDeauthorizeEvent(receipt) {
        return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event) {
        let result = event.data;
        return {
            _event: event,
            user: result.user
        };
    }
    parseStartOwnershipTransferEvent(receipt) {
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event) {
        let result = event.data;
        return {
            _event: event,
            user: result.user
        };
    }
    parseTransferOwnershipEvent(receipt) {
        return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event) {
        let result = event.data;
        return {
            _event: event,
            user: result.user
        };
    }
    async deny(user) {
        let result = await this.methods('deny', user);
        return result;
    }
    async isPermitted(param1) {
        let result = await this.methods('isPermitted', param1);
        return result;
    }
    async newOwner() {
        let result = await this.methods('newOwner');
        return result;
    }
    async owner() {
        let result = await this.methods('owner');
        return result;
    }
    async permit(user) {
        let result = await this.methods('permit', user);
        return result;
    }
    async takeOwnership() {
        let result = await this.methods('takeOwnership');
        return result;
    }
    async transferOwnership(newOwner) {
        let result = await this.methods('transferOwnership', newOwner);
        return result;
    }
}
exports.Authorization = Authorization;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC721 = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../../../../../bin/@openzeppelin/contracts/token/ERC721/ERC721.json");
class ERC721 extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params) {
        return this._deploy(params.name, params.symbol);
    }
    parseApprovalEvent(receipt) {
        return this.parseEvents(receipt, "Approval");
    }
    parseApprovalForAllEvent(receipt) {
        return this.parseEvents(receipt, "ApprovalForAll");
    }
    parseTransferEvent(receipt) {
        return this.parseEvents(receipt, "Transfer");
    }
    async approve(params) {
        let result = await this.methods('approve', params.to, eth_wallet_1.Utils.toString(params.tokenId));
        return result;
    }
    async balanceOf(owner) {
        let result = await this.methods('balanceOf', owner);
        return new eth_wallet_1.BigNumber(result);
    }
    async getApproved(tokenId) {
        let result = await this.methods('getApproved', tokenId);
        return result;
    }
    async isApprovedForAll(params) {
        let result = await this.methods('isApprovedForAll', params.owner, params.operator);
        return result;
    }
    async name() {
        let result = await this.methods('name');
        return result;
    }
    async ownerOf(tokenId) {
        let result = await this.methods('ownerOf', tokenId);
        return result;
    }
    async safeTransferFrom(params) {
        let result = await this.methods('safeTransferFrom', params.from, params.to, eth_wallet_1.Utils.toString(params.tokenId));
        return result;
    }
    async safeTransferFrom_1(params) {
        let result = await this.methods('safeTransferFrom', params.from, params.to, eth_wallet_1.Utils.toString(params.tokenId), params.data);
        return result;
    }
    async setApprovalForAll(params) {
        let result = await this.methods('setApprovalForAll', params.operator, params.approved);
        return result;
    }
    async supportsInterface(interfaceId) {
        let result = await this.methods('supportsInterface', interfaceId);
        return result;
    }
    async symbol() {
        let result = await this.methods('symbol');
        return result;
    }
    async tokenURI(tokenId) {
        let result = await this.methods('tokenURI', tokenId);
        return result;
    }
    async transferFrom(params) {
        let result = await this.methods('transferFrom', params.from, params.to, eth_wallet_1.Utils.toString(params.tokenId));
        return result;
    }
}
exports.ERC721 = ERC721;
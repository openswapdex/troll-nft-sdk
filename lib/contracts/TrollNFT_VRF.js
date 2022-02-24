"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrollNFT_VRF = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const Bin = require("../../bin/TrollNFT_VRF.json");
class TrollNFT_VRF extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, Bin.abi, Bin.bytecode);
    }
    deploy(params) {
        return this._deploy(params.name, params.symbol, params.baseURI, eth_wallet_1.Utils.toString(params.cap), params.stakeToken, params.requireApproval, eth_wallet_1.Utils.toString(params.minimumStake), eth_wallet_1.Utils.toString(params.protocolFee), params.protocolFeeTo, params.vrfAddresses, eth_wallet_1.Utils.stringToBytes32(params.vrfParams));
    }
    parseApprovalEvent(receipt) {
        return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event) {
        let result = event.data;
        return {
            _event: event,
            owner: result.owner,
            approved: result.approved,
            tokenId: new eth_wallet_1.BigNumber(result.tokenId)
        };
    }
    parseApprovalForAllEvent(receipt) {
        return this.parseEvents(receipt, "ApprovalForAll").map(e => this.decodeApprovalForAllEvent(e));
    }
    decodeApprovalForAllEvent(event) {
        let result = event.data;
        return {
            _event: event,
            owner: result.owner,
            operator: result.operator,
            approved: result.approved
        };
    }
    parseApprovedStakerEvent(receipt) {
        return this.parseEvents(receipt, "ApprovedStaker").map(e => this.decodeApprovedStakerEvent(e));
    }
    decodeApprovedStakerEvent(event) {
        let result = event.data;
        return {
            _event: event,
            staker: result.staker,
            allow: result.allow
        };
    }
    parseAttributeEvent(receipt) {
        return this.parseEvents(receipt, "Attribute").map(e => this.decodeAttributeEvent(e));
    }
    decodeAttributeEvent(event) {
        let result = event.data;
        return {
            _event: event,
            tokenId: new eth_wallet_1.BigNumber(result.tokenId),
            attribute: new eth_wallet_1.BigNumber(result.attribute)
        };
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
    parseBaseURIEvent(receipt) {
        return this.parseEvents(receipt, "BaseURI").map(e => this.decodeBaseURIEvent(e));
    }
    decodeBaseURIEvent(event) {
        let result = event.data;
        return {
            _event: event,
            baseURI: result.baseURI
        };
    }
    parseCapEvent(receipt) {
        return this.parseEvents(receipt, "Cap").map(e => this.decodeCapEvent(e));
    }
    decodeCapEvent(event) {
        let result = event.data;
        return {
            _event: event,
            cap: new eth_wallet_1.BigNumber(result.cap)
        };
    }
    parseCustomAttributeEvent(receipt) {
        return this.parseEvents(receipt, "CustomAttribute").map(e => this.decodeCustomAttributeEvent(e));
    }
    decodeCustomAttributeEvent(event) {
        let result = event.data;
        return {
            _event: event,
            tokenId: new eth_wallet_1.BigNumber(result.tokenId),
            attribute: new eth_wallet_1.BigNumber(result.attribute)
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
    parseMinimumStakeEvent(receipt) {
        return this.parseEvents(receipt, "MinimumStake").map(e => this.decodeMinimumStakeEvent(e));
    }
    decodeMinimumStakeEvent(event) {
        let result = event.data;
        return {
            _event: event,
            minimumStake: new eth_wallet_1.BigNumber(result.minimumStake)
        };
    }
    parseProtocolFeeEvent(receipt) {
        return this.parseEvents(receipt, "ProtocolFee").map(e => this.decodeProtocolFeeEvent(e));
    }
    decodeProtocolFeeEvent(event) {
        let result = event.data;
        return {
            _event: event,
            protocolFee: new eth_wallet_1.BigNumber(result.protocolFee),
            protocolFeeTo: result.protocolFeeTo
        };
    }
    parseStakeEvent(receipt) {
        return this.parseEvents(receipt, "Stake").map(e => this.decodeStakeEvent(e));
    }
    decodeStakeEvent(event) {
        let result = event.data;
        return {
            _event: event,
            who: result.who,
            tokenId: new eth_wallet_1.BigNumber(result.tokenId),
            amount: new eth_wallet_1.BigNumber(result.amount)
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
    parseTransferEvent(receipt) {
        return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event) {
        let result = event.data;
        return {
            _event: event,
            from: result.from,
            to: result.to,
            tokenId: new eth_wallet_1.BigNumber(result.tokenId)
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
    parseUnstakeEvent(receipt) {
        return this.parseEvents(receipt, "Unstake").map(e => this.decodeUnstakeEvent(e));
    }
    decodeUnstakeEvent(event) {
        let result = event.data;
        return {
            _event: event,
            who: result.who,
            tokenId: new eth_wallet_1.BigNumber(result.tokenId),
            amount: new eth_wallet_1.BigNumber(result.amount)
        };
    }
    async _attributes(param1) {
        let result = await this.methods('_attributes', eth_wallet_1.Utils.toString(param1));
        return new eth_wallet_1.BigNumber(result);
    }
    async _customAttributes(param1) {
        let result = await this.methods('_customAttributes', eth_wallet_1.Utils.toString(param1));
        return new eth_wallet_1.BigNumber(result);
    }
    async approve(params) {
        let result = await this.methods('approve', params.to, eth_wallet_1.Utils.toString(params.tokenId));
        return result;
    }
    async approvedStaker(param1) {
        let result = await this.methods('approvedStaker', param1);
        return result;
    }
    async balanceOf(owner) {
        let result = await this.methods('balanceOf', owner);
        return new eth_wallet_1.BigNumber(result);
    }
    async baseURI() {
        let result = await this.methods('baseURI');
        return result;
    }
    async batchApprove(stakers) {
        let result = await this.methods('batchApprove', stakers);
        return result;
    }
    async cap() {
        let result = await this.methods('cap');
        return new eth_wallet_1.BigNumber(result);
    }
    async counter() {
        let result = await this.methods('counter');
        return new eth_wallet_1.BigNumber(result);
    }
    async creationTime(param1) {
        let result = await this.methods('creationTime', eth_wallet_1.Utils.toString(param1));
        return new eth_wallet_1.BigNumber(result);
    }
    async deny(user) {
        let result = await this.methods('deny', user);
        return result;
    }
    async getApproved(tokenId) {
        let result = await this.methods('getApproved', eth_wallet_1.Utils.toString(tokenId));
        return result;
    }
    async getAttributes1(params) {
        let result = await this.methods('getAttributes1', eth_wallet_1.Utils.toString(params.tokenId), eth_wallet_1.Utils.toString(params.base), eth_wallet_1.Utils.toString(params.offset), eth_wallet_1.Utils.toString(params.digits));
        return new eth_wallet_1.BigNumber(result);
    }
    async getAttributes2(params) {
        let result = await this.methods('getAttributes2', eth_wallet_1.Utils.toString(params.tokenId), eth_wallet_1.Utils.toString(params.base), eth_wallet_1.Utils.toString(params.digits));
        return result;
    }
    async isApprovedForAll(params) {
        let result = await this.methods('isApprovedForAll', params.owner, params.operator);
        return result;
    }
    async isPermitted(param1) {
        let result = await this.methods('isPermitted', param1);
        return result;
    }
    async minimumStake() {
        let result = await this.methods('minimumStake');
        return new eth_wallet_1.BigNumber(result);
    }
    async minted(param1) {
        let result = await this.methods('minted', param1);
        return result;
    }
    async name() {
        let result = await this.methods('name');
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
    async ownerOf(tokenId) {
        let result = await this.methods('ownerOf', eth_wallet_1.Utils.toString(tokenId));
        return result;
    }
    async permit(user) {
        let result = await this.methods('permit', user);
        return result;
    }
    async protocolFee() {
        let result = await this.methods('protocolFee');
        return new eth_wallet_1.BigNumber(result);
    }
    async protocolFeeBalance() {
        let result = await this.methods('protocolFeeBalance');
        return new eth_wallet_1.BigNumber(result);
    }
    async protocolFeeTo() {
        let result = await this.methods('protocolFeeTo');
        return result;
    }
    async rawFulfillRandomness(params) {
        let result = await this.methods('rawFulfillRandomness', eth_wallet_1.Utils.stringToBytes32(params.requestId), eth_wallet_1.Utils.toString(params.randomness));
        return result;
    }
    async requireApproval() {
        let result = await this.methods('requireApproval');
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
    async setApprovedStaker(params) {
        let result = await this.methods('setApprovedStaker', params.staker, params.allow);
        return result;
    }
    async setBaseURI(baseURI) {
        let result = await this.methods('setBaseURI', baseURI);
        return result;
    }
    async setCap(cap) {
        let result = await this.methods('setCap', eth_wallet_1.Utils.toString(cap));
        return result;
    }
    async setCustomAttribute(params) {
        let result = await this.methods('setCustomAttribute', eth_wallet_1.Utils.toString(params.tokenId), eth_wallet_1.Utils.toString(params.attribute));
        return result;
    }
    async setMinimumStake(minimumStake) {
        let result = await this.methods('setMinimumStake', eth_wallet_1.Utils.toString(minimumStake));
        return result;
    }
    async setProtocolFee(params) {
        let result = await this.methods('setProtocolFee', eth_wallet_1.Utils.toString(params.protocolFee), params.protocolFeeTo);
        return result;
    }
    async setVrfParams(params) {
        let result = await this.methods('setVrfParams', eth_wallet_1.Utils.stringToBytes32(params.vrfKeyHash), eth_wallet_1.Utils.toString(params.vrfFee));
        return result;
    }
    async stake(amount) {
        let result = await this.methods('stake', eth_wallet_1.Utils.toString(amount));
        return result;
    }
    async stakeToken() {
        let result = await this.methods('stakeToken');
        return result;
    }
    async stakingBalance(param1) {
        let result = await this.methods('stakingBalance', eth_wallet_1.Utils.toString(param1));
        return new eth_wallet_1.BigNumber(result);
    }
    async supportsInterface(interfaceId) {
        let result = await this.methods('supportsInterface', interfaceId);
        return result;
    }
    async symbol() {
        let result = await this.methods('symbol');
        return result;
    }
    async takeOwnership() {
        let result = await this.methods('takeOwnership');
        return result;
    }
    async tokenByIndex(index) {
        let result = await this.methods('tokenByIndex', eth_wallet_1.Utils.toString(index));
        return new eth_wallet_1.BigNumber(result);
    }
    async tokenOfOwnerByIndex(params) {
        let result = await this.methods('tokenOfOwnerByIndex', params.owner, eth_wallet_1.Utils.toString(params.index));
        return new eth_wallet_1.BigNumber(result);
    }
    async tokenURI(tokenId) {
        let result = await this.methods('tokenURI', eth_wallet_1.Utils.toString(tokenId));
        return result;
    }
    async totalSupply() {
        let result = await this.methods('totalSupply');
        return new eth_wallet_1.BigNumber(result);
    }
    async transferFrom(params) {
        let result = await this.methods('transferFrom', params.from, params.to, eth_wallet_1.Utils.toString(params.tokenId));
        return result;
    }
    async transferOwnership(newOwner) {
        let result = await this.methods('transferOwnership', newOwner);
        return result;
    }
    async transferProtocolFee() {
        let result = await this.methods('transferProtocolFee');
        return result;
    }
    async unstake(tokenId) {
        let result = await this.methods('unstake', eth_wallet_1.Utils.toString(tokenId));
        return result;
    }
    async withdrawLink(amount) {
        let result = await this.methods('withdrawLink', eth_wallet_1.Utils.toString(amount));
        return result;
    }
}
exports.TrollNFT_VRF = TrollNFT_VRF;

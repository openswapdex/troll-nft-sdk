"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrollNFT_VRFV2 = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const TrollNFT_VRFV2_json_1 = __importDefault(require("./TrollNFT_VRFV2.json"));
class TrollNFT_VRFV2 extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, TrollNFT_VRFV2_json_1.default.abi, TrollNFT_VRFV2_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this._deploy(params.name, params.symbol, params.baseURI, eth_wallet_1.Utils.toString(params.cap), params.stakeToken, params.requireApproval, eth_wallet_1.Utils.toString(params.minimumStake), eth_wallet_1.Utils.toString(params.protocolFee), params.protocolFeeTo, [params.nftInfo.listValidNFTs, eth_wallet_1.Utils.toString(params.nftInfo.maximumValidNFTs)], [params.vrfInfo.vrfAddresses, eth_wallet_1.Utils.stringToBytes32(params.vrfInfo.vrfParams)]);
    }
    parseAddStakesEvent(receipt) {
        return this.parseEvents(receipt, "AddStakes").map(e => this.decodeAddStakesEvent(e));
    }
    decodeAddStakesEvent(event) {
        let result = event.data;
        return {
            tokenId: new eth_wallet_1.BigNumber(result.tokenId),
            amountAdded: new eth_wallet_1.BigNumber(result.amountAdded),
            newAmount: new eth_wallet_1.BigNumber(result.newAmount),
            _event: event
        };
    }
    parseAddValidNFTEvent(receipt) {
        return this.parseEvents(receipt, "AddValidNFT").map(e => this.decodeAddValidNFTEvent(e));
    }
    decodeAddValidNFTEvent(event) {
        let result = event.data;
        return {
            nft: result.nft,
            _event: event
        };
    }
    parseApprovalEvent(receipt) {
        return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            approved: result.approved,
            tokenId: new eth_wallet_1.BigNumber(result.tokenId),
            _event: event
        };
    }
    parseApprovalForAllEvent(receipt) {
        return this.parseEvents(receipt, "ApprovalForAll").map(e => this.decodeApprovalForAllEvent(e));
    }
    decodeApprovalForAllEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            operator: result.operator,
            approved: result.approved,
            _event: event
        };
    }
    parseApprovedStakerEvent(receipt) {
        return this.parseEvents(receipt, "ApprovedStaker").map(e => this.decodeApprovedStakerEvent(e));
    }
    decodeApprovedStakerEvent(event) {
        let result = event.data;
        return {
            staker: result.staker,
            allow: result.allow,
            _event: event
        };
    }
    parseAttributeEvent(receipt) {
        return this.parseEvents(receipt, "Attribute").map(e => this.decodeAttributeEvent(e));
    }
    decodeAttributeEvent(event) {
        let result = event.data;
        return {
            tokenId: new eth_wallet_1.BigNumber(result.tokenId),
            attribute: new eth_wallet_1.BigNumber(result.attribute),
            _event: event
        };
    }
    parseAuthorizeEvent(receipt) {
        return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseBaseURIEvent(receipt) {
        return this.parseEvents(receipt, "BaseURI").map(e => this.decodeBaseURIEvent(e));
    }
    decodeBaseURIEvent(event) {
        let result = event.data;
        return {
            baseURI: result.baseURI,
            _event: event
        };
    }
    parseCapEvent(receipt) {
        return this.parseEvents(receipt, "Cap").map(e => this.decodeCapEvent(e));
    }
    decodeCapEvent(event) {
        let result = event.data;
        return {
            cap: new eth_wallet_1.BigNumber(result.cap),
            _event: event
        };
    }
    parseCustomAttributeEvent(receipt) {
        return this.parseEvents(receipt, "CustomAttribute").map(e => this.decodeCustomAttributeEvent(e));
    }
    decodeCustomAttributeEvent(event) {
        let result = event.data;
        return {
            tokenId: new eth_wallet_1.BigNumber(result.tokenId),
            attribute: new eth_wallet_1.BigNumber(result.attribute),
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt) {
        return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseEquipNFTEvent(receipt) {
        return this.parseEvents(receipt, "EquipNFT").map(e => this.decodeEquipNFTEvent(e));
    }
    decodeEquipNFTEvent(event) {
        let result = event.data;
        return {
            trollId: new eth_wallet_1.BigNumber(result.trollId),
            nft: result.nft,
            nftId: new eth_wallet_1.BigNumber(result.nftId),
            _event: event
        };
    }
    parseMinimumStakeEvent(receipt) {
        return this.parseEvents(receipt, "MinimumStake").map(e => this.decodeMinimumStakeEvent(e));
    }
    decodeMinimumStakeEvent(event) {
        let result = event.data;
        return {
            minimumStake: new eth_wallet_1.BigNumber(result.minimumStake),
            _event: event
        };
    }
    parseProtocolFeeEvent(receipt) {
        return this.parseEvents(receipt, "ProtocolFee").map(e => this.decodeProtocolFeeEvent(e));
    }
    decodeProtocolFeeEvent(event) {
        let result = event.data;
        return {
            protocolFee: new eth_wallet_1.BigNumber(result.protocolFee),
            protocolFeeTo: result.protocolFeeTo,
            _event: event
        };
    }
    parseStakeEvent(receipt) {
        return this.parseEvents(receipt, "Stake").map(e => this.decodeStakeEvent(e));
    }
    decodeStakeEvent(event) {
        let result = event.data;
        return {
            who: result.who,
            tokenId: new eth_wallet_1.BigNumber(result.tokenId),
            amount: new eth_wallet_1.BigNumber(result.amount),
            _event: event
        };
    }
    parseStakesApprovalEvent(receipt) {
        return this.parseEvents(receipt, "StakesApproval").map(e => this.decodeStakesApprovalEvent(e));
    }
    decodeStakesApprovalEvent(event) {
        let result = event.data;
        return {
            fromTokenId: new eth_wallet_1.BigNumber(result.fromTokenId),
            spender: result.spender,
            amount: new eth_wallet_1.BigNumber(result.amount),
            _event: event
        };
    }
    parseStakesTransferEvent(receipt) {
        return this.parseEvents(receipt, "StakesTransfer").map(e => this.decodeStakesTransferEvent(e));
    }
    decodeStakesTransferEvent(event) {
        let result = event.data;
        return {
            fromTokenId: new eth_wallet_1.BigNumber(result.fromTokenId),
            toTokenId: new eth_wallet_1.BigNumber(result.toTokenId),
            amount: new eth_wallet_1.BigNumber(result.amount),
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt) {
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferEvent(receipt) {
        return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event) {
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            tokenId: new eth_wallet_1.BigNumber(result.tokenId),
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt) {
        return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUnequipNFTEvent(receipt) {
        return this.parseEvents(receipt, "UnequipNFT").map(e => this.decodeUnequipNFTEvent(e));
    }
    decodeUnequipNFTEvent(event) {
        let result = event.data;
        return {
            trollId: new eth_wallet_1.BigNumber(result.trollId),
            nft: result.nft,
            nftId: new eth_wallet_1.BigNumber(result.nftId),
            _event: event
        };
    }
    parseUnstakeEvent(receipt) {
        return this.parseEvents(receipt, "Unstake").map(e => this.decodeUnstakeEvent(e));
    }
    decodeUnstakeEvent(event) {
        let result = event.data;
        return {
            who: result.who,
            tokenId: new eth_wallet_1.BigNumber(result.tokenId),
            amount: new eth_wallet_1.BigNumber(result.amount),
            _event: event
        };
    }
    async _attributes(param1) {
        let result = await this.call('_attributes', [eth_wallet_1.Utils.toString(param1)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async _customAttributes(param1) {
        let result = await this.call('_customAttributes', [eth_wallet_1.Utils.toString(param1)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async _stakesTransferAllowances(params) {
        let result = await this.call('_stakesTransferAllowances', [eth_wallet_1.Utils.toString(params.param1), params.param2]);
        return new eth_wallet_1.BigNumber(result);
    }
    async addStakes_send(params) {
        let result = await this.send('addStakes', [eth_wallet_1.Utils.toString(params.tokenId), eth_wallet_1.Utils.toString(params.amount)]);
        return result;
    }
    async addStakes_call(params) {
        let result = await this.call('addStakes', [eth_wallet_1.Utils.toString(params.tokenId), eth_wallet_1.Utils.toString(params.amount)]);
        return;
    }
    async addValidNFTs_send(nfts) {
        let result = await this.send('addValidNFTs', [nfts]);
        return result;
    }
    async addValidNFTs_call(nfts) {
        let result = await this.call('addValidNFTs', [nfts]);
        return;
    }
    async approve_send(params) {
        let result = await this.send('approve', [params.to, eth_wallet_1.Utils.toString(params.tokenId)]);
        return result;
    }
    async approve_call(params) {
        let result = await this.call('approve', [params.to, eth_wallet_1.Utils.toString(params.tokenId)]);
        return;
    }
    async approvedStaker(param1) {
        let result = await this.call('approvedStaker', [param1]);
        return result;
    }
    async balanceOf(owner) {
        let result = await this.call('balanceOf', [owner]);
        return new eth_wallet_1.BigNumber(result);
    }
    async baseURI() {
        let result = await this.call('baseURI');
        return result;
    }
    async batchApprove_send(stakers) {
        let result = await this.send('batchApprove', [stakers]);
        return result;
    }
    async batchApprove_call(stakers) {
        let result = await this.call('batchApprove', [stakers]);
        return;
    }
    async cap() {
        let result = await this.call('cap');
        return new eth_wallet_1.BigNumber(result);
    }
    async counter() {
        let result = await this.call('counter');
        return new eth_wallet_1.BigNumber(result);
    }
    async creationDate(param1) {
        let result = await this.call('creationDate', [eth_wallet_1.Utils.toString(param1)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async deny_send(user) {
        let result = await this.send('deny', [user]);
        return result;
    }
    async deny_call(user) {
        let result = await this.call('deny', [user]);
        return;
    }
    async destoryDate(param1) {
        let result = await this.call('destoryDate', [eth_wallet_1.Utils.toString(param1)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async equipNFT_send(params) {
        let result = await this.send('equipNFT', [eth_wallet_1.Utils.toString(params.trollId), params.nft, eth_wallet_1.Utils.toString(params.nftId)]);
        return result;
    }
    async equipNFT_call(params) {
        let result = await this.call('equipNFT', [eth_wallet_1.Utils.toString(params.trollId), params.nft, eth_wallet_1.Utils.toString(params.nftId)]);
        return;
    }
    async extraStakes(param1) {
        let result = await this.call('extraStakes', [eth_wallet_1.Utils.toString(param1)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async getApproved(tokenId) {
        let result = await this.call('getApproved', [eth_wallet_1.Utils.toString(tokenId)]);
        return result;
    }
    async getAttributes1(params) {
        let result = await this.call('getAttributes1', [eth_wallet_1.Utils.toString(params.tokenId), eth_wallet_1.Utils.toString(params.base), eth_wallet_1.Utils.toString(params.offset), eth_wallet_1.Utils.toString(params.digits)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async getAttributes2(params) {
        let result = await this.call('getAttributes2', [eth_wallet_1.Utils.toString(params.tokenId), eth_wallet_1.Utils.toString(params.base), eth_wallet_1.Utils.toString(params.digits)]);
        return result.map(e => new eth_wallet_1.BigNumber(e));
    }
    async isApprovedForAll(params) {
        let result = await this.call('isApprovedForAll', [params.owner, params.operator]);
        return result;
    }
    async isPermitted(param1) {
        let result = await this.call('isPermitted', [param1]);
        return result;
    }
    async isValidNFT(param1) {
        let result = await this.call('isValidNFT', [param1]);
        return result;
    }
    async lastStakeDate(param1) {
        let result = await this.call('lastStakeDate', [eth_wallet_1.Utils.toString(param1)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async listValidNFTs(param1) {
        let result = await this.call('listValidNFTs', [eth_wallet_1.Utils.toString(param1)]);
        return result;
    }
    async maximumValidNFTs() {
        let result = await this.call('maximumValidNFTs');
        return new eth_wallet_1.BigNumber(result);
    }
    async minimumStake() {
        let result = await this.call('minimumStake');
        return new eth_wallet_1.BigNumber(result);
    }
    async minted(param1) {
        let result = await this.call('minted', [param1]);
        return result;
    }
    async name() {
        let result = await this.call('name');
        return result;
    }
    async newOwner() {
        let result = await this.call('newOwner');
        return result;
    }
    async nftsEquipped(params) {
        let result = await this.call('nftsEquipped', [params.param1, eth_wallet_1.Utils.toString(params.param2)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async owner() {
        let result = await this.call('owner');
        return result;
    }
    async ownerOf(tokenId) {
        let result = await this.call('ownerOf', [eth_wallet_1.Utils.toString(tokenId)]);
        return result;
    }
    async permit_send(user) {
        let result = await this.send('permit', [user]);
        return result;
    }
    async permit_call(user) {
        let result = await this.call('permit', [user]);
        return;
    }
    async protocolFee() {
        let result = await this.call('protocolFee');
        return new eth_wallet_1.BigNumber(result);
    }
    async protocolFeeBalance() {
        let result = await this.call('protocolFeeBalance');
        return new eth_wallet_1.BigNumber(result);
    }
    async protocolFeeTo() {
        let result = await this.call('protocolFeeTo');
        return result;
    }
    async rawFulfillRandomness_send(params) {
        let result = await this.send('rawFulfillRandomness', [eth_wallet_1.Utils.stringToBytes32(params.requestId), eth_wallet_1.Utils.toString(params.randomness)]);
        return result;
    }
    async rawFulfillRandomness_call(params) {
        let result = await this.call('rawFulfillRandomness', [eth_wallet_1.Utils.stringToBytes32(params.requestId), eth_wallet_1.Utils.toString(params.randomness)]);
        return;
    }
    async requireApproval() {
        let result = await this.call('requireApproval');
        return result;
    }
    async safeTransferFrom_send(params) {
        let result = await this.send('safeTransferFrom', [params.from, params.to, eth_wallet_1.Utils.toString(params.tokenId)]);
        return result;
    }
    async safeTransferFrom_call(params) {
        let result = await this.call('safeTransferFrom', [params.from, params.to, eth_wallet_1.Utils.toString(params.tokenId)]);
        return;
    }
    async safeTransferFrom_1_send(params) {
        let result = await this.send('safeTransferFrom', [params.from, params.to, eth_wallet_1.Utils.toString(params.tokenId), params.data]);
        return result;
    }
    async safeTransferFrom_1_call(params) {
        let result = await this.call('safeTransferFrom', [params.from, params.to, eth_wallet_1.Utils.toString(params.tokenId), params.data]);
        return;
    }
    async setApprovalForAll_send(params) {
        let result = await this.send('setApprovalForAll', [params.operator, params.approved]);
        return result;
    }
    async setApprovalForAll_call(params) {
        let result = await this.call('setApprovalForAll', [params.operator, params.approved]);
        return;
    }
    async setApprovedStaker_send(params) {
        let result = await this.send('setApprovedStaker', [params.staker, params.allow]);
        return result;
    }
    async setApprovedStaker_call(params) {
        let result = await this.call('setApprovedStaker', [params.staker, params.allow]);
        return;
    }
    async setBaseURI_send(baseURI) {
        let result = await this.send('setBaseURI', [baseURI]);
        return result;
    }
    async setBaseURI_call(baseURI) {
        let result = await this.call('setBaseURI', [baseURI]);
        return;
    }
    async setCap_send(cap) {
        let result = await this.send('setCap', [eth_wallet_1.Utils.toString(cap)]);
        return result;
    }
    async setCap_call(cap) {
        let result = await this.call('setCap', [eth_wallet_1.Utils.toString(cap)]);
        return;
    }
    async setCustomAttribute_send(params) {
        let result = await this.send('setCustomAttribute', [eth_wallet_1.Utils.toString(params.tokenId), eth_wallet_1.Utils.toString(params.attribute)]);
        return result;
    }
    async setCustomAttribute_call(params) {
        let result = await this.call('setCustomAttribute', [eth_wallet_1.Utils.toString(params.tokenId), eth_wallet_1.Utils.toString(params.attribute)]);
        return;
    }
    async setMinimumStake_send(minimumStake) {
        let result = await this.send('setMinimumStake', [eth_wallet_1.Utils.toString(minimumStake)]);
        return result;
    }
    async setMinimumStake_call(minimumStake) {
        let result = await this.call('setMinimumStake', [eth_wallet_1.Utils.toString(minimumStake)]);
        return;
    }
    async setProtocolFee_send(params) {
        let result = await this.send('setProtocolFee', [eth_wallet_1.Utils.toString(params.protocolFee), params.protocolFeeTo]);
        return result;
    }
    async setProtocolFee_call(params) {
        let result = await this.call('setProtocolFee', [eth_wallet_1.Utils.toString(params.protocolFee), params.protocolFeeTo]);
        return;
    }
    async setVrfParams_send(params) {
        let result = await this.send('setVrfParams', [eth_wallet_1.Utils.stringToBytes32(params.vrfKeyHash), eth_wallet_1.Utils.toString(params.vrfFee)]);
        return result;
    }
    async setVrfParams_call(params) {
        let result = await this.call('setVrfParams', [eth_wallet_1.Utils.stringToBytes32(params.vrfKeyHash), eth_wallet_1.Utils.toString(params.vrfFee)]);
        return;
    }
    async stake_send(amount) {
        let result = await this.send('stake', [eth_wallet_1.Utils.toString(amount)]);
        return result;
    }
    async stake_call(amount) {
        let result = await this.call('stake', [eth_wallet_1.Utils.toString(amount)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async stakeToken() {
        let result = await this.call('stakeToken');
        return result;
    }
    async stakingBalance(param1) {
        let result = await this.call('stakingBalance', [eth_wallet_1.Utils.toString(param1)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async supportsInterface(interfaceId) {
        let result = await this.call('supportsInterface', [interfaceId]);
        return result;
    }
    async symbol() {
        let result = await this.call('symbol');
        return result;
    }
    async takeOwnership_send() {
        let result = await this.send('takeOwnership');
        return result;
    }
    async takeOwnership_call() {
        let result = await this.call('takeOwnership');
        return;
    }
    async tokenByIndex(index) {
        let result = await this.call('tokenByIndex', [eth_wallet_1.Utils.toString(index)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async tokenOfOwnerByIndex(params) {
        let result = await this.call('tokenOfOwnerByIndex', [params.owner, eth_wallet_1.Utils.toString(params.index)]);
        return new eth_wallet_1.BigNumber(result);
    }
    async tokenURI(tokenId) {
        let result = await this.call('tokenURI', [eth_wallet_1.Utils.toString(tokenId)]);
        return result;
    }
    async totalSupply() {
        let result = await this.call('totalSupply');
        return new eth_wallet_1.BigNumber(result);
    }
    async transferFrom_send(params) {
        let result = await this.send('transferFrom', [params.from, params.to, eth_wallet_1.Utils.toString(params.tokenId)]);
        return result;
    }
    async transferFrom_call(params) {
        let result = await this.call('transferFrom', [params.from, params.to, eth_wallet_1.Utils.toString(params.tokenId)]);
        return;
    }
    async transferOwnership_send(newOwner) {
        let result = await this.send('transferOwnership', [newOwner]);
        return result;
    }
    async transferOwnership_call(newOwner) {
        let result = await this.call('transferOwnership', [newOwner]);
        return;
    }
    async transferProtocolFee_send() {
        let result = await this.send('transferProtocolFee');
        return result;
    }
    async transferProtocolFee_call() {
        let result = await this.call('transferProtocolFee');
        return;
    }
    async trollOwnedNFTs(params) {
        let result = await this.call('trollOwnedNFTs', [eth_wallet_1.Utils.toString(params.param1), params.param2]);
        return new eth_wallet_1.BigNumber(result);
    }
    async unequipNFT_send(params) {
        let result = await this.send('unequipNFT', [eth_wallet_1.Utils.toString(params.trollId), params.nft, eth_wallet_1.Utils.toString(params.nftId)]);
        return result;
    }
    async unequipNFT_call(params) {
        let result = await this.call('unequipNFT', [eth_wallet_1.Utils.toString(params.trollId), params.nft, eth_wallet_1.Utils.toString(params.nftId)]);
        return;
    }
    async unstake_send(tokenId) {
        let result = await this.send('unstake', [eth_wallet_1.Utils.toString(tokenId)]);
        return result;
    }
    async unstake_call(tokenId) {
        let result = await this.call('unstake', [eth_wallet_1.Utils.toString(tokenId)]);
        return;
    }
    async validNFTsLength() {
        let result = await this.call('validNFTsLength');
        return new eth_wallet_1.BigNumber(result);
    }
    async withdrawLink_send(amount) {
        let result = await this.send('withdrawLink', [eth_wallet_1.Utils.toString(amount)]);
        return result;
    }
    async withdrawLink_call(amount) {
        let result = await this.call('withdrawLink', [eth_wallet_1.Utils.toString(amount)]);
        return;
    }
    assign() {
        this.addStakes = Object.assign(this.addStakes_send, { call: this.addStakes_call });
        this.addValidNFTs = Object.assign(this.addValidNFTs_send, { call: this.addValidNFTs_call });
        this.approve = Object.assign(this.approve_send, { call: this.approve_call });
        this.batchApprove = Object.assign(this.batchApprove_send, { call: this.batchApprove_call });
        this.deny = Object.assign(this.deny_send, { call: this.deny_call });
        this.equipNFT = Object.assign(this.equipNFT_send, { call: this.equipNFT_call });
        this.permit = Object.assign(this.permit_send, { call: this.permit_call });
        this.rawFulfillRandomness = Object.assign(this.rawFulfillRandomness_send, { call: this.rawFulfillRandomness_call });
        this.safeTransferFrom = Object.assign(this.safeTransferFrom_send, { call: this.safeTransferFrom_call });
        this.safeTransferFrom_1 = Object.assign(this.safeTransferFrom_1_send, { call: this.safeTransferFrom_1_call });
        this.setApprovalForAll = Object.assign(this.setApprovalForAll_send, { call: this.setApprovalForAll_call });
        this.setApprovedStaker = Object.assign(this.setApprovedStaker_send, { call: this.setApprovedStaker_call });
        this.setBaseURI = Object.assign(this.setBaseURI_send, { call: this.setBaseURI_call });
        this.setCap = Object.assign(this.setCap_send, { call: this.setCap_call });
        this.setCustomAttribute = Object.assign(this.setCustomAttribute_send, { call: this.setCustomAttribute_call });
        this.setMinimumStake = Object.assign(this.setMinimumStake_send, { call: this.setMinimumStake_call });
        this.setProtocolFee = Object.assign(this.setProtocolFee_send, { call: this.setProtocolFee_call });
        this.setVrfParams = Object.assign(this.setVrfParams_send, { call: this.setVrfParams_call });
        this.stake = Object.assign(this.stake_send, { call: this.stake_call });
        this.takeOwnership = Object.assign(this.takeOwnership_send, { call: this.takeOwnership_call });
        this.transferFrom = Object.assign(this.transferFrom_send, { call: this.transferFrom_call });
        this.transferOwnership = Object.assign(this.transferOwnership_send, { call: this.transferOwnership_call });
        this.transferProtocolFee = Object.assign(this.transferProtocolFee_send, { call: this.transferProtocolFee_call });
        this.unequipNFT = Object.assign(this.unequipNFT_send, { call: this.unequipNFT_call });
        this.unstake = Object.assign(this.unstake_send, { call: this.unstake_call });
        this.withdrawLink = Object.assign(this.withdrawLink_send, { call: this.withdrawLink_call });
    }
}
exports.TrollNFT_VRFV2 = TrollNFT_VRFV2;

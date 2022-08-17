"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrollNFTV2 = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const TrollNFTV2_json_1 = __importDefault(require("./TrollNFTV2.json"));
class TrollNFTV2 extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, TrollNFTV2_json_1.default.abi, TrollNFTV2_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.name, params.symbol, params.baseURI, eth_wallet_1.Utils.toString(params.cap), params.stakeToken, params.requireApproval, eth_wallet_1.Utils.toString(params.minimumStake), eth_wallet_1.Utils.toString(params.protocolFee), params.protocolFeeTo, [params.nftInfo.listValidNFTs, eth_wallet_1.Utils.toString(params.nftInfo.maximumValidNFTs)]]);
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
    assign() {
        let _attributes_call = async (param1) => {
            let result = await this.call('_attributes', [eth_wallet_1.Utils.toString(param1)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this._attributes = _attributes_call;
        let _customAttributes_call = async (param1) => {
            let result = await this.call('_customAttributes', [eth_wallet_1.Utils.toString(param1)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this._customAttributes = _customAttributes_call;
        let _stakesTransferAllowancesParams = (params) => [eth_wallet_1.Utils.toString(params.param1), params.param2];
        let _stakesTransferAllowances_call = async (params) => {
            let result = await this.call('_stakesTransferAllowances', _stakesTransferAllowancesParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this._stakesTransferAllowances = _stakesTransferAllowances_call;
        let approvedStaker_call = async (param1) => {
            let result = await this.call('approvedStaker', [param1]);
            return result;
        };
        this.approvedStaker = approvedStaker_call;
        let balanceOf_call = async (owner) => {
            let result = await this.call('balanceOf', [owner]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.balanceOf = balanceOf_call;
        let baseURI_call = async () => {
            let result = await this.call('baseURI');
            return result;
        };
        this.baseURI = baseURI_call;
        let cap_call = async () => {
            let result = await this.call('cap');
            return new eth_wallet_1.BigNumber(result);
        };
        this.cap = cap_call;
        let counter_call = async () => {
            let result = await this.call('counter');
            return new eth_wallet_1.BigNumber(result);
        };
        this.counter = counter_call;
        let creationDate_call = async (param1) => {
            let result = await this.call('creationDate', [eth_wallet_1.Utils.toString(param1)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.creationDate = creationDate_call;
        let destoryDate_call = async (param1) => {
            let result = await this.call('destoryDate', [eth_wallet_1.Utils.toString(param1)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.destoryDate = destoryDate_call;
        let extraStakes_call = async (param1) => {
            let result = await this.call('extraStakes', [eth_wallet_1.Utils.toString(param1)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.extraStakes = extraStakes_call;
        let getApproved_call = async (tokenId) => {
            let result = await this.call('getApproved', [eth_wallet_1.Utils.toString(tokenId)]);
            return result;
        };
        this.getApproved = getApproved_call;
        let getAttributes1Params = (params) => [eth_wallet_1.Utils.toString(params.tokenId), eth_wallet_1.Utils.toString(params.base), eth_wallet_1.Utils.toString(params.offset), eth_wallet_1.Utils.toString(params.digits)];
        let getAttributes1_call = async (params) => {
            let result = await this.call('getAttributes1', getAttributes1Params(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.getAttributes1 = getAttributes1_call;
        let getAttributes2Params = (params) => [eth_wallet_1.Utils.toString(params.tokenId), eth_wallet_1.Utils.toString(params.base), eth_wallet_1.Utils.toString(params.digits)];
        let getAttributes2_call = async (params) => {
            let result = await this.call('getAttributes2', getAttributes2Params(params));
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.getAttributes2 = getAttributes2_call;
        let isApprovedForAllParams = (params) => [params.owner, params.operator];
        let isApprovedForAll_call = async (params) => {
            let result = await this.call('isApprovedForAll', isApprovedForAllParams(params));
            return result;
        };
        this.isApprovedForAll = isApprovedForAll_call;
        let isPermitted_call = async (param1) => {
            let result = await this.call('isPermitted', [param1]);
            return result;
        };
        this.isPermitted = isPermitted_call;
        let isValidNFT_call = async (param1) => {
            let result = await this.call('isValidNFT', [param1]);
            return result;
        };
        this.isValidNFT = isValidNFT_call;
        let lastStakeDate_call = async (param1) => {
            let result = await this.call('lastStakeDate', [eth_wallet_1.Utils.toString(param1)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.lastStakeDate = lastStakeDate_call;
        let listValidNFTs_call = async (param1) => {
            let result = await this.call('listValidNFTs', [eth_wallet_1.Utils.toString(param1)]);
            return result;
        };
        this.listValidNFTs = listValidNFTs_call;
        let maximumValidNFTs_call = async () => {
            let result = await this.call('maximumValidNFTs');
            return new eth_wallet_1.BigNumber(result);
        };
        this.maximumValidNFTs = maximumValidNFTs_call;
        let minimumStake_call = async () => {
            let result = await this.call('minimumStake');
            return new eth_wallet_1.BigNumber(result);
        };
        this.minimumStake = minimumStake_call;
        let minted_call = async (param1) => {
            let result = await this.call('minted', [param1]);
            return result;
        };
        this.minted = minted_call;
        let name_call = async () => {
            let result = await this.call('name');
            return result;
        };
        this.name = name_call;
        let newOwner_call = async () => {
            let result = await this.call('newOwner');
            return result;
        };
        this.newOwner = newOwner_call;
        let nftsEquippedParams = (params) => [params.param1, eth_wallet_1.Utils.toString(params.param2)];
        let nftsEquipped_call = async (params) => {
            let result = await this.call('nftsEquipped', nftsEquippedParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.nftsEquipped = nftsEquipped_call;
        let owner_call = async () => {
            let result = await this.call('owner');
            return result;
        };
        this.owner = owner_call;
        let ownerOf_call = async (tokenId) => {
            let result = await this.call('ownerOf', [eth_wallet_1.Utils.toString(tokenId)]);
            return result;
        };
        this.ownerOf = ownerOf_call;
        let protocolFee_call = async () => {
            let result = await this.call('protocolFee');
            return new eth_wallet_1.BigNumber(result);
        };
        this.protocolFee = protocolFee_call;
        let protocolFeeBalance_call = async () => {
            let result = await this.call('protocolFeeBalance');
            return new eth_wallet_1.BigNumber(result);
        };
        this.protocolFeeBalance = protocolFeeBalance_call;
        let protocolFeeTo_call = async () => {
            let result = await this.call('protocolFeeTo');
            return result;
        };
        this.protocolFeeTo = protocolFeeTo_call;
        let requireApproval_call = async () => {
            let result = await this.call('requireApproval');
            return result;
        };
        this.requireApproval = requireApproval_call;
        let stakeToken_call = async () => {
            let result = await this.call('stakeToken');
            return result;
        };
        this.stakeToken = stakeToken_call;
        let stakingBalance_call = async (param1) => {
            let result = await this.call('stakingBalance', [eth_wallet_1.Utils.toString(param1)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.stakingBalance = stakingBalance_call;
        let supportsInterface_call = async (interfaceId) => {
            let result = await this.call('supportsInterface', [interfaceId]);
            return result;
        };
        this.supportsInterface = supportsInterface_call;
        let symbol_call = async () => {
            let result = await this.call('symbol');
            return result;
        };
        this.symbol = symbol_call;
        let tokenByIndex_call = async (index) => {
            let result = await this.call('tokenByIndex', [eth_wallet_1.Utils.toString(index)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.tokenByIndex = tokenByIndex_call;
        let tokenOfOwnerByIndexParams = (params) => [params.owner, eth_wallet_1.Utils.toString(params.index)];
        let tokenOfOwnerByIndex_call = async (params) => {
            let result = await this.call('tokenOfOwnerByIndex', tokenOfOwnerByIndexParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.tokenOfOwnerByIndex = tokenOfOwnerByIndex_call;
        let tokenURI_call = async (tokenId) => {
            let result = await this.call('tokenURI', [eth_wallet_1.Utils.toString(tokenId)]);
            return result;
        };
        this.tokenURI = tokenURI_call;
        let totalSupply_call = async () => {
            let result = await this.call('totalSupply');
            return new eth_wallet_1.BigNumber(result);
        };
        this.totalSupply = totalSupply_call;
        let trollOwnedNFTsParams = (params) => [eth_wallet_1.Utils.toString(params.param1), params.param2];
        let trollOwnedNFTs_call = async (params) => {
            let result = await this.call('trollOwnedNFTs', trollOwnedNFTsParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.trollOwnedNFTs = trollOwnedNFTs_call;
        let validNFTsLength_call = async () => {
            let result = await this.call('validNFTsLength');
            return new eth_wallet_1.BigNumber(result);
        };
        this.validNFTsLength = validNFTsLength_call;
        let addStakesParams = (params) => [eth_wallet_1.Utils.toString(params.tokenId), eth_wallet_1.Utils.toString(params.amount)];
        let addStakes_send = async (params) => {
            let result = await this.send('addStakes', addStakesParams(params));
            return result;
        };
        let addStakes_call = async (params) => {
            let result = await this.call('addStakes', addStakesParams(params));
            return;
        };
        this.addStakes = Object.assign(addStakes_send, {
            call: addStakes_call
        });
        let addValidNFTs_send = async (nfts) => {
            let result = await this.send('addValidNFTs', [nfts]);
            return result;
        };
        let addValidNFTs_call = async (nfts) => {
            let result = await this.call('addValidNFTs', [nfts]);
            return;
        };
        this.addValidNFTs = Object.assign(addValidNFTs_send, {
            call: addValidNFTs_call
        });
        let approveParams = (params) => [params.to, eth_wallet_1.Utils.toString(params.tokenId)];
        let approve_send = async (params) => {
            let result = await this.send('approve', approveParams(params));
            return result;
        };
        let approve_call = async (params) => {
            let result = await this.call('approve', approveParams(params));
            return;
        };
        this.approve = Object.assign(approve_send, {
            call: approve_call
        });
        let batchApprove_send = async (stakers) => {
            let result = await this.send('batchApprove', [stakers]);
            return result;
        };
        let batchApprove_call = async (stakers) => {
            let result = await this.call('batchApprove', [stakers]);
            return;
        };
        this.batchApprove = Object.assign(batchApprove_send, {
            call: batchApprove_call
        });
        let deny_send = async (user) => {
            let result = await this.send('deny', [user]);
            return result;
        };
        let deny_call = async (user) => {
            let result = await this.call('deny', [user]);
            return;
        };
        this.deny = Object.assign(deny_send, {
            call: deny_call
        });
        let equipNFTParams = (params) => [eth_wallet_1.Utils.toString(params.trollId), params.nft, eth_wallet_1.Utils.toString(params.nftId)];
        let equipNFT_send = async (params) => {
            let result = await this.send('equipNFT', equipNFTParams(params));
            return result;
        };
        let equipNFT_call = async (params) => {
            let result = await this.call('equipNFT', equipNFTParams(params));
            return;
        };
        this.equipNFT = Object.assign(equipNFT_send, {
            call: equipNFT_call
        });
        let permit_send = async (user) => {
            let result = await this.send('permit', [user]);
            return result;
        };
        let permit_call = async (user) => {
            let result = await this.call('permit', [user]);
            return;
        };
        this.permit = Object.assign(permit_send, {
            call: permit_call
        });
        let safeTransferFromParams = (params) => [params.from, params.to, eth_wallet_1.Utils.toString(params.tokenId)];
        let safeTransferFrom_send = async (params) => {
            let result = await this.send('safeTransferFrom', safeTransferFromParams(params));
            return result;
        };
        let safeTransferFrom_call = async (params) => {
            let result = await this.call('safeTransferFrom', safeTransferFromParams(params));
            return;
        };
        this.safeTransferFrom = Object.assign(safeTransferFrom_send, {
            call: safeTransferFrom_call
        });
        let safeTransferFrom_1Params = (params) => [params.from, params.to, eth_wallet_1.Utils.toString(params.tokenId), eth_wallet_1.Utils.stringToBytes(params.data)];
        let safeTransferFrom_1_send = async (params) => {
            let result = await this.send('safeTransferFrom', safeTransferFromParams(params));
            return result;
        };
        let safeTransferFrom_1_call = async (params) => {
            let result = await this.call('safeTransferFrom', safeTransferFromParams(params));
            return;
        };
        this.safeTransferFrom_1 = Object.assign(safeTransferFrom_1_send, {
            call: safeTransferFrom_1_call
        });
        let setApprovalForAllParams = (params) => [params.operator, params.approved];
        let setApprovalForAll_send = async (params) => {
            let result = await this.send('setApprovalForAll', setApprovalForAllParams(params));
            return result;
        };
        let setApprovalForAll_call = async (params) => {
            let result = await this.call('setApprovalForAll', setApprovalForAllParams(params));
            return;
        };
        this.setApprovalForAll = Object.assign(setApprovalForAll_send, {
            call: setApprovalForAll_call
        });
        let setApprovedStakerParams = (params) => [params.staker, params.allow];
        let setApprovedStaker_send = async (params) => {
            let result = await this.send('setApprovedStaker', setApprovedStakerParams(params));
            return result;
        };
        let setApprovedStaker_call = async (params) => {
            let result = await this.call('setApprovedStaker', setApprovedStakerParams(params));
            return;
        };
        this.setApprovedStaker = Object.assign(setApprovedStaker_send, {
            call: setApprovedStaker_call
        });
        let setBaseURI_send = async (baseURI) => {
            let result = await this.send('setBaseURI', [baseURI]);
            return result;
        };
        let setBaseURI_call = async (baseURI) => {
            let result = await this.call('setBaseURI', [baseURI]);
            return;
        };
        this.setBaseURI = Object.assign(setBaseURI_send, {
            call: setBaseURI_call
        });
        let setCap_send = async (cap) => {
            let result = await this.send('setCap', [eth_wallet_1.Utils.toString(cap)]);
            return result;
        };
        let setCap_call = async (cap) => {
            let result = await this.call('setCap', [eth_wallet_1.Utils.toString(cap)]);
            return;
        };
        this.setCap = Object.assign(setCap_send, {
            call: setCap_call
        });
        let setCustomAttributeParams = (params) => [eth_wallet_1.Utils.toString(params.tokenId), eth_wallet_1.Utils.toString(params.attribute)];
        let setCustomAttribute_send = async (params) => {
            let result = await this.send('setCustomAttribute', setCustomAttributeParams(params));
            return result;
        };
        let setCustomAttribute_call = async (params) => {
            let result = await this.call('setCustomAttribute', setCustomAttributeParams(params));
            return;
        };
        this.setCustomAttribute = Object.assign(setCustomAttribute_send, {
            call: setCustomAttribute_call
        });
        let setMinimumStake_send = async (minimumStake) => {
            let result = await this.send('setMinimumStake', [eth_wallet_1.Utils.toString(minimumStake)]);
            return result;
        };
        let setMinimumStake_call = async (minimumStake) => {
            let result = await this.call('setMinimumStake', [eth_wallet_1.Utils.toString(minimumStake)]);
            return;
        };
        this.setMinimumStake = Object.assign(setMinimumStake_send, {
            call: setMinimumStake_call
        });
        let setProtocolFeeParams = (params) => [eth_wallet_1.Utils.toString(params.protocolFee), params.protocolFeeTo];
        let setProtocolFee_send = async (params) => {
            let result = await this.send('setProtocolFee', setProtocolFeeParams(params));
            return result;
        };
        let setProtocolFee_call = async (params) => {
            let result = await this.call('setProtocolFee', setProtocolFeeParams(params));
            return;
        };
        this.setProtocolFee = Object.assign(setProtocolFee_send, {
            call: setProtocolFee_call
        });
        let stake_send = async (amount) => {
            let result = await this.send('stake', [eth_wallet_1.Utils.toString(amount)]);
            return result;
        };
        let stake_call = async (amount) => {
            let result = await this.call('stake', [eth_wallet_1.Utils.toString(amount)]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.stake = Object.assign(stake_send, {
            call: stake_call
        });
        let takeOwnership_send = async () => {
            let result = await this.send('takeOwnership');
            return result;
        };
        let takeOwnership_call = async () => {
            let result = await this.call('takeOwnership');
            return;
        };
        this.takeOwnership = Object.assign(takeOwnership_send, {
            call: takeOwnership_call
        });
        let transferFromParams = (params) => [params.from, params.to, eth_wallet_1.Utils.toString(params.tokenId)];
        let transferFrom_send = async (params) => {
            let result = await this.send('transferFrom', transferFromParams(params));
            return result;
        };
        let transferFrom_call = async (params) => {
            let result = await this.call('transferFrom', transferFromParams(params));
            return;
        };
        this.transferFrom = Object.assign(transferFrom_send, {
            call: transferFrom_call
        });
        let transferOwnership_send = async (newOwner) => {
            let result = await this.send('transferOwnership', [newOwner]);
            return result;
        };
        let transferOwnership_call = async (newOwner) => {
            let result = await this.call('transferOwnership', [newOwner]);
            return;
        };
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call: transferOwnership_call
        });
        let transferProtocolFee_send = async () => {
            let result = await this.send('transferProtocolFee');
            return result;
        };
        let transferProtocolFee_call = async () => {
            let result = await this.call('transferProtocolFee');
            return;
        };
        this.transferProtocolFee = Object.assign(transferProtocolFee_send, {
            call: transferProtocolFee_call
        });
        let unequipNFTParams = (params) => [eth_wallet_1.Utils.toString(params.trollId), params.nft, eth_wallet_1.Utils.toString(params.nftId)];
        let unequipNFT_send = async (params) => {
            let result = await this.send('unequipNFT', unequipNFTParams(params));
            return result;
        };
        let unequipNFT_call = async (params) => {
            let result = await this.call('unequipNFT', unequipNFTParams(params));
            return;
        };
        this.unequipNFT = Object.assign(unequipNFT_send, {
            call: unequipNFT_call
        });
        let unstake_send = async (tokenId) => {
            let result = await this.send('unstake', [eth_wallet_1.Utils.toString(tokenId)]);
            return result;
        };
        let unstake_call = async (tokenId) => {
            let result = await this.call('unstake', [eth_wallet_1.Utils.toString(tokenId)]);
            return;
        };
        this.unstake = Object.assign(unstake_send, {
            call: unstake_call
        });
    }
}
exports.TrollNFTV2 = TrollNFTV2;

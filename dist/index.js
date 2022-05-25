define('@openswapdex/troll-nft-sdk', (require, exports)=>{
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// src/index.ts
__export(exports, {
  Contracts: () => contracts_exports
});

// src/contracts/index.ts
var contracts_exports = {};
__export(contracts_exports, {
  Authorization: () => Authorization,
  ERC721: () => ERC721,
  TrollNFT: () => TrollNFT,
  TrollNFTV2: () => TrollNFTV2,
  TrollNFT_VRF: () => TrollNFT_VRF,
  TrollNFT_VRFV2: () => TrollNFT_VRFV2
});

// src/contracts/@openzeppelin/contracts/token/ERC721/ERC721.ts
var import_eth_wallet = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/@openzeppelin/contracts/token/ERC721/ERC721.json.ts
var ERC721_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" },
    { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "60806040523480156200001157600080fd5b5060405162001baf38038062001baf8339810160408190526200003491620001c1565b81516200004990600090602085019062000068565b5080516200005f90600190602084019062000068565b5050506200027b565b828054620000769062000228565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b600082601f8301126200011f578081fd5b81516001600160401b03808211156200013c576200013c62000265565b604051601f8301601f19908116603f0116810190828211818310171562000167576200016762000265565b8160405283815260209250868385880101111562000183578485fd5b8491505b83821015620001a6578582018301518183018401529082019062000187565b83821115620001b757848385830101525b9695505050505050565b60008060408385031215620001d4578182fd5b82516001600160401b0380821115620001eb578384fd5b620001f9868387016200010e565b935060208501519150808211156200020f578283fd5b506200021e858286016200010e565b9150509250929050565b600181811c908216806200023d57607f821691505b602082108114156200025f57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b611924806200028b6000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101d0578063b88d4fde146101e3578063c87b56dd146101f6578063e985e9c51461020957600080fd5b80636352211e1461019457806370a08231146101a757806395d89b41146101c857600080fd5b8063095ea7b3116100bd578063095ea7b31461015957806323b872dd1461016e57806342842e0e1461018157600080fd5b806301ffc9a7146100e457806306fdde031461010c578063081812fc14610121575b600080fd5b6100f76100f23660046115fb565b610252565b60405190151581526020015b60405180910390f35b610114610337565b604051610103919061170d565b61013461012f366004611633565b6103c9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610103565b61016c6101673660046115d2565b6104a8565b005b61016c61017c36600461146a565b610635565b61016c61018f36600461146a565b6106d6565b6101346101a2366004611633565b6106f1565b6101ba6101b536600461141e565b6107a3565b604051908152602001610103565b610114610871565b61016c6101de366004611598565b610880565b61016c6101f13660046114a5565b610997565b610114610204366004611633565b610a3f565b6100f7610217366004611438565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260056020908152604080832093909416825291909152205460ff1690565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd0000000000000000000000000000000000000000000000000000000014806102e557507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061033157507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6060600080546103469061178f565b80601f01602080910402602001604051908101604052809291908181526020018280546103729061178f565b80156103bf5780601f10610394576101008083540402835291602001916103bf565b820191906000526020600020905b8154815290600101906020018083116103a257829003601f168201915b5050505050905090565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff1661047f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5060009081526004602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b60006104b3826106f1565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610571576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f72000000000000000000000000000000000000000000000000000000000000006064820152608401610476565b3373ffffffffffffffffffffffffffffffffffffffff8216148061059a575061059a8133610217565b610626576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610476565b6106308383610b5c565b505050565b61063f3382610bfc565b6106cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f7665640000000000000000000000000000006064820152608401610476565b610630838383610d6c565b61063083838360405180602001604052806000815250610997565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff1680610331576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e00000000000000000000000000000000000000000000006064820152608401610476565b600073ffffffffffffffffffffffffffffffffffffffff8216610848576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f2061646472657373000000000000000000000000000000000000000000006064820152608401610476565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b6060600180546103469061178f565b73ffffffffffffffffffffffffffffffffffffffff8216331415610900576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610476565b33600081815260056020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6109a13383610bfc565b610a2d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f7665640000000000000000000000000000006064820152608401610476565b610a3984848484610fd3565b50505050565b60008181526002602052604090205460609073ffffffffffffffffffffffffffffffffffffffff16610af3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e00000000000000000000000000000000006064820152608401610476565b6000610b0a60408051602081019091526000815290565b90506000815111610b2a5760405180602001604052806000815250610b55565b80610b3484611076565b604051602001610b45929190611695565b6040516020818303038152906040525b9392505050565b600081815260046020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff84169081179091558190610bb6826106f1565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff16610cad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e00000000000000000000000000000000000000006064820152608401610476565b6000610cb8836106f1565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610d2757508373ffffffffffffffffffffffffffffffffffffffff16610d0f846103c9565b73ffffffffffffffffffffffffffffffffffffffff16145b80610d64575073ffffffffffffffffffffffffffffffffffffffff80821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b8273ffffffffffffffffffffffffffffffffffffffff16610d8c826106f1565b73ffffffffffffffffffffffffffffffffffffffff1614610e2f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e00000000000000000000000000000000000000000000006064820152608401610476565b73ffffffffffffffffffffffffffffffffffffffff8216610ed1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610476565b610edc600082610b5c565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600360205260408120805460019290610f1290849061174c565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000908152600360205260408120805460019290610f4d908490611720565b909155505060008181526002602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff86811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610fde848484610d6c565b610fea848484846111f6565b610a39576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610476565b6060816110b657505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b81156110e057806110ca816117e3565b91506110d99050600a83611738565b91506110ba565b60008167ffffffffffffffff811115611122577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561114c576020820181803683370190505b5090505b8415610d645761116160018361174c565b915061116e600a8661181c565b611179906030611720565b60f81b8183815181106111b5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506111ef600a86611738565b9450611150565b600073ffffffffffffffffffffffffffffffffffffffff84163b156113ea576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a029061126d9033908990889088906004016116c4565b602060405180830381600087803b15801561128757600080fd5b505af19250505080156112d5575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526112d291810190611617565b60015b61139f573d808015611303576040519150601f19603f3d011682016040523d82523d6000602084013e611308565b606091505b508051611397576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610476565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050610d64565b506001949350505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461141957600080fd5b919050565b60006020828403121561142f578081fd5b610b55826113f5565b6000806040838503121561144a578081fd5b611453836113f5565b9150611461602084016113f5565b90509250929050565b60008060006060848603121561147e578081fd5b611487846113f5565b9250611495602085016113f5565b9150604084013590509250925092565b600080600080608085870312156114ba578081fd5b6114c3856113f5565b93506114d1602086016113f5565b925060408501359150606085013567ffffffffffffffff808211156114f4578283fd5b818701915087601f830112611507578283fd5b8135818111156115195761151961188e565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561155f5761155f61188e565b816040528281528a6020848701011115611577578586fd5b82602086016020830137918201602001949094529598949750929550505050565b600080604083850312156115aa578182fd5b6115b3836113f5565b9150602083013580151581146115c7578182fd5b809150509250929050565b600080604083850312156115e4578182fd5b6115ed836113f5565b946020939093013593505050565b60006020828403121561160c578081fd5b8135610b55816118bd565b600060208284031215611628578081fd5b8151610b55816118bd565b600060208284031215611644578081fd5b5035919050565b60008151808452611663816020860160208601611763565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600083516116a7818460208801611763565b8351908301906116bb818360208801611763565b01949350505050565b600073ffffffffffffffffffffffffffffffffffffffff808716835280861660208401525083604083015260806060830152611703608083018461164b565b9695505050505050565b602081526000610b55602083018461164b565b6000821982111561173357611733611830565b500190565b6000826117475761174761185f565b500490565b60008282101561175e5761175e611830565b500390565b60005b8381101561177e578181015183820152602001611766565b83811115610a395750506000910152565b600181811c908216806117a357607f821691505b602082108114156117dd577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561181557611815611830565b5060010190565b60008261182b5761182b61185f565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7fffffffff00000000000000000000000000000000000000000000000000000000811681146118eb57600080fd5b5056fea2646970667358221220922699f7c61e9b59c1ba3a3a99dc263bcead3505e4e1bbea0f6393ce5e03c2e064736f6c63430008040033"
};

// src/contracts/@openzeppelin/contracts/token/ERC721/ERC721.ts
var ERC721 = class extends import_eth_wallet.Contract {
  constructor(wallet, address) {
    super(wallet, address, ERC721_json_default.abi, ERC721_json_default.bytecode);
    this.assign();
  }
  deploy(params) {
    return this._deploy(params.name, params.symbol);
  }
  parseApprovalEvent(receipt) {
    return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
  }
  decodeApprovalEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      approved: result.approved,
      tokenId: new import_eth_wallet.BigNumber(result.tokenId),
      _event: event
    };
  }
  parseApprovalForAllEvent(receipt) {
    return this.parseEvents(receipt, "ApprovalForAll").map((e) => this.decodeApprovalForAllEvent(e));
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
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      from: result.from,
      to: result.to,
      tokenId: new import_eth_wallet.BigNumber(result.tokenId),
      _event: event
    };
  }
  async approve_send(params) {
    let result = await this.send("approve", [params.to, import_eth_wallet.Utils.toString(params.tokenId)]);
    return result;
  }
  async approve_call(params) {
    let result = await this.call("approve", [params.to, import_eth_wallet.Utils.toString(params.tokenId)]);
    return;
  }
  async balanceOf(owner) {
    let result = await this.call("balanceOf", [owner]);
    return new import_eth_wallet.BigNumber(result);
  }
  async getApproved(tokenId) {
    let result = await this.call("getApproved", [import_eth_wallet.Utils.toString(tokenId)]);
    return result;
  }
  async isApprovedForAll(params) {
    let result = await this.call("isApprovedForAll", [params.owner, params.operator]);
    return result;
  }
  async name() {
    let result = await this.call("name");
    return result;
  }
  async ownerOf(tokenId) {
    let result = await this.call("ownerOf", [import_eth_wallet.Utils.toString(tokenId)]);
    return result;
  }
  async safeTransferFrom_send(params) {
    let result = await this.send("safeTransferFrom", [params.from, params.to, import_eth_wallet.Utils.toString(params.tokenId)]);
    return result;
  }
  async safeTransferFrom_call(params) {
    let result = await this.call("safeTransferFrom", [params.from, params.to, import_eth_wallet.Utils.toString(params.tokenId)]);
    return;
  }
  async safeTransferFrom_1_send(params) {
    let result = await this.send("safeTransferFrom", [params.from, params.to, import_eth_wallet.Utils.toString(params.tokenId), params.data]);
    return result;
  }
  async safeTransferFrom_1_call(params) {
    let result = await this.call("safeTransferFrom", [params.from, params.to, import_eth_wallet.Utils.toString(params.tokenId), params.data]);
    return;
  }
  async setApprovalForAll_send(params) {
    let result = await this.send("setApprovalForAll", [params.operator, params.approved]);
    return result;
  }
  async setApprovalForAll_call(params) {
    let result = await this.call("setApprovalForAll", [params.operator, params.approved]);
    return;
  }
  async supportsInterface(interfaceId) {
    let result = await this.call("supportsInterface", [interfaceId]);
    return result;
  }
  async symbol() {
    let result = await this.call("symbol");
    return result;
  }
  async tokenURI(tokenId) {
    let result = await this.call("tokenURI", [import_eth_wallet.Utils.toString(tokenId)]);
    return result;
  }
  async transferFrom_send(params) {
    let result = await this.send("transferFrom", [params.from, params.to, import_eth_wallet.Utils.toString(params.tokenId)]);
    return result;
  }
  async transferFrom_call(params) {
    let result = await this.call("transferFrom", [params.from, params.to, import_eth_wallet.Utils.toString(params.tokenId)]);
    return;
  }
  assign() {
    this.approve = Object.assign(this.approve_send, { call: this.approve_call });
    this.safeTransferFrom = Object.assign(this.safeTransferFrom_send, { call: this.safeTransferFrom_call });
    this.safeTransferFrom_1 = Object.assign(this.safeTransferFrom_1_send, { call: this.safeTransferFrom_1_call });
    this.setApprovalForAll = Object.assign(this.setApprovalForAll_send, { call: this.setApprovalForAll_call });
    this.transferFrom = Object.assign(this.transferFrom_send, { call: this.transferFrom_call });
  }
};

// src/contracts/Authorization.ts
var import_eth_wallet2 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/Authorization.json.ts
var Authorization_json_default = {
  "abi": [
    { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "608060405234801561001057600080fd5b50600080546001600160a01b031916331790556104e2806100326000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80639c52a7f11161005b5780639c52a7f114610109578063a2f55ae51461011c578063d4ee1d901461012f578063f2fde38b1461014f57600080fd5b80633fd8cc4e1461008257806360536172146100ba5780638da5cb5b146100c4575b600080fd5b6100a5610090366004610471565b60026020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6100c2610162565b005b6000546100e49073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b1565b6100c2610117366004610471565b610290565b6100c261012a366004610471565b610337565b6001546100e49073ffffffffffffffffffffffffffffffffffffffff1681565b6100c261015d366004610471565b6103da565b60015473ffffffffffffffffffffffffffffffffffffffff16331461020d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840160405180910390fd5b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102b457600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff16331461035b57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf5910161032c565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103fe57600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b9060200161032c565b600060208284031215610482578081fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146104a5578182fd5b939250505056fea2646970667358221220969fcce27c06d496b8d77895f68979df4ff3898826245c8afd2d61cb3763b7e064736f6c63430008040033"
};

// src/contracts/Authorization.ts
var Authorization = class extends import_eth_wallet2.Contract {
  constructor(wallet, address) {
    super(wallet, address, Authorization_json_default.abi, Authorization_json_default.bytecode);
    this.assign();
  }
  deploy() {
    return this._deploy();
  }
  parseAuthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Authorize").map((e) => this.decodeAuthorizeEvent(e));
  }
  decodeAuthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseDeauthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Deauthorize").map((e) => this.decodeDeauthorizeEvent(e));
  }
  decodeDeauthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseStartOwnershipTransferEvent(receipt) {
    return this.parseEvents(receipt, "StartOwnershipTransfer").map((e) => this.decodeStartOwnershipTransferEvent(e));
  }
  decodeStartOwnershipTransferEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseTransferOwnershipEvent(receipt) {
    return this.parseEvents(receipt, "TransferOwnership").map((e) => this.decodeTransferOwnershipEvent(e));
  }
  decodeTransferOwnershipEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  async deny_send(user) {
    let result = await this.send("deny", [user]);
    return result;
  }
  async deny_call(user) {
    let result = await this.call("deny", [user]);
    return;
  }
  async isPermitted(param1) {
    let result = await this.call("isPermitted", [param1]);
    return result;
  }
  async newOwner() {
    let result = await this.call("newOwner");
    return result;
  }
  async owner() {
    let result = await this.call("owner");
    return result;
  }
  async permit_send(user) {
    let result = await this.send("permit", [user]);
    return result;
  }
  async permit_call(user) {
    let result = await this.call("permit", [user]);
    return;
  }
  async takeOwnership_send() {
    let result = await this.send("takeOwnership");
    return result;
  }
  async takeOwnership_call() {
    let result = await this.call("takeOwnership");
    return;
  }
  async transferOwnership_send(newOwner) {
    let result = await this.send("transferOwnership", [newOwner]);
    return result;
  }
  async transferOwnership_call(newOwner) {
    let result = await this.call("transferOwnership", [newOwner]);
    return;
  }
  assign() {
    this.deny = Object.assign(this.deny_send, { call: this.deny_call });
    this.permit = Object.assign(this.permit_send, { call: this.permit_call });
    this.takeOwnership = Object.assign(this.takeOwnership_send, { call: this.takeOwnership_call });
    this.transferOwnership = Object.assign(this.transferOwnership_send, { call: this.transferOwnership_call });
  }
};

// src/contracts/TrollNFT.ts
var import_eth_wallet3 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/TrollNFT.json.ts
var TrollNFT_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "string", "name": "__baseURI", "type": "string" }, { "internalType": "uint256", "name": "_cap", "type": "uint256" }, { "internalType": "contract IERC20", "name": "_stakeToken", "type": "address" }, { "internalType": "bool", "name": "_requireApproval", "type": "bool" }, { "internalType": "uint256", "name": "_minimumStake", "type": "uint256" }, { "internalType": "uint256", "name": "_protocolFee", "type": "uint256" }, { "internalType": "address", "name": "_protocolFeeTo", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "staker", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "allow", "type": "bool" }], "name": "ApprovedStaker", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "Attribute", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "string", "name": "baseURI", "type": "string" }], "name": "BaseURI", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "cap", "type": "uint256" }], "name": "Cap", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "CustomAttribute", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "minimumStake", "type": "uint256" }], "name": "MinimumStake", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "protocolFee", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "protocolFeeTo", "type": "address" }], "name": "ProtocolFee", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "who", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Stake", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "who", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Unstake", "type": "event" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "_attributes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "_customAttributes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "approvedStaker", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address[]", "name": "stakers", "type": "address[]" }], "name": "batchApprove", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "cap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "counter", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "creationTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "base", "type": "uint256" }, { "internalType": "uint256", "name": "offset", "type": "uint256" }, { "internalType": "uint256", "name": "digits", "type": "uint256" }], "name": "getAttributes1", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "base", "type": "uint256" }, { "internalType": "uint256[]", "name": "digits", "type": "uint256[]" }], "name": "getAttributes2", "outputs": [{ "internalType": "uint256[]", "name": "params", "type": "uint256[]" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "minimumStake", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "minted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "protocolFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "protocolFeeBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "protocolFeeTo", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "requireApproval", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "staker", "type": "address" }, { "internalType": "bool", "name": "allow", "type": "bool" }], "name": "setApprovedStaker", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "string", "name": "__baseURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_cap", "type": "uint256" }], "name": "setCap", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "setCustomAttribute", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_minimumStake", "type": "uint256" }], "name": "setMinimumStake", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_protocolFee", "type": "uint256" }, { "internalType": "address", "name": "_protocolFeeTo", "type": "address" }], "name": "setProtocolFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "stake", "outputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "stakeToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "stakingBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "transferProtocolFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "unstake", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "60a06040523480156200001157600080fd5b5060405162004a2e38038062004a2e833981016040819052620000349162000427565b600080546001600160a01b03191633179055600160035588518990899062000064906004906020850190620002a0565b5080516200007a906005906020840190620002a0565b505050818311620000d25760405162461bcd60e51b815260206004820152601c60248201527f496e76616c6964206d696e5374616b652f70726f746f636f6c4665650000000060448201526064015b60405180910390fd5b811580620000e857506001600160a01b03811615155b620001365760405162461bcd60e51b815260206004820152601960248201527f496e76616c69642070726f746f636f6c4665652f466565546f000000000000006044820152606401620000c9565b86516200014b90600f9060208a0190620002a0565b50600e869055606085901b6001600160601b0319166080526010805460ff191685151517905560118390556012829055601380546001600160a01b0319166001600160a01b0383161790556040517f01e56a02aca7f26a28165a040851ba78f30282b55ca81c63a804cdc1e2dcea7290620001c990600f906200050a565b60405180910390a17fddf4c293a3479db41117899542b2a5d272b166296d11693304a6c1eac191054b600e546040516200020591815260200190565b60405180910390a17f0be9186a0f7f1e3c3019fdaacbaffb9ea92e4aacae81a3dbcc3a18220a47380d6011546040516200024191815260200190565b60405180910390a1601254601354604080519283526001600160a01b0390911660208301527f5ecd7df85e51aff79e169c80a23d9299697dcb741138d732a78485f61370843d910160405180910390a15050505050505050506200060b565b828054620002ae90620005b8565b90600052602060002090601f016020900481019282620002d257600085556200031d565b82601f10620002ed57805160ff19168380011785556200031d565b828001600101855582156200031d579182015b828111156200031d57825182559160200191906001019062000300565b506200032b9291506200032f565b5090565b5b808211156200032b576000815560010162000330565b80516001600160a01b03811681146200035e57600080fd5b919050565b805180151581146200035e57600080fd5b600082601f83011262000385578081fd5b81516001600160401b0380821115620003a257620003a2620005f5565b604051601f8301601f19908116603f01168101908282118183101715620003cd57620003cd620005f5565b81604052838152602092508683858801011115620003e9578485fd5b8491505b838210156200040c5785820183015181830184015290820190620003ed565b838211156200041d57848385830101525b9695505050505050565b60008060008060008060008060006101208a8c03121562000446578485fd5b89516001600160401b03808211156200045d578687fd5b6200046b8d838e0162000374565b9a5060208c015191508082111562000481578687fd5b6200048f8d838e0162000374565b995060408c0151915080821115620004a5578687fd5b50620004b48c828d0162000374565b97505060608a01519550620004cc60808b0162000346565b9450620004dc60a08b0162000363565b935060c08a0151925060e08a01519150620004fb6101008b0162000346565b90509295985092959850929598565b6000602080835281845483600182811c9150808316806200052c57607f831692505b8583108114156200054b57634e487b7160e01b87526022600452602487fd5b8786018381526020018180156200056b57600181146200057d57620005a9565b60ff19861682528782019650620005a9565b60008b815260209020895b86811015620005a35781548482015290850190890162000588565b83019750505b50949998505050505050505050565b600181811c90821680620005cd57607f821691505b60208210811415620005ef57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b60805160601c6143ef6200063f600039600081816104e301528181610ef4015281816117e20152612ce401526143ef6000f3fe608060405234801561001057600080fd5b50600436106103365760003560e01c806370a08231116101b2578063b13db576116100f9578063e985e9c5116100a2578063ec5ffac21161007c578063ec5ffac214610754578063ef3692521461075d578063f0ab14ed1461077d578063f2fde38b1461079d57600080fd5b8063e985e9c5146106e5578063ea289d001461072e578063ea5ed3db1461074157600080fd5b8063d4ee1d90116100d3578063d4ee1d9014610685578063d5ae33e2146106a5578063d7930066146106c557600080fd5b8063b13db5761461063f578063b88d4fde1461065f578063c87b56dd1461067257600080fd5b806395d89b411161015b578063a2f55ae511610135578063a2f55ae514610610578063a694fc3a14610623578063b0e21e8a1461063657600080fd5b806395d89b41146105e25780639c52a7f1146105ea578063a22cb465146105fd57600080fd5b806382d5ea6c1161018c57806382d5ea6c146105955780638c8c8a50146105a25780638da5cb5b146105c257600080fd5b806370a08231146105575780637776a0e51461056a57806381fdc72b1461058d57600080fd5b8063355274ea1161028157806351ed6a301161022a57806361bc221a1161020457806361bc221a146105205780636352211e1461052957806368c1c0881461053c5780636c0360eb1461054f57600080fd5b806351ed6a30146104de57806355f804b314610505578063605361721461051857600080fd5b8063476f2d5c1161025b578063476f2d5c146104a557806347786d37146104b85780634f6ccce7146104cb57600080fd5b8063355274ea146104665780633fd8cc4e1461046f57806342842e0e1461049257600080fd5b80631e7269c5116102e35780632457c8ea116102bd5780632457c8ea1461042d5780632e17de78146104405780632f745c591461045357600080fd5b80631e7269c5146103e4578063233e99031461040757806323b872dd1461041a57600080fd5b8063095ea7b311610314578063095ea7b3146103b05780630a22d68c146103c557806318160ddd146103dc57600080fd5b806301ffc9a71461033b57806306fdde0314610363578063081812fc14610378575b600080fd5b61034e610349366004613e70565b6107b0565b60405190151581526020015b60405180910390f35b61036b61080c565b60405161035a91906140ed565b61038b610386366004613eee565b61089e565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161035a565b6103c36103be366004613deb565b61097d565b005b6103ce60145481565b60405190815260200161035a565b600c546103ce565b61034e6103f2366004613cb5565b601b6020526000908152604090205460ff1681565b6103c3610415366004613eee565b610b0a565b6103c3610428366004613d01565b610bd5565b6103c361043b366004613f28565b610c76565b6103c361044e366004613eee565b610ddc565b6103ce610461366004613deb565b610f5b565b6103ce600e5481565b61034e61047d366004613cb5565b60026020526000908152604090205460ff1681565b6103c36104a0366004613d01565b61102a565b6103ce6104b3366004613f9a565b611045565b6103c36104c6366004613eee565b611089565b6103ce6104d9366004613eee565b61114d565b61038b7f000000000000000000000000000000000000000000000000000000000000000081565b6103c3610513366004613ea8565b611232565b6103c361129a565b6103ce60155481565b61038b610537366004613eee565b6113c4565b6103c361054a366004613db5565b611476565b61036b6115bf565b6103ce610565366004613cb5565b61164d565b61034e610578366004613cb5565b601a6020526000908152604090205460ff1681565b6103c361171b565b60105461034e9060ff1681565b6103ce6105b0366004613eee565b60166020526000908152604090205481565b60005461038b9073ffffffffffffffffffffffffffffffffffffffff1681565b61036b611814565b6103c36105f8366004613cb5565b611823565b6103c361060b366004613db5565b6118c3565b6103c361061e366004613cb5565b6119da565b6103ce610631366004613eee565b611a7d565b6103ce60125481565b6103ce61064d366004613eee565b60176020526000908152604090205481565b6103c361066d366004613d3c565b611b5c565b61036b610680366004613eee565b611c04565b60015461038b9073ffffffffffffffffffffffffffffffffffffffff1681565b6103ce6106b3366004613eee565b60196020526000908152604090205481565b6106d86106d3366004613f49565b611d14565b60405161035a91906140a9565b61034e6106f3366004613ccf565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260096020908152604080832093909416825291909152205460ff1690565b6103c361073c366004613f06565b611eb5565b6103c361074f366004613e14565b612052565b6103ce60115481565b60135461038b9073ffffffffffffffffffffffffffffffffffffffff1681565b6103ce61078b366004613eee565b60186020526000908152604090205481565b6103c36107ab366004613cb5565b612206565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f780e9d6300000000000000000000000000000000000000000000000000000000148061080657506108068261229d565b92915050565b60606004805461081b9061424c565b80601f01602080910402602001604051908101604052809291908181526020018280546108479061424c565b80156108945780601f1061086957610100808354040283529160200191610894565b820191906000526020600020905b81548152906001019060200180831161087757829003601f168201915b5050505050905090565b60008181526006602052604081205473ffffffffffffffffffffffffffffffffffffffff16610954576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5060009081526008602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b6000610988826113c4565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a46576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f7200000000000000000000000000000000000000000000000000000000000000606482015260840161094b565b3373ffffffffffffffffffffffffffffffffffffffff82161480610a6f5750610a6f81336106f3565b610afb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161094b565b610b058383612380565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610b2e57600080fd5b6012548111610b99576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f496e76616c6964206d696e5374616b652f70726f746f636f6c46656500000000604482015260640161094b565b60118190556040518181527f0be9186a0f7f1e3c3019fdaacbaffb9ea92e4aacae81a3dbcc3a18220a47380d906020015b60405180910390a150565b610bdf3382612420565b610c6b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161094b565b610b0583838361258c565b3360009081526002602052604090205460ff16610d15576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840161094b565b60008281526018602052604090205415610d8b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f41747472696275746520616c7265616479207365740000000000000000000000604482015260640161094b565b600082815260186020526040908190208290555182907fe73a9e48f41e228034f18c54b3f003b3de0b3bf1069ffd0c352543431b8a86a390610dd09084815260200190565b60405180910390a25050565b60026003541415610e49576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161094b565b6002600355610e583382612420565b610ebe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f7420617574686f72697a6564000000000000000000000000000000000000604482015260640161094b565b610ec7816127fe565b60008181526016602052604081208054919055610f1b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001633836128d7565b604051818152829033907ff960dbf9e5d0682f7a298ed974e33a28b4464914b7a2bfac12ae419a9afeb2809060200160405180910390a350506001600355565b6000610f668361164d565b8210610ff4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e6473000000000000000000000000000000000000000000606482015260840161094b565b5073ffffffffffffffffffffffffffffffffffffffff919091166000908152600a60209081526040808320938352929052205490565b610b0583838360405180602001604052806000815250611b5c565b600061105184836129ab565b61105b85856129ab565b60008781526017602052604090205461107491906141f5565b61107e91906142d9565b90505b949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146110ad57600080fd5b600e548111611118576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f43617020616c7265616479206578636565646564000000000000000000000000604482015260640161094b565b600e8190556040518181527fddf4c293a3479db41117899542b2a5d272b166296d11693304a6c1eac191054b90602001610bca565b6000611158600c5490565b82106111e6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e64730000000000000000000000000000000000000000606482015260840161094b565b600c8281548110611220577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001549050919050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461125657600080fd5b805161126990600f906020840190613b15565b507f01e56a02aca7f26a28165a040851ba78f30282b55ca81c63a804cdc1e2dcea72600f604051610bca9190614100565b60015473ffffffffffffffffffffffffffffffffffffffff163314611341576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840161094b565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60008181526006602052604081205473ffffffffffffffffffffffffffffffffffffffff1680610806576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e0000000000000000000000000000000000000000000000606482015260840161094b565b60005473ffffffffffffffffffffffffffffffffffffffff16331461149a57600080fd5b60105460ff166114d057601080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790555b80156115295773ffffffffffffffffffffffffffffffffffffffff82166000908152601a6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055611575565b73ffffffffffffffffffffffffffffffffffffffff82166000908152601a6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690555b8173ffffffffffffffffffffffffffffffffffffffff167fd1b1846bd2f96d78a14f8960ca200e7a29f8d8d08c0386ffe28dc5c99067c52382604051610dd0911515815260200190565b600f80546115cc9061424c565b80601f01602080910402602001604051908101604052809291908181526020018280546115f89061424c565b80156116455780601f1061161a57610100808354040283529160200191611645565b820191906000526020600020905b81548152906001019060200180831161162857829003601f168201915b505050505081565b600073ffffffffffffffffffffffffffffffffffffffff82166116f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f206164647265737300000000000000000000000000000000000000000000606482015260840161094b565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526007602052604090205490565b60026003541415611788576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161094b565b600260035560135473ffffffffffffffffffffffffffffffffffffffff16158015906117b657506000601454115b1561180d5760148054600090915560135461180b9073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081169116836128d7565b505b6001600355565b60606005805461081b9061424c565b60005473ffffffffffffffffffffffffffffffffffffffff16331461184757600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a78849101610bca565b73ffffffffffffffffffffffffffffffffffffffff8216331415611943576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161094b565b33600081815260096020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146119fe57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf59101610bca565b6000611a8882612a3d565b60408051466020820181905243928201929092527fffffffffffffffffffffffffffffffffffffffff00000000000000000000000030606090811b82168184015233901b16607482015291925090600090608801604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001815282825280516020918201206000878152601783529290922082905581835290925084917f1e6edca497f4aff07b388b2c8af55371a16eb956ed650861cb45f11758e4a65b910160405180910390a25050919050565b611b663383612420565b611bf2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161094b565b611bfe84848484612dda565b50505050565b60008181526006602052604090205460609073ffffffffffffffffffffffffffffffffffffffff16611cb8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000606482015260840161094b565b6000611cc2612e7d565b90506000815111611ce25760405180602001604052806000815250611d0d565b80611cec84612e8c565b604051602001611cfd929190614031565b6040516020818303038152906040525b9392505050565b6060818067ffffffffffffffff811115611d57577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015611d80578160200160208202803683370190505b5060008781526017602052604081205491935090815b83811015611ea957611de788888884818110611ddb577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b905060200201356129ab565b611df189856129ab565b611dfb90846141f5565b611e0591906142d9565b858281518110611e3e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018181525050868682818110611e83577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002013583611e9591906141dd565b925080611ea1816142a0565b915050611d96565b50505050949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611ed957600080fd5b8160115411611f44576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f496e76616c6964206d696e5374616b652f70726f746f636f6c46656500000000604482015260640161094b565b811580611f66575073ffffffffffffffffffffffffffffffffffffffff811615155b611fcc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f496e76616c69642070726f746f636f6c4665652f466565546f00000000000000604482015260640161094b565b6012829055601380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040805184815260208101929092527f5ecd7df85e51aff79e169c80a23d9299697dcb741138d732a78485f61370843d910160405180910390a15050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461207657600080fd5b601080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558060005b81811015611bfe576001601a60008686858181106120ec577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020160208101906121019190613cb5565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001691151591909117905583838281811061218d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020160208101906121a29190613cb5565b73ffffffffffffffffffffffffffffffffffffffff167fd1b1846bd2f96d78a14f8960ca200e7a29f8d8d08c0386ffe28dc5c99067c52360016040516121ec911515815260200190565b60405180910390a2806121fe816142a0565b9150506120a5565b60005473ffffffffffffffffffffffffffffffffffffffff16331461222a57600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b90602001610bca565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd00000000000000000000000000000000000000000000000000000000148061233057507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061080657507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610806565b600081815260086020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841690811790915581906123da826113c4565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008181526006602052604081205473ffffffffffffffffffffffffffffffffffffffff166124d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e0000000000000000000000000000000000000000606482015260840161094b565b60006124dc836113c4565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061254b57508373ffffffffffffffffffffffffffffffffffffffff166125338461089e565b73ffffffffffffffffffffffffffffffffffffffff16145b80611081575073ffffffffffffffffffffffffffffffffffffffff80821660009081526009602090815260408083209388168352929052205460ff16611081565b8273ffffffffffffffffffffffffffffffffffffffff166125ac826113c4565b73ffffffffffffffffffffffffffffffffffffffff161461264f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e0000000000000000000000000000000000000000000000606482015260840161094b565b73ffffffffffffffffffffffffffffffffffffffff82166126f1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161094b565b6126fc83838361300c565b612707600082612380565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260076020526040812080546001929061273d908490614209565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526007602052604081208054600192906127789084906141dd565b909155505060008181526006602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff86811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6000612809826113c4565b90506128178160008461300c565b612822600083612380565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600760205260408120805460019290612858908490614209565b909155505060008281526006602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690555183919073ffffffffffffffffffffffffffffffffffffffff8416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610b059084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152613112565b6000828015612a1f576001831680156129c6578492506129cb565b600192505b506002830492505b8215612a1a5783840284858204146129ea57600080fd5b93506001831615612a0f578382028285820414158515151615612a0c57600080fd5b91505b6002830492506129d3565b612a36565b828015612a2f5760009250612a34565b600192505b505b5092915050565b600060026003541415612aac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161094b565b6002600355601054339060ff161580612ad45750336000908152601a602052604090205460ff165b612b3a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f7420617574686f72697a6564000000000000000000000000000000000000604482015260640161094b565b60125483118015612b595750601154601254612b569085614209565b10155b612bbf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4d696e696e756d207374616b65206e6f74206d65740000000000000000000000604482015260640161094b565b600e54600c5410612c2c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f4361702065786365656465640000000000000000000000000000000000000000604482015260640161094b565b60105460ff161580612c4e5750336000908152601b602052604090205460ff16155b612cb4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f596f752063616e206f6e6c79207374616b65206f6e6365000000000000000000604482015260640161094b565b601560008154612cc3906142a0565b91829055509150612d0c73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001682308661321e565b601254612d199084614209565b6000838152601660205260408120919091556012546014805491929091612d419084906141dd565b9091555050336000908152601b6020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905584835260199091529020429055612d98818361327c565b604051838152829033907f5af417134f72a9d41143ace85b0a26dce6f550f894f2cbc1eeee8810603d91b69060200160405180910390a3506001600355919050565b612de584848461258c565b612df18484848461329a565b611bfe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161094b565b6060600f805461081b9061424c565b606081612ecc57505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115612ef65780612ee0816142a0565b9150612eef9050600a836141f5565b9150612ed0565b60008167ffffffffffffffff811115612f38577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015612f62576020820181803683370190505b5090505b841561108157612f77600183614209565b9150612f84600a866142d9565b612f8f9060306141dd565b60f81b818381518110612fcb577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350613005600a866141f5565b9450612f66565b73ffffffffffffffffffffffffffffffffffffffff83166130745761306f81600c80546000838152600d60205260408120829055600182018355919091527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c70155565b6130b1565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146130b1576130b18382613496565b73ffffffffffffffffffffffffffffffffffffffff82166130d557610b058161354d565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610b0557610b058282613671565b6000613174826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166136c29092919063ffffffff16565b805190915015610b0557808060200190518101906131929190613e54565b610b05576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161094b565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052611bfe9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401612929565b6132968282604051806020016040528060008152506136d1565b5050565b600073ffffffffffffffffffffffffffffffffffffffff84163b1561348e576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a0290613311903390899088908890600401614060565b602060405180830381600087803b15801561332b57600080fd5b505af1925050508015613379575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261337691810190613e8c565b60015b613443573d8080156133a7576040519150601f19603f3d011682016040523d82523d6000602084013e6133ac565b606091505b50805161343b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161094b565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050611081565b506001611081565b600060016134a38461164d565b6134ad9190614209565b6000838152600b602052604090205490915080821461350d5773ffffffffffffffffffffffffffffffffffffffff84166000908152600a602090815260408083208584528252808320548484528184208190558352600b90915290208190555b506000918252600b6020908152604080842084905573ffffffffffffffffffffffffffffffffffffffff9094168352600a81528383209183525290812055565b600c5460009061355f90600190614209565b6000838152600d6020526040812054600c80549394509092849081106135ae577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905080600c83815481106135f6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000918252602080832090910192909255828152600d9091526040808220849055858252812055600c805480613655577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b600061367c8361164d565b73ffffffffffffffffffffffffffffffffffffffff9093166000908152600a602090815260408083208684528252808320859055938252600b9052919091209190915550565b60606110818484600085613774565b6136db83836138f4565b6136e8600084848461329a565b610b05576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161094b565b606082471015613806576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161094b565b843b61386e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161094b565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516138979190614015565b60006040518083038185875af1925050503d80600081146138d4576040519150601f19603f3d011682016040523d82523d6000602084013e6138d9565b606091505b50915091506138e9828286613ac2565b979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216613971576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161094b565b60008181526006602052604090205473ffffffffffffffffffffffffffffffffffffffff16156139fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161094b565b613a096000838361300c565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600760205260408120805460019290613a3f9084906141dd565b909155505060008181526006602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60608315613ad1575081611d0d565b825115613ae15782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094b91906140ed565b828054613b219061424c565b90600052602060002090601f016020900481019282613b435760008555613b89565b82601f10613b5c57805160ff1916838001178555613b89565b82800160010185558215613b89579182015b82811115613b89578251825591602001919060010190613b6e565b50613b95929150613b99565b5090565b5b80821115613b955760008155600101613b9a565b600067ffffffffffffffff80841115613bc957613bc961434b565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715613c0f57613c0f61434b565b81604052809350858152868686011115613c2857600080fd5b858560208301376000602087830101525050509392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114613c6657600080fd5b919050565b60008083601f840112613c7c578081fd5b50813567ffffffffffffffff811115613c93578182fd5b6020830191508360208260051b8501011115613cae57600080fd5b9250929050565b600060208284031215613cc6578081fd5b611d0d82613c42565b60008060408385031215613ce1578081fd5b613cea83613c42565b9150613cf860208401613c42565b90509250929050565b600080600060608486031215613d15578081fd5b613d1e84613c42565b9250613d2c60208501613c42565b9150604084013590509250925092565b60008060008060808587031215613d51578081fd5b613d5a85613c42565b9350613d6860208601613c42565b925060408501359150606085013567ffffffffffffffff811115613d8a578182fd5b8501601f81018713613d9a578182fd5b613da987823560208401613bae565b91505092959194509250565b60008060408385031215613dc7578182fd5b613dd083613c42565b91506020830135613de08161437a565b809150509250929050565b60008060408385031215613dfd578182fd5b613e0683613c42565b946020939093013593505050565b60008060208385031215613e26578182fd5b823567ffffffffffffffff811115613e3c578283fd5b613e4885828601613c6b565b90969095509350505050565b600060208284031215613e65578081fd5b8151611d0d8161437a565b600060208284031215613e81578081fd5b8135611d0d8161438b565b600060208284031215613e9d578081fd5b8151611d0d8161438b565b600060208284031215613eb9578081fd5b813567ffffffffffffffff811115613ecf578182fd5b8201601f81018413613edf578182fd5b61108184823560208401613bae565b600060208284031215613eff578081fd5b5035919050565b60008060408385031215613f18578182fd5b82359150613cf860208401613c42565b60008060408385031215613f3a578182fd5b50508035926020909101359150565b60008060008060608587031215613f5e578182fd5b8435935060208501359250604085013567ffffffffffffffff811115613f82578283fd5b613f8e87828801613c6b565b95989497509550505050565b60008060008060808587031215613faf578182fd5b5050823594602084013594506040840135936060013592509050565b60008151808452613fe3816020860160208601614220565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60008251614027818460208701614220565b9190910192915050565b60008351614043818460208801614220565b835190830190614057818360208801614220565b01949350505050565b600073ffffffffffffffffffffffffffffffffffffffff80871683528086166020840152508360408301526080606083015261409f6080830184613fcb565b9695505050505050565b6020808252825182820181905260009190848201906040850190845b818110156140e1578351835292840192918401916001016140c5565b50909695505050505050565b602081526000611d0d6020830184613fcb565b6000602080835281845483600182811c91508083168061412157607f831692505b858310811415614158577f4e487b710000000000000000000000000000000000000000000000000000000087526022600452602487fd5b87860183815260200181801561417557600181146141a4576141ce565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008616825287820196506141ce565b60008b815260209020895b868110156141c8578154848201529085019089016141af565b83019750505b50949998505050505050505050565b600082198211156141f0576141f06142ed565b500190565b6000826142045761420461431c565b500490565b60008282101561421b5761421b6142ed565b500390565b60005b8381101561423b578181015183820152602001614223565b83811115611bfe5750506000910152565b600181811c9082168061426057607f821691505b6020821081141561429a577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156142d2576142d26142ed565b5060010190565b6000826142e8576142e861431c565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b801515811461438857600080fd5b50565b7fffffffff000000000000000000000000000000000000000000000000000000008116811461438857600080fdfea2646970667358221220993e5b693df81272b59f5f08c679e546792e318f6560653328e7c27f9732ed7464736f6c63430008040033"
};

// src/contracts/TrollNFT.ts
var TrollNFT = class extends import_eth_wallet3.Contract {
  constructor(wallet, address) {
    super(wallet, address, TrollNFT_json_default.abi, TrollNFT_json_default.bytecode);
    this.assign();
  }
  deploy(params) {
    return this._deploy(params.name, params.symbol, params.baseURI, import_eth_wallet3.Utils.toString(params.cap), params.stakeToken, params.requireApproval, import_eth_wallet3.Utils.toString(params.minimumStake), import_eth_wallet3.Utils.toString(params.protocolFee), params.protocolFeeTo);
  }
  parseApprovalEvent(receipt) {
    return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
  }
  decodeApprovalEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      approved: result.approved,
      tokenId: new import_eth_wallet3.BigNumber(result.tokenId),
      _event: event
    };
  }
  parseApprovalForAllEvent(receipt) {
    return this.parseEvents(receipt, "ApprovalForAll").map((e) => this.decodeApprovalForAllEvent(e));
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
    return this.parseEvents(receipt, "ApprovedStaker").map((e) => this.decodeApprovedStakerEvent(e));
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
    return this.parseEvents(receipt, "Attribute").map((e) => this.decodeAttributeEvent(e));
  }
  decodeAttributeEvent(event) {
    let result = event.data;
    return {
      tokenId: new import_eth_wallet3.BigNumber(result.tokenId),
      attribute: new import_eth_wallet3.BigNumber(result.attribute),
      _event: event
    };
  }
  parseAuthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Authorize").map((e) => this.decodeAuthorizeEvent(e));
  }
  decodeAuthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseBaseURIEvent(receipt) {
    return this.parseEvents(receipt, "BaseURI").map((e) => this.decodeBaseURIEvent(e));
  }
  decodeBaseURIEvent(event) {
    let result = event.data;
    return {
      baseURI: result.baseURI,
      _event: event
    };
  }
  parseCapEvent(receipt) {
    return this.parseEvents(receipt, "Cap").map((e) => this.decodeCapEvent(e));
  }
  decodeCapEvent(event) {
    let result = event.data;
    return {
      cap: new import_eth_wallet3.BigNumber(result.cap),
      _event: event
    };
  }
  parseCustomAttributeEvent(receipt) {
    return this.parseEvents(receipt, "CustomAttribute").map((e) => this.decodeCustomAttributeEvent(e));
  }
  decodeCustomAttributeEvent(event) {
    let result = event.data;
    return {
      tokenId: new import_eth_wallet3.BigNumber(result.tokenId),
      attribute: new import_eth_wallet3.BigNumber(result.attribute),
      _event: event
    };
  }
  parseDeauthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Deauthorize").map((e) => this.decodeDeauthorizeEvent(e));
  }
  decodeDeauthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseMinimumStakeEvent(receipt) {
    return this.parseEvents(receipt, "MinimumStake").map((e) => this.decodeMinimumStakeEvent(e));
  }
  decodeMinimumStakeEvent(event) {
    let result = event.data;
    return {
      minimumStake: new import_eth_wallet3.BigNumber(result.minimumStake),
      _event: event
    };
  }
  parseProtocolFeeEvent(receipt) {
    return this.parseEvents(receipt, "ProtocolFee").map((e) => this.decodeProtocolFeeEvent(e));
  }
  decodeProtocolFeeEvent(event) {
    let result = event.data;
    return {
      protocolFee: new import_eth_wallet3.BigNumber(result.protocolFee),
      protocolFeeTo: result.protocolFeeTo,
      _event: event
    };
  }
  parseStakeEvent(receipt) {
    return this.parseEvents(receipt, "Stake").map((e) => this.decodeStakeEvent(e));
  }
  decodeStakeEvent(event) {
    let result = event.data;
    return {
      who: result.who,
      tokenId: new import_eth_wallet3.BigNumber(result.tokenId),
      amount: new import_eth_wallet3.BigNumber(result.amount),
      _event: event
    };
  }
  parseStartOwnershipTransferEvent(receipt) {
    return this.parseEvents(receipt, "StartOwnershipTransfer").map((e) => this.decodeStartOwnershipTransferEvent(e));
  }
  decodeStartOwnershipTransferEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      from: result.from,
      to: result.to,
      tokenId: new import_eth_wallet3.BigNumber(result.tokenId),
      _event: event
    };
  }
  parseTransferOwnershipEvent(receipt) {
    return this.parseEvents(receipt, "TransferOwnership").map((e) => this.decodeTransferOwnershipEvent(e));
  }
  decodeTransferOwnershipEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseUnstakeEvent(receipt) {
    return this.parseEvents(receipt, "Unstake").map((e) => this.decodeUnstakeEvent(e));
  }
  decodeUnstakeEvent(event) {
    let result = event.data;
    return {
      who: result.who,
      tokenId: new import_eth_wallet3.BigNumber(result.tokenId),
      amount: new import_eth_wallet3.BigNumber(result.amount),
      _event: event
    };
  }
  async _attributes(param1) {
    let result = await this.call("_attributes", [import_eth_wallet3.Utils.toString(param1)]);
    return new import_eth_wallet3.BigNumber(result);
  }
  async _customAttributes(param1) {
    let result = await this.call("_customAttributes", [import_eth_wallet3.Utils.toString(param1)]);
    return new import_eth_wallet3.BigNumber(result);
  }
  async approve_send(params) {
    let result = await this.send("approve", [params.to, import_eth_wallet3.Utils.toString(params.tokenId)]);
    return result;
  }
  async approve_call(params) {
    let result = await this.call("approve", [params.to, import_eth_wallet3.Utils.toString(params.tokenId)]);
    return;
  }
  async approvedStaker(param1) {
    let result = await this.call("approvedStaker", [param1]);
    return result;
  }
  async balanceOf(owner) {
    let result = await this.call("balanceOf", [owner]);
    return new import_eth_wallet3.BigNumber(result);
  }
  async baseURI() {
    let result = await this.call("baseURI");
    return result;
  }
  async batchApprove_send(stakers) {
    let result = await this.send("batchApprove", [stakers]);
    return result;
  }
  async batchApprove_call(stakers) {
    let result = await this.call("batchApprove", [stakers]);
    return;
  }
  async cap() {
    let result = await this.call("cap");
    return new import_eth_wallet3.BigNumber(result);
  }
  async counter() {
    let result = await this.call("counter");
    return new import_eth_wallet3.BigNumber(result);
  }
  async creationTime(param1) {
    let result = await this.call("creationTime", [import_eth_wallet3.Utils.toString(param1)]);
    return new import_eth_wallet3.BigNumber(result);
  }
  async deny_send(user) {
    let result = await this.send("deny", [user]);
    return result;
  }
  async deny_call(user) {
    let result = await this.call("deny", [user]);
    return;
  }
  async getApproved(tokenId) {
    let result = await this.call("getApproved", [import_eth_wallet3.Utils.toString(tokenId)]);
    return result;
  }
  async getAttributes1(params) {
    let result = await this.call("getAttributes1", [import_eth_wallet3.Utils.toString(params.tokenId), import_eth_wallet3.Utils.toString(params.base), import_eth_wallet3.Utils.toString(params.offset), import_eth_wallet3.Utils.toString(params.digits)]);
    return new import_eth_wallet3.BigNumber(result);
  }
  async getAttributes2(params) {
    let result = await this.call("getAttributes2", [import_eth_wallet3.Utils.toString(params.tokenId), import_eth_wallet3.Utils.toString(params.base), import_eth_wallet3.Utils.toString(params.digits)]);
    return result.map((e) => new import_eth_wallet3.BigNumber(e));
  }
  async isApprovedForAll(params) {
    let result = await this.call("isApprovedForAll", [params.owner, params.operator]);
    return result;
  }
  async isPermitted(param1) {
    let result = await this.call("isPermitted", [param1]);
    return result;
  }
  async minimumStake() {
    let result = await this.call("minimumStake");
    return new import_eth_wallet3.BigNumber(result);
  }
  async minted(param1) {
    let result = await this.call("minted", [param1]);
    return result;
  }
  async name() {
    let result = await this.call("name");
    return result;
  }
  async newOwner() {
    let result = await this.call("newOwner");
    return result;
  }
  async owner() {
    let result = await this.call("owner");
    return result;
  }
  async ownerOf(tokenId) {
    let result = await this.call("ownerOf", [import_eth_wallet3.Utils.toString(tokenId)]);
    return result;
  }
  async permit_send(user) {
    let result = await this.send("permit", [user]);
    return result;
  }
  async permit_call(user) {
    let result = await this.call("permit", [user]);
    return;
  }
  async protocolFee() {
    let result = await this.call("protocolFee");
    return new import_eth_wallet3.BigNumber(result);
  }
  async protocolFeeBalance() {
    let result = await this.call("protocolFeeBalance");
    return new import_eth_wallet3.BigNumber(result);
  }
  async protocolFeeTo() {
    let result = await this.call("protocolFeeTo");
    return result;
  }
  async requireApproval() {
    let result = await this.call("requireApproval");
    return result;
  }
  async safeTransferFrom_send(params) {
    let result = await this.send("safeTransferFrom", [params.from, params.to, import_eth_wallet3.Utils.toString(params.tokenId)]);
    return result;
  }
  async safeTransferFrom_call(params) {
    let result = await this.call("safeTransferFrom", [params.from, params.to, import_eth_wallet3.Utils.toString(params.tokenId)]);
    return;
  }
  async safeTransferFrom_1_send(params) {
    let result = await this.send("safeTransferFrom", [params.from, params.to, import_eth_wallet3.Utils.toString(params.tokenId), params.data]);
    return result;
  }
  async safeTransferFrom_1_call(params) {
    let result = await this.call("safeTransferFrom", [params.from, params.to, import_eth_wallet3.Utils.toString(params.tokenId), params.data]);
    return;
  }
  async setApprovalForAll_send(params) {
    let result = await this.send("setApprovalForAll", [params.operator, params.approved]);
    return result;
  }
  async setApprovalForAll_call(params) {
    let result = await this.call("setApprovalForAll", [params.operator, params.approved]);
    return;
  }
  async setApprovedStaker_send(params) {
    let result = await this.send("setApprovedStaker", [params.staker, params.allow]);
    return result;
  }
  async setApprovedStaker_call(params) {
    let result = await this.call("setApprovedStaker", [params.staker, params.allow]);
    return;
  }
  async setBaseURI_send(baseURI) {
    let result = await this.send("setBaseURI", [baseURI]);
    return result;
  }
  async setBaseURI_call(baseURI) {
    let result = await this.call("setBaseURI", [baseURI]);
    return;
  }
  async setCap_send(cap) {
    let result = await this.send("setCap", [import_eth_wallet3.Utils.toString(cap)]);
    return result;
  }
  async setCap_call(cap) {
    let result = await this.call("setCap", [import_eth_wallet3.Utils.toString(cap)]);
    return;
  }
  async setCustomAttribute_send(params) {
    let result = await this.send("setCustomAttribute", [import_eth_wallet3.Utils.toString(params.tokenId), import_eth_wallet3.Utils.toString(params.attribute)]);
    return result;
  }
  async setCustomAttribute_call(params) {
    let result = await this.call("setCustomAttribute", [import_eth_wallet3.Utils.toString(params.tokenId), import_eth_wallet3.Utils.toString(params.attribute)]);
    return;
  }
  async setMinimumStake_send(minimumStake) {
    let result = await this.send("setMinimumStake", [import_eth_wallet3.Utils.toString(minimumStake)]);
    return result;
  }
  async setMinimumStake_call(minimumStake) {
    let result = await this.call("setMinimumStake", [import_eth_wallet3.Utils.toString(minimumStake)]);
    return;
  }
  async setProtocolFee_send(params) {
    let result = await this.send("setProtocolFee", [import_eth_wallet3.Utils.toString(params.protocolFee), params.protocolFeeTo]);
    return result;
  }
  async setProtocolFee_call(params) {
    let result = await this.call("setProtocolFee", [import_eth_wallet3.Utils.toString(params.protocolFee), params.protocolFeeTo]);
    return;
  }
  async stake_send(amount) {
    let result = await this.send("stake", [import_eth_wallet3.Utils.toString(amount)]);
    return result;
  }
  async stake_call(amount) {
    let result = await this.call("stake", [import_eth_wallet3.Utils.toString(amount)]);
    return new import_eth_wallet3.BigNumber(result);
  }
  async stakeToken() {
    let result = await this.call("stakeToken");
    return result;
  }
  async stakingBalance(param1) {
    let result = await this.call("stakingBalance", [import_eth_wallet3.Utils.toString(param1)]);
    return new import_eth_wallet3.BigNumber(result);
  }
  async supportsInterface(interfaceId) {
    let result = await this.call("supportsInterface", [interfaceId]);
    return result;
  }
  async symbol() {
    let result = await this.call("symbol");
    return result;
  }
  async takeOwnership_send() {
    let result = await this.send("takeOwnership");
    return result;
  }
  async takeOwnership_call() {
    let result = await this.call("takeOwnership");
    return;
  }
  async tokenByIndex(index) {
    let result = await this.call("tokenByIndex", [import_eth_wallet3.Utils.toString(index)]);
    return new import_eth_wallet3.BigNumber(result);
  }
  async tokenOfOwnerByIndex(params) {
    let result = await this.call("tokenOfOwnerByIndex", [params.owner, import_eth_wallet3.Utils.toString(params.index)]);
    return new import_eth_wallet3.BigNumber(result);
  }
  async tokenURI(tokenId) {
    let result = await this.call("tokenURI", [import_eth_wallet3.Utils.toString(tokenId)]);
    return result;
  }
  async totalSupply() {
    let result = await this.call("totalSupply");
    return new import_eth_wallet3.BigNumber(result);
  }
  async transferFrom_send(params) {
    let result = await this.send("transferFrom", [params.from, params.to, import_eth_wallet3.Utils.toString(params.tokenId)]);
    return result;
  }
  async transferFrom_call(params) {
    let result = await this.call("transferFrom", [params.from, params.to, import_eth_wallet3.Utils.toString(params.tokenId)]);
    return;
  }
  async transferOwnership_send(newOwner) {
    let result = await this.send("transferOwnership", [newOwner]);
    return result;
  }
  async transferOwnership_call(newOwner) {
    let result = await this.call("transferOwnership", [newOwner]);
    return;
  }
  async transferProtocolFee_send() {
    let result = await this.send("transferProtocolFee");
    return result;
  }
  async transferProtocolFee_call() {
    let result = await this.call("transferProtocolFee");
    return;
  }
  async unstake_send(tokenId) {
    let result = await this.send("unstake", [import_eth_wallet3.Utils.toString(tokenId)]);
    return result;
  }
  async unstake_call(tokenId) {
    let result = await this.call("unstake", [import_eth_wallet3.Utils.toString(tokenId)]);
    return;
  }
  assign() {
    this.approve = Object.assign(this.approve_send, { call: this.approve_call });
    this.batchApprove = Object.assign(this.batchApprove_send, { call: this.batchApprove_call });
    this.deny = Object.assign(this.deny_send, { call: this.deny_call });
    this.permit = Object.assign(this.permit_send, { call: this.permit_call });
    this.safeTransferFrom = Object.assign(this.safeTransferFrom_send, { call: this.safeTransferFrom_call });
    this.safeTransferFrom_1 = Object.assign(this.safeTransferFrom_1_send, { call: this.safeTransferFrom_1_call });
    this.setApprovalForAll = Object.assign(this.setApprovalForAll_send, { call: this.setApprovalForAll_call });
    this.setApprovedStaker = Object.assign(this.setApprovedStaker_send, { call: this.setApprovedStaker_call });
    this.setBaseURI = Object.assign(this.setBaseURI_send, { call: this.setBaseURI_call });
    this.setCap = Object.assign(this.setCap_send, { call: this.setCap_call });
    this.setCustomAttribute = Object.assign(this.setCustomAttribute_send, { call: this.setCustomAttribute_call });
    this.setMinimumStake = Object.assign(this.setMinimumStake_send, { call: this.setMinimumStake_call });
    this.setProtocolFee = Object.assign(this.setProtocolFee_send, { call: this.setProtocolFee_call });
    this.stake = Object.assign(this.stake_send, { call: this.stake_call });
    this.takeOwnership = Object.assign(this.takeOwnership_send, { call: this.takeOwnership_call });
    this.transferFrom = Object.assign(this.transferFrom_send, { call: this.transferFrom_call });
    this.transferOwnership = Object.assign(this.transferOwnership_send, { call: this.transferOwnership_call });
    this.transferProtocolFee = Object.assign(this.transferProtocolFee_send, { call: this.transferProtocolFee_call });
    this.unstake = Object.assign(this.unstake_send, { call: this.unstake_call });
  }
};

// src/contracts/TrollNFTV2.ts
var import_eth_wallet4 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/TrollNFTV2.json.ts
var TrollNFTV2_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "string", "name": "__baseURI", "type": "string" }, { "internalType": "uint256", "name": "_cap", "type": "uint256" }, { "internalType": "contract IERC20", "name": "_stakeToken", "type": "address" }, { "internalType": "bool", "name": "_requireApproval", "type": "bool" }, { "internalType": "uint256", "name": "_minimumStake", "type": "uint256" }, { "internalType": "uint256", "name": "_protocolFee", "type": "uint256" }, { "internalType": "address", "name": "_protocolFeeTo", "type": "address" }, { "components": [{ "internalType": "contract IERC721[]", "name": "listValidNFTs", "type": "address[]" }, { "internalType": "uint256", "name": "maximumValidNFTs", "type": "uint256" }], "internalType": "struct TrollNFTV2.NFTInfo", "name": "_nftInfo", "type": "tuple" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amountAdded", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newAmount", "type": "uint256" }], "name": "AddStakes", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "contract IERC721", "name": "nft", "type": "address" }], "name": "AddValidNFT", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "staker", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "allow", "type": "bool" }], "name": "ApprovedStaker", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "Attribute", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "string", "name": "baseURI", "type": "string" }], "name": "BaseURI", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "cap", "type": "uint256" }], "name": "Cap", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "CustomAttribute", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trollId", "type": "uint256" }, { "indexed": true, "internalType": "contract IERC721", "name": "nft", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "nftId", "type": "uint256" }], "name": "EquipNFT", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "minimumStake", "type": "uint256" }], "name": "MinimumStake", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "protocolFee", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "protocolFeeTo", "type": "address" }], "name": "ProtocolFee", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "who", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Stake", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "fromTokenId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "StakesApproval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "fromTokenId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "toTokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "StakesTransfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trollId", "type": "uint256" }, { "indexed": true, "internalType": "contract IERC721", "name": "nft", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "nftId", "type": "uint256" }], "name": "UnequipNFT", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "who", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Unstake", "type": "event" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "_attributes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "_customAttributes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }], "name": "_stakesTransferAllowances", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "addStakes", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "contract IERC721[]", "name": "nfts", "type": "address[]" }], "name": "addValidNFTs", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "approvedStaker", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address[]", "name": "stakers", "type": "address[]" }], "name": "batchApprove", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "cap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "counter", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "creationDate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "destoryDate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "trollId", "type": "uint256" }, { "internalType": "contract IERC721", "name": "nft", "type": "address" }, { "internalType": "uint256", "name": "nftId", "type": "uint256" }], "name": "equipNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "extraStakes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "base", "type": "uint256" }, { "internalType": "uint256", "name": "offset", "type": "uint256" }, { "internalType": "uint256", "name": "digits", "type": "uint256" }], "name": "getAttributes1", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "base", "type": "uint256" }, { "internalType": "uint256[]", "name": "digits", "type": "uint256[]" }], "name": "getAttributes2", "outputs": [{ "internalType": "uint256[]", "name": "params", "type": "uint256[]" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "contract IERC721", "name": "", "type": "address" }], "name": "isValidNFT", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "lastStakeDate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "listValidNFTs", "outputs": [{ "internalType": "contract IERC721", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "maximumValidNFTs", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "minimumStake", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "minted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "contract IERC721", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "nftsEquipped", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "protocolFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "protocolFeeBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "protocolFeeTo", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "requireApproval", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "staker", "type": "address" }, { "internalType": "bool", "name": "allow", "type": "bool" }], "name": "setApprovedStaker", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "string", "name": "__baseURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_cap", "type": "uint256" }], "name": "setCap", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "setCustomAttribute", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_minimumStake", "type": "uint256" }], "name": "setMinimumStake", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_protocolFee", "type": "uint256" }, { "internalType": "address", "name": "_protocolFeeTo", "type": "address" }], "name": "setProtocolFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "stake", "outputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "stakeToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "stakingBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "transferProtocolFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "contract IERC721", "name": "", "type": "address" }], "name": "trollOwnedNFTs", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "trollId", "type": "uint256" }, { "internalType": "contract IERC721", "name": "nft", "type": "address" }, { "internalType": "uint256", "name": "nftId", "type": "uint256" }], "name": "unequipNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "unstake", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "validNFTsLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }
  ],
  "bytecode": "60a06040523480156200001157600080fd5b5060405162005dac38038062005dac8339810160408190526200003491620006a6565b600080546001600160a01b03191633179055600160035589518a908a90620000649060049060208501906200046f565b5080516200007a9060059060208401906200046f565b50505082600014806200009557506001600160a01b03821615155b620000e75760405162461bcd60e51b815260206004820152601960248201527f496e76616c69642070726f746f636f6c4665652f466565546f0000000000000060448201526064015b60405180910390fd5b602081015181515111156200013a5760405162461bcd60e51b81526020600482015260248082015260008051602062005d8c8339815191526044820152634e46547360e01b6064820152608401620000de565b87516200014f90600f9060208b01906200046f565b50600e879055606086901b6001600160601b0319166080526010805460ff191686151517905560118490556012839055601380546001600160a01b0319166001600160a01b03841617905560208101516016558051620001af90620002b9565b7f01e56a02aca7f26a28165a040851ba78f30282b55ca81c63a804cdc1e2dcea72600f604051620001e19190620007b1565b60405180910390a17fddf4c293a3479db41117899542b2a5d272b166296d11693304a6c1eac191054b600e546040516200021d91815260200190565b60405180910390a17f0be9186a0f7f1e3c3019fdaacbaffb9ea92e4aacae81a3dbcc3a18220a47380d6011546040516200025991815260200190565b60405180910390a1601254601354604080519283526001600160a01b0390911660208301527f5ecd7df85e51aff79e169c80a23d9299697dcb741138d732a78485f61370843d910160405180910390a15050505050505050505062000978565b6000546001600160a01b03163314620002d157600080fd5b6016548151601554620002e59190620008bd565b1115620003305760405162461bcd60e51b81526020600482015260248082015260008051602062005d8c8339815191526044820152634e46547360e01b6064820152608401620000de565b60005b81518110156200046b5760008282815181106200036057634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160a01b038116600090815291805260409091205490915060ff1615620003cd5760405162461bcd60e51b815260206004820152601160248201527013919508185b1c9958591e481859191959607a1b6044820152606401620000de565b6001600160a01b0381166000818152602080526040808220805460ff1916600190811790915560158054918201815583527f55f448fdea98c4d29eb340757ef0a66cd03dbb9538908a6a81d96026b71ec4750180546001600160a01b03191684179055517f6f0f8cee3d9c2f167393540bc77d82ef43045c19beafd62240a7e45f2519171a9190a25080620004628162000915565b91505062000333565b5050565b8280546200047d90620008d8565b90600052602060002090601f016020900481019282620004a15760008555620004ec565b82601f10620004bc57805160ff1916838001178555620004ec565b82800160010185558215620004ec579182015b82811115620004ec578251825591602001919060010190620004cf565b50620004fa929150620004fe565b5090565b5b80821115620004fa5760008155600101620004ff565b805162000522816200095f565b919050565b805180151581146200052257600080fd5b600082601f83011262000549578081fd5b81516001600160401b0381111562000565576200056562000949565b60206200057b601f8301601f191682016200088a565b82815285828487010111156200058f578384fd5b835b83811015620005ae57858101830151828201840152820162000591565b83811115620005bf57848385840101525b5095945050505050565b600060408284031215620005db578081fd5b620005e56200085f565b82519091506001600160401b03808211156200060057600080fd5b818401915084601f8301126200061557600080fd5b81516020828211156200062c576200062c62000949565b8160051b92506200063f8184016200088a565b8281528181019085830185870184018a10156200065b57600080fd5b600096505b848710156200068e578051955062000678866200095f565b8583526001969096019591830191830162000660565b50808752505080860151818601525050505092915050565b6000806000806000806000806000806101408b8d031215620006c6578586fd5b8a516001600160401b0380821115620006dd578788fd5b620006eb8e838f0162000538565b9b5060208d015191508082111562000701578788fd5b6200070f8e838f0162000538565b9a5060408d015191508082111562000725578788fd5b620007338e838f0162000538565b995060608d015198506200074a60808e0162000515565b97506200075a60a08e0162000527565b965060c08d0151955060e08d01519450620007796101008e0162000515565b93506101208d015191508082111562000790578283fd5b506200079f8d828e01620005c9565b9150509295989b9194979a5092959850565b6000602080835281845483600182811c915080831680620007d357607f831692505b858310811415620007f257634e487b7160e01b87526022600452602487fd5b878601838152602001818015620008125760018114620008245762000850565b60ff1986168252878201965062000850565b60008b815260209020895b868110156200084a578154848201529085019089016200082f565b83019750505b50949998505050505050505050565b604080519081016001600160401b038111828210171562000884576200088462000949565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620008b557620008b562000949565b604052919050565b60008219821115620008d357620008d362000933565b500190565b600181811c90821680620008ed57607f821691505b602082108114156200090f57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156200092c576200092c62000933565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146200097557600080fd5b50565b60805160601c6153d9620009b3600039600081816105ce015281816110a3015281816125a801528181612d530152613ba901526153d96000f3fe608060405234801561001057600080fd5b50600436106103d05760003560e01c806378511f61116101ff578063baba73a51161011a578063e985e9c5116100ad578063ef3692521161007c578063ef3692521461094a578063f0ab14ed1461096a578063f2fde38b1461098a578063f43d95841461099d57600080fd5b8063e985e9c5146108d2578063ea289d001461091b578063ea5ed3db1461092e578063ec5ffac21461094157600080fd5b8063d7930066116100e9578063d793006614610877578063d8f8504f14610897578063da1bbcf6146108b7578063e7201063146108bf57600080fd5b8063baba73a514610819578063c287e80614610822578063c87b56dd14610844578063d4ee1d901461085757600080fd5b8063a22cb46511610192578063b13db57611610161578063b13db576146107b3578063b1bc9916146107d3578063b55e5847146107e6578063b88d4fde1461080657600080fd5b8063a22cb46514610771578063a2f55ae514610784578063a694fc3a14610797578063b0e21e8a146107aa57600080fd5b80638c8c8a50116101ce5780638c8c8a50146107165780638da5cb5b1461073657806395d89b41146107565780639c52a7f11461075e57600080fd5b806378511f61146106b65780637e09858e146106d657806381fdc72b1461070157806382d5ea6c1461070957600080fd5b806342842e0e116102ef57806360536172116102825780636c0360eb116102515780636c0360eb1461064d5780636e660ab11461065557806370a08231146106805780637776a0e51461069357600080fd5b8063605361721461061657806361bc221a1461061e5780636352211e1461062757806368c1c0881461063a57600080fd5b80635174df05116102be5780635174df05146105b657806351ed6a30146105c957806355f804b3146105f05780635981f75a1461060357600080fd5b806342842e0e1461056a578063476f2d5c1461057d57806347786d37146105905780634f6ccce7146105a357600080fd5b8063233e9903116103675780632f745c59116103365780632f745c5914610518578063355274ea1461052b5780633a2f5511146105345780633fd8cc4e1461054757600080fd5b8063233e9903146104cc57806323b872dd146104df5780632457c8ea146104f25780632e17de781461050557600080fd5b80630a22d68c116103a35780630a22d68c1461045f57806318160ddd146104765780631864bbc91461047e5780631e7269c5146104a957600080fd5b806301ffc9a7146103d557806306fdde03146103fd578063081812fc14610412578063095ea7b31461044a575b600080fd5b6103e86103e3366004614dc1565b6109bd565b60405190151581526020015b60405180910390f35b610405610a19565b6040516103f49190615066565b610425610420366004614e3f565b610aab565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016103f4565b61045d610458366004614c86565b610b8a565b005b61046860145481565b6040519081526020016103f4565b600c54610468565b61046861048c366004614c86565b602260209081526000928352604080842090915290825290205481565b6103e86104b7366004614b2c565b601f6020526000908152604090205460ff1681565b61045d6104da366004614e3f565b610d17565b61045d6104ed366004614b9c565b610d77565b61045d610500366004614ea1565b610e18565b61045d610513366004614e3f565b610f7e565b610468610526366004614c86565b6111f6565b610468600e5481565b61045d610542366004614cf1565b6112c5565b6103e8610555366004614b2c565b60026020526000908152604090205460ff1681565b61045d610578366004614b9c565b61154f565b61046861058b366004614f13565b61156a565b61045d61059e366004614e3f565b6115ae565b6104686105b1366004614e3f565b611672565b61045d6105c4366004614e7b565b611757565b6104257f000000000000000000000000000000000000000000000000000000000000000081565b61045d6105fe366004614df9565b611bab565b61045d610611366004614e7b565b611c13565b61045d612060565b61046860175481565b610425610635366004614e3f565b61218a565b61045d610648366004614c59565b61223c565b610405612385565b610468610663366004614e57565b602460209081526000928352604080842090915290825290205481565b61046861068e366004614b2c565b612413565b6103e86106a1366004614b2c565b601e6020526000908152604090205460ff1681565b6104686106c4366004614e3f565b60236020526000908152604090205481565b6104686106e4366004614e57565b602160209081526000928352604080842090915290825290205481565b61045d6124e1565b6010546103e89060ff1681565b610468610724366004614e3f565b60186020526000908152604090205481565b6000546104259073ffffffffffffffffffffffffffffffffffffffff1681565b6104056125da565b61045d61076c366004614b2c565b6125e9565b61045d61077f366004614c59565b612689565b61045d610792366004614b2c565b6127a0565b6104686107a5366004614e3f565b612843565b61046860125481565b6104686107c1366004614e3f565b60196020526000908152604090205481565b6104256107e1366004614e3f565b612922565b6104686107f4366004614e3f565b601d6020526000908152604090205481565b61045d610814366004614bdc565b612959565b61046860165481565b6103e8610830366004614b2c565b602080526000908152604090205460ff1681565b610405610852366004614e3f565b612a01565b6001546104259073ffffffffffffffffffffffffffffffffffffffff1681565b61088a610885366004614ec2565b612b11565b6040516103f49190615022565b6104686108a5366004614e3f565b601c6020526000908152604090205481565b601554610468565b61045d6108cd366004614ea1565b612cb2565b6103e86108e0366004614b64565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260096020908152604080832093909416825291909152205460ff1690565b61045d610929366004614e57565b612dee565b61045d61093c366004614cb1565b612f20565b61046860115481565b6013546104259073ffffffffffffffffffffffffffffffffffffffff1681565b610468610978366004614e3f565b601a6020526000908152604090205481565b61045d610998366004614b2c565b6130d4565b6104686109ab366004614e3f565b601b6020526000908152604090205481565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f780e9d63000000000000000000000000000000000000000000000000000000001480610a135750610a138261316b565b92915050565b606060048054610a2890615214565b80601f0160208091040260200160405190810160405280929190818152602001828054610a5490615214565b8015610aa15780601f10610a7657610100808354040283529160200191610aa1565b820191906000526020600020905b815481529060010190602001808311610a8457829003601f168201915b5050505050905090565b60008181526006602052604081205473ffffffffffffffffffffffffffffffffffffffff16610b61576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5060009081526008602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b6000610b958261218a565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c53576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f72000000000000000000000000000000000000000000000000000000000000006064820152608401610b58565b3373ffffffffffffffffffffffffffffffffffffffff82161480610c7c5750610c7c81336108e0565b610d08576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610b58565b610d12838361324e565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610d3b57600080fd5b60118190556040518181527f0be9186a0f7f1e3c3019fdaacbaffb9ea92e4aacae81a3dbcc3a18220a47380d906020015b60405180910390a150565b610d8133826132ee565b610e0d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f7665640000000000000000000000000000006064820152608401610b58565b610d1283838361345a565b3360009081526002602052604090205460ff16610eb7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610b58565b6000828152601a602052604090205415610f2d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f41747472696275746520616c72656164792073657400000000000000000000006044820152606401610b58565b6000828152601a6020526040908190208290555182907fe73a9e48f41e228034f18c54b3f003b3de0b3bf1069ffd0c352543431b8a86a390610f729084815260200190565b60405180910390a25050565b60026003541415610feb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610b58565b6002600355610ffa33826132ee565b611060576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f7420617574686f72697a65640000000000000000000000000000000000006044820152606401610b58565b611069816136cc565b6000818152601c602090815260408083204290556018909152812080549190556110ca73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001633836137a5565b60005b6015548110156111b557600060158281548110611113577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600091825260208083209091015486835260218252604080842073ffffffffffffffffffffffffffffffffffffffff9092168085529190925291205490915080156111a05773ffffffffffffffffffffffffffffffffffffffff82166000818152602260209081526040808320858452825280832083905588835260218252808320938352929052908120555b505080806111ad90615268565b9150506110cd565b50604051818152829033907ff960dbf9e5d0682f7a298ed974e33a28b4464914b7a2bfac12ae419a9afeb2809060200160405180910390a350506001600355565b600061120183612413565b821061128f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e64730000000000000000000000000000000000000000006064820152608401610b58565b5073ffffffffffffffffffffffffffffffffffffffff919091166000908152600a60209081526040808320938352929052205490565b60005473ffffffffffffffffffffffffffffffffffffffff1633146112e957600080fd5b60165481516015546112fb91906151a5565b1115611388576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45786365656473206d6178696d756d206e756d626572206f662076616c69642060448201527f4e465473000000000000000000000000000000000000000000000000000000006064820152608401610b58565b60005b815181101561154b5760008282815181106113cf577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff8116600090815291805260409091205490915060ff161561146d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e465420616c72656164792061646465640000000000000000000000000000006044820152606401610b58565b73ffffffffffffffffffffffffffffffffffffffff8116600081815260208052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600190811790915560158054918201815583527f55f448fdea98c4d29eb340757ef0a66cd03dbb9538908a6a81d96026b71ec4750180547fffffffffffffffffffffffff00000000000000000000000000000000000000001684179055517f6f0f8cee3d9c2f167393540bc77d82ef43045c19beafd62240a7e45f2519171a9190a2508061154381615268565b91505061138b565b5050565b610d1283838360405180602001604052806000815250612959565b60006115768483613879565b6115808585613879565b60008781526019602052604090205461159991906151bd565b6115a391906152a1565b90505b949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146115d257600080fd5b600e54811161163d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f43617020616c72656164792065786365656465640000000000000000000000006044820152606401610b58565b600e8190556040518181527fddf4c293a3479db41117899542b2a5d272b166296d11693304a6c1eac191054b90602001610d6c565b600061167d600c5490565b821061170b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e647300000000000000000000000000000000000000006064820152608401610b58565b600c8281548110611745577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001549050919050565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208052604090205460ff166117e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4e6f742076616c6964204e4654000000000000000000000000000000000000006044820152606401610b58565b336117ef8461218a565b73ffffffffffffffffffffffffffffffffffffffff1614611892576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f596f7520617265206e6f7420746865206f776e6572206f66207468697320747260448201527f6f6c6c00000000000000000000000000000000000000000000000000000000006064820152608401610b58565b6040517f6352211e00000000000000000000000000000000000000000000000000000000815260048101829052339073ffffffffffffffffffffffffffffffffffffffff841690636352211e9060240160206040518083038186803b1580156118fa57600080fd5b505afa15801561190e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119329190614b48565b73ffffffffffffffffffffffffffffffffffffffff16146119d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f596f7520617265206e6f7420746865206f776e6572206f662074686973204e4660448201527f54000000000000000000000000000000000000000000000000000000000000006064820152608401610b58565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260226020908152604080832084845290915290205415611a6d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4e465420616c72656164792065717569707065640000000000000000000000006044820152606401610b58565b600083815260216020908152604080832073ffffffffffffffffffffffffffffffffffffffff8616845290915290205415611b2a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f456163682074726f6c6c2063616e206f6e6c79206571756970206f6e6520746f60448201527f6b656e20706572204e46540000000000000000000000000000000000000000006064820152608401610b58565b73ffffffffffffffffffffffffffffffffffffffff82166000818152602260209081526040808320858452825280832087905586835260218252808320848452825291829020849055905183815285917f5f3e52a313d16d3e3d13ea422592abcdf8484958442b5d977890b64c53523e2391015b60405180910390a3505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611bcf57600080fd5b8051611be290600f9060208401906149d3565b507f01e56a02aca7f26a28165a040851ba78f30282b55ca81c63a804cdc1e2dcea72600f604051610d6c9190615079565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208052604090205460ff16611ca1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4e6f742076616c6964204e4654000000000000000000000000000000000000006044820152606401610b58565b33611cab8461218a565b73ffffffffffffffffffffffffffffffffffffffff1614611d4e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f596f7520617265206e6f7420746865206f776e6572206f66207468697320747260448201527f6f6c6c00000000000000000000000000000000000000000000000000000000006064820152608401610b58565b6040517f6352211e00000000000000000000000000000000000000000000000000000000815260048101829052339073ffffffffffffffffffffffffffffffffffffffff841690636352211e9060240160206040518083038186803b158015611db657600080fd5b505afa158015611dca573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dee9190614b48565b73ffffffffffffffffffffffffffffffffffffffff1614611e91576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f596f7520617265206e6f7420746865206f776e6572206f662074686973204e4660448201527f54000000000000000000000000000000000000000000000000000000000000006064820152608401610b58565b73ffffffffffffffffffffffffffffffffffffffff821660009081526022602090815260408083208484529091529020548314611f50576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f54686973204e465420646f6573206e6f742062656c6f6e6720746f207468697360448201527f2074726f6c6c00000000000000000000000000000000000000000000000000006064820152608401610b58565b600083815260216020908152604080832073ffffffffffffffffffffffffffffffffffffffff861684529091529020548114611fe8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f546869732074726f6c6c20646f6573206e6f74206f776e2074686973204e46546044820152606401610b58565b73ffffffffffffffffffffffffffffffffffffffff82166000818152602260209081526040808320858452825280832083905586835260218252808320848452825280832092909255905183815285917f209edba55054a6d25cdb7cd481d568e6a0fbe2ecc48276caee30a061cb1f744f9101611b9e565b60015473ffffffffffffffffffffffffffffffffffffffff163314612107576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610b58565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60008181526006602052604081205473ffffffffffffffffffffffffffffffffffffffff1680610a13576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e00000000000000000000000000000000000000000000006064820152608401610b58565b60005473ffffffffffffffffffffffffffffffffffffffff16331461226057600080fd5b60105460ff1661229657601080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790555b80156122ef5773ffffffffffffffffffffffffffffffffffffffff82166000908152601e6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905561233b565b73ffffffffffffffffffffffffffffffffffffffff82166000908152601e6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690555b8173ffffffffffffffffffffffffffffffffffffffff167fd1b1846bd2f96d78a14f8960ca200e7a29f8d8d08c0386ffe28dc5c99067c52382604051610f72911515815260200190565b600f805461239290615214565b80601f01602080910402602001604051908101604052809291908181526020018280546123be90615214565b801561240b5780601f106123e05761010080835404028352916020019161240b565b820191906000526020600020905b8154815290600101906020018083116123ee57829003601f168201915b505050505081565b600073ffffffffffffffffffffffffffffffffffffffff82166124b8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f2061646472657373000000000000000000000000000000000000000000006064820152608401610b58565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526007602052604090205490565b6002600354141561254e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610b58565b600260035560135473ffffffffffffffffffffffffffffffffffffffff161580159061257c57506000601454115b156125d3576014805460009091556013546125d19073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081169116836137a5565b505b6001600355565b606060058054610a2890615214565b60005473ffffffffffffffffffffffffffffffffffffffff16331461260d57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a78849101610d6c565b73ffffffffffffffffffffffffffffffffffffffff8216331415612709576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610b58565b33600081815260096020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146127c457600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf59101610d6c565b600061284e8261390b565b60408051466020820181905243928201929092527fffffffffffffffffffffffffffffffffffffffff00000000000000000000000030606090811b82168184015233901b16607482015291925090600090608801604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001815282825280516020918201206000878152601983529290922082905581835290925084917f1e6edca497f4aff07b388b2c8af55371a16eb956ed650861cb45f11758e4a65b910160405180910390a25050919050565b6015818154811061293257600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b61296333836132ee565b6129ef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f7665640000000000000000000000000000006064820152608401610b58565b6129fb84848484613c9c565b50505050565b60008181526006602052604090205460609073ffffffffffffffffffffffffffffffffffffffff16612ab5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e00000000000000000000000000000000006064820152608401610b58565b6000612abf613d3f565b90506000815111612adf5760405180602001604052806000815250612b0a565b80612ae984613d4e565b604051602001612afa929190614faa565b6040516020818303038152906040525b9392505050565b6060818067ffffffffffffffff811115612b54577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015612b7d578160200160208202803683370190505b5060008781526019602052604081205491935090815b83811015612ca657612be488888884818110612bd8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020135613879565b612bee8985613879565b612bf890846151bd565b612c0291906152a1565b858281518110612c3b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018181525050868682818110612c80577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002013583612c9291906151a5565b925080612c9e81615268565b915050612b93565b50505050949350505050565b33612cbc8361218a565b73ffffffffffffffffffffffffffffffffffffffff1614612d39576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f7420617574686f72697a65640000000000000000000000000000000000006044820152606401610b58565b612d7b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016333084613ece565b60008281526018602052604081208054839290612d999084906151a5565b90915550506000828152601d6020908152604080832042905560188252918290205482518481529182015283917f9dd9373946c68e9420a62b36f888feb3e769b907bb535e27af7f59f2886337499101610f72565b60005473ffffffffffffffffffffffffffffffffffffffff163314612e1257600080fd5b811580612e34575073ffffffffffffffffffffffffffffffffffffffff811615155b612e9a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f496e76616c69642070726f746f636f6c4665652f466565546f000000000000006044820152606401610b58565b6012829055601380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040805184815260208101929092527f5ecd7df85e51aff79e169c80a23d9299697dcb741138d732a78485f61370843d910160405180910390a15050565b60005473ffffffffffffffffffffffffffffffffffffffff163314612f4457600080fd5b601080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558060005b818110156129fb576001601e6000868685818110612fba577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002016020810190612fcf9190614b2c565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001691151591909117905583838281811061305b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020160208101906130709190614b2c565b73ffffffffffffffffffffffffffffffffffffffff167fd1b1846bd2f96d78a14f8960ca200e7a29f8d8d08c0386ffe28dc5c99067c52360016040516130ba911515815260200190565b60405180910390a2806130cc81615268565b915050612f73565b60005473ffffffffffffffffffffffffffffffffffffffff1633146130f857600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b90602001610d6c565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd0000000000000000000000000000000000000000000000000000000014806131fe57507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b80610a1357507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610a13565b600081815260086020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841690811790915581906132a88261218a565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008181526006602052604081205473ffffffffffffffffffffffffffffffffffffffff1661339f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e00000000000000000000000000000000000000006064820152608401610b58565b60006133aa8361218a565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061341957508373ffffffffffffffffffffffffffffffffffffffff1661340184610aab565b73ffffffffffffffffffffffffffffffffffffffff16145b806115a6575073ffffffffffffffffffffffffffffffffffffffff80821660009081526009602090815260408083209388168352929052205460ff166115a6565b8273ffffffffffffffffffffffffffffffffffffffff1661347a8261218a565b73ffffffffffffffffffffffffffffffffffffffff161461351d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e00000000000000000000000000000000000000000000006064820152608401610b58565b73ffffffffffffffffffffffffffffffffffffffff82166135bf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610b58565b6135ca838383613f2c565b6135d560008261324e565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260076020526040812080546001929061360b9084906151d1565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526007602052604081208054600192906136469084906151a5565b909155505060008181526006602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff86811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60006136d78261218a565b90506136e581600084613f2c565b6136f060008361324e565b73ffffffffffffffffffffffffffffffffffffffff811660009081526007602052604081208054600192906137269084906151d1565b909155505060008281526006602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690555183919073ffffffffffffffffffffffffffffffffffffffff8416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610d129084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152614032565b60008280156138ed5760018316801561389457849250613899565b600192505b506002830492505b82156138e85783840284858204146138b857600080fd5b935060018316156138dd5783820282858204141585151516156138da57600080fd5b91505b6002830492506138a1565b613904565b8280156138fd5760009250613902565b600192505b505b5092915050565b60006002600354141561397a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610b58565b600260035560105460ff1615806139a05750336000908152601e602052604090205460ff165b613a06576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f7420617574686f72697a65640000000000000000000000000000000000006044820152606401610b58565b600060125483613a1691906151d1565b9050601154811015613a84576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4d696e696e756d207374616b65206e6f74206d657400000000000000000000006044820152606401610b58565b600e54600c5410613af1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f43617020657863656564656400000000000000000000000000000000000000006044820152606401610b58565b60105460ff161580613b135750336000908152601f602052604090205460ff16155b613b79576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f596f752063616e206f6e6c79207374616b65206f6e63650000000000000000006044820152606401610b58565b601760008154613b8890615268565b91829055509150613bd173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016333086613ece565b60008281526018602052604081208290556012546014805491929091613bf89084906151a5565b9091555050336000818152601f6020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055858352601b82528083204290819055601d90925290912055613c5a908361413e565b604051838152829033907f5af417134f72a9d41143ace85b0a26dce6f550f894f2cbc1eeee8810603d91b69060200160405180910390a3506001600355919050565b613ca784848461345a565b613cb384848484614158565b6129fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610b58565b6060600f8054610a2890615214565b606081613d8e57505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115613db85780613da281615268565b9150613db19050600a836151bd565b9150613d92565b60008167ffffffffffffffff811115613dfa577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015613e24576020820181803683370190505b5090505b84156115a657613e396001836151d1565b9150613e46600a866152a1565b613e519060306151a5565b60f81b818381518110613e8d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350613ec7600a866151bd565b9450613e28565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526129fb9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016137f7565b73ffffffffffffffffffffffffffffffffffffffff8316613f9457613f8f81600c80546000838152600d60205260408120829055600182018355919091527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c70155565b613fd1565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614613fd157613fd18382614354565b73ffffffffffffffffffffffffffffffffffffffff8216613ff557610d128161440b565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610d1257610d12828261452f565b6000614094826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166145809092919063ffffffff16565b805190915015610d1257808060200190518101906140b29190614da5565b610d12576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610b58565b61154b82826040518060200160405280600081525061458f565b600073ffffffffffffffffffffffffffffffffffffffff84163b1561434c576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a02906141cf903390899088908890600401614fd9565b602060405180830381600087803b1580156141e957600080fd5b505af1925050508015614237575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261423491810190614ddd565b60015b614301573d808015614265576040519150601f19603f3d011682016040523d82523d6000602084013e61426a565b606091505b5080516142f9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610b58565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a02000000000000000000000000000000000000000000000000000000001490506115a6565b5060016115a6565b6000600161436184612413565b61436b91906151d1565b6000838152600b60205260409020549091508082146143cb5773ffffffffffffffffffffffffffffffffffffffff84166000908152600a602090815260408083208584528252808320548484528184208190558352600b90915290208190555b506000918252600b6020908152604080842084905573ffffffffffffffffffffffffffffffffffffffff9094168352600a81528383209183525290812055565b600c5460009061441d906001906151d1565b6000838152600d6020526040812054600c805493945090928490811061446c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905080600c83815481106144b4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000918252602080832090910192909255828152600d9091526040808220849055858252812055600c805480614513577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b600061453a83612413565b73ffffffffffffffffffffffffffffffffffffffff9093166000908152600a602090815260408083208684528252808320859055938252600b9052919091209190915550565b60606115a68484600085614632565b61459983836147b2565b6145a66000848484614158565b610d12576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610b58565b6060824710156146c4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610b58565b843b61472c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610b58565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516147559190614f8e565b60006040518083038185875af1925050503d8060008114614792576040519150601f19603f3d011682016040523d82523d6000602084013e614797565b606091505b50915091506147a7828286614980565b979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff821661482f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610b58565b60008181526006602052604090205473ffffffffffffffffffffffffffffffffffffffff16156148bb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610b58565b6148c760008383613f2c565b73ffffffffffffffffffffffffffffffffffffffff821660009081526007602052604081208054600192906148fd9084906151a5565b909155505060008181526006602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6060831561498f575081612b0a565b82511561499f5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b589190615066565b8280546149df90615214565b90600052602060002090601f016020900481019282614a015760008555614a47565b82601f10614a1a57805160ff1916838001178555614a47565b82800160010185558215614a47579182015b82811115614a47578251825591602001919060010190614a2c565b50614a53929150614a57565b5090565b5b80821115614a535760008155600101614a58565b600067ffffffffffffffff831115614a8657614a86615313565b614ab760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f86011601615156565b9050828152838383011115614acb57600080fd5b828260208301376000602084830101529392505050565b60008083601f840112614af3578182fd5b50813567ffffffffffffffff811115614b0a578182fd5b6020830191508360208260051b8501011115614b2557600080fd5b9250929050565b600060208284031215614b3d578081fd5b8135612b0a81615342565b600060208284031215614b59578081fd5b8151612b0a81615342565b60008060408385031215614b76578081fd5b8235614b8181615342565b91506020830135614b9181615342565b809150509250929050565b600080600060608486031215614bb0578081fd5b8335614bbb81615342565b92506020840135614bcb81615342565b929592945050506040919091013590565b60008060008060808587031215614bf1578081fd5b8435614bfc81615342565b93506020850135614c0c81615342565b925060408501359150606085013567ffffffffffffffff811115614c2e578182fd5b8501601f81018713614c3e578182fd5b614c4d87823560208401614a6c565b91505092959194509250565b60008060408385031215614c6b578182fd5b8235614c7681615342565b91506020830135614b9181615367565b60008060408385031215614c98578182fd5b8235614ca381615342565b946020939093013593505050565b60008060208385031215614cc3578182fd5b823567ffffffffffffffff811115614cd9578283fd5b614ce585828601614ae2565b90969095509350505050565b60006020808385031215614d03578182fd5b823567ffffffffffffffff80821115614d1a578384fd5b818501915085601f830112614d2d578384fd5b813581811115614d3f57614d3f615313565b8060051b9150614d50848301615156565b8181528481019084860184860187018a1015614d6a578788fd5b8795505b83861015614d985780359450614d8385615342565b84835260019590950194918601918601614d6e565b5098975050505050505050565b600060208284031215614db6578081fd5b8151612b0a81615367565b600060208284031215614dd2578081fd5b8135612b0a81615375565b600060208284031215614dee578081fd5b8151612b0a81615375565b600060208284031215614e0a578081fd5b813567ffffffffffffffff811115614e20578182fd5b8201601f81018413614e30578182fd5b6115a684823560208401614a6c565b600060208284031215614e50578081fd5b5035919050565b60008060408385031215614e69578182fd5b823591506020830135614b9181615342565b600080600060608486031215614e8f578081fd5b833592506020840135614bcb81615342565b60008060408385031215614eb3578182fd5b50508035926020909101359150565b60008060008060608587031215614ed7578182fd5b8435935060208501359250604085013567ffffffffffffffff811115614efb578283fd5b614f0787828801614ae2565b95989497509550505050565b60008060008060808587031215614f28578182fd5b5050823594602084013594506040840135936060013592509050565b60008151808452614f5c8160208601602086016151e8565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60008251614fa08184602087016151e8565b9190910192915050565b60008351614fbc8184602088016151e8565b835190830190614fd08183602088016151e8565b01949350505050565b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250836040830152608060608301526150186080830184614f44565b9695505050505050565b6020808252825182820181905260009190848201906040850190845b8181101561505a5783518352928401929184019160010161503e565b50909695505050505050565b602081526000612b0a6020830184614f44565b6000602080835281845483600182811c91508083168061509a57607f831692505b8583108114156150d1577f4e487b710000000000000000000000000000000000000000000000000000000087526022600452602487fd5b8786018381526020018180156150ee576001811461511d57615147565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00861682528782019650615147565b60008b815260209020895b8681101561514157815484820152908501908901615128565b83019750505b50949998505050505050505050565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561519d5761519d615313565b604052919050565b600082198211156151b8576151b86152b5565b500190565b6000826151cc576151cc6152e4565b500490565b6000828210156151e3576151e36152b5565b500390565b60005b838110156152035781810151838201526020016151eb565b838111156129fb5750506000910152565b600181811c9082168061522857607f821691505b60208210811415615262577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561529a5761529a6152b5565b5060010190565b6000826152b0576152b06152e4565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff8116811461536457600080fd5b50565b801515811461536457600080fd5b7fffffffff000000000000000000000000000000000000000000000000000000008116811461536457600080fdfea26469706673582212204669431be0d7a44ef37812a6798d244c7feda664f55f99a7783ad21722e33dac64736f6c6343000804003345786365656473206d6178696d756d206e756d626572206f662076616c696420"
};

// src/contracts/TrollNFTV2.ts
var TrollNFTV2 = class extends import_eth_wallet4.Contract {
  constructor(wallet, address) {
    super(wallet, address, TrollNFTV2_json_default.abi, TrollNFTV2_json_default.bytecode);
    this.assign();
  }
  deploy(params) {
    return this._deploy(params.name, params.symbol, params.baseURI, import_eth_wallet4.Utils.toString(params.cap), params.stakeToken, params.requireApproval, import_eth_wallet4.Utils.toString(params.minimumStake), import_eth_wallet4.Utils.toString(params.protocolFee), params.protocolFeeTo, [params.nftInfo.listValidNFTs, import_eth_wallet4.Utils.toString(params.nftInfo.maximumValidNFTs)]);
  }
  parseAddStakesEvent(receipt) {
    return this.parseEvents(receipt, "AddStakes").map((e) => this.decodeAddStakesEvent(e));
  }
  decodeAddStakesEvent(event) {
    let result = event.data;
    return {
      tokenId: new import_eth_wallet4.BigNumber(result.tokenId),
      amountAdded: new import_eth_wallet4.BigNumber(result.amountAdded),
      newAmount: new import_eth_wallet4.BigNumber(result.newAmount),
      _event: event
    };
  }
  parseAddValidNFTEvent(receipt) {
    return this.parseEvents(receipt, "AddValidNFT").map((e) => this.decodeAddValidNFTEvent(e));
  }
  decodeAddValidNFTEvent(event) {
    let result = event.data;
    return {
      nft: result.nft,
      _event: event
    };
  }
  parseApprovalEvent(receipt) {
    return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
  }
  decodeApprovalEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      approved: result.approved,
      tokenId: new import_eth_wallet4.BigNumber(result.tokenId),
      _event: event
    };
  }
  parseApprovalForAllEvent(receipt) {
    return this.parseEvents(receipt, "ApprovalForAll").map((e) => this.decodeApprovalForAllEvent(e));
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
    return this.parseEvents(receipt, "ApprovedStaker").map((e) => this.decodeApprovedStakerEvent(e));
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
    return this.parseEvents(receipt, "Attribute").map((e) => this.decodeAttributeEvent(e));
  }
  decodeAttributeEvent(event) {
    let result = event.data;
    return {
      tokenId: new import_eth_wallet4.BigNumber(result.tokenId),
      attribute: new import_eth_wallet4.BigNumber(result.attribute),
      _event: event
    };
  }
  parseAuthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Authorize").map((e) => this.decodeAuthorizeEvent(e));
  }
  decodeAuthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseBaseURIEvent(receipt) {
    return this.parseEvents(receipt, "BaseURI").map((e) => this.decodeBaseURIEvent(e));
  }
  decodeBaseURIEvent(event) {
    let result = event.data;
    return {
      baseURI: result.baseURI,
      _event: event
    };
  }
  parseCapEvent(receipt) {
    return this.parseEvents(receipt, "Cap").map((e) => this.decodeCapEvent(e));
  }
  decodeCapEvent(event) {
    let result = event.data;
    return {
      cap: new import_eth_wallet4.BigNumber(result.cap),
      _event: event
    };
  }
  parseCustomAttributeEvent(receipt) {
    return this.parseEvents(receipt, "CustomAttribute").map((e) => this.decodeCustomAttributeEvent(e));
  }
  decodeCustomAttributeEvent(event) {
    let result = event.data;
    return {
      tokenId: new import_eth_wallet4.BigNumber(result.tokenId),
      attribute: new import_eth_wallet4.BigNumber(result.attribute),
      _event: event
    };
  }
  parseDeauthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Deauthorize").map((e) => this.decodeDeauthorizeEvent(e));
  }
  decodeDeauthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseEquipNFTEvent(receipt) {
    return this.parseEvents(receipt, "EquipNFT").map((e) => this.decodeEquipNFTEvent(e));
  }
  decodeEquipNFTEvent(event) {
    let result = event.data;
    return {
      trollId: new import_eth_wallet4.BigNumber(result.trollId),
      nft: result.nft,
      nftId: new import_eth_wallet4.BigNumber(result.nftId),
      _event: event
    };
  }
  parseMinimumStakeEvent(receipt) {
    return this.parseEvents(receipt, "MinimumStake").map((e) => this.decodeMinimumStakeEvent(e));
  }
  decodeMinimumStakeEvent(event) {
    let result = event.data;
    return {
      minimumStake: new import_eth_wallet4.BigNumber(result.minimumStake),
      _event: event
    };
  }
  parseProtocolFeeEvent(receipt) {
    return this.parseEvents(receipt, "ProtocolFee").map((e) => this.decodeProtocolFeeEvent(e));
  }
  decodeProtocolFeeEvent(event) {
    let result = event.data;
    return {
      protocolFee: new import_eth_wallet4.BigNumber(result.protocolFee),
      protocolFeeTo: result.protocolFeeTo,
      _event: event
    };
  }
  parseStakeEvent(receipt) {
    return this.parseEvents(receipt, "Stake").map((e) => this.decodeStakeEvent(e));
  }
  decodeStakeEvent(event) {
    let result = event.data;
    return {
      who: result.who,
      tokenId: new import_eth_wallet4.BigNumber(result.tokenId),
      amount: new import_eth_wallet4.BigNumber(result.amount),
      _event: event
    };
  }
  parseStakesApprovalEvent(receipt) {
    return this.parseEvents(receipt, "StakesApproval").map((e) => this.decodeStakesApprovalEvent(e));
  }
  decodeStakesApprovalEvent(event) {
    let result = event.data;
    return {
      fromTokenId: new import_eth_wallet4.BigNumber(result.fromTokenId),
      spender: result.spender,
      amount: new import_eth_wallet4.BigNumber(result.amount),
      _event: event
    };
  }
  parseStakesTransferEvent(receipt) {
    return this.parseEvents(receipt, "StakesTransfer").map((e) => this.decodeStakesTransferEvent(e));
  }
  decodeStakesTransferEvent(event) {
    let result = event.data;
    return {
      fromTokenId: new import_eth_wallet4.BigNumber(result.fromTokenId),
      toTokenId: new import_eth_wallet4.BigNumber(result.toTokenId),
      amount: new import_eth_wallet4.BigNumber(result.amount),
      _event: event
    };
  }
  parseStartOwnershipTransferEvent(receipt) {
    return this.parseEvents(receipt, "StartOwnershipTransfer").map((e) => this.decodeStartOwnershipTransferEvent(e));
  }
  decodeStartOwnershipTransferEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      from: result.from,
      to: result.to,
      tokenId: new import_eth_wallet4.BigNumber(result.tokenId),
      _event: event
    };
  }
  parseTransferOwnershipEvent(receipt) {
    return this.parseEvents(receipt, "TransferOwnership").map((e) => this.decodeTransferOwnershipEvent(e));
  }
  decodeTransferOwnershipEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseUnequipNFTEvent(receipt) {
    return this.parseEvents(receipt, "UnequipNFT").map((e) => this.decodeUnequipNFTEvent(e));
  }
  decodeUnequipNFTEvent(event) {
    let result = event.data;
    return {
      trollId: new import_eth_wallet4.BigNumber(result.trollId),
      nft: result.nft,
      nftId: new import_eth_wallet4.BigNumber(result.nftId),
      _event: event
    };
  }
  parseUnstakeEvent(receipt) {
    return this.parseEvents(receipt, "Unstake").map((e) => this.decodeUnstakeEvent(e));
  }
  decodeUnstakeEvent(event) {
    let result = event.data;
    return {
      who: result.who,
      tokenId: new import_eth_wallet4.BigNumber(result.tokenId),
      amount: new import_eth_wallet4.BigNumber(result.amount),
      _event: event
    };
  }
  async _attributes(param1) {
    let result = await this.call("_attributes", [import_eth_wallet4.Utils.toString(param1)]);
    return new import_eth_wallet4.BigNumber(result);
  }
  async _customAttributes(param1) {
    let result = await this.call("_customAttributes", [import_eth_wallet4.Utils.toString(param1)]);
    return new import_eth_wallet4.BigNumber(result);
  }
  async _stakesTransferAllowances(params) {
    let result = await this.call("_stakesTransferAllowances", [import_eth_wallet4.Utils.toString(params.param1), params.param2]);
    return new import_eth_wallet4.BigNumber(result);
  }
  async addStakes_send(params) {
    let result = await this.send("addStakes", [import_eth_wallet4.Utils.toString(params.tokenId), import_eth_wallet4.Utils.toString(params.amount)]);
    return result;
  }
  async addStakes_call(params) {
    let result = await this.call("addStakes", [import_eth_wallet4.Utils.toString(params.tokenId), import_eth_wallet4.Utils.toString(params.amount)]);
    return;
  }
  async addValidNFTs_send(nfts) {
    let result = await this.send("addValidNFTs", [nfts]);
    return result;
  }
  async addValidNFTs_call(nfts) {
    let result = await this.call("addValidNFTs", [nfts]);
    return;
  }
  async approve_send(params) {
    let result = await this.send("approve", [params.to, import_eth_wallet4.Utils.toString(params.tokenId)]);
    return result;
  }
  async approve_call(params) {
    let result = await this.call("approve", [params.to, import_eth_wallet4.Utils.toString(params.tokenId)]);
    return;
  }
  async approvedStaker(param1) {
    let result = await this.call("approvedStaker", [param1]);
    return result;
  }
  async balanceOf(owner) {
    let result = await this.call("balanceOf", [owner]);
    return new import_eth_wallet4.BigNumber(result);
  }
  async baseURI() {
    let result = await this.call("baseURI");
    return result;
  }
  async batchApprove_send(stakers) {
    let result = await this.send("batchApprove", [stakers]);
    return result;
  }
  async batchApprove_call(stakers) {
    let result = await this.call("batchApprove", [stakers]);
    return;
  }
  async cap() {
    let result = await this.call("cap");
    return new import_eth_wallet4.BigNumber(result);
  }
  async counter() {
    let result = await this.call("counter");
    return new import_eth_wallet4.BigNumber(result);
  }
  async creationDate(param1) {
    let result = await this.call("creationDate", [import_eth_wallet4.Utils.toString(param1)]);
    return new import_eth_wallet4.BigNumber(result);
  }
  async deny_send(user) {
    let result = await this.send("deny", [user]);
    return result;
  }
  async deny_call(user) {
    let result = await this.call("deny", [user]);
    return;
  }
  async destoryDate(param1) {
    let result = await this.call("destoryDate", [import_eth_wallet4.Utils.toString(param1)]);
    return new import_eth_wallet4.BigNumber(result);
  }
  async equipNFT_send(params) {
    let result = await this.send("equipNFT", [import_eth_wallet4.Utils.toString(params.trollId), params.nft, import_eth_wallet4.Utils.toString(params.nftId)]);
    return result;
  }
  async equipNFT_call(params) {
    let result = await this.call("equipNFT", [import_eth_wallet4.Utils.toString(params.trollId), params.nft, import_eth_wallet4.Utils.toString(params.nftId)]);
    return;
  }
  async extraStakes(param1) {
    let result = await this.call("extraStakes", [import_eth_wallet4.Utils.toString(param1)]);
    return new import_eth_wallet4.BigNumber(result);
  }
  async getApproved(tokenId) {
    let result = await this.call("getApproved", [import_eth_wallet4.Utils.toString(tokenId)]);
    return result;
  }
  async getAttributes1(params) {
    let result = await this.call("getAttributes1", [import_eth_wallet4.Utils.toString(params.tokenId), import_eth_wallet4.Utils.toString(params.base), import_eth_wallet4.Utils.toString(params.offset), import_eth_wallet4.Utils.toString(params.digits)]);
    return new import_eth_wallet4.BigNumber(result);
  }
  async getAttributes2(params) {
    let result = await this.call("getAttributes2", [import_eth_wallet4.Utils.toString(params.tokenId), import_eth_wallet4.Utils.toString(params.base), import_eth_wallet4.Utils.toString(params.digits)]);
    return result.map((e) => new import_eth_wallet4.BigNumber(e));
  }
  async isApprovedForAll(params) {
    let result = await this.call("isApprovedForAll", [params.owner, params.operator]);
    return result;
  }
  async isPermitted(param1) {
    let result = await this.call("isPermitted", [param1]);
    return result;
  }
  async isValidNFT(param1) {
    let result = await this.call("isValidNFT", [param1]);
    return result;
  }
  async lastStakeDate(param1) {
    let result = await this.call("lastStakeDate", [import_eth_wallet4.Utils.toString(param1)]);
    return new import_eth_wallet4.BigNumber(result);
  }
  async listValidNFTs(param1) {
    let result = await this.call("listValidNFTs", [import_eth_wallet4.Utils.toString(param1)]);
    return result;
  }
  async maximumValidNFTs() {
    let result = await this.call("maximumValidNFTs");
    return new import_eth_wallet4.BigNumber(result);
  }
  async minimumStake() {
    let result = await this.call("minimumStake");
    return new import_eth_wallet4.BigNumber(result);
  }
  async minted(param1) {
    let result = await this.call("minted", [param1]);
    return result;
  }
  async name() {
    let result = await this.call("name");
    return result;
  }
  async newOwner() {
    let result = await this.call("newOwner");
    return result;
  }
  async nftsEquipped(params) {
    let result = await this.call("nftsEquipped", [params.param1, import_eth_wallet4.Utils.toString(params.param2)]);
    return new import_eth_wallet4.BigNumber(result);
  }
  async owner() {
    let result = await this.call("owner");
    return result;
  }
  async ownerOf(tokenId) {
    let result = await this.call("ownerOf", [import_eth_wallet4.Utils.toString(tokenId)]);
    return result;
  }
  async permit_send(user) {
    let result = await this.send("permit", [user]);
    return result;
  }
  async permit_call(user) {
    let result = await this.call("permit", [user]);
    return;
  }
  async protocolFee() {
    let result = await this.call("protocolFee");
    return new import_eth_wallet4.BigNumber(result);
  }
  async protocolFeeBalance() {
    let result = await this.call("protocolFeeBalance");
    return new import_eth_wallet4.BigNumber(result);
  }
  async protocolFeeTo() {
    let result = await this.call("protocolFeeTo");
    return result;
  }
  async requireApproval() {
    let result = await this.call("requireApproval");
    return result;
  }
  async safeTransferFrom_send(params) {
    let result = await this.send("safeTransferFrom", [params.from, params.to, import_eth_wallet4.Utils.toString(params.tokenId)]);
    return result;
  }
  async safeTransferFrom_call(params) {
    let result = await this.call("safeTransferFrom", [params.from, params.to, import_eth_wallet4.Utils.toString(params.tokenId)]);
    return;
  }
  async safeTransferFrom_1_send(params) {
    let result = await this.send("safeTransferFrom", [params.from, params.to, import_eth_wallet4.Utils.toString(params.tokenId), params.data]);
    return result;
  }
  async safeTransferFrom_1_call(params) {
    let result = await this.call("safeTransferFrom", [params.from, params.to, import_eth_wallet4.Utils.toString(params.tokenId), params.data]);
    return;
  }
  async setApprovalForAll_send(params) {
    let result = await this.send("setApprovalForAll", [params.operator, params.approved]);
    return result;
  }
  async setApprovalForAll_call(params) {
    let result = await this.call("setApprovalForAll", [params.operator, params.approved]);
    return;
  }
  async setApprovedStaker_send(params) {
    let result = await this.send("setApprovedStaker", [params.staker, params.allow]);
    return result;
  }
  async setApprovedStaker_call(params) {
    let result = await this.call("setApprovedStaker", [params.staker, params.allow]);
    return;
  }
  async setBaseURI_send(baseURI) {
    let result = await this.send("setBaseURI", [baseURI]);
    return result;
  }
  async setBaseURI_call(baseURI) {
    let result = await this.call("setBaseURI", [baseURI]);
    return;
  }
  async setCap_send(cap) {
    let result = await this.send("setCap", [import_eth_wallet4.Utils.toString(cap)]);
    return result;
  }
  async setCap_call(cap) {
    let result = await this.call("setCap", [import_eth_wallet4.Utils.toString(cap)]);
    return;
  }
  async setCustomAttribute_send(params) {
    let result = await this.send("setCustomAttribute", [import_eth_wallet4.Utils.toString(params.tokenId), import_eth_wallet4.Utils.toString(params.attribute)]);
    return result;
  }
  async setCustomAttribute_call(params) {
    let result = await this.call("setCustomAttribute", [import_eth_wallet4.Utils.toString(params.tokenId), import_eth_wallet4.Utils.toString(params.attribute)]);
    return;
  }
  async setMinimumStake_send(minimumStake) {
    let result = await this.send("setMinimumStake", [import_eth_wallet4.Utils.toString(minimumStake)]);
    return result;
  }
  async setMinimumStake_call(minimumStake) {
    let result = await this.call("setMinimumStake", [import_eth_wallet4.Utils.toString(minimumStake)]);
    return;
  }
  async setProtocolFee_send(params) {
    let result = await this.send("setProtocolFee", [import_eth_wallet4.Utils.toString(params.protocolFee), params.protocolFeeTo]);
    return result;
  }
  async setProtocolFee_call(params) {
    let result = await this.call("setProtocolFee", [import_eth_wallet4.Utils.toString(params.protocolFee), params.protocolFeeTo]);
    return;
  }
  async stake_send(amount) {
    let result = await this.send("stake", [import_eth_wallet4.Utils.toString(amount)]);
    return result;
  }
  async stake_call(amount) {
    let result = await this.call("stake", [import_eth_wallet4.Utils.toString(amount)]);
    return new import_eth_wallet4.BigNumber(result);
  }
  async stakeToken() {
    let result = await this.call("stakeToken");
    return result;
  }
  async stakingBalance(param1) {
    let result = await this.call("stakingBalance", [import_eth_wallet4.Utils.toString(param1)]);
    return new import_eth_wallet4.BigNumber(result);
  }
  async supportsInterface(interfaceId) {
    let result = await this.call("supportsInterface", [interfaceId]);
    return result;
  }
  async symbol() {
    let result = await this.call("symbol");
    return result;
  }
  async takeOwnership_send() {
    let result = await this.send("takeOwnership");
    return result;
  }
  async takeOwnership_call() {
    let result = await this.call("takeOwnership");
    return;
  }
  async tokenByIndex(index) {
    let result = await this.call("tokenByIndex", [import_eth_wallet4.Utils.toString(index)]);
    return new import_eth_wallet4.BigNumber(result);
  }
  async tokenOfOwnerByIndex(params) {
    let result = await this.call("tokenOfOwnerByIndex", [params.owner, import_eth_wallet4.Utils.toString(params.index)]);
    return new import_eth_wallet4.BigNumber(result);
  }
  async tokenURI(tokenId) {
    let result = await this.call("tokenURI", [import_eth_wallet4.Utils.toString(tokenId)]);
    return result;
  }
  async totalSupply() {
    let result = await this.call("totalSupply");
    return new import_eth_wallet4.BigNumber(result);
  }
  async transferFrom_send(params) {
    let result = await this.send("transferFrom", [params.from, params.to, import_eth_wallet4.Utils.toString(params.tokenId)]);
    return result;
  }
  async transferFrom_call(params) {
    let result = await this.call("transferFrom", [params.from, params.to, import_eth_wallet4.Utils.toString(params.tokenId)]);
    return;
  }
  async transferOwnership_send(newOwner) {
    let result = await this.send("transferOwnership", [newOwner]);
    return result;
  }
  async transferOwnership_call(newOwner) {
    let result = await this.call("transferOwnership", [newOwner]);
    return;
  }
  async transferProtocolFee_send() {
    let result = await this.send("transferProtocolFee");
    return result;
  }
  async transferProtocolFee_call() {
    let result = await this.call("transferProtocolFee");
    return;
  }
  async trollOwnedNFTs(params) {
    let result = await this.call("trollOwnedNFTs", [import_eth_wallet4.Utils.toString(params.param1), params.param2]);
    return new import_eth_wallet4.BigNumber(result);
  }
  async unequipNFT_send(params) {
    let result = await this.send("unequipNFT", [import_eth_wallet4.Utils.toString(params.trollId), params.nft, import_eth_wallet4.Utils.toString(params.nftId)]);
    return result;
  }
  async unequipNFT_call(params) {
    let result = await this.call("unequipNFT", [import_eth_wallet4.Utils.toString(params.trollId), params.nft, import_eth_wallet4.Utils.toString(params.nftId)]);
    return;
  }
  async unstake_send(tokenId) {
    let result = await this.send("unstake", [import_eth_wallet4.Utils.toString(tokenId)]);
    return result;
  }
  async unstake_call(tokenId) {
    let result = await this.call("unstake", [import_eth_wallet4.Utils.toString(tokenId)]);
    return;
  }
  async validNFTsLength() {
    let result = await this.call("validNFTsLength");
    return new import_eth_wallet4.BigNumber(result);
  }
  assign() {
    this.addStakes = Object.assign(this.addStakes_send, { call: this.addStakes_call });
    this.addValidNFTs = Object.assign(this.addValidNFTs_send, { call: this.addValidNFTs_call });
    this.approve = Object.assign(this.approve_send, { call: this.approve_call });
    this.batchApprove = Object.assign(this.batchApprove_send, { call: this.batchApprove_call });
    this.deny = Object.assign(this.deny_send, { call: this.deny_call });
    this.equipNFT = Object.assign(this.equipNFT_send, { call: this.equipNFT_call });
    this.permit = Object.assign(this.permit_send, { call: this.permit_call });
    this.safeTransferFrom = Object.assign(this.safeTransferFrom_send, { call: this.safeTransferFrom_call });
    this.safeTransferFrom_1 = Object.assign(this.safeTransferFrom_1_send, { call: this.safeTransferFrom_1_call });
    this.setApprovalForAll = Object.assign(this.setApprovalForAll_send, { call: this.setApprovalForAll_call });
    this.setApprovedStaker = Object.assign(this.setApprovedStaker_send, { call: this.setApprovedStaker_call });
    this.setBaseURI = Object.assign(this.setBaseURI_send, { call: this.setBaseURI_call });
    this.setCap = Object.assign(this.setCap_send, { call: this.setCap_call });
    this.setCustomAttribute = Object.assign(this.setCustomAttribute_send, { call: this.setCustomAttribute_call });
    this.setMinimumStake = Object.assign(this.setMinimumStake_send, { call: this.setMinimumStake_call });
    this.setProtocolFee = Object.assign(this.setProtocolFee_send, { call: this.setProtocolFee_call });
    this.stake = Object.assign(this.stake_send, { call: this.stake_call });
    this.takeOwnership = Object.assign(this.takeOwnership_send, { call: this.takeOwnership_call });
    this.transferFrom = Object.assign(this.transferFrom_send, { call: this.transferFrom_call });
    this.transferOwnership = Object.assign(this.transferOwnership_send, { call: this.transferOwnership_call });
    this.transferProtocolFee = Object.assign(this.transferProtocolFee_send, { call: this.transferProtocolFee_call });
    this.unequipNFT = Object.assign(this.unequipNFT_send, { call: this.unequipNFT_call });
    this.unstake = Object.assign(this.unstake_send, { call: this.unstake_call });
  }
};

// src/contracts/TrollNFT_VRF.ts
var import_eth_wallet5 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/TrollNFT_VRF.json.ts
var TrollNFT_VRF_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "string", "name": "__baseURI", "type": "string" }, { "internalType": "uint256", "name": "_cap", "type": "uint256" }, { "internalType": "contract IERC20", "name": "_stakeToken", "type": "address" }, { "internalType": "bool", "name": "_requireApproval", "type": "bool" }, { "internalType": "uint256", "name": "_minimumStake", "type": "uint256" }, { "internalType": "uint256", "name": "_protocolFee", "type": "uint256" }, { "internalType": "address", "name": "_protocolFeeTo", "type": "address" }, { "internalType": "address[2]", "name": "vrfAddresses", "type": "address[2]" }, { "internalType": "bytes32[2]", "name": "vrfParams", "type": "bytes32[2]" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "staker", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "allow", "type": "bool" }], "name": "ApprovedStaker", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "Attribute", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "string", "name": "baseURI", "type": "string" }], "name": "BaseURI", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "cap", "type": "uint256" }], "name": "Cap", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "CustomAttribute", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "minimumStake", "type": "uint256" }], "name": "MinimumStake", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "protocolFee", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "protocolFeeTo", "type": "address" }], "name": "ProtocolFee", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "who", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Stake", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "who", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Unstake", "type": "event" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "_attributes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "_customAttributes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "approvedStaker", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address[]", "name": "stakers", "type": "address[]" }], "name": "batchApprove", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "cap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "counter", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "creationTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "base", "type": "uint256" }, { "internalType": "uint256", "name": "offset", "type": "uint256" }, { "internalType": "uint256", "name": "digits", "type": "uint256" }], "name": "getAttributes1", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "base", "type": "uint256" }, { "internalType": "uint256[]", "name": "digits", "type": "uint256[]" }], "name": "getAttributes2", "outputs": [{ "internalType": "uint256[]", "name": "params", "type": "uint256[]" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "minimumStake", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "minted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "protocolFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "protocolFeeBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "protocolFeeTo", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "requestId", "type": "bytes32" }, { "internalType": "uint256", "name": "randomness", "type": "uint256" }], "name": "rawFulfillRandomness", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "requireApproval", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "staker", "type": "address" }, { "internalType": "bool", "name": "allow", "type": "bool" }], "name": "setApprovedStaker", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "string", "name": "__baseURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_cap", "type": "uint256" }], "name": "setCap", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "setCustomAttribute", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_minimumStake", "type": "uint256" }], "name": "setMinimumStake", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_protocolFee", "type": "uint256" }, { "internalType": "address", "name": "_protocolFeeTo", "type": "address" }], "name": "setProtocolFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "_vrfKeyHash", "type": "bytes32" }, { "internalType": "uint256", "name": "_vrfFee", "type": "uint256" }], "name": "setVrfParams", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "stake", "outputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "stakeToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "stakingBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "transferProtocolFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "unstake", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdrawLink", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "60e06040523480156200001157600080fd5b506040516200505b3803806200505b83398101604081905262000034916200053b565b8151602080840151600080546001600160a01b0319163317905560016003558d5190918e918e918e918e918e918e918e918e918e918a918a916200007f91600491908501906200032a565b508051620000959060059060208401906200032a565b505050818311620000ed5760405162461bcd60e51b815260206004820152601c60248201527f496e76616c6964206d696e5374616b652f70726f746f636f6c4665650000000060448201526064015b60405180910390fd5b8115806200010357506001600160a01b03811615155b620001515760405162461bcd60e51b815260206004820152601960248201527f496e76616c69642070726f746f636f6c4665652f466565546f000000000000006044820152606401620000e4565b86516200016690600f9060208a01906200032a565b50600e869055606085901b6001600160601b0319166080526010805460ff191685151517905560118390556012829055601380546001600160a01b0319166001600160a01b0383161790556040517f01e56a02aca7f26a28165a040851ba78f30282b55ca81c63a804cdc1e2dcea7290620001e490600f9062000656565b60405180910390a17fddf4c293a3479db41117899542b2a5d272b166296d11693304a6c1eac191054b600e546040516200022091815260200190565b60405180910390a17f0be9186a0f7f1e3c3019fdaacbaffb9ea92e4aacae81a3dbcc3a18220a47380d6011546040516200025c91815260200190565b60405180910390a1601254601354604080519283526001600160a01b0390911660208301527f5ecd7df85e51aff79e169c80a23d9299697dcb741138d732a78485f61370843d910160405180910390a15050506001600160601b0319606098891b811660c0529690971b90951660a05250620002f6945085935060009250620002e3915050565b6020020151826001602002015162000307565b5050505050505050505050620007ce565b6000546001600160a01b031633146200031f57600080fd5b601d91909155601e55565b828054620003389062000762565b90600052602060002090601f0160209004810192826200035c5760008555620003a7565b82601f106200037757805160ff1916838001178555620003a7565b82800160010185558215620003a7579182015b82811115620003a75782518255916020019190600101906200038a565b50620003b5929150620003b9565b5090565b5b80821115620003b55760008155600101620003ba565b8051620003dd81620007b5565b919050565b600082601f830112620003f3578081fd5b620003fd62000704565b8083856040860111156200040f578384fd5b835b60028110156200043e5781516200042881620007b5565b8452602093840193919091019060010162000411565b509095945050505050565b600082601f8301126200045a578081fd5b6200046462000704565b80838560408601111562000476578384fd5b835b60028110156200043e57815184526020938401939091019060010162000478565b80518015158114620003dd57600080fd5b600082601f830112620004bb578081fd5b81516001600160401b03811115620004d757620004d76200079f565b6020620004ed601f8301601f191682016200072f565b828152858284870101111562000501578384fd5b835b838110156200052057858101830151828201840152820162000503565b838111156200053157848385840101525b5095945050505050565b60008060008060008060008060008060006101a08c8e0312156200055d578687fd5b8b516001600160401b0381111562000573578788fd5b620005818e828f01620004aa565b60208e0151909c5090506001600160401b038111156200059f578788fd5b620005ad8e828f01620004aa565b60408e0151909b5090506001600160401b03811115620005cb578788fd5b620005d98e828f01620004aa565b99505060608c01519750620005f160808d01620003d0565b96506200060160a08d0162000499565b955060c08c0151945060e08c01519350620006206101008d01620003d0565b9250620006328d6101208e01620003e2565b9150620006448d6101608e0162000449565b90509295989b509295989b9093969950565b6000602080835281845483600182811c9150808316806200067857607f831692505b8583108114156200069757634e487b7160e01b87526022600452602487fd5b878601838152602001818015620006b75760018114620006c957620006f5565b60ff19861682528782019650620006f5565b60008b815260209020895b86811015620006ef57815484820152908501908901620006d4565b83019750505b50949998505050505050505050565b604080519081016001600160401b03811182821017156200072957620007296200079f565b60405290565b604051601f8201601f191681016001600160401b03811182821017156200075a576200075a6200079f565b604052919050565b600181811c908216806200077757607f821691505b602082108114156200079957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114620007cb57600080fd5b50565b60805160601c60a05160601c60c05160601c61482a620008316000396000818161190701526130770152600081816117cd01528181611c5a015261303b01526000818161050401528181610f4e015281816118bd0152612f41015261482a6000f3fe608060405234801561001057600080fd5b50600436106103575760003560e01c806370a08231116101c8578063b0e21e8a11610104578063e985e9c5116100a2578063ec5ffac21161007c578063ec5ffac2146107ae578063ef369252146107b7578063f0ab14ed146107d7578063f2fde38b146107f757600080fd5b8063e985e9c51461073f578063ea289d0014610788578063ea5ed3db1461079b57600080fd5b8063c87b56dd116100de578063c87b56dd146106cc578063d4ee1d90146106df578063d5ae33e2146106ff578063d79300661461071f57600080fd5b8063b0e21e8a14610690578063b13db57614610699578063b88d4fde146106b957600080fd5b80638da5cb5b116101715780639c52a7f11161014b5780639c52a7f114610644578063a22cb46514610657578063a2f55ae51461066a578063a694fc3a1461067d57600080fd5b80638da5cb5b1461060957806394985ddd1461062957806395d89b411461063c57600080fd5b806381fdc72b116101a257806381fdc72b146105d457806382d5ea6c146105dc5780638c8c8a50146105e957600080fd5b806370a082311461058b5780637776a0e51461059e5780637a8042bd146105c157600080fd5b80633fd8cc4e116102975780635452f3691161024057806361bc221a1161021a57806361bc221a146105545780636352211e1461055d57806368c1c088146105705780636c0360eb1461058357600080fd5b80635452f3691461052657806355f804b314610539578063605361721461054c57600080fd5b806347786d371161027157806347786d37146104d95780634f6ccce7146104ec57806351ed6a30146104ff57600080fd5b80633fd8cc4e1461049057806342842e0e146104b3578063476f2d5c146104c657600080fd5b80631e7269c5116103045780632457c8ea116102de5780632457c8ea1461044e5780632e17de78146104615780632f745c5914610474578063355274ea1461048757600080fd5b80631e7269c514610405578063233e99031461042857806323b872dd1461043b57600080fd5b8063095ea7b311610335578063095ea7b3146103d15780630a22d68c146103e657806318160ddd146103fd57600080fd5b806301ffc9a71461035c57806306fdde0314610384578063081812fc14610399575b600080fd5b61036f61036a366004614282565b61080a565b60405190151581526020015b60405180910390f35b61038c610866565b60405161037b919061452b565b6103ac6103a7366004614300565b6108f8565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161037b565b6103e46103df3660046141dc565b6109d7565b005b6103ef60145481565b60405190815260200161037b565b600c546103ef565b61036f6104133660046140a6565b601b6020526000908152604090205460ff1681565b6103e4610436366004614300565b610b64565b6103e46104493660046140f2565b610c2f565b6103e461045c366004614261565b610cd0565b6103e461046f366004614300565b610e36565b6103ef6104823660046141dc565b610fb5565b6103ef600e5481565b61036f61049e3660046140a6565b60026020526000908152604090205460ff1681565b6103e46104c13660046140f2565b611084565b6103ef6104d43660046143a3565b61109f565b6103e46104e7366004614300565b6110e3565b6103ef6104fa366004614300565b6111a7565b6103ac7f000000000000000000000000000000000000000000000000000000000000000081565b6103e4610534366004614261565b61128c565b6103e46105473660046142ba565b6112bb565b6103e4611323565b6103ef60155481565b6103ac61056b366004614300565b61144d565b6103e461057e3660046141a6565b6114ff565b61038c611648565b6103ef6105993660046140a6565b6116d6565b61036f6105ac3660046140a6565b601a6020526000908152604090205460ff1681565b6103e46105cf366004614300565b6117a4565b6103e46117f6565b60105461036f9060ff1681565b6103ef6105f7366004614300565b60166020526000908152604090205481565b6000546103ac9073ffffffffffffffffffffffffffffffffffffffff1681565b6103e4610637366004614261565b6118ef565b61038c61199c565b6103e46106523660046140a6565b6119ab565b6103e46106653660046141a6565b611a4b565b6103e46106783660046140a6565b611b62565b6103ef61068b366004614300565b611c05565b6103ef60125481565b6103ef6106a7366004614300565b60176020526000908152604090205481565b6103e46106c736600461412d565b611d63565b61038c6106da366004614300565b611e0b565b6001546103ac9073ffffffffffffffffffffffffffffffffffffffff1681565b6103ef61070d366004614300565b60196020526000908152604090205481565b61073261072d366004614352565b611f1b565b60405161037b91906144e7565b61036f61074d3660046140c0565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260096020908152604080832093909416825291909152205460ff1690565b6103e4610796366004614330565b6120bc565b6103e46107a9366004614205565b612259565b6103ef60115481565b6013546103ac9073ffffffffffffffffffffffffffffffffffffffff1681565b6103ef6107e5366004614300565b60186020526000908152604090205481565b6103e46108053660046140a6565b61240d565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f780e9d630000000000000000000000000000000000000000000000000000000014806108605750610860826124a4565b92915050565b6060600480546108759061468a565b80601f01602080910402602001604051908101604052809291908181526020018280546108a19061468a565b80156108ee5780601f106108c3576101008083540402835291602001916108ee565b820191906000526020600020905b8154815290600101906020018083116108d157829003601f168201915b5050505050905090565b60008181526006602052604081205473ffffffffffffffffffffffffffffffffffffffff166109ae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5060009081526008602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b60006109e28261144d565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610aa0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084016109a5565b3373ffffffffffffffffffffffffffffffffffffffff82161480610ac95750610ac9813361074d565b610b55576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016109a5565b610b5f8383612587565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610b8857600080fd5b6012548111610bf3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f496e76616c6964206d696e5374616b652f70726f746f636f6c4665650000000060448201526064016109a5565b60118190556040518181527f0be9186a0f7f1e3c3019fdaacbaffb9ea92e4aacae81a3dbcc3a18220a47380d906020015b60405180910390a150565b610c393382612627565b610cc5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016109a5565b610b5f838383612793565b3360009081526002602052604090205460ff16610d6f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084016109a5565b60008281526018602052604090205415610de5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f41747472696275746520616c726561647920736574000000000000000000000060448201526064016109a5565b600082815260186020526040908190208290555182907fe73a9e48f41e228034f18c54b3f003b3de0b3bf1069ffd0c352543431b8a86a390610e2a9084815260200190565b60405180910390a25050565b60026003541415610ea3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016109a5565b6002600355610eb23382612627565b610f18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f7420617574686f72697a656400000000000000000000000000000000000060448201526064016109a5565b610f2181612a05565b60008181526016602052604081208054919055610f7573ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163383612ade565b604051818152829033907ff960dbf9e5d0682f7a298ed974e33a28b4464914b7a2bfac12ae419a9afeb2809060200160405180910390a350506001600355565b6000610fc0836116d6565b821061104e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e647300000000000000000000000000000000000000000060648201526084016109a5565b5073ffffffffffffffffffffffffffffffffffffffff919091166000908152600a60209081526040808320938352929052205490565b610b5f83838360405180602001604052806000815250611d63565b60006110ab8483612bb2565b6110b58585612bb2565b6000878152601760205260409020546110ce9190614633565b6110d89190614717565b90505b949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461110757600080fd5b600e548111611172576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f43617020616c726561647920657863656564656400000000000000000000000060448201526064016109a5565b600e8190556040518181527fddf4c293a3479db41117899542b2a5d272b166296d11693304a6c1eac191054b90602001610c24565b60006111b2600c5490565b8210611240576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e6473000000000000000000000000000000000000000060648201526084016109a5565b600c828154811061127a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001549050919050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146112b057600080fd5b601d91909155601e55565b60005473ffffffffffffffffffffffffffffffffffffffff1633146112df57600080fd5b80516112f290600f906020840190613f06565b507f01e56a02aca7f26a28165a040851ba78f30282b55ca81c63a804cdc1e2dcea72600f604051610c24919061453e565b60015473ffffffffffffffffffffffffffffffffffffffff1633146113ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084016109a5565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60008181526006602052604081205473ffffffffffffffffffffffffffffffffffffffff1680610860576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e000000000000000000000000000000000000000000000060648201526084016109a5565b60005473ffffffffffffffffffffffffffffffffffffffff16331461152357600080fd5b60105460ff1661155957601080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790555b80156115b25773ffffffffffffffffffffffffffffffffffffffff82166000908152601a6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556115fe565b73ffffffffffffffffffffffffffffffffffffffff82166000908152601a6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690555b8173ffffffffffffffffffffffffffffffffffffffff167fd1b1846bd2f96d78a14f8960ca200e7a29f8d8d08c0386ffe28dc5c99067c52382604051610e2a911515815260200190565b600f80546116559061468a565b80601f01602080910402602001604051908101604052809291908181526020018280546116819061468a565b80156116ce5780601f106116a3576101008083540402835291602001916116ce565b820191906000526020600020905b8154815290600101906020018083116116b157829003601f168201915b505050505081565b600073ffffffffffffffffffffffffffffffffffffffff821661177b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f20616464726573730000000000000000000000000000000000000000000060648201526084016109a5565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526007602052604090205490565b60005473ffffffffffffffffffffffffffffffffffffffff1633146117c857600080fd5b6117f37f00000000000000000000000000000000000000000000000000000000000000003383612ade565b50565b60026003541415611863576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016109a5565b600260035560135473ffffffffffffffffffffffffffffffffffffffff161580159061189157506000601454115b156118e8576014805460009091556013546118e69073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116911683612ade565b505b6001600355565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461198e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f4f6e6c7920565246436f6f7264696e61746f722063616e2066756c66696c6c0060448201526064016109a5565b6119988282612c44565b5050565b6060600580546108759061468a565b60005473ffffffffffffffffffffffffffffffffffffffff1633146119cf57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a78849101610c24565b73ffffffffffffffffffffffffffffffffffffffff8216331415611acb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016109a5565b33600081815260096020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611b8657600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf59101610c24565b6000611c1082612c9a565b601e546040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529192509073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a082319060240160206040518083038186803b158015611c9c57600080fd5b505afa158015611cb0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cd49190614318565b1015611d3c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f7420656e6f756768204c494e4b000000000000000000000000000000000060448201526064016109a5565b6000611d4c601d54601e54613037565b6000908152601f6020526040902082905550919050565b611d6d3383612627565b611df9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016109a5565b611e05848484846131cf565b50505050565b60008181526006602052604090205460609073ffffffffffffffffffffffffffffffffffffffff16611ebf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e000000000000000000000000000000000060648201526084016109a5565b6000611ec9613272565b90506000815111611ee95760405180602001604052806000815250611f14565b80611ef384613281565b604051602001611f0492919061443a565b6040516020818303038152906040525b9392505050565b6060818067ffffffffffffffff811115611f5e577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015611f87578160200160208202803683370190505b5060008781526017602052604081205491935090815b838110156120b057611fee88888884818110611fe2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020135612bb2565b611ff88985612bb2565b6120029084614633565b61200c9190614717565b858281518110612045577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101818152505086868281811061208a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b905060200201358361209c919061461b565b9250806120a8816146de565b915050611f9d565b50505050949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146120e057600080fd5b816011541161214b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f496e76616c6964206d696e5374616b652f70726f746f636f6c4665650000000060448201526064016109a5565b81158061216d575073ffffffffffffffffffffffffffffffffffffffff811615155b6121d3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f496e76616c69642070726f746f636f6c4665652f466565546f0000000000000060448201526064016109a5565b6012829055601380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040805184815260208101929092527f5ecd7df85e51aff79e169c80a23d9299697dcb741138d732a78485f61370843d910160405180910390a15050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461227d57600080fd5b601080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558060005b81811015611e05576001601a60008686858181106122f3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b905060200201602081019061230891906140a6565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055838382818110612394577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020160208101906123a991906140a6565b73ffffffffffffffffffffffffffffffffffffffff167fd1b1846bd2f96d78a14f8960ca200e7a29f8d8d08c0386ffe28dc5c99067c52360016040516123f3911515815260200190565b60405180910390a280612405816146de565b9150506122ac565b60005473ffffffffffffffffffffffffffffffffffffffff16331461243157600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b90602001610c24565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd00000000000000000000000000000000000000000000000000000000148061253757507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061086057507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610860565b600081815260086020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841690811790915581906125e18261144d565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008181526006602052604081205473ffffffffffffffffffffffffffffffffffffffff166126d8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084016109a5565b60006126e38361144d565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061275257508373ffffffffffffffffffffffffffffffffffffffff1661273a846108f8565b73ffffffffffffffffffffffffffffffffffffffff16145b806110db575073ffffffffffffffffffffffffffffffffffffffff80821660009081526009602090815260408083209388168352929052205460ff166110db565b8273ffffffffffffffffffffffffffffffffffffffff166127b38261144d565b73ffffffffffffffffffffffffffffffffffffffff1614612856576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e000000000000000000000000000000000000000000000060648201526084016109a5565b73ffffffffffffffffffffffffffffffffffffffff82166128f8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016109a5565b612903838383613401565b61290e600082612587565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600760205260408120805460019290612944908490614647565b909155505073ffffffffffffffffffffffffffffffffffffffff8216600090815260076020526040812080546001929061297f90849061461b565b909155505060008181526006602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff86811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6000612a108261144d565b9050612a1e81600084613401565b612a29600083612587565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600760205260408120805460019290612a5f908490614647565b909155505060008281526006602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690555183919073ffffffffffffffffffffffffffffffffffffffff8416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610b5f9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152613507565b6000828015612c2657600183168015612bcd57849250612bd2565b600192505b506002830492505b8215612c21578384028485820414612bf157600080fd5b93506001831615612c16578382028285820414158515151615612c1357600080fd5b91505b600283049250612bda565b612c3d565b828015612c365760009250612c3b565b600192505b505b5092915050565b6000828152601f602090815260408083205480845260178352928190208490555183815282917f1e6edca497f4aff07b388b2c8af55371a16eb956ed650861cb45f11758e4a65b910160405180910390a2505050565b600060026003541415612d09576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016109a5565b6002600355601054339060ff161580612d315750336000908152601a602052604090205460ff165b612d97576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f7420617574686f72697a656400000000000000000000000000000000000060448201526064016109a5565b60125483118015612db65750601154601254612db39085614647565b10155b612e1c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4d696e696e756d207374616b65206e6f74206d6574000000000000000000000060448201526064016109a5565b600e54600c5410612e89576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f436170206578636565646564000000000000000000000000000000000000000060448201526064016109a5565b60105460ff161580612eab5750336000908152601b602052604090205460ff16155b612f11576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f596f752063616e206f6e6c79207374616b65206f6e636500000000000000000060448201526064016109a5565b601560008154612f20906146de565b91829055509150612f6973ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016823086613613565b601254612f769084614647565b6000838152601660205260408120919091556012546014805491929091612f9e90849061461b565b9091555050336000908152601b6020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905584835260199091529020429055612ff58183613671565b604051838152829033907f5af417134f72a9d41143ace85b0a26dce6f550f894f2cbc1eeee8810603d91b69060200160405180910390a3506001600355919050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634000aea07f0000000000000000000000000000000000000000000000000000000000000000848660006040516020016130b4929190918252602082015260400190565b6040516020818303038152906040526040518463ffffffff1660e01b81526004016130e1939291906144b2565b602060405180830381600087803b1580156130fb57600080fd5b505af115801561310f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906131339190614245565b506000838152601c6020818152604080842054815180840189905280830186905230606082015260808082018390528351808303909101815260a09091019092528151918301919091209387905291905261318f90600161461b565b6000858152601c60205260409020556110db8482604080516020808201949094528082019290925280518083038201815260609092019052805191012090565b6131da848484612793565b6131e68484848461368b565b611e05576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016109a5565b6060600f80546108759061468a565b6060816132c157505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b81156132eb57806132d5816146de565b91506132e49050600a83614633565b91506132c5565b60008167ffffffffffffffff81111561332d577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015613357576020820181803683370190505b5090505b84156110db5761336c600183614647565b9150613379600a86614717565b61338490603061461b565b60f81b8183815181106133c0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506133fa600a86614633565b945061335b565b73ffffffffffffffffffffffffffffffffffffffff83166134695761346481600c80546000838152600d60205260408120829055600182018355919091527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c70155565b6134a6565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146134a6576134a68382613887565b73ffffffffffffffffffffffffffffffffffffffff82166134ca57610b5f8161393e565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610b5f57610b5f8282613a62565b6000613569826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16613ab39092919063ffffffff16565b805190915015610b5f57808060200190518101906135879190614245565b610b5f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016109a5565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052611e059085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401612b30565b611998828260405180602001604052806000815250613ac2565b600073ffffffffffffffffffffffffffffffffffffffff84163b1561387f576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a0290613702903390899088908890600401614469565b602060405180830381600087803b15801561371c57600080fd5b505af192505050801561376a575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526137679181019061429e565b60015b613834573d808015613798576040519150601f19603f3d011682016040523d82523d6000602084013e61379d565b606091505b50805161382c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016109a5565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a02000000000000000000000000000000000000000000000000000000001490506110db565b5060016110db565b60006001613894846116d6565b61389e9190614647565b6000838152600b60205260409020549091508082146138fe5773ffffffffffffffffffffffffffffffffffffffff84166000908152600a602090815260408083208584528252808320548484528184208190558352600b90915290208190555b506000918252600b6020908152604080842084905573ffffffffffffffffffffffffffffffffffffffff9094168352600a81528383209183525290812055565b600c5460009061395090600190614647565b6000838152600d6020526040812054600c805493945090928490811061399f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905080600c83815481106139e7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000918252602080832090910192909255828152600d9091526040808220849055858252812055600c805480613a46577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b6000613a6d836116d6565b73ffffffffffffffffffffffffffffffffffffffff9093166000908152600a602090815260408083208684528252808320859055938252600b9052919091209190915550565b60606110db8484600085613b65565b613acc8383613ce5565b613ad9600084848461368b565b610b5f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016109a5565b606082471015613bf7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016109a5565b843b613c5f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016109a5565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051613c88919061441e565b60006040518083038185875af1925050503d8060008114613cc5576040519150601f19603f3d011682016040523d82523d6000602084013e613cca565b606091505b5091509150613cda828286613eb3565b979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216613d62576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016109a5565b60008181526006602052604090205473ffffffffffffffffffffffffffffffffffffffff1615613dee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016109a5565b613dfa60008383613401565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600760205260408120805460019290613e3090849061461b565b909155505060008181526006602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60608315613ec2575081611f14565b825115613ed25782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a5919061452b565b828054613f129061468a565b90600052602060002090601f016020900481019282613f345760008555613f7a565b82601f10613f4d57805160ff1916838001178555613f7a565b82800160010185558215613f7a579182015b82811115613f7a578251825591602001919060010190613f5f565b50613f86929150613f8a565b5090565b5b80821115613f865760008155600101613f8b565b600067ffffffffffffffff80841115613fba57613fba614789565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561400057614000614789565b8160405280935085815286868601111561401957600080fd5b858560208301376000602087830101525050509392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461405757600080fd5b919050565b60008083601f84011261406d578081fd5b50813567ffffffffffffffff811115614084578182fd5b6020830191508360208260051b850101111561409f57600080fd5b9250929050565b6000602082840312156140b7578081fd5b611f1482614033565b600080604083850312156140d2578081fd5b6140db83614033565b91506140e960208401614033565b90509250929050565b600080600060608486031215614106578081fd5b61410f84614033565b925061411d60208501614033565b9150604084013590509250925092565b60008060008060808587031215614142578081fd5b61414b85614033565b935061415960208601614033565b925060408501359150606085013567ffffffffffffffff81111561417b578182fd5b8501601f8101871361418b578182fd5b61419a87823560208401613f9f565b91505092959194509250565b600080604083850312156141b8578182fd5b6141c183614033565b915060208301356141d1816147b8565b809150509250929050565b600080604083850312156141ee578182fd5b6141f783614033565b946020939093013593505050565b60008060208385031215614217578182fd5b823567ffffffffffffffff81111561422d578283fd5b6142398582860161405c565b90969095509350505050565b600060208284031215614256578081fd5b8151611f14816147b8565b60008060408385031215614273578182fd5b50508035926020909101359150565b600060208284031215614293578081fd5b8135611f14816147c6565b6000602082840312156142af578081fd5b8151611f14816147c6565b6000602082840312156142cb578081fd5b813567ffffffffffffffff8111156142e1578182fd5b8201601f810184136142f1578182fd5b6110db84823560208401613f9f565b600060208284031215614311578081fd5b5035919050565b600060208284031215614329578081fd5b5051919050565b60008060408385031215614342578182fd5b823591506140e960208401614033565b60008060008060608587031215614367578182fd5b8435935060208501359250604085013567ffffffffffffffff81111561438b578283fd5b6143978782880161405c565b95989497509550505050565b600080600080608085870312156143b8578182fd5b5050823594602084013594506040840135936060013592509050565b600081518084526143ec81602086016020860161465e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000825161443081846020870161465e565b9190910192915050565b6000835161444c81846020880161465e565b83519083019061446081836020880161465e565b01949350505050565b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250836040830152608060608301526144a860808301846143d4565b9695505050505050565b73ffffffffffffffffffffffffffffffffffffffff841681528260208201526060604082015260006110d860608301846143d4565b6020808252825182820181905260009190848201906040850190845b8181101561451f57835183529284019291840191600101614503565b50909695505050505050565b602081526000611f1460208301846143d4565b6000602080835281845483600182811c91508083168061455f57607f831692505b858310811415614596577f4e487b710000000000000000000000000000000000000000000000000000000087526022600452602487fd5b8786018381526020018180156145b357600181146145e25761460c565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0086168252878201965061460c565b60008b815260209020895b86811015614606578154848201529085019089016145ed565b83019750505b50949998505050505050505050565b6000821982111561462e5761462e61472b565b500190565b6000826146425761464261475a565b500490565b6000828210156146595761465961472b565b500390565b60005b83811015614679578181015183820152602001614661565b83811115611e055750506000910152565b600181811c9082168061469e57607f821691505b602082108114156146d8577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156147105761471061472b565b5060010190565b6000826147265761472661475a565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b80151581146117f357600080fd5b7fffffffff00000000000000000000000000000000000000000000000000000000811681146117f357600080fdfea2646970667358221220eb568141af184f065f9ddd3b58b70588d529b12b89a4d0da1474d5433ecb4c0b64736f6c63430008040033"
};

// src/contracts/TrollNFT_VRF.ts
var TrollNFT_VRF = class extends import_eth_wallet5.Contract {
  constructor(wallet, address) {
    super(wallet, address, TrollNFT_VRF_json_default.abi, TrollNFT_VRF_json_default.bytecode);
    this.assign();
  }
  deploy(params) {
    return this._deploy(params.name, params.symbol, params.baseURI, import_eth_wallet5.Utils.toString(params.cap), params.stakeToken, params.requireApproval, import_eth_wallet5.Utils.toString(params.minimumStake), import_eth_wallet5.Utils.toString(params.protocolFee), params.protocolFeeTo, params.vrfAddresses, import_eth_wallet5.Utils.stringToBytes32(params.vrfParams));
  }
  parseApprovalEvent(receipt) {
    return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
  }
  decodeApprovalEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      approved: result.approved,
      tokenId: new import_eth_wallet5.BigNumber(result.tokenId),
      _event: event
    };
  }
  parseApprovalForAllEvent(receipt) {
    return this.parseEvents(receipt, "ApprovalForAll").map((e) => this.decodeApprovalForAllEvent(e));
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
    return this.parseEvents(receipt, "ApprovedStaker").map((e) => this.decodeApprovedStakerEvent(e));
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
    return this.parseEvents(receipt, "Attribute").map((e) => this.decodeAttributeEvent(e));
  }
  decodeAttributeEvent(event) {
    let result = event.data;
    return {
      tokenId: new import_eth_wallet5.BigNumber(result.tokenId),
      attribute: new import_eth_wallet5.BigNumber(result.attribute),
      _event: event
    };
  }
  parseAuthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Authorize").map((e) => this.decodeAuthorizeEvent(e));
  }
  decodeAuthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseBaseURIEvent(receipt) {
    return this.parseEvents(receipt, "BaseURI").map((e) => this.decodeBaseURIEvent(e));
  }
  decodeBaseURIEvent(event) {
    let result = event.data;
    return {
      baseURI: result.baseURI,
      _event: event
    };
  }
  parseCapEvent(receipt) {
    return this.parseEvents(receipt, "Cap").map((e) => this.decodeCapEvent(e));
  }
  decodeCapEvent(event) {
    let result = event.data;
    return {
      cap: new import_eth_wallet5.BigNumber(result.cap),
      _event: event
    };
  }
  parseCustomAttributeEvent(receipt) {
    return this.parseEvents(receipt, "CustomAttribute").map((e) => this.decodeCustomAttributeEvent(e));
  }
  decodeCustomAttributeEvent(event) {
    let result = event.data;
    return {
      tokenId: new import_eth_wallet5.BigNumber(result.tokenId),
      attribute: new import_eth_wallet5.BigNumber(result.attribute),
      _event: event
    };
  }
  parseDeauthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Deauthorize").map((e) => this.decodeDeauthorizeEvent(e));
  }
  decodeDeauthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseMinimumStakeEvent(receipt) {
    return this.parseEvents(receipt, "MinimumStake").map((e) => this.decodeMinimumStakeEvent(e));
  }
  decodeMinimumStakeEvent(event) {
    let result = event.data;
    return {
      minimumStake: new import_eth_wallet5.BigNumber(result.minimumStake),
      _event: event
    };
  }
  parseProtocolFeeEvent(receipt) {
    return this.parseEvents(receipt, "ProtocolFee").map((e) => this.decodeProtocolFeeEvent(e));
  }
  decodeProtocolFeeEvent(event) {
    let result = event.data;
    return {
      protocolFee: new import_eth_wallet5.BigNumber(result.protocolFee),
      protocolFeeTo: result.protocolFeeTo,
      _event: event
    };
  }
  parseStakeEvent(receipt) {
    return this.parseEvents(receipt, "Stake").map((e) => this.decodeStakeEvent(e));
  }
  decodeStakeEvent(event) {
    let result = event.data;
    return {
      who: result.who,
      tokenId: new import_eth_wallet5.BigNumber(result.tokenId),
      amount: new import_eth_wallet5.BigNumber(result.amount),
      _event: event
    };
  }
  parseStartOwnershipTransferEvent(receipt) {
    return this.parseEvents(receipt, "StartOwnershipTransfer").map((e) => this.decodeStartOwnershipTransferEvent(e));
  }
  decodeStartOwnershipTransferEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      from: result.from,
      to: result.to,
      tokenId: new import_eth_wallet5.BigNumber(result.tokenId),
      _event: event
    };
  }
  parseTransferOwnershipEvent(receipt) {
    return this.parseEvents(receipt, "TransferOwnership").map((e) => this.decodeTransferOwnershipEvent(e));
  }
  decodeTransferOwnershipEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseUnstakeEvent(receipt) {
    return this.parseEvents(receipt, "Unstake").map((e) => this.decodeUnstakeEvent(e));
  }
  decodeUnstakeEvent(event) {
    let result = event.data;
    return {
      who: result.who,
      tokenId: new import_eth_wallet5.BigNumber(result.tokenId),
      amount: new import_eth_wallet5.BigNumber(result.amount),
      _event: event
    };
  }
  async _attributes(param1) {
    let result = await this.call("_attributes", [import_eth_wallet5.Utils.toString(param1)]);
    return new import_eth_wallet5.BigNumber(result);
  }
  async _customAttributes(param1) {
    let result = await this.call("_customAttributes", [import_eth_wallet5.Utils.toString(param1)]);
    return new import_eth_wallet5.BigNumber(result);
  }
  async approve_send(params) {
    let result = await this.send("approve", [params.to, import_eth_wallet5.Utils.toString(params.tokenId)]);
    return result;
  }
  async approve_call(params) {
    let result = await this.call("approve", [params.to, import_eth_wallet5.Utils.toString(params.tokenId)]);
    return;
  }
  async approvedStaker(param1) {
    let result = await this.call("approvedStaker", [param1]);
    return result;
  }
  async balanceOf(owner) {
    let result = await this.call("balanceOf", [owner]);
    return new import_eth_wallet5.BigNumber(result);
  }
  async baseURI() {
    let result = await this.call("baseURI");
    return result;
  }
  async batchApprove_send(stakers) {
    let result = await this.send("batchApprove", [stakers]);
    return result;
  }
  async batchApprove_call(stakers) {
    let result = await this.call("batchApprove", [stakers]);
    return;
  }
  async cap() {
    let result = await this.call("cap");
    return new import_eth_wallet5.BigNumber(result);
  }
  async counter() {
    let result = await this.call("counter");
    return new import_eth_wallet5.BigNumber(result);
  }
  async creationTime(param1) {
    let result = await this.call("creationTime", [import_eth_wallet5.Utils.toString(param1)]);
    return new import_eth_wallet5.BigNumber(result);
  }
  async deny_send(user) {
    let result = await this.send("deny", [user]);
    return result;
  }
  async deny_call(user) {
    let result = await this.call("deny", [user]);
    return;
  }
  async getApproved(tokenId) {
    let result = await this.call("getApproved", [import_eth_wallet5.Utils.toString(tokenId)]);
    return result;
  }
  async getAttributes1(params) {
    let result = await this.call("getAttributes1", [import_eth_wallet5.Utils.toString(params.tokenId), import_eth_wallet5.Utils.toString(params.base), import_eth_wallet5.Utils.toString(params.offset), import_eth_wallet5.Utils.toString(params.digits)]);
    return new import_eth_wallet5.BigNumber(result);
  }
  async getAttributes2(params) {
    let result = await this.call("getAttributes2", [import_eth_wallet5.Utils.toString(params.tokenId), import_eth_wallet5.Utils.toString(params.base), import_eth_wallet5.Utils.toString(params.digits)]);
    return result.map((e) => new import_eth_wallet5.BigNumber(e));
  }
  async isApprovedForAll(params) {
    let result = await this.call("isApprovedForAll", [params.owner, params.operator]);
    return result;
  }
  async isPermitted(param1) {
    let result = await this.call("isPermitted", [param1]);
    return result;
  }
  async minimumStake() {
    let result = await this.call("minimumStake");
    return new import_eth_wallet5.BigNumber(result);
  }
  async minted(param1) {
    let result = await this.call("minted", [param1]);
    return result;
  }
  async name() {
    let result = await this.call("name");
    return result;
  }
  async newOwner() {
    let result = await this.call("newOwner");
    return result;
  }
  async owner() {
    let result = await this.call("owner");
    return result;
  }
  async ownerOf(tokenId) {
    let result = await this.call("ownerOf", [import_eth_wallet5.Utils.toString(tokenId)]);
    return result;
  }
  async permit_send(user) {
    let result = await this.send("permit", [user]);
    return result;
  }
  async permit_call(user) {
    let result = await this.call("permit", [user]);
    return;
  }
  async protocolFee() {
    let result = await this.call("protocolFee");
    return new import_eth_wallet5.BigNumber(result);
  }
  async protocolFeeBalance() {
    let result = await this.call("protocolFeeBalance");
    return new import_eth_wallet5.BigNumber(result);
  }
  async protocolFeeTo() {
    let result = await this.call("protocolFeeTo");
    return result;
  }
  async rawFulfillRandomness_send(params) {
    let result = await this.send("rawFulfillRandomness", [import_eth_wallet5.Utils.stringToBytes32(params.requestId), import_eth_wallet5.Utils.toString(params.randomness)]);
    return result;
  }
  async rawFulfillRandomness_call(params) {
    let result = await this.call("rawFulfillRandomness", [import_eth_wallet5.Utils.stringToBytes32(params.requestId), import_eth_wallet5.Utils.toString(params.randomness)]);
    return;
  }
  async requireApproval() {
    let result = await this.call("requireApproval");
    return result;
  }
  async safeTransferFrom_send(params) {
    let result = await this.send("safeTransferFrom", [params.from, params.to, import_eth_wallet5.Utils.toString(params.tokenId)]);
    return result;
  }
  async safeTransferFrom_call(params) {
    let result = await this.call("safeTransferFrom", [params.from, params.to, import_eth_wallet5.Utils.toString(params.tokenId)]);
    return;
  }
  async safeTransferFrom_1_send(params) {
    let result = await this.send("safeTransferFrom", [params.from, params.to, import_eth_wallet5.Utils.toString(params.tokenId), params.data]);
    return result;
  }
  async safeTransferFrom_1_call(params) {
    let result = await this.call("safeTransferFrom", [params.from, params.to, import_eth_wallet5.Utils.toString(params.tokenId), params.data]);
    return;
  }
  async setApprovalForAll_send(params) {
    let result = await this.send("setApprovalForAll", [params.operator, params.approved]);
    return result;
  }
  async setApprovalForAll_call(params) {
    let result = await this.call("setApprovalForAll", [params.operator, params.approved]);
    return;
  }
  async setApprovedStaker_send(params) {
    let result = await this.send("setApprovedStaker", [params.staker, params.allow]);
    return result;
  }
  async setApprovedStaker_call(params) {
    let result = await this.call("setApprovedStaker", [params.staker, params.allow]);
    return;
  }
  async setBaseURI_send(baseURI) {
    let result = await this.send("setBaseURI", [baseURI]);
    return result;
  }
  async setBaseURI_call(baseURI) {
    let result = await this.call("setBaseURI", [baseURI]);
    return;
  }
  async setCap_send(cap) {
    let result = await this.send("setCap", [import_eth_wallet5.Utils.toString(cap)]);
    return result;
  }
  async setCap_call(cap) {
    let result = await this.call("setCap", [import_eth_wallet5.Utils.toString(cap)]);
    return;
  }
  async setCustomAttribute_send(params) {
    let result = await this.send("setCustomAttribute", [import_eth_wallet5.Utils.toString(params.tokenId), import_eth_wallet5.Utils.toString(params.attribute)]);
    return result;
  }
  async setCustomAttribute_call(params) {
    let result = await this.call("setCustomAttribute", [import_eth_wallet5.Utils.toString(params.tokenId), import_eth_wallet5.Utils.toString(params.attribute)]);
    return;
  }
  async setMinimumStake_send(minimumStake) {
    let result = await this.send("setMinimumStake", [import_eth_wallet5.Utils.toString(minimumStake)]);
    return result;
  }
  async setMinimumStake_call(minimumStake) {
    let result = await this.call("setMinimumStake", [import_eth_wallet5.Utils.toString(minimumStake)]);
    return;
  }
  async setProtocolFee_send(params) {
    let result = await this.send("setProtocolFee", [import_eth_wallet5.Utils.toString(params.protocolFee), params.protocolFeeTo]);
    return result;
  }
  async setProtocolFee_call(params) {
    let result = await this.call("setProtocolFee", [import_eth_wallet5.Utils.toString(params.protocolFee), params.protocolFeeTo]);
    return;
  }
  async setVrfParams_send(params) {
    let result = await this.send("setVrfParams", [import_eth_wallet5.Utils.stringToBytes32(params.vrfKeyHash), import_eth_wallet5.Utils.toString(params.vrfFee)]);
    return result;
  }
  async setVrfParams_call(params) {
    let result = await this.call("setVrfParams", [import_eth_wallet5.Utils.stringToBytes32(params.vrfKeyHash), import_eth_wallet5.Utils.toString(params.vrfFee)]);
    return;
  }
  async stake_send(amount) {
    let result = await this.send("stake", [import_eth_wallet5.Utils.toString(amount)]);
    return result;
  }
  async stake_call(amount) {
    let result = await this.call("stake", [import_eth_wallet5.Utils.toString(amount)]);
    return new import_eth_wallet5.BigNumber(result);
  }
  async stakeToken() {
    let result = await this.call("stakeToken");
    return result;
  }
  async stakingBalance(param1) {
    let result = await this.call("stakingBalance", [import_eth_wallet5.Utils.toString(param1)]);
    return new import_eth_wallet5.BigNumber(result);
  }
  async supportsInterface(interfaceId) {
    let result = await this.call("supportsInterface", [interfaceId]);
    return result;
  }
  async symbol() {
    let result = await this.call("symbol");
    return result;
  }
  async takeOwnership_send() {
    let result = await this.send("takeOwnership");
    return result;
  }
  async takeOwnership_call() {
    let result = await this.call("takeOwnership");
    return;
  }
  async tokenByIndex(index) {
    let result = await this.call("tokenByIndex", [import_eth_wallet5.Utils.toString(index)]);
    return new import_eth_wallet5.BigNumber(result);
  }
  async tokenOfOwnerByIndex(params) {
    let result = await this.call("tokenOfOwnerByIndex", [params.owner, import_eth_wallet5.Utils.toString(params.index)]);
    return new import_eth_wallet5.BigNumber(result);
  }
  async tokenURI(tokenId) {
    let result = await this.call("tokenURI", [import_eth_wallet5.Utils.toString(tokenId)]);
    return result;
  }
  async totalSupply() {
    let result = await this.call("totalSupply");
    return new import_eth_wallet5.BigNumber(result);
  }
  async transferFrom_send(params) {
    let result = await this.send("transferFrom", [params.from, params.to, import_eth_wallet5.Utils.toString(params.tokenId)]);
    return result;
  }
  async transferFrom_call(params) {
    let result = await this.call("transferFrom", [params.from, params.to, import_eth_wallet5.Utils.toString(params.tokenId)]);
    return;
  }
  async transferOwnership_send(newOwner) {
    let result = await this.send("transferOwnership", [newOwner]);
    return result;
  }
  async transferOwnership_call(newOwner) {
    let result = await this.call("transferOwnership", [newOwner]);
    return;
  }
  async transferProtocolFee_send() {
    let result = await this.send("transferProtocolFee");
    return result;
  }
  async transferProtocolFee_call() {
    let result = await this.call("transferProtocolFee");
    return;
  }
  async unstake_send(tokenId) {
    let result = await this.send("unstake", [import_eth_wallet5.Utils.toString(tokenId)]);
    return result;
  }
  async unstake_call(tokenId) {
    let result = await this.call("unstake", [import_eth_wallet5.Utils.toString(tokenId)]);
    return;
  }
  async withdrawLink_send(amount) {
    let result = await this.send("withdrawLink", [import_eth_wallet5.Utils.toString(amount)]);
    return result;
  }
  async withdrawLink_call(amount) {
    let result = await this.call("withdrawLink", [import_eth_wallet5.Utils.toString(amount)]);
    return;
  }
  assign() {
    this.approve = Object.assign(this.approve_send, { call: this.approve_call });
    this.batchApprove = Object.assign(this.batchApprove_send, { call: this.batchApprove_call });
    this.deny = Object.assign(this.deny_send, { call: this.deny_call });
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
    this.unstake = Object.assign(this.unstake_send, { call: this.unstake_call });
    this.withdrawLink = Object.assign(this.withdrawLink_send, { call: this.withdrawLink_call });
  }
};

// src/contracts/TrollNFT_VRFV2.ts
var import_eth_wallet6 = __toModule(require("@ijstech/eth-wallet"));

// src/contracts/TrollNFT_VRFV2.json.ts
var TrollNFT_VRFV2_json_default = {
  "abi": [
    { "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "string", "name": "__baseURI", "type": "string" }, { "internalType": "uint256", "name": "_cap", "type": "uint256" }, { "internalType": "contract IERC20", "name": "_stakeToken", "type": "address" }, { "internalType": "bool", "name": "_requireApproval", "type": "bool" }, { "internalType": "uint256", "name": "_minimumStake", "type": "uint256" }, { "internalType": "uint256", "name": "_protocolFee", "type": "uint256" }, { "internalType": "address", "name": "_protocolFeeTo", "type": "address" }, { "components": [{ "internalType": "contract IERC721[]", "name": "listValidNFTs", "type": "address[]" }, { "internalType": "uint256", "name": "maximumValidNFTs", "type": "uint256" }], "internalType": "struct TrollNFTV2.NFTInfo", "name": "_nftInfo", "type": "tuple" }, { "components": [{ "internalType": "address[2]", "name": "vrfAddresses", "type": "address[2]" }, { "internalType": "bytes32[2]", "name": "vrfParams", "type": "bytes32[2]" }], "internalType": "struct TrollNFT_VRFV2.VRFInfo", "name": "_vrfInfo", "type": "tuple" }], "stateMutability": "nonpayable", "type": "constructor" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amountAdded", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newAmount", "type": "uint256" }], "name": "AddStakes", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "contract IERC721", "name": "nft", "type": "address" }], "name": "AddValidNFT", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "staker", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "allow", "type": "bool" }], "name": "ApprovedStaker", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "Attribute", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "string", "name": "baseURI", "type": "string" }], "name": "BaseURI", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "cap", "type": "uint256" }], "name": "Cap", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "CustomAttribute", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trollId", "type": "uint256" }, { "indexed": true, "internalType": "contract IERC721", "name": "nft", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "nftId", "type": "uint256" }], "name": "EquipNFT", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "minimumStake", "type": "uint256" }], "name": "MinimumStake", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "protocolFee", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "protocolFeeTo", "type": "address" }], "name": "ProtocolFee", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "who", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Stake", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "fromTokenId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "StakesApproval", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "fromTokenId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "toTokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "StakesTransfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trollId", "type": "uint256" }, { "indexed": true, "internalType": "contract IERC721", "name": "nft", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "nftId", "type": "uint256" }], "name": "UnequipNFT", "type": "event" },
    { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "who", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Unstake", "type": "event" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "_attributes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "_customAttributes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }], "name": "_stakesTransferAllowances", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "addStakes", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "contract IERC721[]", "name": "nfts", "type": "address[]" }], "name": "addValidNFTs", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "approvedStaker", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address[]", "name": "stakers", "type": "address[]" }], "name": "batchApprove", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "cap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "counter", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "creationDate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "destoryDate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "trollId", "type": "uint256" }, { "internalType": "contract IERC721", "name": "nft", "type": "address" }, { "internalType": "uint256", "name": "nftId", "type": "uint256" }], "name": "equipNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "extraStakes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "base", "type": "uint256" }, { "internalType": "uint256", "name": "offset", "type": "uint256" }, { "internalType": "uint256", "name": "digits", "type": "uint256" }], "name": "getAttributes1", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "base", "type": "uint256" }, { "internalType": "uint256[]", "name": "digits", "type": "uint256[]" }], "name": "getAttributes2", "outputs": [{ "internalType": "uint256[]", "name": "params", "type": "uint256[]" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "contract IERC721", "name": "", "type": "address" }], "name": "isValidNFT", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "lastStakeDate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "listValidNFTs", "outputs": [{ "internalType": "contract IERC721", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "maximumValidNFTs", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "minimumStake", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "minted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "contract IERC721", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "nftsEquipped", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "protocolFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "protocolFeeBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "protocolFeeTo", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "requestId", "type": "bytes32" }, { "internalType": "uint256", "name": "randomness", "type": "uint256" }], "name": "rawFulfillRandomness", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "requireApproval", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "staker", "type": "address" }, { "internalType": "bool", "name": "allow", "type": "bool" }], "name": "setApprovedStaker", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "string", "name": "__baseURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_cap", "type": "uint256" }], "name": "setCap", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "attribute", "type": "uint256" }], "name": "setCustomAttribute", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_minimumStake", "type": "uint256" }], "name": "setMinimumStake", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "_protocolFee", "type": "uint256" }, { "internalType": "address", "name": "_protocolFeeTo", "type": "address" }], "name": "setProtocolFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "bytes32", "name": "_vrfKeyHash", "type": "bytes32" }, { "internalType": "uint256", "name": "_vrfFee", "type": "uint256" }], "name": "setVrfParams", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "stake", "outputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "stakeToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "stakingBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
    { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "transferProtocolFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "contract IERC721", "name": "", "type": "address" }], "name": "trollOwnedNFTs", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "trollId", "type": "uint256" }, { "internalType": "contract IERC721", "name": "nft", "type": "address" }, { "internalType": "uint256", "name": "nftId", "type": "uint256" }], "name": "unequipNFT", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "unstake", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
    { "inputs": [], "name": "validNFTsLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
    { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdrawLink", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
  ],
  "bytecode": "60e06040523480156200001157600080fd5b50604051620063e9380380620063e983398101604081905262000034916200081f565b80518051602091820151600080546001600160a01b0319163317905560016003558d51919290918e918e918e918e918e918e918e918e918e918e918b918b91620000859160049190850190620004f2565b5080516200009b906005906020840190620004f2565b5050508260001480620000b657506001600160a01b03821615155b620001085760405162461bcd60e51b815260206004820152601960248201527f496e76616c69642070726f746f636f6c4665652f466565546f0000000000000060448201526064015b60405180910390fd5b602081015181515111156200015b5760405162461bcd60e51b815260206004820152602480820152600080516020620063c98339815191526044820152634e46547360e01b6064820152608401620000ff565b87516200017090600f9060208b0190620004f2565b50600e879055606086901b6001600160601b0319166080526010805460ff191686151517905560118490556012839055601380546001600160a01b0319166001600160a01b03841617905560208101516016558051620001d09062000319565b7f01e56a02aca7f26a28165a040851ba78f30282b55ca81c63a804cdc1e2dcea72600f60405162000202919062000954565b60405180910390a17fddf4c293a3479db41117899542b2a5d272b166296d11693304a6c1eac191054b600e546040516200023e91815260200190565b60405180910390a17f0be9186a0f7f1e3c3019fdaacbaffb9ea92e4aacae81a3dbcc3a18220a47380d6011546040516200027a91815260200190565b60405180910390a1601254601354604080519283526001600160a01b0390911660208301527f5ecd7df85e51aff79e169c80a23d9299697dcb741138d732a78485f61370843d910160405180910390a15050505050606096871b6001600160601b031990811660c0529590961b90941660a052505050506020828101518051910151620003089250620004cf565b505050505050505050505062000b1b565b6000546001600160a01b031633146200033157600080fd5b601654815160155462000345919062000a60565b1115620003905760405162461bcd60e51b815260206004820152602480820152600080516020620063c98339815191526044820152634e46547360e01b6064820152608401620000ff565b60005b8151811015620004cb576000828281518110620003c057634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160a01b038116600090815291805260409091205490915060ff16156200042d5760405162461bcd60e51b815260206004820152601160248201527013919508185b1c9958591e481859191959607a1b6044820152606401620000ff565b6001600160a01b0381166000818152602080526040808220805460ff1916600190811790915560158054918201815583527f55f448fdea98c4d29eb340757ef0a66cd03dbb9538908a6a81d96026b71ec4750180546001600160a01b03191684179055517f6f0f8cee3d9c2f167393540bc77d82ef43045c19beafd62240a7e45f2519171a9190a25080620004c28162000ab8565b91505062000393565b5050565b6000546001600160a01b03163314620004e757600080fd5b602691909155602755565b828054620005009062000a7b565b90600052602060002090601f0160209004810192826200052457600085556200056f565b82601f106200053f57805160ff19168380011785556200056f565b828001600101855582156200056f579182015b828111156200056f57825182559160200191906001019062000552565b506200057d92915062000581565b5090565b5b808211156200057d576000815560010162000582565b8051620005a58162000b02565b919050565b600082601f830112620005bb578081fd5b620005c562000a02565b808385604086011115620005d7578384fd5b835b6002811015620005fa578151845260209384019390910190600101620005d9565b509095945050505050565b80518015158114620005a557600080fd5b600082601f83011262000627578081fd5b81516001600160401b0381111562000643576200064362000aec565b602062000659601f8301601f1916820162000a2d565b82815285828487010111156200066d578384fd5b835b838110156200068c5785810183015182820184015282016200066f565b838111156200069d57848385840101525b5095945050505050565b600060408284031215620006b9578081fd5b620006c362000a02565b82519091506001600160401b0380821115620006de57600080fd5b818401915084601f830112620006f357600080fd5b81516020828211156200070a576200070a62000aec565b8160051b92506200071d81840162000a2d565b8281528181019085830185870184018a10156200073957600080fd5b600096505b848710156200076c5780519550620007568662000b02565b858352600196909601959183019183016200073e565b50808752505080860151818601525050505092915050565b60006080828403121562000796578081fd5b620007a062000a02565b905082601f830112620007b257600080fd5b620007bc62000a02565b80836040850186811115620007d057600080fd5b60005b600281101562000800578251620007ea8162000b02565b85526020948501949290920191600101620007d3565b50828552620008108782620005aa565b60208601525050505092915050565b60008060008060008060008060008060006101c08c8e03121562000841578687fd5b8b516001600160401b0381111562000857578788fd5b620008658e828f0162000616565b60208e0151909c5090506001600160401b0381111562000883578788fd5b620008918e828f0162000616565b60408e0151909b5090506001600160401b03811115620008af578788fd5b620008bd8e828f0162000616565b99505060608c01519750620008d560808d0162000598565b9650620008e560a08d0162000605565b955060c08c0151945060e08c01519350620009046101008d0162000598565b6101208d01519093506001600160401b0381111562000921578283fd5b6200092f8e828f01620006a7565b925050620009428d6101408e0162000784565b90509295989b509295989b9093969950565b6000602080835281845483600182811c9150808316806200097657607f831692505b8583108114156200099557634e487b7160e01b87526022600452602487fd5b878601838152602001818015620009b55760018114620009c757620009f3565b60ff19861682528782019650620009f3565b60008b815260209020895b86811015620009ed57815484820152908501908901620009d2565b83019750505b50949998505050505050505050565b604080519081016001600160401b038111828210171562000a275762000a2762000aec565b60405290565b604051601f8201601f191681016001600160401b038111828210171562000a585762000a5862000aec565b604052919050565b6000821982111562000a765762000a7662000ad6565b500190565b600181811c9082168062000a9057607f821691505b6020821081141562000ab257634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141562000acf5762000acf62000ad6565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811462000b1857600080fd5b50565b60805160601c60a05160601c60c05160601c61584462000b85600039600081816126fd0152613f650152600081816125c301528181612a4c0152613f2901526000818161061f0152818161112d015281816126b301528181612f860152613e3201526158446000f3fe608060405234801561001057600080fd5b50600436106104215760003560e01c806378511f6111610235578063b88d4fde11610135578063e7201063116100c8578063ec5ffac211610097578063f0ab14ed1161007c578063f0ab14ed146109f4578063f2fde38b14610a14578063f43d958414610a2757600080fd5b8063ec5ffac2146109cb578063ef369252146109d457600080fd5b8063e720106314610949578063e985e9c51461095c578063ea289d00146109a5578063ea5ed3db146109b857600080fd5b8063d4ee1d9011610104578063d4ee1d90146108e1578063d793006614610901578063d8f8504f14610921578063da1bbcf61461094157600080fd5b8063b88d4fde14610890578063baba73a5146108a3578063c287e806146108ac578063c87b56dd146108ce57600080fd5b806395d89b41116101c8578063a694fc3a11610197578063b13db5761161017c578063b13db5761461083d578063b1bc99161461085d578063b55e58471461087057600080fd5b8063a694fc3a14610821578063b0e21e8a1461083457600080fd5b806395d89b41146107e05780639c52a7f1146107e8578063a22cb465146107fb578063a2f55ae51461080e57600080fd5b806382d5ea6c1161020457806382d5ea6c146107805780638c8c8a501461078d5780638da5cb5b146107ad57806394985ddd146107cd57600080fd5b806378511f611461071a5780637a8042bd1461073a5780637e09858e1461074d57806381fdc72b1461077857600080fd5b806342842e0e116103405780635981f75a116102d357806368c1c088116102a25780636e660ab1116102875780636e660ab1146106b957806370a08231146106e45780637776a0e5146106f757600080fd5b806368c1c0881461069e5780636c0360eb146106b157600080fd5b80635981f75a14610667578063605361721461067a57806361bc221a146106825780636352211e1461068b57600080fd5b80635174df051161030f5780635174df051461060757806351ed6a301461061a5780635452f3691461064157806355f804b31461065457600080fd5b806342842e0e146105bb578063476f2d5c146105ce57806347786d37146105e15780634f6ccce7146105f457600080fd5b8063233e9903116103b85780632f745c59116103875780632f745c5914610569578063355274ea1461057c5780633a2f5511146105855780633fd8cc4e1461059857600080fd5b8063233e99031461051d57806323b872dd146105305780632457c8ea146105435780632e17de781461055657600080fd5b80630a22d68c116103f45780630a22d68c146104b057806318160ddd146104c75780631864bbc9146104cf5780631e7269c5146104fa57600080fd5b806301ffc9a71461042657806306fdde031461044e578063081812fc14610463578063095ea7b31461049b575b600080fd5b610439610434366004615203565b610a47565b60405190151581526020015b60405180910390f35b610456610aa3565b60405161044591906154d4565b610476610471366004615281565b610b35565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610445565b6104ae6104a93660046150a7565b610c14565b005b6104b960145481565b604051908152602001610445565b600c546104b9565b6104b96104dd3660046150a7565b602260209081526000928352604080842090915290825290205481565b610439610508366004614f4d565b601f6020526000908152604090205460ff1681565b6104ae61052b366004615281565b610da1565b6104ae61053e366004614fbd565b610e01565b6104ae6105513660046151e2565b610ea2565b6104ae610564366004615281565b611008565b6104b96105773660046150a7565b611280565b6104b9600e5481565b6104ae610593366004615112565b61134f565b6104396105a6366004614f4d565b60026020526000908152604090205460ff1681565b6104ae6105c9366004614fbd565b6115d9565b6104b96105dc36600461534c565b6115f4565b6104ae6105ef366004615281565b611638565b6104b9610602366004615281565b6116fc565b6104ae6106153660046152d5565b6117e1565b6104767f000000000000000000000000000000000000000000000000000000000000000081565b6104ae61064f3660046151e2565b611c35565b6104ae61066236600461523b565b611c64565b6104ae6106753660046152d5565b611ccc565b6104ae612119565b6104b960175481565b610476610699366004615281565b612243565b6104ae6106ac36600461507a565b6122f5565b61045661243e565b6104b96106c73660046152b1565b602460209081526000928352604080842090915290825290205481565b6104b96106f2366004614f4d565b6124cc565b610439610705366004614f4d565b601e6020526000908152604090205460ff1681565b6104b9610728366004615281565b60236020526000908152604090205481565b6104ae610748366004615281565b61259a565b6104b961075b3660046152b1565b602160209081526000928352604080842090915290825290205481565b6104ae6125ec565b6010546104399060ff1681565b6104b961079b366004615281565b60186020526000908152604090205481565b6000546104769073ffffffffffffffffffffffffffffffffffffffff1681565b6104ae6107db3660046151e2565b6126e5565b61045661278e565b6104ae6107f6366004614f4d565b61279d565b6104ae61080936600461507a565b61283d565b6104ae61081c366004614f4d565b612954565b6104b961082f366004615281565b6129f7565b6104b960125481565b6104b961084b366004615281565b60196020526000908152604090205481565b61047661086b366004615281565b612b55565b6104b961087e366004615281565b601d6020526000908152604090205481565b6104ae61089e366004614ffd565b612b8c565b6104b960165481565b6104396108ba366004614f4d565b602080526000908152604090205460ff1681565b6104566108dc366004615281565b612c34565b6001546104769073ffffffffffffffffffffffffffffffffffffffff1681565b61091461090f3660046152fb565b612d44565b6040516104459190615490565b6104b961092f366004615281565b601c6020526000908152604090205481565b6015546104b9565b6104ae6109573660046151e2565b612ee5565b61043961096a366004614f85565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260096020908152604080832093909416825291909152205460ff1690565b6104ae6109b33660046152b1565b613021565b6104ae6109c63660046150d2565b613153565b6104b960115481565b6013546104769073ffffffffffffffffffffffffffffffffffffffff1681565b6104b9610a02366004615281565b601a6020526000908152604090205481565b6104ae610a22366004614f4d565b613307565b6104b9610a35366004615281565b601b6020526000908152604090205481565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f780e9d63000000000000000000000000000000000000000000000000000000001480610a9d5750610a9d8261339e565b92915050565b606060048054610ab290615682565b80601f0160208091040260200160405190810160405280929190818152602001828054610ade90615682565b8015610b2b5780601f10610b0057610100808354040283529160200191610b2b565b820191906000526020600020905b815481529060010190602001808311610b0e57829003601f168201915b5050505050905090565b60008181526006602052604081205473ffffffffffffffffffffffffffffffffffffffff16610beb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5060009081526008602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b6000610c1f82612243565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610cdd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f72000000000000000000000000000000000000000000000000000000000000006064820152608401610be2565b3373ffffffffffffffffffffffffffffffffffffffff82161480610d065750610d06813361096a565b610d92576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610be2565b610d9c8383613481565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610dc557600080fd5b60118190556040518181527f0be9186a0f7f1e3c3019fdaacbaffb9ea92e4aacae81a3dbcc3a18220a47380d906020015b60405180910390a150565b610e0b3382613521565b610e97576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f7665640000000000000000000000000000006064820152608401610be2565b610d9c83838361368d565b3360009081526002602052604090205460ff16610f41576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610be2565b6000828152601a602052604090205415610fb7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f41747472696275746520616c72656164792073657400000000000000000000006044820152606401610be2565b6000828152601a6020526040908190208290555182907fe73a9e48f41e228034f18c54b3f003b3de0b3bf1069ffd0c352543431b8a86a390610ffc9084815260200190565b60405180910390a25050565b60026003541415611075576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610be2565b60026003556110843382613521565b6110ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f7420617574686f72697a65640000000000000000000000000000000000006044820152606401610be2565b6110f3816138ff565b6000818152601c6020908152604080832042905560189091528120805491905561115473ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001633836139d8565b60005b60155481101561123f5760006015828154811061119d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600091825260208083209091015486835260218252604080842073ffffffffffffffffffffffffffffffffffffffff90921680855291909252912054909150801561122a5773ffffffffffffffffffffffffffffffffffffffff82166000818152602260209081526040808320858452825280832083905588835260218252808320938352929052908120555b50508080611237906156d6565b915050611157565b50604051818152829033907ff960dbf9e5d0682f7a298ed974e33a28b4464914b7a2bfac12ae419a9afeb2809060200160405180910390a350506001600355565b600061128b836124cc565b8210611319576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e64730000000000000000000000000000000000000000006064820152608401610be2565b5073ffffffffffffffffffffffffffffffffffffffff919091166000908152600a60209081526040808320938352929052205490565b60005473ffffffffffffffffffffffffffffffffffffffff16331461137357600080fd5b60165481516015546113859190615613565b1115611412576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45786365656473206d6178696d756d206e756d626572206f662076616c69642060448201527f4e465473000000000000000000000000000000000000000000000000000000006064820152608401610be2565b60005b81518110156115d5576000828281518110611459577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff8116600090815291805260409091205490915060ff16156114f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e465420616c72656164792061646465640000000000000000000000000000006044820152606401610be2565b73ffffffffffffffffffffffffffffffffffffffff8116600081815260208052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600190811790915560158054918201815583527f55f448fdea98c4d29eb340757ef0a66cd03dbb9538908a6a81d96026b71ec4750180547fffffffffffffffffffffffff00000000000000000000000000000000000000001684179055517f6f0f8cee3d9c2f167393540bc77d82ef43045c19beafd62240a7e45f2519171a9190a250806115cd816156d6565b915050611415565b5050565b610d9c83838360405180602001604052806000815250612b8c565b60006116008483613aac565b61160a8585613aac565b600087815260196020526040902054611623919061562b565b61162d919061570f565b90505b949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461165c57600080fd5b600e5481116116c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f43617020616c72656164792065786365656465640000000000000000000000006044820152606401610be2565b600e8190556040518181527fddf4c293a3479db41117899542b2a5d272b166296d11693304a6c1eac191054b90602001610df6565b6000611707600c5490565b8210611795576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e647300000000000000000000000000000000000000006064820152608401610be2565b600c82815481106117cf577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001549050919050565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208052604090205460ff1661186f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4e6f742076616c6964204e4654000000000000000000000000000000000000006044820152606401610be2565b3361187984612243565b73ffffffffffffffffffffffffffffffffffffffff161461191c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f596f7520617265206e6f7420746865206f776e6572206f66207468697320747260448201527f6f6c6c00000000000000000000000000000000000000000000000000000000006064820152608401610be2565b6040517f6352211e00000000000000000000000000000000000000000000000000000000815260048101829052339073ffffffffffffffffffffffffffffffffffffffff841690636352211e9060240160206040518083038186803b15801561198457600080fd5b505afa158015611998573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119bc9190614f69565b73ffffffffffffffffffffffffffffffffffffffff1614611a5f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f596f7520617265206e6f7420746865206f776e6572206f662074686973204e4660448201527f54000000000000000000000000000000000000000000000000000000000000006064820152608401610be2565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260226020908152604080832084845290915290205415611af7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4e465420616c72656164792065717569707065640000000000000000000000006044820152606401610be2565b600083815260216020908152604080832073ffffffffffffffffffffffffffffffffffffffff8616845290915290205415611bb4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f456163682074726f6c6c2063616e206f6e6c79206571756970206f6e6520746f60448201527f6b656e20706572204e46540000000000000000000000000000000000000000006064820152608401610be2565b73ffffffffffffffffffffffffffffffffffffffff82166000818152602260209081526040808320858452825280832087905586835260218252808320848452825291829020849055905183815285917f5f3e52a313d16d3e3d13ea422592abcdf8484958442b5d977890b64c53523e2391015b60405180910390a3505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611c5957600080fd5b602691909155602755565b60005473ffffffffffffffffffffffffffffffffffffffff163314611c8857600080fd5b8051611c9b90600f906020840190614df4565b507f01e56a02aca7f26a28165a040851ba78f30282b55ca81c63a804cdc1e2dcea72600f604051610df691906154e7565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208052604090205460ff16611d5a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4e6f742076616c6964204e4654000000000000000000000000000000000000006044820152606401610be2565b33611d6484612243565b73ffffffffffffffffffffffffffffffffffffffff1614611e07576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f596f7520617265206e6f7420746865206f776e6572206f66207468697320747260448201527f6f6c6c00000000000000000000000000000000000000000000000000000000006064820152608401610be2565b6040517f6352211e00000000000000000000000000000000000000000000000000000000815260048101829052339073ffffffffffffffffffffffffffffffffffffffff841690636352211e9060240160206040518083038186803b158015611e6f57600080fd5b505afa158015611e83573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ea79190614f69565b73ffffffffffffffffffffffffffffffffffffffff1614611f4a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f596f7520617265206e6f7420746865206f776e6572206f662074686973204e4660448201527f54000000000000000000000000000000000000000000000000000000000000006064820152608401610be2565b73ffffffffffffffffffffffffffffffffffffffff821660009081526022602090815260408083208484529091529020548314612009576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f54686973204e465420646f6573206e6f742062656c6f6e6720746f207468697360448201527f2074726f6c6c00000000000000000000000000000000000000000000000000006064820152608401610be2565b600083815260216020908152604080832073ffffffffffffffffffffffffffffffffffffffff8616845290915290205481146120a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f546869732074726f6c6c20646f6573206e6f74206f776e2074686973204e46546044820152606401610be2565b73ffffffffffffffffffffffffffffffffffffffff82166000818152602260209081526040808320858452825280832083905586835260218252808320848452825280832092909255905183815285917f209edba55054a6d25cdb7cd481d568e6a0fbe2ecc48276caee30a061cb1f744f9101611c28565b60015473ffffffffffffffffffffffffffffffffffffffff1633146121c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610be2565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60008181526006602052604081205473ffffffffffffffffffffffffffffffffffffffff1680610a9d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e00000000000000000000000000000000000000000000006064820152608401610be2565b60005473ffffffffffffffffffffffffffffffffffffffff16331461231957600080fd5b60105460ff1661234f57601080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790555b80156123a85773ffffffffffffffffffffffffffffffffffffffff82166000908152601e6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556123f4565b73ffffffffffffffffffffffffffffffffffffffff82166000908152601e6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690555b8173ffffffffffffffffffffffffffffffffffffffff167fd1b1846bd2f96d78a14f8960ca200e7a29f8d8d08c0386ffe28dc5c99067c52382604051610ffc911515815260200190565b600f805461244b90615682565b80601f016020809104026020016040519081016040528092919081815260200182805461247790615682565b80156124c45780601f10612499576101008083540402835291602001916124c4565b820191906000526020600020905b8154815290600101906020018083116124a757829003601f168201915b505050505081565b600073ffffffffffffffffffffffffffffffffffffffff8216612571576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f2061646472657373000000000000000000000000000000000000000000006064820152608401610be2565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526007602052604090205490565b60005473ffffffffffffffffffffffffffffffffffffffff1633146125be57600080fd5b6125e97f000000000000000000000000000000000000000000000000000000000000000033836139d8565b50565b60026003541415612659576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610be2565b600260035560135473ffffffffffffffffffffffffffffffffffffffff161580159061268757506000601454115b156126de576014805460009091556013546126dc9073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081169116836139d8565b505b6001600355565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614612784576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f4f6e6c7920565246436f6f7264696e61746f722063616e2066756c66696c6c006044820152606401610be2565b6115d58282613b3e565b606060058054610ab290615682565b60005473ffffffffffffffffffffffffffffffffffffffff1633146127c157600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a78849101610df6565b73ffffffffffffffffffffffffffffffffffffffff82163314156128bd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610be2565b33600081815260096020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461297857600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf59101610df6565b6000612a0282613b94565b6027546040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529192509073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a082319060240160206040518083038186803b158015612a8e57600080fd5b505afa158015612aa2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ac69190615299565b1015612b2e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f7420656e6f756768204c494e4b00000000000000000000000000000000006044820152606401610be2565b6000612b3e602654602754613f25565b600090815260286020526040902082905550919050565b60158181548110612b6557600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b612b963383613521565b612c22576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f7665640000000000000000000000000000006064820152608401610be2565b612c2e848484846140bd565b50505050565b60008181526006602052604090205460609073ffffffffffffffffffffffffffffffffffffffff16612ce8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e00000000000000000000000000000000006064820152608401610be2565b6000612cf2614160565b90506000815111612d125760405180602001604052806000815250612d3d565b80612d1c8461416f565b604051602001612d2d9291906153e3565b6040516020818303038152906040525b9392505050565b6060818067ffffffffffffffff811115612d87577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015612db0578160200160208202803683370190505b5060008781526019602052604081205491935090815b83811015612ed957612e1788888884818110612e0b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020135613aac565b612e218985613aac565b612e2b908461562b565b612e35919061570f565b858281518110612e6e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018181525050868682818110612eb3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002013583612ec59190615613565b925080612ed1816156d6565b915050612dc6565b50505050949350505050565b33612eef83612243565b73ffffffffffffffffffffffffffffffffffffffff1614612f6c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f7420617574686f72697a65640000000000000000000000000000000000006044820152606401610be2565b612fae73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163330846142ef565b60008281526018602052604081208054839290612fcc908490615613565b90915550506000828152601d6020908152604080832042905560188252918290205482518481529182015283917f9dd9373946c68e9420a62b36f888feb3e769b907bb535e27af7f59f2886337499101610ffc565b60005473ffffffffffffffffffffffffffffffffffffffff16331461304557600080fd5b811580613067575073ffffffffffffffffffffffffffffffffffffffff811615155b6130cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f496e76616c69642070726f746f636f6c4665652f466565546f000000000000006044820152606401610be2565b6012829055601380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040805184815260208101929092527f5ecd7df85e51aff79e169c80a23d9299697dcb741138d732a78485f61370843d910160405180910390a15050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461317757600080fd5b601080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558060005b81811015612c2e576001601e60008686858181106131ed577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020160208101906132029190614f4d565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001691151591909117905583838281811061328e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020160208101906132a39190614f4d565b73ffffffffffffffffffffffffffffffffffffffff167fd1b1846bd2f96d78a14f8960ca200e7a29f8d8d08c0386ffe28dc5c99067c52360016040516132ed911515815260200190565b60405180910390a2806132ff816156d6565b9150506131a6565b60005473ffffffffffffffffffffffffffffffffffffffff16331461332b57600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b90602001610df6565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd00000000000000000000000000000000000000000000000000000000148061343157507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b80610a9d57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610a9d565b600081815260086020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841690811790915581906134db82612243565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008181526006602052604081205473ffffffffffffffffffffffffffffffffffffffff166135d2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e00000000000000000000000000000000000000006064820152608401610be2565b60006135dd83612243565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061364c57508373ffffffffffffffffffffffffffffffffffffffff1661363484610b35565b73ffffffffffffffffffffffffffffffffffffffff16145b80611630575073ffffffffffffffffffffffffffffffffffffffff80821660009081526009602090815260408083209388168352929052205460ff16611630565b8273ffffffffffffffffffffffffffffffffffffffff166136ad82612243565b73ffffffffffffffffffffffffffffffffffffffff1614613750576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e00000000000000000000000000000000000000000000006064820152608401610be2565b73ffffffffffffffffffffffffffffffffffffffff82166137f2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610be2565b6137fd83838361434d565b613808600082613481565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260076020526040812080546001929061383e90849061563f565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000908152600760205260408120805460019290613879908490615613565b909155505060008181526006602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff86811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600061390a82612243565b90506139188160008461434d565b613923600083613481565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260076020526040812080546001929061395990849061563f565b909155505060008281526006602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690555183919073ffffffffffffffffffffffffffffffffffffffff8416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610d9c9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152614453565b6000828015613b2057600183168015613ac757849250613acc565b600192505b506002830492505b8215613b1b578384028485820414613aeb57600080fd5b93506001831615613b10578382028285820414158515151615613b0d57600080fd5b91505b600283049250613ad4565b613b37565b828015613b305760009250613b35565b600192505b505b5092915050565b60008281526028602090815260408083205480845260198352928190208490555183815282917f1e6edca497f4aff07b388b2c8af55371a16eb956ed650861cb45f11758e4a65b910160405180910390a2505050565b600060026003541415613c03576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610be2565b600260035560105460ff161580613c295750336000908152601e602052604090205460ff165b613c8f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f7420617574686f72697a65640000000000000000000000000000000000006044820152606401610be2565b600060125483613c9f919061563f565b9050601154811015613d0d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4d696e696e756d207374616b65206e6f74206d657400000000000000000000006044820152606401610be2565b600e54600c5410613d7a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f43617020657863656564656400000000000000000000000000000000000000006044820152606401610be2565b60105460ff161580613d9c5750336000908152601f602052604090205460ff16155b613e02576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f596f752063616e206f6e6c79207374616b65206f6e63650000000000000000006044820152606401610be2565b601760008154613e11906156d6565b91829055509150613e5a73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163330866142ef565b60008281526018602052604081208290556012546014805491929091613e81908490615613565b9091555050336000818152601f6020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055858352601b82528083204290819055601d90925290912055613ee3908361455f565b604051838152829033907f5af417134f72a9d41143ace85b0a26dce6f550f894f2cbc1eeee8810603d91b69060200160405180910390a3506001600355919050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634000aea07f000000000000000000000000000000000000000000000000000000000000000084866000604051602001613fa2929190918252602082015260400190565b6040516020818303038152906040526040518463ffffffff1660e01b8152600401613fcf9392919061545b565b602060405180830381600087803b158015613fe957600080fd5b505af1158015613ffd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061402191906151c6565b50600083815260256020818152604080842054815180840189905280830186905230606082015260808082018390528351808303909101815260a09091019092528151918301919091209387905291905261407d906001615613565b6000858152602560205260409020556116308482604080516020808201949094528082019290925280518083038201815260609092019052805191012090565b6140c884848461368d565b6140d484848484614579565b612c2e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610be2565b6060600f8054610ab290615682565b6060816141af57505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b81156141d957806141c3816156d6565b91506141d29050600a8361562b565b91506141b3565b60008167ffffffffffffffff81111561421b577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015614245576020820181803683370190505b5090505b84156116305761425a60018361563f565b9150614267600a8661570f565b614272906030615613565b60f81b8183815181106142ae577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506142e8600a8661562b565b9450614249565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052612c2e9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401613a2a565b73ffffffffffffffffffffffffffffffffffffffff83166143b5576143b081600c80546000838152600d60205260408120829055600182018355919091527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c70155565b6143f2565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146143f2576143f28382614775565b73ffffffffffffffffffffffffffffffffffffffff821661441657610d9c8161482c565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610d9c57610d9c8282614950565b60006144b5826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166149a19092919063ffffffff16565b805190915015610d9c57808060200190518101906144d391906151c6565b610d9c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610be2565b6115d58282604051806020016040528060008152506149b0565b600073ffffffffffffffffffffffffffffffffffffffff84163b1561476d576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a02906145f0903390899088908890600401615412565b602060405180830381600087803b15801561460a57600080fd5b505af1925050508015614658575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526146559181019061521f565b60015b614722573d808015614686576040519150601f19603f3d011682016040523d82523d6000602084013e61468b565b606091505b50805161471a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610be2565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050611630565b506001611630565b60006001614782846124cc565b61478c919061563f565b6000838152600b60205260409020549091508082146147ec5773ffffffffffffffffffffffffffffffffffffffff84166000908152600a602090815260408083208584528252808320548484528184208190558352600b90915290208190555b506000918252600b6020908152604080842084905573ffffffffffffffffffffffffffffffffffffffff9094168352600a81528383209183525290812055565b600c5460009061483e9060019061563f565b6000838152600d6020526040812054600c805493945090928490811061488d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905080600c83815481106148d5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000918252602080832090910192909255828152600d9091526040808220849055858252812055600c805480614934577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b600061495b836124cc565b73ffffffffffffffffffffffffffffffffffffffff9093166000908152600a602090815260408083208684528252808320859055938252600b9052919091209190915550565b60606116308484600085614a53565b6149ba8383614bd3565b6149c76000848484614579565b610d9c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610be2565b606082471015614ae5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610be2565b843b614b4d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610be2565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051614b7691906153c7565b60006040518083038185875af1925050503d8060008114614bb3576040519150601f19603f3d011682016040523d82523d6000602084013e614bb8565b606091505b5091509150614bc8828286614da1565b979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216614c50576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610be2565b60008181526006602052604090205473ffffffffffffffffffffffffffffffffffffffff1615614cdc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610be2565b614ce86000838361434d565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600760205260408120805460019290614d1e908490615613565b909155505060008181526006602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60608315614db0575081612d3d565b825115614dc05782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be291906154d4565b828054614e0090615682565b90600052602060002090601f016020900481019282614e225760008555614e68565b82601f10614e3b57805160ff1916838001178555614e68565b82800160010185558215614e68579182015b82811115614e68578251825591602001919060010190614e4d565b50614e74929150614e78565b5090565b5b80821115614e745760008155600101614e79565b600067ffffffffffffffff831115614ea757614ea7615781565b614ed860207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f860116016155c4565b9050828152838383011115614eec57600080fd5b828260208301376000602084830101529392505050565b60008083601f840112614f14578182fd5b50813567ffffffffffffffff811115614f2b578182fd5b6020830191508360208260051b8501011115614f4657600080fd5b9250929050565b600060208284031215614f5e578081fd5b8135612d3d816157b0565b600060208284031215614f7a578081fd5b8151612d3d816157b0565b60008060408385031215614f97578081fd5b8235614fa2816157b0565b91506020830135614fb2816157b0565b809150509250929050565b600080600060608486031215614fd1578081fd5b8335614fdc816157b0565b92506020840135614fec816157b0565b929592945050506040919091013590565b60008060008060808587031215615012578081fd5b843561501d816157b0565b9350602085013561502d816157b0565b925060408501359150606085013567ffffffffffffffff81111561504f578182fd5b8501601f8101871361505f578182fd5b61506e87823560208401614e8d565b91505092959194509250565b6000806040838503121561508c578182fd5b8235615097816157b0565b91506020830135614fb2816157d2565b600080604083850312156150b9578182fd5b82356150c4816157b0565b946020939093013593505050565b600080602083850312156150e4578081fd5b823567ffffffffffffffff8111156150fa578182fd5b61510685828601614f03565b90969095509350505050565b60006020808385031215615124578182fd5b823567ffffffffffffffff8082111561513b578384fd5b818501915085601f83011261514e578384fd5b81358181111561516057615160615781565b8060051b91506151718483016155c4565b8181528481019084860184860187018a101561518b578788fd5b8795505b838610156151b957803594506151a4856157b0565b8483526001959095019491860191860161518f565b5098975050505050505050565b6000602082840312156151d7578081fd5b8151612d3d816157d2565b600080604083850312156151f4578182fd5b50508035926020909101359150565b600060208284031215615214578081fd5b8135612d3d816157e0565b600060208284031215615230578081fd5b8151612d3d816157e0565b60006020828403121561524c578081fd5b813567ffffffffffffffff811115615262578182fd5b8201601f81018413615272578182fd5b61163084823560208401614e8d565b600060208284031215615292578081fd5b5035919050565b6000602082840312156152aa578081fd5b5051919050565b600080604083850312156152c3578182fd5b823591506020830135614fb2816157b0565b6000806000606084860312156152e9578081fd5b833592506020840135614fec816157b0565b60008060008060608587031215615310578182fd5b8435935060208501359250604085013567ffffffffffffffff811115615334578283fd5b61534087828801614f03565b95989497509550505050565b60008060008060808587031215615361578182fd5b5050823594602084013594506040840135936060013592509050565b60008151808452615395816020860160208601615656565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600082516153d9818460208701615656565b9190910192915050565b600083516153f5818460208801615656565b835190830190615409818360208801615656565b01949350505050565b600073ffffffffffffffffffffffffffffffffffffffff808716835280861660208401525083604083015260806060830152615451608083018461537d565b9695505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416815282602082015260606040820152600061162d606083018461537d565b6020808252825182820181905260009190848201906040850190845b818110156154c8578351835292840192918401916001016154ac565b50909695505050505050565b602081526000612d3d602083018461537d565b6000602080835281845483600182811c91508083168061550857607f831692505b85831081141561553f577f4e487b710000000000000000000000000000000000000000000000000000000087526022600452602487fd5b87860183815260200181801561555c576001811461558b576155b5565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008616825287820196506155b5565b60008b815260209020895b868110156155af57815484820152908501908901615596565b83019750505b50949998505050505050505050565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561560b5761560b615781565b604052919050565b6000821982111561562657615626615723565b500190565b60008261563a5761563a615752565b500490565b60008282101561565157615651615723565b500390565b60005b83811015615671578181015183820152602001615659565b83811115612c2e5750506000910152565b600181811c9082168061569657607f821691505b602082108114156156d0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561570857615708615723565b5060010190565b60008261571e5761571e615752565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff811681146125e957600080fd5b80151581146125e957600080fd5b7fffffffff00000000000000000000000000000000000000000000000000000000811681146125e957600080fdfea26469706673582212200495bc6ed80174cb19cb981f89e01fc347e1f828ae9810bba3821e6b93de356c64736f6c6343000804003345786365656473206d6178696d756d206e756d626572206f662076616c696420"
};

// src/contracts/TrollNFT_VRFV2.ts
var TrollNFT_VRFV2 = class extends import_eth_wallet6.Contract {
  constructor(wallet, address) {
    super(wallet, address, TrollNFT_VRFV2_json_default.abi, TrollNFT_VRFV2_json_default.bytecode);
    this.assign();
  }
  deploy(params) {
    return this._deploy(params.name, params.symbol, params.baseURI, import_eth_wallet6.Utils.toString(params.cap), params.stakeToken, params.requireApproval, import_eth_wallet6.Utils.toString(params.minimumStake), import_eth_wallet6.Utils.toString(params.protocolFee), params.protocolFeeTo, [params.nftInfo.listValidNFTs, import_eth_wallet6.Utils.toString(params.nftInfo.maximumValidNFTs)], [params.vrfInfo.vrfAddresses, import_eth_wallet6.Utils.stringToBytes32(params.vrfInfo.vrfParams)]);
  }
  parseAddStakesEvent(receipt) {
    return this.parseEvents(receipt, "AddStakes").map((e) => this.decodeAddStakesEvent(e));
  }
  decodeAddStakesEvent(event) {
    let result = event.data;
    return {
      tokenId: new import_eth_wallet6.BigNumber(result.tokenId),
      amountAdded: new import_eth_wallet6.BigNumber(result.amountAdded),
      newAmount: new import_eth_wallet6.BigNumber(result.newAmount),
      _event: event
    };
  }
  parseAddValidNFTEvent(receipt) {
    return this.parseEvents(receipt, "AddValidNFT").map((e) => this.decodeAddValidNFTEvent(e));
  }
  decodeAddValidNFTEvent(event) {
    let result = event.data;
    return {
      nft: result.nft,
      _event: event
    };
  }
  parseApprovalEvent(receipt) {
    return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
  }
  decodeApprovalEvent(event) {
    let result = event.data;
    return {
      owner: result.owner,
      approved: result.approved,
      tokenId: new import_eth_wallet6.BigNumber(result.tokenId),
      _event: event
    };
  }
  parseApprovalForAllEvent(receipt) {
    return this.parseEvents(receipt, "ApprovalForAll").map((e) => this.decodeApprovalForAllEvent(e));
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
    return this.parseEvents(receipt, "ApprovedStaker").map((e) => this.decodeApprovedStakerEvent(e));
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
    return this.parseEvents(receipt, "Attribute").map((e) => this.decodeAttributeEvent(e));
  }
  decodeAttributeEvent(event) {
    let result = event.data;
    return {
      tokenId: new import_eth_wallet6.BigNumber(result.tokenId),
      attribute: new import_eth_wallet6.BigNumber(result.attribute),
      _event: event
    };
  }
  parseAuthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Authorize").map((e) => this.decodeAuthorizeEvent(e));
  }
  decodeAuthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseBaseURIEvent(receipt) {
    return this.parseEvents(receipt, "BaseURI").map((e) => this.decodeBaseURIEvent(e));
  }
  decodeBaseURIEvent(event) {
    let result = event.data;
    return {
      baseURI: result.baseURI,
      _event: event
    };
  }
  parseCapEvent(receipt) {
    return this.parseEvents(receipt, "Cap").map((e) => this.decodeCapEvent(e));
  }
  decodeCapEvent(event) {
    let result = event.data;
    return {
      cap: new import_eth_wallet6.BigNumber(result.cap),
      _event: event
    };
  }
  parseCustomAttributeEvent(receipt) {
    return this.parseEvents(receipt, "CustomAttribute").map((e) => this.decodeCustomAttributeEvent(e));
  }
  decodeCustomAttributeEvent(event) {
    let result = event.data;
    return {
      tokenId: new import_eth_wallet6.BigNumber(result.tokenId),
      attribute: new import_eth_wallet6.BigNumber(result.attribute),
      _event: event
    };
  }
  parseDeauthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Deauthorize").map((e) => this.decodeDeauthorizeEvent(e));
  }
  decodeDeauthorizeEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseEquipNFTEvent(receipt) {
    return this.parseEvents(receipt, "EquipNFT").map((e) => this.decodeEquipNFTEvent(e));
  }
  decodeEquipNFTEvent(event) {
    let result = event.data;
    return {
      trollId: new import_eth_wallet6.BigNumber(result.trollId),
      nft: result.nft,
      nftId: new import_eth_wallet6.BigNumber(result.nftId),
      _event: event
    };
  }
  parseMinimumStakeEvent(receipt) {
    return this.parseEvents(receipt, "MinimumStake").map((e) => this.decodeMinimumStakeEvent(e));
  }
  decodeMinimumStakeEvent(event) {
    let result = event.data;
    return {
      minimumStake: new import_eth_wallet6.BigNumber(result.minimumStake),
      _event: event
    };
  }
  parseProtocolFeeEvent(receipt) {
    return this.parseEvents(receipt, "ProtocolFee").map((e) => this.decodeProtocolFeeEvent(e));
  }
  decodeProtocolFeeEvent(event) {
    let result = event.data;
    return {
      protocolFee: new import_eth_wallet6.BigNumber(result.protocolFee),
      protocolFeeTo: result.protocolFeeTo,
      _event: event
    };
  }
  parseStakeEvent(receipt) {
    return this.parseEvents(receipt, "Stake").map((e) => this.decodeStakeEvent(e));
  }
  decodeStakeEvent(event) {
    let result = event.data;
    return {
      who: result.who,
      tokenId: new import_eth_wallet6.BigNumber(result.tokenId),
      amount: new import_eth_wallet6.BigNumber(result.amount),
      _event: event
    };
  }
  parseStakesApprovalEvent(receipt) {
    return this.parseEvents(receipt, "StakesApproval").map((e) => this.decodeStakesApprovalEvent(e));
  }
  decodeStakesApprovalEvent(event) {
    let result = event.data;
    return {
      fromTokenId: new import_eth_wallet6.BigNumber(result.fromTokenId),
      spender: result.spender,
      amount: new import_eth_wallet6.BigNumber(result.amount),
      _event: event
    };
  }
  parseStakesTransferEvent(receipt) {
    return this.parseEvents(receipt, "StakesTransfer").map((e) => this.decodeStakesTransferEvent(e));
  }
  decodeStakesTransferEvent(event) {
    let result = event.data;
    return {
      fromTokenId: new import_eth_wallet6.BigNumber(result.fromTokenId),
      toTokenId: new import_eth_wallet6.BigNumber(result.toTokenId),
      amount: new import_eth_wallet6.BigNumber(result.amount),
      _event: event
    };
  }
  parseStartOwnershipTransferEvent(receipt) {
    return this.parseEvents(receipt, "StartOwnershipTransfer").map((e) => this.decodeStartOwnershipTransferEvent(e));
  }
  decodeStartOwnershipTransferEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      from: result.from,
      to: result.to,
      tokenId: new import_eth_wallet6.BigNumber(result.tokenId),
      _event: event
    };
  }
  parseTransferOwnershipEvent(receipt) {
    return this.parseEvents(receipt, "TransferOwnership").map((e) => this.decodeTransferOwnershipEvent(e));
  }
  decodeTransferOwnershipEvent(event) {
    let result = event.data;
    return {
      user: result.user,
      _event: event
    };
  }
  parseUnequipNFTEvent(receipt) {
    return this.parseEvents(receipt, "UnequipNFT").map((e) => this.decodeUnequipNFTEvent(e));
  }
  decodeUnequipNFTEvent(event) {
    let result = event.data;
    return {
      trollId: new import_eth_wallet6.BigNumber(result.trollId),
      nft: result.nft,
      nftId: new import_eth_wallet6.BigNumber(result.nftId),
      _event: event
    };
  }
  parseUnstakeEvent(receipt) {
    return this.parseEvents(receipt, "Unstake").map((e) => this.decodeUnstakeEvent(e));
  }
  decodeUnstakeEvent(event) {
    let result = event.data;
    return {
      who: result.who,
      tokenId: new import_eth_wallet6.BigNumber(result.tokenId),
      amount: new import_eth_wallet6.BigNumber(result.amount),
      _event: event
    };
  }
  async _attributes(param1) {
    let result = await this.call("_attributes", [import_eth_wallet6.Utils.toString(param1)]);
    return new import_eth_wallet6.BigNumber(result);
  }
  async _customAttributes(param1) {
    let result = await this.call("_customAttributes", [import_eth_wallet6.Utils.toString(param1)]);
    return new import_eth_wallet6.BigNumber(result);
  }
  async _stakesTransferAllowances(params) {
    let result = await this.call("_stakesTransferAllowances", [import_eth_wallet6.Utils.toString(params.param1), params.param2]);
    return new import_eth_wallet6.BigNumber(result);
  }
  async addStakes_send(params) {
    let result = await this.send("addStakes", [import_eth_wallet6.Utils.toString(params.tokenId), import_eth_wallet6.Utils.toString(params.amount)]);
    return result;
  }
  async addStakes_call(params) {
    let result = await this.call("addStakes", [import_eth_wallet6.Utils.toString(params.tokenId), import_eth_wallet6.Utils.toString(params.amount)]);
    return;
  }
  async addValidNFTs_send(nfts) {
    let result = await this.send("addValidNFTs", [nfts]);
    return result;
  }
  async addValidNFTs_call(nfts) {
    let result = await this.call("addValidNFTs", [nfts]);
    return;
  }
  async approve_send(params) {
    let result = await this.send("approve", [params.to, import_eth_wallet6.Utils.toString(params.tokenId)]);
    return result;
  }
  async approve_call(params) {
    let result = await this.call("approve", [params.to, import_eth_wallet6.Utils.toString(params.tokenId)]);
    return;
  }
  async approvedStaker(param1) {
    let result = await this.call("approvedStaker", [param1]);
    return result;
  }
  async balanceOf(owner) {
    let result = await this.call("balanceOf", [owner]);
    return new import_eth_wallet6.BigNumber(result);
  }
  async baseURI() {
    let result = await this.call("baseURI");
    return result;
  }
  async batchApprove_send(stakers) {
    let result = await this.send("batchApprove", [stakers]);
    return result;
  }
  async batchApprove_call(stakers) {
    let result = await this.call("batchApprove", [stakers]);
    return;
  }
  async cap() {
    let result = await this.call("cap");
    return new import_eth_wallet6.BigNumber(result);
  }
  async counter() {
    let result = await this.call("counter");
    return new import_eth_wallet6.BigNumber(result);
  }
  async creationDate(param1) {
    let result = await this.call("creationDate", [import_eth_wallet6.Utils.toString(param1)]);
    return new import_eth_wallet6.BigNumber(result);
  }
  async deny_send(user) {
    let result = await this.send("deny", [user]);
    return result;
  }
  async deny_call(user) {
    let result = await this.call("deny", [user]);
    return;
  }
  async destoryDate(param1) {
    let result = await this.call("destoryDate", [import_eth_wallet6.Utils.toString(param1)]);
    return new import_eth_wallet6.BigNumber(result);
  }
  async equipNFT_send(params) {
    let result = await this.send("equipNFT", [import_eth_wallet6.Utils.toString(params.trollId), params.nft, import_eth_wallet6.Utils.toString(params.nftId)]);
    return result;
  }
  async equipNFT_call(params) {
    let result = await this.call("equipNFT", [import_eth_wallet6.Utils.toString(params.trollId), params.nft, import_eth_wallet6.Utils.toString(params.nftId)]);
    return;
  }
  async extraStakes(param1) {
    let result = await this.call("extraStakes", [import_eth_wallet6.Utils.toString(param1)]);
    return new import_eth_wallet6.BigNumber(result);
  }
  async getApproved(tokenId) {
    let result = await this.call("getApproved", [import_eth_wallet6.Utils.toString(tokenId)]);
    return result;
  }
  async getAttributes1(params) {
    let result = await this.call("getAttributes1", [import_eth_wallet6.Utils.toString(params.tokenId), import_eth_wallet6.Utils.toString(params.base), import_eth_wallet6.Utils.toString(params.offset), import_eth_wallet6.Utils.toString(params.digits)]);
    return new import_eth_wallet6.BigNumber(result);
  }
  async getAttributes2(params) {
    let result = await this.call("getAttributes2", [import_eth_wallet6.Utils.toString(params.tokenId), import_eth_wallet6.Utils.toString(params.base), import_eth_wallet6.Utils.toString(params.digits)]);
    return result.map((e) => new import_eth_wallet6.BigNumber(e));
  }
  async isApprovedForAll(params) {
    let result = await this.call("isApprovedForAll", [params.owner, params.operator]);
    return result;
  }
  async isPermitted(param1) {
    let result = await this.call("isPermitted", [param1]);
    return result;
  }
  async isValidNFT(param1) {
    let result = await this.call("isValidNFT", [param1]);
    return result;
  }
  async lastStakeDate(param1) {
    let result = await this.call("lastStakeDate", [import_eth_wallet6.Utils.toString(param1)]);
    return new import_eth_wallet6.BigNumber(result);
  }
  async listValidNFTs(param1) {
    let result = await this.call("listValidNFTs", [import_eth_wallet6.Utils.toString(param1)]);
    return result;
  }
  async maximumValidNFTs() {
    let result = await this.call("maximumValidNFTs");
    return new import_eth_wallet6.BigNumber(result);
  }
  async minimumStake() {
    let result = await this.call("minimumStake");
    return new import_eth_wallet6.BigNumber(result);
  }
  async minted(param1) {
    let result = await this.call("minted", [param1]);
    return result;
  }
  async name() {
    let result = await this.call("name");
    return result;
  }
  async newOwner() {
    let result = await this.call("newOwner");
    return result;
  }
  async nftsEquipped(params) {
    let result = await this.call("nftsEquipped", [params.param1, import_eth_wallet6.Utils.toString(params.param2)]);
    return new import_eth_wallet6.BigNumber(result);
  }
  async owner() {
    let result = await this.call("owner");
    return result;
  }
  async ownerOf(tokenId) {
    let result = await this.call("ownerOf", [import_eth_wallet6.Utils.toString(tokenId)]);
    return result;
  }
  async permit_send(user) {
    let result = await this.send("permit", [user]);
    return result;
  }
  async permit_call(user) {
    let result = await this.call("permit", [user]);
    return;
  }
  async protocolFee() {
    let result = await this.call("protocolFee");
    return new import_eth_wallet6.BigNumber(result);
  }
  async protocolFeeBalance() {
    let result = await this.call("protocolFeeBalance");
    return new import_eth_wallet6.BigNumber(result);
  }
  async protocolFeeTo() {
    let result = await this.call("protocolFeeTo");
    return result;
  }
  async rawFulfillRandomness_send(params) {
    let result = await this.send("rawFulfillRandomness", [import_eth_wallet6.Utils.stringToBytes32(params.requestId), import_eth_wallet6.Utils.toString(params.randomness)]);
    return result;
  }
  async rawFulfillRandomness_call(params) {
    let result = await this.call("rawFulfillRandomness", [import_eth_wallet6.Utils.stringToBytes32(params.requestId), import_eth_wallet6.Utils.toString(params.randomness)]);
    return;
  }
  async requireApproval() {
    let result = await this.call("requireApproval");
    return result;
  }
  async safeTransferFrom_send(params) {
    let result = await this.send("safeTransferFrom", [params.from, params.to, import_eth_wallet6.Utils.toString(params.tokenId)]);
    return result;
  }
  async safeTransferFrom_call(params) {
    let result = await this.call("safeTransferFrom", [params.from, params.to, import_eth_wallet6.Utils.toString(params.tokenId)]);
    return;
  }
  async safeTransferFrom_1_send(params) {
    let result = await this.send("safeTransferFrom", [params.from, params.to, import_eth_wallet6.Utils.toString(params.tokenId), params.data]);
    return result;
  }
  async safeTransferFrom_1_call(params) {
    let result = await this.call("safeTransferFrom", [params.from, params.to, import_eth_wallet6.Utils.toString(params.tokenId), params.data]);
    return;
  }
  async setApprovalForAll_send(params) {
    let result = await this.send("setApprovalForAll", [params.operator, params.approved]);
    return result;
  }
  async setApprovalForAll_call(params) {
    let result = await this.call("setApprovalForAll", [params.operator, params.approved]);
    return;
  }
  async setApprovedStaker_send(params) {
    let result = await this.send("setApprovedStaker", [params.staker, params.allow]);
    return result;
  }
  async setApprovedStaker_call(params) {
    let result = await this.call("setApprovedStaker", [params.staker, params.allow]);
    return;
  }
  async setBaseURI_send(baseURI) {
    let result = await this.send("setBaseURI", [baseURI]);
    return result;
  }
  async setBaseURI_call(baseURI) {
    let result = await this.call("setBaseURI", [baseURI]);
    return;
  }
  async setCap_send(cap) {
    let result = await this.send("setCap", [import_eth_wallet6.Utils.toString(cap)]);
    return result;
  }
  async setCap_call(cap) {
    let result = await this.call("setCap", [import_eth_wallet6.Utils.toString(cap)]);
    return;
  }
  async setCustomAttribute_send(params) {
    let result = await this.send("setCustomAttribute", [import_eth_wallet6.Utils.toString(params.tokenId), import_eth_wallet6.Utils.toString(params.attribute)]);
    return result;
  }
  async setCustomAttribute_call(params) {
    let result = await this.call("setCustomAttribute", [import_eth_wallet6.Utils.toString(params.tokenId), import_eth_wallet6.Utils.toString(params.attribute)]);
    return;
  }
  async setMinimumStake_send(minimumStake) {
    let result = await this.send("setMinimumStake", [import_eth_wallet6.Utils.toString(minimumStake)]);
    return result;
  }
  async setMinimumStake_call(minimumStake) {
    let result = await this.call("setMinimumStake", [import_eth_wallet6.Utils.toString(minimumStake)]);
    return;
  }
  async setProtocolFee_send(params) {
    let result = await this.send("setProtocolFee", [import_eth_wallet6.Utils.toString(params.protocolFee), params.protocolFeeTo]);
    return result;
  }
  async setProtocolFee_call(params) {
    let result = await this.call("setProtocolFee", [import_eth_wallet6.Utils.toString(params.protocolFee), params.protocolFeeTo]);
    return;
  }
  async setVrfParams_send(params) {
    let result = await this.send("setVrfParams", [import_eth_wallet6.Utils.stringToBytes32(params.vrfKeyHash), import_eth_wallet6.Utils.toString(params.vrfFee)]);
    return result;
  }
  async setVrfParams_call(params) {
    let result = await this.call("setVrfParams", [import_eth_wallet6.Utils.stringToBytes32(params.vrfKeyHash), import_eth_wallet6.Utils.toString(params.vrfFee)]);
    return;
  }
  async stake_send(amount) {
    let result = await this.send("stake", [import_eth_wallet6.Utils.toString(amount)]);
    return result;
  }
  async stake_call(amount) {
    let result = await this.call("stake", [import_eth_wallet6.Utils.toString(amount)]);
    return new import_eth_wallet6.BigNumber(result);
  }
  async stakeToken() {
    let result = await this.call("stakeToken");
    return result;
  }
  async stakingBalance(param1) {
    let result = await this.call("stakingBalance", [import_eth_wallet6.Utils.toString(param1)]);
    return new import_eth_wallet6.BigNumber(result);
  }
  async supportsInterface(interfaceId) {
    let result = await this.call("supportsInterface", [interfaceId]);
    return result;
  }
  async symbol() {
    let result = await this.call("symbol");
    return result;
  }
  async takeOwnership_send() {
    let result = await this.send("takeOwnership");
    return result;
  }
  async takeOwnership_call() {
    let result = await this.call("takeOwnership");
    return;
  }
  async tokenByIndex(index) {
    let result = await this.call("tokenByIndex", [import_eth_wallet6.Utils.toString(index)]);
    return new import_eth_wallet6.BigNumber(result);
  }
  async tokenOfOwnerByIndex(params) {
    let result = await this.call("tokenOfOwnerByIndex", [params.owner, import_eth_wallet6.Utils.toString(params.index)]);
    return new import_eth_wallet6.BigNumber(result);
  }
  async tokenURI(tokenId) {
    let result = await this.call("tokenURI", [import_eth_wallet6.Utils.toString(tokenId)]);
    return result;
  }
  async totalSupply() {
    let result = await this.call("totalSupply");
    return new import_eth_wallet6.BigNumber(result);
  }
  async transferFrom_send(params) {
    let result = await this.send("transferFrom", [params.from, params.to, import_eth_wallet6.Utils.toString(params.tokenId)]);
    return result;
  }
  async transferFrom_call(params) {
    let result = await this.call("transferFrom", [params.from, params.to, import_eth_wallet6.Utils.toString(params.tokenId)]);
    return;
  }
  async transferOwnership_send(newOwner) {
    let result = await this.send("transferOwnership", [newOwner]);
    return result;
  }
  async transferOwnership_call(newOwner) {
    let result = await this.call("transferOwnership", [newOwner]);
    return;
  }
  async transferProtocolFee_send() {
    let result = await this.send("transferProtocolFee");
    return result;
  }
  async transferProtocolFee_call() {
    let result = await this.call("transferProtocolFee");
    return;
  }
  async trollOwnedNFTs(params) {
    let result = await this.call("trollOwnedNFTs", [import_eth_wallet6.Utils.toString(params.param1), params.param2]);
    return new import_eth_wallet6.BigNumber(result);
  }
  async unequipNFT_send(params) {
    let result = await this.send("unequipNFT", [import_eth_wallet6.Utils.toString(params.trollId), params.nft, import_eth_wallet6.Utils.toString(params.nftId)]);
    return result;
  }
  async unequipNFT_call(params) {
    let result = await this.call("unequipNFT", [import_eth_wallet6.Utils.toString(params.trollId), params.nft, import_eth_wallet6.Utils.toString(params.nftId)]);
    return;
  }
  async unstake_send(tokenId) {
    let result = await this.send("unstake", [import_eth_wallet6.Utils.toString(tokenId)]);
    return result;
  }
  async unstake_call(tokenId) {
    let result = await this.call("unstake", [import_eth_wallet6.Utils.toString(tokenId)]);
    return;
  }
  async validNFTsLength() {
    let result = await this.call("validNFTsLength");
    return new import_eth_wallet6.BigNumber(result);
  }
  async withdrawLink_send(amount) {
    let result = await this.send("withdrawLink", [import_eth_wallet6.Utils.toString(amount)]);
    return result;
  }
  async withdrawLink_call(amount) {
    let result = await this.call("withdrawLink", [import_eth_wallet6.Utils.toString(amount)]);
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
};

})
define(@openswapdex/troll-nft-sdk, (require, exports)=>{
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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

// bin/@openzeppelin/contracts/token/ERC721/ERC721.json
var require_ERC721 = __commonJS({
  "bin/@openzeppelin/contracts/token/ERC721/ERC721.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "string", name: "name_", type: "string" }, { internalType: "string", name: "symbol_", type: "string" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "owner", type: "address" }, { indexed: true, internalType: "address", name: "approved", type: "address" }, { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }], name: "Approval", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "owner", type: "address" }, { indexed: true, internalType: "address", name: "operator", type: "address" }, { indexed: false, internalType: "bool", name: "approved", type: "bool" }], name: "ApprovalForAll", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "from", type: "address" }, { indexed: true, internalType: "address", name: "to", type: "address" }, { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }], name: "Transfer", type: "event" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "approve", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }], name: "balanceOf", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "getApproved", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "address", name: "operator", type: "address" }], name: "isApprovedForAll", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "name", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "ownerOf", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "safeTransferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "bytes", name: "_data", type: "bytes" }], name: "safeTransferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "operator", type: "address" }, { internalType: "bool", name: "approved", type: "bool" }], name: "setApprovalForAll", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }], name: "supportsInterface", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "tokenURI", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "transferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }] };
  }
});

// bin/Authorization.json
var require_Authorization = __commonJS({
  "bin/Authorization.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "user", type: "address" }], name: "Authorize", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "user", type: "address" }], name: "Deauthorize", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "user", type: "address" }], name: "StartOwnershipTransfer", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "user", type: "address" }], name: "TransferOwnership", type: "event" }, { inputs: [{ internalType: "address", name: "user", type: "address" }], name: "deny", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "isPermitted", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "newOwner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "user", type: "address" }], name: "permit", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "takeOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "newOwner_", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }] };
  }
});

// bin/TrollNFT.json
var require_TrollNFT = __commonJS({
  "bin/TrollNFT.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "string", name: "_name", type: "string" }, { internalType: "string", name: "_symbol", type: "string" }, { internalType: "string", name: "__baseURI", type: "string" }, { internalType: "uint256", name: "_cap", type: "uint256" }, { internalType: "contract IERC20", name: "_stakeToken", type: "address" }, { internalType: "bool", name: "_requireApproval", type: "bool" }, { internalType: "uint256", name: "_minimumStake", type: "uint256" }, { internalType: "uint256", name: "_protocolFee", type: "uint256" }, { internalType: "address", name: "_protocolFeeTo", type: "address" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "owner", type: "address" }, { indexed: true, internalType: "address", name: "approved", type: "address" }, { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }], name: "Approval", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "owner", type: "address" }, { indexed: true, internalType: "address", name: "operator", type: "address" }, { indexed: false, internalType: "bool", name: "approved", type: "bool" }], name: "ApprovalForAll", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "staker", type: "address" }, { indexed: false, internalType: "bool", name: "allow", type: "bool" }], name: "ApprovedStaker", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }, { indexed: false, internalType: "uint256", name: "attribute", type: "uint256" }], name: "Attribute", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "user", type: "address" }], name: "Authorize", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "string", name: "baseURI", type: "string" }], name: "BaseURI", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "cap", type: "uint256" }], name: "Cap", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }, { indexed: false, internalType: "uint256", name: "attribute", type: "uint256" }], name: "CustomAttribute", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "user", type: "address" }], name: "Deauthorize", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "minimumStake", type: "uint256" }], name: "MinimumStake", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "protocolFee", type: "uint256" }, { indexed: false, internalType: "address", name: "protocolFeeTo", type: "address" }], name: "ProtocolFee", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "who", type: "address" }, { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }], name: "Stake", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "user", type: "address" }], name: "StartOwnershipTransfer", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "from", type: "address" }, { indexed: true, internalType: "address", name: "to", type: "address" }, { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }], name: "Transfer", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "user", type: "address" }], name: "TransferOwnership", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "who", type: "address" }, { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }], name: "Unstake", type: "event" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "_attributes", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "_customAttributes", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "approve", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "approvedStaker", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }], name: "balanceOf", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "baseURI", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address[]", name: "stakers", type: "address[]" }], name: "batchApprove", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "cap", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "counter", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "creationTime", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "user", type: "address" }], name: "deny", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "getApproved", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "uint256", name: "base", type: "uint256" }, { internalType: "uint256", name: "offset", type: "uint256" }, { internalType: "uint256", name: "digits", type: "uint256" }], name: "getAttributes1", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "uint256", name: "base", type: "uint256" }, { internalType: "uint256[]", name: "digits", type: "uint256[]" }], name: "getAttributes2", outputs: [{ internalType: "uint256[]", name: "params", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "address", name: "operator", type: "address" }], name: "isApprovedForAll", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "isPermitted", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "minimumStake", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "minted", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "name", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "newOwner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "ownerOf", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "user", type: "address" }], name: "permit", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "protocolFee", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "protocolFeeBalance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "protocolFeeTo", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "requireApproval", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "safeTransferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "bytes", name: "_data", type: "bytes" }], name: "safeTransferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "operator", type: "address" }, { internalType: "bool", name: "approved", type: "bool" }], name: "setApprovalForAll", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "staker", type: "address" }, { internalType: "bool", name: "allow", type: "bool" }], name: "setApprovedStaker", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "string", name: "__baseURI", type: "string" }], name: "setBaseURI", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_cap", type: "uint256" }], name: "setCap", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "uint256", name: "attribute", type: "uint256" }], name: "setCustomAttribute", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_minimumStake", type: "uint256" }], name: "setMinimumStake", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_protocolFee", type: "uint256" }, { internalType: "address", name: "_protocolFeeTo", type: "address" }], name: "setProtocolFee", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }], name: "stake", outputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "stakeToken", outputs: [{ internalType: "contract IERC20", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "stakingBalance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }], name: "supportsInterface", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "takeOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "index", type: "uint256" }], name: "tokenByIndex", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "uint256", name: "index", type: "uint256" }], name: "tokenOfOwnerByIndex", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "tokenURI", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "totalSupply", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "transferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "newOwner_", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "transferProtocolFee", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "unstake", outputs: [], stateMutability: "nonpayable", type: "function" }] };
  }
});

// bin/TrollNFTV2.json
var require_TrollNFTV2 = __commonJS({
  "bin/TrollNFTV2.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "string", name: "_name", type: "string" }, { internalType: "string", name: "_symbol", type: "string" }, { internalType: "string", name: "__baseURI", type: "string" }, { internalType: "uint256", name: "_cap", type: "uint256" }, { internalType: "contract IERC20", name: "_stakeToken", type: "address" }, { internalType: "bool", name: "_requireApproval", type: "bool" }, { internalType: "uint256", name: "_minimumStake", type: "uint256" }, { internalType: "uint256", name: "_protocolFee", type: "uint256" }, { internalType: "address", name: "_protocolFeeTo", type: "address" }, { components: [{ internalType: "contract IERC721[]", name: "listValidNFTs", type: "address[]" }, { internalType: "uint256", name: "maximumValidNFTs", type: "uint256" }], internalType: "struct TrollNFTV2.NFTInfo", name: "_nftInfo", type: "tuple" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amountAdded", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newAmount", type: "uint256" }], name: "AddStakes", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "contract IERC721", name: "nft", type: "address" }], name: "AddValidNFT", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "owner", type: "address" }, { indexed: true, internalType: "address", name: "approved", type: "address" }, { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }], name: "Approval", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "owner", type: "address" }, { indexed: true, internalType: "address", name: "operator", type: "address" }, { indexed: false, internalType: "bool", name: "approved", type: "bool" }], name: "ApprovalForAll", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "staker", type: "address" }, { indexed: false, internalType: "bool", name: "allow", type: "bool" }], name: "ApprovedStaker", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }, { indexed: false, internalType: "uint256", name: "attribute", type: "uint256" }], name: "Attribute", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "user", type: "address" }], name: "Authorize", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "string", name: "baseURI", type: "string" }], name: "BaseURI", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "cap", type: "uint256" }], name: "Cap", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }, { indexed: false, internalType: "uint256", name: "attribute", type: "uint256" }], name: "CustomAttribute", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "user", type: "address" }], name: "Deauthorize", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "uint256", name: "trollId", type: "uint256" }, { indexed: true, internalType: "contract IERC721", name: "nft", type: "address" }, { indexed: false, internalType: "uint256", name: "nftId", type: "uint256" }], name: "EquipNFT", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "minimumStake", type: "uint256" }], name: "MinimumStake", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "protocolFee", type: "uint256" }, { indexed: false, internalType: "address", name: "protocolFeeTo", type: "address" }], name: "ProtocolFee", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "who", type: "address" }, { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }], name: "Stake", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "uint256", name: "fromTokenId", type: "uint256" }, { indexed: true, internalType: "address", name: "spender", type: "address" }, { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }], name: "StakesApproval", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "uint256", name: "fromTokenId", type: "uint256" }, { indexed: true, internalType: "uint256", name: "toTokenId", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }], name: "StakesTransfer", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "user", type: "address" }], name: "StartOwnershipTransfer", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "from", type: "address" }, { indexed: true, internalType: "address", name: "to", type: "address" }, { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }], name: "Transfer", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "user", type: "address" }], name: "TransferOwnership", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "uint256", name: "trollId", type: "uint256" }, { indexed: true, internalType: "contract IERC721", name: "nft", type: "address" }, { indexed: false, internalType: "uint256", name: "nftId", type: "uint256" }], name: "UnequipNFT", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "who", type: "address" }, { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }], name: "Unstake", type: "event" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "_attributes", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "_customAttributes", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }, { internalType: "address", name: "", type: "address" }], name: "_stakesTransferAllowances", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "uint256", name: "amount", type: "uint256" }], name: "addStakes", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract IERC721[]", name: "nfts", type: "address[]" }], name: "addValidNFTs", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "approve", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "approvedStaker", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }], name: "balanceOf", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "baseURI", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address[]", name: "stakers", type: "address[]" }], name: "batchApprove", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "cap", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "counter", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "creationDate", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "user", type: "address" }], name: "deny", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "destoryDate", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "trollId", type: "uint256" }, { internalType: "contract IERC721", name: "nft", type: "address" }, { internalType: "uint256", name: "nftId", type: "uint256" }], name: "equipNFT", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "extraStakes", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "getApproved", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "uint256", name: "base", type: "uint256" }, { internalType: "uint256", name: "offset", type: "uint256" }, { internalType: "uint256", name: "digits", type: "uint256" }], name: "getAttributes1", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "uint256", name: "base", type: "uint256" }, { internalType: "uint256[]", name: "digits", type: "uint256[]" }], name: "getAttributes2", outputs: [{ internalType: "uint256[]", name: "params", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "address", name: "operator", type: "address" }], name: "isApprovedForAll", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "isPermitted", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "contract IERC721", name: "", type: "address" }], name: "isValidNFT", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "lastStakeDate", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "listValidNFTs", outputs: [{ internalType: "contract IERC721", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "maximumValidNFTs", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "minimumStake", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "minted", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "name", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "newOwner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "contract IERC721", name: "", type: "address" }, { internalType: "uint256", name: "", type: "uint256" }], name: "nftsEquipped", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "ownerOf", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "user", type: "address" }], name: "permit", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "protocolFee", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "protocolFeeBalance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "protocolFeeTo", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "requireApproval", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "safeTransferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "bytes", name: "_data", type: "bytes" }], name: "safeTransferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "operator", type: "address" }, { internalType: "bool", name: "approved", type: "bool" }], name: "setApprovalForAll", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "staker", type: "address" }, { internalType: "bool", name: "allow", type: "bool" }], name: "setApprovedStaker", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "string", name: "__baseURI", type: "string" }], name: "setBaseURI", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_cap", type: "uint256" }], name: "setCap", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "uint256", name: "attribute", type: "uint256" }], name: "setCustomAttribute", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_minimumStake", type: "uint256" }], name: "setMinimumStake", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_protocolFee", type: "uint256" }, { internalType: "address", name: "_protocolFeeTo", type: "address" }], name: "setProtocolFee", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }], name: "stake", outputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "stakeToken", outputs: [{ internalType: "contract IERC20", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "stakingBalance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }], name: "supportsInterface", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "takeOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "index", type: "uint256" }], name: "tokenByIndex", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "uint256", name: "index", type: "uint256" }], name: "tokenOfOwnerByIndex", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "tokenURI", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "totalSupply", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "transferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "newOwner_", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "transferProtocolFee", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }, { internalType: "contract IERC721", name: "", type: "address" }], name: "trollOwnedNFTs", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "trollId", type: "uint256" }, { internalType: "contract IERC721", name: "nft", type: "address" }, { internalType: "uint256", name: "nftId", type: "uint256" }], name: "unequipNFT", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "unstake", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "validNFTsLength", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }] };
  }
});

// bin/TrollNFT_VRF.json
var require_TrollNFT_VRF = __commonJS({
  "bin/TrollNFT_VRF.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "string", name: "_name", type: "string" }, { internalType: "string", name: "_symbol", type: "string" }, { internalType: "string", name: "__baseURI", type: "string" }, { internalType: "uint256", name: "_cap", type: "uint256" }, { internalType: "contract IERC20", name: "_stakeToken", type: "address" }, { internalType: "bool", name: "_requireApproval", type: "bool" }, { internalType: "uint256", name: "_minimumStake", type: "uint256" }, { internalType: "uint256", name: "_protocolFee", type: "uint256" }, { internalType: "address", name: "_protocolFeeTo", type: "address" }, { internalType: "address[2]", name: "vrfAddresses", type: "address[2]" }, { internalType: "bytes32[2]", name: "vrfParams", type: "bytes32[2]" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "owner", type: "address" }, { indexed: true, internalType: "address", name: "approved", type: "address" }, { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }], name: "Approval", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "owner", type: "address" }, { indexed: true, internalType: "address", name: "operator", type: "address" }, { indexed: false, internalType: "bool", name: "approved", type: "bool" }], name: "ApprovalForAll", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "staker", type: "address" }, { indexed: false, internalType: "bool", name: "allow", type: "bool" }], name: "ApprovedStaker", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }, { indexed: false, internalType: "uint256", name: "attribute", type: "uint256" }], name: "Attribute", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "user", type: "address" }], name: "Authorize", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "string", name: "baseURI", type: "string" }], name: "BaseURI", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "cap", type: "uint256" }], name: "Cap", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }, { indexed: false, internalType: "uint256", name: "attribute", type: "uint256" }], name: "CustomAttribute", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "user", type: "address" }], name: "Deauthorize", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "minimumStake", type: "uint256" }], name: "MinimumStake", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "protocolFee", type: "uint256" }, { indexed: false, internalType: "address", name: "protocolFeeTo", type: "address" }], name: "ProtocolFee", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "who", type: "address" }, { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }], name: "Stake", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "user", type: "address" }], name: "StartOwnershipTransfer", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "from", type: "address" }, { indexed: true, internalType: "address", name: "to", type: "address" }, { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }], name: "Transfer", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "user", type: "address" }], name: "TransferOwnership", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "who", type: "address" }, { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }], name: "Unstake", type: "event" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "_attributes", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "_customAttributes", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "approve", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "approvedStaker", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }], name: "balanceOf", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "baseURI", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address[]", name: "stakers", type: "address[]" }], name: "batchApprove", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "cap", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "counter", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "creationTime", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "user", type: "address" }], name: "deny", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "getApproved", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "uint256", name: "base", type: "uint256" }, { internalType: "uint256", name: "offset", type: "uint256" }, { internalType: "uint256", name: "digits", type: "uint256" }], name: "getAttributes1", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "uint256", name: "base", type: "uint256" }, { internalType: "uint256[]", name: "digits", type: "uint256[]" }], name: "getAttributes2", outputs: [{ internalType: "uint256[]", name: "params", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "address", name: "operator", type: "address" }], name: "isApprovedForAll", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "isPermitted", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "minimumStake", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "minted", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "name", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "newOwner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "ownerOf", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "user", type: "address" }], name: "permit", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "protocolFee", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "protocolFeeBalance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "protocolFeeTo", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bytes32", name: "requestId", type: "bytes32" }, { internalType: "uint256", name: "randomness", type: "uint256" }], name: "rawFulfillRandomness", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "requireApproval", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "safeTransferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "bytes", name: "_data", type: "bytes" }], name: "safeTransferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "operator", type: "address" }, { internalType: "bool", name: "approved", type: "bool" }], name: "setApprovalForAll", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "staker", type: "address" }, { internalType: "bool", name: "allow", type: "bool" }], name: "setApprovedStaker", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "string", name: "__baseURI", type: "string" }], name: "setBaseURI", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_cap", type: "uint256" }], name: "setCap", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "uint256", name: "attribute", type: "uint256" }], name: "setCustomAttribute", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_minimumStake", type: "uint256" }], name: "setMinimumStake", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_protocolFee", type: "uint256" }, { internalType: "address", name: "_protocolFeeTo", type: "address" }], name: "setProtocolFee", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bytes32", name: "_vrfKeyHash", type: "bytes32" }, { internalType: "uint256", name: "_vrfFee", type: "uint256" }], name: "setVrfParams", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }], name: "stake", outputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "stakeToken", outputs: [{ internalType: "contract IERC20", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "stakingBalance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }], name: "supportsInterface", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "takeOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "index", type: "uint256" }], name: "tokenByIndex", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "uint256", name: "index", type: "uint256" }], name: "tokenOfOwnerByIndex", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "tokenURI", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "totalSupply", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "transferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "newOwner_", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "transferProtocolFee", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "unstake", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }], name: "withdrawLink", outputs: [], stateMutability: "nonpayable", type: "function" }] };
  }
});

// bin/TrollNFT_VRFV2.json
var require_TrollNFT_VRFV2 = __commonJS({
  "bin/TrollNFT_VRFV2.json"(exports, module2) {
    module2.exports = { abi: [{ inputs: [{ internalType: "string", name: "_name", type: "string" }, { internalType: "string", name: "_symbol", type: "string" }, { internalType: "string", name: "__baseURI", type: "string" }, { internalType: "uint256", name: "_cap", type: "uint256" }, { internalType: "contract IERC20", name: "_stakeToken", type: "address" }, { internalType: "bool", name: "_requireApproval", type: "bool" }, { internalType: "uint256", name: "_minimumStake", type: "uint256" }, { internalType: "uint256", name: "_protocolFee", type: "uint256" }, { internalType: "address", name: "_protocolFeeTo", type: "address" }, { components: [{ internalType: "contract IERC721[]", name: "listValidNFTs", type: "address[]" }, { internalType: "uint256", name: "maximumValidNFTs", type: "uint256" }], internalType: "struct TrollNFTV2.NFTInfo", name: "_nftInfo", type: "tuple" }, { components: [{ internalType: "address[2]", name: "vrfAddresses", type: "address[2]" }, { internalType: "bytes32[2]", name: "vrfParams", type: "bytes32[2]" }], internalType: "struct TrollNFT_VRFV2.VRFInfo", name: "_vrfInfo", type: "tuple" }], stateMutability: "nonpayable", type: "constructor" }, { anonymous: false, inputs: [{ indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amountAdded", type: "uint256" }, { indexed: false, internalType: "uint256", name: "newAmount", type: "uint256" }], name: "AddStakes", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "contract IERC721", name: "nft", type: "address" }], name: "AddValidNFT", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "owner", type: "address" }, { indexed: true, internalType: "address", name: "approved", type: "address" }, { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }], name: "Approval", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "owner", type: "address" }, { indexed: true, internalType: "address", name: "operator", type: "address" }, { indexed: false, internalType: "bool", name: "approved", type: "bool" }], name: "ApprovalForAll", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "staker", type: "address" }, { indexed: false, internalType: "bool", name: "allow", type: "bool" }], name: "ApprovedStaker", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }, { indexed: false, internalType: "uint256", name: "attribute", type: "uint256" }], name: "Attribute", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "user", type: "address" }], name: "Authorize", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "string", name: "baseURI", type: "string" }], name: "BaseURI", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "cap", type: "uint256" }], name: "Cap", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }, { indexed: false, internalType: "uint256", name: "attribute", type: "uint256" }], name: "CustomAttribute", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "user", type: "address" }], name: "Deauthorize", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "uint256", name: "trollId", type: "uint256" }, { indexed: true, internalType: "contract IERC721", name: "nft", type: "address" }, { indexed: false, internalType: "uint256", name: "nftId", type: "uint256" }], name: "EquipNFT", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "minimumStake", type: "uint256" }], name: "MinimumStake", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "protocolFee", type: "uint256" }, { indexed: false, internalType: "address", name: "protocolFeeTo", type: "address" }], name: "ProtocolFee", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "who", type: "address" }, { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }], name: "Stake", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "uint256", name: "fromTokenId", type: "uint256" }, { indexed: true, internalType: "address", name: "spender", type: "address" }, { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }], name: "StakesApproval", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "uint256", name: "fromTokenId", type: "uint256" }, { indexed: true, internalType: "uint256", name: "toTokenId", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }], name: "StakesTransfer", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "user", type: "address" }], name: "StartOwnershipTransfer", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "from", type: "address" }, { indexed: true, internalType: "address", name: "to", type: "address" }, { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }], name: "Transfer", type: "event" }, { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "user", type: "address" }], name: "TransferOwnership", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "uint256", name: "trollId", type: "uint256" }, { indexed: true, internalType: "contract IERC721", name: "nft", type: "address" }, { indexed: false, internalType: "uint256", name: "nftId", type: "uint256" }], name: "UnequipNFT", type: "event" }, { anonymous: false, inputs: [{ indexed: true, internalType: "address", name: "who", type: "address" }, { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" }, { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }], name: "Unstake", type: "event" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "_attributes", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "_customAttributes", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }, { internalType: "address", name: "", type: "address" }], name: "_stakesTransferAllowances", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "uint256", name: "amount", type: "uint256" }], name: "addStakes", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "contract IERC721[]", name: "nfts", type: "address[]" }], name: "addValidNFTs", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "approve", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "approvedStaker", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }], name: "balanceOf", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "baseURI", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address[]", name: "stakers", type: "address[]" }], name: "batchApprove", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "cap", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "counter", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "creationDate", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "user", type: "address" }], name: "deny", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "destoryDate", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "trollId", type: "uint256" }, { internalType: "contract IERC721", name: "nft", type: "address" }, { internalType: "uint256", name: "nftId", type: "uint256" }], name: "equipNFT", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "extraStakes", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "getApproved", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "uint256", name: "base", type: "uint256" }, { internalType: "uint256", name: "offset", type: "uint256" }, { internalType: "uint256", name: "digits", type: "uint256" }], name: "getAttributes1", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "uint256", name: "base", type: "uint256" }, { internalType: "uint256[]", name: "digits", type: "uint256[]" }], name: "getAttributes2", outputs: [{ internalType: "uint256[]", name: "params", type: "uint256[]" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "address", name: "operator", type: "address" }], name: "isApprovedForAll", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "isPermitted", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "contract IERC721", name: "", type: "address" }], name: "isValidNFT", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "lastStakeDate", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "listValidNFTs", outputs: [{ internalType: "contract IERC721", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "maximumValidNFTs", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "minimumStake", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "", type: "address" }], name: "minted", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "name", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "newOwner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "contract IERC721", name: "", type: "address" }, { internalType: "uint256", name: "", type: "uint256" }], name: "nftsEquipped", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "ownerOf", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "user", type: "address" }], name: "permit", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "protocolFee", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "protocolFeeBalance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [], name: "protocolFeeTo", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bytes32", name: "requestId", type: "bytes32" }, { internalType: "uint256", name: "randomness", type: "uint256" }], name: "rawFulfillRandomness", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "requireApproval", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "safeTransferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "bytes", name: "_data", type: "bytes" }], name: "safeTransferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "operator", type: "address" }, { internalType: "bool", name: "approved", type: "bool" }], name: "setApprovalForAll", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "staker", type: "address" }, { internalType: "bool", name: "allow", type: "bool" }], name: "setApprovedStaker", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "string", name: "__baseURI", type: "string" }], name: "setBaseURI", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_cap", type: "uint256" }], name: "setCap", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "uint256", name: "attribute", type: "uint256" }], name: "setCustomAttribute", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_minimumStake", type: "uint256" }], name: "setMinimumStake", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "_protocolFee", type: "uint256" }, { internalType: "address", name: "_protocolFeeTo", type: "address" }], name: "setProtocolFee", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bytes32", name: "_vrfKeyHash", type: "bytes32" }, { internalType: "uint256", name: "_vrfFee", type: "uint256" }], name: "setVrfParams", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }], name: "stake", outputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "stakeToken", outputs: [{ internalType: "contract IERC20", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }], name: "stakingBalance", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }], name: "supportsInterface", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "takeOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "index", type: "uint256" }], name: "tokenByIndex", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "uint256", name: "index", type: "uint256" }], name: "tokenOfOwnerByIndex", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "tokenURI", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "totalSupply", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "transferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "newOwner_", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "transferProtocolFee", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "", type: "uint256" }, { internalType: "contract IERC721", name: "", type: "address" }], name: "trollOwnedNFTs", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "trollId", type: "uint256" }, { internalType: "contract IERC721", name: "nft", type: "address" }, { internalType: "uint256", name: "nftId", type: "uint256" }], name: "unequipNFT", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "unstake", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "validNFTsLength", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }], name: "withdrawLink", outputs: [], stateMutability: "nonpayable", type: "function" }] };
  }
});

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
var Bin = require_ERC721();
var ERC721 = class extends import_eth_wallet.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin.abi, Bin.bytecode);
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
      _event: event,
      owner: result.owner,
      approved: result.approved,
      tokenId: new import_eth_wallet.BigNumber(result.tokenId)
    };
  }
  parseApprovalForAllEvent(receipt) {
    return this.parseEvents(receipt, "ApprovalForAll").map((e) => this.decodeApprovalForAllEvent(e));
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
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      _event: event,
      from: result.from,
      to: result.to,
      tokenId: new import_eth_wallet.BigNumber(result.tokenId)
    };
  }
  async approve(params) {
    let result = await this.methods("approve", params.to, import_eth_wallet.Utils.toString(params.tokenId));
    return result;
  }
  async balanceOf(owner) {
    let result = await this.methods("balanceOf", owner);
    return new import_eth_wallet.BigNumber(result);
  }
  async getApproved(tokenId) {
    let result = await this.methods("getApproved", import_eth_wallet.Utils.toString(tokenId));
    return result;
  }
  async isApprovedForAll(params) {
    let result = await this.methods("isApprovedForAll", params.owner, params.operator);
    return result;
  }
  async name() {
    let result = await this.methods("name");
    return result;
  }
  async ownerOf(tokenId) {
    let result = await this.methods("ownerOf", import_eth_wallet.Utils.toString(tokenId));
    return result;
  }
  async safeTransferFrom(params) {
    let result = await this.methods("safeTransferFrom", params.from, params.to, import_eth_wallet.Utils.toString(params.tokenId));
    return result;
  }
  async safeTransferFrom_1(params) {
    let result = await this.methods("safeTransferFrom", params.from, params.to, import_eth_wallet.Utils.toString(params.tokenId), params.data);
    return result;
  }
  async setApprovalForAll(params) {
    let result = await this.methods("setApprovalForAll", params.operator, params.approved);
    return result;
  }
  async supportsInterface(interfaceId) {
    let result = await this.methods("supportsInterface", interfaceId);
    return result;
  }
  async symbol() {
    let result = await this.methods("symbol");
    return result;
  }
  async tokenURI(tokenId) {
    let result = await this.methods("tokenURI", import_eth_wallet.Utils.toString(tokenId));
    return result;
  }
  async transferFrom(params) {
    let result = await this.methods("transferFrom", params.from, params.to, import_eth_wallet.Utils.toString(params.tokenId));
    return result;
  }
};

// src/contracts/Authorization.ts
var import_eth_wallet2 = __toModule(require("@ijstech/eth-wallet"));
var Bin2 = require_Authorization();
var Authorization = class extends import_eth_wallet2.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin2.abi, Bin2.bytecode);
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
      _event: event,
      user: result.user
    };
  }
  parseDeauthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Deauthorize").map((e) => this.decodeDeauthorizeEvent(e));
  }
  decodeDeauthorizeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      user: result.user
    };
  }
  parseStartOwnershipTransferEvent(receipt) {
    return this.parseEvents(receipt, "StartOwnershipTransfer").map((e) => this.decodeStartOwnershipTransferEvent(e));
  }
  decodeStartOwnershipTransferEvent(event) {
    let result = event.data;
    return {
      _event: event,
      user: result.user
    };
  }
  parseTransferOwnershipEvent(receipt) {
    return this.parseEvents(receipt, "TransferOwnership").map((e) => this.decodeTransferOwnershipEvent(e));
  }
  decodeTransferOwnershipEvent(event) {
    let result = event.data;
    return {
      _event: event,
      user: result.user
    };
  }
  async deny(user) {
    let result = await this.methods("deny", user);
    return result;
  }
  async isPermitted(param1) {
    let result = await this.methods("isPermitted", param1);
    return result;
  }
  async newOwner() {
    let result = await this.methods("newOwner");
    return result;
  }
  async owner() {
    let result = await this.methods("owner");
    return result;
  }
  async permit(user) {
    let result = await this.methods("permit", user);
    return result;
  }
  async takeOwnership() {
    let result = await this.methods("takeOwnership");
    return result;
  }
  async transferOwnership(newOwner) {
    let result = await this.methods("transferOwnership", newOwner);
    return result;
  }
};

// src/contracts/TrollNFT.ts
var import_eth_wallet3 = __toModule(require("@ijstech/eth-wallet"));
var Bin3 = require_TrollNFT();
var TrollNFT = class extends import_eth_wallet3.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin3.abi, Bin3.bytecode);
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
      _event: event,
      owner: result.owner,
      approved: result.approved,
      tokenId: new import_eth_wallet3.BigNumber(result.tokenId)
    };
  }
  parseApprovalForAllEvent(receipt) {
    return this.parseEvents(receipt, "ApprovalForAll").map((e) => this.decodeApprovalForAllEvent(e));
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
    return this.parseEvents(receipt, "ApprovedStaker").map((e) => this.decodeApprovedStakerEvent(e));
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
    return this.parseEvents(receipt, "Attribute").map((e) => this.decodeAttributeEvent(e));
  }
  decodeAttributeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      tokenId: new import_eth_wallet3.BigNumber(result.tokenId),
      attribute: new import_eth_wallet3.BigNumber(result.attribute)
    };
  }
  parseAuthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Authorize").map((e) => this.decodeAuthorizeEvent(e));
  }
  decodeAuthorizeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      user: result.user
    };
  }
  parseBaseURIEvent(receipt) {
    return this.parseEvents(receipt, "BaseURI").map((e) => this.decodeBaseURIEvent(e));
  }
  decodeBaseURIEvent(event) {
    let result = event.data;
    return {
      _event: event,
      baseURI: result.baseURI
    };
  }
  parseCapEvent(receipt) {
    return this.parseEvents(receipt, "Cap").map((e) => this.decodeCapEvent(e));
  }
  decodeCapEvent(event) {
    let result = event.data;
    return {
      _event: event,
      cap: new import_eth_wallet3.BigNumber(result.cap)
    };
  }
  parseCustomAttributeEvent(receipt) {
    return this.parseEvents(receipt, "CustomAttribute").map((e) => this.decodeCustomAttributeEvent(e));
  }
  decodeCustomAttributeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      tokenId: new import_eth_wallet3.BigNumber(result.tokenId),
      attribute: new import_eth_wallet3.BigNumber(result.attribute)
    };
  }
  parseDeauthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Deauthorize").map((e) => this.decodeDeauthorizeEvent(e));
  }
  decodeDeauthorizeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      user: result.user
    };
  }
  parseMinimumStakeEvent(receipt) {
    return this.parseEvents(receipt, "MinimumStake").map((e) => this.decodeMinimumStakeEvent(e));
  }
  decodeMinimumStakeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      minimumStake: new import_eth_wallet3.BigNumber(result.minimumStake)
    };
  }
  parseProtocolFeeEvent(receipt) {
    return this.parseEvents(receipt, "ProtocolFee").map((e) => this.decodeProtocolFeeEvent(e));
  }
  decodeProtocolFeeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      protocolFee: new import_eth_wallet3.BigNumber(result.protocolFee),
      protocolFeeTo: result.protocolFeeTo
    };
  }
  parseStakeEvent(receipt) {
    return this.parseEvents(receipt, "Stake").map((e) => this.decodeStakeEvent(e));
  }
  decodeStakeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      who: result.who,
      tokenId: new import_eth_wallet3.BigNumber(result.tokenId),
      amount: new import_eth_wallet3.BigNumber(result.amount)
    };
  }
  parseStartOwnershipTransferEvent(receipt) {
    return this.parseEvents(receipt, "StartOwnershipTransfer").map((e) => this.decodeStartOwnershipTransferEvent(e));
  }
  decodeStartOwnershipTransferEvent(event) {
    let result = event.data;
    return {
      _event: event,
      user: result.user
    };
  }
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      _event: event,
      from: result.from,
      to: result.to,
      tokenId: new import_eth_wallet3.BigNumber(result.tokenId)
    };
  }
  parseTransferOwnershipEvent(receipt) {
    return this.parseEvents(receipt, "TransferOwnership").map((e) => this.decodeTransferOwnershipEvent(e));
  }
  decodeTransferOwnershipEvent(event) {
    let result = event.data;
    return {
      _event: event,
      user: result.user
    };
  }
  parseUnstakeEvent(receipt) {
    return this.parseEvents(receipt, "Unstake").map((e) => this.decodeUnstakeEvent(e));
  }
  decodeUnstakeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      who: result.who,
      tokenId: new import_eth_wallet3.BigNumber(result.tokenId),
      amount: new import_eth_wallet3.BigNumber(result.amount)
    };
  }
  async _attributes(param1) {
    let result = await this.methods("_attributes", import_eth_wallet3.Utils.toString(param1));
    return new import_eth_wallet3.BigNumber(result);
  }
  async _customAttributes(param1) {
    let result = await this.methods("_customAttributes", import_eth_wallet3.Utils.toString(param1));
    return new import_eth_wallet3.BigNumber(result);
  }
  async approve(params) {
    let result = await this.methods("approve", params.to, import_eth_wallet3.Utils.toString(params.tokenId));
    return result;
  }
  async approvedStaker(param1) {
    let result = await this.methods("approvedStaker", param1);
    return result;
  }
  async balanceOf(owner) {
    let result = await this.methods("balanceOf", owner);
    return new import_eth_wallet3.BigNumber(result);
  }
  async baseURI() {
    let result = await this.methods("baseURI");
    return result;
  }
  async batchApprove(stakers) {
    let result = await this.methods("batchApprove", stakers);
    return result;
  }
  async cap() {
    let result = await this.methods("cap");
    return new import_eth_wallet3.BigNumber(result);
  }
  async counter() {
    let result = await this.methods("counter");
    return new import_eth_wallet3.BigNumber(result);
  }
  async creationTime(param1) {
    let result = await this.methods("creationTime", import_eth_wallet3.Utils.toString(param1));
    return new import_eth_wallet3.BigNumber(result);
  }
  async deny(user) {
    let result = await this.methods("deny", user);
    return result;
  }
  async getApproved(tokenId) {
    let result = await this.methods("getApproved", import_eth_wallet3.Utils.toString(tokenId));
    return result;
  }
  async getAttributes1(params) {
    let result = await this.methods("getAttributes1", import_eth_wallet3.Utils.toString(params.tokenId), import_eth_wallet3.Utils.toString(params.base), import_eth_wallet3.Utils.toString(params.offset), import_eth_wallet3.Utils.toString(params.digits));
    return new import_eth_wallet3.BigNumber(result);
  }
  async getAttributes2(params) {
    let result = await this.methods("getAttributes2", import_eth_wallet3.Utils.toString(params.tokenId), import_eth_wallet3.Utils.toString(params.base), import_eth_wallet3.Utils.toString(params.digits));
    return result;
  }
  async isApprovedForAll(params) {
    let result = await this.methods("isApprovedForAll", params.owner, params.operator);
    return result;
  }
  async isPermitted(param1) {
    let result = await this.methods("isPermitted", param1);
    return result;
  }
  async minimumStake() {
    let result = await this.methods("minimumStake");
    return new import_eth_wallet3.BigNumber(result);
  }
  async minted(param1) {
    let result = await this.methods("minted", param1);
    return result;
  }
  async name() {
    let result = await this.methods("name");
    return result;
  }
  async newOwner() {
    let result = await this.methods("newOwner");
    return result;
  }
  async owner() {
    let result = await this.methods("owner");
    return result;
  }
  async ownerOf(tokenId) {
    let result = await this.methods("ownerOf", import_eth_wallet3.Utils.toString(tokenId));
    return result;
  }
  async permit(user) {
    let result = await this.methods("permit", user);
    return result;
  }
  async protocolFee() {
    let result = await this.methods("protocolFee");
    return new import_eth_wallet3.BigNumber(result);
  }
  async protocolFeeBalance() {
    let result = await this.methods("protocolFeeBalance");
    return new import_eth_wallet3.BigNumber(result);
  }
  async protocolFeeTo() {
    let result = await this.methods("protocolFeeTo");
    return result;
  }
  async requireApproval() {
    let result = await this.methods("requireApproval");
    return result;
  }
  async safeTransferFrom(params) {
    let result = await this.methods("safeTransferFrom", params.from, params.to, import_eth_wallet3.Utils.toString(params.tokenId));
    return result;
  }
  async safeTransferFrom_1(params) {
    let result = await this.methods("safeTransferFrom", params.from, params.to, import_eth_wallet3.Utils.toString(params.tokenId), params.data);
    return result;
  }
  async setApprovalForAll(params) {
    let result = await this.methods("setApprovalForAll", params.operator, params.approved);
    return result;
  }
  async setApprovedStaker(params) {
    let result = await this.methods("setApprovedStaker", params.staker, params.allow);
    return result;
  }
  async setBaseURI(baseURI) {
    let result = await this.methods("setBaseURI", baseURI);
    return result;
  }
  async setCap(cap) {
    let result = await this.methods("setCap", import_eth_wallet3.Utils.toString(cap));
    return result;
  }
  async setCustomAttribute(params) {
    let result = await this.methods("setCustomAttribute", import_eth_wallet3.Utils.toString(params.tokenId), import_eth_wallet3.Utils.toString(params.attribute));
    return result;
  }
  async setMinimumStake(minimumStake) {
    let result = await this.methods("setMinimumStake", import_eth_wallet3.Utils.toString(minimumStake));
    return result;
  }
  async setProtocolFee(params) {
    let result = await this.methods("setProtocolFee", import_eth_wallet3.Utils.toString(params.protocolFee), params.protocolFeeTo);
    return result;
  }
  async stake(amount) {
    let result = await this.methods("stake", import_eth_wallet3.Utils.toString(amount));
    return result;
  }
  async stakeToken() {
    let result = await this.methods("stakeToken");
    return result;
  }
  async stakingBalance(param1) {
    let result = await this.methods("stakingBalance", import_eth_wallet3.Utils.toString(param1));
    return new import_eth_wallet3.BigNumber(result);
  }
  async supportsInterface(interfaceId) {
    let result = await this.methods("supportsInterface", interfaceId);
    return result;
  }
  async symbol() {
    let result = await this.methods("symbol");
    return result;
  }
  async takeOwnership() {
    let result = await this.methods("takeOwnership");
    return result;
  }
  async tokenByIndex(index) {
    let result = await this.methods("tokenByIndex", import_eth_wallet3.Utils.toString(index));
    return new import_eth_wallet3.BigNumber(result);
  }
  async tokenOfOwnerByIndex(params) {
    let result = await this.methods("tokenOfOwnerByIndex", params.owner, import_eth_wallet3.Utils.toString(params.index));
    return new import_eth_wallet3.BigNumber(result);
  }
  async tokenURI(tokenId) {
    let result = await this.methods("tokenURI", import_eth_wallet3.Utils.toString(tokenId));
    return result;
  }
  async totalSupply() {
    let result = await this.methods("totalSupply");
    return new import_eth_wallet3.BigNumber(result);
  }
  async transferFrom(params) {
    let result = await this.methods("transferFrom", params.from, params.to, import_eth_wallet3.Utils.toString(params.tokenId));
    return result;
  }
  async transferOwnership(newOwner) {
    let result = await this.methods("transferOwnership", newOwner);
    return result;
  }
  async transferProtocolFee() {
    let result = await this.methods("transferProtocolFee");
    return result;
  }
  async unstake(tokenId) {
    let result = await this.methods("unstake", import_eth_wallet3.Utils.toString(tokenId));
    return result;
  }
};

// src/contracts/TrollNFTV2.ts
var import_eth_wallet4 = __toModule(require("@ijstech/eth-wallet"));
var Bin4 = require_TrollNFTV2();
var TrollNFTV2 = class extends import_eth_wallet4.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin4.abi, Bin4.bytecode);
  }
  deploy(params) {
    return this._deploy(params.name, params.symbol, params.baseURI, import_eth_wallet4.Utils.toString(params.cap), params.stakeToken, params.requireApproval, import_eth_wallet4.Utils.toString(params.minimumStake), import_eth_wallet4.Utils.toString(params.protocolFee), params.protocolFeeTo, import_eth_wallet4.Utils.toString(Object.values(params.nftInfo)));
  }
  parseAddStakesEvent(receipt) {
    return this.parseEvents(receipt, "AddStakes").map((e) => this.decodeAddStakesEvent(e));
  }
  decodeAddStakesEvent(event) {
    let result = event.data;
    return {
      _event: event,
      tokenId: new import_eth_wallet4.BigNumber(result.tokenId),
      amountAdded: new import_eth_wallet4.BigNumber(result.amountAdded),
      newAmount: new import_eth_wallet4.BigNumber(result.newAmount)
    };
  }
  parseAddValidNFTEvent(receipt) {
    return this.parseEvents(receipt, "AddValidNFT").map((e) => this.decodeAddValidNFTEvent(e));
  }
  decodeAddValidNFTEvent(event) {
    let result = event.data;
    return {
      _event: event,
      nft: result.nft
    };
  }
  parseApprovalEvent(receipt) {
    return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
  }
  decodeApprovalEvent(event) {
    let result = event.data;
    return {
      _event: event,
      owner: result.owner,
      approved: result.approved,
      tokenId: new import_eth_wallet4.BigNumber(result.tokenId)
    };
  }
  parseApprovalForAllEvent(receipt) {
    return this.parseEvents(receipt, "ApprovalForAll").map((e) => this.decodeApprovalForAllEvent(e));
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
    return this.parseEvents(receipt, "ApprovedStaker").map((e) => this.decodeApprovedStakerEvent(e));
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
    return this.parseEvents(receipt, "Attribute").map((e) => this.decodeAttributeEvent(e));
  }
  decodeAttributeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      tokenId: new import_eth_wallet4.BigNumber(result.tokenId),
      attribute: new import_eth_wallet4.BigNumber(result.attribute)
    };
  }
  parseAuthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Authorize").map((e) => this.decodeAuthorizeEvent(e));
  }
  decodeAuthorizeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      user: result.user
    };
  }
  parseBaseURIEvent(receipt) {
    return this.parseEvents(receipt, "BaseURI").map((e) => this.decodeBaseURIEvent(e));
  }
  decodeBaseURIEvent(event) {
    let result = event.data;
    return {
      _event: event,
      baseURI: result.baseURI
    };
  }
  parseCapEvent(receipt) {
    return this.parseEvents(receipt, "Cap").map((e) => this.decodeCapEvent(e));
  }
  decodeCapEvent(event) {
    let result = event.data;
    return {
      _event: event,
      cap: new import_eth_wallet4.BigNumber(result.cap)
    };
  }
  parseCustomAttributeEvent(receipt) {
    return this.parseEvents(receipt, "CustomAttribute").map((e) => this.decodeCustomAttributeEvent(e));
  }
  decodeCustomAttributeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      tokenId: new import_eth_wallet4.BigNumber(result.tokenId),
      attribute: new import_eth_wallet4.BigNumber(result.attribute)
    };
  }
  parseDeauthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Deauthorize").map((e) => this.decodeDeauthorizeEvent(e));
  }
  decodeDeauthorizeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      user: result.user
    };
  }
  parseEquipNFTEvent(receipt) {
    return this.parseEvents(receipt, "EquipNFT").map((e) => this.decodeEquipNFTEvent(e));
  }
  decodeEquipNFTEvent(event) {
    let result = event.data;
    return {
      _event: event,
      trollId: new import_eth_wallet4.BigNumber(result.trollId),
      nft: result.nft,
      nftId: new import_eth_wallet4.BigNumber(result.nftId)
    };
  }
  parseMinimumStakeEvent(receipt) {
    return this.parseEvents(receipt, "MinimumStake").map((e) => this.decodeMinimumStakeEvent(e));
  }
  decodeMinimumStakeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      minimumStake: new import_eth_wallet4.BigNumber(result.minimumStake)
    };
  }
  parseProtocolFeeEvent(receipt) {
    return this.parseEvents(receipt, "ProtocolFee").map((e) => this.decodeProtocolFeeEvent(e));
  }
  decodeProtocolFeeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      protocolFee: new import_eth_wallet4.BigNumber(result.protocolFee),
      protocolFeeTo: result.protocolFeeTo
    };
  }
  parseStakeEvent(receipt) {
    return this.parseEvents(receipt, "Stake").map((e) => this.decodeStakeEvent(e));
  }
  decodeStakeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      who: result.who,
      tokenId: new import_eth_wallet4.BigNumber(result.tokenId),
      amount: new import_eth_wallet4.BigNumber(result.amount)
    };
  }
  parseStakesApprovalEvent(receipt) {
    return this.parseEvents(receipt, "StakesApproval").map((e) => this.decodeStakesApprovalEvent(e));
  }
  decodeStakesApprovalEvent(event) {
    let result = event.data;
    return {
      _event: event,
      fromTokenId: new import_eth_wallet4.BigNumber(result.fromTokenId),
      spender: result.spender,
      amount: new import_eth_wallet4.BigNumber(result.amount)
    };
  }
  parseStakesTransferEvent(receipt) {
    return this.parseEvents(receipt, "StakesTransfer").map((e) => this.decodeStakesTransferEvent(e));
  }
  decodeStakesTransferEvent(event) {
    let result = event.data;
    return {
      _event: event,
      fromTokenId: new import_eth_wallet4.BigNumber(result.fromTokenId),
      toTokenId: new import_eth_wallet4.BigNumber(result.toTokenId),
      amount: new import_eth_wallet4.BigNumber(result.amount)
    };
  }
  parseStartOwnershipTransferEvent(receipt) {
    return this.parseEvents(receipt, "StartOwnershipTransfer").map((e) => this.decodeStartOwnershipTransferEvent(e));
  }
  decodeStartOwnershipTransferEvent(event) {
    let result = event.data;
    return {
      _event: event,
      user: result.user
    };
  }
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      _event: event,
      from: result.from,
      to: result.to,
      tokenId: new import_eth_wallet4.BigNumber(result.tokenId)
    };
  }
  parseTransferOwnershipEvent(receipt) {
    return this.parseEvents(receipt, "TransferOwnership").map((e) => this.decodeTransferOwnershipEvent(e));
  }
  decodeTransferOwnershipEvent(event) {
    let result = event.data;
    return {
      _event: event,
      user: result.user
    };
  }
  parseUnequipNFTEvent(receipt) {
    return this.parseEvents(receipt, "UnequipNFT").map((e) => this.decodeUnequipNFTEvent(e));
  }
  decodeUnequipNFTEvent(event) {
    let result = event.data;
    return {
      _event: event,
      trollId: new import_eth_wallet4.BigNumber(result.trollId),
      nft: result.nft,
      nftId: new import_eth_wallet4.BigNumber(result.nftId)
    };
  }
  parseUnstakeEvent(receipt) {
    return this.parseEvents(receipt, "Unstake").map((e) => this.decodeUnstakeEvent(e));
  }
  decodeUnstakeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      who: result.who,
      tokenId: new import_eth_wallet4.BigNumber(result.tokenId),
      amount: new import_eth_wallet4.BigNumber(result.amount)
    };
  }
  async _attributes(param1) {
    let result = await this.methods("_attributes", import_eth_wallet4.Utils.toString(param1));
    return new import_eth_wallet4.BigNumber(result);
  }
  async _customAttributes(param1) {
    let result = await this.methods("_customAttributes", import_eth_wallet4.Utils.toString(param1));
    return new import_eth_wallet4.BigNumber(result);
  }
  async _stakesTransferAllowances(params) {
    let result = await this.methods("_stakesTransferAllowances", import_eth_wallet4.Utils.toString(params.param1), params.param2);
    return new import_eth_wallet4.BigNumber(result);
  }
  async addStakes(params) {
    let result = await this.methods("addStakes", import_eth_wallet4.Utils.toString(params.tokenId), import_eth_wallet4.Utils.toString(params.amount));
    return result;
  }
  async addValidNFTs(nfts) {
    let result = await this.methods("addValidNFTs", nfts);
    return result;
  }
  async approve(params) {
    let result = await this.methods("approve", params.to, import_eth_wallet4.Utils.toString(params.tokenId));
    return result;
  }
  async approvedStaker(param1) {
    let result = await this.methods("approvedStaker", param1);
    return result;
  }
  async balanceOf(owner) {
    let result = await this.methods("balanceOf", owner);
    return new import_eth_wallet4.BigNumber(result);
  }
  async baseURI() {
    let result = await this.methods("baseURI");
    return result;
  }
  async batchApprove(stakers) {
    let result = await this.methods("batchApprove", stakers);
    return result;
  }
  async cap() {
    let result = await this.methods("cap");
    return new import_eth_wallet4.BigNumber(result);
  }
  async counter() {
    let result = await this.methods("counter");
    return new import_eth_wallet4.BigNumber(result);
  }
  async creationDate(param1) {
    let result = await this.methods("creationDate", import_eth_wallet4.Utils.toString(param1));
    return new import_eth_wallet4.BigNumber(result);
  }
  async deny(user) {
    let result = await this.methods("deny", user);
    return result;
  }
  async destoryDate(param1) {
    let result = await this.methods("destoryDate", import_eth_wallet4.Utils.toString(param1));
    return new import_eth_wallet4.BigNumber(result);
  }
  async equipNFT(params) {
    let result = await this.methods("equipNFT", import_eth_wallet4.Utils.toString(params.trollId), params.nft, import_eth_wallet4.Utils.toString(params.nftId));
    return result;
  }
  async extraStakes(param1) {
    let result = await this.methods("extraStakes", import_eth_wallet4.Utils.toString(param1));
    return new import_eth_wallet4.BigNumber(result);
  }
  async getApproved(tokenId) {
    let result = await this.methods("getApproved", import_eth_wallet4.Utils.toString(tokenId));
    return result;
  }
  async getAttributes1(params) {
    let result = await this.methods("getAttributes1", import_eth_wallet4.Utils.toString(params.tokenId), import_eth_wallet4.Utils.toString(params.base), import_eth_wallet4.Utils.toString(params.offset), import_eth_wallet4.Utils.toString(params.digits));
    return new import_eth_wallet4.BigNumber(result);
  }
  async getAttributes2(params) {
    let result = await this.methods("getAttributes2", import_eth_wallet4.Utils.toString(params.tokenId), import_eth_wallet4.Utils.toString(params.base), import_eth_wallet4.Utils.toString(params.digits));
    return result;
  }
  async isApprovedForAll(params) {
    let result = await this.methods("isApprovedForAll", params.owner, params.operator);
    return result;
  }
  async isPermitted(param1) {
    let result = await this.methods("isPermitted", param1);
    return result;
  }
  async isValidNFT(param1) {
    let result = await this.methods("isValidNFT", param1);
    return result;
  }
  async lastStakeDate(param1) {
    let result = await this.methods("lastStakeDate", import_eth_wallet4.Utils.toString(param1));
    return new import_eth_wallet4.BigNumber(result);
  }
  async listValidNFTs(param1) {
    let result = await this.methods("listValidNFTs", import_eth_wallet4.Utils.toString(param1));
    return result;
  }
  async maximumValidNFTs() {
    let result = await this.methods("maximumValidNFTs");
    return new import_eth_wallet4.BigNumber(result);
  }
  async minimumStake() {
    let result = await this.methods("minimumStake");
    return new import_eth_wallet4.BigNumber(result);
  }
  async minted(param1) {
    let result = await this.methods("minted", param1);
    return result;
  }
  async name() {
    let result = await this.methods("name");
    return result;
  }
  async newOwner() {
    let result = await this.methods("newOwner");
    return result;
  }
  async nftsEquipped(params) {
    let result = await this.methods("nftsEquipped", params.param1, import_eth_wallet4.Utils.toString(params.param2));
    return new import_eth_wallet4.BigNumber(result);
  }
  async owner() {
    let result = await this.methods("owner");
    return result;
  }
  async ownerOf(tokenId) {
    let result = await this.methods("ownerOf", import_eth_wallet4.Utils.toString(tokenId));
    return result;
  }
  async permit(user) {
    let result = await this.methods("permit", user);
    return result;
  }
  async protocolFee() {
    let result = await this.methods("protocolFee");
    return new import_eth_wallet4.BigNumber(result);
  }
  async protocolFeeBalance() {
    let result = await this.methods("protocolFeeBalance");
    return new import_eth_wallet4.BigNumber(result);
  }
  async protocolFeeTo() {
    let result = await this.methods("protocolFeeTo");
    return result;
  }
  async requireApproval() {
    let result = await this.methods("requireApproval");
    return result;
  }
  async safeTransferFrom(params) {
    let result = await this.methods("safeTransferFrom", params.from, params.to, import_eth_wallet4.Utils.toString(params.tokenId));
    return result;
  }
  async safeTransferFrom_1(params) {
    let result = await this.methods("safeTransferFrom", params.from, params.to, import_eth_wallet4.Utils.toString(params.tokenId), params.data);
    return result;
  }
  async setApprovalForAll(params) {
    let result = await this.methods("setApprovalForAll", params.operator, params.approved);
    return result;
  }
  async setApprovedStaker(params) {
    let result = await this.methods("setApprovedStaker", params.staker, params.allow);
    return result;
  }
  async setBaseURI(baseURI) {
    let result = await this.methods("setBaseURI", baseURI);
    return result;
  }
  async setCap(cap) {
    let result = await this.methods("setCap", import_eth_wallet4.Utils.toString(cap));
    return result;
  }
  async setCustomAttribute(params) {
    let result = await this.methods("setCustomAttribute", import_eth_wallet4.Utils.toString(params.tokenId), import_eth_wallet4.Utils.toString(params.attribute));
    return result;
  }
  async setMinimumStake(minimumStake) {
    let result = await this.methods("setMinimumStake", import_eth_wallet4.Utils.toString(minimumStake));
    return result;
  }
  async setProtocolFee(params) {
    let result = await this.methods("setProtocolFee", import_eth_wallet4.Utils.toString(params.protocolFee), params.protocolFeeTo);
    return result;
  }
  async stake(amount) {
    let result = await this.methods("stake", import_eth_wallet4.Utils.toString(amount));
    return result;
  }
  async stakeToken() {
    let result = await this.methods("stakeToken");
    return result;
  }
  async stakingBalance(param1) {
    let result = await this.methods("stakingBalance", import_eth_wallet4.Utils.toString(param1));
    return new import_eth_wallet4.BigNumber(result);
  }
  async supportsInterface(interfaceId) {
    let result = await this.methods("supportsInterface", interfaceId);
    return result;
  }
  async symbol() {
    let result = await this.methods("symbol");
    return result;
  }
  async takeOwnership() {
    let result = await this.methods("takeOwnership");
    return result;
  }
  async tokenByIndex(index) {
    let result = await this.methods("tokenByIndex", import_eth_wallet4.Utils.toString(index));
    return new import_eth_wallet4.BigNumber(result);
  }
  async tokenOfOwnerByIndex(params) {
    let result = await this.methods("tokenOfOwnerByIndex", params.owner, import_eth_wallet4.Utils.toString(params.index));
    return new import_eth_wallet4.BigNumber(result);
  }
  async tokenURI(tokenId) {
    let result = await this.methods("tokenURI", import_eth_wallet4.Utils.toString(tokenId));
    return result;
  }
  async totalSupply() {
    let result = await this.methods("totalSupply");
    return new import_eth_wallet4.BigNumber(result);
  }
  async transferFrom(params) {
    let result = await this.methods("transferFrom", params.from, params.to, import_eth_wallet4.Utils.toString(params.tokenId));
    return result;
  }
  async transferOwnership(newOwner) {
    let result = await this.methods("transferOwnership", newOwner);
    return result;
  }
  async transferProtocolFee() {
    let result = await this.methods("transferProtocolFee");
    return result;
  }
  async trollOwnedNFTs(params) {
    let result = await this.methods("trollOwnedNFTs", import_eth_wallet4.Utils.toString(params.param1), params.param2);
    return new import_eth_wallet4.BigNumber(result);
  }
  async unequipNFT(params) {
    let result = await this.methods("unequipNFT", import_eth_wallet4.Utils.toString(params.trollId), params.nft, import_eth_wallet4.Utils.toString(params.nftId));
    return result;
  }
  async unstake(tokenId) {
    let result = await this.methods("unstake", import_eth_wallet4.Utils.toString(tokenId));
    return result;
  }
  async validNFTsLength() {
    let result = await this.methods("validNFTsLength");
    return new import_eth_wallet4.BigNumber(result);
  }
};

// src/contracts/TrollNFT_VRF.ts
var import_eth_wallet5 = __toModule(require("@ijstech/eth-wallet"));
var Bin5 = require_TrollNFT_VRF();
var TrollNFT_VRF = class extends import_eth_wallet5.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin5.abi, Bin5.bytecode);
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
      _event: event,
      owner: result.owner,
      approved: result.approved,
      tokenId: new import_eth_wallet5.BigNumber(result.tokenId)
    };
  }
  parseApprovalForAllEvent(receipt) {
    return this.parseEvents(receipt, "ApprovalForAll").map((e) => this.decodeApprovalForAllEvent(e));
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
    return this.parseEvents(receipt, "ApprovedStaker").map((e) => this.decodeApprovedStakerEvent(e));
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
    return this.parseEvents(receipt, "Attribute").map((e) => this.decodeAttributeEvent(e));
  }
  decodeAttributeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      tokenId: new import_eth_wallet5.BigNumber(result.tokenId),
      attribute: new import_eth_wallet5.BigNumber(result.attribute)
    };
  }
  parseAuthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Authorize").map((e) => this.decodeAuthorizeEvent(e));
  }
  decodeAuthorizeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      user: result.user
    };
  }
  parseBaseURIEvent(receipt) {
    return this.parseEvents(receipt, "BaseURI").map((e) => this.decodeBaseURIEvent(e));
  }
  decodeBaseURIEvent(event) {
    let result = event.data;
    return {
      _event: event,
      baseURI: result.baseURI
    };
  }
  parseCapEvent(receipt) {
    return this.parseEvents(receipt, "Cap").map((e) => this.decodeCapEvent(e));
  }
  decodeCapEvent(event) {
    let result = event.data;
    return {
      _event: event,
      cap: new import_eth_wallet5.BigNumber(result.cap)
    };
  }
  parseCustomAttributeEvent(receipt) {
    return this.parseEvents(receipt, "CustomAttribute").map((e) => this.decodeCustomAttributeEvent(e));
  }
  decodeCustomAttributeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      tokenId: new import_eth_wallet5.BigNumber(result.tokenId),
      attribute: new import_eth_wallet5.BigNumber(result.attribute)
    };
  }
  parseDeauthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Deauthorize").map((e) => this.decodeDeauthorizeEvent(e));
  }
  decodeDeauthorizeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      user: result.user
    };
  }
  parseMinimumStakeEvent(receipt) {
    return this.parseEvents(receipt, "MinimumStake").map((e) => this.decodeMinimumStakeEvent(e));
  }
  decodeMinimumStakeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      minimumStake: new import_eth_wallet5.BigNumber(result.minimumStake)
    };
  }
  parseProtocolFeeEvent(receipt) {
    return this.parseEvents(receipt, "ProtocolFee").map((e) => this.decodeProtocolFeeEvent(e));
  }
  decodeProtocolFeeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      protocolFee: new import_eth_wallet5.BigNumber(result.protocolFee),
      protocolFeeTo: result.protocolFeeTo
    };
  }
  parseStakeEvent(receipt) {
    return this.parseEvents(receipt, "Stake").map((e) => this.decodeStakeEvent(e));
  }
  decodeStakeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      who: result.who,
      tokenId: new import_eth_wallet5.BigNumber(result.tokenId),
      amount: new import_eth_wallet5.BigNumber(result.amount)
    };
  }
  parseStartOwnershipTransferEvent(receipt) {
    return this.parseEvents(receipt, "StartOwnershipTransfer").map((e) => this.decodeStartOwnershipTransferEvent(e));
  }
  decodeStartOwnershipTransferEvent(event) {
    let result = event.data;
    return {
      _event: event,
      user: result.user
    };
  }
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      _event: event,
      from: result.from,
      to: result.to,
      tokenId: new import_eth_wallet5.BigNumber(result.tokenId)
    };
  }
  parseTransferOwnershipEvent(receipt) {
    return this.parseEvents(receipt, "TransferOwnership").map((e) => this.decodeTransferOwnershipEvent(e));
  }
  decodeTransferOwnershipEvent(event) {
    let result = event.data;
    return {
      _event: event,
      user: result.user
    };
  }
  parseUnstakeEvent(receipt) {
    return this.parseEvents(receipt, "Unstake").map((e) => this.decodeUnstakeEvent(e));
  }
  decodeUnstakeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      who: result.who,
      tokenId: new import_eth_wallet5.BigNumber(result.tokenId),
      amount: new import_eth_wallet5.BigNumber(result.amount)
    };
  }
  async _attributes(param1) {
    let result = await this.methods("_attributes", import_eth_wallet5.Utils.toString(param1));
    return new import_eth_wallet5.BigNumber(result);
  }
  async _customAttributes(param1) {
    let result = await this.methods("_customAttributes", import_eth_wallet5.Utils.toString(param1));
    return new import_eth_wallet5.BigNumber(result);
  }
  async approve(params) {
    let result = await this.methods("approve", params.to, import_eth_wallet5.Utils.toString(params.tokenId));
    return result;
  }
  async approvedStaker(param1) {
    let result = await this.methods("approvedStaker", param1);
    return result;
  }
  async balanceOf(owner) {
    let result = await this.methods("balanceOf", owner);
    return new import_eth_wallet5.BigNumber(result);
  }
  async baseURI() {
    let result = await this.methods("baseURI");
    return result;
  }
  async batchApprove(stakers) {
    let result = await this.methods("batchApprove", stakers);
    return result;
  }
  async cap() {
    let result = await this.methods("cap");
    return new import_eth_wallet5.BigNumber(result);
  }
  async counter() {
    let result = await this.methods("counter");
    return new import_eth_wallet5.BigNumber(result);
  }
  async creationTime(param1) {
    let result = await this.methods("creationTime", import_eth_wallet5.Utils.toString(param1));
    return new import_eth_wallet5.BigNumber(result);
  }
  async deny(user) {
    let result = await this.methods("deny", user);
    return result;
  }
  async getApproved(tokenId) {
    let result = await this.methods("getApproved", import_eth_wallet5.Utils.toString(tokenId));
    return result;
  }
  async getAttributes1(params) {
    let result = await this.methods("getAttributes1", import_eth_wallet5.Utils.toString(params.tokenId), import_eth_wallet5.Utils.toString(params.base), import_eth_wallet5.Utils.toString(params.offset), import_eth_wallet5.Utils.toString(params.digits));
    return new import_eth_wallet5.BigNumber(result);
  }
  async getAttributes2(params) {
    let result = await this.methods("getAttributes2", import_eth_wallet5.Utils.toString(params.tokenId), import_eth_wallet5.Utils.toString(params.base), import_eth_wallet5.Utils.toString(params.digits));
    return result;
  }
  async isApprovedForAll(params) {
    let result = await this.methods("isApprovedForAll", params.owner, params.operator);
    return result;
  }
  async isPermitted(param1) {
    let result = await this.methods("isPermitted", param1);
    return result;
  }
  async minimumStake() {
    let result = await this.methods("minimumStake");
    return new import_eth_wallet5.BigNumber(result);
  }
  async minted(param1) {
    let result = await this.methods("minted", param1);
    return result;
  }
  async name() {
    let result = await this.methods("name");
    return result;
  }
  async newOwner() {
    let result = await this.methods("newOwner");
    return result;
  }
  async owner() {
    let result = await this.methods("owner");
    return result;
  }
  async ownerOf(tokenId) {
    let result = await this.methods("ownerOf", import_eth_wallet5.Utils.toString(tokenId));
    return result;
  }
  async permit(user) {
    let result = await this.methods("permit", user);
    return result;
  }
  async protocolFee() {
    let result = await this.methods("protocolFee");
    return new import_eth_wallet5.BigNumber(result);
  }
  async protocolFeeBalance() {
    let result = await this.methods("protocolFeeBalance");
    return new import_eth_wallet5.BigNumber(result);
  }
  async protocolFeeTo() {
    let result = await this.methods("protocolFeeTo");
    return result;
  }
  async rawFulfillRandomness(params) {
    let result = await this.methods("rawFulfillRandomness", import_eth_wallet5.Utils.stringToBytes32(params.requestId), import_eth_wallet5.Utils.toString(params.randomness));
    return result;
  }
  async requireApproval() {
    let result = await this.methods("requireApproval");
    return result;
  }
  async safeTransferFrom(params) {
    let result = await this.methods("safeTransferFrom", params.from, params.to, import_eth_wallet5.Utils.toString(params.tokenId));
    return result;
  }
  async safeTransferFrom_1(params) {
    let result = await this.methods("safeTransferFrom", params.from, params.to, import_eth_wallet5.Utils.toString(params.tokenId), params.data);
    return result;
  }
  async setApprovalForAll(params) {
    let result = await this.methods("setApprovalForAll", params.operator, params.approved);
    return result;
  }
  async setApprovedStaker(params) {
    let result = await this.methods("setApprovedStaker", params.staker, params.allow);
    return result;
  }
  async setBaseURI(baseURI) {
    let result = await this.methods("setBaseURI", baseURI);
    return result;
  }
  async setCap(cap) {
    let result = await this.methods("setCap", import_eth_wallet5.Utils.toString(cap));
    return result;
  }
  async setCustomAttribute(params) {
    let result = await this.methods("setCustomAttribute", import_eth_wallet5.Utils.toString(params.tokenId), import_eth_wallet5.Utils.toString(params.attribute));
    return result;
  }
  async setMinimumStake(minimumStake) {
    let result = await this.methods("setMinimumStake", import_eth_wallet5.Utils.toString(minimumStake));
    return result;
  }
  async setProtocolFee(params) {
    let result = await this.methods("setProtocolFee", import_eth_wallet5.Utils.toString(params.protocolFee), params.protocolFeeTo);
    return result;
  }
  async setVrfParams(params) {
    let result = await this.methods("setVrfParams", import_eth_wallet5.Utils.stringToBytes32(params.vrfKeyHash), import_eth_wallet5.Utils.toString(params.vrfFee));
    return result;
  }
  async stake(amount) {
    let result = await this.methods("stake", import_eth_wallet5.Utils.toString(amount));
    return result;
  }
  async stakeToken() {
    let result = await this.methods("stakeToken");
    return result;
  }
  async stakingBalance(param1) {
    let result = await this.methods("stakingBalance", import_eth_wallet5.Utils.toString(param1));
    return new import_eth_wallet5.BigNumber(result);
  }
  async supportsInterface(interfaceId) {
    let result = await this.methods("supportsInterface", interfaceId);
    return result;
  }
  async symbol() {
    let result = await this.methods("symbol");
    return result;
  }
  async takeOwnership() {
    let result = await this.methods("takeOwnership");
    return result;
  }
  async tokenByIndex(index) {
    let result = await this.methods("tokenByIndex", import_eth_wallet5.Utils.toString(index));
    return new import_eth_wallet5.BigNumber(result);
  }
  async tokenOfOwnerByIndex(params) {
    let result = await this.methods("tokenOfOwnerByIndex", params.owner, import_eth_wallet5.Utils.toString(params.index));
    return new import_eth_wallet5.BigNumber(result);
  }
  async tokenURI(tokenId) {
    let result = await this.methods("tokenURI", import_eth_wallet5.Utils.toString(tokenId));
    return result;
  }
  async totalSupply() {
    let result = await this.methods("totalSupply");
    return new import_eth_wallet5.BigNumber(result);
  }
  async transferFrom(params) {
    let result = await this.methods("transferFrom", params.from, params.to, import_eth_wallet5.Utils.toString(params.tokenId));
    return result;
  }
  async transferOwnership(newOwner) {
    let result = await this.methods("transferOwnership", newOwner);
    return result;
  }
  async transferProtocolFee() {
    let result = await this.methods("transferProtocolFee");
    return result;
  }
  async unstake(tokenId) {
    let result = await this.methods("unstake", import_eth_wallet5.Utils.toString(tokenId));
    return result;
  }
  async withdrawLink(amount) {
    let result = await this.methods("withdrawLink", import_eth_wallet5.Utils.toString(amount));
    return result;
  }
};

// src/contracts/TrollNFT_VRFV2.ts
var import_eth_wallet6 = __toModule(require("@ijstech/eth-wallet"));
var Bin6 = require_TrollNFT_VRFV2();
var TrollNFT_VRFV2 = class extends import_eth_wallet6.Contract {
  constructor(wallet, address) {
    super(wallet, address, Bin6.abi, Bin6.bytecode);
  }
  deploy(params) {
    return this._deploy(params.name, params.symbol, params.baseURI, import_eth_wallet6.Utils.toString(params.cap), params.stakeToken, params.requireApproval, import_eth_wallet6.Utils.toString(params.minimumStake), import_eth_wallet6.Utils.toString(params.protocolFee), params.protocolFeeTo, import_eth_wallet6.Utils.toString(Object.values(params.nftInfo)), import_eth_wallet6.Utils.toString(Object.values(params.vrfInfo)));
  }
  parseAddStakesEvent(receipt) {
    return this.parseEvents(receipt, "AddStakes").map((e) => this.decodeAddStakesEvent(e));
  }
  decodeAddStakesEvent(event) {
    let result = event.data;
    return {
      _event: event,
      tokenId: new import_eth_wallet6.BigNumber(result.tokenId),
      amountAdded: new import_eth_wallet6.BigNumber(result.amountAdded),
      newAmount: new import_eth_wallet6.BigNumber(result.newAmount)
    };
  }
  parseAddValidNFTEvent(receipt) {
    return this.parseEvents(receipt, "AddValidNFT").map((e) => this.decodeAddValidNFTEvent(e));
  }
  decodeAddValidNFTEvent(event) {
    let result = event.data;
    return {
      _event: event,
      nft: result.nft
    };
  }
  parseApprovalEvent(receipt) {
    return this.parseEvents(receipt, "Approval").map((e) => this.decodeApprovalEvent(e));
  }
  decodeApprovalEvent(event) {
    let result = event.data;
    return {
      _event: event,
      owner: result.owner,
      approved: result.approved,
      tokenId: new import_eth_wallet6.BigNumber(result.tokenId)
    };
  }
  parseApprovalForAllEvent(receipt) {
    return this.parseEvents(receipt, "ApprovalForAll").map((e) => this.decodeApprovalForAllEvent(e));
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
    return this.parseEvents(receipt, "ApprovedStaker").map((e) => this.decodeApprovedStakerEvent(e));
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
    return this.parseEvents(receipt, "Attribute").map((e) => this.decodeAttributeEvent(e));
  }
  decodeAttributeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      tokenId: new import_eth_wallet6.BigNumber(result.tokenId),
      attribute: new import_eth_wallet6.BigNumber(result.attribute)
    };
  }
  parseAuthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Authorize").map((e) => this.decodeAuthorizeEvent(e));
  }
  decodeAuthorizeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      user: result.user
    };
  }
  parseBaseURIEvent(receipt) {
    return this.parseEvents(receipt, "BaseURI").map((e) => this.decodeBaseURIEvent(e));
  }
  decodeBaseURIEvent(event) {
    let result = event.data;
    return {
      _event: event,
      baseURI: result.baseURI
    };
  }
  parseCapEvent(receipt) {
    return this.parseEvents(receipt, "Cap").map((e) => this.decodeCapEvent(e));
  }
  decodeCapEvent(event) {
    let result = event.data;
    return {
      _event: event,
      cap: new import_eth_wallet6.BigNumber(result.cap)
    };
  }
  parseCustomAttributeEvent(receipt) {
    return this.parseEvents(receipt, "CustomAttribute").map((e) => this.decodeCustomAttributeEvent(e));
  }
  decodeCustomAttributeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      tokenId: new import_eth_wallet6.BigNumber(result.tokenId),
      attribute: new import_eth_wallet6.BigNumber(result.attribute)
    };
  }
  parseDeauthorizeEvent(receipt) {
    return this.parseEvents(receipt, "Deauthorize").map((e) => this.decodeDeauthorizeEvent(e));
  }
  decodeDeauthorizeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      user: result.user
    };
  }
  parseEquipNFTEvent(receipt) {
    return this.parseEvents(receipt, "EquipNFT").map((e) => this.decodeEquipNFTEvent(e));
  }
  decodeEquipNFTEvent(event) {
    let result = event.data;
    return {
      _event: event,
      trollId: new import_eth_wallet6.BigNumber(result.trollId),
      nft: result.nft,
      nftId: new import_eth_wallet6.BigNumber(result.nftId)
    };
  }
  parseMinimumStakeEvent(receipt) {
    return this.parseEvents(receipt, "MinimumStake").map((e) => this.decodeMinimumStakeEvent(e));
  }
  decodeMinimumStakeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      minimumStake: new import_eth_wallet6.BigNumber(result.minimumStake)
    };
  }
  parseProtocolFeeEvent(receipt) {
    return this.parseEvents(receipt, "ProtocolFee").map((e) => this.decodeProtocolFeeEvent(e));
  }
  decodeProtocolFeeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      protocolFee: new import_eth_wallet6.BigNumber(result.protocolFee),
      protocolFeeTo: result.protocolFeeTo
    };
  }
  parseStakeEvent(receipt) {
    return this.parseEvents(receipt, "Stake").map((e) => this.decodeStakeEvent(e));
  }
  decodeStakeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      who: result.who,
      tokenId: new import_eth_wallet6.BigNumber(result.tokenId),
      amount: new import_eth_wallet6.BigNumber(result.amount)
    };
  }
  parseStakesApprovalEvent(receipt) {
    return this.parseEvents(receipt, "StakesApproval").map((e) => this.decodeStakesApprovalEvent(e));
  }
  decodeStakesApprovalEvent(event) {
    let result = event.data;
    return {
      _event: event,
      fromTokenId: new import_eth_wallet6.BigNumber(result.fromTokenId),
      spender: result.spender,
      amount: new import_eth_wallet6.BigNumber(result.amount)
    };
  }
  parseStakesTransferEvent(receipt) {
    return this.parseEvents(receipt, "StakesTransfer").map((e) => this.decodeStakesTransferEvent(e));
  }
  decodeStakesTransferEvent(event) {
    let result = event.data;
    return {
      _event: event,
      fromTokenId: new import_eth_wallet6.BigNumber(result.fromTokenId),
      toTokenId: new import_eth_wallet6.BigNumber(result.toTokenId),
      amount: new import_eth_wallet6.BigNumber(result.amount)
    };
  }
  parseStartOwnershipTransferEvent(receipt) {
    return this.parseEvents(receipt, "StartOwnershipTransfer").map((e) => this.decodeStartOwnershipTransferEvent(e));
  }
  decodeStartOwnershipTransferEvent(event) {
    let result = event.data;
    return {
      _event: event,
      user: result.user
    };
  }
  parseTransferEvent(receipt) {
    return this.parseEvents(receipt, "Transfer").map((e) => this.decodeTransferEvent(e));
  }
  decodeTransferEvent(event) {
    let result = event.data;
    return {
      _event: event,
      from: result.from,
      to: result.to,
      tokenId: new import_eth_wallet6.BigNumber(result.tokenId)
    };
  }
  parseTransferOwnershipEvent(receipt) {
    return this.parseEvents(receipt, "TransferOwnership").map((e) => this.decodeTransferOwnershipEvent(e));
  }
  decodeTransferOwnershipEvent(event) {
    let result = event.data;
    return {
      _event: event,
      user: result.user
    };
  }
  parseUnequipNFTEvent(receipt) {
    return this.parseEvents(receipt, "UnequipNFT").map((e) => this.decodeUnequipNFTEvent(e));
  }
  decodeUnequipNFTEvent(event) {
    let result = event.data;
    return {
      _event: event,
      trollId: new import_eth_wallet6.BigNumber(result.trollId),
      nft: result.nft,
      nftId: new import_eth_wallet6.BigNumber(result.nftId)
    };
  }
  parseUnstakeEvent(receipt) {
    return this.parseEvents(receipt, "Unstake").map((e) => this.decodeUnstakeEvent(e));
  }
  decodeUnstakeEvent(event) {
    let result = event.data;
    return {
      _event: event,
      who: result.who,
      tokenId: new import_eth_wallet6.BigNumber(result.tokenId),
      amount: new import_eth_wallet6.BigNumber(result.amount)
    };
  }
  async _attributes(param1) {
    let result = await this.methods("_attributes", import_eth_wallet6.Utils.toString(param1));
    return new import_eth_wallet6.BigNumber(result);
  }
  async _customAttributes(param1) {
    let result = await this.methods("_customAttributes", import_eth_wallet6.Utils.toString(param1));
    return new import_eth_wallet6.BigNumber(result);
  }
  async _stakesTransferAllowances(params) {
    let result = await this.methods("_stakesTransferAllowances", import_eth_wallet6.Utils.toString(params.param1), params.param2);
    return new import_eth_wallet6.BigNumber(result);
  }
  async addStakes(params) {
    let result = await this.methods("addStakes", import_eth_wallet6.Utils.toString(params.tokenId), import_eth_wallet6.Utils.toString(params.amount));
    return result;
  }
  async addValidNFTs(nfts) {
    let result = await this.methods("addValidNFTs", nfts);
    return result;
  }
  async approve(params) {
    let result = await this.methods("approve", params.to, import_eth_wallet6.Utils.toString(params.tokenId));
    return result;
  }
  async approvedStaker(param1) {
    let result = await this.methods("approvedStaker", param1);
    return result;
  }
  async balanceOf(owner) {
    let result = await this.methods("balanceOf", owner);
    return new import_eth_wallet6.BigNumber(result);
  }
  async baseURI() {
    let result = await this.methods("baseURI");
    return result;
  }
  async batchApprove(stakers) {
    let result = await this.methods("batchApprove", stakers);
    return result;
  }
  async cap() {
    let result = await this.methods("cap");
    return new import_eth_wallet6.BigNumber(result);
  }
  async counter() {
    let result = await this.methods("counter");
    return new import_eth_wallet6.BigNumber(result);
  }
  async creationDate(param1) {
    let result = await this.methods("creationDate", import_eth_wallet6.Utils.toString(param1));
    return new import_eth_wallet6.BigNumber(result);
  }
  async deny(user) {
    let result = await this.methods("deny", user);
    return result;
  }
  async destoryDate(param1) {
    let result = await this.methods("destoryDate", import_eth_wallet6.Utils.toString(param1));
    return new import_eth_wallet6.BigNumber(result);
  }
  async equipNFT(params) {
    let result = await this.methods("equipNFT", import_eth_wallet6.Utils.toString(params.trollId), params.nft, import_eth_wallet6.Utils.toString(params.nftId));
    return result;
  }
  async extraStakes(param1) {
    let result = await this.methods("extraStakes", import_eth_wallet6.Utils.toString(param1));
    return new import_eth_wallet6.BigNumber(result);
  }
  async getApproved(tokenId) {
    let result = await this.methods("getApproved", import_eth_wallet6.Utils.toString(tokenId));
    return result;
  }
  async getAttributes1(params) {
    let result = await this.methods("getAttributes1", import_eth_wallet6.Utils.toString(params.tokenId), import_eth_wallet6.Utils.toString(params.base), import_eth_wallet6.Utils.toString(params.offset), import_eth_wallet6.Utils.toString(params.digits));
    return new import_eth_wallet6.BigNumber(result);
  }
  async getAttributes2(params) {
    let result = await this.methods("getAttributes2", import_eth_wallet6.Utils.toString(params.tokenId), import_eth_wallet6.Utils.toString(params.base), import_eth_wallet6.Utils.toString(params.digits));
    return result;
  }
  async isApprovedForAll(params) {
    let result = await this.methods("isApprovedForAll", params.owner, params.operator);
    return result;
  }
  async isPermitted(param1) {
    let result = await this.methods("isPermitted", param1);
    return result;
  }
  async isValidNFT(param1) {
    let result = await this.methods("isValidNFT", param1);
    return result;
  }
  async lastStakeDate(param1) {
    let result = await this.methods("lastStakeDate", import_eth_wallet6.Utils.toString(param1));
    return new import_eth_wallet6.BigNumber(result);
  }
  async listValidNFTs(param1) {
    let result = await this.methods("listValidNFTs", import_eth_wallet6.Utils.toString(param1));
    return result;
  }
  async maximumValidNFTs() {
    let result = await this.methods("maximumValidNFTs");
    return new import_eth_wallet6.BigNumber(result);
  }
  async minimumStake() {
    let result = await this.methods("minimumStake");
    return new import_eth_wallet6.BigNumber(result);
  }
  async minted(param1) {
    let result = await this.methods("minted", param1);
    return result;
  }
  async name() {
    let result = await this.methods("name");
    return result;
  }
  async newOwner() {
    let result = await this.methods("newOwner");
    return result;
  }
  async nftsEquipped(params) {
    let result = await this.methods("nftsEquipped", params.param1, import_eth_wallet6.Utils.toString(params.param2));
    return new import_eth_wallet6.BigNumber(result);
  }
  async owner() {
    let result = await this.methods("owner");
    return result;
  }
  async ownerOf(tokenId) {
    let result = await this.methods("ownerOf", import_eth_wallet6.Utils.toString(tokenId));
    return result;
  }
  async permit(user) {
    let result = await this.methods("permit", user);
    return result;
  }
  async protocolFee() {
    let result = await this.methods("protocolFee");
    return new import_eth_wallet6.BigNumber(result);
  }
  async protocolFeeBalance() {
    let result = await this.methods("protocolFeeBalance");
    return new import_eth_wallet6.BigNumber(result);
  }
  async protocolFeeTo() {
    let result = await this.methods("protocolFeeTo");
    return result;
  }
  async rawFulfillRandomness(params) {
    let result = await this.methods("rawFulfillRandomness", import_eth_wallet6.Utils.stringToBytes32(params.requestId), import_eth_wallet6.Utils.toString(params.randomness));
    return result;
  }
  async requireApproval() {
    let result = await this.methods("requireApproval");
    return result;
  }
  async safeTransferFrom(params) {
    let result = await this.methods("safeTransferFrom", params.from, params.to, import_eth_wallet6.Utils.toString(params.tokenId));
    return result;
  }
  async safeTransferFrom_1(params) {
    let result = await this.methods("safeTransferFrom", params.from, params.to, import_eth_wallet6.Utils.toString(params.tokenId), params.data);
    return result;
  }
  async setApprovalForAll(params) {
    let result = await this.methods("setApprovalForAll", params.operator, params.approved);
    return result;
  }
  async setApprovedStaker(params) {
    let result = await this.methods("setApprovedStaker", params.staker, params.allow);
    return result;
  }
  async setBaseURI(baseURI) {
    let result = await this.methods("setBaseURI", baseURI);
    return result;
  }
  async setCap(cap) {
    let result = await this.methods("setCap", import_eth_wallet6.Utils.toString(cap));
    return result;
  }
  async setCustomAttribute(params) {
    let result = await this.methods("setCustomAttribute", import_eth_wallet6.Utils.toString(params.tokenId), import_eth_wallet6.Utils.toString(params.attribute));
    return result;
  }
  async setMinimumStake(minimumStake) {
    let result = await this.methods("setMinimumStake", import_eth_wallet6.Utils.toString(minimumStake));
    return result;
  }
  async setProtocolFee(params) {
    let result = await this.methods("setProtocolFee", import_eth_wallet6.Utils.toString(params.protocolFee), params.protocolFeeTo);
    return result;
  }
  async setVrfParams(params) {
    let result = await this.methods("setVrfParams", import_eth_wallet6.Utils.stringToBytes32(params.vrfKeyHash), import_eth_wallet6.Utils.toString(params.vrfFee));
    return result;
  }
  async stake(amount) {
    let result = await this.methods("stake", import_eth_wallet6.Utils.toString(amount));
    return result;
  }
  async stakeToken() {
    let result = await this.methods("stakeToken");
    return result;
  }
  async stakingBalance(param1) {
    let result = await this.methods("stakingBalance", import_eth_wallet6.Utils.toString(param1));
    return new import_eth_wallet6.BigNumber(result);
  }
  async supportsInterface(interfaceId) {
    let result = await this.methods("supportsInterface", interfaceId);
    return result;
  }
  async symbol() {
    let result = await this.methods("symbol");
    return result;
  }
  async takeOwnership() {
    let result = await this.methods("takeOwnership");
    return result;
  }
  async tokenByIndex(index) {
    let result = await this.methods("tokenByIndex", import_eth_wallet6.Utils.toString(index));
    return new import_eth_wallet6.BigNumber(result);
  }
  async tokenOfOwnerByIndex(params) {
    let result = await this.methods("tokenOfOwnerByIndex", params.owner, import_eth_wallet6.Utils.toString(params.index));
    return new import_eth_wallet6.BigNumber(result);
  }
  async tokenURI(tokenId) {
    let result = await this.methods("tokenURI", import_eth_wallet6.Utils.toString(tokenId));
    return result;
  }
  async totalSupply() {
    let result = await this.methods("totalSupply");
    return new import_eth_wallet6.BigNumber(result);
  }
  async transferFrom(params) {
    let result = await this.methods("transferFrom", params.from, params.to, import_eth_wallet6.Utils.toString(params.tokenId));
    return result;
  }
  async transferOwnership(newOwner) {
    let result = await this.methods("transferOwnership", newOwner);
    return result;
  }
  async transferProtocolFee() {
    let result = await this.methods("transferProtocolFee");
    return result;
  }
  async trollOwnedNFTs(params) {
    let result = await this.methods("trollOwnedNFTs", import_eth_wallet6.Utils.toString(params.param1), params.param2);
    return new import_eth_wallet6.BigNumber(result);
  }
  async unequipNFT(params) {
    let result = await this.methods("unequipNFT", import_eth_wallet6.Utils.toString(params.trollId), params.nft, import_eth_wallet6.Utils.toString(params.nftId));
    return result;
  }
  async unstake(tokenId) {
    let result = await this.methods("unstake", import_eth_wallet6.Utils.toString(tokenId));
    return result;
  }
  async validNFTsLength() {
    let result = await this.methods("validNFTsLength");
    return new import_eth_wallet6.BigNumber(result);
  }
  async withdrawLink(amount) {
    let result = await this.methods("withdrawLink", import_eth_wallet6.Utils.toString(amount));
    return result;
  }
};

})
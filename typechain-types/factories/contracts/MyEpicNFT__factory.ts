/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { MyEpicNFT, MyEpicNFTInterface } from "../../contracts/MyEpicNFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "makeAnEpicNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526040518061016001604052806101308152602001620037316101309139600890805190602001906200003892919062000204565b503480156200004657600080fd5b506040518060400160405280600a81526020017f68757576756f744e4654000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f48565400000000000000000000000000000000000000000000000000000000008152508160009080519060200190620000cb92919062000204565b508060019080519060200190620000e492919062000204565b505050620001326040518060400160405280601e81526020017f54686973206973206d79204e465420636f6e74726163742e20576f61682100008152506200013860201b62000b351760201c565b620003e1565b620001d8816040516024016200014f9190620002f5565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620001db60201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805462000212906200036b565b90600052602060002090601f01602090048101928262000236576000855562000282565b82601f106200025157805160ff191683800117855562000282565b8280016001018555821562000282579182015b828111156200028157825182559160200191906001019062000264565b5b50905062000291919062000295565b5090565b5b80821115620002b057600081600090555060010162000296565b5090565b6000620002c18262000319565b620002cd818562000324565b9350620002df81856020860162000335565b620002ea81620003d0565b840191505092915050565b60006020820190508181036000830152620003118184620002b4565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156200035557808201518184015260208101905062000338565b8381111562000365576000848401525b50505050565b600060028204905060018216806200038457607f821691505b602082108114156200039b576200039a620003a1565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b61334080620003f16000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063b88d4fde11610066578063b88d4fde1461025b578063c87b56dd14610277578063de9d132f146102a7578063e985e9c5146102b1576100ea565b806370a08231146101f157806395d89b4114610221578063a22cb4651461023f576100ea565b8063095ea7b3116100c8578063095ea7b31461016d57806323b872dd1461018957806342842e0e146101a55780636352211e146101c1576100ea565b806301ffc9a7146100ef57806306fdde031461011f578063081812fc1461013d575b600080fd5b61010960048036038101906101049190611f8e565b6102e1565b60405161011691906125a7565b60405180910390f35b6101276103c3565b60405161013491906125c2565b60405180910390f35b61015760048036038101906101529190611fe0565b610455565b6040516101649190612540565b60405180910390f35b61018760048036038101906101829190611f52565b6104da565b005b6101a3600480360381019061019e9190611e4c565b6105f2565b005b6101bf60048036038101906101ba9190611e4c565b610652565b005b6101db60048036038101906101d69190611fe0565b610672565b6040516101e89190612540565b60405180910390f35b61020b60048036038101906102069190611de7565b610724565b6040516102189190612822565b60405180910390f35b6102296107dc565b60405161023691906125c2565b60405180910390f35b61025960048036038101906102549190611f16565b61086e565b005b61027560048036038101906102709190611e9b565b610884565b005b610291600480360381019061028c9190611fe0565b6108e6565b60405161029e91906125c2565b60405180910390f35b6102af610a38565b005b6102cb60048036038101906102c69190611e10565b610aa1565b6040516102d891906125a7565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103ac57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103bc57506103bb82610bce565b5b9050919050565b6060600080546103d290612ab6565b80601f01602080910402602001604051908101604052809291908181526020018280546103fe90612ab6565b801561044b5780601f106104205761010080835404028352916020019161044b565b820191906000526020600020905b81548152906001019060200180831161042e57829003601f168201915b5050505050905090565b600061046082610c38565b61049f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610496906127a2565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104e582610672565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610556576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054d906127e2565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610575610ca4565b73ffffffffffffffffffffffffffffffffffffffff1614806105a457506105a38161059e610ca4565b610aa1565b5b6105e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105da906126e2565b60405180910390fd5b6105ed8383610cac565b505050565b6106036105fd610ca4565b82610d65565b610642576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063990612802565b60405180910390fd5b61064d838383610e43565b505050565b61066d83838360405180602001604052806000815250610884565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561071b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071290612722565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610795576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078c90612702565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546107eb90612ab6565b80601f016020809104026020016040519081016040528092919081815260200182805461081790612ab6565b80156108645780601f1061083957610100808354040283529160200191610864565b820191906000526020600020905b81548152906001019060200180831161084757829003601f168201915b5050505050905090565b610880610879610ca4565b83836110aa565b5050565b61089561088f610ca4565b83610d65565b6108d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108cb90612802565b60405180910390fd5b6108e084848484611217565b50505050565b60606108f182610c38565b610930576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092790612782565b60405180910390fd5b600060066000848152602001908152602001600020805461095090612ab6565b80601f016020809104026020016040519081016040528092919081815260200182805461097c90612ab6565b80156109c95780601f1061099e576101008083540402835291602001916109c9565b820191906000526020600020905b8154815290600101906020018083116109ac57829003601f168201915b5050505050905060006109da611273565b90506000815114156109f0578192505050610a33565b600082511115610a25578082604051602001610a0d92919061247d565b60405160208183030381529060405292505050610a33565b610a2e8461128a565b925050505b919050565b6000610a446007611331565b9050610a50338261133f565b6000610a5b8261135d565b9050610a6681610b35565b610a7082826113f1565b610a7a6007611465565b610a9d6040518060600160405280602581526020016132a660259139833361147b565b5050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610bcb81604051602401610b4991906125c2565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061151a565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610d1f83610672565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610d7082610c38565b610daf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da6906126c2565b60405180910390fd5b6000610dba83610672565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610dfc5750610dfb8185610aa1565b5b80610e3a57508373ffffffffffffffffffffffffffffffffffffffff16610e2284610455565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610e6382610672565b73ffffffffffffffffffffffffffffffffffffffff1614610eb9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb090612642565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2090612682565b60405180910390fd5b610f34838383611543565b610f3f600082610cac565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f8f91906129cc565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610fe691906128eb565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46110a5838383611548565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611119576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611110906126a2565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161120a91906125a7565b60405180910390a3505050565b611222848484610e43565b61122e8484848461154d565b61126d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161126490612622565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061129582610c38565b6112d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112cb906127c2565b60405180910390fd5b60006112de611273565b905060008151116112fe5760405180602001604052806000815250611329565b80611308846116e4565b60405160200161131992919061247d565b6040516020818303038152906040525b915050919050565b600081600001549050919050565b611359828260405180602001604052806000815250611891565b5050565b60606000611394600861136f856116e4565b6040516020016113809291906124a1565b6040516020818303038152906040526118ec565b905060006113c0826040516020016113ac9190612513565b6040516020818303038152906040526118ec565b90506000816040516020016113d591906124f1565b6040516020818303038152906040529050809350505050919050565b6113fa82610c38565b611439576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161143090612742565b60405180910390fd5b80600660008481526020019081526020016000209080519060200190611460929190611c73565b505050565b6001816000016000828254019250508190555050565b611515838383604051602401611493939291906125e4565b6040516020818303038152906040527fe3849f79000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061151a565b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b505050565b505050565b600061156e8473ffffffffffffffffffffffffffffffffffffffff16611a76565b156116d7578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611597610ca4565b8786866040518563ffffffff1660e01b81526004016115b9949392919061255b565b602060405180830381600087803b1580156115d357600080fd5b505af192505050801561160457506040513d601f19601f820116820180604052508101906116019190611fb7565b60015b611687573d8060008114611634576040519150601f19603f3d011682016040523d82523d6000602084013e611639565b606091505b5060008151141561167f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161167690612622565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506116dc565b600190505b949350505050565b6060600082141561172c576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061188c565b600082905060005b6000821461175e57808061174790612b19565b915050600a826117579190612941565b9150611734565b60008167ffffffffffffffff8111156117a0577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156117d25781602001600182028036833780820191505090505b5090505b60008514611885576001826117eb91906129cc565b9150600a856117fa9190612b62565b603061180691906128eb565b60f81b818381518110611842577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561187e9190612941565b94506117d6565b8093505050505b919050565b61189b8383611a99565b6118a8600084848461154d565b6118e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118de90612622565b60405180910390fd5b505050565b606060008251141561190f57604051806020016040528060008152509050611a71565b60006040518060600160405280604081526020016132cb604091399050600060036002855161193e91906128eb565b6119489190612941565b60046119549190612972565b67ffffffffffffffff811115611993577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156119c55781602001600182028036833780820191505090505b509050600182016020820185865187015b80821015611a31576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f81168501518453600184019350506119d6565b5050600386510660018114611a4d5760028114611a6057611a68565b603d6001830353603d6002830353611a68565b603d60018303535b50505080925050505b919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611b09576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b0090612762565b60405180910390fd5b611b1281610c38565b15611b52576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b4990612662565b60405180910390fd5b611b5e60008383611543565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611bae91906128eb565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611c6f60008383611548565b5050565b828054611c7f90612ab6565b90600052602060002090601f016020900481019282611ca15760008555611ce8565b82601f10611cba57805160ff1916838001178555611ce8565b82800160010185558215611ce8579182015b82811115611ce7578251825591602001919060010190611ccc565b5b509050611cf59190611cf9565b5090565b5b80821115611d12576000816000905550600101611cfa565b5090565b6000611d29611d2484612862565b61283d565b905082815260208101848484011115611d4157600080fd5b611d4c848285612a74565b509392505050565b600081359050611d6381613249565b92915050565b600081359050611d7881613260565b92915050565b600081359050611d8d81613277565b92915050565b600081519050611da281613277565b92915050565b600082601f830112611db957600080fd5b8135611dc9848260208601611d16565b91505092915050565b600081359050611de18161328e565b92915050565b600060208284031215611df957600080fd5b6000611e0784828501611d54565b91505092915050565b60008060408385031215611e2357600080fd5b6000611e3185828601611d54565b9250506020611e4285828601611d54565b9150509250929050565b600080600060608486031215611e6157600080fd5b6000611e6f86828701611d54565b9350506020611e8086828701611d54565b9250506040611e9186828701611dd2565b9150509250925092565b60008060008060808587031215611eb157600080fd5b6000611ebf87828801611d54565b9450506020611ed087828801611d54565b9350506040611ee187828801611dd2565b925050606085013567ffffffffffffffff811115611efe57600080fd5b611f0a87828801611da8565b91505092959194509250565b60008060408385031215611f2957600080fd5b6000611f3785828601611d54565b9250506020611f4885828601611d69565b9150509250929050565b60008060408385031215611f6557600080fd5b6000611f7385828601611d54565b9250506020611f8485828601611dd2565b9150509250929050565b600060208284031215611fa057600080fd5b6000611fae84828501611d7e565b91505092915050565b600060208284031215611fc957600080fd5b6000611fd784828501611d93565b91505092915050565b600060208284031215611ff257600080fd5b600061200084828501611dd2565b91505092915050565b61201281612a00565b82525050565b61202181612a12565b82525050565b6000612032826128a8565b61203c81856128be565b935061204c818560208601612a83565b61205581612c4f565b840191505092915050565b600061206b826128b3565b61207581856128cf565b9350612085818560208601612a83565b61208e81612c4f565b840191505092915050565b60006120a4826128b3565b6120ae81856128e0565b93506120be818560208601612a83565b80840191505092915050565b600081546120d781612ab6565b6120e181866128e0565b945060018216600081146120fc576001811461210d57612140565b60ff19831686528186019350612140565b61211685612893565b60005b8381101561213857815481890152600182019150602081019050612119565b838801955050505b50505092915050565b60006121566009836128e0565b915061216182612c60565b600982019050919050565b60006121796032836128cf565b915061218482612c89565b604082019050919050565b600061219c6025836128cf565b91506121a782612cd8565b604082019050919050565b60006121bf601c836128cf565b91506121ca82612d27565b602082019050919050565b60006121e26024836128cf565b91506121ed82612d50565b604082019050919050565b60006122056019836128cf565b915061221082612d9f565b602082019050919050565b6000612228602c836128cf565b915061223382612dc8565b604082019050919050565b600061224b600d836128e0565b915061225682612e17565b600d82019050919050565b600061226e6038836128cf565b915061227982612e40565b604082019050919050565b6000612291602a836128cf565b915061229c82612e8f565b604082019050919050565b60006122b46029836128cf565b91506122bf82612ede565b604082019050919050565b60006122d7602e836128cf565b91506122e282612f2d565b604082019050919050565b60006122fa6002836128e0565b915061230582612f7c565b600282019050919050565b600061231d6004836128e0565b915061232882612fa5565b600482019050919050565b60006123406020836128cf565b915061234b82612fce565b602082019050919050565b60006123636031836128cf565b915061236e82612ff7565b604082019050919050565b6000612386602c836128cf565b915061239182613046565b604082019050919050565b60006123a96007836128e0565b91506123b482613095565b600782019050919050565b60006123cc602f836128cf565b91506123d7826130be565b604082019050919050565b60006123ef6021836128cf565b91506123fa8261310d565b604082019050919050565b6000612412601d836128e0565b915061241d8261315c565b601d82019050919050565b6000612435605f836128e0565b915061244082613185565b605f82019050919050565b60006124586031836128cf565b9150612463826131fa565b604082019050919050565b61247781612a6a565b82525050565b60006124898285612099565b91506124958284612099565b91508190509392505050565b60006124ad82856120ca565b91506124b98284612099565b91506124c482612149565b91506124cf8261239c565b91506124da82612310565b91506124e58261223e565b91508190509392505050565b60006124fc82612405565b91506125088284612099565b915081905092915050565b600061251e82612428565b915061252a8284612099565b9150612535826122ed565b915081905092915050565b60006020820190506125556000830184612009565b92915050565b60006080820190506125706000830187612009565b61257d6020830186612009565b61258a604083018561246e565b818103606083015261259c8184612027565b905095945050505050565b60006020820190506125bc6000830184612018565b92915050565b600060208201905081810360008301526125dc8184612060565b905092915050565b600060608201905081810360008301526125fe8186612060565b905061260d602083018561246e565b61261a6040830184612009565b949350505050565b6000602082019050818103600083015261263b8161216c565b9050919050565b6000602082019050818103600083015261265b8161218f565b9050919050565b6000602082019050818103600083015261267b816121b2565b9050919050565b6000602082019050818103600083015261269b816121d5565b9050919050565b600060208201905081810360008301526126bb816121f8565b9050919050565b600060208201905081810360008301526126db8161221b565b9050919050565b600060208201905081810360008301526126fb81612261565b9050919050565b6000602082019050818103600083015261271b81612284565b9050919050565b6000602082019050818103600083015261273b816122a7565b9050919050565b6000602082019050818103600083015261275b816122ca565b9050919050565b6000602082019050818103600083015261277b81612333565b9050919050565b6000602082019050818103600083015261279b81612356565b9050919050565b600060208201905081810360008301526127bb81612379565b9050919050565b600060208201905081810360008301526127db816123bf565b9050919050565b600060208201905081810360008301526127fb816123e2565b9050919050565b6000602082019050818103600083015261281b8161244b565b9050919050565b6000602082019050612837600083018461246e565b92915050565b6000612847612858565b90506128538282612ae8565b919050565b6000604051905090565b600067ffffffffffffffff82111561287d5761287c612c20565b5b61288682612c4f565b9050602081019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006128f682612a6a565b915061290183612a6a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561293657612935612b93565b5b828201905092915050565b600061294c82612a6a565b915061295783612a6a565b92508261296757612966612bc2565b5b828204905092915050565b600061297d82612a6a565b915061298883612a6a565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156129c1576129c0612b93565b5b828202905092915050565b60006129d782612a6a565b91506129e283612a6a565b9250828210156129f5576129f4612b93565b5b828203905092915050565b6000612a0b82612a4a565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612aa1578082015181840152602081019050612a86565b83811115612ab0576000848401525b50505050565b60006002820490506001821680612ace57607f821691505b60208210811415612ae257612ae1612bf1565b5b50919050565b612af182612c4f565b810181811067ffffffffffffffff82111715612b1057612b0f612c20565b5b80604052505050565b6000612b2482612a6a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612b5757612b56612b93565b5b600182019050919050565b6000612b6d82612a6a565b9150612b7883612a6a565b925082612b8857612b87612bc2565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f46616e7461737469630000000000000000000000000000000000000000000000600082015250565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f3c2f746578743e3c2f7376673e00000000000000000000000000000000000000600082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b7f227d000000000000000000000000000000000000000000000000000000000000600082015250565b7f476f6b7500000000000000000000000000000000000000000000000000000000600082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f43757063616b6500000000000000000000000000000000000000000000000000600082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000600082015250565b7f7b20226e616d65223a202268757576756f74222c20226465736372697074696f60008201527f6e223a22746869732069732068757576756f7420746f6b656e222c2022696d6160208201527f6765223a22646174613a696d6167652f7376672b786d6c3b6261736536342c00604082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b61325281612a00565b811461325d57600080fd5b50565b61326981612a12565b811461327457600080fd5b50565b61328081612a1e565b811461328b57600080fd5b50565b61329781612a6a565b81146132a257600080fd5b5056fe416e204e465420772f20494420257320686173206265656e206d696e74656420746f2025734142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa264697066735822122084375c5a2c291fa2289965472a9e9ce54bea4a401a6cc419a4440e0b91cdeae564736f6c634300080400333c73766720786d6c6e733d27687474703a2f2f7777772e77332e6f72672f323030302f73766727207072657365727665417370656374526174696f3d27784d696e594d696e206d656574272076696577426f783d273020302033353020333530273e203c7374796c653e2e62617365207b2066696c6c3a2077686974653b20666f6e742d66616d696c793a2073657269663b20666f6e742d73697a653a20313470783b207d3c2f7374796c653e3c726563742077696474683d273130302527206865696768743d2731303025272066696c6c3d27626c61636b27202f3e3c7465787420783d273530252720793d273530252720636c6173733d27626173652720646f6d696e616e742d626173656c696e653d276d6964646c652720746578742d616e63686f723d276d6964646c65273e";

type MyEpicNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyEpicNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyEpicNFT__factory extends ContractFactory {
  constructor(...args: MyEpicNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MyEpicNFT> {
    return super.deploy(overrides || {}) as Promise<MyEpicNFT>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MyEpicNFT {
    return super.attach(address) as MyEpicNFT;
  }
  override connect(signer: Signer): MyEpicNFT__factory {
    return super.connect(signer) as MyEpicNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyEpicNFTInterface {
    return new utils.Interface(_abi) as MyEpicNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyEpicNFT {
    return new Contract(address, _abi, signerOrProvider) as MyEpicNFT;
  }
}

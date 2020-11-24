/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ICurve } from "./ICurve";

export class ICurveFactory {
  static connect(address: string, signerOrProvider: Signer | Provider): ICurve {
    return new Contract(address, _abi, signerOrProvider) as ICurve;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[4]",
        name: "amounts",
        type: "uint256[4]",
      },
      {
        internalType: "bool",
        name: "deposit",
        type: "bool",
      },
    ],
    name: "calc_token_amount",
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
    inputs: [],
    name: "get_virtual_price",
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
];
// components/ClaimableRewards.js
import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";
import React from "react";
import {
  REWARD_TOKEN_ADDRESSES,
  STAKE_TOKEN_ADDRESSES,
} from "../constants/addresses";

const ClaimableRewards = ({ rewards, balance }: any) => {
  const address = useAddress();
  const { contract: rewardTokenContract, isLoading: loadingRewardToken } =
    useContract(REWARD_TOKEN_ADDRESSES);

  const { data: tokenBalance, isLoading: loadingTokenBalance } =
    useTokenBalance(rewardTokenContract, address);

  console.log(tokenBalance, loadingTokenBalance);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl uppercase tracking-widest text-gray-500 mb-4">
        Claimable Rewards
      </h1>

      <div className="bg-black p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <p className="text-lg font-semibold">Rewards:</p>
          <p className="text-gray-200"></p>
        </div>

        <div className="mb-4">
          <p className="text-lg font-semibold">Balance:</p>
          <p className="text-gray-200">
            {tokenBalance?.displayValue} {tokenBalance?.symbol}
          </p>
        </div>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          //   onClick={onClaim}
        >
          Claim Rewards
        </button>
      </div>
    </div>
  );
};

export default ClaimableRewards;

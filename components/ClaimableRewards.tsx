// components/ClaimableRewards.js
import {
  Web3Button,
  useAddress,
  useContract,
  useTokenBalance,
} from "@thirdweb-dev/react";
import React, { useEffect, useState } from "react";
import {
  REWARD_TOKEN_ADDRESSES,
  STAKE_CONTRACT_ADDRESSES,
  STAKE_TOKEN_ADDRESSES,
} from "../constants/addresses";
import { BigNumber, ethers } from "ethers";

const ClaimableRewards = ({ rewards, balance }: any) => {
  const address = useAddress();
  const { contract: rewardTokenContract, isLoading: loadingRewardToken } =
    useContract(REWARD_TOKEN_ADDRESSES);
  const [claimableRewards, setClaimableRewards] = useState<BigNumber>();
  const { contract: stakingContract } = useContract(STAKE_CONTRACT_ADDRESSES);

  const { data: tokenBalance, isLoading: loadingTokenBalance } =
    useTokenBalance(rewardTokenContract, address);

  useEffect(() => {
    if (!stakingContract || !address) return;

    async function loadClaimableRewards() {
      const stakeInfo = await stakingContract?.call("getStakeInfo", [address]);
      setClaimableRewards(stakeInfo[1]);
    }

    loadClaimableRewards();
  }, [address, stakingContract]);

  // console.log(tokenBalance, loadingTokenBalance);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl uppercase tracking-widest text-gray-500 mb-4">
        Claimable Rewards
      </h1>

      <div className="bg-black p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <p className="text-lg font-semibold">Rewards:</p>
          <p className="text-gray-200">
            {!claimableRewards
              ? "Loading"
              : ethers.utils.formatUnits(claimableRewards, 18)}{" "}
            TBT
          </p>
        </div>

        <div className="mb-4">
          <p className="text-lg font-semibold">Balance:</p>
          <p className="text-gray-200">
            {tokenBalance?.displayValue} {tokenBalance?.symbol}
          </p>
        </div>

        <Web3Button
          contractAddress={STAKE_CONTRACT_ADDRESSES}
          action={(stakingContract) => stakingContract.call("claimRewards")}
          // className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          //   onClick={onClaim}
        >
          Claim Rewards
        </Web3Button>
      </div>
    </div>
  );
};

export default ClaimableRewards;

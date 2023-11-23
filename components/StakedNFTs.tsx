/* eslint-disable @next/next/no-img-element */
// components/StakedNFTs.js
import {
  useAddress,
  useContract,
  useContractRead,
  useTokenBalance,
} from "@thirdweb-dev/react";
import React, { useEffect } from "react";
import {
  REWARD_TOKEN_ADDRESSES,
  STAKE_CONTRACT_ADDRESSES,
  STAKE_TOKEN_ADDRESSES,
} from "../constants/addresses";

const StakedNFTs = ({ stakedNFTs, onWithdraw }: any) => {
  const address = useAddress();

  const { contract: stakeTokenContract } = useContract(
    STAKE_TOKEN_ADDRESSES,
    "token"
  );
  const { contract: rewardTokenContract } = useContract(
    REWARD_TOKEN_ADDRESSES,
    "token"
  );
  const { contract: stakeContract } = useContract(
    STAKE_CONTRACT_ADDRESSES,
    "custom"
  );

  const {
    data: stakeInfo,
    refetch: refetchStakeInfo,
    isLoading: loadingStakeInfo,
  } = useContractRead(stakeContract, "getStakeInfo", [address]);

  const { data: stakeTokenBalance, isLoading: loadingStakeTokenBalance } =
    useTokenBalance(stakeTokenContract, address);

  const { data: rewardTokenBalance, isLoading: loadingRewardTokenBalance } =
    useTokenBalance(rewardTokenContract, address);

  useEffect(() => {
    setInterval(() => {
      refetchStakeInfo();
    }, 10000);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl uppercase tracking-widest text-gray-500 mb-4">
        Your Staked NFTs
      </h1>

      <div className="grid md:grid-cols-4 gap-10">
        {stakedNFTs.map((nft: any, index: any) => (
          <div key={index} className="bg-black p-6 rounded-lg shadow-md mb-4">
            <div className="mb-4">
              <img src={nft.image} alt={nft.name} className=" rounded-md" />
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold">{nft.name}</p>
            </div>

            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
              onClick={() => onWithdraw(index)}
            >
              Withdraw NFT
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StakedNFTs;

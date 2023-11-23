import React, { useState } from "react";
import Header from "../components/Header";
import ClaimableRewards from "../components/ClaimableRewards";
import StakedNFTs from "../components/StakedNFTs";
import UnStakedNFTs from "../components/UnStakedNFTs";
import Head from "next/head";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { STAKE_CONTRACT_ADDRESSES } from "../constants/addresses";
import { BigNumber } from "ethers";

const Staking = () => {
  const address = useAddress();

  const { contract: stakingContract } = useContract(STAKE_CONTRACT_ADDRESSES);
  const { data: stakedBookNFTs } = useContractRead(
    stakingContract,
    "getStakeInfo",
    [address]
  );

  return (
    <div className="bg-gray-800 md:pt-20 ">
      <Head>
        <title>The Book Token - Staking</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="max-w-7xl mx-auto">
        <Header />
        <ClaimableRewards rewards={"10"} balance="10" />
        <div className="container mx-auto p-4">
          <h1 className="text-3xl uppercase tracking-widest text-gray-500 mb-4">
            Your Staked NFTs
          </h1>
          {stakedBookNFTs &&
            stakedBookNFTs[0].map((stakedNfts: BigNumber) => (
              <div key={stakedNfts.toString()}>
                <StakedNFTs tokenId={stakedNfts.toNumber()} />
              </div>
            ))}
        </div>
        <UnStakedNFTs />
      </div>
    </div>
  );
};

export default Staking;

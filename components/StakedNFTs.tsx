/* eslint-disable @next/next/no-img-element */
// components/StakedNFTs.js
import {
  ThirdwebNftMedia,
  useContract,
  useNFT,
  Web3Button,
} from "@thirdweb-dev/react";
import React, { useEffect } from "react";
import {
  REWARD_TOKEN_ADDRESSES,
  STAKE_CONTRACT_ADDRESSES,
  STAKE_TOKEN_ADDRESSES,
} from "../constants/addresses";

interface NFTCardProps {
  tokenId: number;
}

const StakedNFTs = ({ tokenId }: NFTCardProps) => {
  const { contract: bookContract } = useContract(
    STAKE_TOKEN_ADDRESSES,
    "nft-drop"
  );
  const { contract: stakingContract } = useContract(STAKE_CONTRACT_ADDRESSES);

  const { data: nft } = useNFT(bookContract, tokenId);

  const withdrawNFT = async (nftId: string) => {
    await stakingContract?.call("withdraw", [[nftId]]);
  };
  return (
    <div className="grid md:grid-cols-4 gap-10">
      {nft && (
        <>
          <div
            // key={index}
            className="bg-black p-6 rounded-lg shadow-md mb-4"
          >
            <div className="mb-4">
              {nft.metadata && <ThirdwebNftMedia metadata={nft.metadata} />}
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold">{nft.metadata.name}</p>
            </div>

            <Web3Button
              contractAddress={STAKE_CONTRACT_ADDRESSES}
              action={() => withdrawNFT(nft.metadata.id)}
              // className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
              // onClick={() => onWithdraw(index)}
            >
              Withdraw NFT
            </Web3Button>
          </div>
        </>
      )}
      {/* {stakedNFTs.map((nft: any, index: any) => (
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
        ))} */}
    </div>
  );
};

export default StakedNFTs;

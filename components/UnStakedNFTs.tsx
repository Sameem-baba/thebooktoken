/* eslint-disable @next/next/no-img-element */
// components/StakedNFTs.js
import React from "react";

const UnStakedNFTs = ({ unStakedNFTs, onWithdraw }: any) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl uppercase tracking-widest text-gray-500 mb-4">
        Your UnStaked NFTs
      </h1>

      <div className="grid md:grid-cols-4 gap-10">
        {unStakedNFTs.map((nft: any, index: any) => (
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
              Stake
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnStakedNFTs;

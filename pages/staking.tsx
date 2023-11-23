import React, { useState } from "react";
import Header from "../components/Header";
import ClaimableRewards from "../components/ClaimableRewards";
import StakedNFTs from "../components/StakedNFTs";
import UnStakedNFTs from "../components/UnStakedNFTs";

const Staking = () => {
  const [stakedNFTs, setStakedNFTs] = useState([
    { name: "The Book Token #1", image: "/nft1.png" },
    { name: "The Book Token #2", image: "/nft2.png" },
    // Add more NFTs as needed
  ]);

  const handleClaim = () => {
    // Add logic for claiming rewards
    console.log("Rewards claimed!");
  };

  const handleWithdraw = (index: any) => {
    // Add logic for withdrawing the NFT at the specified index
    console.log(`Withdraw NFT at index ${index}`);
    // Update stakedNFTs state to remove the withdrawn NFT
    const updatedNFTs = [...stakedNFTs];
    updatedNFTs.splice(index, 1);
    setStakedNFTs(updatedNFTs);
  };
  return (
    <div className="bg-gray-800 md:pt-20 ">
      <div className="max-w-7xl mx-auto">
        <Header />
        <ClaimableRewards rewards={"10"} balance="10" />
        <StakedNFTs stakedNFTs={stakedNFTs} onWithdraw={handleWithdraw} />
        <UnStakedNFTs unStakedNFTs={stakedNFTs} onWithdraw={handleWithdraw} />
      </div>
    </div>
  );
};

export default Staking;

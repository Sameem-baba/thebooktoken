import React from "react";
import Header from "../components/Header";
import Head from "next/head";
import { Web3Button, useContract } from "@thirdweb-dev/react";
import { STAKE_TOKEN_ADDRESSES } from "../constants/addresses";
import { useRouter } from "next/router";

const Mint = () => {
  const router = useRouter();
  const { contract: bookTokenContract } = useContract(
    STAKE_TOKEN_ADDRESSES,
    "nft-drop"
  );

  const mint = async (bookTokenContract: any) => {
    await bookTokenContract.erc721.claim(1);
    router.push("/staking");
  };
  return (
    <div className="bg-gray-800 h-screen w-full flex flex-col justify-center items-center">
      <Head>
        <title>The Book Token - Mint</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Web3Button
        contractAddress={STAKE_TOKEN_ADDRESSES}
        action={(bookTokenContract) => mint(bookTokenContract)}
        className="font-kanit px-4 py-2 rounded-lg flex items-center justify-center uppercase tracking-widest border-2 border-[#0096c7] bg-[#0096c7] transition-all duration-200 ease-in"
      >
        Claim an NFT
      </Web3Button>
      <Header />
    </div>
  );
};

export default Mint;

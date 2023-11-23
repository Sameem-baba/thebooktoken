import React from "react";
import Header from "../components/Header";
import Head from "next/head";

const Mint = () => {
  return (
    <div className="bg-gray-800 h-screen w-full flex flex-col justify-center items-center">
      <Head>
        <title>The Book Token - Mint</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <button className="font-kanit px-4 py-2 rounded-lg flex items-center justify-center uppercase tracking-widest border-2 border-[#0096c7] bg-[#0096c7] transition-all duration-200 ease-in">
        Claim an NFT
      </button>
      <Header />
    </div>
  );
};

export default Mint;

// "use client";
import Link from "next/link";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

type Props = {};

const Banner = (props: Props) => {
  const address = useAddress();
  return (
    <div className="text-white min-h-screen md:h-screen w-full bg-gray-800 text-center overflow-x-hidden flex flex-col items-center justify-center  relative md:py-0">
      <div className="w-full z-10  justify-center items-center px-4 md:px-0  flex flex-col space-y-10">
        <h1
          className="text-4xl tracking-wide font-kanit uppercase"
          style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.4)" }}
        >
          Welcome to The Book Token Collection!
        </h1>
        <p
          className="uppercase tracking-widest text-xl font-medium text-[#caf0f8] w-1/2 font-kanit"
          style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.4)" }}
        >
          The place where owner can prove their ownership of the book and become
          the sole individual with access to specific content
        </p>
        {address && (
          <div className="flex flex-col space-y-4 items-center justify-center md:space-y-0 md:flex-row md:space-x-4">
            <Link
              href="/mint"
              className="font-kanit px-4 py-2 rounded-lg flex items-center justify-center  tracking-widest border-2 border-[#0096c7] bg-[#0096c7] transition-all duration-200 ease-in"
            >
              MINT NFTs
            </Link>
            <Link
              href="/staking"
              className="font-kanit px-4 py-2 rounded-lg flex items-center justify-center tracking-widest border-2 border-[#0096c7] transition-all duration-200 ease-in"
            >
              STAKE NFTs
            </Link>
          </div>
        )}
        <div>
          <ConnectWallet theme={"dark"} className="connectWallet" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

/* eslint-disable @next/next/no-img-element */
// components/StakedNFTs.js
import {
  ThirdwebNftMedia,
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import {
  STAKE_CONTRACT_ADDRESSES,
  STAKE_TOKEN_ADDRESSES,
} from "../constants/addresses";

const UnStakedNFTs = () => {
  const { contract: bookTokenContract } = useContract(
    STAKE_TOKEN_ADDRESSES,
    "nft-drop"
  );
  const { contract: stakingContract } = useContract(STAKE_CONTRACT_ADDRESSES);
  const address = useAddress();

  const { data: myBookNFTs } = useOwnedNFTs(bookTokenContract, address);

  const stakeNFT = async (nftId: string) => {
    if (!address) return;

    console.log(address);

    const isApproved = await bookTokenContract?.isApproved(
      address,
      STAKE_CONTRACT_ADDRESSES
    );

    if (!isApproved) {
      await bookTokenContract?.setApprovalForAll(
        STAKE_CONTRACT_ADDRESSES,
        true
      );
    }

    await stakingContract?.call("stake", [[nftId]]);
  };

  // console.log(myBookNFTs);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl uppercase tracking-widest text-gray-500 mb-4">
        Your UnStaked NFTs
      </h1>

      <div className="grid md:grid-cols-4 gap-10">
        {myBookNFTs?.map((nft, index) => (
          <div key={index} className="bg-black p-6 rounded-lg shadow-md mb-4">
            <div className="mb-4">
              <ThirdwebNftMedia
                metadata={nft.metadata}
                className=" rounded-md"
              />
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold">{nft.metadata.name}</p>
            </div>

            <Web3Button
              contractAddress={STAKE_CONTRACT_ADDRESSES}
              action={() => stakeNFT(nft.metadata.id)}
            >
              Stake
            </Web3Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnStakedNFTs;

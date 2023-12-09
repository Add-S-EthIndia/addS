import { useWeb3Modal } from "@web3modal/wagmi/react";

type connectWalletParam ={
  msg:string
}

export default function ConnectWalletButton({msg}:connectWalletParam) {
  const { open } = useWeb3Modal();

  return (
    <div >
      <button
        className=" border-2 border-blue-700 hover:border-blue-600 hover:bg-blue-500 px-2 py-2 rounded-lg text-lg font-semibold tracking-wide "
        onClick={() => open()}
      >

        {msg}
      </button>
    </div>
  );
}

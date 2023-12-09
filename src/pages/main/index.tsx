import { useConnect } from "wagmi";

import ConnectWalletButton from "../../components/WalletButtons/ConnectWalletButton";

const Main = () => {
  return (
    <div className="flex gap-5 h-screen justify-center items-center">
      <ConnectWalletButton msg="Create a Campaign" />

      <p>OR</p>
      <ConnectWalletButton msg=" Connect as Wallet" />
    </div>
  );
};

export default Main;

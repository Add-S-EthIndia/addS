import { useEffect } from "react";
import ChooseNetworkButton from "./WalletButtons/ChooseNetworkButton";
import ConnectWalletButtonWallet from "./WalletButtons/ConnectWalletButtonWallet";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { isConnected } = useAccount();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isConnected) {
      navigate("/");
    }
  }, [isConnected]);

  return (
    <>
      <div className="w-full h-16 shadow-md fixed flex justify-between items-center  bg-white px-6 ">
        <div>Logo</div>

        <div className="flex  gap-5">
          <ChooseNetworkButton />
          <ConnectWalletButtonWallet
            msg="Wallet Settings"
            setSelectedState={() => {}}
            type=""
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;

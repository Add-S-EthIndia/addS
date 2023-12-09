import ChooseNetworkButton from "./WalletButtons/ChooseNetworkButton";
import ConnectWalletButton from "./WalletButtons/ConnectWalletButton";

const NavBar = () => {
  return (
    <>
      <div className="w-full h-16 shadow-md fixed flex justify-between items-center  bg-white px-6 ">
        <div>Logo</div>

        <div className="flex  gap-5">
          <ChooseNetworkButton />
          <ConnectWalletButton msg="Wallet Settings" />
        </div>
      </div>
    </>
  );
};

export default NavBar;

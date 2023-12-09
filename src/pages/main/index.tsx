import CurrentlyRunningCampaings from "../../components/Cards/CurrentlyRunningCampaings";
import ConnectWalletButtonWallet from "../../components/WalletButtons/ConnectWalletButtonWallet";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";
import { useContractReads } from "wagmi";

import AddSInfra from "../../lib/ABI/AddSInfra";

const Main = () => {
  const [openDashboard, setOpenDashboard] = useState<string>("");
  const { isConnected } = useAccount();
  const navigate = useNavigate();

  const addSInfra = {
    address: "0x920CCb77F0C95791af4203a7b3bf244da01564aC",
    abi: AddSInfra,
  };

  const { data, isError, isLoading } = useContractReads({
    contracts: [
      { address: "0x920CCb77F0C95791af4203a7b3bf244da01564aC", abi: AddSInfra, functionName: "" },
      {
        ...addSInfra,
        functionName: "getIntegratorsList",
      },
    ],
  });

  useEffect(() => {
    if (isConnected && openDashboard === "campaign") {
      navigate("/dashboard");
    } else if (isConnected && openDashboard === "wallet") {
      navigate("/walletDashboard");
    } else {
      navigate("/");
    }
  }, [isConnected, openDashboard]);

  console.log(openDashboard);

  return (
    <div className="flex gap-5 h-screen justify-center items-center">
      <div className="w-[500px] h-[700px] flex flex-col gap-5 justify-center items-center">
        <p className="text-xl font-bold"> Currently Running Campaings</p>
        <div className="w-[90%] h-full border-2 border-black  rounded-lg px-2 py-4 overflow-y-scroll">
          <CurrentlyRunningCampaings />
        </div>
      </div>

      <div className="mx-20 flex gap-5  justify-center items-center">
        <ConnectWalletButtonWallet
          msg="Create a Campaign"
          type="campaign"
          setSelectedState={setOpenDashboard}
        />

        <p>OR</p>
        <ConnectWalletButtonWallet
          msg="Connect as Wallet"
          type="wallet"
          setSelectedState={setOpenDashboard}
        />
      </div>

      <div className="w-[400px] h-[600px] flex justify-center items-center">
        <div className="w-[90%] h-full border-2 border-black "> hello </div>
      </div>
    </div>
  );
};

export default Main;

import CurrentlyRunningCampaings from "../../components/Cards/CurrentlyRunningCampaings";
import ConnectWalletButtonWallet from "../../components/WalletButtons/ConnectWalletButtonWallet";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";
import { useContractReads } from "wagmi";
// import { readContracts } from "@wagmi/core";
import { getNetwork } from '@wagmi/core'

import {AddSInfra, AddSInfraAddress} from "../../lib/ABI/AddSInfra";

const Main = () => {
  const [openDashboard, setOpenDashboard] = useState<string>("");
  const { isConnected } = useAccount();
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addSInfra: any = {
    address: AddSInfraAddress,
    abi: AddSInfra,
  };

    const { data, isError, isLoading } = useContractReads({
      contracts: [
        {
          ...addSInfra,
          functionName: "getPoolsList",
        },
        {
          ...addSInfra,
          functionName: "getIntegratorsList",
        },
      ],
    });

    console.log({ data,  isError, isLoading  });

    const { chain, chains } = getNetwork()

    console.log({chain, chains})

  useEffect(() => {
    if (isConnected && openDashboard === "campaign") {
      navigate("/dashboard");
    } else if (isConnected && openDashboard === "wallet") {
      navigate("/walletDashboard");
    } else {
      navigate("/");
    }
  }, [isConnected, openDashboard]);

  useEffect(() => {
    // async function getData() {
    //   const data = await readContracts({
    //     contracts: [
    //       {
    //         ...addSInfra,
    //         functionName: "getPoolsList",
    //       },
    //       {
    //         ...addSInfra,
    //         functionName: "getIntegratorsList",
    //       },
    //     ],
    //   });

    //   console.log({ data });
    // }
    // getData();
  });

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

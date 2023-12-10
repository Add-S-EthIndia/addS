import NavBar from "../../components/NavBar";
import AddNewCampaign from "../../components/dashboard/AddNewCampaign";
import CurrentRunningCampaign from "../../components/dashboard/CurrentRunningCampaign";
import { useConnect, useContractReads } from "wagmi";
// import { readContracts } from "@wagmi/core";
// import { getNetwork } from '@wagmi/core'
import {PoolFactory, PoolFactoryAddress} from "../../lib/ABI/PoolFactory";

const Dashboard = () => {

  const dataConnect = useConnect()

  console.log({dataConnect })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addSInfra: any = {
    address: PoolFactoryAddress,
    abi: PoolFactory,
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

  return (
    <>
      {/* Main container for all the 3 things  */}
      <NavBar />

      <div className="flex flex-row items-start justify-center gap-3  divide-x-2  divide-black divide-opacity-30 py-10 px-32 pt-20 max-h-[935px] overflow-y-auto ">
        <AddNewCampaign />
        <CurrentRunningCampaign />
      </div>
    </>
  );
};

export default Dashboard;

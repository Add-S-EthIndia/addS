import NavBar from "../../components/NavBar";
import AddNewCampaign from "../../components/dashboard/AddNewCampaign";
import CurrentRunningCampaign from "../../components/dashboard/CurrentRunningCampaign";

const Dashboard = () => {
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

import AddNewCampaign from "../../components/dashboard/AddNewCampaign"
import CurrentRunningCampaign from "../../components/dashboard/CurrentRunningCampaign"
import PoolAllocations from "../../components/dashboard/PoolAllocations"

const Dashboard = () => {
  return (

    <>

    {/* Main container for all the 3 things  */}

    <div className="flex flex-row items-center justify-center gap-3 text-center divide-x-2 divide-black divide-opacity-30 py-3 ">
    <AddNewCampaign/>
    <CurrentRunningCampaign/>
    <PoolAllocations/>

    </div>

    </>
  )
}

export default Dashboard
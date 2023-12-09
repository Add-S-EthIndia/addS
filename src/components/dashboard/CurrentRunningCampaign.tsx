





const CurrentRunningCampaign = () => {
  const dumyData: any = {
    nameOfAdvertiser: "FutureAdS",
    emailOfAdvertiser: "futureads@gmail.com",
    websiteLinkOfAdvertiser: "futerads.com",

    advertiserCampaignName: "The Future Of Ads",
    mediaForAdvertisement: "url",

    ageMoreThan18: "Yes",
    selectedWalletForAdvertisiment: "WalletX",

    minimumTransactionAmount: 123,

    bribeCapitalForAdvertisiment: 20000,
    bribePercentageForService: 4,
  };

  return (
    <div className="w-[50%] h-screen flex flex-col justify-start items-center gap-5 ">
      <header className="font-semibold text-xl">Active Campaing Details</header>

      <div className="max-w-[90%] w-full  border-2 border-gray-700  p-5 rounded-2xl flex flex-col gap-4">
        <header className="text-center text-xl font-medium ">
          {dumyData.advertiserCampaignName}
        </header>

        <div className="text-lg font-medium py-1">
          <p className="my-1">Advertiser Details:</p>
          <div className="text-base ">
            <p>
              Name: <span>{dumyData.nameOfAdvertiser}</span>
            </p>
            <div className="flex justify-between text-sm  ">
              <p>
                Email: <span>{dumyData.emailOfAdvertiser}</span>
              </p>
              <p>
                Website Link: <span>{dumyData.websiteLinkOfAdvertiser} </span>
              </p>
            </div>
          </div>
        </div>

        <div className="text-lg font-medium py-1">
          <p>Advertisiment Campaign Details</p>
          <div className="text-base ">
            <p>
              Name: <span>{dumyData.advertiserCampaignName}</span>
            </p>
            <div className="flex justify-between text-sm  ">
              <p>
                Wallet: <span>{dumyData.selectedWalletForAdvertisiment}</span>
              </p>
              <p>
                Minimum Transaction Amt:{" "}
                <span>{dumyData.minimumTransactionAmount} </span>
              </p>
            </div>
            <div className="flex justify-between text-sm  ">
              <p>
                Advertisiment Pool Size:{" "}
                <span>{dumyData.bribeCapitalForAdvertisiment}</span>
              </p>
              <p>
                Bribe Percentage:{" "}
                <span>{dumyData.bribePercentageForService} </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <header className="font-semibold text-xl">Get Current Pool Data</header>

      <div className="max-w-[90%] w-full  border-2 border-gray-700  p-5 rounded-2xl flex flex-col gap-4">
        <p>Bribe Pool Amount: <span>{100}</span></p>
        <p>Total Transaction Occured: <span>{100}</span></p>

        <button className="border-2 w-[75%] mx-auto rounded-lg py-2 border-gray-800 hover:bg-gray-800 bg-gray-900 text-white font-semibold text-base">Refresh</button> 


      </div>
    </div>
  );
};

export default CurrentRunningCampaign;

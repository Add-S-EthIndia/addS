import ConnectButton from "../../components/ConnectWalletButton";

const Main = () => {
  return (
    <div className="flex gap-5 h-screen justify-center items-center">
      <ConnectButton msg="Create a Campaigne " />
       
       <p>OR</p>
      <ConnectButton msg="Connect as a wallet " />
    </div>
  );
};

export default Main;

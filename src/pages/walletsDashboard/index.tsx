import { useForm } from "react-hook-form";
import NavBar from "../../components/NavBar";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

const formSchema = z.object({
  walletName: z.string(),
  walletLogo: z.string(),
  walletWebsite: z.string(),
});

const WalletDashboard = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      walletName: "",
      walletLogo: "",
      walletWebsite: "",
    },
  });

  const handleSubmitForm = () => {
    const data = form.getValues();

    console.log("fsdfgfd", data);
  };
  return (
    <div>
      <NavBar />
      <Form {...form}>
        <div className="flex flex-col gap-4 items-center m-auto p-20  ">
          <FormField
            control={form.control}
            name="walletName"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="">Wallet Name </FormLabel>
                  <FormControl>
                    <Input placeholder="Wallet Name" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="walletWebsite"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="">Wallet Website </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Wallet Websire"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="walletLogo"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="">Wallet Logo </FormLabel>
                  <FormControl>
                    <Input placeholder="Wallet Logo" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button type="submit" className="w-full" onClick={handleSubmitForm}>
            Create a Campaign
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default WalletDashboard;

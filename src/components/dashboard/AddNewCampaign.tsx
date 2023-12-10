import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  website: z.string(),
  // logo: z.string(),

  campaignName: z.string(),
  campaignMedia: z.string(),
  ageVerify: z.enum(["No", "Yes"]),

  selectWallet: z.string(),
  setMinimumTransactionAmount: z.number(),
  setAmountForPool: z.number(),
  setBribePercentage: z.number(),
});

const AddNewCampaign = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      website: "",
      campaignName: "",
      campaignMedia: "",
      ageVerify: "No",

      setMinimumTransactionAmount: 0,
      setAmountForPool: 0,
      setBribePercentage: 0,
    },
  });

  const handleSubmitForm = (e:any) => {
    e.preventDefault();
    console.log("call the functiona of blockchain");
    console.log("this is the values of form schema ");
    const { getValues } = form;
    console.log("al value", getValues());
  };

  return (
    <div className="w-[50%] flex flex-col justify-start items-center gap-5 ">
      <header className=" font-semibold text-xl">Add New Campaign</header>

      <div className="max-w-[80%] w-full   border-2 border-gray-700 p-10 rounded-2xl">
        <Form {...form}>
          <form className="flex flex-col gap-4">
            {/* name of the company */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="">Advetiser Name </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Advetiser Name"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            {/* email address  */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="">Advetiser Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Advetiser Email Address"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            {/* Website  */}
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="">Advetiser Website</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Advetiser Website link"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            {/* Logo 
            <FormField
              control={form.control}
              name="logo"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="">Select Company Logo</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Company Logo"
                        type="file"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            /> */}
            {/* name of the campaigne  */}
            <FormField
              control={form.control}
              name="campaignName"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="">
                      Advertisement Campaign Name{" "}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Advertisement Campaign Name"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            {/* media of campaigne  set the size in the validations */}
            <FormField
              control={form.control}
              name="campaignMedia"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="">Banner Image for the Ad</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Media for campaigne"
                        type="file"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-gray-500">
                      image size under 1 MB (325px x 400px)
                    </FormMessage>
                  </FormItem>
                );
              }}
            />
            {/* select the age for the campaign video use radio group from shadcn ui*/}
            {/* <FormField
              control={form.control}
              name="adultVerify"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="">Is the add 18+ </FormLabel>
                    <FormControl>
                      <Input type="radio" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            /> */}

            {/* ######## SELECT WALLET ###############  */}

            {/* set minimum transaction amount  */}
            <FormField
              control={form.control}
              name="setMinimumTransactionAmount"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="">
                      Minimum Transaction Amount For Eligible User
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Minimum Transaction Amount"
                        type="number"
                        {...field}
                        onChange={(event) =>
                          field.onChange(+event.target.value)
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            {/* Amount for the pool  */}
            <FormField
              control={form.control}
              name="setAmountForPool"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Bribe Capital for Advertisement</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Total Ad Capital"
                        type="number"
                        {...field}
                        onChange={(event) =>
                          field.onChange(+event.target.value)
                        }
                      />
                    </FormControl>
                    <FormMessage />
                    
                  </FormItem>
                );
              }}
            />

            {/* Bribe Percentage it is on top of the gas fees   */}
            <FormField
              control={form.control}
              name="setBribePercentage"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel> Bribe Percentage for service fee</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Bribe% over and above gas fees"
                        type="number"
                        {...field}
                        onChange={(event) =>
                          field.onChange(+event.target.value)
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <Button type="submit" className="w-full" onClick={handleSubmitForm}>
              Create a Campaign
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddNewCampaign;

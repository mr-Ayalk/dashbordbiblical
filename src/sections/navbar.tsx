import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Bell, ListStartIcon, MoveRightIcon, User } from "lucide-react";

const Navbar = () => {
  return (
    <div className=" h-40 w-[93%] ml-[40px] flex flex-row  overflow-hidden ">
      <div>
        <h1 className="text-white text-5xl items-center pt-14 pb-2">
          Greeting from Biblical again,{" "}
          <span className="text-lime-400">Ayalk</span>
        </h1>
        <p className="text-2xl text-white/55 opacity-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          obcaecati.
        </p>
      </div>

      <div className="flex flex-row w-[400px] h-20 gap-5 absolute justify-end right-10 top-0">
        <Button className="bg-lime-400 p-8 mt-14  text-black font-bold text-2xl items-center">
          <ListStartIcon className="font-extrabold size-10 " />
          Start Your Study
        </Button>
        <div className=" p-7 mt-8  text-black font-bold text-2xl items-center">
          <ThemeToggle />
        </div>
        <div className="">
          {" "}
          <Bell className="text-white size-16 mt-14 mr-4" />
        </div>
        <div className="rounded-full bg-white mt-14 size-20  px-3 py-2">
          <User className="text-black  size-14 mx-auto justify-center items-center " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

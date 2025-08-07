import {
  ArchiveIcon,
  BarChart,
  BookAIcon,
  BookOpen,
  FunctionSquareIcon,
  HomeIcon,
  LogOut,
  MessageCircleIcon,
  User,
} from "lucide-react";

const sidebarItems = [
  {
    name: "Home",
    icon: HomeIcon,
  },

  {
    name: "References",
    icon: BookAIcon,
  },
  {
    name: "Chat",
    icon: MessageCircleIcon,
  },
  {
    name: "Member",
    icon: User,
  },
  {
    name: "Progress",
    icon: BarChart,
  },
  {
    name: "Achievements",
    icon: ArchiveIcon,
  },
];
const Sidebar = () => {
  return (
    <div className=" h-screen w-[7%] relative overflow-hidden">
      <div>
        <BookOpen className="text-lime-400 absolute top-14 left-14 size-16 " />
      </div>

      <div className="flex flex-col items-center my-4 h-full mt-48">
        {sidebarItems.map((item) => (
          <div
            key={item.name}
            className="bg-neutral-900 shadow-2xl  rounded-2xl px-10 py-1 m-2 w-[140px]"
          >
            <div className="text-white text-sm flex items-center my-2 flex-col">
              <div className="">
                <item.icon className="text-gray-600 size-16" />
              </div>
              <div className="text-white text-xl">{item.name}</div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <LogOut className="text-white size-10 absolute bottom-10 left-10" />
      </div>
    </div>
  );
};

export default Sidebar;

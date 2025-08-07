import { Button } from "@/components/ui/button";
import Progress from "./progress";
const quickLinks = [
  {
    name: "Progress",
    icon: "📈",
    link: "/progress",
  },
  {
    name: "Notes",
    icon: "📝",
    link: "/notes",
  },
  {
    name: "Settings",
    icon: "⚙️",
    link: "/settings",
  },
  {
    name: "Help",
    icon: "❓",
    link: "/help",
  },
];
const Dashboard = () => {
  return (
    <div className="border-2 ml-[40px] w-[60%] h-[1100px] rounded-4xl py-5  ">
      <div className="">
        {" "}
        {quickLinks.map((link) => (
          <Button
            key={link.name}
            className=" p-4  shadow-2xl border-2  text-3xl rounded-lg hover:bg-gray-700 ml-10 py-10 px-5"
          >
            <span className="mr-2">{link.icon}</span>
            {link.name}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-2 m-0 gap-0  w-full">
        <div className="flex flex-col  m-0 gap-0">
          <Progress
            title="Progress Overview"
            description="Track your reading progress and achievements"
            CompletedBooks={5}
            OnProgressBooks={2}
            TotalBooks={10}
            className="bg-emerald-950"
          />
          <Progress
            title="Your Study Schedule"
            description="Plan your study sessions and track your progress"
            OnProgressBooks={2}
            TotalBooks={10}
            className="bg-lime-400"
          />
        </div>
        <div className="flex flex-col  m-0 gap-0">
          <Progress
            title="Your Achievements"
            description="Celebrate your milestones and achievements"
            CompletedBooks={5}
            OnProgressBooks={2}
            TotalBooks={10}
            className="bg-emerald-500"
          />
          <Progress
            title="Recommended Reads"
            description="Explore books based on your interests"
            OnProgressBooks={2}
            TotalBooks={10}
            className="bg-yellow-800"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

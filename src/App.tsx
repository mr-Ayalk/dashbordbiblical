import Dashboard from "./sections/dashboard";
import Navbar from "./sections/navbar";
import Profile from "./sections/profile";
import Sidebar from "./sections/sidebar";

function App() {
  return (
    <>
      <div className=" h-screen w-full">
        <div className="flex flex-row">
          <Sidebar />
          <div className="flex flex-col w-full  ">
            <Navbar />
            <div className="flex flex-row">
              <Dashboard />
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

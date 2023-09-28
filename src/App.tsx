import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/sidebar";
import { Visualizer } from "./utils/visualizer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container p-1 mx-0 min-h-100 w-screen flex flex-row gap-10 justify-between items-center">
        <Sidebar />
        <div className=" w-full h-full m-auto ml-3 pl-72">
          <Visualizer />
        </div>
      </div>
    </>
  );
}

export default App;

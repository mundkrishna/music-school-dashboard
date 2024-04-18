import MainLayout from "./components/Layouts/MainLayout";
import Sidebar from "./components/Layouts/Sidebar";

function App() {
  return (
    <div className="flex">
      <div className="bg-dark-black">
        <Sidebar />
      </div>
      <div>
        <MainLayout />
      </div>
    </div>
  );
}

export default App;

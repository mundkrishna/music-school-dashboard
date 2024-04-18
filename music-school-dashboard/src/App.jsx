import MainLayout from "./layouts/MainLayout";
import Sidebar from "./layouts/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <MainLayout />
    </div>
  );
}

export default App;

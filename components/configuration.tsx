import { ConfigTime } from "./configTime";
import { Sidebar } from "./sideBar";

const ConfigurationPage = () => {
  return (
    <div className="min-h-screen bg-red-100">
      <Sidebar>
        <ConfigTime />
      </Sidebar>
    </div>
  );
};

export default ConfigurationPage;

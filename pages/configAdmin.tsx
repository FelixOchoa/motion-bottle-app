import { useEffect, useState } from "react";
import LoginAdmin from "@/components/LoginAdmin";
import ConfigurationPage from "@/components/configuration";

export default function ConfigAdming() {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    if (
      !localStorage.getItem("isLogin") ||
      localStorage.getItem("isLogin") === "false"
    ) {
      setIsLogin(false);
    }
  }, []);

  if (!isLogin) {
    return <LoginAdmin />;
  }

  return (
    <div>
      <ConfigurationPage />
    </div>
  );
}

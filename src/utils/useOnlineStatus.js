import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [OnlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    const onlineFunc = () => setOnlineStatus(true);
    const offlineFunc = () => setOnlineStatus(false);

    window.addEventListener("online", onlineFunc);
    window.addEventListener("offline", offlineFunc);

    return () => {
      window.removeEventListener("online", onlineFunc);
      window.removeEventListener("offline", offlineFunc);
    };
  }, []);

  return OnlineStatus;
};

export default useOnlineStatus;

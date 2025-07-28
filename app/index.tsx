import { useEffect } from "react";
import { router, useNavigationContainerRef } from "expo-router";

export default function Index() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/splash");
    }, 10);

    return () => clearTimeout(timeout);
  }, []);

  return null;
}

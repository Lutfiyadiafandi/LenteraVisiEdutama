import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const root = document.getElementById("root");

  useEffect(() => {
    root?.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

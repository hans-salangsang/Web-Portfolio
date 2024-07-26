import { useEffect } from "react";

const useSmoothScroll = () => {
  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      const scrollStep = event.deltaY * 3;
      window.scrollBy({
        top: scrollStep,
        behavior: "smooth",
      });
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
};

export default useSmoothScroll;

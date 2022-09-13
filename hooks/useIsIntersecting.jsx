import { useEffect, useMemo, useState } from "react";

const useIsIntersecting = (ref) => {
  const [isIntersecting, setIsInterSecting] = useState(null);
  const observer = useMemo(() => {
    new IntersectionObserver(([entry]) => {
      setIsInterSecting(entry.isIntersecting);
    });
  }, []);

  useEffect(() => {
    observer?.observe(ref?.current);

    return () => observer?.disconnect();
  }, [ref, observer]);

  return isIntersecting;
};

export default useIsIntersecting;

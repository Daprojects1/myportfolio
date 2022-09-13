import { useEffect, useState } from "react";
import NavBarPage from "../NavBar";

const Layout = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  useEffect(() => {
    setIsLoaded(true);
    if (typeof window !== "null") {
    }
  }, []);

  const changeCurrentPage = (e, page) => {
    document?.getElementById(page)?.scrollIntoView();
    setCurrentPage(page);
  };

  if (!isLoaded) return null;
  return (
    <div className="body-layout">
      <NavBarPage
        changeCurrentPage={changeCurrentPage}
        currentPage={currentPage}
      />
      {children}
    </div>
  );
};

export default Layout;

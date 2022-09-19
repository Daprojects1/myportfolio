import { useEffect, useReducer, useState } from "react";
import NavBarPage from "../NavBar";
import ToolComponent from "../../reusableComponents/ToolComponent";
import { FaGithub, FaFile } from "react-icons/fa";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
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
      <div className="leftNav">
        <FaGithub
          onClick={() => router.push("https://github.com/daprojects1")}
        />
        <a href="/myCv.docx" download>
          <FaFile
            onClick={() => {
              console.log("yeah");
            }}
          />
        </a>
        <span className="file-id">CV</span>
      </div>
      {children}
      <div className="footer"></div>
    </div>
  );
};

export default Layout;

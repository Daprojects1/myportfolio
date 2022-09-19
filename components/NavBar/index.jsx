import pages from "../../constants/pages";
const NavBarPage = ({ changeCurrentPage, currentPage }) => {
  return (
    <>
      <div className="navbar">
        <ul>
          {pages?.map((p, i) => (
            <li key={i} onClick={(e) => changeCurrentPage(e, p.name)}>
              {p?.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBarPage;

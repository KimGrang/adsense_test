import "./Navbar.css";

interface NavbarProps {
  onPageChange: (page: "calculator" | "converter") => void;
  currentPage: "calculator" | "converter";
}

export const Navbar = ({ onPageChange, currentPage }: NavbarProps) => {
  return (
    <nav className='navbar'>
      <div className='nav-content'>
        <div className='nav-logo'>adsense_test</div>
        <div className='nav-links'>
          <div
            className={`nav-item ${
              currentPage === "calculator" ? "active" : ""
            }`}
            onClick={() => onPageChange("calculator")}
          >
            계산기
          </div>
          <div
            className={`nav-item ${
              currentPage === "converter" ? "active" : ""
            }`}
            onClick={() => onPageChange("converter")}
          >
            단위변환
          </div>
        </div>
      </div>
    </nav>
  );
};

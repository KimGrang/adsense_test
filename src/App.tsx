import { useState } from "react";
import "./App.css";
import { Calculator } from "./components/Calculator";
import { Navbar } from "./components/Navbar";
import { UnitConverter } from "./components/UnitConverter";

function App() {
  const [currentPage, setCurrentPage] = useState<"calculator" | "converter">(
    "calculator"
  );

  return (
    <>
      <Navbar onPageChange={setCurrentPage} currentPage={currentPage} />
      <div className='ad-space-left'>
        <ins
          className='adsbygoogle'
          style={{ display: "block" }}
          data-ad-client='ca-pub-3508671042453521'
          data-ad-slot='YOUR_AD_SLOT_ID'
          data-ad-format='auto'
          data-full-width-responsive='true'
        ></ins>
      </div>
      <div className='App'>
        <div className='main-content'>
          {currentPage === "calculator" ? <Calculator /> : <UnitConverter />}
        </div>
      </div>
      <div className='ad-space-right'>{/* AdSense 광고 공간 */}</div>
    </>
  );
}

export default App;

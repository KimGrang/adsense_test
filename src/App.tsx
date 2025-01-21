import { useEffect, useState } from "react";
import "./App.css";
import { Calculator } from "./components/Calculator";
import { Navbar } from "./components/Navbar";
import { UnitConverter } from "./components/UnitConverter";

function App() {
  const [currentPage, setCurrentPage] = useState<"calculator" | "converter">(
    "calculator"
  );

  useEffect(() => {
    const initAds = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error("AdSense 초기화 에러:", err);
      }
    };

    const checkAdBlocker = () => {
      if (window.adsbygoogle === undefined) {
        // 광고 차단기가 감지됨
        console.log(
          "광고 차단기가 감지되었습니다. 정상적인 서비스 이용을 위해 광고 차단을 해제해주세요."
        );
      }
    };

    if (document.readyState === "complete") {
      initAds();
      setTimeout(checkAdBlocker, 2000);
    } else {
      window.addEventListener("load", initAds);
      return () => window.removeEventListener("load", initAds);
    }
  }, []);

  return (
    <>
      <Navbar onPageChange={setCurrentPage} currentPage={currentPage} />
      <div className='ad-space-left'>
        <ins
          className='adsbygoogle'
          style={{ display: "block", width: "100%", height: "100%" }}
          data-ad-client='ca-pub-3508671042453521'
          data-ad-slot='5609071436'
          data-ad-format='auto'
          data-full-width-responsive='true'
        />
      </div>
      <div className='App'>
        <div className='main-content'>
          {currentPage === "calculator" ? <Calculator /> : <UnitConverter />}
        </div>
      </div>
      <div className='ad-space-right'>
        <ins
          className='adsbygoogle'
          style={{ display: "block", width: "100%", height: "100%" }}
          data-ad-client='ca-pub-3508671042453521'
          data-ad-slot='2454895689'
          data-ad-format='auto'
          data-full-width-responsive='true'
        />
      </div>
    </>
  );
}

export default App;

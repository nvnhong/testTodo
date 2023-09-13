// react router와 관련된 설정을 할거에요.
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"; // Home 페이지 import
import Detail from "../pages/Detail"; // Detail 페이지 import

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* http://localhost:3000 에서는 <Home/> 컴포넌트가 보임 */}
        {/* / === localhost:3000 */}
        <Route path="/" element={<Home />} />

        {/* http://localhost:3000/detail/{:id} 에서는 <Detail/> 컴포넌트가 보임 */}
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

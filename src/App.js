import AssetDisposalRequest from "./asset-disposal-request/AssetDisposalRequest";
import DOA from "./doa/DOA";
import AssetRecords from "./asset-details-page/AssetRecords";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AssetDisposalRequest />} />
        <Route path="/doa" element={<DOA />} />
        <Route path="/records" element={<AssetRecords />} />
      </Routes>
    </Router>
  );
}

export default App;

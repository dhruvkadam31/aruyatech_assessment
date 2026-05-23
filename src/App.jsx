import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Listings from "./pages/Listings";
import ProductView from "./pages/ProductView";
import PlaceholderPage from "./pages/PlaceholderPage";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Dashboard />}>

          <Route index element={<Listings />} />

          <Route path="product" element={<ProductView />} />
          <Route path="bookings" element={<PlaceholderPage title="Bookings" />} />
          <Route path="revenue" element={<PlaceholderPage title="Revenue" />} />
          <Route path="commission" element={<PlaceholderPage title="Commission" />} />
          <Route path="team" element={<PlaceholderPage title="Team" />} />
          <Route path="payout" element={<PlaceholderPage title="Payout" />} />
          <Route path="audit-logs" element={<PlaceholderPage title="Audit Logs" />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
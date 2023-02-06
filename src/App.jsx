import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scene/global/Topbar";
import Sidebar from "./scene/global/LeftSidebar";
import Dashboard from "./scene/dashboard";
import Team from "./scene/team";
import Invoices from "./scene/invoices";
import Contacts from "./scene/contacts";
// import Bar from "./scene/bar";
import Form from "./scene/form";
// import Line from "./scene/line";
// import Pie from "./scene/pie";
// import FAQ from "./scene/faq";
// import Geography from "./scene/geography";
// import Calendar from "./scene/calendar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                {/*<Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/geography" element={<Geography />} /> */}
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default App;

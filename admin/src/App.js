import Navbar from "./components/Navbar/Navbar";
import Admin from "./pages/admin/Admin"
function App() {
  return (
    <div >
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element/>
      </Routes>
      </BrowserRouter> */}
      <Navbar/>
      <Admin/>
    </div>
  );
}

export default App;

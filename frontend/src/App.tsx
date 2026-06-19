import "./App.css";
import { Navbar } from "./components/layout/Navbar/Navbar";
import { Footer } from "./components/layout/Footer/Footer";
import { ShopSection } from "./components/ShopSection/ShopSection";

function App() {
  return (
    <>
      <Navbar />
      <ShopSection />
      <Footer />
    </>
  );
}

export default App;

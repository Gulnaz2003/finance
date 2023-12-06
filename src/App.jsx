import "./App.css";

import HeaderMenu from "./components/head/Header_menu";
import Main from "./components/main/main";
import Container from "./components/container/container";
import Switch from "./components/switch/switch";
import Company from "./components/company/company";
import FooterMenu from "./components/footer/footer";

const App = () => {
  return (
    <div className="header">
      <HeaderMenu />
      <Main />
      <Container />
      <Switch />
      <Company />
      <FooterMenu />
    </div>
  );
};

export default App;

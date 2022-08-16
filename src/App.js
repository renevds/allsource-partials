import Navbar from "./components/partials/Navbar/NavbarDesktop/Navbar";
import NavbarLink from "./components/partials/Navbar/NavbarLink/NavbarLink";
import Live from "./components/partials/Navbar/Live/Live";
import {useState} from "react";
import Search from "./components/partials/Navbar/Search/Search";
import PrimaryButton from "./components/partials/Button/PrimaryButton";

function App() {

  const [text, setText] = useState('');

  return (
    <div>
      <Navbar>
        <NavbarLink href='https://google.com'>Hot Takes</NavbarLink>
        <NavbarLink link='/'>Project Directory</NavbarLink>
        <NavbarLink link='/test'>Alpha Suite</NavbarLink>
        <NavbarLink call={() => setText("HELLO")}>Mint Factory</NavbarLink>
        <Live/>
        <NavbarLink call={() => setText("test")}>Pixel Map</NavbarLink>
        <Search initial="Search Projects" onSearch={results => setText(results)}/>
        <PrimaryButton onClick={() => setText("clicked")} text="Connect Wallet"/>
      </Navbar>
      {text}
    </div>
  );
}

export default App;

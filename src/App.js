import { useState } from "react";
import Post from "./components/Post";
import ButtonAppBar from "./components/Navbar";




function App() {
const[like,setlike]=useState(0)

  return (
    <div >
      <ButtonAppBar/>
      <br/>
      <Post/>



    </div>
  );
}

export default App;

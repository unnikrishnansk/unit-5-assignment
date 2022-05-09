import './App.css';
import {Button} from './components/Button'

function App() {
  return (
    <div className="App">
     <Button theme={{
       background:"rgb(37,145,254)",
       color:"white",
       border:"none"
     }
     } onClick={()=>{alert("You Clicked Primary Button")}}>Primary Button</Button>
     <Button theme={{
       background:"rgb(255,255,255))",
       color:"black",
       border:"0.5px solid rgb(169,169,169)"
     }
     } onClick={()=>{alert("You Clicked Default Button")}}>Default Button</Button>
     <Button theme={{
       background:"rgb(255,255,255))",
       color:"black",
       border:"0.5px dashed rgb(169,169,169)"
     }
     } onClick={()=>{alert("You Clicked Dashed Button")}}>Dashed Button</Button>
     <Button theme={{
       background:"rgb(255,255,255))",
       color:"black",
       border:"none"
     }
     } onClick={()=>{alert("You Clicked Text Button")}}>Text Button</Button>
     <Button theme={{
       background:"white",
       color:"rgb(37,145,254)",
       border:"none"
     }
     } onClick={()=>{alert("You Clicked Link Button")}}>Link Button</Button>
    </div>
  );
}

export default App;
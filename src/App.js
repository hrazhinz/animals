import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/layout/layout";
import {HomePage} from "./components/pages/home";
import {AnimalsList} from "./components/animalsList/animalsList";

function App() {
  return (
   <Routes>
     <Route path="/" element={<Layout/>}>
         <Route index element={<HomePage/>}/>
         <Route path="/animals/:id" element={<AnimalsList/>}/>
     </Route>
   </Routes>
  );
}

export default App;

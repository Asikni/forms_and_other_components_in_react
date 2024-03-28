import { useState } from "react";
import BasicForm from "./components/BasicForm";
import AdvancedForm from "./components/AdvancedForm";
import Checkbox from "./components/checkBoxForm"

import TagSelector from "./components/searchFilter"
import "./App.css";

function App() {
  const [view, setView] = useState("basic");
  return (
    <div className="App">
      <nav>
        <h3
          onClick={() => setView("basic")}
          style={{ color: view === "basic" ? "#fff" : "" }}
        >
          Basic
        </h3>
        <h3
          onClick={() => setView("advanced")}
          style={{ color: view === "advanced" ? "#fff" : "" }}
        >
          Advanced
        </h3>

        <h3
          onClick={() => setView("checkbox")}
          style={{ color: view === "checkbox" ? "#fff" : "" }}
        >
          Checkbox
        </h3>
        <h3
          onClick={() => setView("searchfilter")}
          style={{ color: view === "searchfilter" ? "#fff" : "" }}
        >
 Search Filter
        </h3>
      </nav>
      {view === "basic" ? <BasicForm /> : view === "advanced" ? <AdvancedForm /> : view === "checkbox" ? <Checkbox /> : <TagSelector/>}


    </div>
  );
}

export default App;

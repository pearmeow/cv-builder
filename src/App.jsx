import Edit from "./components/Edit.jsx";
import "./styles/App.css";
import { useState } from "react";

function App() {
    let [cvData, setCVData] = useState(<></>);
    let [displayEdit, setDisplayEdit] = useState(true);
    return (
        <>
            <Edit
                setCVData={setCVData}
                displayEdit={displayEdit}
                setDisplayEdit={setDisplayEdit}
            />
            {!displayEdit && <div className="cv">{cvData}</div>}
        </>
    );
}

export default App;

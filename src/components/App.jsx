import Edit from "./Edit.jsx";
import CV from "./CV.jsx";
import { useState } from "react";

function App() {
    let [cvData, setCVData] = useState(<></>);
    return (
        <>
            <Edit setCVData={setCVData} />
            <CV>{cvData}</CV>
        </>
    );
}

export default App;

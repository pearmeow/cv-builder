import Edit from "./Edit.jsx";
import "../styles/App.css";
import { useState } from "react";

function App() {
    let [cvData, setCVData] = useState(<></>);
    let [displayEdit, setDisplayEdit] = useState(true);
    function onClick() {
        setDisplayEdit(!displayEdit);
    }
    return (
        <>
            <button type="button" onClick={onClick}>
                Edit CV
            </button>
            {displayEdit && (
                <div className="edit">
                    <Edit setCVData={setCVData} />
                </div>
            )}
            <div className="cv">{cvData}</div>
        </>
    );
}

export default App;

import General from "./General.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import { useState } from "react";

export default function Edit({ setCVData }) {
    let [eduData, setEduData] = useState([
        {
            id: crypto.randomUUID(),
            school: "",
            study: "",
            start: "",
            end: "",
        },
    ]);
    function rerenderCV() {
        setCVData(<>I am hello</>);
    }
    return (
        <>
            <form>
                <Education data={eduData} setData={setEduData} />
                <button type="button" onClick={rerenderCV}>
                    Submit
                </button>
            </form>
        </>
    );
}

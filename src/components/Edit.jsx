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
        const eduDom = [<h1>Education</h1>];
        for (const data of eduData) {
            eduDom.push(
                <>
                    <p>
                        {data.study} at {data.school}
                    </p>
                    <p>
                        {data.start} to {data.end && "now"}
                    </p>
                </>,
            );
        }
        setCVData(<>{eduDom}</>);
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

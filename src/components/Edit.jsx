import General from "./General.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import { useState } from "react";

export default function Edit({ setCVData }) {
    let [genData, setGenData] = useState({
        name: "pearmeow",
        email: "meowmeow@gmail.com",
        phone: "1234567890",
    });
    let [eduData, setEduData] = useState([
        {
            id: crypto.randomUUID(),
            school: "New York University",
            study: "Bachelor's Degree of Science in CS",
            start: "2025-08-21",
            end: "2025-08-22",
            location: "Earth, The Universe",
        },
    ]);
    let [expData, setExpData] = useState([
        {
            id: crypto.randomUUID(),
            companyName: "The Pear Company",
            positionTitle: "Pear Engineer",
            responsibilities: "A whole bunch of pearing",
            start: "2069-01-01",
            end: "2000-12-31",
            location: "Sun, The Solar System",
        },
    ]);
    function rerenderCV() {
        const cvDom = [];
        cvDom.push(
            <>
                <h1>{genData.name}</h1>
                <p>
                    {genData.email} {genData.phone}
                </p>
            </>,
        );
        cvDom.push(<h1>Education</h1>);
        for (const data of eduData) {
            cvDom.push(
                <>
                    <h2>
                        {data.study} at {data.school}
                    </h2>
                    <h3>
                        {data.start} to {data.end}
                    </h3>
                    <h3>{data.location}</h3>
                </>,
            );
        }
        cvDom.push(<h1>Experience</h1>);
        for (const data of expData) {
            cvDom.push(
                <>
                    <h2>
                        {data.positionTitle} at {data.companyName}
                    </h2>
                    <h3>
                        {data.start} to {data.end || "now"}
                    </h3>
                    <h3>{data.location}</h3>
                    {data.responsibilities}
                </>,
            );
        }
        setCVData(<>{cvDom}</>);
    }
    return (
        <>
            <form>
                <General data={genData} setData={setGenData} />
                <Education data={eduData} setData={setEduData} />
                <Experience data={expData} setData={setExpData} />
                <button type="button" onClick={rerenderCV}>
                    Submit
                </button>
            </form>
        </>
    );
}

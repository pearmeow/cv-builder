import General from "./General.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import { useState } from "react";
import { format } from "date-fns";

export default function Edit({ setCVData, displayEdit, setDisplayEdit }) {
    function toggleEdit() {
        setDisplayEdit(!displayEdit);
    }
    let [genData, setGenData] = useState({
        name: "pearmeow",
        email: "meowmeow@gmail.com",
        phone: "(123)-456-7890",
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
                <h1 className="cvName">{genData.name}</h1>
                <p className="generalDetails">
                    {genData.email} {genData.phone}
                </p>
            </>,
        );
        cvDom.push(<h1>Education</h1>);
        cvDom.push(
            <div className="decorWrapper">
                <div className="decorLine"></div>
            </div>,
        );
        for (const data of eduData) {
            cvDom.push(
                <>
                    <div className="mainLine">
                        <div>{data.study}</div>
                        <div>
                            {format(new Date(data.start), "MMMM yyyy")} -{" "}
                            {data.end
                                ? format(new Date(data.end), "MMMM yyyy")
                                : "present"}
                        </div>
                    </div>
                    <div className="subLine">
                        <div>{data.school}</div>
                        <div>{data.location}</div>
                    </div>
                </>,
            );
        }
        cvDom.push(<h1>Experience</h1>);
        cvDom.push(
            <div className="decorWrapper">
                <div className="decorLine"></div>
            </div>,
        );
        for (const data of expData) {
            cvDom.push(
                <>
                    <div className="mainLine">
                        <div>{data.companyName}</div>
                        <div>
                            {format(new Date(data.start), "MMMM yyyy")} -{" "}
                            {data.end
                                ? format(new Date(data.end), "MMMM yyyy")
                                : "present"}
                        </div>
                    </div>
                    <div className="subLine">
                        <div>{data.positionTitle}</div>
                        <div>{data.location}</div>
                    </div>
                    <ul class="responsibilities">
                        <li>{data.responsibilities}</li>
                    </ul>
                </>,
            );
        }
        setCVData(<>{cvDom}</>);
    }
    return (
        <div className="formContainer">
            <div className="topButtons">
                <button type="button" className="editCV" onClick={toggleEdit}>
                    Edit CV
                </button>
                {displayEdit && (
                    <button
                        type="button"
                        className="submitCV"
                        onClick={() => {
                            rerenderCV();
                            toggleEdit();
                        }}
                    >
                        Submit
                    </button>
                )}
            </div>
            {displayEdit && (
                <>
                    <form>
                        <General data={genData} setData={setGenData} />
                        <Education data={eduData} setData={setEduData} />
                        <Experience data={expData} setData={setExpData} />
                    </form>
                </>
            )}
        </div>
    );
}

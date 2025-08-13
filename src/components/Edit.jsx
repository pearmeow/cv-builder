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
            end: "2400-12-31",
            location: "Sun, The Solar System",
        },
        {
            id: crypto.randomUUID(),
            companyName: "The Meow Company",
            positionTitle: "Meowing Meower",
            responsibilities: "Sleeping and meowing",
            start: "2029-01-01",
            end: "2300-10-31",
            location: "Supermassive Black Hole, Center of Milky Way",
        },
        {
            id: crypto.randomUUID(),
            companyName: "Gaming Gamers",
            positionTitle: "Gamer",
            responsibilities:
                "Copius amounts of gaming. Many games were played in the company of gaming gamers. On the linux operating system, proton was installed and ran many a game. There were so many games that the computers running the games were not enough. We had to simulate gaming in the mind, leading to a rise of gaming called imaginary gaming, an entirely new field of gaming that you can game on for absolutely no money.",
            start: "2029-01-01",
            end: "2000-06-21",
            location: "The Lair of Gamers, ???",
        },
        {
            id: crypto.randomUUID(),
            companyName: "Vestibulum lobortis porttitor",
            positionTitle: "Lobotomy Giver",
            responsibilities:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis eget lacus ut auctor. Nulla quis commodo nunc, nec tempor orci. Pellentesque feugiat tortor purus, nec dapibus dolor fringilla at. Proin nec erat dolor. Etiam quis laoreet felis. Fusce in metus scelerisque, semper mauris eget, aliquet metus. Fusce ullamcorper mollis cursus. Sed sed eros diam. Etiam lacinia feugiat magna sed sollicitudin. Vivamus lobortis vel eros sed molestie.",
            start: "2069-01-01",
            end: "2070-02-03",
            location: "Sussy, Chungus",
        },
        {
            id: crypto.randomUUID(),
            companyName: "The Company",
            positionTitle: "Scrap Collector",
            responsibilities: "Getting scrap for pennies",
            start: "3169-01-01",
            end: "4000-07-31",
            location: "Some star, Some galaxy",
        },
        {
            id: crypto.randomUUID(),
            companyName: "Gungeon Diver",
            positionTitle: "Gungeoneer",
            responsibilities: "Running, gunning, and rolling",
            start: "4023-01-01",
            end: "9999-09-09",
            location: "The Gungeon, Enter",
        },
        {
            id: crypto.randomUUID(),
            companyName: "I'm getting tired of boilerplate",
            positionTitle: "Boilerplate Writer",
            responsibilities: "Why didn't I use lorem ipsum?",
            start: "2000-01-01",
            end: "2000-12-31",
            location: "Tired, I am",
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

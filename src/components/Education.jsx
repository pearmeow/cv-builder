import FieldSet from "./FieldSet.jsx";
import FormField from "./FormField.jsx";
import { useState } from "react";

export default function Education() {
    let randId = crypto.randomUUID();
    let [data, setData] = useState([
        {
            id: randId,
            school: "",
            study: "",
            start: "",
            end: "",
        },
    ]);
    let [index, setIndex] = useState(0);
    let currData = data.find((elem) => elem.id === data[index].id);
    function onChange(e, id, theId) {
        setData([
            ...data.map((elem) => {
                if (elem.id !== theId) {
                    return elem;
                }
                return {
                    ...elem,
                    [id]: e.target.value,
                };
            }),
        ]);
    }

    function addData() {
        setData([
            ...data,
            {
                id: crypto.randomUUID(),
                school: "",
                study: "",
                start: "",
                end: "",
            },
        ]);
        setIndex(data.length);
    }

    function deleteData() {
        setData([
            ...data.filter((elem) => {
                return elem.id !== currData.id;
            }),
        ]);
        setIndex(Math.min(index, data.length - 2));
    }

    function nextData() {
        setIndex(index === data.length - 1 ? 0 : index + 1);
    }

    function prevData() {
        setIndex(index === 0 ? data.length - 1 : index - 1);
    }

    return (
        <FieldSet name="Education">
            <FormField
                name="school name"
                key="school"
                fieldId="school"
                onChange={onChange}
                value={currData.school}
                currId={currData.id}
            />
            <FormField
                name="title of study"
                key="study"
                fieldId="study"
                onChange={onChange}
                value={currData.study}
                currId={currData.id}
            />
            <FormField
                name="start date"
                type="date"
                key="start"
                fieldId="start"
                onChange={onChange}
                value={currData.start}
                currId={currData.id}
            />
            <FormField
                name="end date"
                type="date"
                key="end"
                fieldId="end"
                onChange={onChange}
                value={currData.end}
                currId={currData.id}
            />
            <button onClick={addData} type="button">
                Add Education
            </button>
            <button
                onClick={deleteData}
                type="button"
                disabled={data.length === 1}
            >
                Delete
            </button>
            <button onClick={nextData} type="button">
                Next
            </button>
            <button onClick={prevData} type="button">
                Previous
            </button>
            <p>
                Page {index + 1} of {data.length}
            </p>
        </FieldSet>
    );
}

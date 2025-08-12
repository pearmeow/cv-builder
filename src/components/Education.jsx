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
        setData(() => [
            ...data.filter((curr) => {
                return curr.id !== theId;
            }),
            {
                ...currData,
                [id]: e.target.value,
            },
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
        </FieldSet>
    );
}

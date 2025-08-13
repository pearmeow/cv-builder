import FieldSet from "./FieldSet.jsx";
import FormField from "./FormField.jsx";
import { useState } from "react";

export default function Experience({ data, setData }) {
    let [index, setIndex] = useState(0);
    let currData = data.find((elem) => elem.id === data[index].id);
    function onChange(e, fieldId, theId) {
        setData([
            ...data.map((elem) => {
                if (elem.id !== theId) {
                    return elem;
                }
                return {
                    ...elem,
                    [fieldId]: e.target.value,
                };
            }),
        ]);
    }

    function addData() {
        setData([
            ...data,
            {
                id: crypto.randomUUID(),
                companyName: "",
                positionTitle: "",
                responsibilities: "",
                start: "",
                end: "",
                location: "",
            },
        ]);
        setIndex(data.length);
    }

    function deleteData() {
        if (data.length === 1) {
            setData([
                {
                    id: crypto.randomUUID(),
                    companyName: "",
                    positionTitle: "",
                    responsibilities: "",
                    start: "",
                    end: "",
                    location: "",
                },
            ]);
            setIndex(0);
        } else {
            setData([
                ...data.filter((elem) => {
                    return elem.id !== currData.id;
                }),
            ]);
            setIndex(Math.min(index, data.length - 2));
        }
    }

    function nextData() {
        setIndex(index === data.length - 1 ? 0 : index + 1);
    }

    function prevData() {
        setIndex(index === 0 ? data.length - 1 : index - 1);
    }

    return (
        <FieldSet name="Experience">
            <FormField
                name="company name"
                key="companyName"
                fieldId="companyName"
                onChange={onChange}
                value={currData.companyName}
                currId={currData.id}
            />
            <FormField
                name="position title"
                key="positionTitle"
                fieldId="positionTitle"
                onChange={onChange}
                value={currData.positionTitle}
                currId={currData.id}
            />
            <FormField
                name="responsibilities"
                key="responsibilities"
                fieldId="responsibilities"
                onChange={onChange}
                value={currData.responsibilities}
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
            <FormField
                name="location"
                key="location"
                fieldId="location"
                onChange={onChange}
                value={currData.location}
                currId={currData.id}
            />
            <div className="buttons">
                <button onClick={addData} type="button">
                    Add
                </button>
                <button onClick={deleteData} type="button">
                    Delete
                </button>
                <button onClick={nextData} type="button">
                    Next
                </button>
                <button onClick={prevData} type="button">
                    Previous
                </button>
            </div>
            <div className="page">
                Experiences page {index + 1} of {data.length}
            </div>
        </FieldSet>
    );
}

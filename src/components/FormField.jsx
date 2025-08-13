import { useState } from "react";

export default function FormField({
    name,
    type = "text",
    fieldId,
    onChange,
    value,
    currId,
}) {
    const [id, _] = useState(crypto.randomUUID());
    return (
        <p>
            <label htmlFor={id}>{name}: </label>
            <input
                id={id}
                type={type}
                name={name}
                onChange={(e) => onChange(e, fieldId, currId)}
                value={value}
            />
        </p>
    );
}

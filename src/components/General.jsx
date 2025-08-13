import FieldSet from "./FieldSet.jsx";
import FormField from "./FormField.jsx";

export default function General({ data, setData }) {
    function onChange(e, fieldId) {
        setData({
            ...data,
            [fieldId]: e.target.value,
        });
    }
    function onClick() {
        setData({
            name: "",
            email: "",
            phone: "",
        });
    }
    return (
        <FieldSet name="General">
            <FormField
                name="name"
                fieldId="name"
                onChange={onChange}
                value={data.name}
            />
            <FormField
                name="email"
                fieldId="email"
                onChange={onChange}
                value={data.email}
            />
            <FormField
                name="phone number"
                fieldId="phone"
                type="tel"
                onChange={onChange}
                value={data.phone}
            />
            <div className="buttons">
                <button type="button" onClick={onClick}>
                    Delete
                </button>
            </div>
        </FieldSet>
    );
}

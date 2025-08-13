import FieldSet from "./FieldSet.jsx";
import FormField from "./FormField.jsx";

export default function General() {
    return (
        <FieldSet name="General">
            <FormField name="name" />
            <FormField name="email" />
            <FormField name="phone number" />
        </FieldSet>
    );
}

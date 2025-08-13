import FieldSet from "./FieldSet.jsx";
import FormField from "./FormField.jsx";

export default function Experience() {
    return (
        <FieldSet name="Experience">
            <FormField name="company name" />
            <FormField name="start date" type="date" />
            <FormField name="end date" type="date" />
        </FieldSet>
    );
}

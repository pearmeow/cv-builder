export default function FieldSet({ name, children }) {
    return (
        <fieldset>
            <legend>{name}</legend>
            {children}
        </fieldset>
    );
}
